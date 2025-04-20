import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RPCRequestProps {

/**
 * See {@link isc.RPCRequest.suppressAutoDraw RPCRequest.suppressAutoDraw}.
 */
suppressAutoDraw?: boolean;

/**
 * See {@link isc.RPCRequest.isBackgroundRequest RPCRequest.isBackgroundRequest}.
 */
isBackgroundRequest?: boolean;

/**
 * See {@link isc.RPCRequest.useSimpleHttp RPCRequest.useSimpleHttp}.
 */
useSimpleHttp?: boolean;

/**
 * See {@link isc.RPCRequest.downloadResult RPCRequest.downloadResult}.
 */
downloadResult?: boolean;

/**
 * See {@link isc.RPCRequest.downloadToNewWindow RPCRequest.downloadToNewWindow}.
 */
downloadToNewWindow?: boolean;

/**
 * See {@link isc.RPCRequest.serverOutputAsString RPCRequest.serverOutputAsString}.
 */
serverOutputAsString?: boolean;

/**
 * See {@link isc.RPCRequest.useCursorTracker RPCRequest.useCursorTracker}.
 */
useCursorTracker?: boolean;

/**
 * See {@link isc.RPCRequest.httpHeaders RPCRequest.httpHeaders}.
 */
httpHeaders?: Object;

/**
 * See {@link isc.RPCRequest.bypassCache RPCRequest.bypassCache}.
 */
bypassCache?: boolean;

/**
 * See {@link isc.RPCRequest.paramsOnly RPCRequest.paramsOnly}.
 */
paramsOnly?: boolean;

/**
 * See {@link isc.RPCRequest.httpProxyURL RPCRequest.httpProxyURL}.
 */
httpProxyURL?: string;

/**
 * See {@link isc.RPCRequest.promptCursor RPCRequest.promptCursor}.
 */
promptCursor?: string;

/**
 * See {@link isc.RPCRequest.ignoreTimeout RPCRequest.ignoreTimeout}.
 */
ignoreTimeout?: boolean;

/**
 * See {@link isc.RPCRequest.allowIE9Leak RPCRequest.allowIE9Leak}.
 */
allowIE9Leak?: boolean;

/**
 * See {@link isc.RPCRequest.sendNoQueue RPCRequest.sendNoQueue}.
 */
sendNoQueue?: boolean;

/**
 * See {@link isc.RPCRequest.contentType RPCRequest.contentType}.
 */
contentType?: string;

/**
 * See {@link isc.RPCRequest.omitNullMapValuesInResponse RPCRequest.omitNullMapValuesInResponse}.
 */
omitNullMapValuesInResponse?: boolean;

/**
 * See {@link isc.RPCRequest.useXmlHttpRequest RPCRequest.useXmlHttpRequest}.
 */
useXmlHttpRequest?: boolean;

/**
 * See {@link isc.RPCRequest.willHandleError RPCRequest.willHandleError}.
 */
willHandleError?: boolean;

/**
 * See {@link isc.RPCRequest.transport RPCRequest.transport}.
 */
transport?: string;

/**
 * See {@link isc.RPCRequest.actionURL RPCRequest.actionURL}.
 */
actionURL?: string;

/**
 * See {@link isc.RPCRequest.promptStyle RPCRequest.promptStyle}.
 */
promptStyle?: string;

/**
 * See {@link isc.RPCRequest.promptDelay RPCRequest.promptDelay}.
 */
promptDelay?: number;

/**
 * See {@link isc.RPCRequest.showPrompt RPCRequest.showPrompt}.
 */
showPrompt?: boolean;

/**
 * See {@link isc.RPCRequest.callbackParam RPCRequest.callbackParam}.
 */
callbackParam?: string;

/**
 * See {@link isc.RPCRequest.containsCredentials RPCRequest.containsCredentials}.
 */
containsCredentials?: boolean;

/**
 * See {@link isc.RPCRequest.useHttpProxy RPCRequest.useHttpProxy}.
 */
useHttpProxy?: boolean;

/**
 * See {@link isc.RPCRequest.evalResult RPCRequest.evalResult}.
 */
evalResult?: boolean;

/**
 * See {@link isc.RPCRequest.downloadCallback() RPCRequest.downloadCallback()}.
 */
downloadCallback?: Function;

/**
 * See {@link isc.RPCRequest.httpMethod RPCRequest.httpMethod}.
 */
httpMethod?: string;

/**
 * See {@link isc.RPCRequest.params RPCRequest.params}.
 */
params?: Object;

/**
 * See {@link isc.RPCRequest.prompt RPCRequest.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.RPCRequest.data RPCRequest.data}.
 */
data?: string | Record | Object;

/**
 * See {@link isc.RPCRequest.reportDownloadErrorsAsDocuments RPCRequest.reportDownloadErrorsAsDocuments}.
 */
reportDownloadErrorsAsDocuments?: boolean;

/**
 * See {@link isc.RPCRequest.withCredentials RPCRequest.withCredentials}.
 */
withCredentials?: boolean;

/**
 * See {@link isc.RPCRequest.timeout RPCRequest.timeout}.
 */
timeout?: number;

/**
 * See {@link isc.RPCRequest.mockMode RPCRequest.mockMode}.
 */
mockMode?: boolean;

/**
 * See {@link isc.RPCRequest.evalVars RPCRequest.evalVars}.
 */
evalVars?: Object;

/**
 * See {@link isc.RPCRequest.clientContext RPCRequest.clientContext}.
 */
clientContext?: Object;

/**
 * See {@link isc.RPCRequest.useStrictJSON RPCRequest.useStrictJSON}.
 */
useStrictJSON?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RPCRequest wraps the SmartClient object
 * {@link isc.RPCRequest RPCRequest} for React, allowing you to import
 * RPCRequest for use in React JS and JSX.
 * @class
 */
declare class RPCRequest extends ILogicalComponent {
    props: AsComponentXML<RPCRequestProps>;
}
