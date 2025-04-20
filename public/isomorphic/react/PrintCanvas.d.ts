import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface PrintCanvasProps extends CanvasProps {

/**
 * See {@link isc.PrintCanvas.setHTML() PrintCanvas.setHTML()}.
 */
setHTML?: Function;

/**
 * See {@link isc.PrintCanvas.externalStylesheet PrintCanvas.externalStylesheet}.
 */
externalStylesheet?: string;

/**
 * See {@link isc.PrintCanvas.printFrameURL PrintCanvas.printFrameURL}.
 */
printFrameURL?: string;

/**
 * See {@link isc.PrintCanvas.print() PrintCanvas.print()}.
 */
print?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PrintCanvas wraps the SmartClient widget class
 * {@link isc.PrintCanvas PrintCanvas} for React, allowing you to import
 * PrintCanvas for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class PrintCanvas extends Canvas {
    props: AsComponentXML<PrintCanvasProps>;
}
