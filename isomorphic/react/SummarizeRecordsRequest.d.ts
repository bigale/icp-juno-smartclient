import React from 'react';
import { DataBoundAIRequest, DataBoundAIRequestProps } from './DataBoundAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeRecordsRequestProps extends DataBoundAIRequestProps {

/**
 * See {@link isc.SummarizeRecordsRequest.aiFieldRequest SummarizeRecordsRequest.aiFieldRequest}.
 */
aiFieldRequest?: AIFieldRequest;

/**
 * See {@link isc.SummarizeRecordsRequest.dataSource SummarizeRecordsRequest.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.SummarizeRecordsRequest.cancellationController SummarizeRecordsRequest.cancellationController}.
 */
cancellationController?: CancellationController;

/**
 * See {@link isc.SummarizeRecordsRequest.records SummarizeRecordsRequest.records}.
 */
records?: Record[];

/**
 * See {@link isc.SummarizeRecordsRequest.maxConcurrent SummarizeRecordsRequest.maxConcurrent}.
 */
maxConcurrent?: number;

/**
 * See {@link isc.SummarizeRecordsRequest.maxRetries SummarizeRecordsRequest.maxRetries}.
 */
maxRetries?: number;

/**
 * See {@link isc.SummarizeRecordsRequest.maxRecordsPerBatch SummarizeRecordsRequest.maxRecordsPerBatch}.
 */
maxRecordsPerBatch?: number;

/**
 * See {@link isc.SummarizeRecordsRequest.aiFieldRequestSource SummarizeRecordsRequest.aiFieldRequestSource}.
 */
aiFieldRequestSource?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeRecordsRequest wraps the SmartClient object
 * {@link isc.SummarizeRecordsRequest SummarizeRecordsRequest} for React, allowing you to import
 * SummarizeRecordsRequest for use in React JS and JSX.
 * @class
 */
declare class SummarizeRecordsRequest extends DataBoundAIRequest {
    props: AsComponentXML<SummarizeRecordsRequestProps>;
}
