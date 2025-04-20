import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface TaskProps extends ProcessElementProps {

/**
 * See {@link isc.Task.inputFieldList Task.inputFieldList}.
 */
inputFieldList?: string[];

/**
 * See {@link isc.Task.outputFieldList Task.outputFieldList}.
 */
outputFieldList?: string[];

/**
 * See {@link isc.Task.outputExpression Task.outputExpression}.
 */
outputExpression?: string;

/**
 * See {@link isc.Task.outputField Task.outputField}.
 */
outputField?: string;

/**
 * See {@link isc.Task.inputField Task.inputField}.
 */
inputField?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Task wraps the SmartClient widget class
 * {@link isc.Task Task} for React, allowing you to import
 * Task for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class Task extends ProcessElement {
    props: AsComponentXML<TaskProps>;
}
