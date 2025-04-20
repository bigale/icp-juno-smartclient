import { RPCRequest } from './RPCRequest';

export class DSRequest extends RPCRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"exportToClient":"Boolean","endRow":"number","startRow":"number","exportShowHeaderSpanTitles":"Boolean","oldValues":{"className":"Record"},"groupBy":{"className":"String","isArray":true},"keepParentsOnFilter":"Boolean","clientContext":{"className":"Object"},"exportNumbersAsFormattedString":"boolean","arrayCriteriaForceExact":"Boolean","forceOuterJoins":"Boolean","useFlatFields":"Boolean","exportImageQuality":"float","exportRawValues":"Boolean","useStrictJSON":"boolean","resultSet":{"className":"ResultSet"},"exportHeaderless":"Boolean","exportFields":{"className":"String","isArray":true},"parentNode":{"className":"TreeNode"},"headerData":{"className":"Object"},"sortBy":["FieldName",{"className":"FieldName","isArray":true},{"className":"SortSpecifier","isArray":true}],"pendingAdd":"boolean","resultTree":{"className":"ResultTree"},"streamResults":"boolean","data":[{"className":"Object"},{"className":"Object","isArray":true}],"exportDatesAsFormattedString":"boolean","exportResults":"Boolean","exportData":{"className":"Record","isArray":true},"generateRelatedUpdates":"boolean","shouldUseCache":"boolean","multiInsertBatchSize":"Integer","callback":{"className":"DSCallback"},"exportToFilesystem":"Boolean","exportValueFields":"boolean","progressiveLoading":"boolean","useFlatHeaderFields":"boolean","exportStreaming":"boolean","fieldValueExpressions":{"className":"Object"}};

}
