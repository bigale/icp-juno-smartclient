import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface ProcessSequenceProps extends ProcessElementProps {

/**
 * See {@link isc.ProcessSequence.elements ProcessSequence.elements}.
 */
elements?: ProcessElement[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ProcessSequence wraps the SmartClient widget class
 * {@link isc.ProcessSequence ProcessSequence} for React, allowing you to import
 * ProcessSequence for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class ProcessSequence extends ProcessElement {
    props: AsComponentXML<ProcessSequenceProps>;
}
