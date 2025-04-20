import React from 'react';
import { IBaseComponent } from './core/IBaseComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawItemProps {

/**
 * See {@link isc.DrawItem.scaleBy() DrawItem.scaleBy()}.
 */
scaleBy?: Function;

/**
 * See {@link isc.DrawItem.setStartArrow() DrawItem.setStartArrow()}.
 */
setStartArrow?: Function;

/**
 * See {@link isc.DrawItem.showAllKnobs() DrawItem.showAllKnobs()}.
 */
showAllKnobs?: Function;

/**
 * See {@link isc.DrawItem.resizeViaLocalTransformOnly DrawItem.resizeViaLocalTransformOnly}.
 */
resizeViaLocalTransformOnly?: boolean;

/**
 * See {@link isc.DrawItem.titleAutoFitRotationMode DrawItem.titleAutoFitRotationMode}.
 */
titleAutoFitRotationMode?: string;

/**
 * See {@link isc.DrawItem.setMoveKnobOffset() DrawItem.setMoveKnobOffset()}.
 */
setMoveKnobOffset?: Function;

/**
 * See {@link isc.DrawItem.knobs DrawItem.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawItem.setLineWidth() DrawItem.setLineWidth()}.
 */
setLineWidth?: Function;

/**
 * See {@link isc.DrawItem.zIndex DrawItem.zIndex}.
 */
zIndex?: number;

/**
 * See {@link isc.DrawItem.supportsEndArrow() DrawItem.supportsEndArrow()}.
 */
supportsEndArrow?: Function;

/**
 * See {@link isc.DrawItem.computeAngle() DrawItem.computeAngle()}.
 */
computeAngle?: Function;

/**
 * See {@link isc.DrawItem.fillOpacity DrawItem.fillOpacity}.
 */
fillOpacity?: number;

/**
 * See {@link isc.DrawItem.hover() DrawItem.hover()}.
 */
hover?: Function;

/**
 * See {@link isc.DrawItem.keepInParentRect DrawItem.keepInParentRect}.
 */
keepInParentRect?: boolean | number[];

/**
 * See {@link isc.DrawItem.showHover DrawItem.showHover}.
 */
showHover?: boolean;

/**
 * See {@link isc.DrawItem.resizeKnobPoints DrawItem.resizeKnobPoints}.
 */
resizeKnobPoints?: string[];

/**
 * See {@link isc.DrawItem.lineColor DrawItem.lineColor}.
 */
lineColor?: string;

/**
 * See {@link isc.DrawItem.destroying DrawItem.destroying}.
 */
destroying?: boolean;

/**
 * See {@link isc.DrawItem.moveKnobPoint DrawItem.moveKnobPoint}.
 */
moveKnobPoint?: string;

/**
 * See {@link isc.DrawItem.titleAutoFit DrawItem.titleAutoFit}.
 */
titleAutoFit?: boolean;

/**
 * See {@link isc.DrawItem.setZIndex() DrawItem.setZIndex()}.
 */
setZIndex?: Function;

/**
 * See {@link isc.DrawItem.hoverDelay DrawItem.hoverDelay}.
 */
hoverDelay?: number;

/**
 * See {@link isc.DrawItem.supportsStartArrow() DrawItem.supportsStartArrow()}.
 */
supportsStartArrow?: Function;

/**
 * See {@link isc.DrawItem.rotation DrawItem.rotation}.
 */
rotation?: number;

/**
 * See {@link isc.DrawItem.resizeTo() DrawItem.resizeTo()}.
 */
resizeTo?: Function;

/**
 * See {@link isc.DrawItem.dragStart() DrawItem.dragStart()}.
 */
dragStart?: Function;

/**
 * See {@link isc.DrawItem.bringToFront() DrawItem.bringToFront()}.
 */
bringToFront?: Function;

/**
 * See {@link isc.DrawItem.setShadow() DrawItem.setShadow()}.
 */
setShadow?: Function;

