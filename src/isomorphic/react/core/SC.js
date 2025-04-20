// For React 18+ switch the RDClient import below to import from 'react-dom/client' to avoid a
// (harmless) console warning when SC.render() below is called.  It's not present in React 17.
import React    from 'react';
import ReactDOM from 'react-dom';
import RDClient from 'react-dom';

import { ILogicalComponent, ReactComponent } from 'smartclient-lgpl/react';

let isc = window.isc;

export class SC {

    static get REACT_MAJOR_VERSION() {
        return parseInt(React.version);
    }

    // custom classes

    static customClasses = {};

    static importClass(className) {
        let classObj = this.customClasses[className];
        if (!classObj) {
            isc.Log.logWarn(`No custom class '${className}' found`);
            return;
        }
        return classObj;
    }

    static defineClass(className, superclass, propertyTypes) {
        const superclassName = superclass ? superclass.name : null,
              scClassName = ReactComponent._getSCClassName(className),
              scSuperName = ReactComponent._getSCClassName(superclassName)
        ;

        // define the class in SC if it doesn't exist
        if (!isc.isA.Class(isc[scClassName])) {
            isc.defineClass(scClassName, scSuperName);
        }

        if (!superclass) superclass = ILogicalComponent;
        else {
            if (!isc.isA.Function(superclass) || !superclass.IS_CLASS) {
                throw new Error("Base class provided for custom class " + className +
                    " doesn't appear to be valid.  Have you imported or defined it?");
            }
        }

        let newClass = class extends superclass {
            static ISC_CLASS_NAME = scClassName;

            static IS_CLASS = true;

            static PROPERTY_TYPES  =  propertyTypes || {};
        };

        Object.defineProperty (newClass, 'name', {value: className});
        ReactComponent.registerClass(className, newClass);
        this.customClasses[className] = newClass;

        return newClass;
    }

    // rendering support

    static rootMap = {};
    static nRoots = 0;

    static getRenderTarget() {
        return isc.React.getRenderTarget();
    }

    static render(code, target) {
        if (this.REACT_MAJOR_VERSION < 18) return ReactDOM.render(code, target);

        // remember the React root associated with each target
                if (!target.id) target.id = "_iscRoot_" + ++this.nRoots;

        let targetRoot = this.rootMap[target.id];
        if (!targetRoot) {
            targetRoot = this.rootMap[target.id] = RDClient.createRoot(target);
        }

        // For React 18+ render asynchronously if so configured by SC Framework
        if (isc.React.canRenderAsync()) return targetRoot.render(code);

        // otherwise, try to emulate React 17 behavior rendering synchronously
        ReactDOM.flushSync(() => {targetRoot.render(code);});
        return targetRoot;
    }

}

isc.React.version = SC.REACT_MAJOR_VERSION;
