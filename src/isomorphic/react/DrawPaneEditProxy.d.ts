import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawPaneEditProxyProps extends CanvasEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawPaneEditProxy wraps the SmartClient widget class
 * {@link isc.DrawPaneEditProxy DrawPaneEditProxy} for React, allowing you to import
 * DrawPaneEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class DrawPaneEditProxy extends CanvasEditProxy {
    props: AsComponentXML<DrawPaneEditProxyProps>;
}
