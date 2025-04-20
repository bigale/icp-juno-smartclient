import React from 'react';
import { LayoutEditProxy, LayoutEditProxyProps } from './LayoutEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowEditProxyProps extends LayoutEditProxyProps {

/**
 * See {@link isc.WindowEditProxy.setInlineEditText() WindowEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.WindowEditProxy.getInlineEditText() WindowEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowEditProxy wraps the SmartClient widget class
 * {@link isc.WindowEditProxy WindowEditProxy} for React, allowing you to import
 * WindowEditProxy for use in React JS and JSX.
 * @class
 * @extends LayoutEditProxy
 */
declare class WindowEditProxy extends LayoutEditProxy {
    props: AsComponentXML<WindowEditProxyProps>;
}
