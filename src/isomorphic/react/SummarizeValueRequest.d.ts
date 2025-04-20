import React from 'react';
import { DataBoundAIRequest, DataBoundAIRequestProps } from './DataBoundAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeValueRequestProps extends DataBoundAIRequestProps {

/**
 * See {@link isc.SummarizeValueRequest.dataSource SummarizeValueRequest.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.SummarizeValueRequest.valueType SummarizeValueRequest.valueType}.
 */
valueType?: string;

/**
 * See {@link isc.SummarizeValueRequest.aiRequest SummarizeValueRequest.aiRequest}.
 */
aiRequest?: SingleSourceAIRequest;

/**
 * See {@link isc.SummarizeValueRequest.examples SummarizeValueRequest.examples}.
 */
examples?: SummarizeValueExample[];

/**
 * See {@link isc.SummarizeValueRequest.relevantFieldNames SummarizeValueRequest.relevantFieldNames}.
 */
relevantFieldNames?: string[];

/**
 * See {@link isc.SummarizeValueRequest.record SummarizeValueRequest.record}.
 */
record?: Record;

/**
 * See {@link isc.SummarizeValueRequest.fieldName SummarizeValueRequest.fieldName}.
 */
fieldName?: string;

/**
 * See {@link isc.SummarizeValueRequest.value SummarizeValueRequest.value}.
 */
value?: any;

/**
 * See {@link isc.SummarizeValueRequest.aiRequestSource SummarizeValueRequest.aiRequestSource}.
 */
aiRequestSource?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeValueRequest wraps the SmartClient object
 * {@link isc.SummarizeValueRequest SummarizeValueRequest} for React, allowing you to import
 * SummarizeValueRequest for use in React JS and JSX.
 * @class
 */
declare class SummarizeValueRequest extends DataBoundAIRequest {
    props: AsComponentXML<SummarizeValueRequestProps>;
}
