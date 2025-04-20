import React from 'react';
import { DrawPolygon, DrawPolygonProps } from './DrawPolygon';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawTriangleProps extends DrawPolygonProps {

/**
 * See {@link isc.DrawTriangle.points DrawTriangle.points}.
 */
points?: Point[];

/**
 * See {@link isc.DrawTriangle.resizeBy() DrawTriangle.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.DrawTriangle.getCenter() DrawTriangle.getCenter()}.
 */
getCenter?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawTriangle wraps the SmartClient widget class
 * {@link isc.DrawTriangle DrawTriangle} for React, allowing you to import
 * DrawTriangle for use in React JS and JSX.
 * @class
 * @extends DrawPolygon
 */
declare class DrawTriangle extends DrawPolygon {
    props: AsComponentXML<DrawTriangleProps>;
}
