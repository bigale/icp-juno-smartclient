import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface NativeScrollbarProps extends CanvasProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NativeScrollbar wraps the SmartClient widget class
 * {@link isc.NativeScrollbar NativeScrollbar} for React, allowing you to import
 * NativeScrollbar for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class NativeScrollbar extends Canvas {
    props: AsComponentXML<NativeScrollbarProps>;
}
