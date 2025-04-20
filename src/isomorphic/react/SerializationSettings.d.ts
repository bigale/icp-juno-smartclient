import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SerializationSettingsProps {

/**
 * See {@link isc.SerializationSettings.indent SerializationSettings.indent}.
 */
indent?: boolean;

/**
 * See {@link isc.SerializationSettings.outputComponentsIndividually SerializationSettings.outputComponentsIndividually}.
 */
outputComponentsIndividually?: boolean;

/**
 * See {@link isc.SerializationSettings.serverless SerializationSettings.serverless}.
 */
serverless?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SerializationSettings wraps the SmartClient object
 * {@link isc.SerializationSettings SerializationSettings} for React, allowing you to import
 * SerializationSettings for use in React JS and JSX.
 * @class
 */
declare class SerializationSettings extends ILogicalComponent {
    props: AsComponentXML<SerializationSettingsProps>;
}
