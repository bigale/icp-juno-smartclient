import React from 'react';
import { DBCField, DBCFieldProps } from './DBCField';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListGridFieldProps extends DBCFieldProps {

/**
 * See {@link isc.ListGridField.groupingMode ListGridField.groupingMode}.
 */
groupingMode?: string;

/**
 * See {@link isc.ListGridField.valueIconWidth ListGridField.valueIconWidth}.
 */
valueIconWidth?: number;

/**
 * See {@link isc.ListGridField.includeFrom ListGridField.includeFrom}.
 */
includeFrom?: string;

/**
 * See {@link isc.ListGridField.linkTextProperty ListGridField.linkTextProperty}.
 */
linkTextProperty?: string;

/**
 * See {@link isc.ListGridField.formatInactiveCellValue() ListGridField.formatInactiveCellValue()}.
 */
formatInactiveCellValue?: Function;

/**
 * See {@link isc.ListGridField.recordDoubleClick() ListGridField.recordDoubleClick()}.
 */
recordDoubleClick?: Function;

/**
 * See {@link isc.ListGridField.maxWidth ListGridField.maxWidth}.
 */
maxWidth?: number;

/**
 * See {@link isc.ListGridField.valueField ListGridField.valueField}.
 */
valueField?: string;

/**
 * See {@link isc.ListGridField.showDownIcon ListGridField.showDownIcon}.
 */
showDownIcon?: boolean;

/**
 * See {@link isc.ListGridField.formatCellValue() ListGridField.formatCellValue()}.
 */
formatCellValue?: Function;

/**
 * See {@link isc.ListGridField.summaryValue ListGridField.summaryValue}.
 */
summaryValue?: string;

/**
 * See {@link isc.ListGridField.getRecordSummary() ListGridField.getRecordSummary()}.
 */
getRecordSummary?: Function;

/**
 * See {@link isc.ListGridField.sortByMappedValue ListGridField.sortByMappedValue}.
 */
sortByMappedValue?: boolean;

/**
 * See {@link isc.ListGridField.autoFit ListGridField.autoFit}.
 */
autoFit?: string;

/**
 * See {@link isc.ListGridField.rotateTitle ListGridField.rotateTitle}.
 */
rotateTitle?: boolean;

/**
 * See {@link isc.ListGridField.filterEditorType ListGridField.filterEditorType}.
 */
filterEditorType?: string;

/**
 * See {@link isc.ListGridField.sortByDisplayField ListGridField.sortByDisplayField}.
 */
sortByDisplayField?: boolean;

/**
 * See {@link isc.ListGridField.canToggle ListGridField.canToggle}.
 */
canToggle?: boolean;

/**
 * See {@link isc.ListGridField.optionOperationId ListGridField.optionOperationId}.
 */
optionOperationId?: string;

/**
 * See {@link isc.ListGridField.showIf() ListGridField.showIf()}.
 */
showIf?: Function;

/**
 * See {@link isc.ListGridField.includeInRecordSummaryFields ListGridField.includeInRecordSummaryFields}.
 */
includeInRecordSummaryFields?: string[];

/**
 * See {@link isc.ListGridField.showDefaultContextMenu ListGridField.showDefaultContextMenu}.
 */
showDefaultContextMenu?: boolean;

/**
 * See {@link isc.ListGridField.editorExit() ListGridField.editorExit()}.
 */
editorExit?: Function;

/**
 * See {@link isc.ListGridField.spannedHeaderBaseStyle ListGridField.spannedHeaderBaseStyle}.
 */
spannedHeaderBaseStyle?: string;

/**
 * See {@link isc.ListGridField.validators ListGridField.validators}.
 */
validators?: Validator[];

/**
 * See {@link isc.ListGridField.dateFormatter ListGridField.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.ListGridField.headerBaseStyle ListGridField.headerBaseStyle}.
 */
headerBaseStyle?: string;

/**
 * See {@link isc.ListGridField.autoComplete ListGridField.autoComplete}.
 */
autoComplete?: string;

/**
 * See {@link isc.ListGridField.ignoreKeyboardClicks ListGridField.ignoreKeyboardClicks}.
 */
ignoreKeyboardClicks?: boolean;

/**
 * See {@link isc.ListGridField.baseStyle ListGridField.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.ListGridField.canSortClientOnly ListGridField.canSortClientOnly}.
 */
canSortClientOnly?: boolean;

/**
 * See {@link isc.ListGridField.frozen ListGridField.frozen}.
 */
frozen?: boolean;

/**
 * See {@link isc.ListGridField.editorImageURLPrefix ListGridField.editorImageURLPrefix}.
 */
editorImageURLPrefix?: string;

/**
 * See {@link isc.ListGridField.hiliteHTMLAfterFormat ListGridField.hiliteHTMLAfterFormat}.
 */
hiliteHTMLAfterFormat?: boolean;

/**
 * See {@link isc.ListGridField.getGridSummary() ListGridField.getGridSummary()}.
 */
getGridSummary?: Function;

/**
 * See {@link isc.ListGridField.visibleWhen ListGridField.visibleWhen}.
 */
visibleWhen?: Criteria;

/**
 * See {@link isc.ListGridField.showFileInline ListGridField.showFileInline}.
 */
showFileInline?: boolean;

/**
 * See {@link isc.ListGridField.hiliteIconWidth ListGridField.hiliteIconWidth}.
 */
hiliteIconWidth?: number;

/**
 * See {@link isc.ListGridField.canExport ListGridField.canExport}.
 */
canExport?: boolean;

/**
 * See {@link isc.ListGridField.canFilter ListGridField.canFilter}.
 */
canFilter?: boolean;

/**
 * See {@link isc.ListGridField.autoFitWidth ListGridField.autoFitWidth}.
 */
autoFitWidth?: boolean;

/**
 * See {@link isc.ListGridField.allowFilterExpressions ListGridField.allowFilterExpressions}.
 */
allowFilterExpressions?: boolean;

/**
 * See {@link isc.ListGridField.allowFilterOperators ListGridField.allowFilterOperators}.
 */
allowFilterOperators?: boolean;

/**
 * See {@link isc.ListGridField.operator ListGridField.operator}.
 */
operator?: string;

/**
 * See {@link isc.ListGridField.linkURLPrefix ListGridField.linkURLPrefix}.
 */
linkURLPrefix?: string;

/**
 * See {@link isc.ListGridField.imageURLPrefix ListGridField.imageURLPrefix}.
 */
imageURLPrefix?: string;

/**
 * See {@link isc.ListGridField.cellAlign ListGridField.cellAlign}.
 */
cellAlign?: string;

/**
 * See {@link isc.ListGridField.iconSize ListGridField.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.ListGridField.defaultIconSrc ListGridField.defaultIconSrc}.
 */
defaultIconSrc?: string;

/**
 * See {@link isc.ListGridField.formatGridSummary ListGridField.formatGridSummary}.
 */
formatGridSummary?: string;

/**
 * See {@link isc.ListGridField.valueIconRightPadding ListGridField.valueIconRightPadding}.
 */
valueIconRightPadding?: number;

/**
 * See {@link isc.ListGridField.recordSummaryFunction ListGridField.recordSummaryFunction}.
 */
recordSummaryFunction?: string;

/**
 * See {@link isc.ListGridField.hideOnTablet ListGridField.hideOnTablet}.
 */
hideOnTablet?: boolean;

/**
 * See {@link isc.ListGridField.summaryValueTitle ListGridField.summaryValueTitle}.
 */
summaryValueTitle?: string;

/**
 * See {@link isc.ListGridField.optionDataSource ListGridField.optionDataSource}.
 */
optionDataSource?: string;

/**
 * See {@link isc.ListGridField.showDisabledIcon ListGridField.showDisabledIcon}.
 */
showDisabledIcon?: boolean;

/**
 * See {@link isc.ListGridField.sortDirection ListGridField.sortDirection}.
 */
sortDirection?: string;

/**
 * See {@link isc.ListGridField.autoFreeze ListGridField.autoFreeze}.
 */
autoFreeze?: boolean;

/**
 * See {@link isc.ListGridField.editorTextFormula ListGridField.editorTextFormula}.
 */
editorTextFormula?: UserSummary;

/**
 * See {@link isc.ListGridField.hiliteIconSize ListGridField.hiliteIconSize}.
 */
hiliteIconSize?: number;

/**
 * See {@link isc.ListGridField.canGroupBy ListGridField.canGroupBy}.
 */
canGroupBy?: boolean;

/**
 * See {@link isc.ListGridField.valueIconLeftPadding ListGridField.valueIconLeftPadding}.
 */
valueIconLeftPadding?: number;

/**
 * See {@link isc.ListGridField.isRemoveField ListGridField.isRemoveField}.
 */
isRemoveField?: boolean;

/**
 * See {@link isc.ListGridField.recordClick() ListGridField.recordClick()}.
 */
recordClick?: Function;

/**
 * See {@link isc.ListGridField.aiHoverRequest ListGridField.aiHoverRequest}.
 */
aiHoverRequest?: AIHoverRequest;

/**
 * See {@link isc.ListGridField.getEditorValueMap() ListGridField.getEditorValueMap()}.
 */
getEditorValueMap?: Function;

/**
 * See {@link isc.ListGridField.linkText ListGridField.linkText}.
 */
linkText?: string;

/**
 * See {@link isc.ListGridField.showHilitesInGroupSummary ListGridField.showHilitesInGroupSummary}.
 */
showHilitesInGroupSummary?: boolean;

/**
 * See {@link isc.ListGridField.showFocusedIcon ListGridField.showFocusedIcon}.
 */
showFocusedIcon?: boolean;

/**
 * See {@link isc.ListGridField.hoverDelay ListGridField.hoverDelay}.
 */
hoverDelay?: number;

/**
 * See {@link isc.ListGridField.enableWhen ListGridField.enableWhen}.
 */
enableWhen?: Criteria;

/**
 * See {@link isc.ListGridField.wrap ListGridField.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.ListGridField.editorFormula ListGridField.editorFormula}.
 */
editorFormula?: UserFormula;

/**
 * See {@link isc.ListGridField.applyAfterSummary ListGridField.applyAfterSummary}.
 */
applyAfterSummary?: boolean;

/**
 * See {@link isc.ListGridField.escapeKeyEditAction ListGridField.escapeKeyEditAction}.
 */
escapeKeyEditAction?: string;

/**
 * See {@link isc.ListGridField.editorValueMap ListGridField.editorValueMap}.
 */
editorValueMap?: ValueMap;

/**
 * See {@link isc.ListGridField.headerButtonAriaRole ListGridField.headerButtonAriaRole}.
 */
headerButtonAriaRole?: string;

/**
 * See {@link isc.ListGridField.showValueIconOnly ListGridField.showValueIconOnly}.
 */
showValueIconOnly?: boolean;

/**
 * See {@link isc.ListGridField.hiliteIconRightPadding ListGridField.hiliteIconRightPadding}.
 */
hiliteIconRightPadding?: number;

/**
 * See {@link isc.ListGridField.align ListGridField.align}.
 */
align?: string;

/**
 * See {@link isc.ListGridField.title ListGridField.title}.
 */
title?: string;

/**
 * See {@link isc.ListGridField.validateOnChange ListGridField.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.ListGridField.getFieldTitle() ListGridField.getFieldTitle()}.
 */
getFieldTitle?: Function;

/**
 * See {@link isc.ListGridField.canHilite ListGridField.canHilite}.
 */
canHilite?: boolean;

/**
 * See {@link isc.ListGridField.filterOnKeypress ListGridField.filterOnKeypress}.
 */
filterOnKeypress?: boolean;

/**
 * See {@link isc.ListGridField.valueIconSize ListGridField.valueIconSize}.
 */
valueIconSize?: number;

/**
 * See {@link isc.ListGridField.imageWidth ListGridField.imageWidth}.
 */
imageWidth?: number;

/**
 * See {@link isc.ListGridField.headerHoverDelay ListGridField.headerHoverDelay}.
 */
headerHoverDelay?: number;

/**
 * See {@link isc.ListGridField.editorProperties ListGridField.editorProperties}.
 */
editorProperties?: FormItem;

/**
 * See {@link isc.ListGridField.valueIconHeight ListGridField.valueIconHeight}.
 */
valueIconHeight?: number;

/**
 * See {@link isc.ListGridField.icons ListGridField.icons}.
 */
icons?: FormItemIcon[];

/**
 * See {@link isc.ListGridField.editorIconHeight ListGridField.editorIconHeight}.
 */
editorIconHeight?: number;

/**
 * See {@link isc.ListGridField.editorIconWidth ListGridField.editorIconWidth}.
 */
editorIconWidth?: number;

/**
 * See {@link isc.ListGridField.showEllipsisWhenClipped ListGridField.showEllipsisWhenClipped}.
 */
showEllipsisWhenClipped?: boolean;

/**
 * See {@link isc.ListGridField.required ListGridField.required}.
 */
required?: boolean;

/**
 * See {@link isc.ListGridField.optionFilterContext ListGridField.optionFilterContext}.
 */
optionFilterContext?: DSRequest;

/**
 * See {@link isc.ListGridField.minWidth ListGridField.minWidth}.
 */
minWidth?: number;

/**
 * See {@link isc.ListGridField.defaultValue ListGridField.defaultValue}.
 */
defaultValue?: any;

/**
 * See {@link isc.ListGridField.iconWidth ListGridField.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.ListGridField.optionTextMatchStyle ListGridField.optionTextMatchStyle}.
 */
optionTextMatchStyle?: string;

/**
 * See {@link isc.ListGridField.imageURLSuffix ListGridField.imageURLSuffix}.
 */
imageURLSuffix?: string;

/**
 * See {@link isc.ListGridField.canAutoFitWidth ListGridField.canAutoFitWidth}.
 */
canAutoFitWidth?: boolean;

/**
 * See {@link isc.ListGridField.aiHoverContentsPrefix ListGridField.aiHoverContentsPrefix}.
 */
aiHoverContentsPrefix?: string;

/**
 * See {@link isc.ListGridField.pendingAsyncCellValue ListGridField.pendingAsyncCellValue}.
 */
pendingAsyncCellValue?: string;

/**
 * See {@link isc.ListGridField.hoverWrap ListGridField.hoverWrap}.
 */
hoverWrap?: boolean;

/**
 * See {@link isc.ListGridField.getGroupSummary() ListGridField.getGroupSummary()}.
 */
getGroupSummary?: Function;

/**
 * See {@link isc.ListGridField.defaultDynamicValue() ListGridField.defaultDynamicValue()}.
 */
defaultDynamicValue?: Function;

/**
 * See {@link isc.ListGridField.defaultGroupingMode ListGridField.defaultGroupingMode}.
 */
defaultGroupingMode?: string;

/**
 * See {@link isc.ListGridField.cellChanged() ListGridField.cellChanged()}.
 */
cellChanged?: Function;

/**
 * See {@link isc.ListGridField.skipLineBreaks ListGridField.skipLineBreaks}.
 */
skipLineBreaks?: boolean;

/**
 * See {@link isc.ListGridField.hoverHTML() ListGridField.hoverHTML()}.
 */
hoverHTML?: Function;

/**
 * See {@link isc.ListGridField.showAlternateStyle ListGridField.showAlternateStyle}.
 */
showAlternateStyle?: boolean;

/**
 * See {@link isc.ListGridField.inputFormat ListGridField.inputFormat}.
 */
inputFormat?: string;

/**
 * See {@link isc.ListGridField.hiliteIconPosition ListGridField.hiliteIconPosition}.
 */
hiliteIconPosition?: string;

/**
 * See {@link isc.ListGridField.displayField ListGridField.displayField}.
 */
displayField?: string;

/**
 * See {@link isc.ListGridField.exportRawNumbers ListGridField.exportRawNumbers}.
 */
exportRawNumbers?: boolean;

/**
 * See {@link isc.ListGridField.exportFormat ListGridField.exportFormat}.
 */
exportFormat?: string;

/**
 * See {@link isc.ListGridField.hiliteIconLeftPadding ListGridField.hiliteIconLeftPadding}.
 */
hiliteIconLeftPadding?: number;

/**
 * See {@link isc.ListGridField.editorValueIconWidth ListGridField.editorValueIconWidth}.
 */
editorValueIconWidth?: number;

/**
 * See {@link isc.ListGridField.type ListGridField.type}.
 */
type?: string;

/**
 * See {@link isc.ListGridField.summaryTitle ListGridField.summaryTitle}.
 */
summaryTitle?: string;

/**
 * See {@link isc.ListGridField.displayValueFromRecord ListGridField.displayValueFromRecord}.
 */
displayValueFromRecord?: boolean;

/**
 * See {@link isc.ListGridField.valueMap ListGridField.valueMap}.
 */
valueMap?: Object | string[];

/**
 * See {@link isc.ListGridField.exportFieldWidth ListGridField.exportFieldWidth}.
 */
exportFieldWidth?: boolean;

/**
 * See {@link isc.ListGridField.name ListGridField.name}.
 */
name?: string;

/**
 * See {@link isc.ListGridField.headerTitle ListGridField.headerTitle}.
 */
headerTitle?: string;

/**
 * See {@link isc.ListGridField.canDragResize ListGridField.canDragResize}.
 */
canDragResize?: boolean;

/**
 * See {@link isc.ListGridField.excludeFromState ListGridField.excludeFromState}.
 */
excludeFromState?: boolean;

/**
 * See {@link isc.ListGridField.multiple ListGridField.multiple}.
 */
multiple?: boolean;

/**
 * See {@link isc.ListGridField.alwaysShowOperatorIcon ListGridField.alwaysShowOperatorIcon}.
 */
alwaysShowOperatorIcon?: boolean;

/**
 * See {@link isc.ListGridField.showTitle ListGridField.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.ListGridField.suppressValueIcon ListGridField.suppressValueIcon}.
 */
suppressValueIcon?: boolean;

/**
 * See {@link isc.ListGridField.formatGroupSummary ListGridField.formatGroupSummary}.
 */
formatGroupSummary?: string;

/**
 * See {@link isc.ListGridField.showGridSummary ListGridField.showGridSummary}.
 */
showGridSummary?: boolean;

/**
 * See {@link isc.ListGridField.includeInRecordSummary ListGridField.includeInRecordSummary}.
 */
includeInRecordSummary?: boolean;

/**
 * See {@link isc.ListGridField.headerButtonAriaState ListGridField.headerButtonAriaState}.
 */
headerButtonAriaState?: Object;

/**
 * See {@link isc.ListGridField.exportRawValues ListGridField.exportRawValues}.
 */
exportRawValues?: boolean;

/**
 * See {@link isc.ListGridField.groupGranularity ListGridField.groupGranularity}.
 */
groupGranularity?: number;

/**
 * See {@link isc.ListGridField.aiFieldRequest ListGridField.aiFieldRequest}.
 */
aiFieldRequest?: AIFieldRequest;

/**
 * See {@link isc.ListGridField.hideOnPhone ListGridField.hideOnPhone}.
 */
hideOnPhone?: boolean;

/**
 * See {@link isc.ListGridField.filterOperator ListGridField.filterOperator}.
 */
filterOperator?: string;

/**
 * See {@link isc.ListGridField.cellPrompt ListGridField.cellPrompt}.
 */
cellPrompt?: string;

/**
 * See {@link isc.ListGridField.canFreeze ListGridField.canFreeze}.
 */
canFreeze?: boolean;

/**
 * See {@link isc.ListGridField.hidden ListGridField.hidden}.
 */
hidden?: boolean;

/**
 * See {@link isc.ListGridField.formatEditorValue() ListGridField.formatEditorValue()}.
 */
formatEditorValue?: Function;

/**
 * See {@link isc.ListGridField.getGroupTitle() ListGridField.getGroupTitle()}.
 */
getGroupTitle?: Function;

/**
 * See {@link isc.ListGridField.userFormula ListGridField.userFormula}.
 */
userFormula?: UserFormula;

/**
 * See {@link isc.ListGridField.valign ListGridField.valign}.
 */
valign?: string;

/**
 * See {@link isc.ListGridField.hiliteIconHeight ListGridField.hiliteIconHeight}.
 */
hiliteIconHeight?: number;

/**
 * See {@link isc.ListGridField.filterEditorProperties ListGridField.filterEditorProperties}.
 */
filterEditorProperties?: FormItem;

/**
 * See {@link isc.ListGridField.groupingModes ListGridField.groupingModes}.
 */
groupingModes?: ValueMap;

/**
 * See {@link isc.ListGridField.sortNormalizer() ListGridField.sortNormalizer()}.
 */
sortNormalizer?: Function;

/**
 * See {@link isc.ListGridField.asyncMissingCellValue ListGridField.asyncMissingCellValue}.
 */
asyncMissingCellValue?: string;

/**
 * See {@link isc.ListGridField.imageSize ListGridField.imageSize}.
 */
imageSize?: number;

/**
 * See {@link isc.ListGridField.linkURLSuffix ListGridField.linkURLSuffix}.
 */
linkURLSuffix?: string;

/**
 * See {@link isc.ListGridField.parseEditorValue() ListGridField.parseEditorValue()}.
 */
parseEditorValue?: Function;

/**
 * See {@link isc.ListGridField.canHide ListGridField.canHide}.
 */
canHide?: boolean;

/**
 * See {@link isc.ListGridField.enterKeyEditAction ListGridField.enterKeyEditAction}.
 */
enterKeyEditAction?: string;

/**
 * See {@link isc.ListGridField.showHoverComponents ListGridField.showHoverComponents}.
 */
showHoverComponents?: boolean;

/**
 * See {@link isc.ListGridField.prompt ListGridField.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.ListGridField.asyncErrorCellValue ListGridField.asyncErrorCellValue}.
 */
asyncErrorCellValue?: string;

/**
 * See {@link isc.ListGridField.summaryFunction ListGridField.summaryFunction}.
 */
summaryFunction?: string | string[];

/**
 * See {@link isc.ListGridField.showFilterEditorHovers ListGridField.showFilterEditorHovers}.
 */
showFilterEditorHovers?: boolean;

/**
 * See {@link isc.ListGridField.shouldPrint ListGridField.shouldPrint}.
 */
shouldPrint?: boolean;

/**
 * See {@link isc.ListGridField.getSummaryTitle() ListGridField.getSummaryTitle()}.
 */
getSummaryTitle?: Function;

/**
 * See {@link isc.ListGridField.getAutoFreezePosition() ListGridField.getAutoFreezePosition()}.
 */
getAutoFreezePosition?: Function;

/**
 * See {@link isc.ListGridField.iconHeight ListGridField.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.ListGridField.imageHeight ListGridField.imageHeight}.
 */
imageHeight?: number;

/**
 * See {@link isc.ListGridField.defaultFilterValue ListGridField.defaultFilterValue}.
 */
defaultFilterValue?: any;

/**
 * See {@link isc.ListGridField.canSort ListGridField.canSort}.
 */
canSort?: boolean;

/**
 * See {@link isc.ListGridField.groupPrecision ListGridField.groupPrecision}.
 */
groupPrecision?: number;

/**
 * See {@link isc.ListGridField.width ListGridField.width}.
 */
width?: number | string;

/**
 * See {@link isc.ListGridField.editorType ListGridField.editorType}.
 */
editorType?: string;

/**
 * See {@link isc.ListGridField.showSelectedIcon ListGridField.showSelectedIcon}.
 */
showSelectedIcon?: boolean;

/**
 * See {@link isc.ListGridField.autoFitWidthApproach ListGridField.autoFitWidthApproach}.
 */
autoFitWidthApproach?: string;

/**
 * See {@link isc.ListGridField.editorImageURLSuffix ListGridField.editorImageURLSuffix}.
 */
editorImageURLSuffix?: string;

/**
 * See {@link isc.ListGridField.change() ListGridField.change()}.
 */
change?: Function;

/**
 * See {@link isc.ListGridField.valueIconOrientation ListGridField.valueIconOrientation}.
 */
valueIconOrientation?: string;

/**
 * See {@link isc.ListGridField.canEditSummary ListGridField.canEditSummary}.
 */
canEditSummary?: boolean;

/**
 * See {@link isc.ListGridField.iconSpacing ListGridField.iconSpacing}.
 */
iconSpacing?: number;

/**
 * See {@link isc.ListGridField.userSummary ListGridField.userSummary}.
 */
userSummary?: UserSummary;

/**
 * See {@link isc.ListGridField.selectCellTextOnClick ListGridField.selectCellTextOnClick}.
 */
selectCellTextOnClick?: boolean;

/**
 * See {@link isc.ListGridField.showGroupSummary ListGridField.showGroupSummary}.
 */
showGroupSummary?: boolean;

/**
 * See {@link isc.ListGridField.headerTitleStyle ListGridField.headerTitleStyle}.
 */
headerTitleStyle?: string;

/**
 * See {@link isc.ListGridField.target ListGridField.target}.
 */
target?: string;

/**
 * See {@link isc.ListGridField.editorValueIconHeight ListGridField.editorValueIconHeight}.
 */
editorValueIconHeight?: number;

/**
 * See {@link isc.ListGridField.format ListGridField.format}.
 */
format?: string;

/**
 * See {@link isc.ListGridField.decimalPrecision ListGridField.decimalPrecision}.
 */
decimalPrecision?: number;

/**
 * See {@link isc.ListGridField.hoverWidth ListGridField.hoverWidth}.
 */
hoverWidth?: number;

/**
 * See {@link isc.ListGridField.escapeHTML ListGridField.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.ListGridField.initialValue ListGridField.initialValue}.
 */
initialValue?: any;

/**
 * See {@link isc.ListGridField.partialSummary ListGridField.partialSummary}.
 */
partialSummary?: boolean;

/**
 * See {@link isc.ListGridField.getGroupValue() ListGridField.getGroupValue()}.
 */
getGroupValue?: Function;

/**
 * See {@link isc.ListGridField.iconOrientation ListGridField.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.ListGridField.canEditAISummary ListGridField.canEditAISummary}.
 */
canEditAISummary?: boolean;

/**
 * See {@link isc.ListGridField.canEditFormula ListGridField.canEditFormula}.
 */
canEditFormula?: boolean;

/**
 * See {@link isc.ListGridField.editorEnter() ListGridField.editorEnter()}.
 */
editorEnter?: Function;

/**
 * See {@link isc.ListGridField.showRollOverIcon ListGridField.showRollOverIcon}.
 */
showRollOverIcon?: boolean;

/**
 * See {@link isc.ListGridField.arrowKeyEditAction ListGridField.arrowKeyEditAction}.
 */
arrowKeyEditAction?: string;

/**
 * See {@link isc.ListGridField.showHover ListGridField.showHover}.
 */
showHover?: boolean;

/**
 * See {@link isc.ListGridField.iconVAlign ListGridField.iconVAlign}.
 */
iconVAlign?: string;

/**
 * See {@link isc.ListGridField.timeFormatter ListGridField.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.ListGridField.iconCursor ListGridField.iconCursor}.
 */
iconCursor?: string;

/**
 * See {@link isc.ListGridField.canEdit ListGridField.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.ListGridField.emptyCellValue ListGridField.emptyCellValue}.
 */
emptyCellValue?: string;

/**
 * See {@link isc.ListGridField.changed() ListGridField.changed()}.
 */
changed?: Function;

/**
 * See {@link isc.ListGridField.optionCriteria ListGridField.optionCriteria}.
 */
optionCriteria?: Criteria;

/**
 * See {@link isc.ListGridField.cellIcon ListGridField.cellIcon}.
 */
cellIcon?: string;

/**
 * See {@link isc.ListGridField.autoFetchDisplayMap ListGridField.autoFetchDisplayMap}.
 */
autoFetchDisplayMap?: boolean;

/**
 * See {@link isc.ListGridField.canReorder ListGridField.canReorder}.
 */
canReorder?: boolean;

/**
 * See {@link isc.ListGridField.defaultWidth ListGridField.defaultWidth}.
 */
defaultWidth?: number;

/**
 * See {@link isc.ListGridField.leaveHeaderMenuButtonSpace ListGridField.leaveHeaderMenuButtonSpace}.
 */
leaveHeaderMenuButtonSpace?: boolean;

/**
 * See {@link isc.ListGridField.valueIconClick() ListGridField.valueIconClick()}.
 */
valueIconClick?: Function;

/**
 * See {@link isc.ListGridField.decimalPad ListGridField.decimalPad}.
 */
decimalPad?: number;

/**
 * See {@link isc.ListGridField.filterEditorValueMap ListGridField.filterEditorValueMap}.
 */
filterEditorValueMap?: Object;

/**
 * See {@link isc.ListGridField.dataPath ListGridField.dataPath}.
 */
dataPath?: string;

/**
 * See {@link isc.ListGridField.icon ListGridField.icon}.
 */
icon?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListGridField wraps the SmartClient object
 * {@link isc.ListGridField ListGridField} for React, allowing you to import
 * ListGridField for use in React JS and JSX.
 * @class
 */
declare class ListGridField extends DBCField {
    props: AsComponentXML<ListGridFieldProps>;
}
