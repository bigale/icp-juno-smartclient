import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface LoadProjectSettingsProps {

/**
 * See {@link isc.LoadProjectSettings.drawFirstScreen LoadProjectSettings.drawFirstScreen}.
 */
drawFirstScreen?: boolean;

/**
 * See {@link isc.LoadProjectSettings.currentScreenName LoadProjectSettings.currentScreenName}.
 */
currentScreenName?: string;

/**
 * See {@link isc.LoadProjectSettings.requestProperties LoadProjectSettings.requestProperties}.
 */
requestProperties?: RPCRequest;

/**
 * See {@link isc.LoadProjectSettings.verifyAsError LoadProjectSettings.verifyAsError}.
 */
verifyAsError?: boolean;

/**
 * See {@link isc.LoadProjectSettings.password LoadProjectSettings.password}.
 */
password?: string;

/**
 * See {@link isc.LoadProjectSettings.allowPlaceholders LoadProjectSettings.allowPlaceholders}.
 */
allowPlaceholders?: boolean;

/**
 * See {@link isc.LoadProjectSettings.userName LoadProjectSettings.userName}.
 */
userName?: string;

/**
 * See {@link isc.LoadProjectSettings.dataContext LoadProjectSettings.dataContext}.
 */
dataContext?: DataContext;

/**
 * See {@link isc.LoadProjectSettings.screenNames LoadProjectSettings.screenNames}.
 */
screenNames?: string;

/**
 * See {@link isc.LoadProjectSettings.locale LoadProjectSettings.locale}.
 */
locale?: string;

/**
 * See {@link isc.LoadProjectSettings.omitLoadedDataSources LoadProjectSettings.omitLoadedDataSources}.
 */
omitLoadedDataSources?: boolean;

/**
 * See {@link isc.LoadProjectSettings.clobberDataSources LoadProjectSettings.clobberDataSources}.
 */
clobberDataSources?: boolean;

/**
 * See {@link isc.LoadProjectSettings.projectLoaderPath LoadProjectSettings.projectLoaderPath}.
 */
projectLoaderPath?: string;

/**
 * See {@link isc.LoadProjectSettings.omitDataSources LoadProjectSettings.omitDataSources}.
 */
omitDataSources?: string[];

/**
 * See {@link isc.LoadProjectSettings.serverURL LoadProjectSettings.serverURL}.
 */
serverURL?: string;

/**
 * See {@link isc.LoadProjectSettings.timeout LoadProjectSettings.timeout}.
 */
timeout?: number;

/**
 * See {@link isc.LoadProjectSettings.verifyDataSources LoadProjectSettings.verifyDataSources}.
 */
verifyDataSources?: boolean;

/**
 * See {@link isc.LoadProjectSettings.ownerId LoadProjectSettings.ownerId}.
 */
ownerId?: string;

/**
 * See {@link isc.LoadProjectSettings.willHandleError LoadProjectSettings.willHandleError}.
 */
willHandleError?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LoadProjectSettings wraps the SmartClient object
 * {@link isc.LoadProjectSettings LoadProjectSettings} for React, allowing you to import
 * LoadProjectSettings for use in React JS and JSX.
 * @class
 */
declare class LoadProjectSettings extends ILogicalComponent {
    props: AsComponentXML<LoadProjectSettingsProps>;
}
