import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface CubeGridProps extends ListGridProps {

/**
 * See {@link isc.CubeGrid.valueFormat CubeGrid.valueFormat}.
 */
valueFormat?: string;

/**
 * See {@link isc.CubeGrid.editByCell CubeGrid.editByCell}.
 */
editByCell?: boolean;

/**
 * See {@link isc.CubeGrid.hideEmptyFacetValues CubeGrid.hideEmptyFacetValues}.
 */
hideEmptyFacetValues?: boolean;

/**
 * See {@link isc.CubeGrid.indentVTreeFacets CubeGrid.indentVTreeFacets}.
 */
indentVTreeFacets?: boolean;

/**
 * See {@link isc.CubeGrid.canSelectHeaders CubeGrid.canSelectHeaders}.
 */
canSelectHeaders?: boolean;

/**
 * See {@link isc.CubeGrid.showHoverTipsTitle CubeGrid.showHoverTipsTitle}.
 */
showHoverTipsTitle?: string;

/**
 * See {@link isc.CubeGrid.collapseField() CubeGrid.collapseField()}.
 */
collapseField?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelClick() CubeGrid.facetLabelClick()}.
 */
facetLabelClick?: Function;

/**
 * See {@link isc.CubeGrid.dataSource CubeGrid.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.CubeGrid.bodyMinWidth CubeGrid.bodyMinWidth}.
 */
bodyMinWidth?: number;

/**
 * See {@link isc.CubeGrid.getSelectedCells() CubeGrid.getSelectedCells()}.
 */
getSelectedCells?: Function;

/**
 * See {@link isc.CubeGrid.recordHasChanges() CubeGrid.recordHasChanges()}.
 */
recordHasChanges?: Function;

/**
 * See {@link isc.CubeGrid.rowFacets CubeGrid.rowFacets}.
 */
rowFacets?: string[];

/**
 * See {@link isc.CubeGrid.setFacetTitle() CubeGrid.setFacetTitle()}.
 */
setFacetTitle?: Function;

/**
 * See {@link isc.CubeGrid.selectFacetValue() CubeGrid.selectFacetValue()}.
 */
selectFacetValue?: Function;

/**
 * See {@link isc.CubeGrid.valueProperty CubeGrid.valueProperty}.
 */
valueProperty?: string;

/**
 * See {@link isc.CubeGrid.getRowHeaderFacetValues() CubeGrid.getRowHeaderFacetValues()}.
 */
getRowHeaderFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.exportClientData() CubeGrid.exportClientData()}.
 */
exportClientData?: Function;

/**
 * See {@link isc.CubeGrid.canResizeColumns CubeGrid.canResizeColumns}.
 */
canResizeColumns?: boolean;

/**
 * See {@link isc.CubeGrid.facetValueHover() CubeGrid.facetValueHover()}.
 */
facetValueHover?: Function;

/**
 * See {@link isc.CubeGrid.vTreeFacetIndent CubeGrid.vTreeFacetIndent}.
 */
vTreeFacetIndent?: number;

/**
 * See {@link isc.CubeGrid.expandField() CubeGrid.expandField()}.
 */
expandField?: Function;

/**
 * See {@link isc.CubeGrid.getRollupValue() CubeGrid.getRollupValue()}.
 */
getRollupValue?: Function;

/**
 * See {@link isc.CubeGrid.chartItemTitle CubeGrid.chartItemTitle}.
 */
chartItemTitle?: string;

/**
 * See {@link isc.CubeGrid.removeFacet() CubeGrid.removeFacet()}.
 */
removeFacet?: Function;

/**
 * See {@link isc.CubeGrid.hiliteFacetValue() CubeGrid.hiliteFacetValue()}.
 */
hiliteFacetValue?: Function;

/**
 * See {@link isc.CubeGrid.showAllHighlightsTitle CubeGrid.showAllHighlightsTitle}.
 */
showAllHighlightsTitle?: string;

/**
 * See {@link isc.CubeGrid.colHeaderLabelBaseStyle CubeGrid.colHeaderLabelBaseStyle}.
 */
