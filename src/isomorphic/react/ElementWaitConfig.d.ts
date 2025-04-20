import React from 'react';
import { SystemWaitConfig, SystemWaitConfigProps } from './SystemWaitConfig';
import { AsComponentXML } from './core/ReactComponent';


declare interface ElementWaitConfigProps extends SystemWaitConfigProps {

/**
 * See {@link isc.ElementWaitConfig.waitStyle ElementWaitConfig.waitStyle}.
 */
waitStyle?: string;

/**
 * See {@link isc.ElementWaitConfig.timeout ElementWaitConfig.timeout}.
 */
timeout?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ElementWaitConfig wraps the SmartClient object
 * {@link isc.ElementWaitConfig ElementWaitConfig} for React, allowing you to import
 * ElementWaitConfig for use in React JS and JSX.
 * @class
 */
declare class ElementWaitConfig extends SystemWaitConfig {
    props: AsComponentXML<ElementWaitConfigProps>;
}
