import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TestFunctionResultProps {

/**
 * See {@link isc.TestFunctionResult.record TestFunctionResult.record}.
 */
record?: Record;

/**
 * See {@link isc.TestFunctionResult.result TestFunctionResult.result}.
 */
result?: string;

/**
 * See {@link isc.TestFunctionResult.errorText TestFunctionResult.errorText}.
 */
errorText?: string;

/**
 * See {@link isc.TestFunctionResult.failedGeneration TestFunctionResult.failedGeneration}.
 */
failedGeneration?: boolean;

/**
 * See {@link isc.TestFunctionResult.emptyTestValue TestFunctionResult.emptyTestValue}.
 */
emptyTestValue?: boolean;

/**
 * See {@link isc.TestFunctionResult.failedExecution TestFunctionResult.failedExecution}.
 */
failedExecution?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TestFunctionResult wraps the SmartClient object
 * {@link isc.TestFunctionResult TestFunctionResult} for React, allowing you to import
 * TestFunctionResult for use in React JS and JSX.
 * @class
 */
declare class TestFunctionResult extends ILogicalComponent {
    props: AsComponentXML<TestFunctionResultProps>;
}
