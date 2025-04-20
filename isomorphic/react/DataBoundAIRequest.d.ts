import React from 'react';
import { AsyncDataBoundOperationParams, AsyncDataBoundOperationParamsProps } from './AsyncDataBoundOperationParams';
import { AsComponentXML } from './core/ReactComponent';


declare interface DataBoundAIRequestProps extends AsyncDataBoundOperationParamsProps {

/**
 * See {@link isc.DataBoundAIRequest.maxRetries DataBoundAIRequest.maxRetries}.
 */
maxRetries?: number;

/**
 * See {@link isc.DataBoundAIRequest.excludeFieldNames DataBoundAIRequest.excludeFieldNames}.
 */
excludeFieldNames?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DataBoundAIRequest wraps the SmartClient object
 * {@link isc.DataBoundAIRequest DataBoundAIRequest} for React, allowing you to import
 * DataBoundAIRequest for use in React JS and JSX.
 * @class
 */
declare class DataBoundAIRequest extends AsyncDataBoundOperationParams {
    props: AsComponentXML<DataBoundAIRequestProps>;
}