colHeaderLabelBaseStyle?: string;

/**
 * See {@link isc.CubeGrid.getFacetValuesRow() CubeGrid.getFacetValuesRow()}.
 */
getFacetValuesRow?: Function;

/**
 * See {@link isc.CubeGrid.autoSelectValues CubeGrid.autoSelectValues}.
 */
autoSelectValues?: string;

/**
 * See {@link isc.CubeGrid.getRowFacetValues() CubeGrid.getRowFacetValues()}.
 */
getRowFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.getCellCoordinates() CubeGrid.getCellCoordinates()}.
 */
getCellCoordinates?: Function;

/**
 * See {@link isc.CubeGrid.getBaseStyle() CubeGrid.getBaseStyle()}.
 */
getBaseStyle?: Function;

/**
 * See {@link isc.CubeGrid.maximizeColumnTitle CubeGrid.maximizeColumnTitle}.
 */
maximizeColumnTitle?: string;

/**
 * See {@link isc.CubeGrid.canMoveFacets CubeGrid.canMoveFacets}.
 */
canMoveFacets?: boolean;

/**
 * See {@link isc.CubeGrid.facetValueReordered() CubeGrid.facetValueReordered()}.
 */
facetValueReordered?: Function;

/**
 * See {@link isc.CubeGrid.facetValuesSelected() CubeGrid.facetValuesSelected()}.
 */
facetValuesSelected?: Function;

/**
 * See {@link isc.CubeGrid.exportColumnFacetTextColor CubeGrid.exportColumnFacetTextColor}.
 */
exportColumnFacetTextColor?: string;

/**
 * See {@link isc.CubeGrid.facetLabelHoverAlign CubeGrid.facetLabelHoverAlign}.
 */
facetLabelHoverAlign?: string;

/**
 * See {@link isc.CubeGrid.sortByFacetValues() CubeGrid.sortByFacetValues()}.
 */
sortByFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.chartTypeTitle CubeGrid.chartTypeTitle}.
 */
chartTypeTitle?: string;

/**
 * See {@link isc.CubeGrid.getEditValues() CubeGrid.getEditValues()}.
 */
getEditValues?: Function;

/**
 * See {@link isc.CubeGrid.styleName CubeGrid.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.CubeGrid.highlightCellTitle CubeGrid.highlightCellTitle}.
 */
highlightCellTitle?: string;

/**
 * See {@link isc.CubeGrid.deselectCells() CubeGrid.deselectCells()}.
 */
deselectCells?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelHoverVAlign CubeGrid.facetLabelHoverVAlign}.
 */
facetLabelHoverVAlign?: string;

/**
 * See {@link isc.CubeGrid.getEventRow() CubeGrid.getEventRow()}.
 */
getEventRow?: Function;

/**
 * See {@link isc.CubeGrid.getFacetValueLayout() CubeGrid.getFacetValueLayout()}.
 */
getFacetValueLayout?: Function;

/**
 * See {@link isc.CubeGrid.renameFacetValueTitle CubeGrid.renameFacetValueTitle}.
 */
renameFacetValueTitle?: string;

/**
 * See {@link isc.CubeGrid.fixedFacetValueChanged() CubeGrid.fixedFacetValueChanged()}.
 */
fixedFacetValueChanged?: Function;

/**
 * See {@link isc.CubeGrid.noHighlightsTitle CubeGrid.noHighlightsTitle}.
 */
noHighlightsTitle?: string;

/**
 * See {@link isc.CubeGrid.saveByCell CubeGrid.saveByCell}.
 */
saveByCell?: boolean;

/**
 * See {@link isc.CubeGrid.highlightTitle CubeGrid.highlightTitle}.
 */
highlightTitle?: string;

/**
 * See {@link isc.CubeGrid.canSortFacets CubeGrid.canSortFacets}.
 */
canSortFacets?: boolean;

/**
 * See {@link isc.CubeGrid.exportFacetBGColor CubeGrid.exportFacetBGColor}.
 */
exportFacetBGColor?: string;

/**
 * See {@link isc.CubeGrid.controlReorderHandleTitle CubeGrid.controlReorderHandleTitle}.
 */
