import React from 'react';
import { AsyncOperationContext, AsyncOperationContextProps } from './AsyncOperationContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncDataBoundOperationContextProps extends AsyncOperationContextProps {

/**
 * See {@link isc.AsyncDataBoundOperationContext.dataSource AsyncDataBoundOperationContext.dataSource}.
 */
dataSource?: DataSource;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncDataBoundOperationContext wraps the SmartClient object
 * {@link isc.AsyncDataBoundOperationContext AsyncDataBoundOperationContext} for React, allowing you to import
 * AsyncDataBoundOperationContext for use in React JS and JSX.
 * @class
 */
declare class AsyncDataBoundOperationContext extends AsyncOperationContext {
    props: AsComponentXML<AsyncDataBoundOperationContextProps>;
}
