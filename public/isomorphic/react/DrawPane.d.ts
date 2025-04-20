import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawPaneProps extends CanvasProps {

/**
 * See {@link isc.DrawPane.zoom() DrawPane.zoom()}.
 */
zoom?: Function;

/**
 * See {@link isc.DrawPane.getDrawingX() DrawPane.getDrawingX()}.
 */
getDrawingX?: Function;

/**
 * See {@link isc.DrawPane.destroyItems() DrawPane.destroyItems()}.
 */
destroyItems?: Function;

/**
 * See {@link isc.DrawPane.refreshNow() DrawPane.refreshNow()}.
 */
refreshNow?: Function;

/**
 * See {@link isc.DrawPane.drawingHeight DrawPane.drawingHeight}.
 */
drawingHeight?: number;

/**
 * See {@link isc.DrawPane.addDrawItem() DrawPane.addDrawItem()}.
 */
addDrawItem?: Function;

/**
 * See {@link isc.DrawPane.zoomLevel DrawPane.zoomLevel}.
 */
zoomLevel?: number;

/**
 * See {@link isc.DrawPane.getPrintHTML() DrawPane.getPrintHTML()}.
 */
getPrintHTML?: Function;

/**
 * See {@link isc.DrawPane.addGradient() DrawPane.addGradient()}.
 */
addGradient?: Function;

/**
 * See {@link isc.DrawPane.getGradient() DrawPane.getGradient()}.
 */
getGradient?: Function;

/**
 * See {@link isc.DrawPane.editProxyConstructor DrawPane.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.DrawPane.getSvgString() DrawPane.getSvgString()}.
 */
getSvgString?: Function;

/**
 * See {@link isc.DrawPane.createLinearGradient() DrawPane.createLinearGradient()}.
 */
createLinearGradient?: Function;

/**
 * See {@link isc.DrawPane.getBitmap() DrawPane.getBitmap()}.
 */
getBitmap?: Function;

/**
 * See {@link isc.DrawPane.drawingType DrawPane.drawingType}.
 */
drawingType?: string;

/**
 * See {@link isc.DrawPane.gradients DrawPane.gradients}.
 */
gradients?: Gradient[];

/**
 * See {@link isc.DrawPane.setRotation() DrawPane.setRotation()}.
 */
setRotation?: Function;

/**
 * See {@link isc.DrawPane.canDragScroll DrawPane.canDragScroll}.
 */
canDragScroll?: boolean;

/**
 * See {@link isc.DrawPane.getDataURL() DrawPane.getDataURL()}.
 */
getDataURL?: Function;

/**
 * See {@link isc.DrawPane.drawItems DrawPane.drawItems}.
 */
drawItems?: DrawItem[];

/**
 * See {@link isc.DrawPane.drawEnd() DrawPane.drawEnd()}.
 */
drawEnd?: Function;

/**
 * See {@link isc.DrawPane.rotate() DrawPane.rotate()}.
 */
rotate?: Function;

/**
 * See {@link isc.DrawPane.erase() DrawPane.erase()}.
 */
erase?: Function;

/**
 * See {@link isc.DrawPane.getDrawingPoint() DrawPane.getDrawingPoint()}.
 */
getDrawingPoint?: Function;

/**
 * See {@link isc.DrawPane.rotation DrawPane.rotation}.
 */
rotation?: number;

/**
 * See {@link isc.DrawPane.drawStart() DrawPane.drawStart()}.
 */
drawStart?: Function;

/**
 * See {@link isc.DrawPane.getDrawingY() DrawPane.getDrawingY()}.
 */
getDrawingY?: Function;

/**
 * See {@link isc.DrawPane.createRadialGradient() DrawPane.createRadialGradient()}.
 */
createRadialGradient?: Function;

/**
 * See {@link isc.DrawPane.setZoomLevel() DrawPane.setZoomLevel()}.
 */
setZoomLevel?: Function;

/**
 * See {@link isc.DrawPane.getViewPortRectInViewBoxCoords() DrawPane.getViewPortRectInViewBoxCoords()}.
 */
getViewPortRectInViewBoxCoords?: Function;

/**
 * See {@link isc.DrawPane.createSimpleGradient() DrawPane.createSimpleGradient()}.
 */
createSimpleGradient?: Function;

/**
 * See {@link isc.DrawPane.drawingWidth DrawPane.drawingWidth}.
 */
drawingWidth?: number;

/**
 * See {@link isc.DrawPane.removeGradient() DrawPane.removeGradient()}.
 */
removeGradient?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawPane wraps the SmartClient widget class
 * {@link isc.DrawPane DrawPane} for React, allowing you to import
 * DrawPane for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class DrawPane extends Canvas {
    props: AsComponentXML<DrawPaneProps>;
}
