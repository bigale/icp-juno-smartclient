import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListGridProps extends VLayoutProps {

/**
 * See {@link isc.ListGrid.clipHeaderTitles ListGrid.clipHeaderTitles}.
 */
clipHeaderTitles?: boolean;

/**
 * See {@link isc.ListGrid.hiliteCanReplaceValue ListGrid.hiliteCanReplaceValue}.
 */
hiliteCanReplaceValue?: boolean;

/**
 * See {@link isc.ListGrid.filterByCell ListGrid.filterByCell}.
 */
filterByCell?: boolean;

/**
 * See {@link isc.ListGrid.autoFitExtraRecords ListGrid.autoFitExtraRecords}.
 */
autoFitExtraRecords?: number;

/**
 * See {@link isc.ListGrid.showGroupSummaryInHeader ListGrid.showGroupSummaryInHeader}.
 */
showGroupSummaryInHeader?: boolean;

/**
 * See {@link isc.ListGrid.cellErrorIconOver() ListGrid.cellErrorIconOver()}.
 */
cellErrorIconOver?: Function;

/**
 * See {@link isc.ListGrid.getDefaultFormattedFieldValue() ListGrid.getDefaultFormattedFieldValue()}.
 */
getDefaultFormattedFieldValue?: Function;

/**
 * See {@link isc.ListGrid.getHeaderSpanContextMenuItems() ListGrid.getHeaderSpanContextMenuItems()}.
 */
getHeaderSpanContextMenuItems?: Function;

/**
 * See {@link isc.ListGrid.collapseGroupOnRowClick ListGrid.collapseGroupOnRowClick}.
 */
collapseGroupOnRowClick?: boolean;

/**
 * See {@link isc.ListGrid.anySelected() ListGrid.anySelected()}.
 */
anySelected?: Function;

/**
 * See {@link isc.ListGrid.editFailed() ListGrid.editFailed()}.
 */
editFailed?: Function;

/**
 * See {@link isc.ListGrid.operatorIconProperties ListGrid.operatorIconProperties}.
 */
operatorIconProperties?: FormItemIcon;

/**
 * See {@link isc.ListGrid.cellContextClick() ListGrid.cellContextClick()}.
 */
cellContextClick?: Function;

/**
 * See {@link isc.ListGrid.headerMenuButtonProperties ListGrid.headerMenuButtonProperties}.
 */
headerMenuButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.ListGrid.showFields() ListGrid.showFields()}.
 */
showFields?: Function;

/**
 * See {@link isc.ListGrid.tableRowStyle ListGrid.tableRowStyle}.
 */
tableRowStyle?: string;

/**
 * See {@link isc.ListGrid.editPendingMarkerStyle ListGrid.editPendingMarkerStyle}.
 */
editPendingMarkerStyle?: string;

/**
 * See {@link isc.ListGrid.removeFieldProperties ListGrid.removeFieldProperties}.
 */
removeFieldProperties?: ListGridField;

/**
 * See {@link isc.ListGrid.headerMenuButtonSnapOffsetLeft ListGrid.headerMenuButtonSnapOffsetLeft}.
 */
headerMenuButtonSnapOffsetLeft?: number;

/**
 * See {@link isc.ListGrid.originBaseStyle ListGrid.originBaseStyle}.
 */
originBaseStyle?: string;

/**
 * See {@link isc.ListGrid.savedSearchStoredState ListGrid.savedSearchStoredState}.
 */
savedSearchStoredState?: string;

/**
 * See {@link isc.ListGrid.fieldPickerShowSampleValues ListGrid.fieldPickerShowSampleValues}.
 */
fieldPickerShowSampleValues?: boolean;

/**
 * See {@link isc.ListGrid.showFilterWindow() ListGrid.showFilterWindow()}.
 */
showFilterWindow?: Function;

/**
 * See {@link isc.ListGrid.fullRowRangeDisplayValue ListGrid.fullRowRangeDisplayValue}.
 */
fullRowRangeDisplayValue?: string;

/**
 * See {@link isc.ListGrid.showSelectionCanvas ListGrid.showSelectionCanvas}.
 */
showSelectionCanvas?: boolean;

/**
 * See {@link isc.ListGrid.getDrawnRowHeight() ListGrid.getDrawnRowHeight()}.
 */
getDrawnRowHeight?: Function;

/**
 * See {@link isc.ListGrid.rangeRowCountFormat ListGrid.rangeRowCountFormat}.
 */
rangeRowCountFormat?: string;

/**
 * See {@link isc.ListGrid.rowSpanSelectionMode ListGrid.rowSpanSelectionMode}.
 */
rowSpanSelectionMode?: string;

/**
 * See {@link isc.ListGrid.escapeKeyEditAction ListGrid.escapeKeyEditAction}.
 */
escapeKeyEditAction?: string;

/**
 * See {@link isc.ListGrid.allowFilterOperators ListGrid.allowFilterOperators}.
 */
allowFilterOperators?: boolean;

/**
 * See {@link isc.ListGrid.dragScrollRedrawDelay ListGrid.dragScrollRedrawDelay}.
 */
dragScrollRedrawDelay?: number;

/**
 * See {@link isc.ListGrid.expansionFieldImageShowSelected ListGrid.expansionFieldImageShowSelected}.
 */
expansionFieldImageShowSelected?: boolean;

/**
 * See {@link isc.ListGrid.valueIconSize ListGrid.valueIconSize}.
 */
valueIconSize?: number;

/**
 * See {@link isc.ListGrid.filterWindowCriteriaIndicatorProperties ListGrid.filterWindowCriteriaIndicatorProperties}.
 */
filterWindowCriteriaIndicatorProperties?: Canvas;

/**
 * See {@link isc.ListGrid.clearAllSortingText ListGrid.clearAllSortingText}.
 */
clearAllSortingText?: string;

/**
 * See {@link isc.ListGrid.getRowCountStatus() ListGrid.getRowCountStatus()}.
 */
getRowCountStatus?: Function;

/**
 * See {@link isc.ListGrid.booleanPartialImage ListGrid.booleanPartialImage}.
 */
booleanPartialImage?: string;

/**
 * See {@link isc.ListGrid.headerButtonProperties ListGrid.headerButtonProperties}.
 */
headerButtonProperties?: Button;

/**
 * See {@link isc.ListGrid.cellErrorIconOut() ListGrid.cellErrorIconOut()}.
 */
cellErrorIconOut?: Function;

/**
 * See {@link isc.ListGrid.aiFilterWindowHint ListGrid.aiFilterWindowHint}.
 */
aiFilterWindowHint?: string;

/**
 * See {@link isc.ListGrid.setHeaderSpans() ListGrid.setHeaderSpans()}.
 */
setHeaderSpans?: Function;

/**
 * See {@link isc.ListGrid.setFieldIcon() ListGrid.setFieldIcon()}.
 */
setFieldIcon?: Function;

/**
 * See {@link isc.ListGrid.setCanRemoveRecords() ListGrid.setCanRemoveRecords()}.
 */
setCanRemoveRecords?: Function;

/**
 * See {@link isc.ListGrid.applyFormulaAfterSummary ListGrid.applyFormulaAfterSummary}.
 */
applyFormulaAfterSummary?: boolean;

/**
 * See {@link isc.ListGrid.dataProperties ListGrid.dataProperties}.
 */
dataProperties?: ResultSet;

/**
 * See {@link isc.ListGrid.canMultiGroup ListGrid.canMultiGroup}.
 */
canMultiGroup?: boolean;

/**
 * See {@link isc.ListGrid.invalidSummaryValue ListGrid.invalidSummaryValue}.
 */
invalidSummaryValue?: string;

/**
 * See {@link isc.ListGrid.checkboxFieldImageWidth ListGrid.checkboxFieldImageWidth}.
 */
checkboxFieldImageWidth?: number;

/**
 * See {@link isc.ListGrid.hilitesChanged() ListGrid.hilitesChanged()}.
 */
hilitesChanged?: Function;

/**
 * See {@link isc.ListGrid.canEdit ListGrid.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.ListGrid.groupTitleField ListGrid.groupTitleField}.
 */
groupTitleField?: string;

/**
 * See {@link isc.ListGrid.getDataSource() ListGrid.getDataSource()}.
 */
getDataSource?: Function;

/**
 * See {@link isc.ListGrid.aiSortFieldMaxRecordsMessage ListGrid.aiSortFieldMaxRecordsMessage}.
 */
aiSortFieldMaxRecordsMessage?: string;

/**
 * See {@link isc.ListGrid.groupSummaryRecordProperty ListGrid.groupSummaryRecordProperty}.
 */
groupSummaryRecordProperty?: string;

/**
 * See {@link isc.ListGrid.editSelectionType ListGrid.editSelectionType}.
 */
editSelectionType?: string;

/**
 * See {@link isc.ListGrid.recordCanSelectProperty ListGrid.recordCanSelectProperty}.
 */
recordCanSelectProperty?: string;

/**
 * See {@link isc.ListGrid.showRecordComponents ListGrid.showRecordComponents}.
 */
showRecordComponents?: boolean;

/**
 * See {@link isc.ListGrid.getSummaryTitle() ListGrid.getSummaryTitle()}.
 */
getSummaryTitle?: Function;

/**
 * See {@link isc.ListGrid.dateInputFormat ListGrid.dateInputFormat}.
 */
dateInputFormat?: string;

/**
 * See {@link isc.ListGrid.showHeaderSpanContextMenu ListGrid.showHeaderSpanContextMenu}.
 */
showHeaderSpanContextMenu?: boolean;

/**
 * See {@link isc.ListGrid.hideDragHandles() ListGrid.hideDragHandles()}.
 */
hideDragHandles?: Function;

/**
 * See {@link isc.ListGrid.headerHover() ListGrid.headerHover()}.
 */
headerHover?: Function;

/**
 * See {@link isc.ListGrid.autoFitMaxRecords ListGrid.autoFitMaxRecords}.
 */
autoFitMaxRecords?: number;

/**
 * See {@link isc.ListGrid.getHeaderContextMenuItems() ListGrid.getHeaderContextMenuItems()}.
 */
getHeaderContextMenuItems?: Function;

/**
 * See {@link isc.ListGrid.saveAllEdits() ListGrid.saveAllEdits()}.
 */
saveAllEdits?: Function;

/**
 * See {@link isc.ListGrid.criteriaIndicatorColor ListGrid.criteriaIndicatorColor}.
 */
criteriaIndicatorColor?: string;

/**
 * See {@link isc.ListGrid.setHideOnTablet() ListGrid.setHideOnTablet()}.
 */
setHideOnTablet?: Function;

/**
 * See {@link isc.ListGrid.exportRawValues ListGrid.exportRawValues}.
 */
exportRawValues?: boolean;

/**
 * See {@link isc.ListGrid.setSortState() ListGrid.setSortState()}.
 */
setSortState?: Function;

/**
 * See {@link isc.ListGrid.setDataSource() ListGrid.setDataSource()}.
 */
setDataSource?: Function;

/**
 * See {@link isc.ListGrid.getUserCriteriaState() ListGrid.getUserCriteriaState()}.
 */
getUserCriteriaState?: Function;

/**
 * See {@link isc.ListGrid.drawAllMaxCells ListGrid.drawAllMaxCells}.
 */
drawAllMaxCells?: number;

/**
 * See {@link isc.ListGrid.recordCustomStyleProperty ListGrid.recordCustomStyleProperty}.
 */
recordCustomStyleProperty?: string;

/**
 * See {@link isc.ListGrid.formatInactiveCellValue() ListGrid.formatInactiveCellValue()}.
 */
formatInactiveCellValue?: Function;

/**
 * See {@link isc.ListGrid.unsort() ListGrid.unsort()}.
 */
unsort?: Function;

/**
 * See {@link isc.ListGrid.exportClientData() ListGrid.exportClientData()}.
 */
exportClientData?: Function;

/**
 * See {@link isc.ListGrid.fastCellUpdates ListGrid.fastCellUpdates}.
 */
fastCellUpdates?: boolean;

/**
 * See {@link isc.ListGrid.useAdvancedCriteria ListGrid.useAdvancedCriteria}.
 */
useAdvancedCriteria?: boolean;

/**
 * See {@link isc.ListGrid.setBodyStyleName() ListGrid.setBodyStyleName()}.
 */
setBodyStyleName?: Function;

/**
 * See {@link isc.ListGrid.showExpansionEditorSaveButton ListGrid.showExpansionEditorSaveButton}.
 */
showExpansionEditorSaveButton?: boolean;

/**
 * See {@link isc.ListGrid.confirmDiscardEditsMessage ListGrid.confirmDiscardEditsMessage}.
 */
confirmDiscardEditsMessage?: string;

/**
 * See {@link isc.ListGrid.groupTitleColumnDefaults ListGrid.groupTitleColumnDefaults}.
 */
groupTitleColumnDefaults?: ListGridField;

/**
 * See {@link isc.ListGrid.dataArity ListGrid.dataArity}.
 */
dataArity?: string;

/**
 * See {@link isc.ListGrid.canFreezeFields ListGrid.canFreezeFields}.
 */
canFreezeFields?: boolean;

/**
 * See {@link isc.ListGrid.getEditedRecord() ListGrid.getEditedRecord()}.
 */
getEditedRecord?: Function;

/**
 * See {@link isc.ListGrid.hasChanges() ListGrid.hasChanges()}.
 */
hasChanges?: Function;

/**
 * See {@link isc.ListGrid.fetchRowCount() ListGrid.fetchRowCount()}.
 */
fetchRowCount?: Function;

/**
 * See {@link isc.ListGrid.rowOver() ListGrid.rowOver()}.
 */
rowOver?: Function;

/**
 * See {@link isc.ListGrid.getGroupMembers() ListGrid.getGroupMembers()}.
 */
getGroupMembers?: Function;

/**
 * See {@link isc.ListGrid.booleanTrueImage ListGrid.booleanTrueImage}.
 */
booleanTrueImage?: string;

/**
 * See {@link isc.ListGrid.setAutoFitFieldWidths() ListGrid.setAutoFitFieldWidths()}.
 */
setAutoFitFieldWidths?: Function;

/**
 * See {@link isc.ListGrid.showRecordComponent() ListGrid.showRecordComponent()}.
 */
showRecordComponent?: Function;

/**
 * See {@link isc.ListGrid.reselectOnUpdate ListGrid.reselectOnUpdate}.
 */
reselectOnUpdate?: boolean;

/**
 * See {@link isc.ListGrid.hideFields() ListGrid.hideFields()}.
 */
hideFields?: Function;

/**
 * See {@link isc.ListGrid.sorterClick() ListGrid.sorterClick()}.
 */
sorterClick?: Function;

/**
 * See {@link isc.ListGrid.editFailedBaseStyle ListGrid.editFailedBaseStyle}.
 */
editFailedBaseStyle?: string;

/**
 * See {@link isc.ListGrid.autoFitMaxHeight ListGrid.autoFitMaxHeight}.
 */
autoFitMaxHeight?: number;

/**
 * See {@link isc.ListGrid.hilites ListGrid.hilites}.
 */
hilites?: Hilite[];

/**
 * See {@link isc.ListGrid.errorIconWidth ListGrid.errorIconWidth}.
 */
errorIconWidth?: number;

/**
 * See {@link isc.ListGrid.getExpansionComponent() ListGrid.getExpansionComponent()}.
 */
getExpansionComponent?: Function;

/**
 * See {@link isc.ListGrid.setSelectionAppearance() ListGrid.setSelectionAppearance()}.
 */
setSelectionAppearance?: Function;

/**
 * See {@link isc.ListGrid.getFields() ListGrid.getFields()}.
 */
getFields?: Function;

/**
 * See {@link isc.ListGrid.setUserAIFilterRequest() ListGrid.setUserAIFilterRequest()}.
 */
setUserAIFilterRequest?: Function;

/**
 * See {@link isc.ListGrid.setBodyOverflow() ListGrid.setBodyOverflow()}.
 */
setBodyOverflow?: Function;

/**
 * See {@link isc.ListGrid.filterWindowFilterProperties ListGrid.filterWindowFilterProperties}.
 */
filterWindowFilterProperties?: FilterBuilder;

/**
 * See {@link isc.ListGrid.useCopyPasteShortcuts ListGrid.useCopyPasteShortcuts}.
 */
useCopyPasteShortcuts?: boolean;

/**
 * See {@link isc.ListGrid.hideField() ListGrid.hideField()}.
 */
hideField?: Function;

/**
 * See {@link isc.ListGrid.autoFitWidthApproach ListGrid.autoFitWidthApproach}.
 */
autoFitWidthApproach?: string;

/**
 * See {@link isc.ListGrid.cellSelectionChanged() ListGrid.cellSelectionChanged()}.
 */
cellSelectionChanged?: Function;

/**
 * See {@link isc.ListGrid.setFixedRecordHeights() ListGrid.setFixedRecordHeights()}.
 */
setFixedRecordHeights?: Function;

/**
 * See {@link isc.ListGrid.cellRole ListGrid.cellRole}.
 */
cellRole?: string;

/**
 * See {@link isc.ListGrid.drawAreaChanged() ListGrid.drawAreaChanged()}.
 */
drawAreaChanged?: Function;

/**
 * See {@link isc.ListGrid.selectionCanvasProperties ListGrid.selectionCanvasProperties}.
 */
selectionCanvasProperties?: Canvas;

/**
 * See {@link isc.ListGrid.createRecordComponent() ListGrid.createRecordComponent()}.
 */
createRecordComponent?: Function;

/**
 * See {@link isc.ListGrid.canShowFilterEditor ListGrid.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;

/**
 * See {@link isc.ListGrid.canSaveSearches ListGrid.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.ListGrid.redrawHeader() ListGrid.redrawHeader()}.
 */
redrawHeader?: Function;

/**
 * See {@link isc.ListGrid.getValueIcon() ListGrid.getValueIcon()}.
 */
getValueIcon?: Function;

/**
 * See {@link isc.ListGrid.updateData() ListGrid.updateData()}.
 */
updateData?: Function;

/**
 * See {@link isc.ListGrid.summaryRowDataSource ListGrid.summaryRowDataSource}.
 */
summaryRowDataSource?: DataSource;

/**
 * See {@link isc.ListGrid.fetchData() ListGrid.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.ListGrid.firstCellStyle ListGrid.firstCellStyle}.
 */
firstCellStyle?: string;

/**
 * See {@link isc.ListGrid.exportFieldWidths ListGrid.exportFieldWidths}.
 */
exportFieldWidths?: boolean;

/**
 * See {@link isc.ListGrid.headerMenuButtonIconWidth ListGrid.headerMenuButtonIconWidth}.
 */
headerMenuButtonIconWidth?: number;

/**
 * See {@link isc.ListGrid.baseStyle ListGrid.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.ListGrid.getFieldState() ListGrid.getFieldState()}.
 */
getFieldState?: Function;

/**
 * See {@link isc.ListGrid.getColumnPageLeft() ListGrid.getColumnPageLeft()}.
 */
getColumnPageLeft?: Function;

/**
 * See {@link isc.ListGrid.getEventColumn() ListGrid.getEventColumn()}.
 */
getEventColumn?: Function;

/**
 * See {@link isc.ListGrid.dragTrackerStyle ListGrid.dragTrackerStyle}.
 */
dragTrackerStyle?: string;

/**
 * See {@link isc.ListGrid.showFilterEditorTitle ListGrid.showFilterEditorTitle}.
 */
showFilterEditorTitle?: string;

/**
 * See {@link isc.ListGrid.expansionFieldImageStyle ListGrid.expansionFieldImageStyle}.
 */
expansionFieldImageStyle?: string;

/**
 * See {@link isc.ListGrid.expansionDetailFieldProperties ListGrid.expansionDetailFieldProperties}.
 */
expansionDetailFieldProperties?: HTMLFlow;

/**
 * See {@link isc.ListGrid.confirmCancelEditing ListGrid.confirmCancelEditing}.
 */
confirmCancelEditing?: boolean;

/**
 * See {@link isc.ListGrid.hiliteIconPosition ListGrid.hiliteIconPosition}.
 */
hiliteIconPosition?: string;

/**
 * See {@link isc.ListGrid.sortEditorSpanTitleSeparator ListGrid.sortEditorSpanTitleSeparator}.
 */
sortEditorSpanTitleSeparator?: string;

/**
 * See {@link isc.ListGrid.sorterDefaults ListGrid.sorterDefaults}.
 */
sorterDefaults?: Object;

