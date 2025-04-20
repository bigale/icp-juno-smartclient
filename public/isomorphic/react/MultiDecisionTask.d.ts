import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiDecisionTaskProps extends ProcessElementProps {

/**
 * See {@link isc.MultiDecisionTask.decisionList MultiDecisionTask.decisionList}.
 */
decisionList?: DecisionBranch[];

/**
 * See {@link isc.MultiDecisionTask.defaultElement MultiDecisionTask.defaultElement}.
 */
defaultElement?: string;

/**
 * See {@link isc.MultiDecisionTask.nextElement MultiDecisionTask.nextElement}.
 */
nextElement?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiDecisionTask wraps the SmartClient widget class
 * {@link isc.MultiDecisionTask MultiDecisionTask} for React, allowing you to import
 * MultiDecisionTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class MultiDecisionTask extends ProcessElement {
    props: AsComponentXML<MultiDecisionTaskProps>;
}
