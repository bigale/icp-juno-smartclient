import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawDiamondProps extends DrawItemProps {

/**
 * See {@link isc.DrawDiamond.titleRotationMode DrawDiamond.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawDiamond.top DrawDiamond.top}.
 */
top?: number;

/**
 * See {@link isc.DrawDiamond.width DrawDiamond.width}.
 */
width?: number;

/**
 * See {@link isc.DrawDiamond.left DrawDiamond.left}.
 */
left?: number;

/**
 * See {@link isc.DrawDiamond.height DrawDiamond.height}.
 */
height?: number;

/**
 * See {@link isc.DrawDiamond.setRect() DrawDiamond.setRect()}.
 */
setRect?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawDiamond wraps the SmartClient widget class
 * {@link isc.DrawDiamond DrawDiamond} for React, allowing you to import
 * DrawDiamond for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawDiamond extends DrawItem {
    props: AsComponentXML<DrawDiamondProps>;
}
