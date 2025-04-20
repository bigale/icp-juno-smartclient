import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DebugOverflowSettingsProps {

/**
 * See {@link isc.DebugOverflowSettings.loggingTimeout DebugOverflowSettings.loggingTimeout}.
 */
loggingTimeout?: number;

/**
 * See {@link isc.DebugOverflowSettings.maxTrackedOverflows DebugOverflowSettings.maxTrackedOverflows}.
 */
maxTrackedOverflows?: number;

/**
 * See {@link isc.DebugOverflowSettings.trackingDuration DebugOverflowSettings.trackingDuration}.
 */
trackingDuration?: number;

/**
 * See {@link isc.DebugOverflowSettings.selfOverflowThreshold DebugOverflowSettings.selfOverflowThreshold}.
 */
selfOverflowThreshold?: number;

/**
 * See {@link isc.DebugOverflowSettings.loggingLevel DebugOverflowSettings.loggingLevel}.
 */
loggingLevel?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DebugOverflowSettings wraps the SmartClient object
 * {@link isc.DebugOverflowSettings DebugOverflowSettings} for React, allowing you to import
 * DebugOverflowSettings for use in React JS and JSX.
 * @class
 */
declare class DebugOverflowSettings extends ILogicalComponent {
    props: AsComponentXML<DebugOverflowSettingsProps>;
}