controlReorderHandleTitle?: string;

/**
 * See {@link isc.CubeGrid.chartDialogTitle CubeGrid.chartDialogTitle}.
 */
chartDialogTitle?: string;

/**
 * See {@link isc.CubeGrid.valueTitle CubeGrid.valueTitle}.
 */
valueTitle?: string;

/**
 * See {@link isc.CubeGrid.exportRowFacetBGColor CubeGrid.exportRowFacetBGColor}.
 */
exportRowFacetBGColor?: string;

/**
 * See {@link isc.CubeGrid.facetValueContextItems CubeGrid.facetValueContextItems}.
 */
facetValueContextItems?: MenuItem[];

/**
 * See {@link isc.CubeGrid.addFacet() CubeGrid.addFacet()}.
 */
addFacet?: Function;

/**
 * See {@link isc.CubeGrid.facetValueHoverVAlign CubeGrid.facetValueHoverVAlign}.
 */
facetValueHoverVAlign?: string;

/**
 * See {@link isc.CubeGrid.canReorderColumns CubeGrid.canReorderColumns}.
 */
canReorderColumns?: boolean;

/**
 * See {@link isc.CubeGrid.getFacetsHavingSelection() CubeGrid.getFacetsHavingSelection()}.
 */
getFacetsHavingSelection?: Function;

/**
 * See {@link isc.CubeGrid.selectAllFacetValues() CubeGrid.selectAllFacetValues()}.
 */
selectAllFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.autoFitFieldWidths CubeGrid.autoFitFieldWidths}.
 */
autoFitFieldWidths?: boolean;

/**
 * See {@link isc.CubeGrid.exportFacetSeparatorString CubeGrid.exportFacetSeparatorString}.
 */
exportFacetSeparatorString?: string;

/**
 * See {@link isc.CubeGrid.chartType CubeGrid.chartType}.
 */
chartType?: string;

/**
 * See {@link isc.CubeGrid.facetMoved() CubeGrid.facetMoved()}.
 */
facetMoved?: Function;

/**
 * See {@link isc.CubeGrid.isFieldOpen() CubeGrid.isFieldOpen()}.
 */
isFieldOpen?: Function;

/**
 * See {@link isc.CubeGrid.data CubeGrid.data}.
 */
data?: CellRecord[];

/**
 * See {@link isc.CubeGrid.controlMaximizeTitle CubeGrid.controlMaximizeTitle}.
 */
controlMaximizeTitle?: string;

/**
 * See {@link isc.CubeGrid.facetValueContextClick() CubeGrid.facetValueContextClick()}.
 */
facetValueContextClick?: Function;

/**
 * See {@link isc.CubeGrid.getRowFacetLayout() CubeGrid.getRowFacetLayout()}.
 */
getRowFacetLayout?: Function;

/**
 * See {@link isc.CubeGrid.setEditValues() CubeGrid.setEditValues()}.
 */
setEditValues?: Function;

/**
 * See {@link isc.CubeGrid.canSortData CubeGrid.canSortData}.
 */
canSortData?: boolean;

/**
 * See {@link isc.CubeGrid.hideEmptyAxis CubeGrid.hideEmptyAxis}.
 */
hideEmptyAxis?: string;

/**
 * See {@link isc.CubeGrid.setFacetValueTitle() CubeGrid.setFacetValueTitle()}.
 */
setFacetValueTitle?: Function;

/**
 * See {@link isc.CubeGrid.hilites CubeGrid.hilites}.
 */
hilites?: Hilite[];

/**
 * See {@link isc.CubeGrid.renameFacetValueMessage CubeGrid.renameFacetValueMessage}.
 */
renameFacetValueMessage?: string;

/**
 * See {@link isc.CubeGrid.getEditedCell() CubeGrid.getEditedCell()}.
 */
getEditedCell?: Function;

/**
 * See {@link isc.CubeGrid.getEventColumn() CubeGrid.getEventColumn()}.
 */
getEventColumn?: Function;

/**
 * See {@link isc.CubeGrid.getEditedRecord() CubeGrid.getEditedRecord()}.
 */
