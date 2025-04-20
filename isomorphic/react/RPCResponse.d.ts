import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RPCResponseProps {

/**
 * See {@link isc.RPCResponse.clientContext RPCResponse.clientContext}.
 */
clientContext?: Object;

/**
 * See {@link isc.RPCResponse.httpResponseText RPCResponse.httpResponseText}.
 */
httpResponseText?: string;

/**
 * See {@link isc.RPCResponse.status RPCResponse.status}.
 */
status?: number;

/**
 * See {@link isc.RPCResponse.httpHeaders RPCResponse.httpHeaders}.
 */
httpHeaders?: Object;

/**
 * See {@link isc.RPCResponse.data RPCResponse.data}.
 */
data?: string | Object;

/**
 * See {@link isc.RPCResponse.httpResponseCode RPCResponse.httpResponseCode}.
 */
httpResponseCode?: number;

/**
 * See {@link isc.RPCResponse.transactionNum RPCResponse.transactionNum}.
 */
transactionNum?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RPCResponse wraps the non-rendered SmartClient class
 * {@link isc.RPCResponse RPCResponse} for React, allowing you to import
 *  RPCResponse for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class RPCResponse extends ILogicalComponent {
    props: AsComponentXML<RPCResponseProps>;
}
