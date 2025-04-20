import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ResultSetProps {

/**
 * See {@link isc.ResultSet.requestProperties ResultSet.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.ResultSet.initialData ResultSet.initialData}.
 */
initialData?: Record[];

/**
 * See {@link isc.ResultSet.reapplyUnchangedLocalFilter ResultSet.reapplyUnchangedLocalFilter}.
 */
reapplyUnchangedLocalFilter?: boolean;

/**
 * See {@link isc.ResultSet.resort() ResultSet.resort()}.
 */
resort?: Function;

/**
 * See {@link isc.ResultSet.rangeIsLoaded() ResultSet.rangeIsLoaded()}.
 */
rangeIsLoaded?: Function;

/**
 * See {@link isc.ResultSet.getProperty() ResultSet.getProperty()}.
 */
getProperty?: Function;

/**
 * See {@link isc.ResultSet.filterLocalData() ResultSet.filterLocalData()}.
 */
filterLocalData?: Function;

/**
 * See {@link isc.ResultSet.find() ResultSet.find()}.
 */
find?: Function;

/**
 * See {@link isc.ResultSet.transformData() ResultSet.transformData()}.
 */
transformData?: Function;

/**
 * See {@link isc.ResultSet.allMatchingRowsCached() ResultSet.allMatchingRowsCached()}.
 */
allMatchingRowsCached?: Function;

/**
 * See {@link isc.ResultSet.criteria ResultSet.criteria}.
 */
criteria?: Criteria;

/**
 * See {@link isc.ResultSet.setSort() ResultSet.setSort()}.
 */
setSort?: Function;

/**
 * See {@link isc.ResultSet.dataArrived() ResultSet.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.ResultSet.findByKey() ResultSet.findByKey()}.
 */
findByKey?: Function;

/**
 * See {@link isc.ResultSet.resultSize ResultSet.resultSize}.
 */
resultSize?: number;

/**
 * See {@link isc.ResultSet.rememberDynamicProgressiveLoading ResultSet.rememberDynamicProgressiveLoading}.
 */
rememberDynamicProgressiveLoading?: boolean;

/**
 * See {@link isc.ResultSet.getCachedRange() ResultSet.getCachedRange()}.
 */
getCachedRange?: Function;

/**
 * See {@link isc.ResultSet.sortSpecifiers ResultSet.sortSpecifiers}.
 */
sortSpecifiers?: SortSpecifier[];

/**
 * See {@link isc.ResultSet.applyFilter() ResultSet.applyFilter()}.
 */
applyFilter?: Function;

/**
 * See {@link isc.ResultSet.fetchRowCount() ResultSet.fetchRowCount()}.
 */
fetchRowCount?: Function;

/**
 * See {@link isc.ResultSet.modifiable ResultSet.modifiable}.
 */
modifiable?: boolean;

/**
 * See {@link isc.ResultSet.lengthIsKnown() ResultSet.lengthIsKnown()}.
 */
lengthIsKnown?: Function;

/**
 * See {@link isc.ResultSet.progressiveLoading ResultSet.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.ResultSet.getCombinedCriteria() ResultSet.getCombinedCriteria()}.
 */
getCombinedCriteria?: Function;

/**
 * See {@link isc.ResultSet.getValueMap() ResultSet.getValueMap()}.
 */
getValueMap?: Function;

/**
 * See {@link isc.ResultSet.applyRowCountToLength ResultSet.applyRowCountToLength}.
 */
applyRowCountToLength?: boolean;

/**
 * See {@link isc.ResultSet.willFetchData() ResultSet.willFetchData()}.
 */
willFetchData?: Function;

/**
 * See {@link isc.ResultSet.fetchOperation ResultSet.fetchOperation}.
 */
fetchOperation?: string;

/**
 * See {@link isc.ResultSet.sortByProperty() ResultSet.sortByProperty()}.
 */
sortByProperty?: Function;

/**
 * See {@link isc.ResultSet.getLength() ResultSet.getLength()}.
 */
getLength?: Function;

/**
 * See {@link isc.ResultSet.compareCriteria() ResultSet.compareCriteria()}.
 */
compareCriteria?: Function;

/**
 * See {@link isc.ResultSet.findIndex() ResultSet.findIndex()}.
 */
findIndex?: Function;

/**
 * See {@link isc.ResultSet.getSort() ResultSet.getSort()}.
 */
getSort?: Function;

/**
 * See {@link isc.ResultSet.rowIsLoaded() ResultSet.rowIsLoaded()}.
 */
rowIsLoaded?: Function;

/**
 * See {@link isc.ResultSet.implicitCriteria ResultSet.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.ResultSet.dropCacheOnUpdate ResultSet.dropCacheOnUpdate}.
 */
dropCacheOnUpdate?: boolean;

/**
 * See {@link isc.ResultSet.indexOf() ResultSet.indexOf()}.
 */
indexOf?: Function;

/**
 * See {@link isc.ResultSet.useClientFiltering ResultSet.useClientFiltering}.
 */
useClientFiltering?: boolean;

/**
 * See {@link isc.ResultSet.invalidateCache() ResultSet.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.ResultSet.getAllVisibleRows() ResultSet.getAllVisibleRows()}.
 */
getAllVisibleRows?: Function;

/**
 * See {@link isc.ResultSet.allRowsCached() ResultSet.allRowsCached()}.
 */
allRowsCached?: Function;

/**
 * See {@link isc.ResultSet.allRows ResultSet.allRows}.
 */
allRows?: Record[];

/**
 * See {@link isc.ResultSet.disableCacheSync ResultSet.disableCacheSync}.
 */
disableCacheSync?: boolean;

/**
 * See {@link isc.ResultSet.rowCountContext ResultSet.rowCountContext}.
 */
rowCountContext?: DSRequest;

/**
 * See {@link isc.ResultSet.duplicate() ResultSet.duplicate()}.
 */
duplicate?: Function;

/**
 * See {@link isc.ResultSet.setFullLength() ResultSet.setFullLength()}.
 */
setFullLength?: Function;

/**
 * See {@link isc.ResultSet.updateCacheFromRequest ResultSet.updateCacheFromRequest}.
 */
updateCacheFromRequest?: boolean;

/**
 * See {@link isc.ResultSet.prerequisiteFieldGenerationNotSuccessfulErrorMessage ResultSet.prerequisiteFieldGenerationNotSuccessfulErrorMessage}.
 */
prerequisiteFieldGenerationNotSuccessfulErrorMessage?: string;

/**
 * See {@link isc.ResultSet.usingFilteredData() ResultSet.usingFilteredData()}.
 */
usingFilteredData?: Function;

/**
 * See {@link isc.ResultSet.rowCountOperation ResultSet.rowCountOperation}.
 */
rowCountOperation?: string;

/**
 * See {@link isc.ResultSet.getRowCountStatus() ResultSet.getRowCountStatus()}.
 */
getRowCountStatus?: Function;

/**
 * See {@link isc.ResultSet.setCriteria() ResultSet.setCriteria()}.
 */
setCriteria?: Function;

/**
 * See {@link isc.ResultSet.fetchMode ResultSet.fetchMode}.
 */
fetchMode?: string;

/**
 * See {@link isc.ResultSet.get() ResultSet.get()}.
 */
get?: Function;

/**
 * See {@link isc.ResultSet.neverDropUpdatedRows ResultSet.neverDropUpdatedRows}.
 */
neverDropUpdatedRows?: boolean;

/**
 * See {@link isc.ResultSet.setAllRows() ResultSet.setAllRows()}.
 */
setAllRows?: Function;

/**
 * See {@link isc.ResultSet.criteriaPolicy ResultSet.criteriaPolicy}.
 */
criteriaPolicy?: string;

/**
 * See {@link isc.ResultSet.findAll() ResultSet.findAll()}.
 */
findAll?: Function;

/**
 * See {@link isc.ResultSet.updatePartialCache ResultSet.updatePartialCache}.
 */
updatePartialCache?: boolean;

/**
 * See {@link isc.ResultSet.getRowCount() ResultSet.getRowCount()}.
 */
getRowCount?: Function;

/**
 * See {@link isc.ResultSet.dataSource ResultSet.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.ResultSet.unsort() ResultSet.unsort()}.
 */
unsort?: Function;

/**
 * See {@link isc.ResultSet.fetchDelay ResultSet.fetchDelay}.
 */
fetchDelay?: number;

/**
 * See {@link isc.ResultSet.getAllCachedRows() ResultSet.getAllCachedRows()}.
 */
getAllCachedRows?: Function;

/**
 * See {@link isc.ResultSet.getRowCountRange() ResultSet.getRowCountRange()}.
 */
getRowCountRange?: Function;

/**
 * See {@link isc.ResultSet.autoFetchRowCount ResultSet.autoFetchRowCount}.
 */
autoFetchRowCount?: boolean;

/**
 * See {@link isc.ResultSet.getCriteria() ResultSet.getCriteria()}.
 */
getCriteria?: Function;

/**
 * See {@link isc.ResultSet.initialLength ResultSet.initialLength}.
 */
initialLength?: number;

/**
 * See {@link isc.ResultSet.lengthIsProgressive() ResultSet.lengthIsProgressive()}.
 */
lengthIsProgressive?: Function;

/**
 * See {@link isc.ResultSet.blockingRowCountFetch ResultSet.blockingRowCountFetch}.
 */
blockingRowCountFetch?: boolean;

/**
 * See {@link isc.ResultSet.findNextIndex() ResultSet.findNextIndex()}.
 */
findNextIndex?: Function;

/**
 * See {@link isc.ResultSet.getRange() ResultSet.getRange()}.
 */
getRange?: Function;

/**
 * See {@link isc.ResultSet.alwaysRequestVisibleRows ResultSet.alwaysRequestVisibleRows}.
 */
alwaysRequestVisibleRows?: boolean;

/**
 * See {@link isc.ResultSet.useClientSorting ResultSet.useClientSorting}.
 */
useClientSorting?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ResultSet wraps the non-rendered SmartClient class
 * {@link isc.ResultSet ResultSet} for React, allowing you to import
 *  ResultSet for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class ResultSet extends ILogicalComponent {
    props: AsComponentXML<ResultSetProps>;
}
