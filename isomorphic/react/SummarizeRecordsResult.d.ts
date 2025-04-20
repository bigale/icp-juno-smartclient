import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeRecordsResultProps extends AsyncOperationResultProps {

/**
 * See {@link isc.SummarizeRecordsResult.recordSummaries SummarizeRecordsResult.recordSummaries}.
 */
recordSummaries?: string[];

/**
 * See {@link isc.SummarizeRecordsResult.partialResults SummarizeRecordsResult.partialResults}.
 */
partialResults?: SummarizeRecordsPartialResult[];

/**
 * See {@link isc.SummarizeRecordsResult.recordNumericalSummaries SummarizeRecordsResult.recordNumericalSummaries}.
 */
recordNumericalSummaries?: number[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeRecordsResult wraps the SmartClient object
 * {@link isc.SummarizeRecordsResult SummarizeRecordsResult} for React, allowing you to import
 * SummarizeRecordsResult for use in React JS and JSX.
 * @class
 */
declare class SummarizeRecordsResult extends AsyncOperationResult {
    props: AsComponentXML<SummarizeRecordsResultProps>;
}
