import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeRecordsPartialResultProps extends AsyncOperationResultProps {

/**
 * See {@link isc.SummarizeRecordsPartialResult.startIndex SummarizeRecordsPartialResult.startIndex}.
 */
startIndex?: number;

/**
 * See {@link isc.SummarizeRecordsPartialResult.recordSummaries SummarizeRecordsPartialResult.recordSummaries}.
 */
recordSummaries?: string[];

/**
 * See {@link isc.SummarizeRecordsPartialResult.recordNumericalSummaries SummarizeRecordsPartialResult.recordNumericalSummaries}.
 */
recordNumericalSummaries?: number[];

/**
 * See {@link isc.SummarizeRecordsPartialResult.length SummarizeRecordsPartialResult.length}.
 */
length?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeRecordsPartialResult wraps the SmartClient object
 * {@link isc.SummarizeRecordsPartialResult SummarizeRecordsPartialResult} for React, allowing you to import
 * SummarizeRecordsPartialResult for use in React JS and JSX.
 * @class
 */
declare class SummarizeRecordsPartialResult extends AsyncOperationResult {
    props: AsComponentXML<SummarizeRecordsPartialResultProps>;
}