getEditedRecord?: Function;

/**
 * See {@link isc.CubeGrid.canMinimizeFacets CubeGrid.canMinimizeFacets}.
 */
canMinimizeFacets?: boolean;

/**
 * See {@link isc.CubeGrid.deselectAll() CubeGrid.deselectAll()}.
 */
deselectAll?: Function;

/**
 * See {@link isc.CubeGrid.deselectFacetValues() CubeGrid.deselectFacetValues()}.
 */
deselectFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.vTreeFacetIndentDirection CubeGrid.vTreeFacetIndentDirection}.
 */
vTreeFacetIndentDirection?: string;

/**
 * See {@link isc.CubeGrid.getSelectedFacetValues() CubeGrid.getSelectedFacetValues()}.
 */
getSelectedFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.setEditValue() CubeGrid.setEditValue()}.
 */
setEditValue?: Function;

/**
 * See {@link isc.CubeGrid.cellIsSelected() CubeGrid.cellIsSelected()}.
 */
cellIsSelected?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelHover() CubeGrid.facetLabelHover()}.
 */
facetLabelHover?: Function;

/**
 * See {@link isc.CubeGrid.getPrintHTML() CubeGrid.getPrintHTML()}.
 */
getPrintHTML?: Function;

/**
 * See {@link isc.CubeGrid.selectCells() CubeGrid.selectCells()}.
 */
selectCells?: Function;

/**
 * See {@link isc.CubeGrid.getFacetValuesColumn() CubeGrid.getFacetValuesColumn()}.
 */
getFacetValuesColumn?: Function;

/**
 * See {@link isc.CubeGrid.rollupValue CubeGrid.rollupValue}.
 */
rollupValue?: string;

/**
 * See {@link isc.CubeGrid.deselectFacetValue() CubeGrid.deselectFacetValue()}.
 */
deselectFacetValue?: Function;

/**
 * See {@link isc.CubeGrid.makeChart() CubeGrid.makeChart()}.
 */
makeChart?: Function;

/**
 * See {@link isc.CubeGrid.selectFacetValues() CubeGrid.selectFacetValues()}.
 */
selectFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.showHighlightsTitle CubeGrid.showHighlightsTitle}.
 */
showHighlightsTitle?: string;

/**
 * See {@link isc.CubeGrid.facetValueOut() CubeGrid.facetValueOut()}.
 */
facetValueOut?: Function;

/**
 * See {@link isc.CubeGrid.deselectCell() CubeGrid.deselectCell()}.
 */
deselectCell?: Function;

/**
 * See {@link isc.CubeGrid.getCellStyle() CubeGrid.getCellStyle()}.
 */
getCellStyle?: Function;

/**
 * See {@link isc.CubeGrid.autoFitColumnTitle CubeGrid.autoFitColumnTitle}.
 */
autoFitColumnTitle?: string;

/**
 * See {@link isc.CubeGrid.facetValueOver() CubeGrid.facetValueOver()}.
 */
facetValueOver?: Function;

/**
 * See {@link isc.CubeGrid.canEdit CubeGrid.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.CubeGrid.getCellFacetValues() CubeGrid.getCellFacetValues()}.
 */
getCellFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.resizeFacetValue() CubeGrid.resizeFacetValue()}.
 */
resizeFacetValue?: Function;

/**
 * See {@link isc.CubeGrid.facetHasSelection() CubeGrid.facetHasSelection()}.
 */
facetHasSelection?: Function;

/**
 * See {@link isc.CubeGrid.rowHeaderGridMode CubeGrid.rowHeaderGridMode}.
 */
rowHeaderGridMode?: boolean;

/**
 * See {@link isc.CubeGrid.controlSortDownTitle CubeGrid.controlSortDownTitle}.
 */
controlSortDownTitle?: string;

/**
 * See {@link isc.CubeGrid.getColumnFacetValues() CubeGrid.getColumnFacetValues()}.
 */
getColumnFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.sortDirection CubeGrid.sortDirection}.
 */
sortDirection?: string;

