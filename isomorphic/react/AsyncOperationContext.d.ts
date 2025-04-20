import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncOperationContextProps {

/**
 * See {@link isc.AsyncOperationContext.cancellationController AsyncOperationContext.cancellationController}.
 */
cancellationController?: CancellationController;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncOperationContext wraps the SmartClient object
 * {@link isc.AsyncOperationContext AsyncOperationContext} for React, allowing you to import
 * AsyncOperationContext for use in React JS and JSX.
 * @class
 */
declare class AsyncOperationContext extends ILogicalComponent {
    props: AsComponentXML<AsyncOperationContextProps>;
}