/**
 * See {@link isc.DrawItem.xShearFactor DrawItem.xShearFactor}.
 */
xShearFactor?: number;

/**
 * See {@link isc.DrawItem.drawGroup DrawItem.drawGroup}.
 */
drawGroup?: DrawGroup;

/**
 * See {@link isc.DrawItem.fillGradient DrawItem.fillGradient}.
 */
fillGradient?: Gradient | string;

/**
 * See {@link isc.DrawItem.sideResizeKnobProperties DrawItem.sideResizeKnobProperties}.
 */
sideResizeKnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawItem.isInBounds() DrawItem.isInBounds()}.
 */
isInBounds?: Function;

/**
 * See {@link isc.DrawItem.linePattern DrawItem.linePattern}.
 */
linePattern?: string;

/**
 * See {@link isc.DrawItem.title DrawItem.title}.
 */
title?: string;

/**
 * See {@link isc.DrawItem.erase() DrawItem.erase()}.
 */
erase?: Function;

/**
 * See {@link isc.DrawItem.showResizeOutline DrawItem.showResizeOutline}.
 */
showResizeOutline?: boolean;

/**
 * See {@link isc.DrawItem.dragMove() DrawItem.dragMove()}.
 */
dragMove?: Function;

/**
 * See {@link isc.DrawItem.startArrow DrawItem.startArrow}.
 */
startArrow?: string;

/**
 * See {@link isc.DrawItem.titleRotationMode DrawItem.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawItem.eventOpaque DrawItem.eventOpaque}.
 */
eventOpaque?: boolean;

/**
 * See {@link isc.DrawItem.show() DrawItem.show()}.
 */
show?: Function;

/**
 * See {@link isc.DrawItem.setLineCap() DrawItem.setLineCap()}.
 */
setLineCap?: Function;

/**
 * See {@link isc.DrawItem.rotateBy() DrawItem.rotateBy()}.
 */
rotateBy?: Function;

/**
 * See {@link isc.DrawItem.shapeData DrawItem.shapeData}.
 */
shapeData?: Object;

/**
 * See {@link isc.DrawItem.cornerResizeKnobProperties DrawItem.cornerResizeKnobProperties}.
 */
cornerResizeKnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawItem.lineCap DrawItem.lineCap}.
 */
lineCap?: string;

/**
 * See {@link isc.DrawItem.resizeBy() DrawItem.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.DrawItem.lineWidth DrawItem.lineWidth}.
 */
lineWidth?: number;

/**
 * See {@link isc.DrawItem.getHoverHTML() DrawItem.getHoverHTML()}.
 */
getHoverHTML?: Function;

/**
 * See {@link isc.DrawItem.rotateKnobProperties DrawItem.rotateKnobProperties}.
 */
rotateKnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawItem.useSimpleTransform DrawItem.useSimpleTransform}.
 */
useSimpleTransform?: boolean;

/**
 * See {@link isc.DrawItem.mouseDown() DrawItem.mouseDown()}.
 */
mouseDown?: Function;

/**
 * See {@link isc.DrawItem.rotateTo() DrawItem.rotateTo()}.
 */
rotateTo?: Function;

/**
 * See {@link isc.DrawItem.hideAllKnobs() DrawItem.hideAllKnobs()}.
 */
hideAllKnobs?: Function;

/**
 * See {@link isc.DrawItem.canHover DrawItem.canHover}.
 */
canHover?: boolean;

/**
 * See {@link isc.DrawItem.getShapeData() DrawItem.getShapeData()}.
 */
getShapeData?: Function;

/**
 * See {@link isc.DrawItem.lineOpacity DrawItem.lineOpacity}.
 */
lineOpacity?: number;

/**
 * See {@link isc.DrawItem.mouseMove() DrawItem.mouseMove()}.
 */
mouseMove?: Function;

/**
 * See {@link isc.DrawItem.endKnobProperties DrawItem.endKnobProperties}.
 */
endKnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawItem.dragStop() DrawItem.dragStop()}.
 */
