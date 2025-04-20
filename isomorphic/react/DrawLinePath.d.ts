import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawLinePathProps extends DrawItemProps {

/**
 * See {@link isc.DrawLinePath.getCenter() DrawLinePath.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawLinePath.connectorOrientation DrawLinePath.connectorOrientation}.
 */
connectorOrientation?: string;

/**
 * See {@link isc.DrawLinePath.startTop DrawLinePath.startTop}.
 */
startTop?: number;

/**
 * See {@link isc.DrawLinePath.moveStartPointTo() DrawLinePath.moveStartPointTo()}.
 */
moveStartPointTo?: Function;

/**
 * See {@link isc.DrawLinePath.endArrow DrawLinePath.endArrow}.
 */
endArrow?: string;

/**
 * See {@link isc.DrawLinePath.setStartPoint() DrawLinePath.setStartPoint()}.
 */
setStartPoint?: Function;

/**
 * See {@link isc.DrawLinePath.moveBy() DrawLinePath.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawLinePath.endTop DrawLinePath.endTop}.
 */
endTop?: number;

/**
 * See {@link isc.DrawLinePath.controlPoint1 DrawLinePath.controlPoint1}.
 */
controlPoint1?: Point;

/**
 * See {@link isc.DrawLinePath.startLeft DrawLinePath.startLeft}.
 */
startLeft?: number;

/**
 * See {@link isc.DrawLinePath.setControlPoint2() DrawLinePath.setControlPoint2()}.
 */
setControlPoint2?: Function;

/**
 * See {@link isc.DrawLinePath.showTitleLabelBackground DrawLinePath.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;

/**
 * See {@link isc.DrawLinePath.getBoundingBox() DrawLinePath.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawLinePath.setEndPoint() DrawLinePath.setEndPoint()}.
 */
setEndPoint?: Function;

/**
 * See {@link isc.DrawLinePath.endPoint DrawLinePath.endPoint}.
 */
endPoint?: Point;

/**
 * See {@link isc.DrawLinePath.titleRotationMode DrawLinePath.titleRotationMode}.
 */
titleRotationMode?: string;

/**
 * See {@link isc.DrawLinePath.knobs DrawLinePath.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawLinePath.connectorStyle DrawLinePath.connectorStyle}.
 */
connectorStyle?: string;

/**
 * See {@link isc.DrawLinePath.endLeft DrawLinePath.endLeft}.
 */
endLeft?: number;

/**
 * See {@link isc.DrawLinePath.tailSize DrawLinePath.tailSize}.
 */
tailSize?: number;

/**
 * See {@link isc.DrawLinePath.setControlPoint1() DrawLinePath.setControlPoint1()}.
 */
setControlPoint1?: Function;

/**
 * See {@link isc.DrawLinePath.startPoint DrawLinePath.startPoint}.
 */
startPoint?: Point;

/**
 * See {@link isc.DrawLinePath.controlPoint2 DrawLinePath.controlPoint2}.
 */
controlPoint2?: Point;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawLinePath wraps the SmartClient widget class
 * {@link isc.DrawLinePath DrawLinePath} for React, allowing you to import
 * DrawLinePath for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawLinePath extends DrawItem {
    props: AsComponentXML<DrawLinePathProps>;
}
