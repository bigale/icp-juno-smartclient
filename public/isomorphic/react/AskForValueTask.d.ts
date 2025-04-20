import React from 'react';
import { UserConfirmationTask, UserConfirmationTaskProps } from './UserConfirmationTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface AskForValueTaskProps extends UserConfirmationTaskProps {

/**
 * See {@link isc.AskForValueTask.defaultValue AskForValueTask.defaultValue}.
 */
defaultValue?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AskForValueTask wraps the SmartClient widget class
 * {@link isc.AskForValueTask AskForValueTask} for React, allowing you to import
 * AskForValueTask for use in React JS and JSX.
 * @class
 * @extends UserConfirmationTask
 */
declare class AskForValueTask extends UserConfirmationTask {
    props: AsComponentXML<AskForValueTaskProps>;
}