dragStop?: Function;

/**
 * See {@link isc.DrawItem.setFillOpacity() DrawItem.setFillOpacity()}.
 */
setFillOpacity?: Function;

/**
 * See {@link isc.DrawItem.drawStart() DrawItem.drawStart()}.
 */
drawStart?: Function;

/**
 * See {@link isc.DrawItem.moveBy() DrawItem.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawItem.setPropertyValue() DrawItem.setPropertyValue()}.
 */
setPropertyValue?: Function;

/**
 * See {@link isc.DrawItem.getBoundingBox() DrawItem.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawItem.proportionalResizeModifiers DrawItem.proportionalResizeModifiers}.
 */
proportionalResizeModifiers?: string[];

/**
 * See {@link isc.DrawItem.setEndArrow() DrawItem.setEndArrow()}.
 */
setEndArrow?: Function;

/**
 * See {@link isc.DrawItem.setDrawPane() DrawItem.setDrawPane()}.
 */
setDrawPane?: Function;

/**
 * See {@link isc.DrawItem.moved() DrawItem.moved()}.
 */
moved?: Function;

/**
 * See {@link isc.DrawItem.getCenter() DrawItem.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawItem.drawPane DrawItem.drawPane}.
 */
drawPane?: DrawPane | string;

/**
 * See {@link isc.DrawItem.setLineOpacity() DrawItem.setLineOpacity()}.
 */
setLineOpacity?: Function;

/**
 * See {@link isc.DrawItem.setLineColor() DrawItem.setLineColor()}.
 */
setLineColor?: Function;

/**
 * See {@link isc.DrawItem.destroyed DrawItem.destroyed}.
 */
destroyed?: boolean;

/**
 * See {@link isc.DrawItem.getPageTop() DrawItem.getPageTop()}.
 */
getPageTop?: Function;

/**
 * See {@link isc.DrawItem.titleLabelPadding DrawItem.titleLabelPadding}.
 */
titleLabelPadding?: number;

/**
 * See {@link isc.DrawItem.hideKnobs() DrawItem.hideKnobs()}.
 */
hideKnobs?: Function;

/**
 * See {@link isc.DrawItem.cursor DrawItem.cursor}.
 */
cursor?: string;

/**
 * See {@link isc.DrawItem.isPointInPath() DrawItem.isPointInPath()}.
 */
isPointInPath?: Function;

/**
 * See {@link isc.DrawItem.resized() DrawItem.resized()}.
 */
resized?: Function;

/**
 * See {@link isc.DrawItem.mouseOver() DrawItem.mouseOver()}.
 */
mouseOver?: Function;

/**
 * See {@link isc.DrawItem.titleAutoFitMargin DrawItem.titleAutoFitMargin}.
 */
titleAutoFitMargin?: number;

/**
 * See {@link isc.DrawItem.dragStartDistance DrawItem.dragStartDistance}.
 */
dragStartDistance?: number;

/**
 * See {@link isc.DrawItem.getResizeBoundingBox() DrawItem.getResizeBoundingBox()}.
 */
getResizeBoundingBox?: Function;

/**
 * See {@link isc.DrawItem.prompt DrawItem.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.DrawItem.setFillGradient() DrawItem.setFillGradient()}.
 */
setFillGradient?: Function;

/**
 * See {@link isc.DrawItem.mouseOut() DrawItem.mouseOut()}.
 */
mouseOut?: Function;

/**
 * See {@link isc.DrawItem.drawEnd() DrawItem.drawEnd()}.
 */
drawEnd?: Function;

/**
 * See {@link isc.DrawItem.getZIndex() DrawItem.getZIndex()}.
 */
getZIndex?: Function;

/**
 * See {@link isc.DrawItem.moveKnobProperties DrawItem.moveKnobProperties}.
 */
moveKnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawItem.fillColor DrawItem.fillColor}.
 */
fillColor?: string;

/**
 * See {@link isc.DrawItem.resizeOutlineProperties DrawItem.resizeOutlineProperties}.
 */
