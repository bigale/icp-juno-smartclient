import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawRectProps extends DrawItemProps {

/**
 * See {@link isc.DrawRect.isPointInPath() DrawRect.isPointInPath()}.
 */
isPointInPath?: Function;

/**
 * See {@link isc.DrawRect.top DrawRect.top}.
 */
top?: number;

/**
 * See {@link isc.DrawRect.moveTo() DrawRect.moveTo()}.
 */
moveTo?: Function;

/**
 * See {@link isc.DrawRect.getBoundingBox() DrawRect.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawRect.setRect() DrawRect.setRect()}.
 */
setRect?: Function;

/**
 * See {@link isc.DrawRect.getCenter() DrawRect.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawRect.height DrawRect.height}.
 */
height?: number;

/**
 * See {@link isc.DrawRect.titleRotationMode DrawRect.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawRect.lineCap DrawRect.lineCap}.
 */
lineCap?: string;

/**
 * See {@link isc.DrawRect.setHeight() DrawRect.setHeight()}.
 */
setHeight?: Function;

/**
 * See {@link isc.DrawRect.resizeTo() DrawRect.resizeTo()}.
 */
resizeTo?: Function;

/**
 * See {@link isc.DrawRect.setCenter() DrawRect.setCenter()}.
 */
setCenter?: Function;

/**
 * See {@link isc.DrawRect.setTop() DrawRect.setTop()}.
 */
setTop?: Function;

/**
 * See {@link isc.DrawRect.left DrawRect.left}.
 */
left?: number;

/**
 * See {@link isc.DrawRect.moveBy() DrawRect.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawRect.setLeft() DrawRect.setLeft()}.
 */
setLeft?: Function;

/**
 * See {@link isc.DrawRect.resizeBy() DrawRect.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.DrawRect.rounding DrawRect.rounding}.
 */
rounding?: number;

/**
 * See {@link isc.DrawRect.setWidth() DrawRect.setWidth()}.
 */
setWidth?: Function;

/**
 * See {@link isc.DrawRect.setRounding() DrawRect.setRounding()}.
 */
setRounding?: Function;

/**
 * See {@link isc.DrawRect.width DrawRect.width}.
 */
width?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawRect wraps the SmartClient widget class
 * {@link isc.DrawRect DrawRect} for React, allowing you to import
 * DrawRect for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawRect extends DrawItem {
    props: AsComponentXML<DrawRectProps>;
}
