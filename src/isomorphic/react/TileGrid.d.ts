import React from 'react';
import { TileLayout, TileLayoutProps } from './TileLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface TileGridProps extends TileLayoutProps {

/**
 * See {@link isc.TileGrid.setHilites() TileGrid.setHilites()}.
 */
setHilites?: Function;

/**
 * See {@link isc.TileGrid.filterData() TileGrid.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.TileGrid.loadAllRecords() TileGrid.loadAllRecords()}.
 */
loadAllRecords?: Function;

/**
 * See {@link isc.TileGrid.recordClick() TileGrid.recordClick()}.
 */
recordClick?: Function;

/**
 * See {@link isc.TileGrid.getTitleField() TileGrid.getTitleField()}.
 */
getTitleField?: Function;

/**
 * See {@link isc.TileGrid.wrapValues TileGrid.wrapValues}.
 */
wrapValues?: boolean;

/**
 * See {@link isc.TileGrid.implicitCriteria TileGrid.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.TileGrid.deselectRange() TileGrid.deselectRange()}.
 */
deselectRange?: Function;

/**
 * See {@link isc.TileGrid.exportData() TileGrid.exportData()}.
 */
exportData?: Function;

/**
 * See {@link isc.TileGrid.fields TileGrid.fields}.
 */
fields?: DetailViewerField[];

/**
 * See {@link isc.TileGrid.dataArrived() TileGrid.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.TileGrid.editProxyConstructor TileGrid.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.TileGrid.valuesShowRollOver TileGrid.valuesShowRollOver}.
 */
valuesShowRollOver?: boolean;

/**
 * See {@link isc.TileGrid.addData() TileGrid.addData()}.
 */
addData?: Function;

/**
 * See {@link isc.TileGrid.reselectOnUpdate TileGrid.reselectOnUpdate}.
 */
reselectOnUpdate?: boolean;

/**
 * See {@link isc.TileGrid.selectAllRecords() TileGrid.selectAllRecords()}.
 */
selectAllRecords?: Function;

/**
 * See {@link isc.TileGrid.selectRange() TileGrid.selectRange()}.
 */
selectRange?: Function;

/**
 * See {@link isc.TileGrid.removeSelectedData() TileGrid.removeSelectedData()}.
 */
removeSelectedData?: Function;

/**
 * See {@link isc.TileGrid.detailViewerProperties TileGrid.detailViewerProperties}.
 */
detailViewerProperties?: DetailViewer | DetailViewer;

/**
 * See {@link isc.TileGrid.dataSource TileGrid.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.TileGrid.dragDataAction TileGrid.dragDataAction}.
 */
dragDataAction?: string;

/**
 * See {@link isc.TileGrid.animateTileChange TileGrid.animateTileChange}.
 */
animateTileChange?: boolean;

/**
 * See {@link isc.TileGrid.tiles TileGrid.tiles}.
 */
tiles?: Canvas[];

/**
 * See {@link isc.TileGrid.autoFetchData TileGrid.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.TileGrid.tileProperties TileGrid.tileProperties}.
 */
tileProperties?: SimpleTile | Canvas;

/**
 * See {@link isc.TileGrid.dragTrackerStyle TileGrid.dragTrackerStyle}.
 */
dragTrackerStyle?: string;

/**
 * See {@link isc.TileGrid.styleName TileGrid.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.TileGrid.viewSelectedData() TileGrid.viewSelectedData()}.
 */
viewSelectedData?: Function;

/**
 * See {@link isc.TileGrid.drawAllMaxTiles TileGrid.drawAllMaxTiles}.
 */
drawAllMaxTiles?: number;

/**
 * See {@link isc.TileGrid.tileDragAppearance TileGrid.tileDragAppearance}.
 */
tileDragAppearance?: string;

/**
 * See {@link isc.TileGrid.deselectRecord() TileGrid.deselectRecord()}.
 */
deselectRecord?: Function;

/**
 * See {@link isc.TileGrid.transferDragData() TileGrid.transferDragData()}.
 */
transferDragData?: Function;

