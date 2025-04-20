import React from 'react';
import { diff } from '../utils/Diff';
import { TypeTables } from './TypeTables';
import * as _ReactSC from 'smartclient-lgpl/react';

const typeTables = new TypeTables;
let ReactSC = _ReactSC;
let isc = window.isc;

export class ReactComponent extends React.Component {
    IS_A_VIRTUAL_COMPONENT = false;

    REACT_PROPS = ["recreateOnReactComponentUpdate", "_recreate"];
    INTERNAL_PROPS = ["_isChild", "_isCreated"];

    beforeConstructor() {}
    afterConstructor() {}
    
    beforeRender() {}
    
    beforeComponentDidMount() {}
    afterComponentDidMount() {}

    beforeComponentDidUpdate() {}
    afterComponentDidUpdate() {}
    
    beforeComponentWillUnmount() {}
    afterComponentWillUnmount() {}
    
    constructor(props) {
        super(props);

        this.beforeConstructor();
        
        this.cmp = null;
        this.childRefs = [];
        this.attribRefs = {};
        this.state = {...props};
        
        //Assign functions to the react component: afterComponentDidMount etc..
        for(let key in props) {
            if( 'function' === typeof props[key]) {
                this[key] = props[key];
            }
        }

        this.elRef = React.createRef();
        
        this.afterConstructor();
    }
 
    render(){
        this.beforeRender();
        
        const validationMessage = this.validate();
        
        if( validationMessage ) {
            throw new Error(validationMessage);
        }

        // calculate autoDraw; can't mutate this.props so set on component
        if( this.props && this.props.autoDraw == null ) {
            this.autoDraw = this.componentIsNotAChild;
        }

        let renderedChildren = this.getChildrenWithProps();
        if( renderedChildren.length ) {
            return <div ref = {this.elRef}>{ renderedChildren }</div>;
        }
        
        if( this.componentIsNotAChild ) {
            return <div ref = {this.elRef} / > ;
        }
        
        return null;
    }

    getSCComponent() {
        return this.cmp;
    }
    
    componentDidMount() {
        this.beforeComponentDidMount();
        
        this._createSCInstance();

        this.afterComponentDidMount();
    }
    
    componentDidUpdate(prevProps, prevState) {
        this.beforeComponentDidUpdate();

        if (this._shouldRecreateSCInstanceOnComponentUpdate()) {
            this._recreateSCInstanceInHierarchy();
        } else {
            let changedOptions = diff(prevState, this.state);
            this._updateSCInstance(changedOptions);
        }
        
        this.afterComponentDidUpdate();
    }
    
    componentWillUnmount() {
        this.beforeComponentWillUnmount();
        
        if( this.cmp && 'function' == typeof this.cmp.destroy) {
            this.cmp.destroy();
        }
        
        this.afterComponentWillUnmount();
    }
    
    get componentIsNotAChild() {
        return !this.props._isChild;
    }

    _shouldRecreateSCInstanceOnComponentUpdate() {
        return this.props.recreateOnReactComponentUpdate || this.props._recreate;
    }
    
    // recreate widget/class instance, preserving hierarchy
    _recreateSCInstanceInHierarchy() {
        // for a config, just run the normal create logic 
        if (!isc.isA.Canvas(this.cmp)) {
            return this._createSCInstance();
        }

        let memberIndex,
            parent = this.cmp.getParentCanvas(),
            isRecreateRoot = !this.props._recreate;
        if (isRecreateRoot && isc.isA.Layout(parent)) {
            memberIndex = parent.getMemberNumber(this.cmp);
        }

        let baseConfig = this.getComponentBaseConfig();

        // remove from parent and destroy canvas
        if (parent) {
            parent.removeChild(this.cmp);
            delete baseConfig.htmlElement;
        }
        this.cmp.destroy();

        // recreate wrapper's SC instance
        this._createSCInstance(baseConfig);

        if (isRecreateRoot && parent) {
            if (memberIndex == null) parent.addChild(this.cmp);
            else parent.addMember(this.cmp, memberIndex);
        }
    }

    // create the SmartClient widget/class instance
    _createSCInstance(baseConfig) {
        let config = this.getComponentConfigWithChildren(baseConfig);

        // default autoDraw from calculated value to avoid double draw
        if (this.autoDraw != null) config.autoDraw = this.autoDraw;
        
        if( this.componentIsNotAChild ) {
            this.cmp = this.__createSCInstance(this.constructor.ISC_CLASS_NAME, config);
        } else {
            this.cmp = Object.assign(config, {_isCreated: false});
        }
    }

    __createSCInstance(className, config) {
        for (let prop of this.REACT_PROPS) delete config[prop];

        if (!config.children && config.childComponents) {
            config.children = config.childComponents;
        }
        return isc[className].create(config);
    }

    // update the SmartClient widget/class instance
    _updateSCInstance(changedOptions) {
        for (let key of Object.keys(changedOptions)) {
            let value = changedOptions[key];
            let setterFnName = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
            
            if ('function' == typeof this.cmp[setterFnName]) {
                this.cmp[setterFnName](value);
            }
        }
    }