/**
 * See {@link isc.ListGrid.drawAheadRatio ListGrid.drawAheadRatio}.
 */
drawAheadRatio?: number;

/**
 * See {@link isc.ListGrid.setFieldHeaderTitleStyle() ListGrid.setFieldHeaderTitleStyle()}.
 */
setFieldHeaderTitleStyle?: Function;

/**
 * See {@link isc.ListGrid.getEditValues() ListGrid.getEditValues()}.
 */
getEditValues?: Function;

/**
 * See {@link isc.ListGrid.headerSpanProperties ListGrid.headerSpanProperties}.
 */
headerSpanProperties?: StatefulCanvas;

/**
 * See {@link isc.ListGrid.useClientFiltering ListGrid.useClientFiltering}.
 */
useClientFiltering?: boolean;

/**
 * See {@link isc.ListGrid.focusInCell() ListGrid.focusInCell()}.
 */
focusInCell?: Function;

/**
 * See {@link isc.ListGrid.hiliteIconLeftPadding ListGrid.hiliteIconLeftPadding}.
 */
hiliteIconLeftPadding?: number;

/**
 * See {@link isc.ListGrid.canRemoveRecords ListGrid.canRemoveRecords}.
 */
canRemoveRecords?: boolean;

/**
 * See {@link isc.ListGrid.rowLocatorField ListGrid.rowLocatorField}.
 */
rowLocatorField?: string | string[];

/**
 * See {@link isc.ListGrid.selectionChanged() ListGrid.selectionChanged()}.
 */
selectionChanged?: Function;

/**
 * See {@link isc.ListGrid.checkboxFieldPartialImage ListGrid.checkboxFieldPartialImage}.
 */
checkboxFieldPartialImage?: string;

/**
 * See {@link isc.ListGrid.spanContextMenuProperties ListGrid.spanContextMenuProperties}.
 */
spanContextMenuProperties?: Layout;

/**
 * See {@link isc.ListGrid.ariaRole ListGrid.ariaRole}.
 */
ariaRole?: string;

/**
 * See {@link isc.ListGrid.canExpandRecord() ListGrid.canExpandRecord()}.
 */
canExpandRecord?: Function;

/**
 * See {@link isc.ListGrid.deferRemoval ListGrid.deferRemoval}.
 */
deferRemoval?: boolean;

/**
 * See {@link isc.ListGrid.showSelectedStyle ListGrid.showSelectedStyle}.
 */
showSelectedStyle?: boolean;

/**
 * See {@link isc.ListGrid.backgroundComponentProperties ListGrid.backgroundComponentProperties}.
 */
backgroundComponentProperties?: Canvas;

/**
 * See {@link isc.ListGrid.canSort ListGrid.canSort}.
 */
canSort?: boolean;

/**
 * See {@link isc.ListGrid.rowNumberStyle ListGrid.rowNumberStyle}.
 */
rowNumberStyle?: string;

/**
 * See {@link isc.ListGrid.canDropInEmptyArea ListGrid.canDropInEmptyArea}.
 */
canDropInEmptyArea?: boolean;

/**
 * See {@link isc.ListGrid.valueIconHeight ListGrid.valueIconHeight}.
 */
valueIconHeight?: number;

/**
 * See {@link isc.ListGrid.bodyProperties ListGrid.bodyProperties}.
 */
bodyProperties?: GridRenderer;

/**
 * See {@link isc.ListGrid.errorIconHeight ListGrid.errorIconHeight}.
 */
errorIconHeight?: number;

/**
 * See {@link isc.ListGrid.displaySort() ListGrid.displaySort()}.
 */
displaySort?: Function;

/**
 * See {@link isc.ListGrid.cellHasErrors() ListGrid.cellHasErrors()}.
 */
cellHasErrors?: Function;

/**
 * See {@link isc.ListGrid.showGroupTitleInFrozenBody ListGrid.showGroupTitleInFrozenBody}.
 */
showGroupTitleInFrozenBody?: boolean;

/**
 * See {@link isc.ListGrid.headerTitleStyle ListGrid.headerTitleStyle}.
 */
headerTitleStyle?: string;

/**
 * See {@link isc.ListGrid.formulaBuilderSpanTitleSeparator ListGrid.formulaBuilderSpanTitleSeparator}.
 */
formulaBuilderSpanTitleSeparator?: string;

/**
 * See {@link isc.ListGrid.booleanImageHeight ListGrid.booleanImageHeight}.
 */
booleanImageHeight?: number;

/**
 * See {@link isc.ListGrid.generateClickOnEnter ListGrid.generateClickOnEnter}.
 */
generateClickOnEnter?: boolean;

/**
 * See {@link isc.ListGrid.getFieldNum() ListGrid.getFieldNum()}.
 */
getFieldNum?: Function;

/**
 * See {@link isc.ListGrid.getFieldContentWidth() ListGrid.getFieldContentWidth()}.
 */
getFieldContentWidth?: Function;

/**
 * See {@link isc.ListGrid.isGrouped ListGrid.isGrouped}.
 */
isGrouped?: boolean;

/**
 * See {@link isc.ListGrid.setRecordRadius() ListGrid.setRecordRadius()}.
 */
setRecordRadius?: Function;

/**
 * See {@link isc.ListGrid.cellPadding ListGrid.cellPadding}.
 */
cellPadding?: number;

/**
 * See {@link isc.ListGrid.freezeFieldText ListGrid.freezeFieldText}.
 */
freezeFieldText?: string;

/**
 * See {@link isc.ListGrid.setCanExpandRecords() ListGrid.setCanExpandRecords()}.
 */
setCanExpandRecords?: Function;

/**
 * See {@link isc.ListGrid.getAriaState() ListGrid.getAriaState()}.
 */
getAriaState?: Function;

/**
 * See {@link isc.ListGrid.shrinkForFreeze ListGrid.shrinkForFreeze}.
 */
shrinkForFreeze?: boolean;

/**
 * See {@link isc.ListGrid.canSelectSummaryRows ListGrid.canSelectSummaryRows}.
 */
canSelectSummaryRows?: boolean;

/**
 * See {@link isc.ListGrid.rowNumberFieldProperties ListGrid.rowNumberFieldProperties}.
 */
rowNumberFieldProperties?: ListGridField;

/**
 * See {@link isc.ListGrid.setHeaderSpanTitle() ListGrid.setHeaderSpanTitle()}.
 */
setHeaderSpanTitle?: Function;

/**
 * See {@link isc.ListGrid.selectOnEdit ListGrid.selectOnEdit}.
 */
selectOnEdit?: boolean;

/**
 * See {@link isc.ListGrid.getCellRole() ListGrid.getCellRole()}.
 */
getCellRole?: Function;

/**
 * See {@link isc.ListGrid.expansionMode ListGrid.expansionMode}.
 */
expansionMode?: string;

/**
 * See {@link isc.ListGrid.getRequiredFieldMessage() ListGrid.getRequiredFieldMessage()}.
 */
getRequiredFieldMessage?: Function;

/**
 * See {@link isc.ListGrid.checkboxFieldImageHeight ListGrid.checkboxFieldImageHeight}.
 */
checkboxFieldImageHeight?: number;

/**
 * See {@link isc.ListGrid.canResizeFields ListGrid.canResizeFields}.
 */
canResizeFields?: boolean;

/**
 * See {@link isc.ListGrid.alwaysShowOperatorIcon ListGrid.alwaysShowOperatorIcon}.
 */
alwaysShowOperatorIcon?: boolean;

/**
 * See {@link isc.ListGrid.cellDoubleClick() ListGrid.cellDoubleClick()}.
 */
cellDoubleClick?: Function;

/**
 * See {@link isc.ListGrid.dataArrived() ListGrid.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.ListGrid.fetchFields ListGrid.fetchFields}.
 */
fetchFields?: ListGridField[] | string;

/**
 * See {@link isc.ListGrid.selectionProperty ListGrid.selectionProperty}.
 */
selectionProperty?: string;

/**
 * See {@link isc.ListGrid.frozenRollUnderCanvas ListGrid.frozenRollUnderCanvas}.
 */
frozenRollUnderCanvas?: Canvas;

/**
 * See {@link isc.ListGrid.groupTreeChanged() ListGrid.groupTreeChanged()}.
 */
groupTreeChanged?: Function;

/**
 * See {@link isc.ListGrid.useAdvancedFieldPicker ListGrid.useAdvancedFieldPicker}.
 */
useAdvancedFieldPicker?: boolean;

/**
 * See {@link isc.ListGrid.showFilterEditor ListGrid.showFilterEditor}.
 */
showFilterEditor?: boolean;

/**
 * See {@link isc.ListGrid.canSelectCells ListGrid.canSelectCells}.
 */
canSelectCells?: boolean;

/**
 * See {@link isc.ListGrid.allowFilterWindow ListGrid.allowFilterWindow}.
 */
allowFilterWindow?: boolean;

/**
 * See {@link isc.ListGrid.showNewRecordRow ListGrid.showNewRecordRow}.
 */
showNewRecordRow?: boolean;

/**
 * See {@link isc.ListGrid.multiGroupDialogDefaults ListGrid.multiGroupDialogDefaults}.
 */
multiGroupDialogDefaults?: MultiGroupDialog;

/**
 * See {@link isc.ListGrid.cellChanged() ListGrid.cellChanged()}.
 */
cellChanged?: Function;

/**
 * See {@link isc.ListGrid.exactRowCountFormat ListGrid.exactRowCountFormat}.
 */
exactRowCountFormat?: string;

/**
 * See {@link isc.ListGrid.getRecordSummary() ListGrid.getRecordSummary()}.
 */
getRecordSummary?: Function;

/**
 * See {@link isc.ListGrid.selectRecord() ListGrid.selectRecord()}.
 */
selectRecord?: Function;

/**
 * See {@link isc.ListGrid.setHideOnPhone() ListGrid.setHideOnPhone()}.
 */
setHideOnPhone?: Function;

/**
 * See {@link isc.ListGrid.detailField ListGrid.detailField}.
 */
detailField?: string;

/**
 * See {@link isc.ListGrid.displayHeaderContextMenu() ListGrid.displayHeaderContextMenu()}.
 */
displayHeaderContextMenu?: Function;

/**
 * See {@link isc.ListGrid.fetchRelatedData() ListGrid.fetchRelatedData()}.
 */
fetchRelatedData?: Function;

/**
 * See {@link isc.ListGrid.setEditValues() ListGrid.setEditValues()}.
 */
setEditValues?: Function;

/**
 * See {@link isc.ListGrid.canEditTitles ListGrid.canEditTitles}.
 */
canEditTitles?: boolean;

/**
 * See {@link isc.ListGrid.transferSelectedData() ListGrid.transferSelectedData()}.
 */
transferSelectedData?: Function;

/**
 * See {@link isc.ListGrid.isSeparatorProperty ListGrid.isSeparatorProperty}.
 */
isSeparatorProperty?: string;

/**
 * See {@link isc.ListGrid.minimumRowCountFormat ListGrid.minimumRowCountFormat}.
 */
minimumRowCountFormat?: string;

/**
 * See {@link isc.ListGrid.cellValueHoverHTML() ListGrid.cellValueHoverHTML()}.
 */
cellValueHoverHTML?: Function;

/**
 * See {@link isc.ListGrid.printMaxRows ListGrid.printMaxRows}.
 */
printMaxRows?: number;

/**
 * See {@link isc.ListGrid.sortNumeralStyle ListGrid.sortNumeralStyle}.
 */
sortNumeralStyle?: string;

/**
 * See {@link isc.ListGrid.multiSortDialogDefaults ListGrid.multiSortDialogDefaults}.
 */
multiSortDialogDefaults?: MultiSortDialog;

/**
 * See {@link isc.ListGrid.fieldPickerWindowProperties ListGrid.fieldPickerWindowProperties}.
 */
fieldPickerWindowProperties?: FieldPickerWindow;

/**
 * See {@link isc.ListGrid.getGroupByText() ListGrid.getGroupByText()}.
 */
getGroupByText?: Function;

/**
 * See {@link isc.ListGrid.rowCountDisplayPrecision ListGrid.rowCountDisplayPrecision}.
 */
rowCountDisplayPrecision?: number;

/**
 * See {@link isc.ListGrid.getFilterWindowCriteria() ListGrid.getFilterWindowCriteria()}.
 */
getFilterWindowCriteria?: Function;

/**
 * See {@link isc.ListGrid.keyPress() ListGrid.keyPress()}.
 */
keyPress?: Function;

/**
 * See {@link isc.ListGrid.resizeFieldsInRealTime ListGrid.resizeFieldsInRealTime}.
 */
resizeFieldsInRealTime?: boolean;

/**
 * See {@link isc.ListGrid.useMultiSelectForFilterValueMaps ListGrid.useMultiSelectForFilterValueMaps}.
 */
useMultiSelectForFilterValueMaps?: boolean;

/**
 * See {@link isc.ListGrid.editComplete() ListGrid.editComplete()}.
 */
editComplete?: Function;

/**
 * See {@link isc.ListGrid.showAsynchGroupingPrompt ListGrid.showAsynchGroupingPrompt}.
 */
showAsynchGroupingPrompt?: boolean;

/**
 * See {@link isc.ListGrid.briefRowRangeDisplayValue ListGrid.briefRowRangeDisplayValue}.
 */
briefRowRangeDisplayValue?: string;

/**
 * See {@link isc.ListGrid.getHeaderAriaRole() ListGrid.getHeaderAriaRole()}.
 */
getHeaderAriaRole?: Function;

/**
 * See {@link isc.ListGrid.expansionEditorCollapseOnSave ListGrid.expansionEditorCollapseOnSave}.
 */
expansionEditorCollapseOnSave?: boolean;

/**
 * See {@link isc.ListGrid.detailDS ListGrid.detailDS}.
 */
detailDS?: string;

/**
 * See {@link isc.ListGrid.groupStartOpen ListGrid.groupStartOpen}.
 */
groupStartOpen?: string | string[];

/**
 * See {@link isc.ListGrid.useAllDataSourceFields ListGrid.useAllDataSourceFields}.
 */
useAllDataSourceFields?: boolean;

/**
 * See {@link isc.ListGrid.sortFieldAscendingText ListGrid.sortFieldAscendingText}.
 */
sortFieldAscendingText?: string;

/**
 * See {@link isc.ListGrid.getCellStartRow() ListGrid.getCellStartRow()}.
 */
getCellStartRow?: Function;

/**
 * See {@link isc.ListGrid.formatCellValue() ListGrid.formatCellValue()}.
 */
formatCellValue?: Function;

/**
 * See {@link isc.ListGrid.setAutoFitMaxHeight() ListGrid.setAutoFitMaxHeight()}.
 */
setAutoFitMaxHeight?: Function;

/**
 * See {@link isc.ListGrid.rowOut() ListGrid.rowOut()}.
 */
rowOut?: Function;

/**
 * See {@link isc.ListGrid.setAutoFitExtraRecords() ListGrid.setAutoFitExtraRecords()}.
 */
setAutoFitExtraRecords?: Function;

/**
 * See {@link isc.ListGrid.canTabToHeader ListGrid.canTabToHeader}.
 */
canTabToHeader?: boolean;

/**
 * See {@link isc.ListGrid.setCanResizeFields() ListGrid.setCanResizeFields()}.
 */
setCanResizeFields?: Function;

/**
 * See {@link isc.ListGrid.expansionEditorSaveButtonTitle ListGrid.expansionEditorSaveButtonTitle}.
 */
expansionEditorSaveButtonTitle?: string;

/**
 * See {@link isc.ListGrid.recordDropAppearance ListGrid.recordDropAppearance}.
 */
recordDropAppearance?: string;

/**
 * See {@link isc.ListGrid.hoverScreen ListGrid.hoverScreen}.
 */
hoverScreen?: string;

/**
 * See {@link isc.ListGrid.setCanFreezeFields() ListGrid.setCanFreezeFields()}.
 */
setCanFreezeFields?: Function;

/**
 * See {@link isc.ListGrid.chartRow() ListGrid.chartRow()}.
 */
chartRow?: Function;

/**
 * See {@link isc.ListGrid.expansionEditorSaveDialogPrompt ListGrid.expansionEditorSaveDialogPrompt}.
 */
expansionEditorSaveDialogPrompt?: string;

/**
 * See {@link isc.ListGrid.autoFetchData ListGrid.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.ListGrid.getRowPageTop() ListGrid.getRowPageTop()}.
 */
getRowPageTop?: Function;

/**
 * See {@link isc.ListGrid.setHeaderSpanTitleStyle() ListGrid.setHeaderSpanTitleStyle()}.
 */
setHeaderSpanTitleStyle?: Function;

/**
 * See {@link isc.ListGrid.getEventRow() ListGrid.getEventRow()}.
 */
getEventRow?: Function;

/**
 * See {@link isc.ListGrid.hiliteViaAIText ListGrid.hiliteViaAIText}.
 */
hiliteViaAIText?: string;

/**
 * See {@link isc.ListGrid.animateRemoveTime ListGrid.animateRemoveTime}.
 */
animateRemoveTime?: number;

/**
 * See {@link isc.ListGrid.setMinFieldWidth() ListGrid.setMinFieldWidth()}.
 */
setMinFieldWidth?: Function;

/**
 * See {@link isc.ListGrid.recordComponentPosition ListGrid.recordComponentPosition}.
 */
recordComponentPosition?: string;

/**
 * See {@link isc.ListGrid.saveEdits() ListGrid.saveEdits()}.
 */
saveEdits?: Function;

/**
 * See {@link isc.ListGrid.modalEditing ListGrid.modalEditing}.
 */
modalEditing?: boolean;

/**
 * See {@link isc.ListGrid.animateFolders ListGrid.animateFolders}.
 */
animateFolders?: boolean;

/**
 * See {@link isc.ListGrid.rowContextClick() ListGrid.rowContextClick()}.
 */
rowContextClick?: Function;

/**
 * See {@link isc.ListGrid.headerSpanConstructor ListGrid.headerSpanConstructor}.
 */
headerSpanConstructor?: string;

/**
 * See {@link isc.ListGrid.autoFitDateFields ListGrid.autoFitDateFields}.
 */
autoFitDateFields?: string;

/**
 * See {@link isc.ListGrid.getSelectedCellData() ListGrid.getSelectedCellData()}.
 */
getSelectedCellData?: Function;

/**
 * See {@link isc.ListGrid.editExistingRecord() ListGrid.editExistingRecord()}.
 */
editExistingRecord?: Function;

/**
 * See {@link isc.ListGrid.autoComplete ListGrid.autoComplete}.
 */
autoComplete?: string;

/**
 * See {@link isc.ListGrid.headerClick() ListGrid.headerClick()}.
 */
headerClick?: Function;

/**
 * See {@link isc.ListGrid.applyRecordData() ListGrid.applyRecordData()}.
 */
applyRecordData?: Function;

/**
 * See {@link isc.ListGrid.clearCriteria() ListGrid.clearCriteria()}.
 */
clearCriteria?: Function;

/**
 * See {@link isc.ListGrid.fieldIsEditable() ListGrid.fieldIsEditable()}.
 */
fieldIsEditable?: Function;

/**
 * See {@link isc.ListGrid.showClippedValuesOnHover ListGrid.showClippedValuesOnHover}.
 */
showClippedValuesOnHover?: boolean;

/**
 * See {@link isc.ListGrid.setFrozenFieldsMaxWidth() ListGrid.setFrozenFieldsMaxWidth()}.
 */
setFrozenFieldsMaxWidth?: Function;

/**
 * See {@link isc.ListGrid.canSelectCell() ListGrid.canSelectCell()}.
 */
canSelectCell?: Function;

/**
 * See {@link isc.ListGrid.getHeaderButtonAriaState() ListGrid.getHeaderButtonAriaState()}.
 */
getHeaderButtonAriaState?: Function;

/**
 * See {@link isc.ListGrid.chartData() ListGrid.chartData()}.
 */
chartData?: Function;

/**
 * See {@link isc.ListGrid.tallBaseStyle ListGrid.tallBaseStyle}.
 */
tallBaseStyle?: string;

/**
 * See {@link isc.ListGrid.showHilitesInGroupSummary ListGrid.showHilitesInGroupSummary}.
 */
showHilitesInGroupSummary?: boolean;

/**
 * See {@link isc.ListGrid.setUserSummary() ListGrid.setUserSummary()}.
 */
setUserSummary?: Function;

/**
 * See {@link isc.ListGrid.canMultiSort ListGrid.canMultiSort}.
 */
canMultiSort?: boolean;

