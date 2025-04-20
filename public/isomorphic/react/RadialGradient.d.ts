import React from 'react';
import { Gradient, GradientProps } from './Gradient';
import { AsComponentXML } from './core/ReactComponent';


declare interface RadialGradientProps extends GradientProps {

/**
 * See {@link isc.RadialGradient.cy RadialGradient.cy}.
 */
cy?: string;

/**
 * See {@link isc.RadialGradient.r RadialGradient.r}.
 */
r?: string;

/**
 * See {@link isc.RadialGradient.fx RadialGradient.fx}.
 */
fx?: string;

/**
 * See {@link isc.RadialGradient.cx RadialGradient.cx}.
 */
cx?: string;

/**
 * See {@link isc.RadialGradient.fy RadialGradient.fy}.
 */
fy?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RadialGradient wraps the SmartClient object
 * {@link isc.RadialGradient RadialGradient} for React, allowing you to import
 * RadialGradient for use in React JS and JSX.
 * @class
 */
declare class RadialGradient extends Gradient {
    props: AsComponentXML<RadialGradientProps>;
}