    // does this component represent a modal SmartClient Window
        _isModalWindow() {
        if (!(this instanceof ReactSC.Window)) return false;

        // look for definitive "isModal" declared in JSX
        let undef, modalProp = this.props.isModal;
        if (undef !== modalProp) {
            return modalProp != "false" && modalProp != false;
        }

        // otherwise, look up the framework prototype default
        let scClassName = this.constructor.ISC_CLASS_NAME;
        if (!isc[scClassName]) return;

        let classPrototype = isc[scClassName].getPrototype();
        return classPrototype && classPrototype.isModal;
    }
    
    getComponentBaseConfig() {
        let config = {};
        Object.assign( config, this.props, {
            _isCreated: true, __react: true
        });
        if (this.componentIsNotAChild && !this._isModalWindow()) {
            config.htmlElement = this.elRef.current;
        }
        return config;
    }
    
    getChildrenWithProps() {
        return this._appendRenderedChildren(this, [], []);
    }

    _guessObjectTypeName(object) {
        if (isc.DataSource && isc.isA.DataSource(object) && isc.isAn.Instance(object)) {
            return object.getID();
        } else if (isc.isA.Class(object)) {
            return object.getClassName();
        }
    }

    _reportMissingChildType(parentType, childType) {
        let parentDescription = isc.isA.Function(parentType) ?
            `Class '${parentType.name}'` : `property '${parentType}'`;

        let errorMessage = "Can't resolve child under " + parentDescription;

        let typeName = this._guessObjectTypeName(childType);
        if (typeName) errorMessage += ` of apparent type '${typeName}'`;

        errorMessage += ".  Did you forget to import the child class?";
        throw new TypeError(errorMessage);        
    }

    __shouldCreateReactRef(item, component) {
        if (!isc.isAn.Object(item) || !item.type) return false;

        if (isc.isA.Function(item.type)) {
            return this._shouldCreateSCInstance(item.type.name);
        }
        // report potential missing imports
        if (!isc.isA.String(item.type)) {
            this._reportMissingChildType(component.type || component.constructor, item.type);
        }
    }

    _shouldCreateReactRef(item, component) {
        return this.__shouldCreateReactRef(item, component) || isc.isAn.Array(item) &&
            item.filter(element => this.__shouldCreateReactRef(element, component)).length;
    }

    _createReactRef(child, childLocator, list) {
        if (React.isValidElement(child)) {
            const ref = React.createRef();

            let extraChildProps = {
                key: childLocator.join(), _isChild: true, ref: ref
            };
            if (this.props.recreateOnReactComponentUpdate) {
                extraChildProps._recreate = true;
            }
            list.push(React.cloneElement(child, extraChildProps));
            this._registerReactRef(childLocator, ref);
        }
    }

    // recursive method to build a list of rendered children (and create React refs)
    _appendRenderedChildren(component, list, locator) {
        let childLocator;

        for (const propertyName in component.props) {
            if (propertyName == "children") continue;
            
            let values = component.props[propertyName];
            if (this._shouldCreateReactRef(values, component)) {
                if (!childLocator) childLocator = locator.duplicate();

                if (!isc.isAn.Array(values)) values = [values];
                childLocator[locator.length] = propertyName;

                values.forEach( (value, index) => {
                    childLocator[locator.length + 1] = index;
                    if (this.__shouldCreateReactRef(value, component)) {
                        this._createReactRef(value, childLocator, list);
                    } else if (isc.isAn.Object(value)) {
                        this._appendRenderedChildren(value, list, childLocator);
                    }
                });
            }
        }

        let children = component.props.children;
        if (!children) return list;

        if (!childLocator) childLocator = locator.duplicate();
        if (!isc.isAn.Array(children)) children = [children];
        childLocator.length = locator.length;

        // loop through the immediate children, creating refs where we need a SC instance
        for (let i = 0; i < children.length; i++) {
            childLocator[locator.length] = i;
            let child = children[i];

            if (this.__shouldCreateReactRef(child, component)) {
                this._createReactRef(child, childLocator, list);
            } else if (isc.isAn.Object(child)) {
                this._appendRenderedChildren(child, list, childLocator);
            }
        }

        return list;
    }

    getComponentConfigWithChildren(baseConfig) {
        if (!baseConfig) baseConfig = this.getComponentBaseConfig();
        for (let prop of this.INTERNAL_PROPS) delete baseConfig[prop];
        return this._getComponentConfigWithChildren(baseConfig, this.constructor.name, []);
    }

    _containsReactDeclaration(value) {
        if (isc.isAn.Array(value)) {
            return value.filter(element => this._containsReactDeclaration(element)).length;
        }
        return isc.isAn.Object(value) && isc.isAn.Function(value.type);
    }

