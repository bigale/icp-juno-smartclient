import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PointProps {

/**
 * See {@link isc.Point.x Point.x}.
 */
x?: number;

/**
 * See {@link isc.Point.y Point.y}.
 */
y?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Point wraps the SmartClient object
 * {@link isc.Point Point} for React, allowing you to import
 * Point for use in React JS and JSX.
 * @class
 */
declare class Point extends ILogicalComponent {
    props: AsComponentXML<PointProps>;
}
