import React from 'react';
import { ServiceTask, ServiceTaskProps } from './ServiceTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSUpdateTaskProps extends ServiceTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSUpdateTask wraps the SmartClient widget class
 * {@link isc.DSUpdateTask DSUpdateTask} for React, allowing you to import
 * DSUpdateTask for use in React JS and JSX.
 * @class
 * @extends ServiceTask
 */
declare class DSUpdateTask extends ServiceTask {
    props: AsComponentXML<DSUpdateTaskProps>;
}
