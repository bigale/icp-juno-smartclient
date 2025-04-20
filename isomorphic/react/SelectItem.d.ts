import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SelectItemProps extends FormItemProps {

/**
 * See {@link isc.SelectItem.fetchDisplayedFieldsOnly SelectItem.fetchDisplayedFieldsOnly}.
 */
fetchDisplayedFieldsOnly?: boolean;

/**
 * See {@link isc.SelectItem.showFocused SelectItem.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.SelectItem.pickerExitButtonTitle SelectItem.pickerExitButtonTitle}.
 */
pickerExitButtonTitle?: string;

/**
 * See {@link isc.SelectItem.pickButtonWidth SelectItem.pickButtonWidth}.
 */
pickButtonWidth?: number;

/**
 * See {@link isc.SelectItem.pickListFields SelectItem.pickListFields}.
 */
pickListFields?: ListGridField[];

/**
 * See {@link isc.SelectItem.filterLocally SelectItem.filterLocally}.
 */
filterLocally?: boolean;

/**
 * See {@link isc.SelectItem.pickerNavigationBarProperties SelectItem.pickerNavigationBarProperties}.
 */
pickerNavigationBarProperties?: NavigationBar;

/**
 * See {@link isc.SelectItem.defaultDynamicValue() SelectItem.defaultDynamicValue()}.
 */
defaultDynamicValue?: Function;

/**
 * See {@link isc.SelectItem.showHintInField SelectItem.showHintInField}.
 */
showHintInField?: boolean;

/**
 * See {@link isc.SelectItem.optionFilterContext SelectItem.optionFilterContext}.
 */
optionFilterContext?: DSRequest;

/**
 * See {@link isc.SelectItem.pickerClearButtonTitle SelectItem.pickerClearButtonTitle}.
 */
pickerClearButtonTitle?: string;

/**
 * See {@link isc.SelectItem.pickButtonSrc SelectItem.pickButtonSrc}.
 */
pickButtonSrc?: string;

/**
 * See {@link isc.SelectItem.valueField SelectItem.valueField}.
 */
valueField?: string;

/**
 * See {@link isc.SelectItem.cachePickListResults SelectItem.cachePickListResults}.
 */
cachePickListResults?: boolean;

/**
 * See {@link isc.SelectItem.getValueFieldName() SelectItem.getValueFieldName()}.
 */
getValueFieldName?: Function;

/**
 * See {@link isc.SelectItem.textBoxStyle SelectItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.SelectItem.pickListPlacement SelectItem.pickListPlacement}.
 */
pickListPlacement?: string | Canvas | string;

/**
 * See {@link isc.SelectItem.getSelectedRecords() SelectItem.getSelectedRecords()}.
 */
getSelectedRecords?: Function;

/**
 * See {@link isc.SelectItem.addUnknownValues SelectItem.addUnknownValues}.
 */
addUnknownValues?: boolean;

/**
 * See {@link isc.SelectItem.dataSetType SelectItem.dataSetType}.
 */
dataSetType?: string;

/**
 * See {@link isc.SelectItem.openOnSpace SelectItem.openOnSpace}.
 */
openOnSpace?: boolean;

/**
 * See {@link isc.SelectItem.dataArrived() SelectItem.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.SelectItem.rootNodeId SelectItem.rootNodeId}.
 */
rootNodeId?: string | number;

/**
 * See {@link isc.SelectItem.hiliteTextColor SelectItem.hiliteTextColor}.
 */
hiliteTextColor?: string;

/**
 * See {@link isc.SelectItem.fetchData() SelectItem.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.SelectItem.setValue() SelectItem.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.SelectItem.initialSort SelectItem.initialSort}.
 */
initialSort?: SortSpecifier[];

/**
 * See {@link isc.SelectItem.singleClickFolderToggle SelectItem.singleClickFolderToggle}.
 */
singleClickFolderToggle?: boolean;

/**
 * See {@link isc.SelectItem.defaultToFirstOption SelectItem.defaultToFirstOption}.
 */
defaultToFirstOption?: boolean;

/**
 * See {@link isc.SelectItem.escapeHTML SelectItem.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.SelectItem.pickerIconWidth SelectItem.pickerIconWidth}.
 */
pickerIconWidth?: number;

/**
 * See {@link isc.SelectItem.hiliteColor SelectItem.hiliteColor}.
 */
hiliteColor?: string;

/**
 * See {@link isc.SelectItem.pickerClearButtonProperties SelectItem.pickerClearButtonProperties}.
 */
pickerClearButtonProperties?: NavigationButton;

/**
 * See {@link isc.SelectItem.optionDataSource SelectItem.optionDataSource}.
 */
optionDataSource?: DataSource | string;

/**
 * See {@link isc.SelectItem.pickerExitButtonProperties SelectItem.pickerExitButtonProperties}.
 */
pickerExitButtonProperties?: NavigationButton;

/**
 * See {@link isc.SelectItem.iconPlacement SelectItem.iconPlacement}.
 */
iconPlacement?: string;

/**
 * See {@link isc.SelectItem.showOptionsFromDataSource SelectItem.showOptionsFromDataSource}.
 */
showOptionsFromDataSource?: boolean;

/**
 * See {@link isc.SelectItem.multipleAppearance SelectItem.multipleAppearance}.
 */
multipleAppearance?: string;

/**
 * See {@link isc.SelectItem.controlStyle SelectItem.controlStyle}.
 */
controlStyle?: string;

/**
 * See {@link isc.SelectItem.updateControlOnOver SelectItem.updateControlOnOver}.
 */
updateControlOnOver?: boolean;

/**
 * See {@link isc.SelectItem.pickTreeConstructor SelectItem.pickTreeConstructor}.
 */
pickTreeConstructor?: string;

/**
 * See {@link isc.SelectItem.saveOnEnter SelectItem.saveOnEnter}.
 */
saveOnEnter?: boolean;

/**
 * See {@link isc.SelectItem.autoFetchData SelectItem.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.SelectItem.pickListProperties SelectItem.pickListProperties}.
 */
pickListProperties?: ListGrid;

/**
 * See {@link isc.SelectItem.pickerIconStyle SelectItem.pickerIconStyle}.
 */
pickerIconStyle?: string;

/**
 * See {@link isc.SelectItem.pickListCriteria SelectItem.pickListCriteria}.
 */
pickListCriteria?: Criteria;

/**
 * See {@link isc.SelectItem.progressiveLoading SelectItem.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.SelectItem.defaultValue SelectItem.defaultValue}.
 */
defaultValue?: any;

/**
 * See {@link isc.SelectItem.displayField SelectItem.displayField}.
 */
displayField?: string;

/**
 * See {@link isc.SelectItem.getDisplayFieldName() SelectItem.getDisplayFieldName()}.
 */
getDisplayFieldName?: Function;

/**
 * See {@link isc.SelectItem.sortField SelectItem.sortField}.
 */
sortField?: string | string[] | number;

/**
 * See {@link isc.SelectItem.canSelectText SelectItem.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.SelectItem.specialValues SelectItem.specialValues}.
 */
specialValues?: ValueMap;

/**
 * See {@link isc.SelectItem.allowEmptyValue SelectItem.allowEmptyValue}.
 */
allowEmptyValue?: boolean;

/**
 * See {@link isc.SelectItem.height SelectItem.height}.
 */
height?: number;

/**
 * See {@link isc.SelectItem.pickListConstructor SelectItem.pickListConstructor}.
 */
pickListConstructor?: string;

/**
 * See {@link isc.SelectItem.updateTextBoxOnOver SelectItem.updateTextBoxOnOver}.
 */
updateTextBoxOnOver?: boolean;

/**
 * See {@link isc.SelectItem.editProxyConstructor SelectItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.SelectItem.useClientFiltering SelectItem.useClientFiltering}.
 */
useClientFiltering?: boolean;

/**
 * See {@link isc.SelectItem.clickMaskMode SelectItem.clickMaskMode}.
 */
clickMaskMode?: string;

/**
 * See {@link isc.SelectItem.showPicker() SelectItem.showPicker()}.
 */
showPicker?: Function;

/**
 * See {@link isc.SelectItem.optionOperationId SelectItem.optionOperationId}.
 */
optionOperationId?: string;

/**
 * See {@link isc.SelectItem.emptyDisplayValue SelectItem.emptyDisplayValue}.
 */
emptyDisplayValue?: string;

/**
 * See {@link isc.SelectItem.pendingStatusChanged() SelectItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.SelectItem.setValueMap() SelectItem.setValueMap()}.
 */
setValueMap?: Function;

/**
 * See {@link isc.SelectItem.emptyPickListMessage SelectItem.emptyPickListMessage}.
 */
emptyPickListMessage?: string;

/**
 * See {@link isc.SelectItem.textMatchStyle SelectItem.textMatchStyle}.
 */
textMatchStyle?: string;

/**
 * See {@link isc.SelectItem.separateValuesListProperties SelectItem.separateValuesListProperties}.
 */
separateValuesListProperties?: ListGrid;

/**
 * See {@link isc.SelectItem.separateSpecialValues SelectItem.separateSpecialValues}.
 */
separateSpecialValues?: boolean;

/**
 * See {@link isc.SelectItem.pickerIconHeight SelectItem.pickerIconHeight}.
 */
pickerIconHeight?: number;

/**
 * See {@link isc.SelectItem.getSelectedRecord() SelectItem.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.SelectItem.showPickerIcon SelectItem.showPickerIcon}.
 */
showPickerIcon?: boolean;

/**
 * See {@link isc.SelectItem.allowMultiCharSearch SelectItem.allowMultiCharSearch}.
 */
allowMultiCharSearch?: boolean;

/**
 * See {@link isc.SelectItem.openOnDownArrow SelectItem.openOnDownArrow}.
 */
openOnDownArrow?: boolean;

/**
 * See {@link isc.SelectItem.pickerIconSrc SelectItem.pickerIconSrc}.
 */
pickerIconSrc?: string;

/**
 * See {@link isc.SelectItem.hiliteOnFocus SelectItem.hiliteOnFocus}.
 */
hiliteOnFocus?: boolean;

/**
 * See {@link isc.SelectItem.showOver SelectItem.showOver}.
 */
showOver?: boolean;

/**
 * See {@link isc.SelectItem.pickButtonHeight SelectItem.pickButtonHeight}.
 */
pickButtonHeight?: number;

/**
 * See {@link isc.SelectItem.autoOpenTree SelectItem.autoOpenTree}.
 */
autoOpenTree?: string;

/**
 * See {@link isc.SelectItem.multiple SelectItem.multiple}.
 */
multiple?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SelectItem wraps the SmartClient widget class
 * {@link isc.SelectItem SelectItem} for React, allowing you to import
 * SelectItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class SelectItem extends FormItem {
    props: AsComponentXML<SelectItemProps>;
}
