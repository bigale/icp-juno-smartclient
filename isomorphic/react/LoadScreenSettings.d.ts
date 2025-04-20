import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface LoadScreenSettingsProps {

/**
 * See {@link isc.LoadScreenSettings.missingDSIsNotFatal LoadScreenSettings.missingDSIsNotFatal}.
 */
missingDSIsNotFatal?: boolean;

/**
 * See {@link isc.LoadScreenSettings.requestProperties LoadScreenSettings.requestProperties}.
 */
requestProperties?: RPCRequest;

/**
 * See {@link isc.LoadScreenSettings.omitDataSources LoadScreenSettings.omitDataSources}.
 */
omitDataSources?: string[];

/**
 * See {@link isc.LoadScreenSettings.verifyAsError LoadScreenSettings.verifyAsError}.
 */
verifyAsError?: boolean;

/**
 * See {@link isc.LoadScreenSettings.omitLoadedDataSources LoadScreenSettings.omitLoadedDataSources}.
 */
omitLoadedDataSources?: boolean;

/**
 * See {@link isc.LoadScreenSettings.suppressAutoDraw LoadScreenSettings.suppressAutoDraw}.
 */
suppressAutoDraw?: boolean;

/**
 * See {@link isc.LoadScreenSettings.locale LoadScreenSettings.locale}.
 */
locale?: string;

/**
 * See {@link isc.LoadScreenSettings.willHandleError LoadScreenSettings.willHandleError}.
 */
willHandleError?: boolean;

/**
 * See {@link isc.LoadScreenSettings.clobberDataSources LoadScreenSettings.clobberDataSources}.
 */
clobberDataSources?: boolean;

/**
 * See {@link isc.LoadScreenSettings.cacheScreen LoadScreenSettings.cacheScreen}.
 */
cacheScreen?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LoadScreenSettings wraps the SmartClient object
 * {@link isc.LoadScreenSettings LoadScreenSettings} for React, allowing you to import
 * LoadScreenSettings for use in React JS and JSX.
 * @class
 */
declare class LoadScreenSettings extends ILogicalComponent {
    props: AsComponentXML<LoadScreenSettingsProps>;
}
