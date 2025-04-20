import React from 'react';
import { ServiceTask, ServiceTaskProps } from './ServiceTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSAddTaskProps extends ServiceTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSAddTask wraps the SmartClient widget class
 * {@link isc.DSAddTask DSAddTask} for React, allowing you to import
 * DSAddTask for use in React JS and JSX.
 * @class
 * @extends ServiceTask
 */
declare class DSAddTask extends ServiceTask {
    props: AsComponentXML<DSAddTaskProps>;
}
