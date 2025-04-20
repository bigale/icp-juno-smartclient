import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ProcessProps {

/**
 * See {@link isc.Process.setTaskOutput() Process.setTaskOutput()}.
 */
setTaskOutput?: Function;

/**
 * See {@link isc.Process.state Process.state}.
 */
state?: Record;

/**
 * See {@link isc.Process.reset() Process.reset()}.
 */
reset?: Function;

/**
 * See {@link isc.Process.getComponentReferences() Process.getComponentReferences()}.
 */
getComponentReferences?: Function;

/**
 * See {@link isc.Process.sequences Process.sequences}.
 */
sequences?: ProcessSequence[];

/**
 * See {@link isc.Process.ruleScope Process.ruleScope}.
 */
ruleScope?: string;

/**
 * See {@link isc.Process.elements Process.elements}.
 */
elements?: ProcessElement[];

/**
 * See {@link isc.Process.wizard Process.wizard}.
 */
wizard?: boolean;

/**
 * See {@link isc.Process.startElement Process.startElement}.
 */
startElement?: string;

/**
 * See {@link isc.Process.getElement() Process.getElement()}.
 */
getElement?: Function;

/**
 * See {@link isc.Process.traceContext Process.traceContext}.
 */
traceContext?: Object;

/**
 * See {@link isc.Process.traceElement() Process.traceElement()}.
 */
traceElement?: Function;

/**
 * See {@link isc.Process.getStateVariable() Process.getStateVariable()}.
 */
getStateVariable?: Function;

/**
 * See {@link isc.Process.setStateVariable() Process.setStateVariable()}.
 */
setStateVariable?: Function;

/**
 * See {@link isc.Process.defaultWaitFor Process.defaultWaitFor}.
 */
defaultWaitFor?: string;

/**
 * See {@link isc.Process.setNextElement() Process.setNextElement()}.
 */
setNextElement?: Function;

/**
 * See {@link isc.Process.getLastTaskOutput() Process.getLastTaskOutput()}.
 */
getLastTaskOutput?: Function;

/**
 * See {@link isc.Process.getProcessDescription() Process.getProcessDescription()}.
 */
getProcessDescription?: Function;

/**
 * See {@link isc.Process.start() Process.start()}.
 */
start?: Function;

/**
 * See {@link isc.Process.mockMode Process.mockMode}.
 */
mockMode?: boolean;

/**
 * See {@link isc.Process.finished() Process.finished()}.
 */
finished?: Function;

/**
 * See {@link isc.Process.defaultWaitDuration Process.defaultWaitDuration}.
 */
defaultWaitDuration?: number;

/**
 * See {@link isc.Process.passThruTaskOutput() Process.passThruTaskOutput()}.
 */
passThruTaskOutput?: Function;

/**
 * See {@link isc.Process.setState() Process.setState()}.
 */
setState?: Function;

/**
 * See {@link isc.Process.containerId Process.containerId}.
 */
containerId?: string;

/**
 * See {@link isc.Process.autoStart Process.autoStart}.
 */
autoStart?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Process wraps the non-rendered SmartClient class
 * {@link isc.Process Process} for React, allowing you to import
 *  Process for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Process extends ILogicalComponent {
    props: AsComponentXML<ProcessProps>;
}
