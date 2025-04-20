import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface BrowserPluginProps extends CanvasProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BrowserPlugin wraps the SmartClient widget class
 * {@link isc.BrowserPlugin BrowserPlugin} for React, allowing you to import
 * BrowserPlugin for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class BrowserPlugin extends Canvas {
    props: AsComponentXML<BrowserPluginProps>;
}