/**
 * See {@link isc.CubeGrid.getCellRow() CubeGrid.getCellRow()}.
 */
getCellRow?: Function;

/**
 * See {@link isc.CubeGrid.facetValueAlign CubeGrid.facetValueAlign}.
 */
facetValueAlign?: string;

/**
 * See {@link isc.CubeGrid.closeFacet() CubeGrid.closeFacet()}.
 */
closeFacet?: Function;

/**
 * See {@link isc.CubeGrid.facetValueHoverHTML() CubeGrid.facetValueHoverHTML()}.
 */
facetValueHoverHTML?: Function;

/**
 * See {@link isc.CubeGrid.getViewState() CubeGrid.getViewState()}.
 */
getViewState?: Function;

/**
 * See {@link isc.CubeGrid.valueExportFormat CubeGrid.valueExportFormat}.
 */
valueExportFormat?: string;

/**
 * See {@link isc.CubeGrid.autoSizeFacet() CubeGrid.autoSizeFacet()}.
 */
autoSizeFacet?: Function;

/**
 * See {@link isc.CubeGrid.getFacet() CubeGrid.getFacet()}.
 */
getFacet?: Function;

/**
 * See {@link isc.CubeGrid.facetTitleAlign CubeGrid.facetTitleAlign}.
 */
facetTitleAlign?: string;

/**
 * See {@link isc.CubeGrid.exportFacetTextColor CubeGrid.exportFacetTextColor}.
 */
exportFacetTextColor?: string;

/**
 * See {@link isc.CubeGrid.closeColumn() CubeGrid.closeColumn()}.
 */
closeColumn?: Function;

/**
 * See {@link isc.CubeGrid.controlCloseTitle CubeGrid.controlCloseTitle}.
 */
controlCloseTitle?: string;

/**
 * See {@link isc.CubeGrid.autoSelectHeaders CubeGrid.autoSelectHeaders}.
 */
autoSelectHeaders?: boolean;

/**
 * See {@link isc.CubeGrid.facets CubeGrid.facets}.
 */
facets?: Facet[];

/**
 * See {@link isc.CubeGrid.metricFacetId CubeGrid.metricFacetId}.
 */
metricFacetId?: string;

/**
 * See {@link isc.CubeGrid.canCollapseFacets CubeGrid.canCollapseFacets}.
 */
canCollapseFacets?: boolean;

/**
 * See {@link isc.CubeGrid.innerHeaderBaseStyle CubeGrid.innerHeaderBaseStyle}.
 */
innerHeaderBaseStyle?: string;

/**
 * See {@link isc.CubeGrid.getCellColumn() CubeGrid.getCellColumn()}.
 */
getCellColumn?: Function;

/**
 * See {@link isc.CubeGrid.rowHeaderBaseStyle CubeGrid.rowHeaderBaseStyle}.
 */
rowHeaderBaseStyle?: string;

/**
 * See {@link isc.CubeGrid.hasChanges() CubeGrid.hasChanges()}.
 */
hasChanges?: Function;

/**
 * See {@link isc.CubeGrid.cellAlign CubeGrid.cellAlign}.
 */
cellAlign?: string;

/**
 * See {@link isc.CubeGrid.simpleDeselect CubeGrid.simpleDeselect}.
 */
simpleDeselect?: boolean;

/**
 * See {@link isc.CubeGrid.wrapFacetTitles CubeGrid.wrapFacetTitles}.
 */
wrapFacetTitles?: boolean;

/**
 * See {@link isc.CubeGrid.setHilites() CubeGrid.setHilites()}.
 */
setHilites?: Function;

/**
 * See {@link isc.CubeGrid.setViewState() CubeGrid.setViewState()}.
 */
setViewState?: Function;

/**
 * See {@link isc.CubeGrid.bodyStyleName CubeGrid.bodyStyleName}.
 */
bodyStyleName?: string;

/**
 * See {@link isc.CubeGrid.canMinimizeColumns CubeGrid.canMinimizeColumns}.
 */
canMinimizeColumns?: boolean;

