import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawLineProps extends DrawItemProps {

/**
 * See {@link isc.DrawLine.moveBy() DrawLine.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawLine.setStartPoint() DrawLine.setStartPoint()}.
 */
setStartPoint?: Function;

/**
 * See {@link isc.DrawLine.getBoundingBox() DrawLine.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawLine.getCenter() DrawLine.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawLine.startPoint DrawLine.startPoint}.
 */
startPoint?: Point;

/**
 * See {@link isc.DrawLine.endLeft DrawLine.endLeft}.
 */
endLeft?: number;

/**
 * See {@link isc.DrawLine.knobs DrawLine.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawLine.titleRotationMode DrawLine.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawLine.setEndPoint() DrawLine.setEndPoint()}.
 */
setEndPoint?: Function;

/**
 * See {@link isc.DrawLine.endPoint DrawLine.endPoint}.
 */
endPoint?: Point;

/**
 * See {@link isc.DrawLine.moveStartPointTo() DrawLine.moveStartPointTo()}.
 */
moveStartPointTo?: Function;

/**
 * See {@link isc.DrawLine.startLeft DrawLine.startLeft}.
 */
startLeft?: number;

/**
 * See {@link isc.DrawLine.endTop DrawLine.endTop}.
 */
endTop?: number;

/**
 * See {@link isc.DrawLine.startTop DrawLine.startTop}.
 */
startTop?: number;

/**
 * See {@link isc.DrawLine.isPointInPath() DrawLine.isPointInPath()}.
 */
isPointInPath?: Function;

/**
 * See {@link isc.DrawLine.showTitleLabelBackground DrawLine.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawLine wraps the SmartClient widget class
 * {@link isc.DrawLine DrawLine} for React, allowing you to import
 * DrawLine for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawLine extends DrawItem {
    props: AsComponentXML<DrawLineProps>;
}
