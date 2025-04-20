import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncOperationResultProps {

/**
 * See {@link isc.AsyncOperationResult.cancellationReason AsyncOperationResult.cancellationReason}.
 */
cancellationReason?: string;

/**
 * See {@link isc.AsyncOperationResult.errorMessage AsyncOperationResult.errorMessage}.
 */
errorMessage?: string;

/**
 * See {@link isc.AsyncOperationResult.disabledMessage AsyncOperationResult.disabledMessage}.
 */
disabledMessage?: string;

/**
 * See {@link isc.AsyncOperationResult.type AsyncOperationResult.type}.
 */
type?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncOperationResult wraps the SmartClient object
 * {@link isc.AsyncOperationResult AsyncOperationResult} for React, allowing you to import
 * AsyncOperationResult for use in React JS and JSX.
 * @class
 */
declare class AsyncOperationResult extends ILogicalComponent {
    props: AsComponentXML<AsyncOperationResultProps>;
}