/**
 * See {@link isc.CubeGrid.showFacetContextMenus CubeGrid.showFacetContextMenus}.
 */
showFacetContextMenus?: boolean;

/**
 * See {@link isc.CubeGrid.controlMinimizeTitle CubeGrid.controlMinimizeTitle}.
 */
controlMinimizeTitle?: string;

/**
 * See {@link isc.CubeGrid.facetLabelOut() CubeGrid.facetLabelOut()}.
 */
facetLabelOut?: Function;

/**
 * See {@link isc.CubeGrid.saveEdits() CubeGrid.saveEdits()}.
 */
saveEdits?: Function;

/**
 * See {@link isc.CubeGrid.hideAllHighlightsTitle CubeGrid.hideAllHighlightsTitle}.
 */
hideAllHighlightsTitle?: string;

/**
 * See {@link isc.CubeGrid.setFacetTitleAlign() CubeGrid.setFacetTitleAlign()}.
 */
setFacetTitleAlign?: Function;

/**
 * See {@link isc.CubeGrid.dataArrived() CubeGrid.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.CubeGrid.colHeaderBaseStyle CubeGrid.colHeaderBaseStyle}.
 */
colHeaderBaseStyle?: string;

/**
 * See {@link isc.CubeGrid.getColumnHeaderFacetValues() CubeGrid.getColumnHeaderFacetValues()}.
 */
getColumnHeaderFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.exportColumnFacetBGColor CubeGrid.exportColumnFacetBGColor}.
 */
exportColumnFacetBGColor?: string;

/**
 * See {@link isc.CubeGrid.defaultFacetWidth CubeGrid.defaultFacetWidth}.
 */
defaultFacetWidth?: number;

/**
 * See {@link isc.CubeGrid.cellIdProperty CubeGrid.cellIdProperty}.
 */
cellIdProperty?: string;

/**
 * See {@link isc.CubeGrid.toggleFieldOpenState() CubeGrid.toggleFieldOpenState()}.
 */
toggleFieldOpenState?: Function;

/**
 * See {@link isc.CubeGrid.bodyMinHeight CubeGrid.bodyMinHeight}.
 */
bodyMinHeight?: number;

/**
 * See {@link isc.CubeGrid.getDefaultFacetValueContextItems() CubeGrid.getDefaultFacetValueContextItems()}.
 */
getDefaultFacetValueContextItems?: Function;

/**
 * See {@link isc.CubeGrid.getColumnFacetLayout() CubeGrid.getColumnFacetLayout()}.
 */
getColumnFacetLayout?: Function;

/**
 * See {@link isc.CubeGrid.chartStackedTitle CubeGrid.chartStackedTitle}.
 */
chartStackedTitle?: string;

/**
 * See {@link isc.CubeGrid.selectAllCells() CubeGrid.selectAllCells()}.
 */
selectAllCells?: Function;

/**
 * See {@link isc.CubeGrid.facetValueHoverAlign CubeGrid.facetValueHoverAlign}.
 */
facetValueHoverAlign?: string;

/**
 * See {@link isc.CubeGrid.hiliteCellList() CubeGrid.hiliteCellList()}.
 */
hiliteCellList?: Function;

/**
 * See {@link isc.CubeGrid.setFacetValueTitleAlign() CubeGrid.setFacetValueTitleAlign()}.
 */
setFacetValueTitleAlign?: Function;

/**
 * See {@link isc.CubeGrid.facetRemoved() CubeGrid.facetRemoved()}.
 */
facetRemoved?: Function;

/**
 * See {@link isc.CubeGrid.anyCellSelected() CubeGrid.anyCellSelected()}.
 */
anyCellSelected?: Function;

/**
 * See {@link isc.CubeGrid.alternateRecordStyles CubeGrid.alternateRecordStyles}.
 */
alternateRecordStyles?: boolean;

/**
 * See {@link isc.CubeGrid.padTitles CubeGrid.padTitles}.
 */
padTitles?: boolean;

/**
 * See {@link isc.CubeGrid.exportRowFacetTextColor CubeGrid.exportRowFacetTextColor}.
 */
exportRowFacetTextColor?: string;

