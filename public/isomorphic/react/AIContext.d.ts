import React from 'react';
import { AsyncOperationContext, AsyncOperationContextProps } from './AsyncOperationContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIContextProps extends AsyncOperationContextProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIContext wraps the SmartClient object
 * {@link isc.AIContext AIContext} for React, allowing you to import
 * AIContext for use in React JS and JSX.
 * @class
 */
declare class AIContext extends AsyncOperationContext {
    props: AsComponentXML<AIContextProps>;
}