/**
 * See {@link isc.TileGrid.updateTile() TileGrid.updateTile()}.
 */
updateTile?: Function;

/**
 * See {@link isc.TileGrid.canAcceptDroppedRecords TileGrid.canAcceptDroppedRecords}.
 */
canAcceptDroppedRecords?: boolean;

/**
 * See {@link isc.TileGrid.getTile() TileGrid.getTile()}.
 */
getTile?: Function;

/**
 * See {@link isc.TileGrid.addTile() TileGrid.addTile()}.
 */
addTile?: Function;

/**
 * See {@link isc.TileGrid.removeData() TileGrid.removeData()}.
 */
removeData?: Function;

/**
 * See {@link isc.TileGrid.transferSelectedData() TileGrid.transferSelectedData()}.
 */
transferSelectedData?: Function;

/**
 * See {@link isc.TileGrid.deselectRecords() TileGrid.deselectRecords()}.
 */
deselectRecords?: Function;

/**
 * See {@link isc.TileGrid.invalidateCache() TileGrid.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.TileGrid.getDropIndex() TileGrid.getDropIndex()}.
 */
getDropIndex?: Function;

/**
 * See {@link isc.TileGrid.removeTile() TileGrid.removeTile()}.
 */
removeTile?: Function;

/**
 * See {@link isc.TileGrid.recordContextClick() TileGrid.recordContextClick()}.
 */
recordContextClick?: Function;

/**
 * See {@link isc.TileGrid.createTile() TileGrid.createTile()}.
 */
createTile?: Function;

/**
 * See {@link isc.TileGrid.tileValueStyle TileGrid.tileValueStyle}.
 */
tileValueStyle?: string;

/**
 * See {@link isc.TileGrid.fetchRequestProperties TileGrid.fetchRequestProperties}.
 */
fetchRequestProperties?: DSRequest;

/**
 * See {@link isc.TileGrid.loadingDataMessageStyle TileGrid.loadingDataMessageStyle}.
 */
loadingDataMessageStyle?: string;

/**
 * See {@link isc.TileGrid.getFieldState() TileGrid.getFieldState()}.
 */
getFieldState?: Function;

/**
 * See {@link isc.TileGrid.getDragTrackerTitle() TileGrid.getDragTrackerTitle()}.
 */
getDragTrackerTitle?: Function;

/**
 * See {@link isc.TileGrid.getTileIndex() TileGrid.getTileIndex()}.
 */
getTileIndex?: Function;

/**
 * See {@link isc.TileGrid.setData() TileGrid.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.TileGrid.recordDoubleClick() TileGrid.recordDoubleClick()}.
 */
recordDoubleClick?: Function;

/**
 * See {@link isc.TileGrid.data TileGrid.data}.
 */
data?: TileRecord[] | Record[];

/**
 * See {@link isc.TileGrid.getCurrentTile() TileGrid.getCurrentTile()}.
 */
getCurrentTile?: Function;

/**
 * See {@link isc.TileGrid.setDragTracker() TileGrid.setDragTracker()}.
 */
setDragTracker?: Function;

/**
 * See {@link isc.TileGrid.getDragData() TileGrid.getDragData()}.
 */
getDragData?: Function;

/**
 * See {@link isc.TileGrid.setFieldState() TileGrid.setFieldState()}.
 */
setFieldState?: Function;

/**
 * See {@link isc.TileGrid.reselectOnUpdateNotifications TileGrid.reselectOnUpdateNotifications}.
 */
reselectOnUpdateNotifications?: string;

/**
 * See {@link isc.TileGrid.emptyMessageStyle TileGrid.emptyMessageStyle}.
 */
emptyMessageStyle?: string;

/**
 * See {@link isc.TileGrid.dataFetchMode TileGrid.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.TileGrid.tileValueAlign TileGrid.tileValueAlign}.
 */
tileValueAlign?: string;

/**
 * See {@link isc.TileGrid.printTilesPerLine TileGrid.printTilesPerLine}.
 */
printTilesPerLine?: number;

/**
 * See {@link isc.TileGrid.tileConstructor TileGrid.tileConstructor}.
 */
