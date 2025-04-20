import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSLoadSettingsProps {

/**
 * See {@link isc.DSLoadSettings.forceReload DSLoadSettings.forceReload}.
 */
forceReload?: boolean;

/**
 * See {@link isc.DSLoadSettings.mockMode DSLoadSettings.mockMode}.
 */
mockMode?: boolean;

/**
 * See {@link isc.DSLoadSettings.loadParents DSLoadSettings.loadParents}.
 */
loadParents?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSLoadSettings wraps the SmartClient object
 * {@link isc.DSLoadSettings DSLoadSettings} for React, allowing you to import
 * DSLoadSettings for use in React JS and JSX.
 * @class
 */
declare class DSLoadSettings extends ILogicalComponent {
    props: AsComponentXML<DSLoadSettingsProps>;
}