    _getComponentConfigWithChildren(config, typeName, locator) {
        let childLocator = locator.duplicate();

        for (const propertyName in config) {
            if (propertyName == "children") continue;

            let value = config[propertyName];
            if (!this._containsReactDeclaration(value)) continue;

            childLocator[locator.length] = propertyName;
            let desc = this._getClassPropertyDescriptor(typeName, propertyName);
            if (desc) {
                config[propertyName] = this.getPropertyValue(
                    propertyName, {children: value}, desc, childLocator, true);
            }
        }

        // delete React "children" prop; SC uses "childComponents"
        let children = config.children;
        if (!children) return this.setupReactTypes(config, typeName);            
        delete config.children;

        if (!isc.isAn.Array(children)) children = [children];

        // handle simplified syntax, without property names; assumes property
        children = this._canonicalizeChildren(children, typeName, locator);

        let repeatedProps = {};
        for (let i = 0; i < children.length; i++) {
            childLocator[locator.length] = i;
            let child = children[i],
                desc = this._getClassPropertyDescriptor(typeName, child.type, true);
            if (desc) {
                let childConfig = this.getPropertyValue(child.type, child.props, desc,
                                                        childLocator);

                                let pushProp = repeatedProps[child.type];
                if (desc.isArray && !config[child.type] && !isc.isAn.Array(childConfig)) {
                    pushProp = repeatedProps[child.type] = true;
                    config[child.type] = [];
                }
                if (pushProp) config[child.type].add(childConfig);
                else          config[child.type]   = childConfig;

            // property not in type table, so it's assumed to be string data
            } else if (child.props && isc.isA.String(child.props.children)) {
                config[child.type] = child.props.children;
            }
        }

        // convert the record fields as needed, using the component's field definitions
        if (config.fields && config.data) {
            this.applyTypesToComponentRecords(config.data, config.fields);
        }

        // convert the values object of a form, applying types from the formItems
        if (this.isClassASubclassOf(typeName, "DynamicForm") && config.fields && config.values)
        {
            this.applyTypesToComponentRecords(config.values, config.fields);
        }

        // convert FacetChart metric facet to numbers or dates
        if (typeName == "FacetChart" && config.data) {
            this._applyMetricFacetDataType(config);
        }

        return this.setupReactTypes(config, typeName);            
    }
    
    getPropertyValue(propName, propObj, typeDescriptor, locator, inline) {
        let isProps = typeDescriptor.isProperties,
            isArray = typeDescriptor.isArray,
            propValue = isArray ? [] : null,
            childLocator = locator.duplicate()
        ;
        /**
         * Must have a local copy of the props.
         * Later we need to delete children key from the props and React doesn't allow to do this
         */
        let localProps;        
        if (typeDescriptor.deepCopy) {
            localProps = this._cloneValue(propObj);
            if( localProps[propName] ) return localProps[propName];
        } else {
            localProps = {};
            Object.assign(localProps, propObj);
        }

        // if no JSX children are present, assume attributes define child properties
        if (!localProps.children && Object.keys(localProps).length) {
            localProps = this.setupReactTypes(localProps, typeDescriptor.className);
            let propClass = !isProps && typeDescriptor.className;
            if (this._shouldCreateSCInstance(propClass)) {
                localProps = this.__createSCInstance(propClass, localProps);
            }
            return localProps;
        }

        // handle special groups of children such as value maps, or arrays of primitive types
        let specialValue = this._handleSpecialChildren(propName, typeDescriptor,
                                                       localProps.children, childLocator);
        if (specialValue) return specialValue;

        if( !Array.isArray(localProps.children) ){
            localProps.children = localProps.children ? [localProps.children] : [];
        }
        
        if (Object.keys(localProps).length > 1) {
            throw new Error("Property " + propName + " declared with both child elements " +
                "and inline properties; this is potentially conflicting, and not supported");
        }

        //console.log('this.props', this.props)

        let isObject;
        localProps.children.forEach( (item, index)  => {
            // skip processing conditional children excluded from the JSX tree
            if (!item && ReactSC[typeDescriptor.className] || item === false) {
                return;

            // item may be a scalar if called for attribute declaration
            } else if (inline && !isc.isAn.Object(item)) {
                propValue.push(item);
                return;
            }

            childLocator[locator.length] = index;

            let instance = this;

            let ref, className, isRendered;
            if (!isProps) ref = this._getReactRef(childLocator);
            if (ref) {
                instance = ref.current || instance;
                isRendered = ref.current._isCreated;
                className = ref.current.constructor.ISC_CLASS_NAME;
            }

            let childConfig = Object.assign({}, item.props);
            if (!isRendered && ref && ref.current.cmp) {
                childConfig = ref.current.cmp;
            }
            
            let assignAsAttrib;

            // child is a declared type from the type table
            if (isc.isA.Function(item.type)) {
                this._getComponentConfigWithChildren(
                    childConfig, item.type.name, childLocator);
                
            // child has a primitive value, not a declared type
            } else if (isc.isA.String(childConfig.children)) {
                childConfig = childConfig.children;

                assignAsAttrib = this._isItemObjectAttribute(item, typeDescriptor);
                if (assignAsAttrib && !isObject) {
                    isObject = true;
                    propValue = {};
                }

                // handle array of children even if not officially typed as array
                if (propValue != null && !isc.isAn.Array(propValue) && !isObject) {
                    propValue = [propValue];
                    isArray = true; 
                }
            } else if (isc.isA.DataSource(item.type)) {
                var id = item.type.getID();
                throw new Error("Declaration of " + id + " for property '" + propName +
                                "' was not imported properly and appears to be a schema");
            } else {
                throw new Error("Syntax error parsing the JSX for property '" + propName +
                                "'");
            }

            // handle type inserted during canonicalization; no React component for it
            if (!className && !isProps && item._synthetic) className = item.type.name;

            if( isc[className] && isc[className].create) {
                childConfig = instance.__createSCInstance(className, childConfig);
                if (this.afterCreate) {
                    childConfig = this.afterCreate(propName, item, childConfig);
                }
            }

            if (isObject) {
                if (assignAsAttrib) propValue[item.type] = childConfig;
            } else {
                if (isArray) propValue.push(childConfig);
                else         propValue = childConfig;
            }
        });
        
        return propValue;
    }

