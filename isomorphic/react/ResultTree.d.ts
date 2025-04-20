import React from 'react';
import { Tree, TreeProps } from './Tree';
import { AsComponentXML } from './core/ReactComponent';


declare interface ResultTreeProps extends TreeProps {

/**
 * See {@link isc.ResultTree.sendNullParentInLinkDataCriteria ResultTree.sendNullParentInLinkDataCriteria}.
 */
sendNullParentInLinkDataCriteria?: boolean;

/**
 * See {@link isc.ResultTree.autoOpen ResultTree.autoOpen}.
 */
autoOpen?: string;

/**
 * See {@link isc.ResultTree.willFetchData() ResultTree.willFetchData()}.
 */
willFetchData?: Function;

/**
 * See {@link isc.ResultTree.setCriteria() ResultTree.setCriteria()}.
 */
setCriteria?: Function;

/**
 * See {@link isc.ResultTree.autoPreserveOpenState ResultTree.autoPreserveOpenState}.
 */
autoPreserveOpenState?: string;

/**
 * See {@link isc.ResultTree.canReturnOpenFolders ResultTree.canReturnOpenFolders}.
 */
canReturnOpenFolders?: boolean;

/**
 * See {@link isc.ResultTree.disableCacheSync ResultTree.disableCacheSync}.
 */
disableCacheSync?: boolean;

/**
 * See {@link isc.ResultTree.compareCriteria() ResultTree.compareCriteria()}.
 */
compareCriteria?: Function;

/**
 * See {@link isc.ResultTree.linkDataFetchMode ResultTree.linkDataFetchMode}.
 */
linkDataFetchMode?: string;

/**
 * See {@link isc.ResultTree.dataArrived() ResultTree.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.ResultTree.useSimpleCriteriaLOD ResultTree.useSimpleCriteriaLOD}.
 */
useSimpleCriteriaLOD?: boolean;

/**
 * See {@link isc.ResultTree.loadDataOnDemand ResultTree.loadDataOnDemand}.
 */
loadDataOnDemand?: boolean;

/**
 * See {@link isc.ResultTree.fetchMode ResultTree.fetchMode}.
 */
fetchMode?: string;

/**
 * See {@link isc.ResultTree.get() ResultTree.get()}.
 */
get?: Function;

/**
 * See {@link isc.ResultTree.linkDataFetchOperation ResultTree.linkDataFetchOperation}.
 */
linkDataFetchOperation?: string;

/**
 * See {@link isc.ResultTree.linkDataAddOperation ResultTree.linkDataAddOperation}.
 */
linkDataAddOperation?: string;

/**
 * See {@link isc.ResultTree.getOpenState() ResultTree.getOpenState()}.
 */
getOpenState?: Function;

/**
 * See {@link isc.ResultTree.resultSize ResultTree.resultSize}.
 */
resultSize?: number;

/**
 * See {@link isc.ResultTree.autoUpdateSiblingNodesOnDrag ResultTree.autoUpdateSiblingNodesOnDrag}.
 */
autoUpdateSiblingNodesOnDrag?: boolean;

/**
 * See {@link isc.ResultTree.childCountProperty ResultTree.childCountProperty}.
 */
childCountProperty?: string;

/**
 * See {@link isc.ResultTree.invalidateCache() ResultTree.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.ResultTree.unloadChildren() ResultTree.unloadChildren()}.
 */
unloadChildren?: Function;

/**
 * See {@link isc.ResultTree.linkDataSource ResultTree.linkDataSource}.
 */
linkDataSource?: DataSource;

/**
 * See {@link isc.ResultTree.data ResultTree.data}.
 */
data?: TreeNode[];

/**
 * See {@link isc.ResultTree.serverFilterFields ResultTree.serverFilterFields}.
 */
serverFilterFields?: string[];

/**
 * See {@link isc.ResultTree.criteria ResultTree.criteria}.
 */
criteria?: Criteria;

/**
 * See {@link isc.ResultTree.defaultNewNodesToRoot ResultTree.defaultNewNodesToRoot}.
 */
defaultNewNodesToRoot?: boolean;

/**
 * See {@link isc.ResultTree.updateCacheFromRequest ResultTree.updateCacheFromRequest}.
 */
updateCacheFromRequest?: boolean;

/**
 * See {@link isc.ResultTree.modelType ResultTree.modelType}.
 */
modelType?: string;

/**
 * See {@link isc.ResultTree.canReturnOpenSubfoldersProperty ResultTree.canReturnOpenSubfoldersProperty}.
 */
canReturnOpenSubfoldersProperty?: string;

/**
 * See {@link isc.ResultTree.setChildren() ResultTree.setChildren()}.
 */
setChildren?: Function;

/**
 * See {@link isc.ResultTree.implicitCriteria ResultTree.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.ResultTree.defaultIsFolder ResultTree.defaultIsFolder}.
 */
defaultIsFolder?: boolean;

/**
 * See {@link isc.ResultTree.linkDataRemoveOperation ResultTree.linkDataRemoveOperation}.
 */
linkDataRemoveOperation?: string;

/**
 * See {@link isc.ResultTree.firstPositionValue ResultTree.firstPositionValue}.
 */
firstPositionValue?: number;

/**
 * See {@link isc.ResultTree.getRange() ResultTree.getRange()}.
 */
getRange?: Function;

/**
 * See {@link isc.ResultTree.rootNode ResultTree.rootNode}.
 */
rootNode?: any;

/**
 * See {@link isc.ResultTree.keepParentsOnFilter ResultTree.keepParentsOnFilter}.
 */
keepParentsOnFilter?: boolean;

/**
 * See {@link isc.ResultTree.getCombinedCriteria() ResultTree.getCombinedCriteria()}.
 */
getCombinedCriteria?: Function;

/**
 * See {@link isc.ResultTree.loadChildren() ResultTree.loadChildren()}.
 */
loadChildren?: Function;

/**
 * See {@link isc.ResultTree.applyFilter() ResultTree.applyFilter()}.
 */
applyFilter?: Function;

/**
 * See {@link isc.ResultTree.progressiveLoading ResultTree.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.ResultTree.discardParentlessNodes ResultTree.discardParentlessNodes}.
 */
discardParentlessNodes?: boolean;

/**
 * See {@link isc.ResultTree.setOpenState() ResultTree.setOpenState()}.
 */
setOpenState?: Function;

/**
 * See {@link isc.ResultTree.dataSource ResultTree.dataSource}.
 */
dataSource?: DataSource;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ResultTree wraps the SmartClient widget class
 * {@link isc.ResultTree ResultTree} for React, allowing you to import
 * ResultTree for use in React JS and JSX.
 * @class
 * @extends Tree
 */
declare class ResultTree extends Tree {
    props: AsComponentXML<ResultTreeProps>;
}