/**
 * See {@link isc.ListGrid.getAllEditRows() ListGrid.getAllEditRows()}.
 */
getAllEditRows?: Function;

/**
 * See {@link isc.ListGrid.discardDataOnSetFetchOperation ListGrid.discardDataOnSetFetchOperation}.
 */
discardDataOnSetFetchOperation?: boolean;

/**
 * See {@link isc.ListGrid.isExpanded() ListGrid.isExpanded()}.
 */
isExpanded?: Function;

/**
 * See {@link isc.ListGrid.showDropLines ListGrid.showDropLines}.
 */
showDropLines?: boolean;

/**
 * See {@link isc.ListGrid.autoFitMaxColumns ListGrid.autoFitMaxColumns}.
 */
autoFitMaxColumns?: number;

/**
 * See {@link isc.ListGrid.scrollToColumn() ListGrid.scrollToColumn()}.
 */
scrollToColumn?: Function;

/**
 * See {@link isc.ListGrid.blockingRowCountFetch ListGrid.blockingRowCountFetch}.
 */
blockingRowCountFetch?: boolean;

/**
 * See {@link isc.ListGrid.saveLocally ListGrid.saveLocally}.
 */
saveLocally?: boolean;

/**
 * See {@link isc.ListGrid.groupBy() ListGrid.groupBy()}.
 */
groupBy?: Function;

/**
 * See {@link isc.ListGrid.getEditRow() ListGrid.getEditRow()}.
 */
getEditRow?: Function;

/**
 * See {@link isc.ListGrid.getRollUnderCanvas() ListGrid.getRollUnderCanvas()}.
 */
getRollUnderCanvas?: Function;

/**
 * See {@link isc.ListGrid.exportRawNumbers ListGrid.exportRawNumbers}.
 */
exportRawNumbers?: boolean;

/**
 * See {@link isc.ListGrid.setFieldProperties() ListGrid.setFieldProperties()}.
 */
setFieldProperties?: Function;

/**
 * See {@link isc.ListGrid.getFieldSearchOperator() ListGrid.getFieldSearchOperator()}.
 */
getFieldSearchOperator?: Function;

/**
 * See {@link isc.ListGrid.frozenHeaderTitleStyle ListGrid.frozenHeaderTitleStyle}.
 */
frozenHeaderTitleStyle?: string;

/**
 * See {@link isc.ListGrid.maxExpandedRecords ListGrid.maxExpandedRecords}.
 */
maxExpandedRecords?: number;

/**
 * See {@link isc.ListGrid.canAcceptDroppedRecords ListGrid.canAcceptDroppedRecords}.
 */
canAcceptDroppedRecords?: boolean;

/**
 * See {@link isc.ListGrid.showAllRecords ListGrid.showAllRecords}.
 */
showAllRecords?: boolean;

/**
 * See {@link isc.ListGrid.filterData() ListGrid.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.ListGrid.canDragSelectText ListGrid.canDragSelectText}.
 */
canDragSelectText?: boolean;

/**
 * See {@link isc.ListGrid.emptyMessage ListGrid.emptyMessage}.
 */
emptyMessage?: string;

/**
 * See {@link isc.ListGrid.getRecord() ListGrid.getRecord()}.
 */
getRecord?: Function;

/**
 * See {@link isc.ListGrid.cellHoverHTML() ListGrid.cellHoverHTML()}.
 */
cellHoverHTML?: Function;

/**
 * See {@link isc.ListGrid.headerRadius ListGrid.headerRadius}.
 */
headerRadius?: string;

/**
 * See {@link isc.ListGrid.showHeaderPartialSelection ListGrid.showHeaderPartialSelection}.
 */
showHeaderPartialSelection?: boolean;

/**
 * See {@link isc.ListGrid.filterOnKeypress ListGrid.filterOnKeypress}.
 */
filterOnKeypress?: boolean;

/**
 * See {@link isc.ListGrid.setSelectionType() ListGrid.setSelectionType()}.
 */
setSelectionType?: Function;

/**
 * See {@link isc.ListGrid.showHeaderSpanTitlesInHiliteEditor ListGrid.showHeaderSpanTitlesInHiliteEditor}.
 */
showHeaderSpanTitlesInHiliteEditor?: boolean;

/**
 * See {@link isc.ListGrid.setSortByGroupFirst() ListGrid.setSortByGroupFirst()}.
 */
setSortByGroupFirst?: Function;

/**
 * See {@link isc.ListGrid.gridSummaryRecordProperty ListGrid.gridSummaryRecordProperty}.
 */
gridSummaryRecordProperty?: string;

/**
 * See {@link isc.ListGrid.printAutoFit ListGrid.printAutoFit}.
 */
printAutoFit?: boolean;

/**
 * See {@link isc.ListGrid.useRowSpanStyling ListGrid.useRowSpanStyling}.
 */
useRowSpanStyling?: boolean;

/**
 * See {@link isc.ListGrid.cellOut() ListGrid.cellOut()}.
 */
cellOut?: Function;

/**
 * See {@link isc.ListGrid.resort() ListGrid.resort()}.
 */
resort?: Function;

/**
 * See {@link isc.ListGrid.getRowHeight() ListGrid.getRowHeight()}.
 */
getRowHeight?: Function;

/**
 * See {@link isc.ListGrid.isSummaryRecord() ListGrid.isSummaryRecord()}.
 */
isSummaryRecord?: Function;

/**
 * See {@link isc.ListGrid.expansionFieldFalseImage ListGrid.expansionFieldFalseImage}.
 */
expansionFieldFalseImage?: string;

/**
 * See {@link isc.ListGrid.getCellHoverComponent() ListGrid.getCellHoverComponent()}.
 */
getCellHoverComponent?: Function;

/**
 * See {@link isc.ListGrid.rowSpanEditMode ListGrid.rowSpanEditMode}.
 */
rowSpanEditMode?: string;

/**
 * See {@link isc.ListGrid.showErrorIcons ListGrid.showErrorIcons}.
 */
showErrorIcons?: boolean;

/**
 * See {@link isc.ListGrid.getHeaderButtonAriaRole() ListGrid.getHeaderButtonAriaRole()}.
 */
getHeaderButtonAriaRole?: Function;

/**
 * See {@link isc.ListGrid.sortFieldDescendingText ListGrid.sortFieldDescendingText}.
 */
sortFieldDescendingText?: string;

/**
 * See {@link isc.ListGrid.animateRollOver ListGrid.animateRollOver}.
 */
animateRollOver?: boolean;

/**
 * See {@link isc.ListGrid.transferDragData() ListGrid.transferDragData()}.
 */
transferDragData?: Function;

/**
 * See {@link isc.ListGrid.saveByCell ListGrid.saveByCell}.
 */
saveByCell?: boolean;

/**
 * See {@link isc.ListGrid.filterWindowCriteria ListGrid.filterWindowCriteria}.
 */
filterWindowCriteria?: Criteria;

/**
 * See {@link isc.ListGrid.fieldIsVisible() ListGrid.fieldIsVisible()}.
 */
fieldIsVisible?: Function;

/**
 * See {@link isc.ListGrid.editPendingBaseStyle ListGrid.editPendingBaseStyle}.
 */
editPendingBaseStyle?: string;

/**
 * See {@link isc.ListGrid.showTreeColumnPicker ListGrid.showTreeColumnPicker}.
 */
showTreeColumnPicker?: boolean;

/**
 * See {@link isc.ListGrid.getExportRowBGColor() ListGrid.getExportRowBGColor()}.
 */
getExportRowBGColor?: Function;

/**
 * See {@link isc.ListGrid.getFieldByName() ListGrid.getFieldByName()}.
 */
getFieldByName?: Function;

/**
 * See {@link isc.ListGrid.loadingRowCountDisplayIcoHeight ListGrid.loadingRowCountDisplayIcoHeight}.
 */
loadingRowCountDisplayIcoHeight?: number;

/**
 * See {@link isc.ListGrid.cellValueHover() ListGrid.cellValueHover()}.
 */
cellValueHover?: Function;

/**
 * See {@link isc.ListGrid.getGroupState() ListGrid.getGroupState()}.
 */
getGroupState?: Function;

/**
 * See {@link isc.ListGrid.headerHoverOpacity ListGrid.headerHoverOpacity}.
 */
headerHoverOpacity?: number;

/**
 * See {@link isc.ListGrid.printBooleanPartialImage ListGrid.printBooleanPartialImage}.
 */
printBooleanPartialImage?: string;

/**
 * See {@link isc.ListGrid.getSortSpecifier() ListGrid.getSortSpecifier()}.
 */
getSortSpecifier?: Function;

/**
 * See {@link isc.ListGrid.clearSavedViewState() ListGrid.clearSavedViewState()}.
 */
clearSavedViewState?: Function;

/**
 * See {@link isc.ListGrid.checkboxFieldTrueImage ListGrid.checkboxFieldTrueImage}.
 */
checkboxFieldTrueImage?: string;

/**
 * See {@link isc.ListGrid.headerButtonAriaState ListGrid.headerButtonAriaState}.
 */
headerButtonAriaState?: Object;

/**
 * See {@link isc.ListGrid.findNextEditCell() ListGrid.findNextEditCell()}.
 */
findNextEditCell?: Function;

/**
 * See {@link isc.ListGrid.getAriaStateDefaults() ListGrid.getAriaStateDefaults()}.
 */
getAriaStateDefaults?: Function;

/**
 * See {@link isc.ListGrid.groupIndentSize ListGrid.groupIndentSize}.
 */
groupIndentSize?: number;

/**
 * See {@link isc.ListGrid.validateOnChange ListGrid.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.ListGrid.getRecordDropPosition() ListGrid.getRecordDropPosition()}.
 */
getRecordDropPosition?: Function;

/**
 * See {@link isc.ListGrid.checkboxFieldProperties ListGrid.checkboxFieldProperties}.
 */
checkboxFieldProperties?: ListGridField;

/**
 * See {@link isc.ListGrid.screenReaderIncludeFieldTitles ListGrid.screenReaderIncludeFieldTitles}.
 */
screenReaderIncludeFieldTitles?: boolean;

/**
 * See {@link isc.ListGrid.autoSaveEdits ListGrid.autoSaveEdits}.
 */
autoSaveEdits?: boolean;

/**
 * See {@link isc.ListGrid.setDontAutoDestroyComponent() ListGrid.setDontAutoDestroyComponent()}.
 */
setDontAutoDestroyComponent?: Function;

/**
 * See {@link isc.ListGrid.filterEditorHeight ListGrid.filterEditorHeight}.
 */
filterEditorHeight?: number;

/**
 * See {@link isc.ListGrid.aiHoverRetryDelay ListGrid.aiHoverRetryDelay}.
 */
aiHoverRetryDelay?: number;

/**
 * See {@link isc.ListGrid.getDragTrackerTitle() ListGrid.getDragTrackerTitle()}.
 */
getDragTrackerTitle?: Function;

/**
 * See {@link isc.ListGrid.unfreezeField() ListGrid.unfreezeField()}.
 */
unfreezeField?: Function;

/**
 * See {@link isc.ListGrid.screenReaderRowSeparator ListGrid.screenReaderRowSeparator}.
 */
screenReaderRowSeparator?: string;

/**
 * See {@link isc.ListGrid.animateRollUnder ListGrid.animateRollUnder}.
 */
animateRollUnder?: boolean;

/**
 * See {@link isc.ListGrid.animateFolderTime ListGrid.animateFolderTime}.
 */
animateFolderTime?: number;

/**
 * See {@link isc.ListGrid.getCellValue() ListGrid.getCellValue()}.
 */
getCellValue?: Function;

/**
 * See {@link isc.ListGrid.getRowCountRange() ListGrid.getRowCountRange()}.
 */
getRowCountRange?: Function;

/**
 * See {@link isc.ListGrid.getRowTop() ListGrid.getRowTop()}.
 */
getRowTop?: Function;

/**
 * See {@link isc.ListGrid.validateByCell ListGrid.validateByCell}.
 */
validateByCell?: boolean;

/**
 * See {@link isc.ListGrid.defaultEditableDateFieldWidth ListGrid.defaultEditableDateFieldWidth}.
 */
defaultEditableDateFieldWidth?: number;

/**
 * See {@link isc.ListGrid.selectedState ListGrid.selectedState}.
 */
selectedState?: string;

/**
 * See {@link isc.ListGrid.exportData() ListGrid.exportData()}.
 */
exportData?: Function;

/**
 * See {@link isc.ListGrid.rotateHeaderTitles ListGrid.rotateHeaderTitles}.
 */
rotateHeaderTitles?: boolean;

/**
 * See {@link isc.ListGrid.headerShadowSoftness ListGrid.headerShadowSoftness}.
 */
headerShadowSoftness?: number;

/**
 * See {@link isc.ListGrid.setAutoFitMaxColumns() ListGrid.setAutoFitMaxColumns()}.
 */
setAutoFitMaxColumns?: Function;

/**
 * See {@link isc.ListGrid.cellHover() ListGrid.cellHover()}.
 */
cellHover?: Function;

/**
 * See {@link isc.ListGrid.recalculateGridSummary() ListGrid.recalculateGridSummary()}.
 */
recalculateGridSummary?: Function;

/**
 * See {@link isc.ListGrid.userSelectAllRecords() ListGrid.userSelectAllRecords()}.
 */
userSelectAllRecords?: Function;

/**
 * See {@link isc.ListGrid.autoFitFields() ListGrid.autoFitFields()}.
 */
autoFitFields?: Function;

/**
 * See {@link isc.ListGrid.setFilterEditorCriteria() ListGrid.setFilterEditorCriteria()}.
 */
setFilterEditorCriteria?: Function;

/**
 * See {@link isc.ListGrid.filterLocalData ListGrid.filterLocalData}.
 */
filterLocalData?: boolean;

/**
 * See {@link isc.ListGrid.showEmptyMessage ListGrid.showEmptyMessage}.
 */
showEmptyMessage?: boolean;

/**
 * See {@link isc.ListGrid.selectOnExpandRecord ListGrid.selectOnExpandRecord}.
 */
selectOnExpandRecord?: boolean;

/**
 * See {@link isc.ListGrid.showHoverComponents ListGrid.showHoverComponents}.
 */
showHoverComponents?: boolean;

/**
 * See {@link isc.ListGrid.checkboxFieldFalseImage ListGrid.checkboxFieldFalseImage}.
 */
checkboxFieldFalseImage?: string;

/**
 * See {@link isc.ListGrid.getGroupTreeSelection() ListGrid.getGroupTreeSelection()}.
 */
getGroupTreeSelection?: Function;

/**
 * See {@link isc.ListGrid.instantScrollTrackRedraw ListGrid.instantScrollTrackRedraw}.
 */
instantScrollTrackRedraw?: boolean;

/**
 * See {@link isc.ListGrid.bodyBackgroundColor ListGrid.bodyBackgroundColor}.
 */
bodyBackgroundColor?: string;

/**
 * See {@link isc.ListGrid.advancedFieldPickerThreshold ListGrid.advancedFieldPickerThreshold}.
 */
advancedFieldPickerThreshold?: number;

/**
 * See {@link isc.ListGrid.discardEdits() ListGrid.discardEdits()}.
 */
discardEdits?: Function;

/**
 * See {@link isc.ListGrid.pendingAsyncCellValue ListGrid.pendingAsyncCellValue}.
 */
pendingAsyncCellValue?: string;

/**
 * See {@link isc.ListGrid.setSelectedState() ListGrid.setSelectedState()}.
 */
setSelectedState?: Function;

/**
 * See {@link isc.ListGrid.getSummaryFieldValue() ListGrid.getSummaryFieldValue()}.
 */
getSummaryFieldValue?: Function;

/**
 * See {@link isc.ListGrid.toggleFrozen() ListGrid.toggleFrozen()}.
 */
toggleFrozen?: Function;

/**
 * See {@link isc.ListGrid.getCurrentFieldWidths() ListGrid.getCurrentFieldWidths()}.
 */
getCurrentFieldWidths?: Function;

/**
 * See {@link isc.ListGrid.loadingRowCountDisplayIconWidth ListGrid.loadingRowCountDisplayIconWidth}.
 */
loadingRowCountDisplayIconWidth?: number;

/**
 * See {@link isc.ListGrid.summaryRowStyle ListGrid.summaryRowStyle}.
 */
summaryRowStyle?: string;

/**
 * See {@link isc.ListGrid.defaultDateFieldWidth ListGrid.defaultDateFieldWidth}.
 */
defaultDateFieldWidth?: number;

/**
 * See {@link isc.ListGrid.recordCellRoleProperty ListGrid.recordCellRoleProperty}.
 */
recordCellRoleProperty?: string;

/**
 * See {@link isc.ListGrid.getColumnLeft() ListGrid.getColumnLeft()}.
 */
getColumnLeft?: Function;

/**
 * See {@link isc.ListGrid.invalidateCache() ListGrid.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.ListGrid.advancedFilteringText ListGrid.advancedFilteringText}.
 */
advancedFilteringText?: string;

/**
 * See {@link isc.ListGrid.rotatedHeaderMenuButtonWidth ListGrid.rotatedHeaderMenuButtonWidth}.
 */
rotatedHeaderMenuButtonWidth?: number;

/**
 * See {@link isc.ListGrid.setFieldError() ListGrid.setFieldError()}.
 */
setFieldError?: Function;

/**
 * See {@link isc.ListGrid.longTextEditorThreshold ListGrid.longTextEditorThreshold}.
 */
longTextEditorThreshold?: number;

/**
 * See {@link isc.ListGrid.saveRequestProperties ListGrid.saveRequestProperties}.
 */
saveRequestProperties?: DSRequest;

/**
 * See {@link isc.ListGrid.setFastCellUpdates() ListGrid.setFastCellUpdates()}.
 */
setFastCellUpdates?: Function;

/**
 * See {@link isc.ListGrid.aiFilterWindowProperties ListGrid.aiFilterWindowProperties}.
 */
aiFilterWindowProperties?: Window;

/**
 * See {@link isc.ListGrid.dragHandleIconSize ListGrid.dragHandleIconSize}.
 */
dragHandleIconSize?: number;

/**
 * See {@link isc.ListGrid.markRecordsRemoved() ListGrid.markRecordsRemoved()}.
 */
markRecordsRemoved?: Function;

/**
 * See {@link isc.ListGrid.normalCellHeight ListGrid.normalCellHeight}.
 */
normalCellHeight?: number;

/**
 * See {@link isc.ListGrid.summaryRowProperties ListGrid.summaryRowProperties}.
 */
summaryRowProperties?: ListGrid;

/**
 * See {@link isc.ListGrid.getCellErrors() ListGrid.getCellErrors()}.
 */
getCellErrors?: Function;

/**
 * See {@link isc.ListGrid.clearFieldSearchOperator() ListGrid.clearFieldSearchOperator()}.
 */
clearFieldSearchOperator?: Function;

/**
 * See {@link isc.ListGrid.showPartialSelection ListGrid.showPartialSelection}.
 */
showPartialSelection?: boolean;

/**
 * See {@link isc.ListGrid.canHiliteViaAI ListGrid.canHiliteViaAI}.
 */
canHiliteViaAI?: boolean;

/**
 * See {@link isc.ListGrid.expansionFieldProperties ListGrid.expansionFieldProperties}.
 */
expansionFieldProperties?: ListGridField;

/**
 * See {@link isc.ListGrid.setSort() ListGrid.setSort()}.
 */
setSort?: Function;

/**
 * See {@link isc.ListGrid.editProxyConstructor ListGrid.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ListGrid.approximateRowCountFormat ListGrid.approximateRowCountFormat}.
 */
approximateRowCountFormat?: string;

/**
 * See {@link isc.ListGrid.sortState ListGrid.sortState}.
 */
sortState?: string;

/**
 * See {@link isc.ListGrid.getViewState() ListGrid.getViewState()}.
 */
getViewState?: Function;

/**
 * See {@link isc.ListGrid.autoFetchTextMatchStyle ListGrid.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.ListGrid.deselectRange() ListGrid.deselectRange()}.
 */
deselectRange?: Function;

/**
 * See {@link isc.ListGrid.emptyRowRangeDisplayValue ListGrid.emptyRowRangeDisplayValue}.
 */
emptyRowRangeDisplayValue?: string;

/**
 * See {@link isc.ListGrid.getArrowKeyEditAction() ListGrid.getArrowKeyEditAction()}.
 */
getArrowKeyEditAction?: Function;

/**
 * See {@link isc.ListGrid.cellMouseDown() ListGrid.cellMouseDown()}.
 */
