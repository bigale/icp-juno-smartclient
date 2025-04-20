import React from 'react';
import { LayoutEditProxy, LayoutEditProxyProps } from './LayoutEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface HeaderEditProxyProps extends LayoutEditProxyProps {

/**
 * See {@link isc.HeaderEditProxy.setInlineEditText() HeaderEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.HeaderEditProxy.getInlineEditText() HeaderEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HeaderEditProxy wraps the SmartClient widget class
 * {@link isc.HeaderEditProxy HeaderEditProxy} for React, allowing you to import
 * HeaderEditProxy for use in React JS and JSX.
 * @class
 * @extends LayoutEditProxy
 */
declare class HeaderEditProxy extends LayoutEditProxy {
    props: AsComponentXML<HeaderEditProxyProps>;
}