    _isItemObjectAttribute(item, typeDescriptor) {
        if (!typeDescriptor.isProperties) {
            var clazz = ReactSC[typeDescriptor.className];
            if (clazz && clazz.IS_CLASS) return false;
        }
        return item.type != "value" && item.type[0] >= 'a' && item.type[0] <= 'z';
    }

    _handleSpecialChildren(propName, typeDescriptor, entries, locator) {
        let isArray = isc.isAn.Array(entries);
        if (!isArray) entries = entries ? [entries] : [];

        switch (typeDescriptor.className) {
        case "Object":
            if (propName == "dynamicProperties") {
                return this._handleDynamicProperties(entries, locator);
            }
            break;
        case "ValueMap":
            let map = {};
            for (const entry of entries) {
                const props = entry.props;
                if (!props) continue;

                const value = props.children,
                      key = props.id || props.ID;
                if (isc.isA.String(key) && isc.isA.String(value)) {
                    map[key] = value;
                }
            }
            if (!isc.isAn.emptyObject(map)) return map;
            break;
        }

        let result = [];
        for (let i = 0 ; i < entries.length; i++) {
            let value = entries[i];

            // can't handle non-strings; bail out
            if (!isc.isA.String(value)) return;

            let converted = this.applyRecordFieldType(value, typeDescriptor.className);
            result[i] = converted != null ? converted : value;
        }

        return isArray ? result : result[0];
    }

    // the dynamicProperties object has a special format
    _handleDynamicProperties(entries, locator) {
        let childLocator = locator.duplicate();

        let propsObj = {};
        for (let i = 0; i < entries.length; i++) {
            childLocator[locator.length] = i;

            let entry = entries[i];
            if (entry.type != "property") continue;

            let props = entry.props;
            if (!props.name) continue;

            // first handle the simple cases - dataPath, formula, template
            for (let simpleProp of ["dataPath", "formula", "template"]) {
                if (props[simpleProp]) {
                    let simpleObj = propsObj[props.name] = {};
                    simpleObj[simpleProp] = props[simpleProp];
                    break;
                }
            }
            if (propsObj[props.name]) continue;

            // complicated cases with element children - trueWhen and valueFrom
            let children = props.children;
            if (children) {
                switch (children.type) {
                case "trueWhen": // trueWhen will contain a criteria
                    let criteriaDecl = children.props && children.props.children,
                        criteriaType = criteriaDecl.type,
                        isAdvanced = isc.isA.Function(criteriaType) &&
                                     criteriaType.name == "AdvancedCriteria"
                    ;
                    if (criteriaType == "criteria" || isAdvanced) {
                        let critRule = propsObj[props.name] = {trueWhen: {}};
                        Object.assign(critRule.trueWhen, criteriaDecl.props);

                        if (isAdvanced) {
                            this._getComponentConfigWithChildren(critRule.trueWhen,
                                criteriaType.name, childLocator);
                        }
                    }
                    break;

                case "valueFrom": // valueFrom will contain a series of cases
                    let rules = [],
                        fromCases = children.props && children.props.children;
                    if (!isc.isAn.Array(fromCases)) fromCases = [fromCases];

                    this._handleValueFromEntries(rules, fromCases, childLocator);
                    if (rules.length) propsObj[props.name] = {valueFrom: rules};
                    break;
                }
            }
        }

        return propsObj;
    }

    // parse the cases into a JavaScript list of rules
    _handleValueFromEntries(rules, fromCases, locator) {
        let childLocator = locator.duplicate();

        for (var i = 0; i < fromCases.length; i++) {
            childLocator[locator.length] = i;

            let fromCase = fromCases[i];
            if (fromCase.type != "case") continue;

            // each case must declare a value, dataPath, formula, or template
            let rule = {},
                props = fromCase.props;
            for (let simpleProp of ["value", "dataPath", "formula", "template"]) {
                if (!props[simpleProp]) continue;
                rule[simpleProp] = props[simpleProp];

                // each case may optionally declare a criteria as a child element
                let children = props.children;
                if (children && children.type == "criteria") {
                    let criteriaProps = children.props;

                    let criteria = rule.criteria = {};
                    Object.assign(criteria, criteriaProps);
                    if (!criteria.children) break;

                    // allow for an AdvancedCriteria, with child criteria elements
                    if (Object.keys(criteria).length == 1) {
                        let childType = criteria.children.type;
                        if (isc.isA.Function(childType) &&
                            childType.name == "AdvancedCriteria")
                        {
                            criteria = rule.criteria = criteria.children.props;
                        } else {
                            delete rule.criteria;                            
                            break;
                        }
                    }

                    this._getComponentConfigWithChildren(criteria, "AdvancedCriteria",
                                                         childLocator);
                }
                break;
            }

            rules.add(rule);
        }
    }
 