cellMouseDown?: Function;

/**
 * See {@link isc.ListGrid.frozenHeaderBaseStyle ListGrid.frozenHeaderBaseStyle}.
 */
frozenHeaderBaseStyle?: string;

/**
 * See {@link isc.ListGrid.saveCriteriaInViewState ListGrid.saveCriteriaInViewState}.
 */
saveCriteriaInViewState?: boolean;

/**
 * See {@link isc.ListGrid.getBaseStyle() ListGrid.getBaseStyle()}.
 */
getBaseStyle?: Function;

/**
 * See {@link isc.ListGrid.touchScrollRedrawDelay ListGrid.touchScrollRedrawDelay}.
 */
touchScrollRedrawDelay?: number;

/**
 * See {@link isc.ListGrid.getFilterEditorType() ListGrid.getFilterEditorType()}.
 */
getFilterEditorType?: Function;

/**
 * See {@link isc.ListGrid.arrowKeyEditAction ListGrid.arrowKeyEditAction}.
 */
arrowKeyEditAction?: string;

/**
 * See {@link isc.ListGrid.getDrawnRows() ListGrid.getDrawnRows()}.
 */
getDrawnRows?: Function;

/**
 * See {@link isc.ListGrid.getEditValue() ListGrid.getEditValue()}.
 */
getEditValue?: Function;

/**
 * See {@link isc.ListGrid.printHeaderStyle ListGrid.printHeaderStyle}.
 */
printHeaderStyle?: string;

/**
 * See {@link isc.ListGrid.defaultFilterOperator ListGrid.defaultFilterOperator}.
 */
defaultFilterOperator?: string;

/**
 * See {@link isc.ListGrid.getDropIndex() ListGrid.getDropIndex()}.
 */
getDropIndex?: Function;

/**
 * See {@link isc.ListGrid.setFields() ListGrid.setFields()}.
 */
setFields?: Function;

/**
 * See {@link isc.ListGrid.getDragData() ListGrid.getDragData()}.
 */
getDragData?: Function;

/**
 * See {@link isc.ListGrid.getSelection() ListGrid.getSelection()}.
 */
getSelection?: Function;

/**
 * See {@link isc.ListGrid.showInitialDragHandles ListGrid.showInitialDragHandles}.
 */
showInitialDragHandles?: boolean;

/**
 * See {@link isc.ListGrid.cancelEditingConfirmationMessage ListGrid.cancelEditingConfirmationMessage}.
 */
cancelEditingConfirmationMessage?: string;

/**
 * See {@link isc.ListGrid.getToggleFreezeText() ListGrid.getToggleFreezeText()}.
 */
getToggleFreezeText?: Function;

/**
 * See {@link isc.ListGrid.getColumnWidth() ListGrid.getColumnWidth()}.
 */
getColumnWidth?: Function;

/**
 * See {@link isc.ListGrid.getSelectedRecords() ListGrid.getSelectedRecords()}.
 */
getSelectedRecords?: Function;

/**
 * See {@link isc.ListGrid.checkboxFieldHSpace ListGrid.checkboxFieldHSpace}.
 */
checkboxFieldHSpace?: number;

/**
 * See {@link isc.ListGrid.canFocusInEmptyGrid ListGrid.canFocusInEmptyGrid}.
 */
canFocusInEmptyGrid?: boolean;

/**
 * See {@link isc.ListGrid.getDrawArea() ListGrid.getDrawArea()}.
 */
getDrawArea?: Function;

/**
 * See {@link isc.ListGrid.filterWindowProperties ListGrid.filterWindowProperties}.
 */
filterWindowProperties?: Window;

/**
 * See {@link isc.ListGrid.sortChanged() ListGrid.sortChanged()}.
 */
sortChanged?: Function;

/**
 * See {@link isc.ListGrid.getExpandedRecords() ListGrid.getExpandedRecords()}.
 */
getExpandedRecords?: Function;

/**
 * See {@link isc.ListGrid.showFilterEditorHovers ListGrid.showFilterEditorHovers}.
 */
showFilterEditorHovers?: boolean;

/**
 * See {@link isc.ListGrid.autoFitAllText ListGrid.autoFitAllText}.
 */
autoFitAllText?: string;

/**
 * See {@link isc.ListGrid.getCellContextMenuItems() ListGrid.getCellContextMenuItems()}.
 */
getCellContextMenuItems?: Function;

/**
 * See {@link isc.ListGrid.getCellPageRect() ListGrid.getCellPageRect()}.
 */
getCellPageRect?: Function;

/**
 * See {@link isc.ListGrid.showDragHandles() ListGrid.showDragHandles()}.
 */
showDragHandles?: Function;

/**
 * See {@link isc.ListGrid.cellErrorIconHover() ListGrid.cellErrorIconHover()}.
 */
cellErrorIconHover?: Function;

/**
 * See {@link isc.ListGrid.originalData ListGrid.originalData}.
 */
originalData?: Object;

/**
 * See {@link isc.ListGrid.recordRadius ListGrid.recordRadius}.
 */
recordRadius?: string;

/**
 * See {@link isc.ListGrid.expandRecords() ListGrid.expandRecords()}.
 */
expandRecords?: Function;

/**
 * See {@link isc.ListGrid.aiHiliteWindowProperties ListGrid.aiHiliteWindowProperties}.
 */
aiHiliteWindowProperties?: Window;

/**
 * See {@link isc.ListGrid.fetchRequestProperties ListGrid.fetchRequestProperties}.
 */
fetchRequestProperties?: DSRequest;

/**
 * See {@link isc.ListGrid.alternateRecordSuffix ListGrid.alternateRecordSuffix}.
 */
alternateRecordSuffix?: string;

/**
 * See {@link isc.ListGrid.showRollOverInExpansion ListGrid.showRollOverInExpansion}.
 */
showRollOverInExpansion?: boolean;

/**
 * See {@link isc.ListGrid.headerShadowColor ListGrid.headerShadowColor}.
 */
headerShadowColor?: string;

/**
 * See {@link isc.ListGrid.setUserFormula() ListGrid.setUserFormula()}.
 */
setUserFormula?: Function;

/**
 * See {@link isc.ListGrid.warnOnRemoval ListGrid.warnOnRemoval}.
 */
warnOnRemoval?: boolean;

/**
 * See {@link isc.ListGrid.removedCSSText ListGrid.removedCSSText}.
 */
removedCSSText?: string;

/**
 * See {@link isc.ListGrid.recordSummaryBaseStyle ListGrid.recordSummaryBaseStyle}.
 */
recordSummaryBaseStyle?: string;

/**
 * See {@link isc.ListGrid.preserveFocusStylingOnMouseOut ListGrid.preserveFocusStylingOnMouseOut}.
 */
preserveFocusStylingOnMouseOut?: boolean;

/**
 * See {@link isc.ListGrid.ungroupText ListGrid.ungroupText}.
 */
ungroupText?: string;

/**
 * See {@link isc.ListGrid.showSortArrow ListGrid.showSortArrow}.
 */
showSortArrow?: string;

/**
 * See {@link isc.ListGrid.badFormulaResultValue ListGrid.badFormulaResultValue}.
 */
badFormulaResultValue?: string;

/**
 * See {@link isc.ListGrid.rowHover() ListGrid.rowHover()}.
 */
rowHover?: Function;

/**
 * See {@link isc.ListGrid.dragHandleIcon ListGrid.dragHandleIcon}.
 */
dragHandleIcon?: string;

/**
 * See {@link isc.ListGrid.imageSize ListGrid.imageSize}.
 */
imageSize?: number;

/**
 * See {@link isc.ListGrid.dataFetchDelay ListGrid.dataFetchDelay}.
 */
dataFetchDelay?: number;

/**
 * See {@link isc.ListGrid.warnOnUnmappedValueFieldChange ListGrid.warnOnUnmappedValueFieldChange}.
 */
warnOnUnmappedValueFieldChange?: boolean;

/**
 * See {@link isc.ListGrid.validateRow() ListGrid.validateRow()}.
 */
validateRow?: Function;

/**
 * See {@link isc.ListGrid.getExportBGColor() ListGrid.getExportBGColor()}.
 */
getExportBGColor?: Function;

/**
 * See {@link isc.ListGrid.autoFitData ListGrid.autoFitData}.
 */
autoFitData?: string;

/**
 * See {@link isc.ListGrid.setShowGridSummary() ListGrid.setShowGridSummary()}.
 */
setShowGridSummary?: Function;

/**
 * See {@link isc.ListGrid.autoFitFieldText ListGrid.autoFitFieldText}.
 */
autoFitFieldText?: string;

/**
 * See {@link isc.ListGrid.configureSortText ListGrid.configureSortText}.
 */
configureSortText?: string;

/**
 * See {@link isc.ListGrid.sortAscendingImage ListGrid.sortAscendingImage}.
 */
sortAscendingImage?: string | ImgHTMLProperties;

/**
 * See {@link isc.ListGrid.getRowSpan() ListGrid.getRowSpan()}.
 */
getRowSpan?: Function;

/**
 * See {@link isc.ListGrid.loadingDataMessage ListGrid.loadingDataMessage}.
 */
loadingDataMessage?: string;

/**
 * See {@link isc.ListGrid.getCurrentExpansionComponent() ListGrid.getCurrentExpansionComponent()}.
 */
getCurrentExpansionComponent?: Function;

/**
 * See {@link isc.ListGrid.groupIconStyle ListGrid.groupIconStyle}.
 */
groupIconStyle?: string;

/**
 * See {@link isc.ListGrid.autoPersistViewState ListGrid.autoPersistViewState}.
 */
autoPersistViewState?: string[];

/**
 * See {@link isc.ListGrid.recordComponentHeight ListGrid.recordComponentHeight}.
 */
recordComponentHeight?: number;

/**
 * See {@link isc.ListGrid.scrollRedrawDelay ListGrid.scrollRedrawDelay}.
 */
scrollRedrawDelay?: number;

/**
 * See {@link isc.ListGrid.saveDefaultSearch ListGrid.saveDefaultSearch}.
 */
saveDefaultSearch?: boolean;

/**
 * See {@link isc.ListGrid.getFrozenRollUnderCanvas() ListGrid.getFrozenRollUnderCanvas()}.
 */
getFrozenRollUnderCanvas?: Function;

/**
 * See {@link isc.ListGrid.isGroupNode() ListGrid.isGroupNode()}.
 */
isGroupNode?: Function;

/**
 * See {@link isc.ListGrid.filterEditorProperties ListGrid.filterEditorProperties}.
 */
filterEditorProperties?: RecordEditor;

/**
 * See {@link isc.ListGrid.cellClick() ListGrid.cellClick()}.
 */
cellClick?: Function;

/**
 * See {@link isc.ListGrid.defaultFields ListGrid.defaultFields}.
 */
defaultFields?: ListGridField[];

/**
 * See {@link isc.ListGrid.expansionRelatedProperties ListGrid.expansionRelatedProperties}.
 */
expansionRelatedProperties?: ListGrid;

/**
 * See {@link isc.ListGrid.skinImgDir ListGrid.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.ListGrid.aiFilterWindowTitle ListGrid.aiFilterWindowTitle}.
 */
aiFilterWindowTitle?: string;

/**
 * See {@link isc.ListGrid.maximumRowCountFormat ListGrid.maximumRowCountFormat}.
 */
maximumRowCountFormat?: string;

/**
 * See {@link isc.ListGrid.expansionEditorProperties ListGrid.expansionEditorProperties}.
 */
expansionEditorProperties?: DynamicForm;

/**
 * See {@link isc.ListGrid.hideEmptySummaryRow ListGrid.hideEmptySummaryRow}.
 */
hideEmptySummaryRow?: boolean;

/**
 * See {@link isc.ListGrid.getRowAriaState() ListGrid.getRowAriaState()}.
 */
getRowAriaState?: Function;

/**
 * See {@link isc.ListGrid.trackerImage ListGrid.trackerImage}.
 */
trackerImage?: string | ImgHTMLProperties;

/**
 * See {@link isc.ListGrid.canDragSelect ListGrid.canDragSelect}.
 */
canDragSelect?: boolean;

/**
 * See {@link isc.ListGrid.headerHoverWidth ListGrid.headerHoverWidth}.
 */
headerHoverWidth?: number;

/**
 * See {@link isc.ListGrid.setWrapCells() ListGrid.setWrapCells()}.
 */
setWrapCells?: Function;

/**
 * See {@link isc.ListGrid.loadingRowCountDisplayIcon ListGrid.loadingRowCountDisplayIcon}.
 */
loadingRowCountDisplayIcon?: string;

/**
 * See {@link isc.ListGrid.hiliteIconRightPadding ListGrid.hiliteIconRightPadding}.
 */
hiliteIconRightPadding?: number;

/**
 * See {@link isc.ListGrid.viewStateChanged() ListGrid.viewStateChanged()}.
 */
viewStateChanged?: Function;

/**
 * See {@link isc.ListGrid.cellOver() ListGrid.cellOver()}.
 */
cellOver?: Function;

/**
 * See {@link isc.ListGrid.groupSummaryStyle ListGrid.groupSummaryStyle}.
 */
groupSummaryStyle?: string;

/**
 * See {@link isc.ListGrid.cellHeight ListGrid.cellHeight}.
 */
cellHeight?: number;

/**
 * See {@link isc.ListGrid.hasErrors() ListGrid.hasErrors()}.
 */
hasErrors?: Function;

/**
 * See {@link isc.ListGrid.embeddedComponentIndent ListGrid.embeddedComponentIndent}.
 */
embeddedComponentIndent?: number;

/**
 * See {@link isc.ListGrid.discardEditsSaveButtonTitle ListGrid.discardEditsSaveButtonTitle}.
 */
discardEditsSaveButtonTitle?: string;

/**
 * See {@link isc.ListGrid.willAcceptDrop() ListGrid.willAcceptDrop()}.
 */
willAcceptDrop?: Function;

/**
 * See {@link isc.ListGrid.iconPadding ListGrid.iconPadding}.
 */
iconPadding?: number;

/**
 * See {@link isc.ListGrid.getExpansionField() ListGrid.getExpansionField()}.
 */
getExpansionField?: Function;

/**
 * See {@link isc.ListGrid.canGroupBy ListGrid.canGroupBy}.
 */
canGroupBy?: boolean;

/**
 * See {@link isc.ListGrid.asyncErrorCellValue ListGrid.asyncErrorCellValue}.
 */
asyncErrorCellValue?: string;

/**
 * See {@link isc.ListGrid.getGroupByFields() ListGrid.getGroupByFields()}.
 */
getGroupByFields?: Function;

/**
 * See {@link isc.ListGrid.dragDataAction ListGrid.dragDataAction}.
 */
dragDataAction?: string;

/**
 * See {@link isc.ListGrid.setEditValue() ListGrid.setEditValue()}.
 */
setEditValue?: Function;

/**
 * See {@link isc.ListGrid.getAllFields() ListGrid.getAllFields()}.
 */
getAllFields?: Function;

/**
 * See {@link isc.ListGrid.maxSummaryRowRecords ListGrid.maxSummaryRowRecords}.
 */
maxSummaryRowRecords?: number;

/**
 * See {@link isc.ListGrid.cellValueIsClipped() ListGrid.cellValueIsClipped()}.
 */
cellValueIsClipped?: Function;

/**
 * See {@link isc.ListGrid.reorderFields() ListGrid.reorderFields()}.
 */
reorderFields?: Function;

/**
 * See {@link isc.ListGrid.asyncMissingCellValue ListGrid.asyncMissingCellValue}.
 */
asyncMissingCellValue?: string;

/**
 * See {@link isc.ListGrid.errorIconSrc ListGrid.errorIconSrc}.
 */
errorIconSrc?: string;

/**
 * See {@link isc.ListGrid.maxExpandedRecordsPrompt ListGrid.maxExpandedRecordsPrompt}.
 */
maxExpandedRecordsPrompt?: string;

/**
 * See {@link isc.ListGrid.reorderField() ListGrid.reorderField()}.
 */
reorderField?: Function;

/**
 * See {@link isc.ListGrid.clearCriteriaOnFilterEditorHide ListGrid.clearCriteriaOnFilterEditorHide}.
 */
clearCriteriaOnFilterEditorHide?: boolean;

/**
 * See {@link isc.ListGrid.filterByEditor() ListGrid.filterByEditor()}.
 */
filterByEditor?: Function;

/**
 * See {@link isc.ListGrid.animateRemoveRecord ListGrid.animateRemoveRecord}.
 */
animateRemoveRecord?: boolean;

/**
 * See {@link isc.ListGrid.recordClick() ListGrid.recordClick()}.
 */
recordClick?: Function;

/**
 * See {@link isc.ListGrid.navigateOnTab ListGrid.navigateOnTab}.
 */
navigateOnTab?: boolean;

/**
 * See {@link isc.ListGrid.summaryRowFetchRequestProperties ListGrid.summaryRowFetchRequestProperties}.
 */
summaryRowFetchRequestProperties?: DSRequest;

/**
 * See {@link isc.ListGrid.getRelatedDataSource() ListGrid.getRelatedDataSource()}.
 */
getRelatedDataSource?: Function;

/**
 * See {@link isc.ListGrid.showHover ListGrid.showHover}.
 */
showHover?: boolean;

/**
 * See {@link isc.ListGrid.setFilterWindowCriteria() ListGrid.setFilterWindowCriteria()}.
 */
setFilterWindowCriteria?: Function;

/**
 * See {@link isc.ListGrid.getTitleField() ListGrid.getTitleField()}.
 */
getTitleField?: Function;

/**
 * See {@link isc.ListGrid.canCollapseGroup ListGrid.canCollapseGroup}.
 */
canCollapseGroup?: boolean;

/**
 * See {@link isc.ListGrid.recordRowAriaStateProperty ListGrid.recordRowAriaStateProperty}.
 */
recordRowAriaStateProperty?: string;

/**
 * See {@link isc.ListGrid.getDisplayValue() ListGrid.getDisplayValue()}.
 */
getDisplayValue?: Function;

/**
 * See {@link isc.ListGrid.setDragTracker() ListGrid.setDragTracker()}.
 */
setDragTracker?: Function;

/**
 * See {@link isc.ListGrid.autoFitExpandField ListGrid.autoFitExpandField}.
 */
autoFitExpandField?: string;

/**
 * See {@link isc.ListGrid.disabledGroupByPrompt ListGrid.disabledGroupByPrompt}.
 */
disabledGroupByPrompt?: string;

/**
 * See {@link isc.ListGrid.newRecordRowMessage ListGrid.newRecordRowMessage}.
 */
newRecordRowMessage?: string;

/**
 * See {@link isc.ListGrid.setShowGroupSummaryInHeader() ListGrid.setShowGroupSummaryInHeader()}.
 */
setShowGroupSummaryInHeader?: Function;

/**
 * See {@link isc.ListGrid.addSort() ListGrid.addSort()}.
 */
addSort?: Function;

/**
 * See {@link isc.ListGrid.getRecordIndex() ListGrid.getRecordIndex()}.
 */
getRecordIndex?: Function;

/**
 * See {@link isc.ListGrid.singleCellValueProperty ListGrid.singleCellValueProperty}.
 */
singleCellValueProperty?: string;

/**
 * See {@link isc.ListGrid.getGridSummaryFunction() ListGrid.getGridSummaryFunction()}.
 */
getGridSummaryFunction?: Function;

/**
 * See {@link isc.ListGrid.booleanImageWidth ListGrid.booleanImageWidth}.
 */
booleanImageWidth?: number;

/**
 * See {@link isc.ListGrid.groupIconSize ListGrid.groupIconSize}.
 */
groupIconSize?: number;

/**
 * See {@link isc.ListGrid.viewState ListGrid.viewState}.
 */
viewState?: string;

/**
 * See {@link isc.ListGrid.dataSource ListGrid.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.ListGrid.sortByGroupFirst ListGrid.sortByGroupFirst}.
 */
sortByGroupFirst?: boolean;

/**
 * See {@link isc.ListGrid.scrollToCell() ListGrid.scrollToCell()}.
 */
scrollToCell?: Function;

/**
 * See {@link isc.ListGrid.showRollOverCanvas ListGrid.showRollOverCanvas}.
 */
showRollOverCanvas?: boolean;

/**
 * See {@link isc.ListGrid.criteriaChanged() ListGrid.criteriaChanged()}.
 */
criteriaChanged?: Function;

/**
 * See {@link isc.ListGrid.dataChangedComplete() ListGrid.dataChangedComplete()}.
 */
