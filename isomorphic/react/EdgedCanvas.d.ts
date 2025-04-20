import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface EdgedCanvasProps extends CanvasProps {

/**
 * See {@link isc.EdgedCanvas.edgeRight EdgedCanvas.edgeRight}.
 */
edgeRight?: number;

/**
 * See {@link isc.EdgedCanvas.edgeOffsetBottom EdgedCanvas.edgeOffsetBottom}.
 */
edgeOffsetBottom?: number;

/**
 * See {@link isc.EdgedCanvas.edgeOffsetRight EdgedCanvas.edgeOffsetRight}.
 */
edgeOffsetRight?: number;

/**
 * See {@link isc.EdgedCanvas.edgeOffset EdgedCanvas.edgeOffset}.
 */
edgeOffset?: number;

/**
 * See {@link isc.EdgedCanvas.showCenter EdgedCanvas.showCenter}.
 */
showCenter?: boolean;

/**
 * See {@link isc.EdgedCanvas.edgeLeft EdgedCanvas.edgeLeft}.
 */
edgeLeft?: number;

/**
 * See {@link isc.EdgedCanvas.edgeBottom EdgedCanvas.edgeBottom}.
 */
edgeBottom?: number;

/**
 * See {@link isc.EdgedCanvas.centerBackgroundColor EdgedCanvas.centerBackgroundColor}.
 */
centerBackgroundColor?: string;

/**
 * See {@link isc.EdgedCanvas.edgeOffsetTop EdgedCanvas.edgeOffsetTop}.
 */
edgeOffsetTop?: number;

/**
 * See {@link isc.EdgedCanvas.customEdges EdgedCanvas.customEdges}.
 */
customEdges?: string[];

/**
 * See {@link isc.EdgedCanvas.edgeStyleName EdgedCanvas.edgeStyleName}.
 */
edgeStyleName?: string;

/**
 * See {@link isc.EdgedCanvas.edgeColor EdgedCanvas.edgeColor}.
 */
edgeColor?: string;

/**
 * See {@link isc.EdgedCanvas.edgeImage EdgedCanvas.edgeImage}.
 */
edgeImage?: string;

/**
 * See {@link isc.EdgedCanvas.addEdgeStyleSuffix EdgedCanvas.addEdgeStyleSuffix}.
 */
addEdgeStyleSuffix?: boolean;

/**
 * See {@link isc.EdgedCanvas.edgeSize EdgedCanvas.edgeSize}.
 */
edgeSize?: number;

/**
 * See {@link isc.EdgedCanvas.edgeTop EdgedCanvas.edgeTop}.
 */
edgeTop?: number;

/**
 * See {@link isc.EdgedCanvas.edgeOffsetLeft EdgedCanvas.edgeOffsetLeft}.
 */
edgeOffsetLeft?: number;

/**
 * See {@link isc.EdgedCanvas.skinImgDir EdgedCanvas.skinImgDir}.
 */
skinImgDir?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EdgedCanvas wraps the SmartClient widget class
 * {@link isc.EdgedCanvas EdgedCanvas} for React, allowing you to import
 * EdgedCanvas for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class EdgedCanvas extends Canvas {
    props: AsComponentXML<EdgedCanvasProps>;
}
