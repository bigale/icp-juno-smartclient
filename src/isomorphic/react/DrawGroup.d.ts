import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawGroupProps extends DrawItemProps {

/**
 * See {@link isc.DrawGroup.scaleBy() DrawGroup.scaleBy()}.
 */
scaleBy?: Function;

/**
 * See {@link isc.DrawGroup.scaleTo() DrawGroup.scaleTo()}.
 */
scaleTo?: Function;

/**
 * See {@link isc.DrawGroup.moveBy() DrawGroup.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawGroup.width DrawGroup.width}.
 */
width?: number;

/**
 * See {@link isc.DrawGroup.drawItems DrawGroup.drawItems}.
 */
drawItems?: DrawItem[];

/**
 * See {@link isc.DrawGroup.erase() DrawGroup.erase()}.
 */
erase?: Function;

/**
 * See {@link isc.DrawGroup.knobs DrawGroup.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawGroup.dragMove() DrawGroup.dragMove()}.
 */
dragMove?: Function;

/**
 * See {@link isc.DrawGroup.getBoundingBox() DrawGroup.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawGroup.mouseMove() DrawGroup.mouseMove()}.
 */
mouseMove?: Function;

/**
 * See {@link isc.DrawGroup.click() DrawGroup.click()}.
 */
click?: Function;

/**
 * See {@link isc.DrawGroup.showGroupRectOutline DrawGroup.showGroupRectOutline}.
 */
showGroupRectOutline?: boolean;

/**
 * See {@link isc.DrawGroup.moveItemsWithGroup DrawGroup.moveItemsWithGroup}.
 */
moveItemsWithGroup?: boolean;

/**
 * See {@link isc.DrawGroup.groupRectOutlineProperties DrawGroup.groupRectOutlineProperties}.
 */
groupRectOutlineProperties?: DrawRect;

/**
 * See {@link isc.DrawGroup.useGroupRect DrawGroup.useGroupRect}.
 */
useGroupRect?: boolean;

/**
 * See {@link isc.DrawGroup.setHeight() DrawGroup.setHeight()}.
 */
setHeight?: Function;

/**
 * See {@link isc.DrawGroup.mouseUp() DrawGroup.mouseUp()}.
 */
mouseUp?: Function;

/**
 * See {@link isc.DrawGroup.setTop() DrawGroup.setTop()}.
 */
setTop?: Function;

/**
 * See {@link isc.DrawGroup.setWidth() DrawGroup.setWidth()}.
 */
setWidth?: Function;

/**
 * See {@link isc.DrawGroup.getCenter() DrawGroup.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawGroup.rotateBy() DrawGroup.rotateBy()}.
 */
rotateBy?: Function;

/**
 * See {@link isc.DrawGroup.left DrawGroup.left}.
 */
left?: number;

/**
 * See {@link isc.DrawGroup.mouseOver() DrawGroup.mouseOver()}.
 */
mouseOver?: Function;

/**
 * See {@link isc.DrawGroup.getGroupRect() DrawGroup.getGroupRect()}.
 */
getGroupRect?: Function;

/**
 * See {@link isc.DrawGroup.moveTo() DrawGroup.moveTo()}.
 */
moveTo?: Function;

/**
 * See {@link isc.DrawGroup.dragStart() DrawGroup.dragStart()}.
 */
dragStart?: Function;

/**
 * See {@link isc.DrawGroup.mouseDown() DrawGroup.mouseDown()}.
 */
mouseDown?: Function;

/**
 * See {@link isc.DrawGroup.height DrawGroup.height}.
 */
height?: number;

/**
 * See {@link isc.DrawGroup.setLeft() DrawGroup.setLeft()}.
 */
setLeft?: Function;

/**
 * See {@link isc.DrawGroup.rotateTo() DrawGroup.rotateTo()}.
 */
rotateTo?: Function;

/**
 * See {@link isc.DrawGroup.mouseOut() DrawGroup.mouseOut()}.
 */
mouseOut?: Function;

/**
 * See {@link isc.DrawGroup.top DrawGroup.top}.
 */
top?: number;

/**
 * See {@link isc.DrawGroup.dragStop() DrawGroup.dragStop()}.
 */
dragStop?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawGroup wraps the SmartClient widget class
 * {@link isc.DrawGroup DrawGroup} for React, allowing you to import
 * DrawGroup for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawGroup extends DrawItem {
    props: AsComponentXML<DrawGroupProps>;
}