resizeOutlineProperties?: DrawRect;

/**
 * See {@link isc.DrawItem.getSvgString() DrawItem.getSvgString()}.
 */
getSvgString?: Function;

/**
 * See {@link isc.DrawItem.yShearFactor DrawItem.yShearFactor}.
 */
yShearFactor?: number;

/**
 * See {@link isc.DrawItem.showKnobs() DrawItem.showKnobs()}.
 */
showKnobs?: Function;

/**
 * See {@link isc.DrawItem.doubleClick() DrawItem.doubleClick()}.
 */
doubleClick?: Function;

/**
 * See {@link isc.DrawItem.sendToBack() DrawItem.sendToBack()}.
 */
sendToBack?: Function;

/**
 * See {@link isc.DrawItem.canDrag DrawItem.canDrag}.
 */
canDrag?: boolean;

/**
 * See {@link isc.DrawItem.dragResizeMove() DrawItem.dragResizeMove()}.
 */
dragResizeMove?: Function;

/**
 * See {@link isc.DrawItem.showContextMenu() DrawItem.showContextMenu()}.
 */
showContextMenu?: Function;

/**
 * See {@link isc.DrawItem.setCursor() DrawItem.setCursor()}.
 */
setCursor?: Function;

/**
 * See {@link isc.DrawItem.setTitle() DrawItem.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.DrawItem.startKnobProperties DrawItem.startKnobProperties}.
 */
startKnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawItem.contextMenu DrawItem.contextMenu}.
 */
contextMenu?: Menu;

/**
 * See {@link isc.DrawItem.getPageLeft() DrawItem.getPageLeft()}.
 */
getPageLeft?: Function;

/**
 * See {@link isc.DrawItem.showTitleLabelBackground DrawItem.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;

/**
 * See {@link isc.DrawItem.endArrow DrawItem.endArrow}.
 */
endArrow?: string;

/**
 * See {@link isc.DrawItem.setCanDrag() DrawItem.setCanDrag()}.
 */
setCanDrag?: Function;

/**
 * See {@link isc.DrawItem.setCenterPoint() DrawItem.setCenterPoint()}.
 */
setCenterPoint?: Function;

/**
 * See {@link isc.DrawItem.setFillColor() DrawItem.setFillColor()}.
 */
setFillColor?: Function;

/**
 * See {@link isc.DrawItem.shadow DrawItem.shadow}.
 */
shadow?: Shadow;

/**
 * See {@link isc.DrawItem.moveTo() DrawItem.moveTo()}.
 */
moveTo?: Function;

/**
 * See {@link isc.DrawItem.mouseUp() DrawItem.mouseUp()}.
 */
mouseUp?: Function;

/**
 * See {@link isc.DrawItem.setLinePattern() DrawItem.setLinePattern()}.
 */
setLinePattern?: Function;

/**
 * See {@link isc.DrawItem.editProxyConstructor DrawItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.DrawItem.destroy() DrawItem.destroy()}.
 */
destroy?: Function;

/**
 * See {@link isc.DrawItem.draw() DrawItem.draw()}.
 */
draw?: Function;

/**
 * See {@link isc.DrawItem.proportionalResizing DrawItem.proportionalResizing}.
 */
proportionalResizing?: string;

/**
 * See {@link isc.DrawItem.scaleTo() DrawItem.scaleTo()}.
 */
scaleTo?: Function;

/**
 * See {@link isc.DrawItem.click() DrawItem.click()}.
 */
click?: Function;

/**
 * See {@link isc.DrawItem.hide() DrawItem.hide()}.
 */
hide?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawItem wraps the SmartClient widget class
 * {@link isc.DrawItem DrawItem} for React, allowing you to import
 * DrawItem for use in React JS and JSX.
 * @class
 * @extends IBaseComponent
 */
declare class DrawItem extends IBaseComponent {
    props: AsComponentXML<DrawItemProps>;
}
