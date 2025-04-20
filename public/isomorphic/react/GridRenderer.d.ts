import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridRendererProps extends CanvasProps {

/**
 * See {@link isc.GridRenderer.showClippedValuesOnHover GridRenderer.showClippedValuesOnHover}.
 */
showClippedValuesOnHover?: boolean;

/**
 * See {@link isc.GridRenderer.refreshCellStyle() GridRenderer.refreshCellStyle()}.
 */
refreshCellStyle?: Function;

/**
 * See {@link isc.GridRenderer.getCellElementId() GridRenderer.getCellElementId()}.
 */
getCellElementId?: Function;

/**
 * See {@link isc.GridRenderer.getRowHeight() GridRenderer.getRowHeight()}.
 */
getRowHeight?: Function;

/**
 * See {@link isc.GridRenderer.baseStyle GridRenderer.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.GridRenderer.emptyCellValue GridRenderer.emptyCellValue}.
 */
emptyCellValue?: string;

/**
 * See {@link isc.GridRenderer.showHover GridRenderer.showHover}.
 */
showHover?: boolean;

/**
 * See {@link isc.GridRenderer.getCellRecord() GridRenderer.getCellRecord()}.
 */
getCellRecord?: Function;

/**
 * See {@link isc.GridRenderer.showHoverOnDisabledCells GridRenderer.showHoverOnDisabledCells}.
 */
showHoverOnDisabledCells?: boolean;

/**
 * See {@link isc.GridRenderer.rowMouseDown() GridRenderer.rowMouseDown()}.
 */
rowMouseDown?: Function;

/**
 * See {@link isc.GridRenderer.getCellValue() GridRenderer.getCellValue()}.
 */
getCellValue?: Function;

/**
 * See {@link isc.GridRenderer.alternateColumnFrequency GridRenderer.alternateColumnFrequency}.
 */
alternateColumnFrequency?: number;

/**
 * See {@link isc.GridRenderer.drawAllMaxCells GridRenderer.drawAllMaxCells}.
 */
drawAllMaxCells?: number;

/**
 * See {@link isc.GridRenderer.getTotalRows() GridRenderer.getTotalRows()}.
 */
getTotalRows?: Function;

/**
 * See {@link isc.GridRenderer.rowMouseUp() GridRenderer.rowMouseUp()}.
 */
rowMouseUp?: Function;

/**
 * See {@link isc.GridRenderer.cellValueHover() GridRenderer.cellValueHover()}.
 */
cellValueHover?: Function;

/**
 * See {@link isc.GridRenderer.getRowElementId() GridRenderer.getRowElementId()}.
 */
getRowElementId?: Function;

/**
 * See {@link isc.GridRenderer.showOfflineMessage GridRenderer.showOfflineMessage}.
 */
showOfflineMessage?: boolean;

/**
 * See {@link isc.GridRenderer.cellHeight GridRenderer.cellHeight}.
 */
cellHeight?: number;

/**
 * See {@link isc.GridRenderer.getBaseStyle() GridRenderer.getBaseStyle()}.
 */
getBaseStyle?: Function;

/**
 * See {@link isc.GridRenderer.getCellFromDomElement() GridRenderer.getCellFromDomElement()}.
 */
getCellFromDomElement?: Function;

/**
 * See {@link isc.GridRenderer.getEventRow() GridRenderer.getEventRow()}.
 */
getEventRow?: Function;

/**
 * See {@link isc.GridRenderer.getCellHoverComponent() GridRenderer.getCellHoverComponent()}.
 */
getCellHoverComponent?: Function;

/**
 * See {@link isc.GridRenderer.autoFit GridRenderer.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.GridRenderer.showAllColumns GridRenderer.showAllColumns}.
 */
showAllColumns?: boolean;

/**
 * See {@link isc.GridRenderer.scrollRedrawDelay GridRenderer.scrollRedrawDelay}.
 */
scrollRedrawDelay?: number;

/**
 * See {@link isc.GridRenderer.getVisibleRows() GridRenderer.getVisibleRows()}.
 */
getVisibleRows?: Function;

/**
 * See {@link isc.GridRenderer.findColNum() GridRenderer.findColNum()}.
 */
findColNum?: Function;

/**
 * See {@link isc.GridRenderer.scrollWheelRedrawDelay GridRenderer.scrollWheelRedrawDelay}.
 */
scrollWheelRedrawDelay?: number;

/**
 * See {@link isc.GridRenderer.alternateColumnSuffix GridRenderer.alternateColumnSuffix}.
 */
alternateColumnSuffix?: string;

/**
 * See {@link isc.GridRenderer.cellMouseUp() GridRenderer.cellMouseUp()}.
 */
cellMouseUp?: Function;

/**
 * See {@link isc.GridRenderer.cellHoverHTML() GridRenderer.cellHoverHTML()}.
 */
cellHoverHTML?: Function;

/**
 * See {@link isc.GridRenderer.showSelectedStyle GridRenderer.showSelectedStyle}.
 */
showSelectedStyle?: boolean;

/**
 * See {@link isc.GridRenderer.getCellStartRow() GridRenderer.getCellStartRow()}.
 */
getCellStartRow?: Function;

/**
 * See {@link isc.GridRenderer.alternateRowStyles GridRenderer.alternateRowStyles}.
 */
alternateRowStyles?: boolean;

/**
 * See {@link isc.GridRenderer.cellSelectionChanged() GridRenderer.cellSelectionChanged()}.
 */
cellSelectionChanged?: Function;

/**
 * See {@link isc.GridRenderer.snapInsideBorder GridRenderer.snapInsideBorder}.
 */
snapInsideBorder?: boolean;

/**
 * See {@link isc.GridRenderer.canHover GridRenderer.canHover}.
 */
canHover?: boolean;

/**
 * See {@link isc.GridRenderer.wrapCells GridRenderer.wrapCells}.
 */
wrapCells?: boolean;

/**
 * See {@link isc.GridRenderer.getCellCSSText() GridRenderer.getCellCSSText()}.
 */
getCellCSSText?: Function;

/**
 * See {@link isc.GridRenderer.cellOut() GridRenderer.cellOut()}.
 */
cellOut?: Function;

/**
 * See {@link isc.GridRenderer.showAllRows GridRenderer.showAllRows}.
 */
showAllRows?: boolean;

/**
 * See {@link isc.GridRenderer.showEmptyMessage GridRenderer.showEmptyMessage}.
 */
showEmptyMessage?: boolean;

/**
 * See {@link isc.GridRenderer.totalRows GridRenderer.totalRows}.
 */
totalRows?: number;

/**
 * See {@link isc.GridRenderer.cellValueHoverHTML() GridRenderer.cellValueHoverHTML()}.
 */
cellValueHoverHTML?: Function;

/**
 * See {@link isc.GridRenderer.getColumnWidth() GridRenderer.getColumnWidth()}.
 */
getColumnWidth?: Function;

/**
 * See {@link isc.GridRenderer.getRowSpan() GridRenderer.getRowSpan()}.
 */
getRowSpan?: Function;

/**
 * See {@link isc.GridRenderer.rowHover() GridRenderer.rowHover()}.
 */
rowHover?: Function;

/**
 * See {@link isc.GridRenderer.fastCellUpdates GridRenderer.fastCellUpdates}.
 */
fastCellUpdates?: boolean;

/**
 * See {@link isc.GridRenderer.alternateRowFrequency GridRenderer.alternateRowFrequency}.
 */
alternateRowFrequency?: number;

/**
 * See {@link isc.GridRenderer.writeOutCellElementId GridRenderer.writeOutCellElementId}.
 */
writeOutCellElementId?: boolean;

/**
 * See {@link isc.GridRenderer.fixedRowHeights GridRenderer.fixedRowHeights}.
 */
fixedRowHeights?: boolean;

/**
 * See {@link isc.GridRenderer.cellHover() GridRenderer.cellHover()}.
 */
cellHover?: Function;

/**
 * See {@link isc.GridRenderer.rowOut() GridRenderer.rowOut()}.
 */
rowOut?: Function;

/**
 * See {@link isc.GridRenderer.cellPadding GridRenderer.cellPadding}.
 */
cellPadding?: number;

/**
 * See {@link isc.GridRenderer.findRowNum() GridRenderer.findRowNum()}.
 */
findRowNum?: Function;

/**
 * See {@link isc.GridRenderer.emptyMessage GridRenderer.emptyMessage}.
 */
emptyMessage?: string;

/**
 * See {@link isc.GridRenderer.getNearestRowToEvent() GridRenderer.getNearestRowToEvent()}.
 */
getNearestRowToEvent?: Function;

/**
 * See {@link isc.GridRenderer.getDrawnRows() GridRenderer.getDrawnRows()}.
 */
getDrawnRows?: Function;

/**
 * See {@link isc.GridRenderer.canSelectOnRightMouse GridRenderer.canSelectOnRightMouse}.
 */
canSelectOnRightMouse?: boolean;

/**
 * See {@link isc.GridRenderer.refreshRow() GridRenderer.refreshRow()}.
 */
refreshRow?: Function;

/**
 * See {@link isc.GridRenderer.setColumnWidth() GridRenderer.setColumnWidth()}.
 */
setColumnWidth?: Function;

/**
 * See {@link isc.GridRenderer.getRowTop() GridRenderer.getRowTop()}.
 */
getRowTop?: Function;

/**
 * See {@link isc.GridRenderer.setFastCellUpdates() GridRenderer.setFastCellUpdates()}.
 */
setFastCellUpdates?: Function;

/**
 * See {@link isc.GridRenderer.getColumnPageLeft() GridRenderer.getColumnPageLeft()}.
 */
getColumnPageLeft?: Function;

/**
 * See {@link isc.GridRenderer.virtualScrolling GridRenderer.virtualScrolling}.
 */
virtualScrolling?: boolean;

/**
 * See {@link isc.GridRenderer.cellDoubleClick() GridRenderer.cellDoubleClick()}.
 */
cellDoubleClick?: Function;

/**
 * See {@link isc.GridRenderer.rowOver() GridRenderer.rowOver()}.
 */
rowOver?: Function;

/**
 * See {@link isc.GridRenderer.getEventColumn() GridRenderer.getEventColumn()}.
 */
getEventColumn?: Function;

/**
 * See {@link isc.GridRenderer.refreshCell() GridRenderer.refreshCell()}.
 */
refreshCell?: Function;

/**
 * See {@link isc.GridRenderer.alternateColumnStyles GridRenderer.alternateColumnStyles}.
 */
alternateColumnStyles?: boolean;

/**
 * See {@link isc.GridRenderer.getCellStyle() GridRenderer.getCellStyle()}.
 */
getCellStyle?: Function;

/**
 * See {@link isc.GridRenderer.instantScrollTrackRedraw GridRenderer.instantScrollTrackRedraw}.
 */
instantScrollTrackRedraw?: boolean;

/**
 * See {@link isc.GridRenderer.fixedColumnWidths GridRenderer.fixedColumnWidths}.
 */
fixedColumnWidths?: boolean;

/**
 * See {@link isc.GridRenderer.getCellRowSpan() GridRenderer.getCellRowSpan()}.
 */
getCellRowSpan?: Function;

/**
 * See {@link isc.GridRenderer.rowClick() GridRenderer.rowClick()}.
 */
rowClick?: Function;

/**
 * See {@link isc.GridRenderer.cellIsEnabled() GridRenderer.cellIsEnabled()}.
 */
cellIsEnabled?: Function;

/**
 * See {@link isc.GridRenderer.rowContextClick() GridRenderer.rowContextClick()}.
 */
rowContextClick?: Function;

/**
 * See {@link isc.GridRenderer.getCellPageRect() GridRenderer.getCellPageRect()}.
 */
getCellPageRect?: Function;

/**
 * See {@link isc.GridRenderer.getColumnLeft() GridRenderer.getColumnLeft()}.
 */
getColumnLeft?: Function;

/**
 * See {@link isc.GridRenderer.snapToCells GridRenderer.snapToCells}.
 */
snapToCells?: boolean;

/**
 * See {@link isc.GridRenderer.offlineMessageStyle GridRenderer.offlineMessageStyle}.
 */
offlineMessageStyle?: string;

/**
 * See {@link isc.GridRenderer.emptyMessageStyle GridRenderer.emptyMessageStyle}.
 */
emptyMessageStyle?: string;

/**
 * See {@link isc.GridRenderer.cellMouseDown() GridRenderer.cellMouseDown()}.
 */
cellMouseDown?: Function;

/**
 * See {@link isc.GridRenderer.drawAheadRatio GridRenderer.drawAheadRatio}.
 */
drawAheadRatio?: number;

/**
 * See {@link isc.GridRenderer.dragScrollRedrawDelay GridRenderer.dragScrollRedrawDelay}.
 */
dragScrollRedrawDelay?: number;

/**
 * See {@link isc.GridRenderer.touchScrollRedrawDelay GridRenderer.touchScrollRedrawDelay}.
 */
touchScrollRedrawDelay?: number;

/**
 * See {@link isc.GridRenderer.quickDrawAheadRatio GridRenderer.quickDrawAheadRatio}.
 */
quickDrawAheadRatio?: number;

/**
 * See {@link isc.GridRenderer.cellOver() GridRenderer.cellOver()}.
 */
cellOver?: Function;

/**
 * See {@link isc.GridRenderer.getNearestColToEvent() GridRenderer.getNearestColToEvent()}.
 */
getNearestColToEvent?: Function;

/**
 * See {@link isc.GridRenderer.setColumnWidths() GridRenderer.setColumnWidths()}.
 */
setColumnWidths?: Function;

/**
 * See {@link isc.GridRenderer.alternateRowSuffix GridRenderer.alternateRowSuffix}.
 */
alternateRowSuffix?: string;

/**
 * See {@link isc.GridRenderer.cellValueIsClipped() GridRenderer.cellValueIsClipped()}.
 */
cellValueIsClipped?: Function;

/**
 * See {@link isc.GridRenderer.getRowPageTop() GridRenderer.getRowPageTop()}.
 */
getRowPageTop?: Function;

/**
 * See {@link isc.GridRenderer.offlineMessage GridRenderer.offlineMessage}.
 */
offlineMessage?: string;

/**
 * See {@link isc.GridRenderer.rowDoubleClick() GridRenderer.rowDoubleClick()}.
 */
rowDoubleClick?: Function;

/**
 * See {@link isc.GridRenderer.emptyMessageTableStyle GridRenderer.emptyMessageTableStyle}.
 */
emptyMessageTableStyle?: string;

/**
 * See {@link isc.GridRenderer.cellClick() GridRenderer.cellClick()}.
 */
cellClick?: Function;

/**
 * See {@link isc.GridRenderer.selectionChanged() GridRenderer.selectionChanged()}.
 */
selectionChanged?: Function;

/**
 * See {@link isc.GridRenderer.writeOutRowElementId GridRenderer.writeOutRowElementId}.
 */
writeOutRowElementId?: boolean;

/**
 * See {@link isc.GridRenderer.cellContextClick() GridRenderer.cellContextClick()}.
 */
cellContextClick?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridRenderer wraps the SmartClient widget class
 * {@link isc.GridRenderer GridRenderer} for React, allowing you to import
 * GridRenderer for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class GridRenderer extends Canvas {
    props: AsComponentXML<GridRendererProps>;
}
