import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawSectorProps extends DrawItemProps {

/**
 * See {@link isc.DrawSector.radius DrawSector.radius}.
 */
radius?: number;

/**
 * See {@link isc.DrawSector.getCenter() DrawSector.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawSector.setCenterPoint() DrawSector.setCenterPoint()}.
 */
setCenterPoint?: Function;

/**
 * See {@link isc.DrawSector.getArcMidpoint() DrawSector.getArcMidpoint()}.
 */
getArcMidpoint?: Function;

/**
 * See {@link isc.DrawSector.getBoundingBox() DrawSector.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawSector.rotation DrawSector.rotation}.
 */
rotation?: number;

/**
 * See {@link isc.DrawSector.startAngle DrawSector.startAngle}.
 */
startAngle?: number;

/**
 * See {@link isc.DrawSector.showTitleLabelBackground DrawSector.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;

/**
 * See {@link isc.DrawSector.moveBy() DrawSector.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawSector.centerPoint DrawSector.centerPoint}.
 */
centerPoint?: Point;

/**
 * See {@link isc.DrawSector.endAngle DrawSector.endAngle}.
 */
endAngle?: number;

/**
 * See {@link isc.DrawSector.knobs DrawSector.knobs}.
 */
knobs?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawSector wraps the SmartClient widget class
 * {@link isc.DrawSector DrawSector} for React, allowing you to import
 * DrawSector for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawSector extends DrawItem {
    props: AsComponentXML<DrawSectorProps>;
}
