import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ColorStopProps {

/**
 * See {@link isc.ColorStop.offset ColorStop.offset}.
 */
offset?: number;

/**
 * See {@link isc.ColorStop.color ColorStop.color}.
 */
color?: string;

/**
 * See {@link isc.ColorStop.opacity ColorStop.opacity}.
 */
opacity?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ColorStop wraps the SmartClient object
 * {@link isc.ColorStop ColorStop} for React, allowing you to import
 * ColorStop for use in React JS and JSX.
 * @class
 */
declare class ColorStop extends ILogicalComponent {
    props: AsComponentXML<ColorStopProps>;
}