    // transform the type to another or apply the proper type to attributes
    setupReactTypes(config, typeName) {
        // apply any special per-type transformations to config
        if (typeName != "FormItem" && typeName.endsWith("Item")) {
            this.setupFormItemChildren(config, typeName);

        } else switch (typeName) {
            case "Point":
            config = [parseFloat(config.x),
                      parseFloat(config.y)];
            break;
            case "AdvancedCriteria":
            if (!config._constructor) {
                config._constructor = "AdvancedCriteria";
            }
            break;
        }

        // convert string attributes to proper type
        return this.applyPropertyTypes(config, typeName);
    }

    setupFormItemChildren(obj, typeName) {
        let clazz;
        for (let currType = typeName; currType; currType = clazz._getParentClassName()) {
            if (currType == "FormItem") {
                obj.editorType = ReactComponent._getSCClassName(typeName);
                return;
            }
            clazz = ReactSC[currType];
        }
    }

    applyPropertyTypes(obj, typeName) {
        for (let key in obj) {
            let value = obj[key];

            // if value must be an array, then split it into an array of strings to convert
            if (isc.isA.String(value) && this._hasOnlyArrayPropertyDescriptors(typeName, key))
            {
                if (value) value = value.split();
            }

            // property value is an array; we'll need different logic to convert the elements
            if (isc.isAn.Array(value)) this.applyPropertyTypesToArray(value, typeName, key);

            // nothing to do unless it's a string
            if (!isc.isA.String(value)) continue;

            if (value === "true" || value === "false") { // boolean strings
                if (this._getNumericPropertyType(typeName, key, true)) {
                    obj[key] = value === "true";
                    continue;
                }
            }

            if (this._getNumericPropertyType(typeName, key)) {
                                // if (!this._getStringPropertyType(typeName, key)) {
                //     obj[key] = parseFloat(value);
                // } else {
                    if (value == "NaN") obj[key] = NaN;
                    else {
                        let numberValue = parseFloat(value);
                        if (!isNaN(numberValue) && numberValue == value) {
                            obj[key] = numberValue;
                        }
                    }
                //}
                if (!isc.isA.String(obj[key])) continue;
            }

            if (this._getClassPropertyDescriptor(typeName, key, null, "Date")) {
                let dateValue = this._parseDate(value);
                if (!isNaN(dateValue)) {
                    obj[key] = dateValue;
                    continue;
                }
            }
        }
        return obj;
    }

    applyPropertyTypesToArray(values, typeName, key) {
        let descriptor = this._getClassPropertyDescriptor(typeName, key) || {},
            primitiveRecord = typeTables.PRIMITIVE_TYPES[descriptor.className],
            isNumber  = primitiveRecord && primitiveRecord.isNumber,
            isBoolean = primitiveRecord && primitiveRecord.isBoolean,
            isDate = descriptor.className == "Date"
        ;
        
        for (var i = 0; i < values.length; i++) {
            let value = values[i];

            // nothing to do unless it's a string
            if (!isc.isA.String(value)) continue;
        
            if (value === "true" || value === "false") { // boolean strings
                if (isBoolean) values[i] = value === "true";

            } else if (!isNaN(value)) { // string can be parsed into number
                if (isNumber) values[i] = parseFloat(value);

            } else {
                if (isDate) {
                    let converted = this._parseDate(value);
                    if (!isNaN(converted)) values[i] = converted;
                }
            }
        }
    }

    applyTypesToComponentRecords(records, fields) {
        if (!isc.isAn.Array(records)) records = [records];

        // loop through each record, and each field in the record, and convert it
        for (let record of records) {
            for (let field of fields) {
                let fieldType = field.type;

                // if type is not set, try to deduce type assuming field is a formItem
                if (!fieldType && isc.isA.Class(isc[field.editorType])) {
                    let prototype = isc[field.editorType].getPrototype();
                    if (prototype) fieldType = prototype.defaultType;
                }

                let converted = this.applyRecordFieldType(record[field.name], fieldType);
                if (converted != null) record[field.name] = converted;
            }
        }
    }

    // convert metric facet values into floats or dates, as appropriate
    _applyMetricFacetDataType(facetChart) {
                let chartProto = isc.FacetChart.getPrototype(),
            valueProperty = facetChart.valueProperty || chartProto.valueProperty,
            targetFields = [valueProperty]
        ;
        let metricFacet = facetChart.facets && facetChart.facets.find("id", "metric");
        if (metricFacet && metricFacet.values) {
            metricFacet.values.map(facet => targetFields.add(facet.id));
        }

        let data = facetChart.data;

        // iterate across the facet metric values that we want to convert
        convertFields:
        for (let i = 0; i < targetFields.length; i++) {
            let fieldName = targetFields[i],
                datatype = null,
                values = [];
            // iterate across the records in the data
            for (let j = 0; j < data.length; j++) {
                let record = data[j];

                // continue to next facet metric if there is no property value
                if (!record.hasOwnProperty(fieldName)) continue convertFields;
                let value = record[fieldName];

                // convert the facet metric value; save the type if successful
                let converted = NaN;
                if (datatype) switch (datatype) {
                    case "date":
                       converted = this._parseDate(value);
                       break;
                    case "float":
                       converted = parseFloat(value);
                       break;
                } else {
                    converted = parseFloat(value);
                    if (isNaN(converted)) {
                        converted = this._parseDate(value);
                        if (!isNaN(converted)) datatype = "date";
                    } else datatype = "float";
                }

                // continue to next facet metric if conversion fails
                if (isNaN(converted)) continue convertFields;

                values[j] = converted;
            }

            // if every record was converted, then install the converted values
            for (let j = 0; j < data.length; j++) data[j][fieldName] = values[j];
        }
    }

