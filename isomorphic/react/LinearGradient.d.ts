import React from 'react';
import { Gradient, GradientProps } from './Gradient';
import { AsComponentXML } from './core/ReactComponent';


declare interface LinearGradientProps extends GradientProps {

/**
 * See {@link isc.LinearGradient.x2 LinearGradient.x2}.
 */
x2?: string;

/**
 * See {@link isc.LinearGradient.x1 LinearGradient.x1}.
 */
x1?: string;

/**
 * See {@link isc.LinearGradient.y1 LinearGradient.y1}.
 */
y1?: string;

/**
 * See {@link isc.LinearGradient.y2 LinearGradient.y2}.
 */
y2?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LinearGradient wraps the SmartClient object
 * {@link isc.LinearGradient LinearGradient} for React, allowing you to import
 * LinearGradient for use in React JS and JSX.
 * @class
 */
declare class LinearGradient extends Gradient {
    props: AsComponentXML<LinearGradientProps>;
}