dataChangedComplete?: Function;

/**
 * See {@link isc.ListGrid.hiliteIconHeight ListGrid.hiliteIconHeight}.
 */
hiliteIconHeight?: number;

/**
 * See {@link isc.ListGrid.showAllColumns ListGrid.showAllColumns}.
 */
showAllColumns?: boolean;

/**
 * See {@link isc.ListGrid.getGroupedRecordIndex() ListGrid.getGroupedRecordIndex()}.
 */
getGroupedRecordIndex?: Function;

/**
 * See {@link isc.ListGrid.alternateRecordStyles ListGrid.alternateRecordStyles}.
 */
alternateRecordStyles?: boolean;

/**
 * See {@link isc.ListGrid.emptyMessageStyle ListGrid.emptyMessageStyle}.
 */
emptyMessageStyle?: string;

/**
 * See {@link isc.ListGrid.autoFetchDisplayMap ListGrid.autoFetchDisplayMap}.
 */
autoFetchDisplayMap?: boolean;

/**
 * See {@link isc.ListGrid.setFieldCellIcon() ListGrid.setFieldCellIcon()}.
 */
setFieldCellIcon?: Function;

/**
 * See {@link isc.ListGrid.getExportTextColor() ListGrid.getExportTextColor()}.
 */
getExportTextColor?: Function;

/**
 * See {@link isc.ListGrid.styledRowEnds ListGrid.styledRowEnds}.
 */
styledRowEnds?: boolean;

/**
 * See {@link isc.ListGrid.waitForSave ListGrid.waitForSave}.
 */
waitForSave?: boolean;

/**
 * See {@link isc.ListGrid.isSelected() ListGrid.isSelected()}.
 */
isSelected?: Function;

/**
 * See {@link isc.ListGrid.groupStateChanged() ListGrid.groupStateChanged()}.
 */
groupStateChanged?: Function;

/**
 * See {@link isc.ListGrid.alternateFieldStyles ListGrid.alternateFieldStyles}.
 */
alternateFieldStyles?: boolean;

/**
 * See {@link isc.ListGrid.stopOnErrors ListGrid.stopOnErrors}.
 */
stopOnErrors?: boolean;

/**
 * See {@link isc.ListGrid.refreshData() ListGrid.refreshData()}.
 */
refreshData?: Function;

/**
 * See {@link isc.ListGrid.clearSortFieldText ListGrid.clearSortFieldText}.
 */
clearSortFieldText?: string;

/**
 * See {@link isc.ListGrid.missingSummaryFieldValue ListGrid.missingSummaryFieldValue}.
 */
missingSummaryFieldValue?: string;

/**
 * See {@link isc.ListGrid.showEllipsisWhenClipped ListGrid.showEllipsisWhenClipped}.
 */
showEllipsisWhenClipped?: boolean;

/**
 * See {@link isc.ListGrid.alternateFieldSuffix ListGrid.alternateFieldSuffix}.
 */
alternateFieldSuffix?: string;

/**
 * See {@link isc.ListGrid.fieldCriteriaText ListGrid.fieldCriteriaText}.
 */
fieldCriteriaText?: string;

/**
 * See {@link isc.ListGrid.headerTitleVAlign ListGrid.headerTitleVAlign}.
 */
headerTitleVAlign?: string;

/**
 * See {@link isc.ListGrid.selectionManager ListGrid.selectionManager}.
 */
selectionManager?: Selection | CellSelection | MultiLinkSelection;

/**
 * See {@link isc.ListGrid.getIconCursor() ListGrid.getIconCursor()}.
 */
getIconCursor?: Function;

/**
 * See {@link isc.ListGrid.hoverStyle ListGrid.hoverStyle}.
 */
hoverStyle?: string;

/**
 * See {@link isc.ListGrid.updateRecordComponent() ListGrid.updateRecordComponent()}.
 */
updateRecordComponent?: Function;

/**
 * See {@link isc.ListGrid.filterWindowInstructions ListGrid.filterWindowInstructions}.
 */
filterWindowInstructions?: string;

/**
 * See {@link isc.ListGrid.showHeaderSpanTitlesInSortEditor ListGrid.showHeaderSpanTitlesInSortEditor}.
 */
showHeaderSpanTitlesInSortEditor?: boolean;

/**
 * See {@link isc.ListGrid.setShowGroupSummary() ListGrid.setShowGroupSummary()}.
 */
setShowGroupSummary?: Function;

/**
 * See {@link isc.ListGrid.selectionAppearance ListGrid.selectionAppearance}.
 */
selectionAppearance?: string;

/**
 * See {@link isc.ListGrid.wrapHeaderSpanTitles ListGrid.wrapHeaderSpanTitles}.
 */
wrapHeaderSpanTitles?: boolean;

/**
 * See {@link isc.ListGrid.includeHilitesInSummaryFields ListGrid.includeHilitesInSummaryFields}.
 */
includeHilitesInSummaryFields?: boolean;

/**
 * See {@link isc.ListGrid.isExportingClientData() ListGrid.isExportingClientData()}.
 */
isExportingClientData?: Function;

/**
 * See {@link isc.ListGrid.askForSort() ListGrid.askForSort()}.
 */
askForSort?: Function;

/**
 * See {@link isc.ListGrid.savedSearchText ListGrid.savedSearchText}.
 */
savedSearchText?: string;

/**
 * See {@link isc.ListGrid.frozenRollOverCanvas ListGrid.frozenRollOverCanvas}.
 */
frozenRollOverCanvas?: Canvas;

/**
 * See {@link isc.ListGrid.expansionFieldImageShowRTL ListGrid.expansionFieldImageShowRTL}.
 */
expansionFieldImageShowRTL?: boolean;

/**
 * See {@link isc.ListGrid.setFieldHeaderBaseStyle() ListGrid.setFieldHeaderBaseStyle()}.
 */
setFieldHeaderBaseStyle?: Function;

/**
 * See {@link isc.ListGrid.booleanBaseStyle ListGrid.booleanBaseStyle}.
 */
booleanBaseStyle?: string;

/**
 * See {@link isc.ListGrid.groupTitleColumnProperties ListGrid.groupTitleColumnProperties}.
 */
groupTitleColumnProperties?: ListGridField;

/**
 * See {@link isc.ListGrid.showSelectedRollUnderCanvas ListGrid.showSelectedRollUnderCanvas}.
 */
showSelectedRollUnderCanvas?: boolean;

/**
 * See {@link isc.ListGrid.alwaysShowEditors ListGrid.alwaysShowEditors}.
 */
alwaysShowEditors?: boolean;

/**
 * See {@link isc.ListGrid.dragTrackerMode ListGrid.dragTrackerMode}.
 */
dragTrackerMode?: string;

/**
 * See {@link isc.ListGrid.dataFetchMode ListGrid.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.ListGrid.hiliteIcons ListGrid.hiliteIcons}.
 */
hiliteIcons?: string[];

/**
 * See {@link isc.ListGrid.sortDescendingImage ListGrid.sortDescendingImage}.
 */
sortDescendingImage?: string | ImgHTMLProperties;

/**
 * See {@link isc.ListGrid.getGroupSummaryData() ListGrid.getGroupSummaryData()}.
 */
getGroupSummaryData?: Function;

/**
 * See {@link isc.ListGrid.setAutoFitWidthApproach() ListGrid.setAutoFitWidthApproach()}.
 */
setAutoFitWidthApproach?: Function;

/**
 * See {@link isc.ListGrid.formulaUpdated() ListGrid.formulaUpdated()}.
 */
formulaUpdated?: Function;

/**
 * See {@link isc.ListGrid.setHeaderSpanBaseStyle() ListGrid.setHeaderSpanBaseStyle()}.
 */
setHeaderSpanBaseStyle?: Function;

/**
 * See {@link isc.ListGrid.clearSort() ListGrid.clearSort()}.
 */
clearSort?: Function;

/**
 * See {@link isc.ListGrid.childExpansionMode ListGrid.childExpansionMode}.
 */
childExpansionMode?: string;

/**
 * See {@link isc.ListGrid.scrollToCellXPosition ListGrid.scrollToCellXPosition}.
 */
scrollToCellXPosition?: string;

/**
 * See {@link isc.ListGrid.setRecordComponentHeight() ListGrid.setRecordComponentHeight()}.
 */
setRecordComponentHeight?: Function;

/**
 * See {@link isc.ListGrid.showRollUnderCanvas ListGrid.showRollUnderCanvas}.
 */
showRollUnderCanvas?: boolean;

/**
 * See {@link isc.ListGrid.groupByMaxRecords ListGrid.groupByMaxRecords}.
 */
groupByMaxRecords?: number;

/**
 * See {@link isc.ListGrid.handleRegroup() ListGrid.handleRegroup()}.
 */
handleRegroup?: Function;

/**
 * See {@link isc.ListGrid.enforceVClipping ListGrid.enforceVClipping}.
 */
enforceVClipping?: boolean;

/**
 * See {@link isc.ListGrid.expansionDetailRelatedProperties ListGrid.expansionDetailRelatedProperties}.
 */
expansionDetailRelatedProperties?: HLayout;

/**
 * See {@link isc.ListGrid.spannedHeaderBaseStyle ListGrid.spannedHeaderBaseStyle}.
 */
spannedHeaderBaseStyle?: string;

/**
 * See {@link isc.ListGrid.applyRowNumberStyle ListGrid.applyRowNumberStyle}.
 */
applyRowNumberStyle?: boolean;

/**
 * See {@link isc.ListGrid.virtualScrolling ListGrid.virtualScrolling}.
 */
virtualScrolling?: boolean;

/**
 * See {@link isc.ListGrid.rowHasErrors() ListGrid.rowHasErrors()}.
 */
rowHasErrors?: Function;

/**
 * See {@link isc.ListGrid.willFetchData() ListGrid.willFetchData()}.
 */
willFetchData?: Function;

/**
 * See {@link isc.ListGrid.sortField ListGrid.sortField}.
 */
sortField?: string | number;

/**
 * See {@link isc.ListGrid.canExpandRecords ListGrid.canExpandRecords}.
 */
canExpandRecords?: boolean;

/**
 * See {@link isc.ListGrid.recordSummaryAttributePrefix ListGrid.recordSummaryAttributePrefix}.
 */
recordSummaryAttributePrefix?: string;

/**
 * See {@link isc.ListGrid.clearAllCriteria() ListGrid.clearAllCriteria()}.
 */
clearAllCriteria?: Function;

/**
 * See {@link isc.ListGrid.getFocusRow() ListGrid.getFocusRow()}.
 */
getFocusRow?: Function;

/**
 * See {@link isc.ListGrid.hiliteViaAIMode ListGrid.hiliteViaAIMode}.
 */
hiliteViaAIMode?: string;

/**
 * See {@link isc.ListGrid.refreshCell() ListGrid.refreshCell()}.
 */
refreshCell?: Function;

/**
 * See {@link isc.ListGrid.titleField ListGrid.titleField}.
 */
titleField?: string;

/**
 * See {@link isc.ListGrid.iconCursor ListGrid.iconCursor}.
 */
iconCursor?: string;

/**
 * See {@link isc.ListGrid.groupByFieldSummaries ListGrid.groupByFieldSummaries}.
 */
groupByFieldSummaries?: string[];

/**
 * See {@link isc.ListGrid.canSelectRecord() ListGrid.canSelectRecord()}.
 */
canSelectRecord?: Function;

/**
 * See {@link isc.ListGrid.groupTreeProperties ListGrid.groupTreeProperties}.
 */
groupTreeProperties?: Tree;

/**
 * See {@link isc.ListGrid.getSortFieldCount() ListGrid.getSortFieldCount()}.
 */
getSortFieldCount?: Function;

/**
 * See {@link isc.ListGrid.setCriteria() ListGrid.setCriteria()}.
 */
setCriteria?: Function;

/**
 * See {@link isc.ListGrid.expansionIndent ListGrid.expansionIndent}.
 */
expansionIndent?: number;

/**
 * See {@link isc.ListGrid.getCheckboxField() ListGrid.getCheckboxField()}.
 */
getCheckboxField?: Function;

/**
 * See {@link isc.ListGrid.refreshRecordComponent() ListGrid.refreshRecordComponent()}.
 */
refreshRecordComponent?: Function;

/**
 * See {@link isc.ListGrid.data ListGrid.data}.
 */
data?: ListGridRecord[];

/**
 * See {@link isc.ListGrid.sorterButtonTitle ListGrid.sorterButtonTitle}.
 */
sorterButtonTitle?: string;

/**
 * See {@link isc.ListGrid.datetimeFormatter ListGrid.datetimeFormatter}.
 */
datetimeFormatter?: string;

/**
 * See {@link isc.ListGrid.setUserCriteriaState() ListGrid.setUserCriteriaState()}.
 */
setUserCriteriaState?: Function;

/**
 * See {@link isc.ListGrid.animateFolderSpeed ListGrid.animateFolderSpeed}.
 */
animateFolderSpeed?: number;

/**
 * See {@link isc.ListGrid.getSortNumeralHTML() ListGrid.getSortNumeralHTML()}.
 */
getSortNumeralHTML?: Function;

/**
 * See {@link isc.ListGrid.recordDetailDSProperty ListGrid.recordDetailDSProperty}.
 */
recordDetailDSProperty?: string;

/**
 * See {@link isc.ListGrid.recordRadiusTargets ListGrid.recordRadiusTargets}.
 */
recordRadiusTargets?: string[];

/**
 * See {@link isc.ListGrid.reverseRTLAlign ListGrid.reverseRTLAlign}.
 */
reverseRTLAlign?: boolean;

/**
 * See {@link isc.ListGrid.rowMouseUp() ListGrid.rowMouseUp()}.
 */
rowMouseUp?: Function;

/**
 * See {@link isc.ListGrid.loadingMessage ListGrid.loadingMessage}.
 */
loadingMessage?: string;

/**
 * See {@link isc.ListGrid.headerBarStyle ListGrid.headerBarStyle}.
 */
headerBarStyle?: string;

/**
 * See {@link isc.ListGrid.showSortNumerals ListGrid.showSortNumerals}.
 */
showSortNumerals?: boolean;

/**
 * See {@link isc.ListGrid.setHeaderSpanButtonProperties() ListGrid.setHeaderSpanButtonProperties()}.
 */
setHeaderSpanButtonProperties?: Function;

/**
 * See {@link isc.ListGrid.removeIcon ListGrid.removeIcon}.
 */
removeIcon?: string;

/**
 * See {@link isc.ListGrid.canRequestRowCount ListGrid.canRequestRowCount}.
 */
canRequestRowCount?: boolean;

/**
 * See {@link isc.ListGrid.canEditHilites ListGrid.canEditHilites}.
 */
canEditHilites?: boolean;

/**
 * See {@link isc.ListGrid.getGroupNodeHTML() ListGrid.getGroupNodeHTML()}.
 */
getGroupNodeHTML?: Function;

/**
 * See {@link isc.ListGrid.frozenBaseStyle ListGrid.frozenBaseStyle}.
 */
frozenBaseStyle?: string;

/**
 * See {@link isc.ListGrid.getFilterEditorCriteria() ListGrid.getFilterEditorCriteria()}.
 */
getFilterEditorCriteria?: Function;

/**
 * See {@link isc.ListGrid.getCellRowSpan() ListGrid.getCellRowSpan()}.
 */
getCellRowSpan?: Function;

/**
 * See {@link isc.ListGrid.defaultTimeFieldWidth ListGrid.defaultTimeFieldWidth}.
 */
defaultTimeFieldWidth?: number;

/**
 * See {@link isc.ListGrid.recordEditProperty ListGrid.recordEditProperty}.
 */
recordEditProperty?: string;

/**
 * See {@link isc.ListGrid.recordBaseStyleProperty ListGrid.recordBaseStyleProperty}.
 */
recordBaseStyleProperty?: string;

/**
 * See {@link isc.ListGrid.dragHandleFieldTitle ListGrid.dragHandleFieldTitle}.
 */
dragHandleFieldTitle?: string;

/**
 * See {@link isc.ListGrid.overflow ListGrid.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.ListGrid.emptyAIHoverContents ListGrid.emptyAIHoverContents}.
 */
emptyAIHoverContents?: string;

/**
 * See {@link isc.ListGrid.setGroupState() ListGrid.setGroupState()}.
 */
setGroupState?: Function;

/**
 * See {@link isc.ListGrid.printBooleanBaseStyle ListGrid.printBooleanBaseStyle}.
 */
printBooleanBaseStyle?: string;

/**
 * See {@link isc.ListGrid.scrollToCellYPosition ListGrid.scrollToCellYPosition}.
 */
scrollToCellYPosition?: string;

/**
 * See {@link isc.ListGrid.generateClickOnSpace ListGrid.generateClickOnSpace}.
 */
generateClickOnSpace?: boolean;

/**
 * See {@link isc.ListGrid.getRowRangeDisplayValue() ListGrid.getRowRangeDisplayValue()}.
 */
getRowRangeDisplayValue?: Function;

/**
 * See {@link isc.ListGrid.showHeaderMenuButton ListGrid.showHeaderMenuButton}.
 */
showHeaderMenuButton?: boolean;

/**
 * See {@link isc.ListGrid.longTextEditorType ListGrid.longTextEditorType}.
 */
longTextEditorType?: string;

/**
 * See {@link isc.ListGrid.skipLineBreaks ListGrid.skipLineBreaks}.
 */
skipLineBreaks?: boolean;

/**
 * See {@link isc.ListGrid.autoConfirmSaveEdits ListGrid.autoConfirmSaveEdits}.
 */
autoConfirmSaveEdits?: boolean;

/**
 * See {@link isc.ListGrid.headerMenuButtonHeight ListGrid.headerMenuButtonHeight}.
 */
headerMenuButtonHeight?: number | string;

/**
 * See {@link isc.ListGrid.unknownRowCountDisplayValue ListGrid.unknownRowCountDisplayValue}.
 */
unknownRowCountDisplayValue?: string;

/**
 * See {@link isc.ListGrid.headerMenuButtonIconHeight ListGrid.headerMenuButtonIconHeight}.
 */
headerMenuButtonIconHeight?: number;

/**
 * See {@link isc.ListGrid.cellHasChanges() ListGrid.cellHasChanges()}.
 */
cellHasChanges?: Function;

/**
 * See {@link isc.ListGrid.headerSpanHeight ListGrid.headerSpanHeight}.
 */
headerSpanHeight?: number;

/**
 * See {@link isc.ListGrid.recordComponentPoolingMode ListGrid.recordComponentPoolingMode}.
 */
recordComponentPoolingMode?: string;

/**
 * See {@link isc.ListGrid.fieldPickerFieldProperties ListGrid.fieldPickerFieldProperties}.
 */
fieldPickerFieldProperties?: string[];

/**
 * See {@link isc.ListGrid.gridComponents ListGrid.gridComponents}.
 */
gridComponents?: string[];

/**
 * See {@link isc.ListGrid.drop() ListGrid.drop()}.
 */
drop?: Function;

/**
 * See {@link isc.ListGrid.groupSortDirection ListGrid.groupSortDirection}.
 */
groupSortDirection?: string;

/**
 * See {@link isc.ListGrid.autoSizeHeaderSpans ListGrid.autoSizeHeaderSpans}.
 */
autoSizeHeaderSpans?: boolean;

/**
 * See {@link isc.ListGrid.rollOverCanvasProperties ListGrid.rollOverCanvasProperties}.
 */
rollOverCanvasProperties?: Canvas;

/**
 * See {@link isc.ListGrid.setShowRecordComponents() ListGrid.setShowRecordComponents()}.
 */
setShowRecordComponents?: Function;

/**
 * See {@link isc.ListGrid.initialCriteria ListGrid.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.ListGrid.refreshCellStyle() ListGrid.refreshCellStyle()}.
 */
refreshCellStyle?: Function;

/**
 * See {@link isc.ListGrid.getCellSelection() ListGrid.getCellSelection()}.
 */
getCellSelection?: Function;

/**
 * See {@link isc.ListGrid.summaryUpdated() ListGrid.summaryUpdated()}.
 */
summaryUpdated?: Function;

/**
 * See {@link isc.ListGrid.printWrapCells ListGrid.printWrapCells}.
 */
printWrapCells?: boolean;

/**
 * See {@link isc.ListGrid.setAutoFitMaxRecords() ListGrid.setAutoFitMaxRecords()}.
 */
setAutoFitMaxRecords?: Function;

