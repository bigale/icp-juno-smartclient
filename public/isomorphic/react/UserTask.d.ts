import React from 'react';
import { Task, TaskProps } from './Task';
import { AsComponentXML } from './core/ReactComponent';


declare interface UserTaskProps extends TaskProps {

/**
 * See {@link isc.UserTask.previousElement UserTask.previousElement}.
 */
previousElement?: string;

/**
 * See {@link isc.UserTask.cancelElement UserTask.cancelElement}.
 */
cancelElement?: string;

/**
 * See {@link isc.UserTask.targetView UserTask.targetView}.
 */
targetView?: Canvas | string;

/**
 * See {@link isc.UserTask.targetForm UserTask.targetForm}.
 */
targetForm?: DynamicForm | string;

/**
 * See {@link isc.UserTask.inlineView UserTask.inlineView}.
 */
inlineView?: Canvas;

/**
 * See {@link isc.UserTask.passThruOutput UserTask.passThruOutput}.
 */
passThruOutput?: boolean;

/**
 * See {@link isc.UserTask.goToPrevious() UserTask.goToPrevious()}.
 */
goToPrevious?: Function;

/**
 * See {@link isc.UserTask.saveToServer UserTask.saveToServer}.
 */
saveToServer?: boolean;

/**
 * See {@link isc.UserTask.completeEditing() UserTask.completeEditing()}.
 */
completeEditing?: Function;

/**
 * See {@link isc.UserTask.cancelEditing() UserTask.cancelEditing()}.
 */
cancelEditing?: Function;

/**
 * See {@link isc.UserTask.wizard UserTask.wizard}.
 */
wizard?: boolean;

/**
 * See {@link isc.UserTask.targetVM UserTask.targetVM}.
 */
targetVM?: ValuesManager | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UserTask wraps the SmartClient widget class
 * {@link isc.UserTask UserTask} for React, allowing you to import
 * UserTask for use in React JS and JSX.
 * @class
 * @extends Task
 */
declare class UserTask extends Task {
    props: AsComponentXML<UserTaskProps>;
}
