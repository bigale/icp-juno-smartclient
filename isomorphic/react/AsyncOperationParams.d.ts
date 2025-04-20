import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncOperationParamsProps {

/**
 * See {@link isc.AsyncOperationParams.cancellationController AsyncOperationParams.cancellationController}.
 */
cancellationController?: CancellationController;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncOperationParams wraps the SmartClient object
 * {@link isc.AsyncOperationParams AsyncOperationParams} for React, allowing you to import
 * AsyncOperationParams for use in React JS and JSX.
 * @class
 */
declare class AsyncOperationParams extends ILogicalComponent {
    props: AsComponentXML<AsyncOperationParamsProps>;
}
