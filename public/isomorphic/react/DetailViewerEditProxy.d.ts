import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface DetailViewerEditProxyProps extends CanvasEditProxyProps {

/**
 * See {@link isc.DetailViewerEditProxy.dataEscapeChar DetailViewerEditProxy.dataEscapeChar}.
 */
dataEscapeChar?: string;

/**
 * See {@link isc.DetailViewerEditProxy.dataDisplaySeparatorChar DetailViewerEditProxy.dataDisplaySeparatorChar}.
 */
dataDisplaySeparatorChar?: string;

/**
 * See {@link isc.DetailViewerEditProxy.setInlineEditText() DetailViewerEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.DetailViewerEditProxy.dataSeparatorChar DetailViewerEditProxy.dataSeparatorChar}.
 */
dataSeparatorChar?: string;

/**
 * See {@link isc.DetailViewerEditProxy.getInlineEditText() DetailViewerEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DetailViewerEditProxy wraps the SmartClient widget class
 * {@link isc.DetailViewerEditProxy DetailViewerEditProxy} for React, allowing you to import
 * DetailViewerEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class DetailViewerEditProxy extends CanvasEditProxy {
    props: AsComponentXML<DetailViewerEditProxyProps>;
}
