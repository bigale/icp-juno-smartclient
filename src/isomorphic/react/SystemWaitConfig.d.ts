import React from 'react';
import { SystemDoneConfig, SystemDoneConfigProps } from './SystemDoneConfig';
import { AsComponentXML } from './core/ReactComponent';


declare interface SystemWaitConfigProps extends SystemDoneConfigProps {

/**
 * See {@link isc.SystemWaitConfig.includeFileLoader SystemWaitConfig.includeFileLoader}.
 */
includeFileLoader?: boolean;

/**
 * See {@link isc.SystemWaitConfig.timeout SystemWaitConfig.timeout}.
 */
timeout?: number;

/**
 * See {@link isc.SystemWaitConfig.includeNetworkOperations SystemWaitConfig.includeNetworkOperations}.
 */
includeNetworkOperations?: boolean;

/**
 * See {@link isc.SystemWaitConfig.includeRedraws SystemWaitConfig.includeRedraws}.
 */
includeRedraws?: boolean;

/**
 * See {@link isc.SystemWaitConfig.includeTimers SystemWaitConfig.includeTimers}.
 */
includeTimers?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SystemWaitConfig wraps the SmartClient object
 * {@link isc.SystemWaitConfig SystemWaitConfig} for React, allowing you to import
 * SystemWaitConfig for use in React JS and JSX.
 * @class
 */
declare class SystemWaitConfig extends SystemDoneConfig {
    props: AsComponentXML<SystemWaitConfigProps>;
}
