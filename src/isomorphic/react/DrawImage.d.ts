import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawImageProps extends DrawItemProps {

/**
 * See {@link isc.DrawImage.top DrawImage.top}.
 */
top?: number;

/**
 * See {@link isc.DrawImage.setSrc() DrawImage.setSrc()}.
 */
setSrc?: Function;

/**
 * See {@link isc.DrawImage.setRect() DrawImage.setRect()}.
 */
setRect?: Function;

/**
 * See {@link isc.DrawImage.setTop() DrawImage.setTop()}.
 */
setTop?: Function;

/**
 * See {@link isc.DrawImage.src DrawImage.src}.
 */
src?: string;

/**
 * See {@link isc.DrawImage.setHeight() DrawImage.setHeight()}.
 */
setHeight?: Function;

/**
 * See {@link isc.DrawImage.title DrawImage.title}.
 */
title?: string;

/**
 * See {@link isc.DrawImage.moveBy() DrawImage.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawImage.height DrawImage.height}.
 */
height?: number;

/**
 * See {@link isc.DrawImage.width DrawImage.width}.
 */
width?: number;

/**
 * See {@link isc.DrawImage.getBoundingBox() DrawImage.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawImage.useMatrixFilter DrawImage.useMatrixFilter}.
 */
useMatrixFilter?: boolean;

/**
 * See {@link isc.DrawImage.moveTo() DrawImage.moveTo()}.
 */
moveTo?: Function;

/**
 * See {@link isc.DrawImage.setLeft() DrawImage.setLeft()}.
 */
setLeft?: Function;

/**
 * See {@link isc.DrawImage.left DrawImage.left}.
 */
left?: number;

/**
 * See {@link isc.DrawImage.setWidth() DrawImage.setWidth()}.
 */
setWidth?: Function;

/**
 * See {@link isc.DrawImage.getCenter() DrawImage.getCenter()}.
 */
getCenter?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawImage wraps the SmartClient widget class
 * {@link isc.DrawImage DrawImage} for React, allowing you to import
 * DrawImage for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawImage extends DrawItem {
    props: AsComponentXML<DrawImageProps>;
}
