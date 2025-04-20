import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawOvalProps extends DrawItemProps {

/**
 * See {@link isc.DrawOval.titleRotationMode DrawOval.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawOval.getCenter() DrawOval.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawOval.setWidth() DrawOval.setWidth()}.
 */
setWidth?: Function;

/**
 * See {@link isc.DrawOval.setRadius() DrawOval.setRadius()}.
 */
setRadius?: Function;

/**
 * See {@link isc.DrawOval.moveBy() DrawOval.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawOval.getBoundingBox() DrawOval.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawOval.resizeTo() DrawOval.resizeTo()}.
 */
resizeTo?: Function;

/**
 * See {@link isc.DrawOval.top DrawOval.top}.
 */
top?: number;

/**
 * See {@link isc.DrawOval.radius DrawOval.radius}.
 */
radius?: number;

/**
 * See {@link isc.DrawOval.setHeight() DrawOval.setHeight()}.
 */
setHeight?: Function;

/**
 * See {@link isc.DrawOval.resizeBy() DrawOval.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.DrawOval.setOval() DrawOval.setOval()}.
 */
setOval?: Function;

/**
 * See {@link isc.DrawOval.getRadiusX() DrawOval.getRadiusX()}.
 */
getRadiusX?: Function;

/**
 * See {@link isc.DrawOval.left DrawOval.left}.
 */
left?: number;

/**
 * See {@link isc.DrawOval.setRadii() DrawOval.setRadii()}.
 */
setRadii?: Function;

/**
 * See {@link isc.DrawOval.setCenterPoint() DrawOval.setCenterPoint()}.
 */
setCenterPoint?: Function;

/**
 * See {@link isc.DrawOval.moveTo() DrawOval.moveTo()}.
 */
moveTo?: Function;

/**
 * See {@link isc.DrawOval.getRadiusY() DrawOval.getRadiusY()}.
 */
getRadiusY?: Function;

/**
 * See {@link isc.DrawOval.height DrawOval.height}.
 */
height?: number;

/**
 * See {@link isc.DrawOval.setLeft() DrawOval.setLeft()}.
 */
setLeft?: Function;

/**
 * See {@link isc.DrawOval.centerPoint DrawOval.centerPoint}.
 */
centerPoint?: Point;

/**
 * See {@link isc.DrawOval.width DrawOval.width}.
 */
width?: number;

/**
 * See {@link isc.DrawOval.setTop() DrawOval.setTop()}.
 */
setTop?: Function;

/**
 * See {@link isc.DrawOval.setRect() DrawOval.setRect()}.
 */
setRect?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawOval wraps the SmartClient widget class
 * {@link isc.DrawOval DrawOval} for React, allowing you to import
 * DrawOval for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawOval extends DrawItem {
    props: AsComponentXML<DrawOvalProps>;
}