/**
 * See {@link isc.ListGrid.expandRecord() ListGrid.expandRecord()}.
 */
expandRecord?: Function;

/**
 * See {@link isc.ListGrid.selectHeaderOnSort ListGrid.selectHeaderOnSort}.
 */
selectHeaderOnSort?: boolean;

/**
 * See {@link isc.ListGrid.deselectRecords() ListGrid.deselectRecords()}.
 */
deselectRecords?: Function;

/**
 * See {@link isc.ListGrid.expansionDetailsProperties ListGrid.expansionDetailsProperties}.
 */
expansionDetailsProperties?: DetailViewer;

/**
 * See {@link isc.ListGrid.includeInSummaryProperty ListGrid.includeInSummaryProperty}.
 */
includeInSummaryProperty?: string;

/**
 * See {@link isc.ListGrid.refreshFields() ListGrid.refreshFields()}.
 */
refreshFields?: Function;

/**
 * See {@link isc.ListGrid.isSortField() ListGrid.isSortField()}.
 */
isSortField?: Function;

/**
 * See {@link isc.ListGrid.hiliteIconWidth ListGrid.hiliteIconWidth}.
 */
hiliteIconWidth?: number;

/**
 * See {@link isc.ListGrid.setCanReorderRecords() ListGrid.setCanReorderRecords()}.
 */
setCanReorderRecords?: Function;

/**
 * See {@link isc.ListGrid.getRowNum() ListGrid.getRowNum()}.
 */
getRowNum?: Function;

/**
 * See {@link isc.ListGrid.headerButtonAriaRole ListGrid.headerButtonAriaRole}.
 */
headerButtonAriaRole?: string;

/**
 * See {@link isc.ListGrid.removeRecordClick() ListGrid.removeRecordClick()}.
 */
removeRecordClick?: Function;

/**
 * See {@link isc.ListGrid.canAddSummaryFields ListGrid.canAddSummaryFields}.
 */
canAddSummaryFields?: boolean;

/**
 * See {@link isc.ListGrid.showRecordComponentsByCell ListGrid.showRecordComponentsByCell}.
 */
showRecordComponentsByCell?: boolean;

/**
 * See {@link isc.ListGrid.selectAllRecords() ListGrid.selectAllRecords()}.
 */
selectAllRecords?: Function;

/**
 * See {@link isc.ListGrid.getBody() ListGrid.getBody()}.
 */
getBody?: Function;

/**
 * See {@link isc.ListGrid.headerAriaRole ListGrid.headerAriaRole}.
 */
headerAriaRole?: string;

/**
 * See {@link isc.ListGrid.getFormattedRowCount() ListGrid.getFormattedRowCount()}.
 */
getFormattedRowCount?: Function;

/**
 * See {@link isc.ListGrid.deselectRecord() ListGrid.deselectRecord()}.
 */
deselectRecord?: Function;

/**
 * See {@link isc.ListGrid.dragHandleFieldProperties ListGrid.dragHandleFieldProperties}.
 */
dragHandleFieldProperties?: ListGridField;

/**
 * See {@link isc.ListGrid.warnOnRemovalMessage ListGrid.warnOnRemovalMessage}.
 */
warnOnRemovalMessage?: string;

/**
 * See {@link isc.ListGrid.rowRangeDisplayStyle ListGrid.rowRangeDisplayStyle}.
 */
rowRangeDisplayStyle?: string;

/**
 * See {@link isc.ListGrid.getFieldName() ListGrid.getFieldName()}.
 */
getFieldName?: Function;

/**
 * See {@link isc.ListGrid.aiSortProgressDialogProperties ListGrid.aiSortProgressDialogProperties}.
 */
aiSortProgressDialogProperties?: Canvas;

/**
 * See {@link isc.ListGrid.getSavedViewState() ListGrid.getSavedViewState()}.
 */
getSavedViewState?: Function;

/**
 * See {@link isc.ListGrid.headerShadowVOffset ListGrid.headerShadowVOffset}.
 */
headerShadowVOffset?: number;

/**
 * See {@link isc.ListGrid.getRollOverCanvas() ListGrid.getRollOverCanvas()}.
 */
getRollOverCanvas?: Function;

/**
 * See {@link isc.ListGrid.timeFormatter ListGrid.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.ListGrid.fixedFieldWidths ListGrid.fixedFieldWidths}.
 */
fixedFieldWidths?: boolean;

/**
 * See {@link isc.ListGrid.formatEditorValue() ListGrid.formatEditorValue()}.
 */
formatEditorValue?: Function;

/**
 * See {@link isc.ListGrid.screenReaderCellSeparator ListGrid.screenReaderCellSeparator}.
 */
screenReaderCellSeparator?: string;

/**
 * See {@link isc.ListGrid.fieldState ListGrid.fieldState}.
 */
fieldState?: string;

/**
 * See {@link isc.ListGrid.shouldIncludeHiliteInSummaryField() ListGrid.shouldIncludeHiliteInSummaryField()}.
 */
shouldIncludeHiliteInSummaryField?: Function;

/**
 * See {@link isc.ListGrid.exportAlternateRowBGColor ListGrid.exportAlternateRowBGColor}.
 */
exportAlternateRowBGColor?: string;

/**
 * See {@link isc.ListGrid.setFieldSearchOperator() ListGrid.setFieldSearchOperator()}.
 */
setFieldSearchOperator?: Function;

/**
 * See {@link isc.ListGrid.hiliteRowOnFocus ListGrid.hiliteRowOnFocus}.
 */
hiliteRowOnFocus?: boolean;

/**
 * See {@link isc.ListGrid.printCheckboxFieldPartialImage ListGrid.printCheckboxFieldPartialImage}.
 */
printCheckboxFieldPartialImage?: string;

/**
 * See {@link isc.ListGrid.defaultDateTimeFieldWidth ListGrid.defaultDateTimeFieldWidth}.
 */
defaultDateTimeFieldWidth?: number;

/**
 * See {@link isc.ListGrid.showHeader ListGrid.showHeader}.
 */
showHeader?: boolean;

/**
 * See {@link isc.ListGrid.editorExit() ListGrid.editorExit()}.
 */
editorExit?: Function;

/**
 * See {@link isc.ListGrid.scrollWheelRedrawDelay ListGrid.scrollWheelRedrawDelay}.
 */
scrollWheelRedrawDelay?: number;

/**
 * See {@link isc.ListGrid.filterWindowTitle ListGrid.filterWindowTitle}.
 */
filterWindowTitle?: string;

/**
 * See {@link isc.ListGrid.getEditField() ListGrid.getEditField()}.
 */
getEditField?: Function;

/**
 * See {@link isc.ListGrid.savedSearchDS ListGrid.savedSearchDS}.
 */
savedSearchDS?: string;

/**
 * See {@link isc.ListGrid.implicitCriteria ListGrid.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.ListGrid.showCellContextMenus ListGrid.showCellContextMenus}.
 */
showCellContextMenus?: boolean;

/**
 * See {@link isc.ListGrid.multiGroupDialogProperties ListGrid.multiGroupDialogProperties}.
 */
multiGroupDialogProperties?: MultiGroupDialog;

/**
 * See {@link isc.ListGrid.clearFilterWindowCriteria() ListGrid.clearFilterWindowCriteria()}.
 */
clearFilterWindowCriteria?: Function;

/**
 * See {@link isc.ListGrid.noSavedSearchesText ListGrid.noSavedSearchesText}.
 */
noSavedSearchesText?: string;

/**
 * See {@link isc.ListGrid.groupByComplete() ListGrid.groupByComplete()}.
 */
groupByComplete?: Function;

/**
 * See {@link isc.ListGrid.recordScreen ListGrid.recordScreen}.
 */
recordScreen?: string;

/**
 * See {@link isc.ListGrid.frozenFieldsMaxWidth ListGrid.frozenFieldsMaxWidth}.
 */
frozenFieldsMaxWidth?: string | number;

/**
 * See {@link isc.ListGrid.sortArrowMenuButtonSpaceOffset ListGrid.sortArrowMenuButtonSpaceOffset}.
 */
sortArrowMenuButtonSpaceOffset?: number;

/**
 * See {@link isc.ListGrid.rowEndEditAction ListGrid.rowEndEditAction}.
 */
rowEndEditAction?: string;

/**
 * See {@link isc.ListGrid.filterEditorSubmit() ListGrid.filterEditorSubmit()}.
 */
filterEditorSubmit?: Function;

/**
 * See {@link isc.ListGrid.showField() ListGrid.showField()}.
 */
showField?: Function;

/**
 * See {@link isc.ListGrid.criteriaIndicatorHeaderColor ListGrid.criteriaIndicatorHeaderColor}.
 */
criteriaIndicatorHeaderColor?: string;

/**
 * See {@link isc.ListGrid.headerContextMenuProperties ListGrid.headerContextMenuProperties}.
 */
headerContextMenuProperties?: Canvas;

/**
 * See {@link isc.ListGrid.showGroupTitleColumn ListGrid.showGroupTitleColumn}.
 */
showGroupTitleColumn?: boolean;

/**
 * See {@link isc.ListGrid.animateSelectionUnder ListGrid.animateSelectionUnder}.
 */
animateSelectionUnder?: boolean;

/**
 * See {@link isc.ListGrid.getGridSummaryData() ListGrid.getGridSummaryData()}.
 */
getGridSummaryData?: Function;

/**
 * See {@link isc.ListGrid.getGridSummary() ListGrid.getGridSummary()}.
 */
getGridSummary?: Function;

/**
 * See {@link isc.ListGrid.minFieldWidth ListGrid.minFieldWidth}.
 */
minFieldWidth?: number;

/**
 * See {@link isc.ListGrid.startEditing() ListGrid.startEditing()}.
 */
startEditing?: Function;

/**
 * See {@link isc.ListGrid.minHeight ListGrid.minHeight}.
 */
minHeight?: number;

/**
 * See {@link isc.ListGrid.recalculateSummaries() ListGrid.recalculateSummaries()}.
 */
recalculateSummaries?: Function;

/**
 * See {@link isc.ListGrid.recordRowRoleProperty ListGrid.recordRowRoleProperty}.
 */
recordRowRoleProperty?: string;

/**
 * See {@link isc.ListGrid.neverValidate ListGrid.neverValidate}.
 */
neverValidate?: boolean;

/**
 * See {@link isc.ListGrid.configureGrouping() ListGrid.configureGrouping()}.
 */
configureGrouping?: Function;

/**
 * See {@link isc.ListGrid.exportHeaderHeights ListGrid.exportHeaderHeights}.
 */
exportHeaderHeights?: boolean;

/**
 * See {@link isc.ListGrid.showSelectedRollOverCanvas ListGrid.showSelectedRollOverCanvas}.
 */
showSelectedRollOverCanvas?: boolean;

/**
 * See {@link isc.ListGrid.screenReaderNavigateByCell ListGrid.screenReaderNavigateByCell}.
 */
screenReaderNavigateByCell?: boolean;

/**
 * See {@link isc.ListGrid.invalidateRecordComponents() ListGrid.invalidateRecordComponents()}.
 */
invalidateRecordComponents?: Function;

/**
 * See {@link isc.ListGrid.getFormattedRowRange() ListGrid.getFormattedRowRange()}.
 */
getFormattedRowRange?: Function;

/**
 * See {@link isc.ListGrid.canAddAISortFields ListGrid.canAddAISortFields}.
 */
canAddAISortFields?: boolean;

/**
 * See {@link isc.ListGrid.getOriginalData() ListGrid.getOriginalData()}.
 */
getOriginalData?: Function;

/**
 * See {@link isc.ListGrid.loadingDataMessageStyle ListGrid.loadingDataMessageStyle}.
 */
loadingDataMessageStyle?: string;

/**
 * See {@link isc.ListGrid.canPickFields ListGrid.canPickFields}.
 */
canPickFields?: boolean;

/**
 * See {@link isc.ListGrid.unremoveIcon ListGrid.unremoveIcon}.
 */
unremoveIcon?: string;

/**
 * See {@link isc.ListGrid.showHoverOnDisabledCells ListGrid.showHoverOnDisabledCells}.
 */
showHoverOnDisabledCells?: boolean;

/**
 * See {@link isc.ListGrid.headerHoverStyle ListGrid.headerHoverStyle}.
 */
headerHoverStyle?: string;

/**
 * See {@link isc.ListGrid.groupNodeStyle ListGrid.groupNodeStyle}.
 */
groupNodeStyle?: string;

/**
 * See {@link isc.ListGrid.allowRowSpanning ListGrid.allowRowSpanning}.
 */
allowRowSpanning?: boolean;

/**
 * See {@link isc.ListGrid.getTotalRows() ListGrid.getTotalRows()}.
 */
getTotalRows?: Function;

/**
 * See {@link isc.ListGrid.editOnFocus ListGrid.editOnFocus}.
 */
editOnFocus?: boolean;

/**
 * See {@link isc.ListGrid.isRowNumberField() ListGrid.isRowNumberField()}.
 */
isRowNumberField?: Function;

/**
 * See {@link isc.ListGrid.summaryRowHeight ListGrid.summaryRowHeight}.
 */
summaryRowHeight?: number;

/**
 * See {@link isc.ListGrid.savedSearchAdminRole ListGrid.savedSearchAdminRole}.
 */
savedSearchAdminRole?: string;

/**
 * See {@link isc.ListGrid.rowRole ListGrid.rowRole}.
 */
rowRole?: string;

/**
 * See {@link isc.ListGrid.getRecordComponent() ListGrid.getRecordComponent()}.
 */
getRecordComponent?: Function;

/**
 * See {@link isc.ListGrid.hideFilterEditorTitle ListGrid.hideFilterEditorTitle}.
 */
hideFilterEditorTitle?: string;

/**
 * See {@link isc.ListGrid.headerProperties ListGrid.headerProperties}.
 */
headerProperties?: Layout;

/**
 * See {@link isc.ListGrid.rowMouseDown() ListGrid.rowMouseDown()}.
 */
rowMouseDown?: Function;

/**
 * See {@link isc.ListGrid.addEmbeddedComponent() ListGrid.addEmbeddedComponent()}.
 */
addEmbeddedComponent?: Function;

/**
 * See {@link isc.ListGrid.editEvent ListGrid.editEvent}.
 */
editEvent?: string;

/**
 * See {@link isc.ListGrid.hiliteReplaceValueFieldTitle ListGrid.hiliteReplaceValueFieldTitle}.
 */
hiliteReplaceValueFieldTitle?: string;

/**
 * See {@link isc.ListGrid.multiSortDialogProperties ListGrid.multiSortDialogProperties}.
 */
multiSortDialogProperties?: MultiSortDialog;

/**
 * See {@link isc.ListGrid.editPendingCSSText ListGrid.editPendingCSSText}.
 */
editPendingCSSText?: string;

/**
 * See {@link isc.ListGrid.clearFieldError() ListGrid.clearFieldError()}.
 */
clearFieldError?: Function;

/**
 * See {@link isc.ListGrid.preserveWhitespace ListGrid.preserveWhitespace}.
 */
preserveWhitespace?: boolean;

/**
 * See {@link isc.ListGrid.filterButtonPrompt ListGrid.filterButtonPrompt}.
 */
filterButtonPrompt?: string;

/**
 * See {@link isc.ListGrid.exportFieldAlignments ListGrid.exportFieldAlignments}.
 */
exportFieldAlignments?: boolean;

/**
 * See {@link isc.ListGrid.selectionUpdated() ListGrid.selectionUpdated()}.
 */
selectionUpdated?: Function;

/**
 * See {@link isc.ListGrid.explicitFetchDelay ListGrid.explicitFetchDelay}.
 */
explicitFetchDelay?: number;

/**
 * See {@link isc.ListGrid.booleanFalseImage ListGrid.booleanFalseImage}.
 */
booleanFalseImage?: string;

/**
 * See {@link isc.ListGrid.autoFitMaxWidth ListGrid.autoFitMaxWidth}.
 */
autoFitMaxWidth?: number | string;

/**
 * See {@link isc.ListGrid.exportDefaultBGColor ListGrid.exportDefaultBGColor}.
 */
exportDefaultBGColor?: string;

/**
 * See {@link isc.ListGrid.setHeaderSpanHeaderTitle() ListGrid.setHeaderSpanHeaderTitle()}.
 */
setHeaderSpanHeaderTitle?: Function;

/**
 * See {@link isc.ListGrid.setHeaderRadius() ListGrid.setHeaderRadius()}.
 */
setHeaderRadius?: Function;

/**
 * See {@link isc.ListGrid.exportHiddenFieldWidth ListGrid.exportHiddenFieldWidth}.
 */
exportHiddenFieldWidth?: number;

/**
 * See {@link isc.ListGrid.embeddedComponentMargin ListGrid.embeddedComponentMargin}.
 */
embeddedComponentMargin?: number;

/**
 * See {@link isc.ListGrid.setFieldTitle() ListGrid.setFieldTitle()}.
 */
setFieldTitle?: Function;

/**
 * See {@link isc.ListGrid.ungroup() ListGrid.ungroup()}.
 */
ungroup?: Function;

/**
 * See {@link isc.ListGrid.useCellRollOvers ListGrid.useCellRollOvers}.
 */
useCellRollOvers?: boolean;

/**
 * See {@link isc.ListGrid.animateRemoveSpeed ListGrid.animateRemoveSpeed}.
 */
animateRemoveSpeed?: number;

/**
 * See {@link isc.ListGrid.markForRedraw() ListGrid.markForRedraw()}.
 */
markForRedraw?: Function;

/**
 * See {@link isc.ListGrid.expansionFieldImageWidth ListGrid.expansionFieldImageWidth}.
 */
expansionFieldImageWidth?: number;

/**
 * See {@link isc.ListGrid.recordDoubleClick() ListGrid.recordDoubleClick()}.
 */
recordDoubleClick?: Function;

/**
 * See {@link isc.ListGrid.emptyCellValue ListGrid.emptyCellValue}.
 */
emptyCellValue?: string;

/**
 * See {@link isc.ListGrid.getRowRangeDisplay() ListGrid.getRowRangeDisplay()}.
 */
getRowRangeDisplay?: Function;

/**
 * See {@link isc.ListGrid.expansionComponentPoolingMode ListGrid.expansionComponentPoolingMode}.
 */
expansionComponentPoolingMode?: string;

/**
 * See {@link isc.ListGrid.valueIconRightPadding ListGrid.valueIconRightPadding}.
 */
valueIconRightPadding?: number;

/**
 * See {@link isc.ListGrid.loadAllRecords() ListGrid.loadAllRecords()}.
 */
loadAllRecords?: Function;

/**
 * See {@link isc.ListGrid.getSelectedState() ListGrid.getSelectedState()}.
 */
getSelectedState?: Function;

/**
 * See {@link isc.ListGrid.filterButtonProperties ListGrid.filterButtonProperties}.
 */
filterButtonProperties?: Button;

/**
 * See {@link isc.ListGrid.lastCellStyle ListGrid.lastCellStyle}.
 */
lastCellStyle?: string;

/**
 * See {@link isc.ListGrid.headerHoverWrap ListGrid.headerHoverWrap}.
 */
headerHoverWrap?: boolean;

/**
 * See {@link isc.ListGrid.autoFitTimeFields ListGrid.autoFitTimeFields}.
 */
autoFitTimeFields?: string;

/**
 * See {@link isc.ListGrid.exportWrapHeaderTitles ListGrid.exportWrapHeaderTitles}.
 */
exportWrapHeaderTitles?: boolean;

/**
 * See {@link isc.ListGrid.showHeaderContextMenu ListGrid.showHeaderContextMenu}.
 */
showHeaderContextMenu?: boolean;

/**
 * See {@link isc.ListGrid.getSortByGroupFirst() ListGrid.getSortByGroupFirst()}.
 */
getSortByGroupFirst?: Function;

/**
 * See {@link isc.ListGrid.rowNumberStart ListGrid.rowNumberStart}.
 */
rowNumberStart?: number;

/**
 * See {@link isc.ListGrid.getRowCount() ListGrid.getRowCount()}.
 */
getRowCount?: Function;

/**
 * See {@link isc.ListGrid.placeholderAIHoverContents ListGrid.placeholderAIHoverContents}.
 */
placeholderAIHoverContents?: string;

/**
 * See {@link isc.ListGrid.getEditorValueIcons() ListGrid.getEditorValueIcons()}.
 */
getEditorValueIcons?: Function;

/**
 * See {@link isc.ListGrid.deselectOnPartialCheckboxClick ListGrid.deselectOnPartialCheckboxClick}.
 */
