import React from 'react';
import { SingleSourceAIRequest, SingleSourceAIRequestProps } from './SingleSourceAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIFieldRequestProps extends SingleSourceAIRequestProps {

/**
 * See {@link isc.AIFieldRequest.maxRecordsPerBatch AIFieldRequest.maxRecordsPerBatch}.
 */
maxRecordsPerBatch?: number;

/**
 * See {@link isc.AIFieldRequest.valueClass AIFieldRequest.valueClass}.
 */
valueClass?: string;

/**
 * See {@link isc.AIFieldRequest.minValue AIFieldRequest.minValue}.
 */
minValue?: number;

/**
 * See {@link isc.AIFieldRequest.relevantFieldNames AIFieldRequest.relevantFieldNames}.
 */
relevantFieldNames?: string[];

/**
 * See {@link isc.AIFieldRequest.maxValue AIFieldRequest.maxValue}.
 */
maxValue?: number;

/**
 * See {@link isc.AIFieldRequest.categories AIFieldRequest.categories}.
 */
categories?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIFieldRequest wraps the SmartClient object
 * {@link isc.AIFieldRequest AIFieldRequest} for React, allowing you to import
 * AIFieldRequest for use in React JS and JSX.
 * @class
 */
declare class AIFieldRequest extends SingleSourceAIRequest {
    props: AsComponentXML<AIFieldRequestProps>;
}
