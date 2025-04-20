import { ListGrid } from './ListGrid';

export class CubeGrid extends ListGrid {
    static ISC_CLASS_NAME = 'CubeGrid';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"editByCell":"Boolean","hideEmptyFacetValues":"boolean","indentVTreeFacets":"boolean","canSelectHeaders":"Boolean","dataSource":{"className":"DataSource"},"bodyMinWidth":"number","rowFacets":{"className":"String","isArray":true},"canResizeColumns":"boolean","vTreeFacetIndent":"int","canMoveFacets":"Boolean","saveByCell":"Boolean","canSortFacets":"boolean","facetValueContextItems":{"className":"MenuItem","isArray":true},"canReorderColumns":"boolean","autoFitFieldWidths":"Boolean","data":{"className":"CellRecord","isArray":true},"canSortData":"boolean","hilites":{"className":"Hilite","isArray":true},"canMinimizeFacets":"Boolean","canEdit":"Boolean","rowHeaderGridMode":"Boolean","autoSelectHeaders":"Boolean","facets":{"className":"Facet","isArray":true},"canCollapseFacets":"Boolean","simpleDeselect":"Boolean","wrapFacetTitles":"Boolean","canMinimizeColumns":"boolean","showFacetContextMenus":"boolean","defaultFacetWidth":"number","bodyMinHeight":"number","alternateRecordStyles":"Boolean","padTitles":"Boolean","rotateHeaderTitles":"Boolean","wrapFacetValueTitles":"Boolean","canDragSelect":"Boolean","canSelectValues":"Boolean","columnFacets":{"className":"String","isArray":true},"showFacetValueContextMenus":"boolean","facetValueHoverWidth":["Number","String"],"facetLabelHoverHeight":["Number","String"],"facetLabelHoverWidth":["Number","String"],"enableCharting":"boolean","facetValueHoverHeight":["Number","String"],"fixedFacetValues":{"className":"FacetValueMap"},"fetchRequestProperties":{"className":"DSRequest","isProperties":true},"sortedFacetValues":{"className":"FacetValueMap"},"chartConfirmThreshold":"Number","autoSizeHeaders":"Boolean","autoFetchData":"boolean"};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
