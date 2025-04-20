import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface CheckboxItemProps extends FormItemProps {

/**
 * See {@link isc.CheckboxItem.checkedDescription CheckboxItem.checkedDescription}.
 */
checkedDescription?: string;

/**
 * See {@link isc.CheckboxItem.checkedImage CheckboxItem.checkedImage}.
 */
checkedImage?: string;

/**
 * See {@link isc.CheckboxItem.printBooleanBaseStyle CheckboxItem.printBooleanBaseStyle}.
 */
printBooleanBaseStyle?: string;

/**
 * See {@link isc.CheckboxItem.showValueIconOver CheckboxItem.showValueIconOver}.
 */
showValueIconOver?: boolean;

/**
 * See {@link isc.CheckboxItem.printUnsetImage CheckboxItem.printUnsetImage}.
 */
printUnsetImage?: string;

/**
 * See {@link isc.CheckboxItem.valueIconWidth CheckboxItem.valueIconWidth}.
 */
valueIconWidth?: number;

/**
 * See {@link isc.CheckboxItem.showNullAsTrue CheckboxItem.showNullAsTrue}.
 */
showNullAsTrue?: boolean;

/**
 * See {@link isc.CheckboxItem.setValueMap() CheckboxItem.setValueMap()}.
 */
setValueMap?: Function;

/**
 * See {@link isc.CheckboxItem.showLabel CheckboxItem.showLabel}.
 */
showLabel?: boolean;

/**
 * See {@link isc.CheckboxItem.uncheckedImage CheckboxItem.uncheckedImage}.
 */
uncheckedImage?: string;

/**
 * See {@link isc.CheckboxItem.partialSelectedImage CheckboxItem.partialSelectedImage}.
 */
partialSelectedImage?: string;

/**
 * See {@link isc.CheckboxItem.booleanBaseStyle CheckboxItem.booleanBaseStyle}.
 */
booleanBaseStyle?: string;

/**
 * See {@link isc.CheckboxItem.defaultValue CheckboxItem.defaultValue}.
 */
defaultValue?: boolean;

/**
 * See {@link isc.CheckboxItem.showValueIconError CheckboxItem.showValueIconError}.
 */
showValueIconError?: boolean;

/**
 * See {@link isc.CheckboxItem.editProxyConstructor CheckboxItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.CheckboxItem.showUnsetImage CheckboxItem.showUnsetImage}.
 */
showUnsetImage?: boolean;

/**
 * See {@link isc.CheckboxItem.printCheckedImage CheckboxItem.printCheckedImage}.
 */
printCheckedImage?: string;

/**
 * See {@link isc.CheckboxItem.titleStyle CheckboxItem.titleStyle}.
 */
titleStyle?: string;

/**
 * See {@link isc.CheckboxItem.printPartialSelectedImage CheckboxItem.printPartialSelectedImage}.
 */
printPartialSelectedImage?: string;

/**
 * See {@link isc.CheckboxItem.getValueAsBoolean() CheckboxItem.getValueAsBoolean()}.
 */
getValueAsBoolean?: Function;

/**
 * See {@link isc.CheckboxItem.sizeToCheckboxImage CheckboxItem.sizeToCheckboxImage}.
 */
sizeToCheckboxImage?: boolean;

/**
 * See {@link isc.CheckboxItem.unsetImage CheckboxItem.unsetImage}.
 */
unsetImage?: string;

/**
 * See {@link isc.CheckboxItem.partialSelectedDescription CheckboxItem.partialSelectedDescription}.
 */
partialSelectedDescription?: string;

/**
 * See {@link isc.CheckboxItem.allowEmptyValue CheckboxItem.allowEmptyValue}.
 */
allowEmptyValue?: boolean;

/**
 * See {@link isc.CheckboxItem.valueMap CheckboxItem.valueMap}.
 */
valueMap?: Object | string[];

/**
 * See {@link isc.CheckboxItem.textBoxStyle CheckboxItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.CheckboxItem.showValueIconDisabled CheckboxItem.showValueIconDisabled}.
 */
showValueIconDisabled?: boolean;

/**
 * See {@link isc.CheckboxItem.showValueIconDown CheckboxItem.showValueIconDown}.
 */
showValueIconDown?: boolean;

/**
 * See {@link isc.CheckboxItem.uncheckedDescription CheckboxItem.uncheckedDescription}.
 */
uncheckedDescription?: string;

/**
 * See {@link isc.CheckboxItem.valueIconHeight CheckboxItem.valueIconHeight}.
 */
valueIconHeight?: number;

/**
 * See {@link isc.CheckboxItem.pendingStatusChanged() CheckboxItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.CheckboxItem.labelAsTitle CheckboxItem.labelAsTitle}.
 */
labelAsTitle?: boolean;

/**
 * See {@link isc.CheckboxItem.width CheckboxItem.width}.
 */
width?: number;

/**
 * See {@link isc.CheckboxItem.unsetDescription CheckboxItem.unsetDescription}.
 */
unsetDescription?: string;

/**
 * See {@link isc.CheckboxItem.printUncheckedImage CheckboxItem.printUncheckedImage}.
 */
printUncheckedImage?: string;

/**
 * See {@link isc.CheckboxItem.showTitle CheckboxItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.CheckboxItem.showNullAsTrueIf CheckboxItem.showNullAsTrueIf}.
 */
showNullAsTrueIf?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CheckboxItem wraps the SmartClient widget class
 * {@link isc.CheckboxItem CheckboxItem} for React, allowing you to import
 * CheckboxItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class CheckboxItem extends FormItem {
    props: AsComponentXML<CheckboxItemProps>;
}
