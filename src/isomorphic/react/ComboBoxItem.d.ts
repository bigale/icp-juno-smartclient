import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ComboBoxItemProps extends TextItemProps {

/**
 * See {@link isc.ComboBoxItem.pickerExitButtonProperties ComboBoxItem.pickerExitButtonProperties}.
 */
pickerExitButtonProperties?: NavigationButton;

/**
 * See {@link isc.ComboBoxItem.pendingTextBoxStyle ComboBoxItem.pendingTextBoxStyle}.
 */
pendingTextBoxStyle?: string;

/**
 * See {@link isc.ComboBoxItem.editProxyConstructor ComboBoxItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ComboBoxItem.completeOnEnter ComboBoxItem.completeOnEnter}.
 */
completeOnEnter?: boolean;

/**
 * See {@link isc.ComboBoxItem.sortField ComboBoxItem.sortField}.
 */
sortField?: string | string[] | number;

/**
 * See {@link isc.ComboBoxItem.separateValuesListProperties ComboBoxItem.separateValuesListProperties}.
 */
separateValuesListProperties?: ListGrid;

/**
 * See {@link isc.ComboBoxItem.filterLocally ComboBoxItem.filterLocally}.
 */
filterLocally?: boolean;

/**
 * See {@link isc.ComboBoxItem.useClientFiltering ComboBoxItem.useClientFiltering}.
 */
useClientFiltering?: boolean;

/**
 * See {@link isc.ComboBoxItem.getEnteredValue() ComboBoxItem.getEnteredValue()}.
 */
getEnteredValue?: Function;

/**
 * See {@link isc.ComboBoxItem.pickListCriteria ComboBoxItem.pickListCriteria}.
 */
pickListCriteria?: Criteria;

/**
 * See {@link isc.ComboBoxItem.displayField ComboBoxItem.displayField}.
 */
displayField?: string;

/**
 * See {@link isc.ComboBoxItem.pickerExitButtonTitle ComboBoxItem.pickerExitButtonTitle}.
 */
pickerExitButtonTitle?: string;

/**
 * See {@link isc.ComboBoxItem.emptyPickListMessage ComboBoxItem.emptyPickListMessage}.
 */
emptyPickListMessage?: string;

/**
 * See {@link isc.ComboBoxItem.searchStringTooShortMessage ComboBoxItem.searchStringTooShortMessage}.
 */
searchStringTooShortMessage?: string;

/**
 * See {@link isc.ComboBoxItem.pickerSaveButtonProperties ComboBoxItem.pickerSaveButtonProperties}.
 */
pickerSaveButtonProperties?: NavigationButton;

/**
 * See {@link isc.ComboBoxItem.optionOperationId ComboBoxItem.optionOperationId}.
 */
optionOperationId?: string;

/**
 * See {@link isc.ComboBoxItem.shouldGenerateExactMatchCriteria() ComboBoxItem.shouldGenerateExactMatchCriteria()}.
 */
shouldGenerateExactMatchCriteria?: Function;

/**
 * See {@link isc.ComboBoxItem.getClientPickListData() ComboBoxItem.getClientPickListData()}.
 */
getClientPickListData?: Function;

/**
 * See {@link isc.ComboBoxItem.addUnknownValues ComboBoxItem.addUnknownValues}.
 */
addUnknownValues?: boolean;

/**
 * See {@link isc.ComboBoxItem.maskSaveLiterals ComboBoxItem.maskSaveLiterals}.
 */
maskSaveLiterals?: boolean;

/**
 * See {@link isc.ComboBoxItem.getPickListFilterCriteria() ComboBoxItem.getPickListFilterCriteria()}.
 */
getPickListFilterCriteria?: Function;

/**
 * See {@link isc.ComboBoxItem.pickerSearchFieldProperties ComboBoxItem.pickerSearchFieldProperties}.
 */
pickerSearchFieldProperties?: TextItem;

/**
 * See {@link isc.ComboBoxItem.showHintInField ComboBoxItem.showHintInField}.
 */
showHintInField?: boolean;

/**
 * See {@link isc.ComboBoxItem.hasAdvancedCriteria() ComboBoxItem.hasAdvancedCriteria()}.
 */
hasAdvancedCriteria?: Function;

/**
 * See {@link isc.ComboBoxItem.fetchDisplayedFieldsOnly ComboBoxItem.fetchDisplayedFieldsOnly}.
 */
fetchDisplayedFieldsOnly?: boolean;

/**
 * See {@link isc.ComboBoxItem.defaultDynamicValue() ComboBoxItem.defaultDynamicValue()}.
 */
defaultDynamicValue?: Function;

/**
 * See {@link isc.ComboBoxItem.minimumSearchLength ComboBoxItem.minimumSearchLength}.
 */
minimumSearchLength?: number;

/**
 * See {@link isc.ComboBoxItem.allowExpressions ComboBoxItem.allowExpressions}.
 */
allowExpressions?: boolean;

/**
 * See {@link isc.ComboBoxItem.defaultValue ComboBoxItem.defaultValue}.
 */
defaultValue?: any;

/**
 * See {@link isc.ComboBoxItem.initialSort ComboBoxItem.initialSort}.
 */
initialSort?: SortSpecifier[];

/**
 * See {@link isc.ComboBoxItem.optionDataSource ComboBoxItem.optionDataSource}.
 */
optionDataSource?: DataSource | string;

/**
 * See {@link isc.ComboBoxItem.pickerSaveButtonTitle ComboBoxItem.pickerSaveButtonTitle}.
 */
pickerSaveButtonTitle?: string;

/**
 * See {@link isc.ComboBoxItem.showPickerSearchIcon ComboBoxItem.showPickerSearchIcon}.
 */
showPickerSearchIcon?: boolean;

/**
 * See {@link isc.ComboBoxItem.progressiveLoading ComboBoxItem.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.ComboBoxItem.showPickListOnKeypress ComboBoxItem.showPickListOnKeypress}.
 */
showPickListOnKeypress?: boolean;

/**
 * See {@link isc.ComboBoxItem.pickListPlacement ComboBoxItem.pickListPlacement}.
 */
pickListPlacement?: string | Canvas | string;

/**
 * See {@link isc.ComboBoxItem.pickerIconSrc ComboBoxItem.pickerIconSrc}.
 */
pickerIconSrc?: string;

/**
 * See {@link isc.ComboBoxItem.pickerIconHeight ComboBoxItem.pickerIconHeight}.
 */
pickerIconHeight?: number;

/**
 * See {@link isc.ComboBoxItem.fetchData() ComboBoxItem.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.ComboBoxItem.setCriterion() ComboBoxItem.setCriterion()}.
 */
setCriterion?: Function;

/**
 * See {@link isc.ComboBoxItem.separateSpecialValues ComboBoxItem.separateSpecialValues}.
 */
separateSpecialValues?: boolean;

/**
 * See {@link isc.ComboBoxItem.pickerSearchIconProperties ComboBoxItem.pickerSearchIconProperties}.
 */
pickerSearchIconProperties?: FormItemIcon;

/**
 * See {@link isc.ComboBoxItem.filterFields ComboBoxItem.filterFields}.
 */
filterFields?: string[];

/**
 * See {@link isc.ComboBoxItem.pickerClearButtonTitle ComboBoxItem.pickerClearButtonTitle}.
 */
pickerClearButtonTitle?: string;

/**
 * See {@link isc.ComboBoxItem.pickerClearButtonProperties ComboBoxItem.pickerClearButtonProperties}.
 */
pickerClearButtonProperties?: NavigationButton;

/**
 * See {@link isc.ComboBoxItem.iconPlacement ComboBoxItem.iconPlacement}.
 */
iconPlacement?: string;

/**
 * See {@link isc.ComboBoxItem.rootNodeId ComboBoxItem.rootNodeId}.
 */
rootNodeId?: string | number;

/**
 * See {@link isc.ComboBoxItem.getDisplayFieldName() ComboBoxItem.getDisplayFieldName()}.
 */
getDisplayFieldName?: Function;

/**
 * See {@link isc.ComboBoxItem.dataArrived() ComboBoxItem.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.ComboBoxItem.filterWithValue ComboBoxItem.filterWithValue}.
 */
filterWithValue?: boolean;

/**
 * See {@link isc.ComboBoxItem.showOptionsFromDataSource ComboBoxItem.showOptionsFromDataSource}.
 */
showOptionsFromDataSource?: boolean;

/**
 * See {@link isc.ComboBoxItem.defaultToFirstOption ComboBoxItem.defaultToFirstOption}.
 */
defaultToFirstOption?: boolean;

/**
 * See {@link isc.ComboBoxItem.valueField ComboBoxItem.valueField}.
 */
valueField?: string;

/**
 * See {@link isc.ComboBoxItem.specialValues ComboBoxItem.specialValues}.
 */
specialValues?: ValueMap;

/**
 * See {@link isc.ComboBoxItem.pickerSearchFormProperties ComboBoxItem.pickerSearchFormProperties}.
 */
pickerSearchFormProperties?: DynamicForm;

/**
 * See {@link isc.ComboBoxItem.saveOnEnter ComboBoxItem.saveOnEnter}.
 */
saveOnEnter?: boolean;

/**
 * See {@link isc.ComboBoxItem.showAllOptions ComboBoxItem.showAllOptions}.
 */
showAllOptions?: boolean;

/**
 * See {@link isc.ComboBoxItem.pickerSearchOrNewValueFieldHint ComboBoxItem.pickerSearchOrNewValueFieldHint}.
 */
pickerSearchOrNewValueFieldHint?: string;

/**
 * See {@link isc.ComboBoxItem.textMatchStyle ComboBoxItem.textMatchStyle}.
 */
textMatchStyle?: string;

/**
 * See {@link isc.ComboBoxItem.pickerSearchIconSrc ComboBoxItem.pickerSearchIconSrc}.
 */
pickerSearchIconSrc?: string;

/**
 * See {@link isc.ComboBoxItem.canEditCriterion() ComboBoxItem.canEditCriterion()}.
 */
canEditCriterion?: Function;

/**
 * See {@link isc.ComboBoxItem.pickerSearchIconSize ComboBoxItem.pickerSearchIconSize}.
 */
pickerSearchIconSize?: number;

/**
 * See {@link isc.ComboBoxItem.optionFilterContext ComboBoxItem.optionFilterContext}.
 */
optionFilterContext?: DSRequest;

/**
 * See {@link isc.ComboBoxItem.getCriterion() ComboBoxItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.ComboBoxItem.showPickerIcon ComboBoxItem.showPickerIcon}.
 */
showPickerIcon?: boolean;

/**
 * See {@link isc.ComboBoxItem.completeOnTab ComboBoxItem.completeOnTab}.
 */
completeOnTab?: boolean;

/**
 * See {@link isc.ComboBoxItem.autoOpenTree ComboBoxItem.autoOpenTree}.
 */
autoOpenTree?: string;

/**
 * See {@link isc.ComboBoxItem.singleClickFolderToggle ComboBoxItem.singleClickFolderToggle}.
 */
singleClickFolderToggle?: boolean;

/**
 * See {@link isc.ComboBoxItem.cachePickListResults ComboBoxItem.cachePickListResults}.
 */
cachePickListResults?: boolean;

/**
 * See {@link isc.ComboBoxItem.pickerIconWidth ComboBoxItem.pickerIconWidth}.
 */
pickerIconWidth?: number;

/**
 * See {@link isc.ComboBoxItem.pickerSearchFieldHint ComboBoxItem.pickerSearchFieldHint}.
 */
pickerSearchFieldHint?: string;

/**
 * See {@link isc.ComboBoxItem.generateExactMatchCriteria ComboBoxItem.generateExactMatchCriteria}.
 */
generateExactMatchCriteria?: boolean;

/**
 * See {@link isc.ComboBoxItem.pickListProperties ComboBoxItem.pickListProperties}.
 */
pickListProperties?: ListGrid;

/**
 * See {@link isc.ComboBoxItem.autoFetchData ComboBoxItem.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.ComboBoxItem.getValueFieldName() ComboBoxItem.getValueFieldName()}.
 */
getValueFieldName?: Function;

/**
 * See {@link isc.ComboBoxItem.dataSetType ComboBoxItem.dataSetType}.
 */
dataSetType?: string;

/**
 * See {@link isc.ComboBoxItem.formatOnBlur ComboBoxItem.formatOnBlur}.
 */
formatOnBlur?: boolean;

/**
 * See {@link isc.ComboBoxItem.maskPadChar ComboBoxItem.maskPadChar}.
 */
maskPadChar?: string;

/**
 * See {@link isc.ComboBoxItem.pickTreeConstructor ComboBoxItem.pickTreeConstructor}.
 */
pickTreeConstructor?: string;

/**
 * See {@link isc.ComboBoxItem.allowEmptyValue ComboBoxItem.allowEmptyValue}.
 */
allowEmptyValue?: boolean;

/**
 * See {@link isc.ComboBoxItem.pickListConstructor ComboBoxItem.pickListConstructor}.
 */
pickListConstructor?: string;

/**
 * See {@link isc.ComboBoxItem.mask ComboBoxItem.mask}.
 */
mask?: string;

/**
 * See {@link isc.ComboBoxItem.pickerNavigationBarProperties ComboBoxItem.pickerNavigationBarProperties}.
 */
pickerNavigationBarProperties?: NavigationBar;

/**
 * See {@link isc.ComboBoxItem.getSelectedRecord() ComboBoxItem.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.ComboBoxItem.maskPromptChar ComboBoxItem.maskPromptChar}.
 */
maskPromptChar?: string;

/**
 * See {@link isc.ComboBoxItem.filterClientPickListData() ComboBoxItem.filterClientPickListData()}.
 */
filterClientPickListData?: Function;

/**
 * See {@link isc.ComboBoxItem.pickListFields ComboBoxItem.pickListFields}.
 */
pickListFields?: ListGridField[];

/**
 * See {@link isc.ComboBoxItem.maskOverwriteMode ComboBoxItem.maskOverwriteMode}.
 */
maskOverwriteMode?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ComboBoxItem wraps the SmartClient widget class
 * {@link isc.ComboBoxItem ComboBoxItem} for React, allowing you to import
 * ComboBoxItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class ComboBoxItem extends TextItem {
    props: AsComponentXML<ComboBoxItemProps>;
}