tileConstructor?: string;

/**
 * See {@link isc.TileGrid.getTileHTML() TileGrid.getTileHTML()}.
 */
getTileHTML?: Function;

/**
 * See {@link isc.TileGrid.deselectAllRecords() TileGrid.deselectAllRecords()}.
 */
deselectAllRecords?: Function;

/**
 * See {@link isc.TileGrid.valuesShowDown TileGrid.valuesShowDown}.
 */
valuesShowDown?: boolean;

/**
 * See {@link isc.TileGrid.getSelectedRecord() TileGrid.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.TileGrid.selectionType TileGrid.selectionType}.
 */
selectionType?: string;

/**
 * See {@link isc.TileGrid.showEmptyMessage TileGrid.showEmptyMessage}.
 */
showEmptyMessage?: boolean;

/**
 * See {@link isc.TileGrid.fetchData() TileGrid.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.TileGrid.canReorderTiles TileGrid.canReorderTiles}.
 */
canReorderTiles?: boolean;

/**
 * See {@link isc.TileGrid.showAllRecords TileGrid.showAllRecords}.
 */
showAllRecords?: boolean;

/**
 * See {@link isc.TileGrid.getTileRecord() TileGrid.getTileRecord()}.
 */
getTileRecord?: Function;

/**
 * See {@link isc.TileGrid.selectRecords() TileGrid.selectRecords()}.
 */
selectRecords?: Function;

/**
 * See {@link isc.TileGrid.selectRecord() TileGrid.selectRecord()}.
 */
selectRecord?: Function;

/**
 * See {@link isc.TileGrid.tileScreen TileGrid.tileScreen}.
 */
tileScreen?: string;

/**
 * See {@link isc.TileGrid.setCanReorderTiles() TileGrid.setCanReorderTiles()}.
 */
setCanReorderTiles?: Function;

/**
 * See {@link isc.TileGrid.initialCriteria TileGrid.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.TileGrid.anySelected() TileGrid.anySelected()}.
 */
anySelected?: Function;

/**
 * See {@link isc.TileGrid.getSelection() TileGrid.getSelection()}.
 */
getSelection?: Function;

/**
 * See {@link isc.TileGrid.setCanAcceptDroppedRecords() TileGrid.setCanAcceptDroppedRecords()}.
 */
setCanAcceptDroppedRecords?: Function;

/**
 * See {@link isc.TileGrid.showDetailFields TileGrid.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.TileGrid.recycleTiles TileGrid.recycleTiles}.
 */
recycleTiles?: boolean;

/**
 * See {@link isc.TileGrid.dataArity TileGrid.dataArity}.
 */
dataArity?: string;

/**
 * See {@link isc.TileGrid.autoFetchTextMatchStyle TileGrid.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.TileGrid.emptyMessage TileGrid.emptyMessage}.
 */
emptyMessage?: string;

/**
 * See {@link isc.TileGrid.canDragTilesOut TileGrid.canDragTilesOut}.
 */
canDragTilesOut?: boolean;

/**
 * See {@link isc.TileGrid.setCanDragTilesOut() TileGrid.setCanDragTilesOut()}.
 */
setCanDragTilesOut?: Function;

/**
 * See {@link isc.TileGrid.valuesShowSelected TileGrid.valuesShowSelected}.
 */
valuesShowSelected?: boolean;

/**
 * See {@link isc.TileGrid.selectionChanged() TileGrid.selectionChanged()}.
 */
selectionChanged?: Function;

/**
 * See {@link isc.TileGrid.loadingMessage TileGrid.loadingMessage}.
 */
loadingMessage?: string;

/**
 * See {@link isc.TileGrid.loadingDataMessage TileGrid.loadingDataMessage}.
 */
loadingDataMessage?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TileGrid wraps the SmartClient widget class
 * {@link isc.TileGrid TileGrid} for React, allowing you to import
 * TileGrid for use in React JS and JSX.
 * @class
 * @extends TileLayout
 */
declare class TileGrid extends TileLayout {
    props: AsComponentXML<TileGridProps>;
}
