import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormItemProps {

/**
 * See {@link isc.FormItem.show() FormItem.show()}.
 */
show?: Function;

/**
 * See {@link isc.FormItem.editProxyConstructor FormItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.FormItem.exportFormat FormItem.exportFormat}.
 */
exportFormat?: string;

/**
 * See {@link isc.FormItem.getPageTop() FormItem.getPageTop()}.
 */
getPageTop?: Function;

/**
 * See {@link isc.FormItem.foreignDisplayField FormItem.foreignDisplayField}.
 */
foreignDisplayField?: string;

/**
 * See {@link isc.FormItem.hoverPersist FormItem.hoverPersist}.
 */
hoverPersist?: string;

/**
 * See {@link isc.FormItem.mapDisplayToValue() FormItem.mapDisplayToValue()}.
 */
mapDisplayToValue?: Function;

/**
 * See {@link isc.FormItem.titleHoverHTML() FormItem.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.FormItem.setIconShowOnFocus() FormItem.setIconShowOnFocus()}.
 */
setIconShowOnFocus?: Function;

/**
 * See {@link isc.FormItem.getVisibleWidth() FormItem.getVisibleWidth()}.
 */
getVisibleWidth?: Function;

/**
 * See {@link isc.FormItem.parseEditorValue() FormItem.parseEditorValue()}.
 */
parseEditorValue?: Function;

/**
 * See {@link isc.FormItem.getGridColNum() FormItem.getGridColNum()}.
 */
getGridColNum?: Function;

/**
 * See {@link isc.FormItem.showValueIconOnly FormItem.showValueIconOnly}.
 */
showValueIconOnly?: boolean;

/**
 * See {@link isc.FormItem.optionTextMatchStyle FormItem.optionTextMatchStyle}.
 */
optionTextMatchStyle?: string;

/**
 * See {@link isc.FormItem.linearEndRow FormItem.linearEndRow}.
 */
linearEndRow?: number | string;

/**
 * See {@link isc.FormItem.validateOnChange FormItem.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.FormItem.hint FormItem.hint}.
 */
hint?: string;

/**
 * See {@link isc.FormItem.inputFormat FormItem.inputFormat}.
 */
inputFormat?: string;

/**
 * See {@link isc.FormItem.top FormItem.top}.
 */
top?: number;

/**
 * See {@link isc.FormItem.valueIconWidth FormItem.valueIconWidth}.
 */
valueIconWidth?: number;

/**
 * See {@link isc.FormItem.hideIcon() FormItem.hideIcon()}.
 */
hideIcon?: Function;

/**
 * See {@link isc.FormItem.linearColSpan FormItem.linearColSpan}.
 */
linearColSpan?: number | string;

/**
 * See {@link isc.FormItem.printTextBoxStyle FormItem.printTextBoxStyle}.
 */
printTextBoxStyle?: string;

/**
 * See {@link isc.FormItem.pickerProperties FormItem.pickerProperties}.
 */
pickerProperties?: Canvas | Canvas;

/**
 * See {@link isc.FormItem.hintClassName FormItem.hintClassName}.
 */
hintClassName?: string;

/**
 * See {@link isc.FormItem.type FormItem.type}.
 */
type?: string;

/**
 * See {@link isc.FormItem.getValueAsFloat() FormItem.getValueAsFloat()}.
 */
getValueAsFloat?: Function;

/**
 * See {@link isc.FormItem.value FormItem.value}.
 */
value?: any;

/**
 * See {@link isc.FormItem.changeOnKeypress FormItem.changeOnKeypress}.
 */
changeOnKeypress?: boolean;

/**
 * See {@link isc.FormItem.getIconTabPosition() FormItem.getIconTabPosition()}.
 */
getIconTabPosition?: Function;

/**
 * See {@link isc.FormItem.left FormItem.left}.
 */
left?: number;

/**
 * See {@link isc.FormItem.hide() FormItem.hide()}.
 */
hide?: Function;

/**
 * See {@link isc.FormItem.getFieldName() FormItem.getFieldName()}.
 */
getFieldName?: Function;

/**
 * See {@link isc.FormItem.getValueIcon() FormItem.getValueIcon()}.
 */
getValueIcon?: Function;

/**
 * See {@link isc.FormItem.pickerIconPrompt FormItem.pickerIconPrompt}.
 */
pickerIconPrompt?: string;

/**
 * See {@link isc.FormItem.focusInItem() FormItem.focusInItem()}.
 */
focusInItem?: Function;

/**
 * See {@link isc.FormItem.autoComplete FormItem.autoComplete}.
 */
autoComplete?: string;

/**
 * See {@link isc.FormItem.setValue() FormItem.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.FormItem.defaultOperator FormItem.defaultOperator}.
 */
defaultOperator?: string;

/**
 * See {@link isc.FormItem.titleErrorClassName FormItem.titleErrorClassName}.
 */
titleErrorClassName?: string;

/**
 * See {@link isc.FormItem.colSpan FormItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.FormItem.browserSpellCheck FormItem.browserSpellCheck}.
 */
browserSpellCheck?: boolean;

/**
 * See {@link isc.FormItem.titleDoubleClick() FormItem.titleDoubleClick()}.
 */
titleDoubleClick?: Function;

/**
 * See {@link isc.FormItem.dataPath FormItem.dataPath}.
 */
dataPath?: string;

/**
 * See {@link isc.FormItem.imageURLPrefix FormItem.imageURLPrefix}.
 */
imageURLPrefix?: string;

/**
 * See {@link isc.FormItem.canEditCriterion() FormItem.canEditCriterion()}.
 */
canEditCriterion?: Function;

/**
 * See {@link isc.FormItem.getGridRowNum() FormItem.getGridRowNum()}.
 */
getGridRowNum?: Function;

/**
 * See {@link isc.FormItem.keyDown() FormItem.keyDown()}.
 */
keyDown?: Function;

/**
 * See {@link isc.FormItem.hoverAlign FormItem.hoverAlign}.
 */
hoverAlign?: string;

/**
 * See {@link isc.FormItem.selectedRecordChanged() FormItem.selectedRecordChanged()}.
 */
selectedRecordChanged?: Function;

/**
 * See {@link isc.FormItem.textFormula FormItem.textFormula}.
 */
textFormula?: UserSummary;

/**
 * See {@link isc.FormItem.decimalPad FormItem.decimalPad}.
 */
decimalPad?: number;

/**
 * See {@link isc.FormItem.getDisplayValue() FormItem.getDisplayValue()}.
 */
getDisplayValue?: Function;

/**
 * See {@link isc.FormItem.getTop() FormItem.getTop()}.
 */
getTop?: Function;

/**
 * See {@link isc.FormItem.cellHeight FormItem.cellHeight}.
 */
cellHeight?: number;

/**
 * See {@link isc.FormItem.showFocusedErrorState FormItem.showFocusedErrorState}.
 */
showFocusedErrorState?: boolean;

/**
 * See {@link isc.FormItem.hoverOpacity FormItem.hoverOpacity}.
 */
hoverOpacity?: number;

/**
 * See {@link isc.FormItem.showIf() FormItem.showIf()}.
 */
showIf?: Function;

/**
 * See {@link isc.FormItem.vAlign FormItem.vAlign}.
 */
vAlign?: string;

/**
 * See {@link isc.FormItem.wrapStaticValue FormItem.wrapStaticValue}.
 */
wrapStaticValue?: boolean;

/**
 * See {@link isc.FormItem.getIconHeight() FormItem.getIconHeight()}.
 */
getIconHeight?: Function;

/**
 * See {@link isc.FormItem.textBoxStyle FormItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.FormItem.addIcon() FormItem.addIcon()}.
 */
addIcon?: Function;

/**
 * See {@link isc.FormItem.showFocusedIcons FormItem.showFocusedIcons}.
 */
showFocusedIcons?: boolean;

/**
 * See {@link isc.FormItem.browserInputType FormItem.browserInputType}.
 */
browserInputType?: string;

/**
 * See {@link isc.FormItem.valueHover() FormItem.valueHover()}.
 */
valueHover?: Function;

/**
 * See {@link isc.FormItem.iconBaseStyle FormItem.iconBaseStyle}.
 */
iconBaseStyle?: string;

/**
 * See {@link isc.FormItem.setShowIconsOnFocus() FormItem.setShowIconsOnFocus()}.
 */
setShowIconsOnFocus?: Function;

/**
 * See {@link isc.FormItem.setShowPickerIconOnFocus() FormItem.setShowPickerIconOnFocus()}.
 */
setShowPickerIconOnFocus?: Function;

/**
 * See {@link isc.FormItem.emptyDisplayValue FormItem.emptyDisplayValue}.
 */
emptyDisplayValue?: string;

/**
 * See {@link isc.FormItem.errorMessageWidth FormItem.errorMessageWidth}.
 */
errorMessageWidth?: number;

/**
 * See {@link isc.FormItem.iconHSpace FormItem.iconHSpace}.
 */
iconHSpace?: number;

/**
 * See {@link isc.FormItem.setCriterion() FormItem.setCriterion()}.
 */
setCriterion?: Function;

/**
 * See {@link isc.FormItem.titleVAlign FormItem.titleVAlign}.
 */
titleVAlign?: string;

/**
 * See {@link isc.FormItem.requiredMessage FormItem.requiredMessage}.
 */
requiredMessage?: string;

/**
 * See {@link isc.FormItem.showOldValueInHover FormItem.showOldValueInHover}.
 */
showOldValueInHover?: boolean;

/**
 * See {@link isc.FormItem.showClippedValueOnHover FormItem.showClippedValueOnHover}.
 */
showClippedValueOnHover?: boolean;

/**
 * See {@link isc.FormItem.setReadOnlyDisplay() FormItem.setReadOnlyDisplay()}.
 */
setReadOnlyDisplay?: Function;

/**
 * See {@link isc.FormItem.isDrawn() FormItem.isDrawn()}.
 */
isDrawn?: Function;

/**
 * See {@link isc.FormItem.updatePickerIconOnOver FormItem.updatePickerIconOnOver}.
 */
updatePickerIconOnOver?: boolean;

/**
 * See {@link isc.FormItem.wrapTitle FormItem.wrapTitle}.
 */
wrapTitle?: boolean;

/**
 * See {@link isc.FormItem.valueDeselectedCSSText FormItem.valueDeselectedCSSText}.
 */
valueDeselectedCSSText?: string;

/**
 * See {@link isc.FormItem.name FormItem.name}.
 */
name?: string;

/**
 * See {@link isc.FormItem.readOnlyControlStyle FormItem.readOnlyControlStyle}.
 */
readOnlyControlStyle?: string;

/**
 * See {@link isc.FormItem.titleClassName FormItem.titleClassName}.
 */
titleClassName?: string;

/**
 * See {@link isc.FormItem.align FormItem.align}.
 */
align?: string;

/**
 * See {@link isc.FormItem.getWidth() FormItem.getWidth()}.
 */
getWidth?: Function;

/**
 * See {@link isc.FormItem.setTop() FormItem.setTop()}.
 */
setTop?: Function;

/**
 * See {@link isc.FormItem.showContextMenu() FormItem.showContextMenu()}.
 */
showContextMenu?: Function;

/**
 * See {@link isc.FormItem.formula FormItem.formula}.
 */
formula?: UserFormula;

/**
 * See {@link isc.FormItem.defaultIconSrc FormItem.defaultIconSrc}.
 */
defaultIconSrc?: string;

/**
 * See {@link isc.FormItem.getPageRect() FormItem.getPageRect()}.
 */
getPageRect?: Function;

/**
 * See {@link isc.FormItem.keyPress() FormItem.keyPress()}.
 */
keyPress?: Function;

/**
 * See {@link isc.FormItem.getLeft() FormItem.getLeft()}.
 */
getLeft?: Function;

/**
 * See {@link isc.FormItem.saveOnEnter FormItem.saveOnEnter}.
 */
saveOnEnter?: boolean;

/**
 * See {@link isc.FormItem.emptyValueIcon FormItem.emptyValueIcon}.
 */
emptyValueIcon?: string;

/**
 * See {@link isc.FormItem.keyUp() FormItem.keyUp()}.
 */
keyUp?: Function;

/**
 * See {@link isc.FormItem.visible FormItem.visible}.
 */
visible?: boolean;

/**
 * See {@link isc.FormItem.iconKeyPress() FormItem.iconKeyPress()}.
 */
iconKeyPress?: Function;

/**
 * See {@link isc.FormItem.staticHeight FormItem.staticHeight}.
 */
staticHeight?: number;

/**
 * See {@link isc.FormItem.formatValue() FormItem.formatValue()}.
 */
formatValue?: Function;

/**
 * See {@link isc.FormItem.prompt FormItem.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.FormItem.showErrorIcon FormItem.showErrorIcon}.
 */
showErrorIcon?: boolean;

/**
 * See {@link isc.FormItem.optionFilterContext FormItem.optionFilterContext}.
 */
optionFilterContext?: RPCRequest;

/**
 * See {@link isc.FormItem.removeIcon() FormItem.removeIcon()}.
 */
removeIcon?: Function;

/**
 * See {@link isc.FormItem.stopHover() FormItem.stopHover()}.
 */
stopHover?: Function;

/**
 * See {@link isc.FormItem.showRTL FormItem.showRTL}.
 */
showRTL?: boolean;

/**
 * See {@link isc.FormItem.readOnlyTextBoxStyle FormItem.readOnlyTextBoxStyle}.
 */
readOnlyTextBoxStyle?: string;

/**
 * See {@link isc.FormItem.hoverHeight FormItem.hoverHeight}.
 */
hoverHeight?: number | string;

/**
 * See {@link isc.FormItem.setCanEdit() FormItem.setCanEdit()}.
 */
setCanEdit?: Function;

/**
 * See {@link isc.FormItem.valueHoverHTML() FormItem.valueHoverHTML()}.
 */
valueHoverHTML?: Function;

/**
 * See {@link isc.FormItem.stopOnError FormItem.stopOnError}.
 */
stopOnError?: boolean;

/**
 * See {@link isc.FormItem.setTabIndex() FormItem.setTabIndex()}.
 */
setTabIndex?: Function;

/**
 * See {@link isc.FormItem.validate() FormItem.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.FormItem.disableIcon() FormItem.disableIcon()}.
 */
disableIcon?: Function;

/**
 * See {@link isc.FormItem.alwaysFetchMissingValues FormItem.alwaysFetchMissingValues}.
 */
alwaysFetchMissingValues?: boolean;

/**
 * See {@link isc.FormItem.focus() FormItem.focus()}.
 */
focus?: Function;

/**
 * See {@link isc.FormItem.errorIconHeight FormItem.errorIconHeight}.
 */
errorIconHeight?: number;

/**
 * See {@link isc.FormItem.setDisabled() FormItem.setDisabled()}.
 */
setDisabled?: Function;

/**
 * See {@link isc.FormItem.validateOnExit FormItem.validateOnExit}.
 */
validateOnExit?: boolean;

/**
 * See {@link isc.FormItem.synchronousValidation FormItem.synchronousValidation}.
 */
synchronousValidation?: boolean;

/**
 * See {@link isc.FormItem.showPickerIcon FormItem.showPickerIcon}.
 */
showPickerIcon?: boolean;

/**
 * See {@link isc.FormItem.showErrorIconInline FormItem.showErrorIconInline}.
 */
showErrorIconInline?: boolean;

/**
 * See {@link isc.FormItem.wrapHintText FormItem.wrapHintText}.
 */
wrapHintText?: boolean;

/**
 * See {@link isc.FormItem.valueClipped() FormItem.valueClipped()}.
 */
valueClipped?: Function;

/**
 * See {@link isc.FormItem.blur() FormItem.blur()}.
 */
blur?: Function;

/**
 * See {@link isc.FormItem.iconClick() FormItem.iconClick()}.
 */
iconClick?: Function;

/**
 * See {@link isc.FormItem.valueIconLeftPadding FormItem.valueIconLeftPadding}.
 */
valueIconLeftPadding?: number;

/**
 * See {@link isc.FormItem.iconPrompt FormItem.iconPrompt}.
 */
iconPrompt?: string;

/**
 * See {@link isc.FormItem.changed() FormItem.changed()}.
 */
changed?: Function;

/**
 * See {@link isc.FormItem.ariaState FormItem.ariaState}.
 */
ariaState?: Object;

/**
 * See {@link isc.FormItem.implicitSaveOnBlur FormItem.implicitSaveOnBlur}.
 */
implicitSaveOnBlur?: boolean;

/**
 * See {@link isc.FormItem.pickerIconSrc FormItem.pickerIconSrc}.
 */
pickerIconSrc?: string;

/**
 * See {@link isc.FormItem.errorIconSrc FormItem.errorIconSrc}.
 */
errorIconSrc?: string;

/**
 * See {@link isc.FormItem.controlStyle FormItem.controlStyle}.
 */
controlStyle?: string;

/**
 * See {@link isc.FormItem.doubleClick() FormItem.doubleClick()}.
 */
doubleClick?: Function;

/**
 * See {@link isc.FormItem.focusAfterItem() FormItem.focusAfterItem()}.
 */
focusAfterItem?: Function;

/**
 * See {@link isc.FormItem.ID FormItem.ID}.
 */
ID?: string;

/**
 * See {@link isc.FormItem.allowExpressions FormItem.allowExpressions}.
 */
allowExpressions?: boolean;

/**
 * See {@link isc.FormItem.getCriterion() FormItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.FormItem.readOnlyDisplay FormItem.readOnlyDisplay}.
 */
readOnlyDisplay?: string;

/**
 * See {@link isc.FormItem.formatEditorValue() FormItem.formatEditorValue()}.
 */
formatEditorValue?: Function;

/**
 * See {@link isc.FormItem.transformInput() FormItem.transformInput()}.
 */
transformInput?: Function;

/**
 * See {@link isc.FormItem.height FormItem.height}.
 */
height?: number | string;

/**
 * See {@link isc.FormItem.hoverDelay FormItem.hoverDelay}.
 */
hoverDelay?: number;

/**
 * See {@link isc.FormItem.hoverFocusKey FormItem.hoverFocusKey}.
 */
hoverFocusKey?: string;

/**
 * See {@link isc.FormItem.itemHover() FormItem.itemHover()}.
 */
itemHover?: Function;

/**
 * See {@link isc.FormItem.isInGrid() FormItem.isInGrid()}.
 */
isInGrid?: Function;

/**
 * See {@link isc.FormItem.showDisabledIconsOnFocus FormItem.showDisabledIconsOnFocus}.
 */
showDisabledIconsOnFocus?: boolean;

/**
 * See {@link isc.FormItem.getPrintValueIcon() FormItem.getPrintValueIcon()}.
 */
getPrintValueIcon?: Function;

/**
 * See {@link isc.FormItem.pickerIconProperties FormItem.pickerIconProperties}.
 */
pickerIconProperties?: FormItemIcon;

/**
 * See {@link isc.FormItem.applyAlignToText FormItem.applyAlignToText}.
 */
applyAlignToText?: boolean;

/**
 * See {@link isc.FormItem.showDeletions FormItem.showDeletions}.
 */
showDeletions?: boolean;

/**
 * See {@link isc.FormItem.validOperators FormItem.validOperators}.
 */
validOperators?: string[];

/**
 * See {@link isc.FormItem.valueIconRightPadding FormItem.valueIconRightPadding}.
 */
valueIconRightPadding?: number;

/**
 * See {@link isc.FormItem.visibleWhen FormItem.visibleWhen}.
 */
visibleWhen?: AdvancedCriteria;

/**
 * See {@link isc.FormItem.autoCompleteKeywords FormItem.autoCompleteKeywords}.
 */
autoCompleteKeywords?: string[];

/**
 * See {@link isc.FormItem.getListGrid() FormItem.getListGrid()}.
 */
getListGrid?: Function;

/**
 * See {@link isc.FormItem.setHintStyle() FormItem.setHintStyle()}.
 */
setHintStyle?: Function;

/**
 * See {@link isc.FormItem.valueIconClick() FormItem.valueIconClick()}.
 */
valueIconClick?: Function;

/**
 * See {@link isc.FormItem.shouldStopKeyPressBubbling() FormItem.shouldStopKeyPressBubbling()}.
 */
shouldStopKeyPressBubbling?: Function;

/**
 * See {@link isc.FormItem.applyFormula() FormItem.applyFormula()}.
 */
applyFormula?: Function;

/**
 * See {@link isc.FormItem.implicitSave FormItem.implicitSave}.
 */
implicitSave?: boolean;

/**
 * See {@link isc.FormItem.showErrorText FormItem.showErrorText}.
 */
showErrorText?: boolean;

/**
 * See {@link isc.FormItem.getTitle() FormItem.getTitle()}.
 */
getTitle?: Function;

/**
 * See {@link isc.FormItem.showImageAsURL FormItem.showImageAsURL}.
 */
showImageAsURL?: boolean;

/**
 * See {@link isc.FormItem.globalTabIndex FormItem.globalTabIndex}.
 */
globalTabIndex?: number;

/**
 * See {@link isc.FormItem.itemHoverHTML() FormItem.itemHoverHTML()}.
 */
itemHoverHTML?: Function;

/**
 * See {@link isc.FormItem.readOnlyCanSelectText FormItem.readOnlyCanSelectText}.
 */
readOnlyCanSelectText?: string[];

/**
 * See {@link isc.FormItem.getVisibleTitleWidth() FormItem.getVisibleTitleWidth()}.
 */
getVisibleTitleWidth?: Function;

/**
 * See {@link isc.FormItem.editorEnter() FormItem.editorEnter()}.
 */
editorEnter?: Function;

/**
 * See {@link isc.FormItem.updateTextBoxOnOver FormItem.updateTextBoxOnOver}.
 */
updateTextBoxOnOver?: boolean;

/**
 * See {@link isc.FormItem.showIconsOnFocus FormItem.showIconsOnFocus}.
 */
showIconsOnFocus?: boolean;

/**
 * See {@link isc.FormItem.disable() FormItem.disable()}.
 */
disable?: Function;

/**
 * See {@link isc.FormItem.setErrors() FormItem.setErrors()}.
 */
setErrors?: Function;

/**
 * See {@link isc.FormItem.linearStartRow FormItem.linearStartRow}.
 */
linearStartRow?: number | string;

/**
 * See {@link isc.FormItem.validators FormItem.validators}.
 */
validators?: Validator[];

/**
 * See {@link isc.FormItem.alwaysShowControlBox FormItem.alwaysShowControlBox}.
 */
alwaysShowControlBox?: boolean;

/**
 * See {@link isc.FormItem.rowSpan FormItem.rowSpan}.
 */
rowSpan?: number;

/**
 * See {@link isc.FormItem.criteriaField FormItem.criteriaField}.
 */
criteriaField?: string;

/**
 * See {@link isc.FormItem.accessKey FormItem.accessKey}.
 */
accessKey?: string;

/**
 * See {@link isc.FormItem.cellStyle FormItem.cellStyle}.
 */
cellStyle?: string;

/**
 * See {@link isc.FormItem.applyHeightToTextBox FormItem.applyHeightToTextBox}.
 */
applyHeightToTextBox?: boolean;

/**
 * See {@link isc.FormItem.getCanFocus() FormItem.getCanFocus()}.
 */
getCanFocus?: Function;

/**
 * See {@link isc.FormItem.getPixelHeight() FormItem.getPixelHeight()}.
 */
getPixelHeight?: Function;

/**
 * See {@link isc.FormItem.useLocalDisplayFieldValue FormItem.useLocalDisplayFieldValue}.
 */
useLocalDisplayFieldValue?: boolean;

/**
 * See {@link isc.FormItem.getSelectedRecord() FormItem.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.FormItem.suppressValueIcon FormItem.suppressValueIcon}.
 */
suppressValueIcon?: boolean;

/**
 * See {@link isc.FormItem.shouldApplyHeightToTextBox() FormItem.shouldApplyHeightToTextBox()}.
 */
shouldApplyHeightToTextBox?: Function;

/**
 * See {@link isc.FormItem.containerWidget FormItem.containerWidget}.
 */
containerWidget?: Canvas;

/**
 * See {@link isc.FormItem.showHint FormItem.showHint}.
 */
showHint?: boolean;

/**
 * See {@link isc.FormItem.canSelectText FormItem.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.FormItem.setLeft() FormItem.setLeft()}.
 */
setLeft?: Function;

/**
 * See {@link isc.FormItem.getPageLeft() FormItem.getPageLeft()}.
 */
getPageLeft?: Function;

/**
 * See {@link isc.FormItem.storeDisplayValues FormItem.storeDisplayValues}.
 */
storeDisplayValues?: boolean;

/**
 * See {@link isc.FormItem.isDisabled() FormItem.isDisabled()}.
 */
isDisabled?: Function;

/**
 * See {@link isc.FormItem.errorIconWidth FormItem.errorIconWidth}.
 */
errorIconWidth?: number;

/**
 * See {@link isc.FormItem.valueIconHeight FormItem.valueIconHeight}.
 */
valueIconHeight?: number;

/**
 * See {@link isc.FormItem.getPixelWidth() FormItem.getPixelWidth()}.
 */
getPixelWidth?: Function;

/**
 * See {@link isc.FormItem.tabIndex FormItem.tabIndex}.
 */
tabIndex?: number;

/**
 * See {@link isc.FormItem.selectOnClick FormItem.selectOnClick}.
 */
selectOnClick?: boolean;

/**
 * See {@link isc.FormItem.titleClick() FormItem.titleClick()}.
 */
titleClick?: Function;

/**
 * See {@link isc.FormItem.setHint() FormItem.setHint()}.
 */
setHint?: Function;

/**
 * See {@link isc.FormItem.valueIconSize FormItem.valueIconSize}.
 */
valueIconSize?: number;

/**
 * See {@link isc.FormItem.getDisplayFieldName() FormItem.getDisplayFieldName()}.
 */
getDisplayFieldName?: Function;

/**
 * See {@link isc.FormItem.redraw() FormItem.redraw()}.
 */
redraw?: Function;

/**
 * See {@link isc.FormItem.nullOriginalValueText FormItem.nullOriginalValueText}.
 */
nullOriginalValueText?: string;

/**
 * See {@link isc.FormItem.hoverVAlign FormItem.hoverVAlign}.
 */
hoverVAlign?: string;

/**
 * See {@link isc.FormItem.setShowDisabled() FormItem.setShowDisabled()}.
 */
setShowDisabled?: Function;

/**
 * See {@link isc.FormItem.setPrompt() FormItem.setPrompt()}.
 */
setPrompt?: Function;

/**
 * See {@link isc.FormItem.hidden FormItem.hidden}.
 */
hidden?: boolean;

/**
 * See {@link isc.FormItem.shouldSaveOnEnter() FormItem.shouldSaveOnEnter()}.
 */
shouldSaveOnEnter?: Function;

/**
 * See {@link isc.FormItem.showFocusedPickerIcon FormItem.showFocusedPickerIcon}.
 */
showFocusedPickerIcon?: boolean;

/**
 * See {@link isc.FormItem.hoverStyle FormItem.hoverStyle}.
 */
hoverStyle?: string;

/**
 * See {@link isc.FormItem.showIcons FormItem.showIcons}.
 */
showIcons?: boolean;

/**
 * See {@link isc.FormItem.titleAlign FormItem.titleAlign}.
 */
titleAlign?: string;

/**
 * See {@link isc.FormItem.loadingDisplayValue FormItem.loadingDisplayValue}.
 */
loadingDisplayValue?: string;

/**
 * See {@link isc.FormItem.useDisabledHintStyleForReadOnly FormItem.useDisabledHintStyleForReadOnly}.
 */
useDisabledHintStyleForReadOnly?: boolean;

/**
 * See {@link isc.FormItem.getCursorPosition() FormItem.getCursorPosition()}.
 */
getCursorPosition?: Function;

/**
 * See {@link isc.FormItem.linearWidth FormItem.linearWidth}.
 */
linearWidth?: number | string;

/**
 * See {@link isc.FormItem.minHintWidth FormItem.minHintWidth}.
 */
minHintWidth?: number;

/**
 * See {@link isc.FormItem.useAdvancedCriteria FormItem.useAdvancedCriteria}.
 */
useAdvancedCriteria?: boolean;

/**
 * See {@link isc.FormItem.showDisabled FormItem.showDisabled}.
 */
showDisabled?: boolean;

/**
 * See {@link isc.FormItem.getCustomState() FormItem.getCustomState()}.
 */
getCustomState?: Function;

/**
 * See {@link isc.FormItem.required FormItem.required}.
 */
required?: boolean;

/**
 * See {@link isc.FormItem.pickerIconClick() FormItem.pickerIconClick()}.
 */
pickerIconClick?: Function;

/**
 * See {@link isc.FormItem.getVisibleHeight() FormItem.getVisibleHeight()}.
 */
getVisibleHeight?: Function;

/**
 * See {@link isc.FormItem.pickerIconStyle FormItem.pickerIconStyle}.
 */
pickerIconStyle?: string;

/**
 * See {@link isc.FormItem.enable() FormItem.enable()}.
 */
enable?: Function;

/**
 * See {@link isc.FormItem.getErrors() FormItem.getErrors()}.
 */
getErrors?: Function;

/**
 * See {@link isc.FormItem.canHover FormItem.canHover}.
 */
canHover?: boolean;

/**
 * See {@link isc.FormItem.title FormItem.title}.
 */
title?: string;

/**
 * See {@link isc.FormItem.getValue() FormItem.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.FormItem.defaultDynamicValue() FormItem.defaultDynamicValue()}.
 */
defaultDynamicValue?: Function;

/**
 * See {@link isc.FormItem.disableIconsOnReadOnly FormItem.disableIconsOnReadOnly}.
 */
disableIconsOnReadOnly?: boolean;

/**
 * See {@link isc.FormItem.printTitleStyle FormItem.printTitleStyle}.
 */
printTitleStyle?: string;

/**
 * See {@link isc.FormItem.destroyed FormItem.destroyed}.
 */
destroyed?: boolean;

/**
 * See {@link isc.FormItem.multiple FormItem.multiple}.
 */
multiple?: boolean;

/**
 * See {@link isc.FormItem.cellClassName FormItem.cellClassName}.
 */
cellClassName?: string;

/**
 * See {@link isc.FormItem.showFocused FormItem.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.FormItem.dateFormatter FormItem.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.FormItem.hasAdvancedCriteria() FormItem.hasAdvancedCriteria()}.
 */
hasAdvancedCriteria?: Function;

/**
 * See {@link isc.FormItem.width FormItem.width}.
 */
width?: number | string;

/**
 * See {@link isc.FormItem.imageURLSuffix FormItem.imageURLSuffix}.
 */
imageURLSuffix?: string;

/**
 * See {@link isc.FormItem.icons FormItem.icons}.
 */
icons?: FormItemIcon[];

/**
 * See {@link isc.FormItem.getPickerIconTabPosition() FormItem.getPickerIconTabPosition()}.
 */
getPickerIconTabPosition?: Function;

/**
 * See {@link isc.FormItem.readOnlyHover FormItem.readOnlyHover}.
 */
readOnlyHover?: string;

/**
 * See {@link isc.FormItem.titleColSpan FormItem.titleColSpan}.
 */
titleColSpan?: number;

/**
 * See {@link isc.FormItem.showDisabledPickerIconOnFocus FormItem.showDisabledPickerIconOnFocus}.
 */
showDisabledPickerIconOnFocus?: boolean;

/**
 * See {@link isc.FormItem.change() FormItem.change()}.
 */
change?: Function;

/**
 * See {@link isc.FormItem.hintStyle FormItem.hintStyle}.
 */
hintStyle?: string;

/**
 * See {@link isc.FormItem.showErrorStyle FormItem.showErrorStyle}.
 */
showErrorStyle?: boolean;

/**
 * See {@link isc.FormItem.pickerIconName FormItem.pickerIconName}.
 */
pickerIconName?: string;

/**
 * See {@link isc.FormItem.shouldSaveValue FormItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.FormItem.pickerConstructor FormItem.pickerConstructor}.
 */
pickerConstructor?: string;

/**
 * See {@link isc.FormItem.format FormItem.format}.
 */
format?: string;

/**
 * See {@link isc.FormItem.showTitle FormItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.FormItem.updateControlOnOver FormItem.updateControlOnOver}.
 */
updateControlOnOver?: boolean;

/**
 * See {@link isc.FormItem.errorCellClassName FormItem.errorCellClassName}.
 */
errorCellClassName?: string;

/**
 * See {@link isc.FormItem.showClippedTitleOnHover FormItem.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;

/**
 * See {@link isc.FormItem.showPending FormItem.showPending}.
 */
showPending?: boolean;

/**
 * See {@link isc.FormItem.startRow FormItem.startRow}.
 */
startRow?: boolean;

/**
 * See {@link isc.FormItem.getRect() FormItem.getRect()}.
 */
getRect?: Function;

/**
 * See {@link isc.FormItem.getIconWidth() FormItem.getIconWidth()}.
 */
getIconWidth?: Function;

/**
 * See {@link isc.FormItem.setIconDisabled() FormItem.setIconDisabled()}.
 */
setIconDisabled?: Function;

/**
 * See {@link isc.FormItem.blurItem() FormItem.blurItem()}.
 */
blurItem?: Function;

/**
 * See {@link isc.FormItem.rejectInvalidValueOnChange FormItem.rejectInvalidValueOnChange}.
 */
rejectInvalidValueOnChange?: boolean;

/**
 * See {@link isc.FormItem.iconVAlign FormItem.iconVAlign}.
 */
iconVAlign?: string;

/**
 * See {@link isc.FormItem.showIcon() FormItem.showIcon()}.
 */
showIcon?: Function;

/**
 * See {@link isc.FormItem.getValueAsInteger() FormItem.getValueAsInteger()}.
 */
getValueAsInteger?: Function;

/**
 * See {@link isc.FormItem.optionCriteria FormItem.optionCriteria}.
 */
optionCriteria?: Criteria;

/**
 * See {@link isc.FormItem.showPicker() FormItem.showPicker()}.
 */
showPicker?: Function;

/**
 * See {@link isc.FormItem.clearValue() FormItem.clearValue()}.
 */
clearValue?: Function;

/**
 * See {@link isc.FormItem.setRequired() FormItem.setRequired()}.
 */
setRequired?: Function;

/**
 * See {@link isc.FormItem.hasErrors() FormItem.hasErrors()}.
 */
hasErrors?: Function;

/**
 * See {@link isc.FormItem.filterLocally FormItem.filterLocally}.
 */
filterLocally?: boolean;

/**
 * See {@link isc.FormItem.valueField FormItem.valueField}.
 */
valueField?: string;

/**
 * See {@link isc.FormItem.getPrintValueIconStyle() FormItem.getPrintValueIconStyle()}.
 */
getPrintValueIconStyle?: Function;

/**
 * See {@link isc.FormItem.getCanEdit() FormItem.getCanEdit()}.
 */
getCanEdit?: Function;

/**
 * See {@link isc.FormItem.titleOrientation FormItem.titleOrientation}.
 */
titleOrientation?: string;

/**
 * See {@link isc.FormItem.iconWidth FormItem.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.FormItem.operator FormItem.operator}.
 */
operator?: string;

/**
 * See {@link isc.FormItem.valueMap FormItem.valueMap}.
 */
valueMap?: string[] | ValueMap;

/**
 * See {@link isc.FormItem.enableIcon() FormItem.enableIcon()}.
 */
enableIcon?: Function;

/**
 * See {@link isc.FormItem.readOnlyWhen FormItem.readOnlyWhen}.
 */
readOnlyWhen?: AdvancedCriteria;

/**
 * See {@link isc.FormItem.mapValueToDisplay() FormItem.mapValueToDisplay()}.
 */
mapValueToDisplay?: Function;

/**
 * See {@link isc.FormItem.textAlign FormItem.textAlign}.
 */
textAlign?: string;

/**
 * See {@link isc.FormItem.defaultValue FormItem.defaultValue}.
 */
defaultValue?: any;

/**
 * See {@link isc.FormItem.getErrorHTML() FormItem.getErrorHTML()}.
 */
getErrorHTML?: Function;

/**
 * See {@link isc.FormItem.titleStyle FormItem.titleStyle}.
 */
titleStyle?: string;

/**
 * See {@link isc.FormItem.fetchMissingValues FormItem.fetchMissingValues}.
 */
fetchMissingValues?: boolean;

/**
 * See {@link isc.FormItem.editorExit() FormItem.editorExit()}.
 */
editorExit?: Function;

/**
 * See {@link isc.FormItem.clearErrors() FormItem.clearErrors()}.
 */
clearErrors?: Function;

/**
 * See {@link isc.FormItem.canEditOpaqueValues FormItem.canEditOpaqueValues}.
 */
canEditOpaqueValues?: boolean;

/**
 * See {@link isc.FormItem.pickerIconWidth FormItem.pickerIconWidth}.
 */
pickerIconWidth?: number;

/**
 * See {@link isc.FormItem.showOverIcons FormItem.showOverIcons}.
 */
showOverIcons?: boolean;

/**
 * See {@link isc.FormItem.setOptionDataSource() FormItem.setOptionDataSource()}.
 */
setOptionDataSource?: Function;

/**
 * See {@link isc.FormItem.pickerIconHeight FormItem.pickerIconHeight}.
 */
pickerIconHeight?: number;

/**
 * See {@link isc.FormItem.requiredWhen FormItem.requiredWhen}.
 */
requiredWhen?: Criteria;

/**
 * See {@link isc.FormItem.setValueMap() FormItem.setValueMap()}.
 */
setValueMap?: Function;

/**
 * See {@link isc.FormItem.titleHover() FormItem.titleHover()}.
 */
titleHover?: Function;

/**
 * See {@link isc.FormItem.updateState() FormItem.updateState()}.
 */
updateState?: Function;

/**
 * See {@link isc.FormItem.multipleValueSeparator FormItem.multipleValueSeparator}.
 */
multipleValueSeparator?: string;

/**
 * See {@link isc.FormItem.storeValue() FormItem.storeValue()}.
 */
storeValue?: Function;

/**
 * See {@link isc.FormItem.getValueIconStyle() FormItem.getValueIconStyle()}.
 */
getValueIconStyle?: Function;

/**
 * See {@link isc.FormItem.setCellStyle() FormItem.setCellStyle()}.
 */
setCellStyle?: Function;

/**
 * See {@link isc.FormItem.isFocused() FormItem.isFocused()}.
 */
isFocused?: Function;

/**
 * See {@link isc.FormItem.hoverWidth FormItem.hoverWidth}.
 */
hoverWidth?: number | string;

/**
 * See {@link isc.FormItem.supportsCutPasteEvents FormItem.supportsCutPasteEvents}.
 */
supportsCutPasteEvents?: boolean;

/**
 * See {@link isc.FormItem.ariaRole FormItem.ariaRole}.
 */
ariaRole?: string;

/**
 * See {@link isc.FormItem.clipTitle FormItem.clipTitle}.
 */
clipTitle?: boolean;

/**
 * See {@link isc.FormItem.optionDataSource FormItem.optionDataSource}.
 */
optionDataSource?: DataSource | string;

/**
 * See {@link isc.FormItem.valueIcons FormItem.valueIcons}.
 */
valueIcons?: Object;

/**
 * See {@link isc.FormItem.getVAlign() FormItem.getVAlign()}.
 */
getVAlign?: Function;

/**
 * See {@link isc.FormItem.iconHeight FormItem.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.FormItem.disabledHover FormItem.disabledHover}.
 */
disabledHover?: string;

/**
 * See {@link isc.FormItem.click() FormItem.click()}.
 */
click?: Function;

/**
 * See {@link isc.FormItem.isVisible() FormItem.isVisible()}.
 */
isVisible?: Function;

/**
 * See {@link isc.FormItem.canTabToIcons FormItem.canTabToIcons}.
 */
canTabToIcons?: boolean;

/**
 * See {@link isc.FormItem.isPasteEvent() FormItem.isPasteEvent()}.
 */
isPasteEvent?: Function;

/**
 * See {@link isc.FormItem.originalValueMessage FormItem.originalValueMessage}.
 */
originalValueMessage?: string;

/**
 * See {@link isc.FormItem.locateItemBy FormItem.locateItemBy}.
 */
locateItemBy?: string;

/**
 * See {@link isc.FormItem.showPickerIconOnFocus FormItem.showPickerIconOnFocus}.
 */
showPickerIconOnFocus?: boolean;

/**
 * See {@link isc.FormItem.displayField FormItem.displayField}.
 */
displayField?: string;

/**
 * See {@link isc.FormItem.timeFormatter FormItem.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.FormItem.getOptionDataSource() FormItem.getOptionDataSource()}.
 */
getOptionDataSource?: Function;

/**
 * See {@link isc.FormItem.pendingStatusChanged() FormItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.FormItem.endRow FormItem.endRow}.
 */
endRow?: boolean;

/**
 * See {@link isc.FormItem.optionOperationId FormItem.optionOperationId}.
 */
optionOperationId?: string;

/**
 * See {@link isc.FormItem.isCutEvent() FormItem.isCutEvent()}.
 */
isCutEvent?: Function;

/**
 * See {@link isc.FormItem.decimalPrecision FormItem.decimalPrecision}.
 */
decimalPrecision?: number;

/**
 * See {@link isc.FormItem.getValueFieldName() FormItem.getValueFieldName()}.
 */
getValueFieldName?: Function;

/**
 * See {@link isc.FormItem.getIcon() FormItem.getIcon()}.
 */
getIcon?: Function;

/**
 * See {@link isc.FormItem.printReadOnlyTextBoxStyle FormItem.printReadOnlyTextBoxStyle}.
 */
printReadOnlyTextBoxStyle?: string;

/**
 * See {@link isc.FormItem.form FormItem.form}.
 */
form?: DynamicForm;

/**
 * See {@link isc.FormItem.disabled FormItem.disabled}.
 */
disabled?: boolean;

/**
 * See {@link isc.FormItem.getFullDataPath() FormItem.getFullDataPath()}.
 */
getFullDataPath?: Function;

/**
 * See {@link isc.FormItem.clipStaticValue FormItem.clipStaticValue}.
 */
clipStaticValue?: boolean;

/**
 * See {@link isc.FormItem.getDataPath() FormItem.getDataPath()}.
 */
getDataPath?: Function;

/**
 * See {@link isc.FormItem.invalidateDisplayValueCache() FormItem.invalidateDisplayValueCache()}.
 */
invalidateDisplayValueCache?: Function;

/**
 * See {@link isc.FormItem.redrawOnChange FormItem.redrawOnChange}.
 */
redrawOnChange?: boolean;

/**
 * See {@link isc.FormItem.selectOnFocus FormItem.selectOnFocus}.
 */
selectOnFocus?: boolean;

/**
 * See {@link isc.FormItem.pickerIconDefaults FormItem.pickerIconDefaults}.
 */
pickerIconDefaults?: FormItemIcon;

/**
 * See {@link isc.FormItem.setValueIcons() FormItem.setValueIcons()}.
 */
setValueIcons?: Function;

/**
 * See {@link isc.FormItem.errorIconProperties FormItem.errorIconProperties}.
 */
errorIconProperties?: FormItemIcon;

/**
 * See {@link isc.FormItem.showOver FormItem.showOver}.
 */
showOver?: boolean;

/**
 * See {@link isc.FormItem.editPendingCSSText FormItem.editPendingCSSText}.
 */
editPendingCSSText?: string;

/**
 * See {@link isc.FormItem.canFocus FormItem.canFocus}.
 */
canFocus?: boolean;

/**
 * See {@link isc.FormItem.canEdit FormItem.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.FormItem.shouldFetchMissingValue() FormItem.shouldFetchMissingValue()}.
 */
shouldFetchMissingValue?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormItem wraps the non-rendered SmartClient class
 * {@link isc.FormItem FormItem} for React, allowing you to import
 *  FormItem for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class FormItem extends ILogicalComponent {
    props: AsComponentXML<FormItemProps>;
}
