import React from 'react';
import { Task, TaskProps } from './Task';
import { AsComponentXML } from './core/ReactComponent';


declare interface ScriptTaskProps extends TaskProps {

/**
 * See {@link isc.ScriptTask.getInputData() ScriptTask.getInputData()}.
 */
getInputData?: Function;

/**
 * See {@link isc.ScriptTask.getProcess() ScriptTask.getProcess()}.
 */
getProcess?: Function;

/**
 * See {@link isc.ScriptTask.isAsync ScriptTask.isAsync}.
 */
isAsync?: boolean;

/**
 * See {@link isc.ScriptTask.execute() ScriptTask.execute()}.
 */
execute?: Function;

/**
 * See {@link isc.ScriptTask.passThruOutput ScriptTask.passThruOutput}.
 */
passThruOutput?: boolean;

/**
 * See {@link isc.ScriptTask.setOutputRecord() ScriptTask.setOutputRecord()}.
 */
setOutputRecord?: Function;

/**
 * See {@link isc.ScriptTask.getInputRecord() ScriptTask.getInputRecord()}.
 */
getInputRecord?: Function;

/**
 * See {@link isc.ScriptTask.setOutputData() ScriptTask.setOutputData()}.
 */
setOutputData?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ScriptTask wraps the SmartClient widget class
 * {@link isc.ScriptTask ScriptTask} for React, allowing you to import
 * ScriptTask for use in React JS and JSX.
 * @class
 * @extends Task
 */
declare class ScriptTask extends Task {
    props: AsComponentXML<ScriptTaskProps>;
}
