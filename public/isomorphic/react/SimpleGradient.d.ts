import React from 'react';
import { Gradient, GradientProps } from './Gradient';
import { AsComponentXML } from './core/ReactComponent';


declare interface SimpleGradientProps extends GradientProps {

/**
 * See {@link isc.SimpleGradient.direction SimpleGradient.direction}.
 */
direction?: number;

/**
 * See {@link isc.SimpleGradient.endColor SimpleGradient.endColor}.
 */
endColor?: string;

/**
 * See {@link isc.SimpleGradient.startColor SimpleGradient.startColor}.
 */
startColor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SimpleGradient wraps the SmartClient object
 * {@link isc.SimpleGradient SimpleGradient} for React, allowing you to import
 * SimpleGradient for use in React JS and JSX.
 * @class
 */
declare class SimpleGradient extends Gradient {
    props: AsComponentXML<SimpleGradientProps>;
}
