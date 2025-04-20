import { ILogicalComponent } from './core/ILogicalComponent';

export class ResultSet extends ILogicalComponent {
    static ISC_CLASS_NAME = 'ResultSet';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"requestProperties":{"className":"DSRequest","isProperties":true},"initialData":{"className":"Record","isArray":true},"reapplyUnchangedLocalFilter":"boolean","criteria":{"className":"Criteria"},"resultSize":"int","rememberDynamicProgressiveLoading":"boolean","sortSpecifiers":{"className":"SortSpecifier","isArray":true},"modifiable":"boolean","progressiveLoading":"boolean","applyRowCountToLength":"boolean","implicitCriteria":{"className":"Criteria"},"dropCacheOnUpdate":"Boolean","useClientFiltering":"Boolean","allRows":{"className":"Record","isArray":true},"disableCacheSync":"Boolean","rowCountContext":{"className":"DSRequest","isProperties":true},"updateCacheFromRequest":"Boolean","neverDropUpdatedRows":"Boolean","updatePartialCache":"Boolean","dataSource":{"className":"DataSource"},"fetchDelay":"int","autoFetchRowCount":"boolean","initialLength":"Integer","blockingRowCountFetch":"boolean","alwaysRequestVisibleRows":"Boolean","useClientSorting":"Boolean"};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
