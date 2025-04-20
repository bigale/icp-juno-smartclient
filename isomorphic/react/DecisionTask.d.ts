import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface DecisionTaskProps extends ProcessElementProps {

/**
 * See {@link isc.DecisionTask.failureElement DecisionTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.DecisionTask.nextElement DecisionTask.nextElement}.
 */
nextElement?: string;

/**
 * See {@link isc.DecisionTask.criteria DecisionTask.criteria}.
 */
criteria?: Criteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DecisionTask wraps the SmartClient widget class
 * {@link isc.DecisionTask DecisionTask} for React, allowing you to import
 * DecisionTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class DecisionTask extends ProcessElement {
    props: AsComponentXML<DecisionTaskProps>;
}
