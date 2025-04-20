import React from 'react';
import { ServiceTask, ServiceTaskProps } from './ServiceTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSFetchTaskProps extends ServiceTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSFetchTask wraps the SmartClient widget class
 * {@link isc.DSFetchTask DSFetchTask} for React, allowing you to import
 * DSFetchTask for use in React JS and JSX.
 * @class
 * @extends ServiceTask
 */
declare class DSFetchTask extends ServiceTask {
    props: AsComponentXML<DSFetchTaskProps>;
}
