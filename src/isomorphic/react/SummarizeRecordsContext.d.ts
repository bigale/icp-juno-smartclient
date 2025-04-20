import React from 'react';
import { AsyncOperationContext, AsyncOperationContextProps } from './AsyncOperationContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeRecordsContextProps extends AsyncOperationContextProps {

/**
 * See {@link isc.SummarizeRecordsContext.request SummarizeRecordsContext.request}.
 */
request?: SummarizeRecordsRequest;

/**
 * See {@link isc.SummarizeRecordsContext.partialResults SummarizeRecordsContext.partialResults}.
 */
partialResults?: SummarizeRecordsPartialResult[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeRecordsContext wraps the SmartClient object
 * {@link isc.SummarizeRecordsContext SummarizeRecordsContext} for React, allowing you to import
 * SummarizeRecordsContext for use in React JS and JSX.
 * @class
 */
declare class SummarizeRecordsContext extends AsyncOperationContext {
    props: AsComponentXML<SummarizeRecordsContextProps>;
}