/**
 * See {@link isc.CubeGrid.rotateHeaderTitles CubeGrid.rotateHeaderTitles}.
 */
rotateHeaderTitles?: boolean;

/**
 * See {@link isc.CubeGrid.wrapFacetValueTitles CubeGrid.wrapFacetValueTitles}.
 */
wrapFacetValueTitles?: boolean;

/**
 * See {@link isc.CubeGrid.canDragSelect CubeGrid.canDragSelect}.
 */
canDragSelect?: boolean;

/**
 * See {@link isc.CubeGrid.canSelectValues CubeGrid.canSelectValues}.
 */
canSelectValues?: boolean;

/**
 * See {@link isc.CubeGrid.autoFetchTextMatchStyle CubeGrid.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.CubeGrid.getCellRecord() CubeGrid.getCellRecord()}.
 */
getCellRecord?: Function;

/**
 * See {@link isc.CubeGrid.discardAllEdits() CubeGrid.discardAllEdits()}.
 */
discardAllEdits?: Function;

/**
 * See {@link isc.CubeGrid.deselectAllCells() CubeGrid.deselectAllCells()}.
 */
deselectAllCells?: Function;

/**
 * See {@link isc.CubeGrid.columnFacets CubeGrid.columnFacets}.
 */
columnFacets?: string[];

/**
 * See {@link isc.CubeGrid.controlSortUpTitle CubeGrid.controlSortUpTitle}.
 */
controlSortUpTitle?: string;

/**
 * See {@link isc.CubeGrid.showFacetValues() CubeGrid.showFacetValues()}.
 */
showFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.getEditValue() CubeGrid.getEditValue()}.
 */
getEditValue?: Function;

/**
 * See {@link isc.CubeGrid.deselectAllFacetValues() CubeGrid.deselectAllFacetValues()}.
 */
deselectAllFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.addRowFacet() CubeGrid.addRowFacet()}.
 */
addRowFacet?: Function;

/**
 * See {@link isc.CubeGrid.showFacetValueContextMenus CubeGrid.showFacetValueContextMenus}.
 */
showFacetValueContextMenus?: boolean;

/**
 * See {@link isc.CubeGrid.facetValueHoverWidth CubeGrid.facetValueHoverWidth}.
 */
facetValueHoverWidth?: number | string;

/**
 * See {@link isc.CubeGrid.facetLabelHoverHTML() CubeGrid.facetLabelHoverHTML()}.
 */
facetLabelHoverHTML?: Function;

/**
 * See {@link isc.CubeGrid.facetValueSelectionChanged() CubeGrid.facetValueSelectionChanged()}.
 */
facetValueSelectionChanged?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelHoverHeight CubeGrid.facetLabelHoverHeight}.
 */
facetLabelHoverHeight?: number | string;

/**
 * See {@link isc.CubeGrid.highlightSelectionTitle CubeGrid.highlightSelectionTitle}.
 */
highlightSelectionTitle?: string;

/**
 * See {@link isc.CubeGrid.getAllEditCells() CubeGrid.getAllEditCells()}.
 */
getAllEditCells?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelHoverWidth CubeGrid.facetLabelHoverWidth}.
 */
facetLabelHoverWidth?: number | string;

/**
 * See {@link isc.CubeGrid.fieldVisibilitySubmenuTitle CubeGrid.fieldVisibilitySubmenuTitle}.
 */
fieldVisibilitySubmenuTitle?: string;

/**
 * See {@link isc.CubeGrid.setFixedFacetValue() CubeGrid.setFixedFacetValue()}.
 */
setFixedFacetValue?: Function;

/**
 * See {@link isc.CubeGrid.getFacetValue() CubeGrid.getFacetValue()}.
 */
getFacetValue?: Function;

/**
 * See {@link isc.CubeGrid.hiliteCell() CubeGrid.hiliteCell()}.
 */
hiliteCell?: Function;

/**
 * See {@link isc.CubeGrid.enableCharting CubeGrid.enableCharting}.
 */
enableCharting?: boolean;

/**
 * See {@link isc.CubeGrid.selectCell() CubeGrid.selectCell()}.
 */
