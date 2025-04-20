import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface TabSetEditProxyProps extends CanvasEditProxyProps {

/**
 * See {@link isc.TabSetEditProxy.getInlineEditText() TabSetEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.TabSetEditProxy.setInlineEditText() TabSetEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TabSetEditProxy wraps the SmartClient widget class
 * {@link isc.TabSetEditProxy TabSetEditProxy} for React, allowing you to import
 * TabSetEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class TabSetEditProxy extends CanvasEditProxy {
    props: AsComponentXML<TabSetEditProxyProps>;
}
