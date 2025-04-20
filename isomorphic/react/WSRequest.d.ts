import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WSRequestProps {

/**
 * See {@link isc.WSRequest.xmlNamespaces WSRequest.xmlNamespaces}.
 */
xmlNamespaces?: Object;

/**
 * See {@link isc.WSRequest.wsOperation WSRequest.wsOperation}.
 */
wsOperation?: string;

/**
 * See {@link isc.WSRequest.data WSRequest.data}.
 */
data?: any;

/**
 * See {@link isc.WSRequest.useFlatFields WSRequest.useFlatFields}.
 */
useFlatFields?: boolean;

/**
 * See {@link isc.WSRequest.headerData WSRequest.headerData}.
 */
headerData?: any;

/**
 * See {@link isc.WSRequest.xmlResult WSRequest.xmlResult}.
 */
xmlResult?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WSRequest wraps the SmartClient object
 * {@link isc.WSRequest WSRequest} for React, allowing you to import
 * WSRequest for use in React JS and JSX.
 * @class
 */
declare class WSRequest extends ILogicalComponent {
    props: AsComponentXML<WSRequestProps>;
}
