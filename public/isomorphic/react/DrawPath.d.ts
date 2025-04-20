import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawPathProps extends DrawItemProps {

/**
 * See {@link isc.DrawPath.getBoundingBox() DrawPath.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawPath.resizeBy() DrawPath.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.DrawPath.moveBy() DrawPath.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.DrawPath.showTitleLabelBackground DrawPath.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;

/**
 * See {@link isc.DrawPath.resizeTo() DrawPath.resizeTo()}.
 */
resizeTo?: Function;

/**
 * See {@link isc.DrawPath.moveFirstPointTo() DrawPath.moveFirstPointTo()}.
 */
moveFirstPointTo?: Function;

/**
 * See {@link isc.DrawPath.getCenter() DrawPath.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawPath.points DrawPath.points}.
 */
points?: Point[];

/**
 * See {@link isc.DrawPath.knobs DrawPath.knobs}.
 */
knobs?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawPath wraps the SmartClient widget class
 * {@link isc.DrawPath DrawPath} for React, allowing you to import
 * DrawPath for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawPath extends DrawItem {
    props: AsComponentXML<DrawPathProps>;
}
