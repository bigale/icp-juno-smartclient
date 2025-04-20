import { Tree } from './Tree';

export class ResultTree extends Tree {
    static ISC_CLASS_NAME = 'ResultTree';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"sendNullParentInLinkDataCriteria":"Boolean","canReturnOpenFolders":"boolean","disableCacheSync":"Boolean","useSimpleCriteriaLOD":"boolean","loadDataOnDemand":"Boolean","resultSize":"Integer","autoUpdateSiblingNodesOnDrag":"Boolean","linkDataSource":{"className":"DataSource"},"data":{"className":"TreeNode","isArray":true},"serverFilterFields":{"className":"String","isArray":true},"criteria":{"className":"Criteria"},"defaultNewNodesToRoot":"Boolean","updateCacheFromRequest":"Boolean","implicitCriteria":{"className":"Criteria"},"defaultIsFolder":"boolean","firstPositionValue":"Integer","rootNode":"Any","keepParentsOnFilter":"boolean","progressiveLoading":"boolean","discardParentlessNodes":"boolean","dataSource":{"className":"DataSource"}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
