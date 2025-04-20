import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SystemDoneConfigProps {

/**
 * See {@link isc.SystemDoneConfig.includeNetworkOperations SystemDoneConfig.includeNetworkOperations}.
 */
includeNetworkOperations?: boolean;

/**
 * See {@link isc.SystemDoneConfig.includeRedraws SystemDoneConfig.includeRedraws}.
 */
includeRedraws?: boolean;

/**
 * See {@link isc.SystemDoneConfig.includeFileLoader SystemDoneConfig.includeFileLoader}.
 */
includeFileLoader?: boolean;

/**
 * See {@link isc.SystemDoneConfig.includeTimers SystemDoneConfig.includeTimers}.
 */
includeTimers?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SystemDoneConfig wraps the SmartClient object
 * {@link isc.SystemDoneConfig SystemDoneConfig} for React, allowing you to import
 * SystemDoneConfig for use in React JS and JSX.
 * @class
 */
declare class SystemDoneConfig extends ILogicalComponent {
    props: AsComponentXML<SystemDoneConfigProps>;
}
