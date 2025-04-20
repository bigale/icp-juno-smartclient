import { TileLayout } from './TileLayout';

export class TileGrid extends TileLayout {
    static ISC_CLASS_NAME = 'TileGrid';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"wrapValues":"Boolean","implicitCriteria":{"className":"Criteria"},"fields":{"className":"DetailViewerField","isArray":true},"valuesShowRollOver":"boolean","reselectOnUpdate":"boolean","detailViewerProperties":{"className":"DetailViewer","isProperties":true},"dataSource":{"className":"DataSource"},"animateTileChange":"Boolean","tiles":{"className":"Canvas","isArray":true},"autoFetchData":"boolean","tileProperties":[{"className":"SimpleTile","isProperties":true},{"className":"Canvas","isProperties":true}],"drawAllMaxTiles":"Integer","canAcceptDroppedRecords":"Boolean","fetchRequestProperties":{"className":"DSRequest","isProperties":true},"data":[{"className":"TileRecord","isArray":true},{"className":"Record","isArray":true}],"printTilesPerLine":"number","valuesShowDown":"boolean","showEmptyMessage":"Boolean","canReorderTiles":"Boolean","showAllRecords":"Boolean","initialCriteria":{"className":"Criteria"},"showDetailFields":"Boolean","recycleTiles":"Boolean","canDragTilesOut":"Boolean","valuesShowSelected":"boolean"};
static CHILD_TYPE_MAPPING = {"DetailViewerField":"fields","DataSource":"dataSource","Canvas":"tiles"};

}