    applyRecordFieldType(value, fieldType) {
        if (!isc.isA.String(value)) return;

        switch (fieldType) {
            case "Date":
                return this._parseDate(value);
                break;
            case "boolean":
            case "Boolean":
                return value === "true";
                break;
            case "int":
            case "float":
            case "Float":
            case "double":
            case "Double":
            case "number":
            case "Number":
            case "Integer":
                return parseFloat(value);
                break;
        }
    }

    // central point for controlling how dates in JSX are parsed
    _parseDate(stringDate) {
        if (isc.React.parseDatesWithDateUtil) {
            let converted = isc.DateUtil.parseInput(stringDate);
            return converted ? converted : new Date(NaN);
        } else return new Date(stringDate);
    }
    
    _canonicalizeChildren(children, typeName, locator) {
        let componentRef = this._getReactRef(locator),
            lastChild, newChildren = [], observedProps = {},
            component = componentRef ? componentRef.current : this
        ;

        // React reference locators may need to be updated
        let oldLocator = locator.duplicate(),
            newLocator = locator.duplicate()
        ;

        for (let i = 0; i < children.length; i++) {
            let newIndex = null,
                child = children[i];
            oldLocator[locator.length] = i;

            // if child.type is a function, the element is a React class instance
            if (isc.isA.Function(child.type)) {
                let childType = child.type.name;

                let childProp = component._getPropertyNameForContainedClass(childType);
                if (!childProp) {
                    throw new Error("couldn't resolve " + childType + " child in " + typeName);
                }

                // handle first element that should go under property name tag
                if (!lastChild || lastChild.type != childProp) {
                    if (observedProps[childProp]) {
                        throw new Error("duplicate " + childType + " child in " + typeName);
                    }
                    lastChild = {type: childProp, props:{children: child}};
                    newChildren.add(lastChild);
                    newIndex = 0;

                // additional elements that should go under property name tag
                } else { 
                    let props = lastChild.props;
                    if (!isc.isAn.Array(props.children)) props.children = [props.children];
                    newIndex = props.children.length;
                    props.children.add(child);
                }

                observedProps[childProp] = true;

            // otherwise, the element is just a property name tag
            } else {

                // expand compact form of JSX property declaration
                                if (this._shouldInsertTypeDeclaration(typeName, child)) {
                    let childCopy = {};
                    Object.assign(childCopy, child);
                    child = childCopy;

                    // find the class associated with the property to be expanded
                    let desc = this._getClassPropertyDescriptor(typeName, child.type);

                    // insert object representing declaration of class
                                        child.props = {
                        children: {
                            type: ReactSC[desc.className],
                            props: child.props,
                            _synthetic: true
                        }
                    }
                    newIndex = 0;
                }

                newChildren.add(child);
                observedProps[child.type] = true;
            }

            // configure the new locator to point to element
            newLocator.length = oldLocator.length;
            newLocator[locator.length] = newChildren.length - 1;
            if (newIndex != null) newLocator.push(newIndex);

            // if locator has changed, move the React ref node
            if (newLocator.join() != oldLocator.join()) {
                this._moveReactRefNode(oldLocator, newLocator);
            }
        }

        return newChildren;
    }

    _shouldInsertTypeDeclaration(typeName, child) {
        let children = child.props.children;
        if (!children) return;

        let outerDesc = this._getClassPropertyDescriptor(typeName, child.type);
        if (!outerDesc) return;

        let propName = isc.isAn.Array(children) ? children[0].type : children.type;
        if (propName == "value") return;

        let className = outerDesc.className;
        return isc.isA.String(propName) && propName[0] >= 'a' && propName[0] <= 'z' &&
                   (this._getClassPropertyDescriptor(className, propName) ||
                    this._getNumericPropertyType(className, propName));
    }

    _shouldCreateSCInstance(className) {
        let classDesc = ReactSC[className];
        if (!classDesc || !classDesc.IS_CLASS) return false;

        while (className) {
            if (className == "FormItem") return false;
            className = ReactSC[className]._getParentClassName();
        }
        return true;
    }

    isClassASubclassOf(testClassName, baseClassName) {
        for (let clazz = ReactSC[testClassName]; clazz; clazz = ReactSC[testClassName]) {
            if (testClassName == baseClassName) return true;
            testClassName = clazz._getParentClassName();
        }
    }

