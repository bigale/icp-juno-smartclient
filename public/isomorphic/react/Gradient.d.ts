import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface GradientProps {

/**
 * See {@link isc.Gradient.colorStops Gradient.colorStops}.
 */
colorStops?: ColorStop[];

/**
 * See {@link isc.Gradient.startColor Gradient.startColor}.
 */
startColor?: string;

/**
 * See {@link isc.Gradient.id Gradient.id}.
 */
id?: string;

/**
 * See {@link isc.Gradient.endColor Gradient.endColor}.
 */
endColor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Gradient wraps the SmartClient object
 * {@link isc.Gradient Gradient} for React, allowing you to import
 * Gradient for use in React JS and JSX.
 * @class
 */
declare class Gradient extends ILogicalComponent {
    props: AsComponentXML<GradientProps>;
}
