import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiWindowSettingsProps {

/**
 * See {@link isc.MultiWindowSettings.shareMessageChannels MultiWindowSettings.shareMessageChannels}.
 */
shareMessageChannels?: boolean;

/**
 * See {@link isc.MultiWindowSettings.autoCopyDataSources MultiWindowSettings.autoCopyDataSources}.
 */
autoCopyDataSources?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiWindowSettings wraps the SmartClient object
 * {@link isc.MultiWindowSettings MultiWindowSettings} for React, allowing you to import
 * MultiWindowSettings for use in React JS and JSX.
 * @class
 */
declare class MultiWindowSettings extends ILogicalComponent {
    props: AsComponentXML<MultiWindowSettingsProps>;
}
