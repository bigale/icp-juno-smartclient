import React from 'react';
import { AsyncOperationContext, AsyncOperationContextProps } from './AsyncOperationContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildViaAIContextProps extends AsyncOperationContextProps {

/**
 * See {@link isc.BuildViaAIContext.buildRequest BuildViaAIContext.buildRequest}.
 */
buildRequest?: BuildViaAIRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildViaAIContext wraps the SmartClient object
 * {@link isc.BuildViaAIContext BuildViaAIContext} for React, allowing you to import
 * BuildViaAIContext for use in React JS and JSX.
 * @class
 */
declare class BuildViaAIContext extends AsyncOperationContext {
    props: AsComponentXML<BuildViaAIContextProps>;
}
