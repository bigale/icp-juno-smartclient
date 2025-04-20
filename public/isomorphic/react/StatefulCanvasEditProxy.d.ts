import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface StatefulCanvasEditProxyProps extends CanvasEditProxyProps {

/**
 * See {@link isc.StatefulCanvasEditProxy.setInlineEditText() StatefulCanvasEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.StatefulCanvasEditProxy.getInlineEditText() StatefulCanvasEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StatefulCanvasEditProxy wraps the SmartClient widget class
 * {@link isc.StatefulCanvasEditProxy StatefulCanvasEditProxy} for React, allowing you to import
 * StatefulCanvasEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class StatefulCanvasEditProxy extends CanvasEditProxy {
    props: AsComponentXML<StatefulCanvasEditProxyProps>;
}