selectCell?: Function;

/**
 * See {@link isc.CubeGrid.addColumnFacet() CubeGrid.addColumnFacet()}.
 */
addColumnFacet?: Function;

/**
 * See {@link isc.CubeGrid.hideFacetValues() CubeGrid.hideFacetValues()}.
 */
hideFacetValues?: Function;

/**
 * See {@link isc.CubeGrid.rowHeaderLabelBaseStyle CubeGrid.rowHeaderLabelBaseStyle}.
 */
rowHeaderLabelBaseStyle?: string;

/**
 * See {@link isc.CubeGrid.facetValueHoverHeight CubeGrid.facetValueHoverHeight}.
 */
facetValueHoverHeight?: number | string;

/**
 * See {@link isc.CubeGrid.facetAdded() CubeGrid.facetAdded()}.
 */
facetAdded?: Function;

/**
 * See {@link isc.CubeGrid.skinImgDir CubeGrid.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.CubeGrid.fixedFacetValues CubeGrid.fixedFacetValues}.
 */
fixedFacetValues?: FacetValueMap;

/**
 * See {@link isc.CubeGrid.minimizeColumnTitle CubeGrid.minimizeColumnTitle}.
 */
minimizeColumnTitle?: string;

/**
 * See {@link isc.CubeGrid.fetchRequestProperties CubeGrid.fetchRequestProperties}.
 */
fetchRequestProperties?: DSRequest;

/**
 * See {@link isc.CubeGrid.setEnableCharting() CubeGrid.setEnableCharting()}.
 */
setEnableCharting?: Function;

/**
 * See {@link isc.CubeGrid.facetValueHoverStyle CubeGrid.facetValueHoverStyle}.
 */
facetValueHoverStyle?: string;

/**
 * See {@link isc.CubeGrid.saveAllEdits() CubeGrid.saveAllEdits()}.
 */
saveAllEdits?: Function;

/**
 * See {@link isc.CubeGrid.clearEditValue() CubeGrid.clearEditValue()}.
 */
clearEditValue?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelHoverStyle CubeGrid.facetLabelHoverStyle}.
 */
facetLabelHoverStyle?: string;

/**
 * See {@link isc.CubeGrid.facetContextClick() CubeGrid.facetContextClick()}.
 */
facetContextClick?: Function;

/**
 * See {@link isc.CubeGrid.sortedFacetValues CubeGrid.sortedFacetValues}.
 */
sortedFacetValues?: FacetValueMap;

/**
 * See {@link isc.CubeGrid.chartConfirmThreshold CubeGrid.chartConfirmThreshold}.
 */
chartConfirmThreshold?: number;

/**
 * See {@link isc.CubeGrid.cellSelectionChanged() CubeGrid.cellSelectionChanged()}.
 */
cellSelectionChanged?: Function;

/**
 * See {@link isc.CubeGrid.baseStyle CubeGrid.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.CubeGrid.sortByFacetId() CubeGrid.sortByFacetId()}.
 */
sortByFacetId?: Function;

/**
 * See {@link isc.CubeGrid.loadAllRecords() CubeGrid.loadAllRecords()}.
 */
loadAllRecords?: Function;

/**
 * See {@link isc.CubeGrid.getSelectedCellIds() CubeGrid.getSelectedCellIds()}.
 */
getSelectedCellIds?: Function;

/**
 * See {@link isc.CubeGrid.facetLabelOver() CubeGrid.facetLabelOver()}.
 */
facetLabelOver?: Function;

/**
 * See {@link isc.CubeGrid.autoSizeHeaders CubeGrid.autoSizeHeaders}.
 */
autoSizeHeaders?: boolean;

/**
 * See {@link isc.CubeGrid.autoFetchData CubeGrid.autoFetchData}.
 */
autoFetchData?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CubeGrid wraps the SmartClient widget class
 * {@link isc.CubeGrid CubeGrid} for React, allowing you to import
 * CubeGrid for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class CubeGrid extends ListGrid {
    props: AsComponentXML<CubeGridProps>;
}
