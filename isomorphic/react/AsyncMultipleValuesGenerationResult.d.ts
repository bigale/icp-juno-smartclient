import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncMultipleValuesGenerationResultProps extends AsyncOperationResultProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncMultipleValuesGenerationResult wraps the SmartClient object
 * {@link isc.AsyncMultipleValuesGenerationResult AsyncMultipleValuesGenerationResult} for React, allowing you to import
 * AsyncMultipleValuesGenerationResult for use in React JS and JSX.
 * @class
 */
declare class AsyncMultipleValuesGenerationResult extends AsyncOperationResult {
    props: AsComponentXML<AsyncMultipleValuesGenerationResultProps>;
}
