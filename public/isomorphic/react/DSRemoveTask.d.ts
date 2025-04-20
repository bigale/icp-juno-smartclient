import React from 'react';
import { ServiceTask, ServiceTaskProps } from './ServiceTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSRemoveTaskProps extends ServiceTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSRemoveTask wraps the SmartClient widget class
 * {@link isc.DSRemoveTask DSRemoveTask} for React, allowing you to import
 * DSRemoveTask for use in React JS and JSX.
 * @class
 * @extends ServiceTask
 */
declare class DSRemoveTask extends ServiceTask {
    props: AsComponentXML<DSRemoveTaskProps>;
}
