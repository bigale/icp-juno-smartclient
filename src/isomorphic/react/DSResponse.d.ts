import React from 'react';
import { RPCResponse, RPCResponseProps } from './RPCResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSResponseProps extends RPCResponseProps {

/**
 * See {@link isc.DSResponse.offlineTimestamp DSResponse.offlineTimestamp}.
 */
offlineTimestamp?: number;

/**
 * See {@link isc.DSResponse.dataSource DSResponse.dataSource}.
 */
dataSource?: string;

/**
 * See {@link isc.DSResponse.fromOfflineCache DSResponse.fromOfflineCache}.
 */
fromOfflineCache?: boolean;

/**
 * See {@link isc.DSResponse.startRow DSResponse.startRow}.
 */
startRow?: number;

/**
 * See {@link isc.DSResponse.data DSResponse.data}.
 */
data?: Record[];

/**
 * See {@link isc.DSResponse.estimatedTotalRows DSResponse.estimatedTotalRows}.
 */
estimatedTotalRows?: string;

/**
 * See {@link isc.DSResponse.endRow DSResponse.endRow}.
 */
endRow?: number;

/**
 * See {@link isc.DSResponse.clientContext DSResponse.clientContext}.
 */
clientContext?: Object;

/**
 * See {@link isc.DSResponse.queueStatus DSResponse.queueStatus}.
 */
queueStatus?: number;

/**
 * See {@link isc.DSResponse.status DSResponse.status}.
 */
status?: number;

/**
 * See {@link isc.DSResponse.totalRows DSResponse.totalRows}.
 */
totalRows?: number;

/**
 * See {@link isc.DSResponse.progressiveLoading DSResponse.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.DSResponse.errors DSResponse.errors}.
 */
errors?: Object;

/**
 * See {@link isc.DSResponse.httpHeaders DSResponse.httpHeaders}.
 */
httpHeaders?: Object;

/**
 * See {@link isc.DSResponse.invalidateCache DSResponse.invalidateCache}.
 */
invalidateCache?: boolean;

/**
 * See {@link isc.DSResponse.operationType DSResponse.operationType}.
 */
operationType?: string;

/**
 * See {@link isc.DSResponse.operationId DSResponse.operationId}.
 */
operationId?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSResponse wraps the SmartClient widget class
 * {@link isc.DSResponse DSResponse} for React, allowing you to import
 * DSResponse for use in React JS and JSX.
 * @class
 * @extends RPCResponse
 */
declare class DSResponse extends RPCResponse {
    props: AsComponentXML<DSResponseProps>;
}
