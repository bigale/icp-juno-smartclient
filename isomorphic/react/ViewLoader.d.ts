import React from 'react';
import { Label, LabelProps } from './Label';
import { AsComponentXML } from './core/ReactComponent';


declare interface ViewLoaderProps extends LabelProps {

/**
 * See {@link isc.ViewLoader.httpMethod ViewLoader.httpMethod}.
 */
httpMethod?: string;

/**
 * See {@link isc.ViewLoader.getView() ViewLoader.getView()}.
 */
getView?: Function;

/**
 * See {@link isc.ViewLoader.handleError() ViewLoader.handleError()}.
 */
handleError?: Function;

/**
 * See {@link isc.ViewLoader.setViewURL() ViewLoader.setViewURL()}.
 */
setViewURL?: Function;

/**
 * See {@link isc.ViewLoader.viewLoaded() ViewLoader.viewLoaded()}.
 */
viewLoaded?: Function;

/**
 * See {@link isc.ViewLoader.viewRPCProperties ViewLoader.viewRPCProperties}.
 */
viewRPCProperties?: RPCRequest;

/**
 * See {@link isc.ViewLoader.allowCaching ViewLoader.allowCaching}.
 */
allowCaching?: boolean;

/**
 * See {@link isc.ViewLoader.viewURLParams ViewLoader.viewURLParams}.
 */
viewURLParams?: Object;

/**
 * See {@link isc.ViewLoader.viewURL ViewLoader.viewURL}.
 */
viewURL?: string;

/**
 * See {@link isc.ViewLoader.loadingMessage ViewLoader.loadingMessage}.
 */
loadingMessage?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ViewLoader wraps the SmartClient widget class
 * {@link isc.ViewLoader ViewLoader} for React, allowing you to import
 * ViewLoader for use in React JS and JSX.
 * @class
 * @extends Label
 */
declare class ViewLoader extends Label {
    props: AsComponentXML<ViewLoaderProps>;
}