    // guess the propertyName of a contained element based on its class
    __getPropertyNameForContainedClass(clazz, childClassName) {
        const childTypeMapping = clazz.CHILD_TYPE_MAPPING;
        if (!childTypeMapping) return;

        // iterate up the class hierarchy starting at the specified child class
        while (childClassName) {
            let matchingProp = childTypeMapping[childClassName] || childTypeMapping.Any;
            if (matchingProp) return matchingProp;

            let childClass = ReactSC[childClassName];
            if (!childClass) {
                throw new Error("Found 'compact' syntax where property names for types " +
                    "must be inferred but we know nothing of type '" + childClassName + "'");
            }

            let parentClassName = childClass._getParentClassName();
            if (childClassName == "Canvas" || childClassName == "FormItem" ||
                parentClassName == "DBCField")
            {
                break;
            }
            childClassName = parentClassName;
        }
    }

    // this method was factored out to allow overriding in subclasses (e.g. ITabSet)
    _getPropertyNameForContainedClass(className) {
        for (let clazz = this.constructor; clazz; clazz = clazz._getParentClass()) {
            let matchingProp = this.__getPropertyNameForContainedClass(clazz, className);
            if (matchingProp) return matchingProp;
        }
    }

    _getClassPropertyDescriptor(className, propertyName, useDefault, targetClasses) {
        for (let clazz = ReactSC[className]; clazz; clazz = clazz._getParentClass()) {
            let compoundPropMap = clazz.PROPERTY_TYPES;
            if (compoundPropMap && compoundPropMap[propertyName]) {
                let propTypes = compoundPropMap[propertyName];

                // normalize the type descriptor to have array form
                if (!isc.isAn.Array(propTypes)) propTypes = [propTypes];

                // return the first declared class except for specific classes
                let returnType;
                for (let propType of propTypes) {
                    if (typeof propType != "object") continue;

                    // remap certain classes reported in type descriptors, such as "Criteria"
                                        if (!targetClasses) switch (propType.className) {
                    case "Criteria":
                        propType = Object.assign({}, propType);
                        propType.className = "AdvancedCriteria";
                        break;
                    }

                    // the first declared type has priority
                    if (!returnType) {
                        returnType = propType;
                        continue;
                    }

                    // prioritize some classes by default
                    let propClass = propType.className;
                    if (!targetClasses) switch (propClass) {
                    case "ValueMap":
                        returnType = propType;
                        break;
                    }

                    // allow searching property type for a specific class or set of classes
                    if (isc.isAn.Array(targetClasses) ? targetClasses.includes(propClass) :
                                                        targetClasses       == propClass)
                    {
                        returnType = propType;
                    }

                }
                return returnType;
            }
        }

        // support storing JSX objects wherever needed to minimize JS declarations
        let match = propertyName.match(/^([a-z][A-Za-z0-9]*)_[A-Za-z0-9]+/);
        if (match) {
            let scClassName = match[1].charAt(0).toUpperCase() + match[1].slice(1);
            return {className: ReactComponent._getReactClassName(scClassName)};
        }

        if (useDefault && ReactSC[className]) return {
            className: "Object", 
            isArray: !propertyName.endsWith("Properties") &&
                     !propertyName.endsWith("Defaults") &&
                      propertyName.endsWith("s"),
            defaultDescriptor: true
        };
    }

    _hasOnlyArrayPropertyDescriptors(className, propertyName) {
        let clazz = ReactSC[className],
            typeMap = clazz.PROPERTY_TYPES;
        if (!typeMap) return;

        let propTypes = typeMap[propertyName];
        if (!propTypes) return;

        // normalize the type descriptor to have array form
        if (!isc.isAn.Array(propTypes)) propTypes = [propTypes];

        for (let propType of propTypes) {
            if (typeof propType != "object" || !propType.isArray) {
                return false;
            }
        }
        return true;
    }

    _getStringPropertyType(className, propertyName) {
        for (let clazz = ReactSC[className]; clazz; clazz = clazz._getParentClass()) {
            let propertyMap = clazz.PROPERTY_TYPES;
            if (propertyMap) {
                let propTypes = propertyMap[propertyName];
                if (!propTypes) continue;

                // normalize the property type bindings to have array form
                if (!isc.isAn.Array(propTypes)) propTypes = [propTypes];

                let returnType;
                for (let propType of propTypes) {
                    // support array types; just process like other types for now
                    if (propType.className) propType = propType.className;

                    if (propType == "Any" || propType == "String") return propType;

                    let primitiveType = typeTables.PRIMITIVE_TYPES[propType];
                    if (primitiveType && !primitiveType.isNumber && !primitiveType.isBoolean) {
                        if (!returnType) returnType = propType;
                    }
                }
                return returnType;
            }
        }
    }

    __getNumberTypeDescriptor(descriptor, numberType) {
        if (!descriptor) descriptor = {};

        switch (numberType) {
        case "int":
        case "Integer":
            descriptor.isInteger = true;
            break;
        case "float":
        case "Float":
        case "double":
        case "Double":
        case "number":
        case "Number":
            descriptor.isFloat = true;
            break;
        }
        switch (numberType) {
        case "Float":
        case "Double":
        case "Number":
        case "Integer":                                
            descriptor.nullOK = true;
        }

        return descriptor;
    }

