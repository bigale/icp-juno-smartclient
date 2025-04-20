import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WebServiceProps {

/**
 * See {@link isc.WebService.getFetchDS() WebService.getFetchDS()}.
 */
getFetchDS?: Function;

/**
 * See {@link isc.WebService.serviceNamespace WebService.serviceNamespace}.
 */
serviceNamespace?: string;

/**
 * See {@link isc.WebService.getOutputHeaderSchema() WebService.getOutputHeaderSchema()}.
 */
getOutputHeaderSchema?: Function;

/**
 * See {@link isc.WebService.callOperation() WebService.callOperation()}.
 */
callOperation?: Function;

/**
 * See {@link isc.WebService.getHeaderData() WebService.getHeaderData()}.
 */
getHeaderData?: Function;

/**
 * See {@link isc.WebService.setLocation() WebService.setLocation()}.
 */
setLocation?: Function;

/**
 * See {@link isc.WebService.globalNamespaces WebService.globalNamespaces}.
 */
globalNamespaces?: Object;

/**
 * See {@link isc.WebService.getSchema() WebService.getSchema()}.
 */
getSchema?: Function;

/**
 * See {@link isc.WebService.getSoapMessage() WebService.getSoapMessage()}.
 */
getSoapMessage?: Function;

/**
 * See {@link isc.WebService.getOperationNames() WebService.getOperationNames()}.
 */
getOperationNames?: Function;

/**
 * See {@link isc.WebService.getInputDS() WebService.getInputDS()}.
 */
getInputDS?: Function;

/**
 * See {@link isc.WebService.getInputHeaderSchema() WebService.getInputHeaderSchema()}.
 */
getInputHeaderSchema?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WebService wraps the non-rendered SmartClient class
 * {@link isc.WebService WebService} for React, allowing you to import
 *  WebService for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WebService extends ILogicalComponent {
    props: AsComponentXML<WebServiceProps>;
}
