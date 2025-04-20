import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncSingleValueGenerationResultProps extends AsyncOperationResultProps {

/**
 * See {@link isc.AsyncSingleValueGenerationResult.generatedValue AsyncSingleValueGenerationResult.generatedValue}.
 */
generatedValue?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncSingleValueGenerationResult wraps the SmartClient object
 * {@link isc.AsyncSingleValueGenerationResult AsyncSingleValueGenerationResult} for React, allowing you to import
 * AsyncSingleValueGenerationResult for use in React JS and JSX.
 * @class
 */
declare class AsyncSingleValueGenerationResult extends AsyncOperationResult {
    props: AsComponentXML<AsyncSingleValueGenerationResultProps>;
}
