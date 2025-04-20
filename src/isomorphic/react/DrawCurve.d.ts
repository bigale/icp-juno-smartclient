import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawCurveProps extends DrawItemProps {

/**
 * See {@link isc.DrawCurve.setStartPoint() DrawCurve.setStartPoint()}.
 */
setStartPoint?: Function;

/**
 * See {@link isc.DrawCurve.controlPoint1 DrawCurve.controlPoint1}.
 */
controlPoint1?: Point;

/**
 * See {@link isc.DrawCurve.getBoundingBox() DrawCurve.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawCurve.setEndPoint() DrawCurve.setEndPoint()}.
 */
setEndPoint?: Function;

/**
 * See {@link isc.DrawCurve.moveStartPointTo() DrawCurve.moveStartPointTo()}.
 */
moveStartPointTo?: Function;

/**
 * See {@link isc.DrawCurve.moveBy() DrawCurve.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawCurve.lineCap DrawCurve.lineCap}.
 */
lineCap?: string;

/**
 * See {@link isc.DrawCurve.endPoint DrawCurve.endPoint}.
 */
endPoint?: Point;

/**
 * See {@link isc.DrawCurve.showTitleLabelBackground DrawCurve.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;

/**
 * See {@link isc.DrawCurve.setControlPoint2() DrawCurve.setControlPoint2()}.
 */
setControlPoint2?: Function;

/**
 * See {@link isc.DrawCurve.knobs DrawCurve.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawCurve.startPoint DrawCurve.startPoint}.
 */
startPoint?: Point;

/**
 * See {@link isc.DrawCurve.c2KnobProperties DrawCurve.c2KnobProperties}.
 */
c2KnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawCurve.setControlPoint1() DrawCurve.setControlPoint1()}.
 */
setControlPoint1?: Function;

/**
 * See {@link isc.DrawCurve.controlPoint2 DrawCurve.controlPoint2}.
 */
controlPoint2?: Point;

/**
 * See {@link isc.DrawCurve.c1KnobProperties DrawCurve.c1KnobProperties}.
 */
c1KnobProperties?: DrawKnob;

/**
 * See {@link isc.DrawCurve.getCenter() DrawCurve.getCenter()}.
 */
getCenter?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawCurve wraps the SmartClient widget class
 * {@link isc.DrawCurve DrawCurve} for React, allowing you to import
 * DrawCurve for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawCurve extends DrawItem {
    props: AsComponentXML<DrawCurveProps>;
}
