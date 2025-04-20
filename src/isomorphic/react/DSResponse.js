import { RPCResponse } from './RPCResponse';

export class DSResponse extends RPCResponse {
    static ISC_CLASS_NAME = 'DSResponse';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"offlineTimestamp":"number","fromOfflineCache":"boolean","startRow":"number","data":{"className":"Record","isArray":true},"endRow":"number","clientContext":{"className":"Object"},"queueStatus":"int","status":"int","totalRows":"number","progressiveLoading":"boolean","errors":{"className":"Object"},"httpHeaders":{"className":"Object"},"invalidateCache":"boolean"};

}
