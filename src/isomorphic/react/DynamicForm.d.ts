import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface DynamicFormProps extends CanvasProps {

/**
 * See {@link isc.DynamicForm.checkFileAccessOnSubmit DynamicForm.checkFileAccessOnSubmit}.
 */
checkFileAccessOnSubmit?: boolean;

/**
 * See {@link isc.DynamicForm.getField() DynamicForm.getField()}.
 */
getField?: Function;

/**
 * See {@link isc.DynamicForm.readOnlyDisplay DynamicForm.readOnlyDisplay}.
 */
readOnlyDisplay?: string;

/**
 * See {@link isc.DynamicForm.errorItemProperties DynamicForm.errorItemProperties}.
 */
errorItemProperties?: Object;

/**
 * See {@link isc.DynamicForm.clipItemTitles DynamicForm.clipItemTitles}.
 */
clipItemTitles?: boolean;

/**
 * See {@link isc.DynamicForm.getEditorType() DynamicForm.getEditorType()}.
 */
getEditorType?: Function;

/**
 * See {@link isc.DynamicForm.target DynamicForm.target}.
 */
target?: string;

/**
 * See {@link isc.DynamicForm.revertValueKey DynamicForm.revertValueKey}.
 */
revertValueKey?: KeyIdentifier;

/**
 * See {@link isc.DynamicForm.valuesAreValid() DynamicForm.valuesAreValid()}.
 */
valuesAreValid?: Function;

/**
 * See {@link isc.DynamicForm.canTabToIcons DynamicForm.canTabToIcons}.
 */
canTabToIcons?: boolean;

/**
 * See {@link isc.DynamicForm.showInlineErrors DynamicForm.showInlineErrors}.
 */
showInlineErrors?: boolean;

/**
 * See {@link isc.DynamicForm.operator DynamicForm.operator}.
 */
operator?: string;

/**
 * See {@link isc.DynamicForm.showErrorIcons DynamicForm.showErrorIcons}.
 */
showErrorIcons?: boolean;

/**
 * See {@link isc.DynamicForm.minHintWidth DynamicForm.minHintWidth}.
 */
minHintWidth?: number;

/**
 * See {@link isc.DynamicForm.setTarget() DynamicForm.setTarget()}.
 */
setTarget?: Function;

/**
 * See {@link isc.DynamicForm.fetchData() DynamicForm.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.DynamicForm.linearAutoSpanItems DynamicForm.linearAutoSpanItems}.
 */
linearAutoSpanItems?: boolean;

/**
 * See {@link isc.DynamicForm.getValuesAsAdvancedCriteria() DynamicForm.getValuesAsAdvancedCriteria()}.
 */
getValuesAsAdvancedCriteria?: Function;

/**
 * See {@link isc.DynamicForm.linearNumCols DynamicForm.linearNumCols}.
 */
linearNumCols?: number;

/**
 * See {@link isc.DynamicForm.disableValidation DynamicForm.disableValidation}.
 */
disableValidation?: boolean;

/**
 * See {@link isc.DynamicForm.setAction() DynamicForm.setAction()}.
 */
setAction?: Function;

/**
 * See {@link isc.DynamicForm.getSaveOperationType() DynamicForm.getSaveOperationType()}.
 */
getSaveOperationType?: Function;

/**
 * See {@link isc.DynamicForm.showTitlesWithErrorMessages DynamicForm.showTitlesWithErrorMessages}.
 */
showTitlesWithErrorMessages?: boolean;

/**
 * See {@link isc.DynamicForm.showDetailFields DynamicForm.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.DynamicForm.showFieldErrors() DynamicForm.showFieldErrors()}.
 */
showFieldErrors?: Function;

/**
 * See {@link isc.DynamicForm.editProxyConstructor DynamicForm.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.DynamicForm.valuesManager DynamicForm.valuesManager}.
 */
valuesManager?: ValuesManager | string;

/**
 * See {@link isc.DynamicForm.isPendingAsyncValidation() DynamicForm.isPendingAsyncValidation()}.
 */
isPendingAsyncValidation?: Function;

/**
 * See {@link isc.DynamicForm.itemKeyPress() DynamicForm.itemKeyPress()}.
 */
itemKeyPress?: Function;

/**
 * See {@link isc.DynamicForm.getItem() DynamicForm.getItem()}.
 */
getItem?: Function;

/**
 * See {@link isc.DynamicForm.focus() DynamicForm.focus()}.
 */
focus?: Function;

/**
 * See {@link isc.DynamicForm.getTitleAlign() DynamicForm.getTitleAlign()}.
 */
getTitleAlign?: Function;

/**
 * See {@link isc.DynamicForm.wrapItemTitles DynamicForm.wrapItemTitles}.
 */
wrapItemTitles?: boolean;

/**
 * See {@link isc.DynamicForm.getItemErrorHTML() DynamicForm.getItemErrorHTML()}.
 */
getItemErrorHTML?: Function;

/**
 * See {@link isc.DynamicForm.timeFormatter DynamicForm.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.DynamicForm.showImageAsURL DynamicForm.showImageAsURL}.
 */
showImageAsURL?: boolean;

/**
 * See {@link isc.DynamicForm.requiredRightTitleSuffix DynamicForm.requiredRightTitleSuffix}.
 */
requiredRightTitleSuffix?: string;

/**
 * See {@link isc.DynamicForm.setValuesManager() DynamicForm.setValuesManager()}.
 */
setValuesManager?: Function;

/**
 * See {@link isc.DynamicForm.implicitSave DynamicForm.implicitSave}.
 */
implicitSave?: boolean;

/**
 * See {@link isc.DynamicForm.cellPadding DynamicForm.cellPadding}.
 */
cellPadding?: number;

/**
 * See {@link isc.DynamicForm.unknownErrorMessage DynamicForm.unknownErrorMessage}.
 */
unknownErrorMessage?: string;

/**
 * See {@link isc.DynamicForm.getErrorsHTML() DynamicForm.getErrorsHTML()}.
 */
getErrorsHTML?: Function;

/**
 * See {@link isc.DynamicForm.fieldIsEditable() DynamicForm.fieldIsEditable()}.
 */
fieldIsEditable?: Function;

/**
 * See {@link isc.DynamicForm.canTabToSectionHeaders DynamicForm.canTabToSectionHeaders}.
 */
canTabToSectionHeaders?: boolean;

/**
 * See {@link isc.DynamicForm.implicitSaveDelay DynamicForm.implicitSaveDelay}.
 */
implicitSaveDelay?: number;

/**
 * See {@link isc.DynamicForm.synchronousValidation DynamicForm.synchronousValidation}.
 */
synchronousValidation?: boolean;

/**
 * See {@link isc.DynamicForm.userTask DynamicForm.userTask}.
 */
userTask?: UserTask;

/**
 * See {@link isc.DynamicForm.sortItemsIntoTabOrder() DynamicForm.sortItemsIntoTabOrder()}.
 */
sortItemsIntoTabOrder?: Function;

/**
 * See {@link isc.DynamicForm.handleHiddenValidationErrors() DynamicForm.handleHiddenValidationErrors()}.
 */
handleHiddenValidationErrors?: Function;

/**
 * See {@link isc.DynamicForm.nestedListEditorType DynamicForm.nestedListEditorType}.
 */
nestedListEditorType?: string;

/**
 * See {@link isc.DynamicForm.setErrors() DynamicForm.setErrors()}.
 */
setErrors?: Function;

/**
 * See {@link isc.DynamicForm.setValue() DynamicForm.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.DynamicForm.setFields() DynamicForm.setFields()}.
 */
setFields?: Function;

/**
 * See {@link isc.DynamicForm.requiredMessage DynamicForm.requiredMessage}.
 */
requiredMessage?: string;

/**
 * See {@link isc.DynamicForm.clearValues() DynamicForm.clearValues()}.
 */
clearValues?: Function;

/**
 * See {@link isc.DynamicForm.cancelEditing() DynamicForm.cancelEditing()}.
 */
cancelEditing?: Function;

/**
 * See {@link isc.DynamicForm.titlePrefix DynamicForm.titlePrefix}.
 */
titlePrefix?: string;

/**
 * See {@link isc.DynamicForm.getChangedValues() DynamicForm.getChangedValues()}.
 */
getChangedValues?: Function;

/**
 * See {@link isc.DynamicForm.getEventItem() DynamicForm.getEventItem()}.
 */
getEventItem?: Function;

/**
 * See {@link isc.DynamicForm.setFieldErrors() DynamicForm.setFieldErrors()}.
 */
setFieldErrors?: Function;

/**
 * See {@link isc.DynamicForm.action DynamicForm.action}.
 */
action?: string;

/**
 * See {@link isc.DynamicForm.validateOnExit DynamicForm.validateOnExit}.
 */
validateOnExit?: boolean;

/**
 * See {@link isc.DynamicForm.assignItemsTabPositions() DynamicForm.assignItemsTabPositions()}.
 */
assignItemsTabPositions?: Function;

/**
 * See {@link isc.DynamicForm.getFocusItem() DynamicForm.getFocusItem()}.
 */
getFocusItem?: Function;

/**
 * See {@link isc.DynamicForm.clearErrors() DynamicForm.clearErrors()}.
 */
clearErrors?: Function;

/**
 * See {@link isc.DynamicForm.setSaveOperationType() DynamicForm.setSaveOperationType()}.
 */
setSaveOperationType?: Function;

/**
 * See {@link isc.DynamicForm.itemHoverAlign DynamicForm.itemHoverAlign}.
 */
itemHoverAlign?: string;

/**
 * See {@link isc.DynamicForm.getEventItemInfo() DynamicForm.getEventItemInfo()}.
 */
getEventItemInfo?: Function;

/**
 * See {@link isc.DynamicForm.implicitSaveOnBlur DynamicForm.implicitSaveOnBlur}.
 */
implicitSaveOnBlur?: boolean;

/**
 * See {@link isc.DynamicForm.validationURL DynamicForm.validationURL}.
 */
validationURL?: string;

/**
 * See {@link isc.DynamicForm.showItemContextMenu() DynamicForm.showItemContextMenu()}.
 */
showItemContextMenu?: Function;

/**
 * See {@link isc.DynamicForm.filterData() DynamicForm.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.DynamicForm.canFocus DynamicForm.canFocus}.
 */
canFocus?: boolean;

/**
 * See {@link isc.DynamicForm.errorsPreamble DynamicForm.errorsPreamble}.
 */
errorsPreamble?: string;

/**
 * See {@link isc.DynamicForm.valueHoverHTML() DynamicForm.valueHoverHTML()}.
 */
valueHoverHTML?: Function;

/**
 * See {@link isc.DynamicForm.titleSuffix DynamicForm.titleSuffix}.
 */
titleSuffix?: string;

/**
 * See {@link isc.DynamicForm.colWidths DynamicForm.colWidths}.
 */
colWidths?: string[];

/**
 * See {@link isc.DynamicForm.validateData() DynamicForm.validateData()}.
 */
validateData?: Function;

/**
 * See {@link isc.DynamicForm.editRecord() DynamicForm.editRecord()}.
 */
editRecord?: Function;

/**
 * See {@link isc.DynamicForm.titleOrientation DynamicForm.titleOrientation}.
 */
titleOrientation?: string;

/**
 * See {@link isc.DynamicForm.linearHintWidth DynamicForm.linearHintWidth}.
 */
linearHintWidth?: number | string;

/**
 * See {@link isc.DynamicForm.getOldValues() DynamicForm.getOldValues()}.
 */
getOldValues?: Function;

/**
 * See {@link isc.DynamicForm.setReadOnlyDisplay() DynamicForm.setReadOnlyDisplay()}.
 */
setReadOnlyDisplay?: Function;

/**
 * See {@link isc.DynamicForm.autoComplete DynamicForm.autoComplete}.
 */
autoComplete?: string;

/**
 * See {@link isc.DynamicForm.fields DynamicForm.fields}.
 */
fields?: FormItem[];

/**
 * See {@link isc.DynamicForm.dateFormatter DynamicForm.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.DynamicForm.suppressBrowserClearIcons DynamicForm.suppressBrowserClearIcons}.
 */
suppressBrowserClearIcons?: boolean;

/**
 * See {@link isc.DynamicForm.submit() DynamicForm.submit()}.
 */
submit?: Function;

/**
 * See {@link isc.DynamicForm.titleAlign DynamicForm.titleAlign}.
 */
titleAlign?: string;

/**
 * See {@link isc.DynamicForm.getTitleOrientation() DynamicForm.getTitleOrientation()}.
 */
getTitleOrientation?: Function;

/**
 * See {@link isc.DynamicForm.itemHoverHeight DynamicForm.itemHoverHeight}.
 */
itemHoverHeight?: number | string;

/**
 * See {@link isc.DynamicForm.getValues() DynamicForm.getValues()}.
 */
getValues?: Function;

/**
 * See {@link isc.DynamicForm.linearMode DynamicForm.linearMode}.
 */
linearMode?: boolean;

/**
 * See {@link isc.DynamicForm.allowExpressions DynamicForm.allowExpressions}.
 */
allowExpressions?: boolean;

/**
 * See {@link isc.DynamicForm.valuesHaveChanged() DynamicForm.valuesHaveChanged()}.
 */
valuesHaveChanged?: Function;

/**
 * See {@link isc.DynamicForm.clipStaticValue DynamicForm.clipStaticValue}.
 */
clipStaticValue?: boolean;

/**
 * See {@link isc.DynamicForm.hasFieldErrors() DynamicForm.hasFieldErrors()}.
 */
hasFieldErrors?: Function;

/**
 * See {@link isc.DynamicForm.editSelectedData() DynamicForm.editSelectedData()}.
 */
editSelectedData?: Function;

/**
 * See {@link isc.DynamicForm.storeDisplayValues DynamicForm.storeDisplayValues}.
 */
storeDisplayValues?: boolean;

/**
 * See {@link isc.DynamicForm.longTextEditorThreshold DynamicForm.longTextEditorThreshold}.
 */
longTextEditorThreshold?: number;

/**
 * See {@link isc.DynamicForm.titleWidth DynamicForm.titleWidth}.
 */
titleWidth?: number;

/**
 * See {@link isc.DynamicForm.minColWidth DynamicForm.minColWidth}.
 */
minColWidth?: number;

/**
 * See {@link isc.DynamicForm.showErrorStyle DynamicForm.showErrorStyle}.
 */
showErrorStyle?: boolean;

/**
 * See {@link isc.DynamicForm.hiliteRequiredFields DynamicForm.hiliteRequiredFields}.
 */
hiliteRequiredFields?: boolean;

/**
 * See {@link isc.DynamicForm.defaultSearchOperator DynamicForm.defaultSearchOperator}.
 */
defaultSearchOperator?: string;

/**
 * See {@link isc.DynamicForm.setValues() DynamicForm.setValues()}.
 */
setValues?: Function;

/**
 * See {@link isc.DynamicForm.getFieldErrors() DynamicForm.getFieldErrors()}.
 */
getFieldErrors?: Function;

/**
 * See {@link isc.DynamicForm.fileAccessFailedWarning DynamicForm.fileAccessFailedWarning}.
 */
fileAccessFailedWarning?: string;

/**
 * See {@link isc.DynamicForm.canEdit DynamicForm.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.DynamicForm.items DynamicForm.items}.
 */
items?: FormItem[];

/**
 * See {@link isc.DynamicForm.linearOnMobile DynamicForm.linearOnMobile}.
 */
linearOnMobile?: boolean;

/**
 * See {@link isc.DynamicForm.addFieldErrors() DynamicForm.addFieldErrors()}.
 */
addFieldErrors?: Function;

/**
 * See {@link isc.DynamicForm.stopOnError DynamicForm.stopOnError}.
 */
stopOnError?: boolean;

/**
 * See {@link isc.DynamicForm.suppressValidationErrorCallback DynamicForm.suppressValidationErrorCallback}.
 */
suppressValidationErrorCallback?: boolean;

/**
 * See {@link isc.DynamicForm.setTitleOrientation() DynamicForm.setTitleOrientation()}.
 */
setTitleOrientation?: Function;

/**
 * See {@link isc.DynamicForm.readOnlyTextBoxStyle DynamicForm.readOnlyTextBoxStyle}.
 */
readOnlyTextBoxStyle?: string;

/**
 * See {@link isc.DynamicForm.canEditFieldAttribute DynamicForm.canEditFieldAttribute}.
 */
canEditFieldAttribute?: string;

/**
 * See {@link isc.DynamicForm.dataSource DynamicForm.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.DynamicForm.showItem() DynamicForm.showItem()}.
 */
showItem?: Function;

/**
 * See {@link isc.DynamicForm.showPending DynamicForm.showPending}.
 */
showPending?: boolean;

/**
 * See {@link isc.DynamicForm.getFields() DynamicForm.getFields()}.
 */
getFields?: Function;

/**
 * See {@link isc.DynamicForm.cancel() DynamicForm.cancel()}.
 */
cancel?: Function;

/**
 * See {@link isc.DynamicForm.itemHoverDelay DynamicForm.itemHoverDelay}.
 */
itemHoverDelay?: number;

/**
 * See {@link isc.DynamicForm.rememberValues() DynamicForm.rememberValues()}.
 */
rememberValues?: Function;

/**
 * See {@link isc.DynamicForm.completeEditing() DynamicForm.completeEditing()}.
 */
completeEditing?: Function;

/**
 * See {@link isc.DynamicForm.selectOnFocus DynamicForm.selectOnFocus}.
 */
selectOnFocus?: boolean;

/**
 * See {@link isc.DynamicForm.setValueMap() DynamicForm.setValueMap()}.
 */
setValueMap?: Function;

/**
 * See {@link isc.DynamicForm.setHilites() DynamicForm.setHilites()}.
 */
setHilites?: Function;

/**
 * See {@link isc.DynamicForm.dataFetchMode DynamicForm.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.DynamicForm.rejectInvalidValueOnChange DynamicForm.rejectInvalidValueOnChange}.
 */
rejectInvalidValueOnChange?: boolean;

/**
 * See {@link isc.DynamicForm.fetchRelatedData() DynamicForm.fetchRelatedData()}.
 */
fetchRelatedData?: Function;

/**
 * See {@link isc.DynamicForm.values DynamicForm.values}.
 */
values?: Object;

/**
 * See {@link isc.DynamicForm.showErrors() DynamicForm.showErrors()}.
 */
showErrors?: Function;

/**
 * See {@link isc.DynamicForm.autoFetchTextMatchStyle DynamicForm.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.DynamicForm.dataArity DynamicForm.dataArity}.
 */
dataArity?: string;

/**
 * See {@link isc.DynamicForm.autoFocusOnError DynamicForm.autoFocusOnError}.
 */
autoFocusOnError?: boolean;

/**
 * See {@link isc.DynamicForm.noErrorDetailsMessage DynamicForm.noErrorDetailsMessage}.
 */
noErrorDetailsMessage?: string;

/**
 * See {@link isc.DynamicForm.getValue() DynamicForm.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.DynamicForm.fixedColWidths DynamicForm.fixedColWidths}.
 */
fixedColWidths?: boolean;

/**
 * See {@link isc.DynamicForm.hasErrors() DynamicForm.hasErrors()}.
 */
hasErrors?: Function;

/**
 * See {@link isc.DynamicForm.itemHoverWidth DynamicForm.itemHoverWidth}.
 */
itemHoverWidth?: number | string;

/**
 * See {@link isc.DynamicForm.implicitCriteria DynamicForm.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.DynamicForm.getValuesAsCriteria() DynamicForm.getValuesAsCriteria()}.
 */
getValuesAsCriteria?: Function;

/**
 * See {@link isc.DynamicForm.getValidatedValues() DynamicForm.getValidatedValues()}.
 */
getValidatedValues?: Function;

/**
 * See {@link isc.DynamicForm.titleClipped() DynamicForm.titleClipped()}.
 */
titleClipped?: Function;

/**
 * See {@link isc.DynamicForm.initialCriteria DynamicForm.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.DynamicForm.saveData() DynamicForm.saveData()}.
 */
saveData?: Function;

/**
 * See {@link isc.DynamicForm.encoding DynamicForm.encoding}.
 */
encoding?: string;

/**
 * See {@link isc.DynamicForm.isNewRecord() DynamicForm.isNewRecord()}.
 */
isNewRecord?: Function;

/**
 * See {@link isc.DynamicForm.formSubmitFailed() DynamicForm.formSubmitFailed()}.
 */
formSubmitFailed?: Function;

/**
 * See {@link isc.DynamicForm.handleAsyncValidationReply() DynamicForm.handleAsyncValidationReply()}.
 */
handleAsyncValidationReply?: Function;

/**
 * See {@link isc.DynamicForm.getErrors() DynamicForm.getErrors()}.
 */
getErrors?: Function;

/**
 * See {@link isc.DynamicForm.setMethod() DynamicForm.setMethod()}.
 */
setMethod?: Function;

/**
 * See {@link isc.DynamicForm.errors DynamicForm.errors}.
 */
errors?: Object;

/**
 * See {@link isc.DynamicForm.formSubmitFailedWarning DynamicForm.formSubmitFailedWarning}.
 */
formSubmitFailedWarning?: string;

/**
 * See {@link isc.DynamicForm.selectOnClick DynamicForm.selectOnClick}.
 */
selectOnClick?: boolean;

/**
 * See {@link isc.DynamicForm.saveOperationType DynamicForm.saveOperationType}.
 */
saveOperationType?: string;

/**
 * See {@link isc.DynamicForm.getItems() DynamicForm.getItems()}.
 */
getItems?: Function;

/**
 * See {@link isc.DynamicForm.longTextEditorType DynamicForm.longTextEditorType}.
 */
longTextEditorType?: string;

/**
 * See {@link isc.DynamicForm.itemHoverVAlign DynamicForm.itemHoverVAlign}.
 */
itemHoverVAlign?: number | string;

/**
 * See {@link isc.DynamicForm.requiredRightTitlePrefix DynamicForm.requiredRightTitlePrefix}.
 */
requiredRightTitlePrefix?: string;

/**
 * See {@link isc.DynamicForm.submitForm() DynamicForm.submitForm()}.
 */
submitForm?: Function;

/**
 * See {@link isc.DynamicForm.setValuesAsCriteria() DynamicForm.setValuesAsCriteria()}.
 */
setValuesAsCriteria?: Function;

/**
 * See {@link isc.DynamicForm.errorItemCellStyle DynamicForm.errorItemCellStyle}.
 */
errorItemCellStyle?: string;

/**
 * See {@link isc.DynamicForm.method DynamicForm.method}.
 */
method?: string;

/**
 * See {@link isc.DynamicForm.saveOnEnter DynamicForm.saveOnEnter}.
 */
saveOnEnter?: boolean;

/**
 * See {@link isc.DynamicForm.nestedEditorType DynamicForm.nestedEditorType}.
 */
nestedEditorType?: string;

/**
 * See {@link isc.DynamicForm.showDeletions DynamicForm.showDeletions}.
 */
showDeletions?: boolean;

/**
 * See {@link isc.DynamicForm.rightTitlePrefix DynamicForm.rightTitlePrefix}.
 */
rightTitlePrefix?: string;

/**
 * See {@link isc.DynamicForm.checkForValidationErrors() DynamicForm.checkForValidationErrors()}.
 */
checkForValidationErrors?: Function;

/**
 * See {@link isc.DynamicForm.setError() DynamicForm.setError()}.
 */
setError?: Function;

/**
 * See {@link isc.DynamicForm.clearValue() DynamicForm.clearValue()}.
 */
clearValue?: Function;

/**
 * See {@link isc.DynamicForm.itemChanged() DynamicForm.itemChanged()}.
 */
itemChanged?: Function;

/**
 * See {@link isc.DynamicForm.datetimeFormatter DynamicForm.datetimeFormatter}.
 */
datetimeFormatter?: string;

/**
 * See {@link isc.DynamicForm.autoFetchData DynamicForm.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.DynamicForm.requiredTitlePrefix DynamicForm.requiredTitlePrefix}.
 */
requiredTitlePrefix?: string;

/**
 * See {@link isc.DynamicForm.itemHoverStyle DynamicForm.itemHoverStyle}.
 */
itemHoverStyle?: string;

/**
 * See {@link isc.DynamicForm.viewSelectedData() DynamicForm.viewSelectedData()}.
 */
viewSelectedData?: Function;

/**
 * See {@link isc.DynamicForm.reset() DynamicForm.reset()}.
 */
reset?: Function;

/**
 * See {@link isc.DynamicForm.initialSort DynamicForm.initialSort}.
 */
initialSort?: SortSpecifier[];

/**
 * See {@link isc.DynamicForm.cellBorder DynamicForm.cellBorder}.
 */
cellBorder?: number;

/**
 * See {@link isc.DynamicForm.editNewRecord() DynamicForm.editNewRecord()}.
 */
editNewRecord?: Function;

/**
 * See {@link isc.DynamicForm.itemHoverHTML() DynamicForm.itemHoverHTML()}.
 */
itemHoverHTML?: Function;

/**
 * See {@link isc.DynamicForm.showComplexFieldsRecursively DynamicForm.showComplexFieldsRecursively}.
 */
showComplexFieldsRecursively?: boolean;

/**
 * See {@link isc.DynamicForm.hideItem() DynamicForm.hideItem()}.
 */
hideItem?: Function;

/**
 * See {@link isc.DynamicForm.showErrorText DynamicForm.showErrorText}.
 */
showErrorText?: boolean;

/**
 * See {@link isc.DynamicForm.isFocused() DynamicForm.isFocused()}.
 */
isFocused?: Function;

/**
 * See {@link isc.DynamicForm.titleHoverHTML() DynamicForm.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.DynamicForm.originalValueMessage DynamicForm.originalValueMessage}.
 */
originalValueMessage?: string;

/**
 * See {@link isc.DynamicForm.autoFocus DynamicForm.autoFocus}.
 */
autoFocus?: boolean;

/**
 * See {@link isc.DynamicForm.sectionVisibilityMode DynamicForm.sectionVisibilityMode}.
 */
sectionVisibilityMode?: string;

/**
 * See {@link isc.DynamicForm.showOldValueInHover DynamicForm.showOldValueInHover}.
 */
showOldValueInHover?: boolean;

/**
 * See {@link isc.DynamicForm.itemChange() DynamicForm.itemChange()}.
 */
itemChange?: Function;

/**
 * See {@link isc.DynamicForm.validateOnChange DynamicForm.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.DynamicForm.fetchRequestProperties DynamicForm.fetchRequestProperties}.
 */
fetchRequestProperties?: DSRequest;

/**
 * See {@link isc.DynamicForm.setCanEdit() DynamicForm.setCanEdit()}.
 */
setCanEdit?: Function;

/**
 * See {@link isc.DynamicForm.numCols DynamicForm.numCols}.
 */
numCols?: number;

/**
 * See {@link isc.DynamicForm.resetValues() DynamicForm.resetValues()}.
 */
resetValues?: Function;

/**
 * See {@link isc.DynamicForm.clearFieldErrors() DynamicForm.clearFieldErrors()}.
 */
clearFieldErrors?: Function;

/**
 * See {@link isc.DynamicForm.wrapHintText DynamicForm.wrapHintText}.
 */
wrapHintText?: boolean;

/**
 * See {@link isc.DynamicForm.setItems() DynamicForm.setItems()}.
 */
setItems?: Function;

/**
 * See {@link isc.DynamicForm.requiredTitleSuffix DynamicForm.requiredTitleSuffix}.
 */
requiredTitleSuffix?: string;

/**
 * See {@link isc.DynamicForm.focusInItem() DynamicForm.focusInItem()}.
 */
focusInItem?: Function;

/**
 * See {@link isc.DynamicForm.itemHoverOpacity DynamicForm.itemHoverOpacity}.
 */
itemHoverOpacity?: number;

/**
 * See {@link isc.DynamicForm.submitValues() DynamicForm.submitValues()}.
 */
submitValues?: Function;

/**
 * See {@link isc.DynamicForm.browserSpellCheck DynamicForm.browserSpellCheck}.
 */
browserSpellCheck?: boolean;

/**
 * See {@link isc.DynamicForm.canSubmit DynamicForm.canSubmit}.
 */
canSubmit?: boolean;

/**
 * See {@link isc.DynamicForm.validate() DynamicForm.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.DynamicForm.valuesChanged() DynamicForm.valuesChanged()}.
 */
valuesChanged?: Function;

/**
 * See {@link isc.DynamicForm.rightTitleSuffix DynamicForm.rightTitleSuffix}.
 */
rightTitleSuffix?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DynamicForm wraps the SmartClient widget class
 * {@link isc.DynamicForm DynamicForm} for React, allowing you to import
 * DynamicForm for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class DynamicForm extends Canvas {
    props: AsComponentXML<DynamicFormProps>;
}
