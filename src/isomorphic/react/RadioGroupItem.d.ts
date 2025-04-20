import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface RadioGroupItemProps extends FormItemProps {

/**
 * See {@link isc.RadioGroupItem.editProxyConstructor RadioGroupItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.RadioGroupItem.wrap RadioGroupItem.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.RadioGroupItem.fillHorizontalSpace RadioGroupItem.fillHorizontalSpace}.
 */
fillHorizontalSpace?: boolean;

/**
 * See {@link isc.RadioGroupItem.allowEmptyValue RadioGroupItem.allowEmptyValue}.
 */
allowEmptyValue?: boolean;

/**
 * See {@link isc.RadioGroupItem.itemProperties RadioGroupItem.itemProperties}.
 */
itemProperties?: RadioItem;

/**
 * See {@link isc.RadioGroupItem.valueHoverHTML() RadioGroupItem.valueHoverHTML()}.
 */
valueHoverHTML?: Function;

/**
 * See {@link isc.RadioGroupItem.setValueDisabled() RadioGroupItem.setValueDisabled()}.
 */
setValueDisabled?: Function;

/**
 * See {@link isc.RadioGroupItem.checkboxItemProperties RadioGroupItem.checkboxItemProperties}.
 */
checkboxItemProperties?: CheckboxItem;

/**
 * See {@link isc.RadioGroupItem.disabledValues RadioGroupItem.disabledValues}.
 */
disabledValues?: string[];

/**
 * See {@link isc.RadioGroupItem.setTextBoxStyle() RadioGroupItem.setTextBoxStyle()}.
 */
setTextBoxStyle?: Function;

/**
 * See {@link isc.RadioGroupItem.textBoxStyle RadioGroupItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.RadioGroupItem.pendingStatusChanged() RadioGroupItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.RadioGroupItem.useNativeRadioItems RadioGroupItem.useNativeRadioItems}.
 */
useNativeRadioItems?: boolean;

/**
 * See {@link isc.RadioGroupItem.vertical RadioGroupItem.vertical}.
 */
vertical?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RadioGroupItem wraps the SmartClient widget class
 * {@link isc.RadioGroupItem RadioGroupItem} for React, allowing you to import
 * RadioGroupItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class RadioGroupItem extends FormItem {
    props: AsComponentXML<RadioGroupItemProps>;
}
