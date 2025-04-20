import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SimpleTypeProps {

/**
 * See {@link isc.SimpleType.getGroupValue() SimpleType.getGroupValue()}.
 */
getGroupValue?: Function;

/**
 * See {@link isc.SimpleType.parseInput() SimpleType.parseInput()}.
 */
parseInput?: Function;

/**
 * See {@link isc.SimpleType.readOnlyDisplay SimpleType.readOnlyDisplay}.
 */
readOnlyDisplay?: string;

/**
 * See {@link isc.SimpleType.groupingModes SimpleType.groupingModes}.
 */
groupingModes?: ValueMap;

/**
 * See {@link isc.SimpleType.inheritsFrom SimpleType.inheritsFrom}.
 */
inheritsFrom?: string;

/**
 * See {@link isc.SimpleType.updateAtomicValue() SimpleType.updateAtomicValue()}.
 */
updateAtomicValue?: Function;

/**
 * See {@link isc.SimpleType.name SimpleType.name}.
 */
name?: string;

/**
 * See {@link isc.SimpleType.validOperators SimpleType.validOperators}.
 */
validOperators?: string[];

/**
 * See {@link isc.SimpleType.readOnlyEditorType SimpleType.readOnlyEditorType}.
 */
readOnlyEditorType?: string;

/**
 * See {@link isc.SimpleType.canFilter SimpleType.canFilter}.
 */
canFilter?: boolean;

/**
 * See {@link isc.SimpleType.editorType SimpleType.editorType}.
 */
editorType?: string;

/**
 * See {@link isc.SimpleType.valueMap SimpleType.valueMap}.
 */
valueMap?: ValueMap;

/**
 * See {@link isc.SimpleType.defaultGroupingMode SimpleType.defaultGroupingMode}.
 */
defaultGroupingMode?: string;

/**
 * See {@link isc.SimpleType.getGroupTitle() SimpleType.getGroupTitle()}.
 */
getGroupTitle?: Function;

/**
 * See {@link isc.SimpleType.shortDisplayFormatter() SimpleType.shortDisplayFormatter()}.
 */
shortDisplayFormatter?: Function;

/**
 * See {@link isc.SimpleType.editFormatter() SimpleType.editFormatter()}.
 */
editFormatter?: Function;

/**
 * See {@link isc.SimpleType.getAtomicValue() SimpleType.getAtomicValue()}.
 */
getAtomicValue?: Function;

/**
 * See {@link isc.SimpleType.compareValues() SimpleType.compareValues()}.
 */
compareValues?: Function;

/**
 * See {@link isc.SimpleType.canEdit SimpleType.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.SimpleType.exportFormat SimpleType.exportFormat}.
 */
exportFormat?: string;

/**
 * See {@link isc.SimpleType.filterEditorType SimpleType.filterEditorType}.
 */
filterEditorType?: string;

/**
 * See {@link isc.SimpleType.fieldProperties SimpleType.fieldProperties}.
 */
fieldProperties?: DataSourceField;

/**
 * See {@link isc.SimpleType.getGroupingModes() SimpleType.getGroupingModes()}.
 */
getGroupingModes?: Function;

/**
 * See {@link isc.SimpleType.defaultOperator SimpleType.defaultOperator}.
 */
defaultOperator?: string;

/**
 * See {@link isc.SimpleType.normalDisplayFormatter() SimpleType.normalDisplayFormatter()}.
 */
normalDisplayFormatter?: Function;

/**
 * See {@link isc.SimpleType.format SimpleType.format}.
 */
format?: string;

/**
 * See {@link isc.SimpleType.validators SimpleType.validators}.
 */
validators?: Validator[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SimpleType wraps the non-rendered SmartClient class
 * {@link isc.SimpleType SimpleType} for React, allowing you to import
 *  SimpleType for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SimpleType extends ILogicalComponent {
    props: AsComponentXML<SimpleTypeProps>;
}
