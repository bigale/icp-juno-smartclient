import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface GaugeSectorProps {

/**
 * See {@link isc.GaugeSector.value GaugeSector.value}.
 */
value?: number;

/**
 * See {@link isc.GaugeSector.endAngle GaugeSector.endAngle}.
 */
endAngle?: number;

/**
 * See {@link isc.GaugeSector.startAngle GaugeSector.startAngle}.
 */
startAngle?: number;

/**
 * See {@link isc.GaugeSector.fillColor GaugeSector.fillColor}.
 */
fillColor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GaugeSector wraps the SmartClient object
 * {@link isc.GaugeSector GaugeSector} for React, allowing you to import
 * GaugeSector for use in React JS and JSX.
 * @class
 */
declare class GaugeSector extends ILogicalComponent {
    props: AsComponentXML<GaugeSectorProps>;
}
