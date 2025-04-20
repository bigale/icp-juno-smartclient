import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface EnableDisableTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.EnableDisableTask.disable EnableDisableTask.disable}.
 */
disable?: boolean;

/**
 * See {@link isc.EnableDisableTask.targetFieldName EnableDisableTask.targetFieldName}.
 */
targetFieldName?: string;

/**
 * See {@link isc.EnableDisableTask.targetTabName EnableDisableTask.targetTabName}.
 */
targetTabName?: string | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EnableDisableTask wraps the SmartClient widget class
 * {@link isc.EnableDisableTask EnableDisableTask} for React, allowing you to import
 * EnableDisableTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class EnableDisableTask extends ComponentTask {
    props: AsComponentXML<EnableDisableTaskProps>;
}
