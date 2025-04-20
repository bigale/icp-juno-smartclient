import React from 'react';
import { DecisionBranch, DecisionBranchProps } from './DecisionBranch';
import { AsComponentXML } from './core/ReactComponent';


declare interface TaskDecisionProps extends DecisionBranchProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TaskDecision wraps the SmartClient object
 * {@link isc.TaskDecision TaskDecision} for React, allowing you to import
 * TaskDecision for use in React JS and JSX.
 * @class
 */
declare class TaskDecision extends DecisionBranch {
    props: AsComponentXML<TaskDecisionProps>;
}
