import React from 'react';
import { AsyncOperationParams, AsyncOperationParamsProps } from './AsyncOperationParams';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncDataBoundOperationParamsProps extends AsyncOperationParamsProps {

/**
 * See {@link isc.AsyncDataBoundOperationParams.dataSource AsyncDataBoundOperationParams.dataSource}.
 */
dataSource?: DataSource;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncDataBoundOperationParams wraps the SmartClient object
 * {@link isc.AsyncDataBoundOperationParams AsyncDataBoundOperationParams} for React, allowing you to import
 * AsyncDataBoundOperationParams for use in React JS and JSX.
 * @class
 */
declare class AsyncDataBoundOperationParams extends AsyncOperationParams {
    props: AsComponentXML<AsyncDataBoundOperationParamsProps>;
}