deselectOnPartialCheckboxClick?: boolean;

/**
 * See {@link isc.ListGrid.rollUnderCanvasProperties ListGrid.rollUnderCanvasProperties}.
 */
rollUnderCanvasProperties?: Canvas;

/**
 * See {@link isc.ListGrid.removeSelectedData() ListGrid.removeSelectedData()}.
 */
removeSelectedData?: Function;

/**
 * See {@link isc.ListGrid.fieldStateChanged() ListGrid.fieldStateChanged()}.
 */
fieldStateChanged?: Function;

/**
 * See {@link isc.ListGrid.groupNodeBaseStyle ListGrid.groupNodeBaseStyle}.
 */
groupNodeBaseStyle?: string;

/**
 * See {@link isc.ListGrid.animateSelection ListGrid.animateSelection}.
 */
animateSelection?: boolean;

/**
 * See {@link isc.ListGrid.removeFieldTitle ListGrid.removeFieldTitle}.
 */
removeFieldTitle?: string;

/**
 * See {@link isc.ListGrid.getVisibleRows() ListGrid.getVisibleRows()}.
 */
getVisibleRows?: Function;

/**
 * See {@link isc.ListGrid.alternateFieldFrequency ListGrid.alternateFieldFrequency}.
 */
alternateFieldFrequency?: number;

/**
 * See {@link isc.ListGrid.editByCell ListGrid.editByCell}.
 */
editByCell?: boolean;

/**
 * See {@link isc.ListGrid.headerHoverVAlign ListGrid.headerHoverVAlign}.
 */
headerHoverVAlign?: string;

/**
 * See {@link isc.ListGrid.filterViaAIMode ListGrid.filterViaAIMode}.
 */
filterViaAIMode?: string;

/**
 * See {@link isc.ListGrid.expansionLayoutProperties ListGrid.expansionLayoutProperties}.
 */
expansionLayoutProperties?: VLayout;

/**
 * See {@link isc.ListGrid.rowRangeFormat ListGrid.rowRangeFormat}.
 */
rowRangeFormat?: string;

/**
 * See {@link isc.ListGrid.setShowHeader() ListGrid.setShowHeader()}.
 */
setShowHeader?: Function;

/**
 * See {@link isc.ListGrid.clearFilterViaAIText ListGrid.clearFilterViaAIText}.
 */
clearFilterViaAIText?: string;

/**
 * See {@link isc.ListGrid.getRowErrors() ListGrid.getRowErrors()}.
 */
getRowErrors?: Function;

/**
 * See {@link isc.ListGrid.getEditedCell() ListGrid.getEditedCell()}.
 */
getEditedCell?: Function;

/**
 * See {@link isc.ListGrid.defaultFilterOperatorSuffix ListGrid.defaultFilterOperatorSuffix}.
 */
defaultFilterOperatorSuffix?: string;

/**
 * See {@link isc.ListGrid.parseEditorValue() ListGrid.parseEditorValue()}.
 */
parseEditorValue?: Function;

/**
 * See {@link isc.ListGrid.regroup() ListGrid.regroup()}.
 */
regroup?: Function;

/**
 * See {@link isc.ListGrid.headerHoverAlign ListGrid.headerHoverAlign}.
 */
headerHoverAlign?: string;

/**
 * See {@link isc.ListGrid.showGridSummary ListGrid.showGridSummary}.
 */
showGridSummary?: boolean;

/**
 * See {@link isc.ListGrid.sortDirection ListGrid.sortDirection}.
 */
sortDirection?: string;

/**
 * See {@link isc.ListGrid.applyCellData() ListGrid.applyCellData()}.
 */
applyCellData?: Function;

/**
 * See {@link isc.ListGrid.canSelectGroups ListGrid.canSelectGroups}.
 */
canSelectGroups?: boolean;

/**
 * See {@link isc.ListGrid.canTabToSorter ListGrid.canTabToSorter}.
 */
canTabToSorter?: boolean;

/**
 * See {@link isc.ListGrid.configureGroupingText ListGrid.configureGroupingText}.
 */
configureGroupingText?: string;

/**
 * See {@link isc.ListGrid.fields ListGrid.fields}.
 */
fields?: ListGridField[];

/**
 * See {@link isc.ListGrid.selectSingleRecord() ListGrid.selectSingleRecord()}.
 */
selectSingleRecord?: Function;

/**
 * See {@link isc.ListGrid.animateFolderMaxRows ListGrid.animateFolderMaxRows}.
 */
animateFolderMaxRows?: number;

/**
 * See {@link isc.ListGrid.headerDoubleClick() ListGrid.headerDoubleClick()}.
 */
headerDoubleClick?: Function;

/**
 * See {@link isc.ListGrid.setAlternateBodyStyleName() ListGrid.setAlternateBodyStyleName()}.
 */
setAlternateBodyStyleName?: Function;

/**
 * See {@link isc.ListGrid.getDefaultFormattedValue() ListGrid.getDefaultFormattedValue()}.
 */
getDefaultFormattedValue?: Function;

/**
 * See {@link isc.ListGrid.showAIHiliteWindow() ListGrid.showAIHiliteWindow()}.
 */
showAIHiliteWindow?: Function;

/**
 * See {@link isc.ListGrid.wrapHeaderTitles ListGrid.wrapHeaderTitles}.
 */
wrapHeaderTitles?: boolean;

/**
 * See {@link isc.ListGrid.canReorderFields ListGrid.canReorderFields}.
 */
canReorderFields?: boolean;

/**
 * See {@link isc.ListGrid.removeData() ListGrid.removeData()}.
 */
removeData?: Function;

/**
 * See {@link isc.ListGrid.filterViaAIPanelInstructions ListGrid.filterViaAIPanelInstructions}.
 */
filterViaAIPanelInstructions?: string;

/**
 * See {@link isc.ListGrid.groupByField ListGrid.groupByField}.
 */
groupByField?: string | string[];

/**
 * See {@link isc.ListGrid.bodyOverflow ListGrid.bodyOverflow}.
 */
bodyOverflow?: string;

/**
 * See {@link isc.ListGrid.showAIFilterWindow() ListGrid.showAIFilterWindow()}.
 */
showAIFilterWindow?: Function;

/**
 * See {@link isc.ListGrid.getAutoFitMaxWidth() ListGrid.getAutoFitMaxWidth()}.
 */
getAutoFitMaxWidth?: Function;

/**
 * See {@link isc.ListGrid.leaveScrollbarGap ListGrid.leaveScrollbarGap}.
 */
leaveScrollbarGap?: boolean;

/**
 * See {@link isc.ListGrid.setAutoFitData() ListGrid.setAutoFitData()}.
 */
setAutoFitData?: Function;

/**
 * See {@link isc.ListGrid.refreshRow() ListGrid.refreshRow()}.
 */
refreshRow?: Function;

/**
 * See {@link isc.ListGrid.setUserFormulaText() ListGrid.setUserFormulaText()}.
 */
setUserFormulaText?: Function;

/**
 * See {@link isc.ListGrid.enumCriteriaAsInitialValues ListGrid.enumCriteriaAsInitialValues}.
 */
enumCriteriaAsInitialValues?: boolean;

/**
 * See {@link isc.ListGrid.headerHeight ListGrid.headerHeight}.
 */
headerHeight?: number;

/**
 * See {@link isc.ListGrid.canPickOmittedFields ListGrid.canPickOmittedFields}.
 */
canPickOmittedFields?: boolean;

/**
 * See {@link isc.ListGrid.applyRowCountToLength ListGrid.applyRowCountToLength}.
 */
applyRowCountToLength?: boolean;

/**
 * See {@link isc.ListGrid.addData() ListGrid.addData()}.
 */
addData?: Function;

/**
 * See {@link isc.ListGrid.scrollToRow() ListGrid.scrollToRow()}.
 */
scrollToRow?: Function;

/**
 * See {@link isc.ListGrid.chartType ListGrid.chartType}.
 */
chartType?: string;

/**
 * See {@link isc.ListGrid.setGroupByFieldSummaries() ListGrid.setGroupByFieldSummaries()}.
 */
setGroupByFieldSummaries?: Function;

/**
 * See {@link isc.ListGrid.headerSpans ListGrid.headerSpans}.
 */
headerSpans?: HeaderSpan[];

/**
 * See {@link isc.ListGrid.filterViaAIText ListGrid.filterViaAIText}.
 */
filterViaAIText?: string;

/**
 * See {@link isc.ListGrid.filterUsingText ListGrid.filterUsingText}.
 */
filterUsingText?: string;

/**
 * See {@link isc.ListGrid.savedSearchAdminSeparatorProperties ListGrid.savedSearchAdminSeparatorProperties}.
 */
savedSearchAdminSeparatorProperties?: ListGridRecord;

/**
 * See {@link isc.ListGrid.setAlternateRecordStyles() ListGrid.setAlternateRecordStyles()}.
 */
setAlternateRecordStyles?: Function;

/**
 * See {@link isc.ListGrid.showDetailFields ListGrid.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.ListGrid.getEditorType() ListGrid.getEditorType()}.
 */
getEditorType?: Function;

/**
 * See {@link isc.ListGrid.getCellStyle() ListGrid.getCellStyle()}.
 */
getCellStyle?: Function;

/**
 * See {@link isc.ListGrid.showBackgroundComponents ListGrid.showBackgroundComponents}.
 */
showBackgroundComponents?: boolean;

/**
 * See {@link isc.ListGrid.autoFetchRowCount ListGrid.autoFetchRowCount}.
 */
autoFetchRowCount?: boolean;

/**
 * See {@link isc.ListGrid.poolComponentsPerColumn ListGrid.poolComponentsPerColumn}.
 */
poolComponentsPerColumn?: boolean;

/**
 * See {@link isc.ListGrid.locateRowsBy ListGrid.locateRowsBy}.
 */
locateRowsBy?: string;

/**
 * See {@link isc.ListGrid.setData() ListGrid.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.ListGrid.rowDoubleClick() ListGrid.rowDoubleClick()}.
 */
rowDoubleClick?: Function;

/**
 * See {@link isc.ListGrid.validateCell() ListGrid.validateCell()}.
 */
validateCell?: Function;

/**
 * See {@link isc.ListGrid.editOnF2Keypress ListGrid.editOnF2Keypress}.
 */
editOnF2Keypress?: boolean;

/**
 * See {@link isc.ListGrid.quickDrawAheadRatio ListGrid.quickDrawAheadRatio}.
 */
quickDrawAheadRatio?: number;

/**
 * See {@link isc.ListGrid.recordCanRemoveProperty ListGrid.recordCanRemoveProperty}.
 */
recordCanRemoveProperty?: string;

/**
 * See {@link isc.ListGrid.alternateRecordFrequency ListGrid.alternateRecordFrequency}.
 */
alternateRecordFrequency?: number;

/**
 * See {@link isc.ListGrid.setFieldState() ListGrid.setFieldState()}.
 */
setFieldState?: Function;

/**
 * See {@link isc.ListGrid.setUserSummaryText() ListGrid.setUserSummaryText()}.
 */
setUserSummaryText?: Function;

/**
 * See {@link isc.ListGrid.selection ListGrid.selection}.
 */
selection?: Selection | CellSelection;

/**
 * See {@link isc.ListGrid.nullGroupTitle ListGrid.nullGroupTitle}.
 */
nullGroupTitle?: string;

/**
 * See {@link isc.ListGrid.showHeaderSpanTitlesInFormulaBuilder ListGrid.showHeaderSpanTitlesInFormulaBuilder}.
 */
showHeaderSpanTitlesInFormulaBuilder?: boolean;

/**
 * See {@link isc.ListGrid.dataPageSize ListGrid.dataPageSize}.
 */
dataPageSize?: number;

/**
 * See {@link isc.ListGrid.getFieldTitle() ListGrid.getFieldTitle()}.
 */
getFieldTitle?: Function;

/**
 * See {@link isc.ListGrid.canEditFieldAttribute ListGrid.canEditFieldAttribute}.
 */
canEditFieldAttribute?: string;

/**
 * See {@link isc.ListGrid.getFormulaFieldValue() ListGrid.getFormulaFieldValue()}.
 */
getFormulaFieldValue?: Function;

/**
 * See {@link isc.ListGrid.setFieldMaxWidth() ListGrid.setFieldMaxWidth()}.
 */
setFieldMaxWidth?: Function;

/**
 * See {@link isc.ListGrid.setRowErrors() ListGrid.setRowErrors()}.
 */
setRowErrors?: Function;

/**
 * See {@link isc.ListGrid.stopHover() ListGrid.stopHover()}.
 */
stopHover?: Function;

/**
 * See {@link isc.ListGrid.screenReaderWriteRowLabelledBy ListGrid.screenReaderWriteRowLabelledBy}.
 */
screenReaderWriteRowLabelledBy?: boolean;

/**
 * See {@link isc.ListGrid.setHeaderHeight() ListGrid.setHeaderHeight()}.
 */
setHeaderHeight?: Function;

/**
 * See {@link isc.ListGrid.showClippedHeaderTitlesOnHover ListGrid.showClippedHeaderTitlesOnHover}.
 */
showClippedHeaderTitlesOnHover?: boolean;

/**
 * See {@link isc.ListGrid.expansionFieldImageHeight ListGrid.expansionFieldImageHeight}.
 */
expansionFieldImageHeight?: number;

/**
 * See {@link isc.ListGrid.getFrozenRollOverCanvas() ListGrid.getFrozenRollOverCanvas()}.
 */
getFrozenRollOverCanvas?: Function;

/**
 * See {@link isc.ListGrid.recordShowRollOverProperty ListGrid.recordShowRollOverProperty}.
 */
recordShowRollOverProperty?: string;

/**
 * See {@link isc.ListGrid.expansionCanEdit ListGrid.expansionCanEdit}.
 */
expansionCanEdit?: boolean;

/**
 * See {@link isc.ListGrid.getSort() ListGrid.getSort()}.
 */
getSort?: Function;

/**
 * See {@link isc.ListGrid.rowEditorExit() ListGrid.rowEditorExit()}.
 */
rowEditorExit?: Function;

/**
 * See {@link isc.ListGrid.aiHoverContentsPrefix ListGrid.aiHoverContentsPrefix}.
 */
aiHoverContentsPrefix?: string;

/**
 * See {@link isc.ListGrid.canExpandRecordProperty ListGrid.canExpandRecordProperty}.
 */
canExpandRecordProperty?: string;

/**
 * See {@link isc.ListGrid.unfreezeFieldText ListGrid.unfreezeFieldText}.
 */
unfreezeFieldText?: string;

/**
 * See {@link isc.ListGrid.handleGroupBy() ListGrid.handleGroupBy()}.
 */
handleGroupBy?: Function;

/**
 * See {@link isc.ListGrid.selectionType ListGrid.selectionType}.
 */
selectionType?: string;

/**
 * See {@link isc.ListGrid.groupState ListGrid.groupState}.
 */
groupState?: string;

/**
 * See {@link isc.ListGrid.minimumCellHeight ListGrid.minimumCellHeight}.
 */
minimumCellHeight?: number;

/**
 * See {@link isc.ListGrid.isExpansionField() ListGrid.isExpansionField()}.
 */
isExpansionField?: Function;

/**
 * See {@link isc.ListGrid.hiliteHTMLAfterFormat ListGrid.hiliteHTMLAfterFormat}.
 */
hiliteHTMLAfterFormat?: boolean;

/**
 * See {@link isc.ListGrid.bodyStyleName ListGrid.bodyStyleName}.
 */
bodyStyleName?: string;

/**
 * See {@link isc.ListGrid.defaultEditableDateTimeFieldWidth ListGrid.defaultEditableDateTimeFieldWidth}.
 */
defaultEditableDateTimeFieldWidth?: number;

/**
 * See {@link isc.ListGrid.editFailedCSSText ListGrid.editFailedCSSText}.
 */
editFailedCSSText?: string;

/**
 * See {@link isc.ListGrid.separatorRowStyle ListGrid.separatorRowStyle}.
 */
separatorRowStyle?: string;

/**
 * See {@link isc.ListGrid.setShowCollapsedGroupSummary() ListGrid.setShowCollapsedGroupSummary()}.
 */
setShowCollapsedGroupSummary?: Function;

/**
 * See {@link isc.ListGrid.focusInFilterEditor() ListGrid.focusInFilterEditor()}.
 */
focusInFilterEditor?: Function;

/**
 * See {@link isc.ListGrid.collapseRecord() ListGrid.collapseRecord()}.
 */
collapseRecord?: Function;

/**
 * See {@link isc.ListGrid.gridAdditionalCriteriaText ListGrid.gridAdditionalCriteriaText}.
 */
gridAdditionalCriteriaText?: string;

/**
 * See {@link isc.ListGrid.headerMenuButtonIcon ListGrid.headerMenuButtonIcon}.
 */
headerMenuButtonIcon?: string;

/**
 * See {@link isc.ListGrid.selectionUnderCanvasProperties ListGrid.selectionUnderCanvasProperties}.
 */
selectionUnderCanvasProperties?: Canvas;

/**
 * See {@link isc.ListGrid.autoFitIconFields ListGrid.autoFitIconFields}.
 */
autoFitIconFields?: string;

/**
 * See {@link isc.ListGrid.confirmDiscardEdits ListGrid.confirmDiscardEdits}.
 */
confirmDiscardEdits?: boolean;

/**
 * See {@link isc.ListGrid.endEditing() ListGrid.endEditing()}.
 */
endEditing?: Function;

/**
 * See {@link isc.ListGrid.autoFitField() ListGrid.autoFitField()}.
 */
autoFitField?: Function;

/**
 * See {@link isc.ListGrid.canDragRecordsOut ListGrid.canDragRecordsOut}.
 */
canDragRecordsOut?: boolean;

/**
 * See {@link isc.ListGrid.headerHoverHeight ListGrid.headerHoverHeight}.
 */
headerHoverHeight?: number;

/**
 * See {@link isc.ListGrid.removeIconSize ListGrid.removeIconSize}.
 */
removeIconSize?: number;

/**
 * See {@link isc.ListGrid.valueIconWidth ListGrid.valueIconWidth}.
 */
valueIconWidth?: number;

/**
 * See {@link isc.ListGrid.getEditFormItem() ListGrid.getEditFormItem()}.
 */
getEditFormItem?: Function;

/**
 * See {@link isc.ListGrid.setSortHandler() ListGrid.setSortHandler()}.
 */
setSortHandler?: Function;

/**
 * See {@link isc.ListGrid.canAutoFitFields ListGrid.canAutoFitFields}.
 */
canAutoFitFields?: boolean;

/**
 * See {@link isc.ListGrid.sortNumeralMenuButtonSpaceOffset ListGrid.sortNumeralMenuButtonSpaceOffset}.
 */
sortNumeralMenuButtonSpaceOffset?: number;

/**
 * See {@link isc.ListGrid.isPartiallySelected() ListGrid.isPartiallySelected()}.
 */
isPartiallySelected?: Function;

/**
 * See {@link isc.ListGrid.asynchGroupingPrompt ListGrid.asynchGroupingPrompt}.
 */
asynchGroupingPrompt?: string;

/**
 * See {@link isc.ListGrid.headerTitleClipped() ListGrid.headerTitleClipped()}.
 */
headerTitleClipped?: Function;

/**
 * See {@link isc.ListGrid.closeGroup() ListGrid.closeGroup()}.
 */
closeGroup?: Function;

/**
 * See {@link isc.ListGrid.getFieldWidth() ListGrid.getFieldWidth()}.
 */
getFieldWidth?: Function;

/**
 * See {@link isc.ListGrid.focusInRow() ListGrid.focusInRow()}.
 */
focusInRow?: Function;

/**
 * See {@link isc.ListGrid.wrapCells ListGrid.wrapCells}.
 */
wrapCells?: boolean;

/**
 * See {@link isc.ListGrid.chartColumn() ListGrid.chartColumn()}.
 */
chartColumn?: Function;

/**
 * See {@link isc.ListGrid.showHeaderShadow ListGrid.showHeaderShadow}.
 */
showHeaderShadow?: boolean;

/**
 * See {@link isc.ListGrid.normalBaseStyle ListGrid.normalBaseStyle}.
 */
normalBaseStyle?: string;

/**
 * See {@link isc.ListGrid.listEndEditAction ListGrid.listEndEditAction}.
 */
listEndEditAction?: string;

/**
 * See {@link isc.ListGrid.getCellCSSText() ListGrid.getCellCSSText()}.
 */
