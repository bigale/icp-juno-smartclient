import React from 'react';
import { ScriptTask, ScriptTaskProps } from './ScriptTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface StartProcessTaskProps extends ScriptTaskProps {

/**
 * See {@link isc.StartProcessTask.execute() StartProcessTask.execute()}.
 */
execute?: Function;

/**
 * See {@link isc.StartProcessTask.process StartProcessTask.process}.
 */
process?: Process | string;

/**
 * See {@link isc.StartProcessTask.isAsync StartProcessTask.isAsync}.
 */
isAsync?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StartProcessTask wraps the SmartClient widget class
 * {@link isc.StartProcessTask StartProcessTask} for React, allowing you to import
 * StartProcessTask for use in React JS and JSX.
 * @class
 * @extends ScriptTask
 */
declare class StartProcessTask extends ScriptTask {
    props: AsComponentXML<StartProcessTaskProps>;
}
