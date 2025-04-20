import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface MenuEditProxyProps extends CanvasEditProxyProps {

/**
 * See {@link isc.MenuEditProxy.getInlineEditText() MenuEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.MenuEditProxy.setInlineEditText() MenuEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MenuEditProxy wraps the SmartClient widget class
 * {@link isc.MenuEditProxy MenuEditProxy} for React, allowing you to import
 * MenuEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class MenuEditProxy extends CanvasEditProxy {
    props: AsComponentXML<MenuEditProxyProps>;
}
