import React from 'react';
import { LayoutEditProxy, LayoutEditProxyProps } from './LayoutEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface TileGridEditProxyProps extends LayoutEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TileGridEditProxy wraps the SmartClient widget class
 * {@link isc.TileGridEditProxy TileGridEditProxy} for React, allowing you to import
 * TileGridEditProxy for use in React JS and JSX.
 * @class
 * @extends LayoutEditProxy
 */
declare class TileGridEditProxy extends LayoutEditProxy {
    props: AsComponentXML<TileGridEditProxyProps>;
}
