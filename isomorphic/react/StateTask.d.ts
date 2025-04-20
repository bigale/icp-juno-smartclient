import React from 'react';
import { Task, TaskProps } from './Task';
import { AsComponentXML } from './core/ReactComponent';


declare interface StateTaskProps extends TaskProps {

/**
 * See {@link isc.StateTask.fieldListsLengthMismatchMessage StateTask.fieldListsLengthMismatchMessage}.
 */
fieldListsLengthMismatchMessage?: string;

/**
 * See {@link isc.StateTask.value StateTask.value}.
 */
value?: any;

/**
 * See {@link isc.StateTask.failureElement StateTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.StateTask.type StateTask.type}.
 */
type?: string;

/**
 * See {@link isc.StateTask.passThruOutput StateTask.passThruOutput}.
 */
passThruOutput?: boolean;

/**
 * See {@link isc.StateTask.outputExpression StateTask.outputExpression}.
 */
outputExpression?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StateTask wraps the SmartClient widget class
 * {@link isc.StateTask StateTask} for React, allowing you to import
 * StateTask for use in React JS and JSX.
 * @class
 * @extends Task
 */
declare class StateTask extends Task {
    props: AsComponentXML<StateTaskProps>;
}
