import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface LayoutEditProxyProps extends CanvasEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LayoutEditProxy wraps the SmartClient widget class
 * {@link isc.LayoutEditProxy LayoutEditProxy} for React, allowing you to import
 * LayoutEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class LayoutEditProxy extends CanvasEditProxy {
    props: AsComponentXML<LayoutEditProxyProps>;
}