getCellCSSText?: Function;

/**
 * See {@link isc.ListGrid.printCheckboxFieldTrueImage ListGrid.printCheckboxFieldTrueImage}.
 */
printCheckboxFieldTrueImage?: string;

/**
 * See {@link isc.ListGrid.getEditorProperties() ListGrid.getEditorProperties()}.
 */
getEditorProperties?: Function;

/**
 * See {@link isc.ListGrid.groupLeadingIndent ListGrid.groupLeadingIndent}.
 */
groupLeadingIndent?: number;

/**
 * See {@link isc.ListGrid.linkTextProperty ListGrid.linkTextProperty}.
 */
linkTextProperty?: string;

/**
 * See {@link isc.ListGrid.setViewState() ListGrid.setViewState()}.
 */
setViewState?: Function;

/**
 * See {@link isc.ListGrid.dataChanged() ListGrid.dataChanged()}.
 */
dataChanged?: Function;

/**
 * See {@link isc.ListGrid.discardEditsOnHideField ListGrid.discardEditsOnHideField}.
 */
discardEditsOnHideField?: boolean;

/**
 * See {@link isc.ListGrid.clearEditValue() ListGrid.clearEditValue()}.
 */
clearEditValue?: Function;

/**
 * See {@link isc.ListGrid.arrowKeyAction ListGrid.arrowKeyAction}.
 */
arrowKeyAction?: string;

/**
 * See {@link isc.ListGrid.bodyKeyPress() ListGrid.bodyKeyPress()}.
 */
bodyKeyPress?: Function;

/**
 * See {@link isc.ListGrid.groupSortNormalizer() ListGrid.groupSortNormalizer()}.
 */
groupSortNormalizer?: Function;

/**
 * See {@link isc.ListGrid.fixedRecordHeights ListGrid.fixedRecordHeights}.
 */
fixedRecordHeights?: boolean;

/**
 * See {@link isc.ListGrid.collapseRecords() ListGrid.collapseRecords()}.
 */
collapseRecords?: Function;

/**
 * See {@link isc.ListGrid.isCheckboxField() ListGrid.isCheckboxField()}.
 */
isCheckboxField?: Function;

/**
 * See {@link isc.ListGrid.canHover ListGrid.canHover}.
 */
canHover?: boolean;

/**
 * See {@link isc.ListGrid.getEditCol() ListGrid.getEditCol()}.
 */
getEditCol?: Function;

/**
 * See {@link isc.ListGrid.cellContextMenuProperties ListGrid.cellContextMenuProperties}.
 */
cellContextMenuProperties?: Layout;

/**
 * See {@link isc.ListGrid.setFetchOperation() ListGrid.setFetchOperation()}.
 */
setFetchOperation?: Function;

/**
 * See {@link isc.ListGrid.toggleSort() ListGrid.toggleSort()}.
 */
toggleSort?: Function;

/**
 * See {@link isc.ListGrid.getCellVAlign() ListGrid.getCellVAlign()}.
 */
getCellVAlign?: Function;

/**
 * See {@link isc.ListGrid.headerBackgroundColor ListGrid.headerBackgroundColor}.
 */
headerBackgroundColor?: string;

/**
 * See {@link isc.ListGrid.expansionEditorSaveButtonProperties ListGrid.expansionEditorSaveButtonProperties}.
 */
expansionEditorSaveButtonProperties?: IButton;

/**
 * See {@link isc.ListGrid.getFilterEditorValueMap() ListGrid.getFilterEditorValueMap()}.
 */
getFilterEditorValueMap?: Function;

/**
 * See {@link isc.ListGrid.getExportColumnBGColor() ListGrid.getExportColumnBGColor()}.
 */
getExportColumnBGColor?: Function;

/**
 * See {@link isc.ListGrid.setValueMap() ListGrid.setValueMap()}.
 */
setValueMap?: Function;

/**
 * See {@link isc.ListGrid.sorterContextClick() ListGrid.sorterContextClick()}.
 */
sorterContextClick?: Function;

/**
 * See {@link isc.ListGrid.setShowFilterEditor() ListGrid.setShowFilterEditor()}.
 */
setShowFilterEditor?: Function;

/**
 * See {@link isc.ListGrid.headerAutoFitEvent ListGrid.headerAutoFitEvent}.
 */
headerAutoFitEvent?: string;

/**
 * See {@link isc.ListGrid.rowAriaState ListGrid.rowAriaState}.
 */
rowAriaState?: Object;

/**
 * See {@link isc.ListGrid.getField() ListGrid.getField()}.
 */
getField?: Function;

/**
 * See {@link isc.ListGrid.canAddFormulaFields ListGrid.canAddFormulaFields}.
 */
canAddFormulaFields?: boolean;

/**
 * See {@link isc.ListGrid.aiFilterWindowInstructions ListGrid.aiFilterWindowInstructions}.
 */
aiFilterWindowInstructions?: string;

/**
 * See {@link isc.ListGrid.getDefaultFieldWidth() ListGrid.getDefaultFieldWidth()}.
 */
getDefaultFieldWidth?: Function;

/**
 * See {@link isc.ListGrid.autoFitFieldWidths ListGrid.autoFitFieldWidths}.
 */
autoFitFieldWidths?: boolean;

/**
 * See {@link isc.ListGrid.dateFormatter ListGrid.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.ListGrid.hiliteEditorSpanTitleSeparator ListGrid.hiliteEditorSpanTitleSeparator}.
 */
hiliteEditorSpanTitleSeparator?: string;

/**
 * See {@link isc.ListGrid.autoFitHeaderHeights ListGrid.autoFitHeaderHeights}.
 */
autoFitHeaderHeights?: boolean;

/**
 * See {@link isc.ListGrid.printBaseStyle ListGrid.printBaseStyle}.
 */
printBaseStyle?: string;

/**
 * See {@link isc.ListGrid.useRemoteValidators ListGrid.useRemoteValidators}.
 */
useRemoteValidators?: boolean;

/**
 * See {@link isc.ListGrid.clearRowErrors() ListGrid.clearRowErrors()}.
 */
clearRowErrors?: Function;

/**
 * See {@link isc.ListGrid.getSelectedRecord() ListGrid.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.ListGrid.fetchDelay ListGrid.fetchDelay}.
 */
fetchDelay?: number;

/**
 * See {@link isc.ListGrid.autoFitClipFields ListGrid.autoFitClipFields}.
 */
autoFitClipFields?: string[];

/**
 * See {@link isc.ListGrid.showFilterWindowCriteriaIndicator ListGrid.showFilterWindowCriteriaIndicator}.
 */
showFilterWindowCriteriaIndicator?: boolean;

/**
 * See {@link isc.ListGrid.expansionFieldTrueImage ListGrid.expansionFieldTrueImage}.
 */
expansionFieldTrueImage?: string;

/**
 * See {@link isc.ListGrid.unmarkRecordRemoved() ListGrid.unmarkRecordRemoved()}.
 */
unmarkRecordRemoved?: Function;

/**
 * See {@link isc.ListGrid.alternateBodyStyleName ListGrid.alternateBodyStyleName}.
 */
alternateBodyStyleName?: string;

/**
 * See {@link isc.ListGrid.startEditingNew() ListGrid.startEditingNew()}.
 */
startEditingNew?: Function;

/**
 * See {@link isc.ListGrid.selectRecords() ListGrid.selectRecords()}.
 */
selectRecords?: Function;

/**
 * See {@link isc.ListGrid.hiliteIconSize ListGrid.hiliteIconSize}.
 */
hiliteIconSize?: number;

/**
 * See {@link isc.ListGrid.generateDoubleClickOnEnter ListGrid.generateDoubleClickOnEnter}.
 */
generateDoubleClickOnEnter?: boolean;

/**
 * See {@link isc.ListGrid.freezeField() ListGrid.freezeField()}.
 */
freezeField?: Function;

/**
 * See {@link isc.ListGrid.getValueIconCursor() ListGrid.getValueIconCursor()}.
 */
getValueIconCursor?: Function;

/**
 * See {@link isc.ListGrid.groupByText ListGrid.groupByText}.
 */
groupByText?: string;

/**
 * See {@link isc.ListGrid.resizeField() ListGrid.resizeField()}.
 */
resizeField?: Function;

/**
 * See {@link isc.ListGrid.showCollapsedGroupSummary ListGrid.showCollapsedGroupSummary}.
 */
showCollapsedGroupSummary?: boolean;

/**
 * See {@link isc.ListGrid.printCheckboxFieldFalseImage ListGrid.printCheckboxFieldFalseImage}.
 */
printCheckboxFieldFalseImage?: string;

/**
 * See {@link isc.ListGrid.discardAllEdits() ListGrid.discardAllEdits()}.
 */
discardAllEdits?: Function;

/**
 * See {@link isc.ListGrid.markSelectionRemoved() ListGrid.markSelectionRemoved()}.
 */
markSelectionRemoved?: Function;

/**
 * See {@link isc.ListGrid.canEditCell() ListGrid.canEditCell()}.
 */
canEditCell?: Function;

/**
 * See {@link isc.ListGrid.cancelEditing() ListGrid.cancelEditing()}.
 */
cancelEditing?: Function;

/**
 * See {@link isc.ListGrid.deselectAllRecords() ListGrid.deselectAllRecords()}.
 */
deselectAllRecords?: Function;

/**
 * See {@link isc.ListGrid.getCellAriaState() ListGrid.getCellAriaState()}.
 */
getCellAriaState?: Function;

/**
 * See {@link isc.ListGrid.clearFilterText ListGrid.clearFilterText}.
 */
clearFilterText?: string;

/**
 * See {@link isc.ListGrid.generateDoubleClickOnSpace ListGrid.generateDoubleClickOnSpace}.
 */
generateDoubleClickOnSpace?: boolean;

/**
 * See {@link isc.ListGrid.applySortToData() ListGrid.applySortToData()}.
 */
applySortToData?: Function;

/**
 * See {@link isc.ListGrid.getSortState() ListGrid.getSortState()}.
 */
getSortState?: Function;

/**
 * See {@link isc.ListGrid.getRowRole() ListGrid.getRowRole()}.
 */
getRowRole?: Function;

/**
 * See {@link isc.ListGrid.sort() ListGrid.sort()}.
 */
sort?: Function;

/**
 * See {@link isc.ListGrid.recordEnabledProperty ListGrid.recordEnabledProperty}.
 */
recordEnabledProperty?: string;

/**
 * See {@link isc.ListGrid.removeEmbeddedComponent() ListGrid.removeEmbeddedComponent()}.
 */
removeEmbeddedComponent?: Function;

/**
 * See {@link isc.ListGrid.headerShadowHOffset ListGrid.headerShadowHOffset}.
 */
headerShadowHOffset?: number;

/**
 * See {@link isc.ListGrid.searchForm ListGrid.searchForm}.
 */
searchForm?: DynamicForm | ValuesManager;

/**
 * See {@link isc.ListGrid.allowFilterExpressions ListGrid.allowFilterExpressions}.
 */
allowFilterExpressions?: boolean;

/**
 * See {@link isc.ListGrid.headerBaseStyle ListGrid.headerBaseStyle}.
 */
headerBaseStyle?: string;

/**
 * See {@link isc.ListGrid.showSelectionUnderCanvas ListGrid.showSelectionUnderCanvas}.
 */
showSelectionUnderCanvas?: boolean;

/**
 * See {@link isc.ListGrid.autoFitFieldsFillViewport ListGrid.autoFitFieldsFillViewport}.
 */
autoFitFieldsFillViewport?: boolean;

/**
 * See {@link isc.ListGrid.canSelectAll ListGrid.canSelectAll}.
 */
canSelectAll?: boolean;

/**
 * See {@link isc.ListGrid.headerHoverHTML() ListGrid.headerHoverHTML()}.
 */
headerHoverHTML?: Function;

/**
 * See {@link isc.ListGrid.rowEditorEnter() ListGrid.rowEditorEnter()}.
 */
rowEditorEnter?: Function;

/**
 * See {@link isc.ListGrid.styleName ListGrid.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.ListGrid.fieldVisibilitySubmenuTitle ListGrid.fieldVisibilitySubmenuTitle}.
 */
fieldVisibilitySubmenuTitle?: string;

/**
 * See {@link isc.ListGrid.removeIconStyle ListGrid.removeIconStyle}.
 */
removeIconStyle?: string;

/**
 * See {@link isc.ListGrid.markRecordRemoved() ListGrid.markRecordRemoved()}.
 */
markRecordRemoved?: Function;

/**
 * See {@link isc.ListGrid.rowHasChanges() ListGrid.rowHasChanges()}.
 */
rowHasChanges?: Function;

/**
 * See {@link isc.ListGrid.rotatedHeaderMenuButtonHeight ListGrid.rotatedHeaderMenuButtonHeight}.
 */
rotatedHeaderMenuButtonHeight?: number | string;

/**
 * See {@link isc.ListGrid.sortBinaryByFileName ListGrid.sortBinaryByFileName}.
 */
sortBinaryByFileName?: boolean;

/**
 * See {@link isc.ListGrid.openGroup() ListGrid.openGroup()}.
 */
openGroup?: Function;

/**
 * See {@link isc.ListGrid.printBooleanFalseImage ListGrid.printBooleanFalseImage}.
 */
printBooleanFalseImage?: string;

/**
 * See {@link isc.ListGrid.getDragTrackerIcon() ListGrid.getDragTrackerIcon()}.
 */
getDragTrackerIcon?: Function;

/**
 * See {@link isc.ListGrid.reselectOnUpdateNotifications ListGrid.reselectOnUpdateNotifications}.
 */
reselectOnUpdateNotifications?: string;

/**
 * See {@link isc.ListGrid.hoverMode ListGrid.hoverMode}.
 */
hoverMode?: string;

/**
 * See {@link isc.ListGrid.getCellAlign() ListGrid.getCellAlign()}.
 */
getCellAlign?: Function;

/**
 * See {@link isc.ListGrid.newSearchText ListGrid.newSearchText}.
 */
newSearchText?: string;

/**
 * See {@link isc.ListGrid.summaryRowCriteria ListGrid.summaryRowCriteria}.
 */
summaryRowCriteria?: Criteria;

/**
 * See {@link isc.ListGrid.recordMarkedAsRemoved() ListGrid.recordMarkedAsRemoved()}.
 */
recordMarkedAsRemoved?: Function;

/**
 * See {@link isc.ListGrid.recordDrop() ListGrid.recordDrop()}.
 */
recordDrop?: Function;

/**
 * See {@link isc.ListGrid.setEditorValueMap() ListGrid.setEditorValueMap()}.
 */
setEditorValueMap?: Function;

/**
 * See {@link isc.ListGrid.groupByAsyncThreshold ListGrid.groupByAsyncThreshold}.
 */
groupByAsyncThreshold?: number;

/**
 * See {@link isc.ListGrid.printBooleanTrueImage ListGrid.printBooleanTrueImage}.
 */
printBooleanTrueImage?: string;

/**
 * See {@link isc.ListGrid.groupByMaxRecordsExceededMessage ListGrid.groupByMaxRecordsExceededMessage}.
 */
groupByMaxRecordsExceededMessage?: string;

/**
 * See {@link isc.ListGrid.cellMouseUp() ListGrid.cellMouseUp()}.
 */
cellMouseUp?: Function;

/**
 * See {@link isc.ListGrid.updateSummariesDuringEditing ListGrid.updateSummariesDuringEditing}.
 */
updateSummariesDuringEditing?: boolean;

/**
 * See {@link isc.ListGrid.locateColumnsBy ListGrid.locateColumnsBy}.
 */
locateColumnsBy?: string;

/**
 * See {@link isc.ListGrid.setFieldButtonProperties() ListGrid.setFieldButtonProperties()}.
 */
setFieldButtonProperties?: Function;

/**
 * See {@link isc.ListGrid.headerButtonDefaults ListGrid.headerButtonDefaults}.
 */
headerButtonDefaults?: Button;

/**
 * See {@link isc.ListGrid.exportWidthScale ListGrid.exportWidthScale}.
 */
exportWidthScale?: number;

/**
 * See {@link isc.ListGrid.selectRange() ListGrid.selectRange()}.
 */
selectRange?: Function;

/**
 * See {@link isc.ListGrid.offlineMessageStyle ListGrid.offlineMessageStyle}.
 */
offlineMessageStyle?: string;

/**
 * See {@link isc.ListGrid.getCriteria() ListGrid.getCriteria()}.
 */
getCriteria?: Function;

/**
 * See {@link isc.ListGrid.getCellRecord() ListGrid.getCellRecord()}.
 */
getCellRecord?: Function;

/**
 * See {@link isc.ListGrid.getEditorValueMap() ListGrid.getEditorValueMap()}.
 */
getEditorValueMap?: Function;

/**
 * See {@link isc.ListGrid.expansionEditorShowSaveDialog ListGrid.expansionEditorShowSaveDialog}.
 */
expansionEditorShowSaveDialog?: boolean;

/**
 * See {@link isc.ListGrid.sorterProperties ListGrid.sorterProperties}.
 */
sorterProperties?: Button;

/**
 * See {@link isc.ListGrid.removeFieldDefaults ListGrid.removeFieldDefaults}.
 */
removeFieldDefaults?: ListGridField;

/**
 * See {@link isc.ListGrid.showRowNumbers ListGrid.showRowNumbers}.
 */
showRowNumbers?: boolean;

/**
 * See {@link isc.ListGrid.getSortField() ListGrid.getSortField()}.
 */
getSortField?: Function;

/**
 * See {@link isc.ListGrid.expansionScreen ListGrid.expansionScreen}.
 */
expansionScreen?: string;

/**
 * See {@link isc.ListGrid.setAutoFitMaxWidth() ListGrid.setAutoFitMaxWidth()}.
 */
setAutoFitMaxWidth?: Function;

/**
 * See {@link isc.ListGrid.setFieldMinWidth() ListGrid.setFieldMinWidth()}.
 */
setFieldMinWidth?: Function;

/**
 * See {@link isc.ListGrid.leaveHeaderMenuButtonSpace ListGrid.leaveHeaderMenuButtonSpace}.
 */
leaveHeaderMenuButtonSpace?: boolean;

/**
 * See {@link isc.ListGrid.selectCellTextOnClick ListGrid.selectCellTextOnClick}.
 */
selectCellTextOnClick?: boolean;

/**
 * See {@link isc.ListGrid.groupIcon ListGrid.groupIcon}.
 */
groupIcon?: string;

/**
 * See {@link isc.ListGrid.setAutoFitWidth() ListGrid.setAutoFitWidth()}.
 */
setAutoFitWidth?: Function;

/**
 * See {@link isc.ListGrid.initialSort ListGrid.initialSort}.
 */
initialSort?: SortSpecifier[];

/**
 * See {@link isc.ListGrid.getFilterEditorCriterion() ListGrid.getFilterEditorCriterion()}.
 */
getFilterEditorCriterion?: Function;

/**
 * See {@link isc.ListGrid.rowClick() ListGrid.rowClick()}.
 */
rowClick?: Function;

/**
 * See {@link isc.ListGrid.canReorderRecords ListGrid.canReorderRecords}.
 */
canReorderRecords?: boolean;

/**
 * See {@link isc.ListGrid.canExpandMultipleRecords ListGrid.canExpandMultipleRecords}.
 */
canExpandMultipleRecords?: boolean;

/**
 * See {@link isc.ListGrid.valueIconLeftPadding ListGrid.valueIconLeftPadding}.
 */
valueIconLeftPadding?: number;

/**
 * See {@link isc.ListGrid.headerMenuButtonWidth ListGrid.headerMenuButtonWidth}.
 */
headerMenuButtonWidth?: number;

/**
 * See {@link isc.ListGrid.animateFolderEffect ListGrid.animateFolderEffect}.
 */
animateFolderEffect?: string;

/**
 * See {@link isc.ListGrid.showRollOver ListGrid.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.ListGrid.editorEnter() ListGrid.editorEnter()}.
 */
editorEnter?: Function;

/**
 * See {@link isc.ListGrid.showGroupSummary ListGrid.showGroupSummary}.
 */
showGroupSummary?: boolean;

/**
 * See {@link isc.ListGrid.enterKeyEditAction ListGrid.enterKeyEditAction}.
 */
enterKeyEditAction?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListGrid wraps the SmartClient widget class
 * {@link isc.ListGrid ListGrid} for React, allowing you to import
 * ListGrid for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class ListGrid extends VLayout {
    props: AsComponentXML<ListGridProps>;
}
