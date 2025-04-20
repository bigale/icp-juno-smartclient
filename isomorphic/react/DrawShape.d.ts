import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawShapeProps extends DrawItemProps {

/**
 * See {@link isc.DrawShape.moveBy() DrawShape.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawShape.titleRotationMode DrawShape.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawShape.setCommands() DrawShape.setCommands()}.
 */
setCommands?: Function;

/**
 * See {@link isc.DrawShape.resizeBy() DrawShape.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.DrawShape.commands DrawShape.commands}.
 */
commands?: DrawShapeCommand[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawShape wraps the SmartClient widget class
 * {@link isc.DrawShape DrawShape} for React, allowing you to import
 * DrawShape for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawShape extends DrawItem {
    props: AsComponentXML<DrawShapeProps>;
}