    // support dynamic lookup of numeric or boolean-based class properties
    _getNumericPropertyType(className, propertyName, lookForBoolean) {
        for (let clazz = ReactSC[className]; clazz; clazz = clazz._getParentClass()) {
            let numericPropMap = clazz.PROPERTY_TYPES;
            if (numericPropMap) {
                let propTypes = numericPropMap[propertyName];
                if (!propTypes) continue;

                // normalize the property type bindings to have array form
                if (!isc.isAn.Array(propTypes)) propTypes = [propTypes];

                let returnType;
                for (let propType of propTypes) {
                    // support array types; just process like other types for now
                    if (propType.className) propType = propType.className;

                    switch (propType) {
                    case "boolean":
                    case "Boolean":
                        if (lookForBoolean && (!returnType || returnType == "boolean")) {
                            returnType = propType;
                        }
                        break;
                    case "int":
                    case "float":
                    case "Float":
                    case "double":
                    case "Double":
                    case "number":
                    case "Number":
                    case "Integer":
                        if (!lookForBoolean) {
                            returnType = this.__getNumberTypeDescriptor(returnType, propType);
                        }
                        break;
                    case "Any":
                        return propType;
                    }
                }
                return returnType;
            }
        }

        switch (className) {
            case "DVField":
            case "DetailViewerField":
            return this._getNumericPropertyType("FormItem", propertyName, lookForBoolean);
        case "Tree":
            return this._getNumericPropertyType("ResultTree", propertyName, lookForBoolean);
        }
    }

    // handle storage of React refs by locator

    _registerReactRef(locator, ref) {
        this._buildReactRefNode(locator, ref, true);;
    }

    _buildReactRefNode(locator, payload, isRef) {
        let node;

        let childRefs  = this.childRefs;
        let attribRefs = this.attribRefs;

        for (let i = 0; i < locator.length; i++) {
            let index = locator[i],
                container = Number.isInteger(index) ? childRefs : attribRefs
            ;
            if (!isRef && i + 1 == locator.length) {
                container[index] = payload;

            } else {
                node = container[index];
                if (!node) {
                    node = container[index] = {childRefs: [], attribRefs: {}};
                }
                childRefs = node.childRefs;
                attribRefs = node.attribRefs;
            }
        }
        if (isRef && node) node.ref = payload;
    }

    _getReactRef(locator) {
        let node = this._getReactRefNode(locator);
        if (node) return node.ref;
    }

    _getReactRefNode(locator, remove) {
        let node = this, container;
        for (let i = 0; i < locator.length && node; i++) {
            let index = locator[i];
            container = Number.isInteger(index) ? node.childRefs : node.attribRefs;
            node = container[index];
        }
        if (remove && node && container) {
            delete container[locator.last()];
        }
        if (node != this) return node;
    }

    _moveReactRefNode(oldLocator, newLocator) {
        let node = this._getReactRefNode(oldLocator, true);
        if (node) this._buildReactRefNode(newLocator, node);
    }

    _cloneObject(object) {
	    let output = {};
	    for (let key in object) {
            let value = object[key];
            // only recursively clone values that are themselves simple objects (no prototype)
            if (value instanceof Object && Object.getPrototypeOf(value) === Object.prototype) {
		        output[key] = this._cloneValue(object[key]);
            } else {
                output[key] = object[key];
            }
	    }
	    return output;
    }

    _cloneArray(object) {
	    let output = [];
	    for (let element of object) {
            output.push(this._cloneValue(element));
	    }
	    return output;
    }

    _cloneValue(value) {
        // preserve undef vs null (eg slot values)
        let undef;
        if (value === undef) return undef;
	    if (value ==  null)  return null;

        // just return immutable types
	    if (isc.isA.String(value) || isc.isA.Boolean(value) ||
	        isc.isA.Number(value) || isc.isA.Function(value)) return value;

        // copy mutable types
	    if (isc.isA.Date(value)) return new Date(value.getTime());
	
	    if (isc.isAn.Array(value)) return this._cloneArray(value);

        // classes and class instances can't be cloned so just return them
        if (isc.isA.Class(value) || isc.isAn.Instance(value)) return value;

        // otherwise, treat as object and clone
	    return this._cloneObject(value);
    }


    // Static methods on ReactComponent

    static _getReactClassName(scClassName) {
        return typeTables.SC_TYPE_ALIASES[scClassName] || 
               typeTables.SC_TYPE_PREFIX + scClassName;
    }

    // it's assumed the alias table will be small so no efficiency issue
    static _getSCClassName(reactClassName) {
        if (!reactClassName) return;

        // check for an explicit alias to the supplied React class name
        const aliases = typeTables.SC_TYPE_ALIASES;
        for (let scClassName in aliases) {
            if (aliases[scClassName] == reactClassName) return scClassName;
        }
        // no alias found, so we can just remove the prefix and we're done
        return reactClassName.substring(typeTables.SC_TYPE_PREFIX.length);
    }

    static registerClass(className, classObject) {
                if(ReactSC === _ReactSC) {
            ReactSC = Object.assign({}, _ReactSC);
        }
        ReactSC[className] = classObject;
    }

    static _getParentClass() {
        let parentClass = Object.getPrototypeOf(this);
        if (parentClass) switch (parentClass.name) {
            case "IBaseComponent":
            case "ILogicalComponent":
            case "ReactComponent":
            break;
            default:
            return parentClass;
        }
    }

    static _getParentClassName(classObj) {
        let parentClass = this._getParentClass();
        return parentClass ? parentClass.name : null;
    }
}

