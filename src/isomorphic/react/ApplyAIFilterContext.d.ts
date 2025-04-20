import React from 'react';
import { BuildViaAIContext, BuildViaAIContextProps } from './BuildViaAIContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface ApplyAIFilterContextProps extends BuildViaAIContextProps {

/**
 * See {@link isc.ApplyAIFilterContext.buildRequest ApplyAIFilterContext.buildRequest}.
 */
buildRequest?: ApplyAIFilterRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ApplyAIFilterContext wraps the SmartClient object
 * {@link isc.ApplyAIFilterContext ApplyAIFilterContext} for React, allowing you to import
 * ApplyAIFilterContext for use in React JS and JSX.
 * @class
 */
declare class ApplyAIFilterContext extends BuildViaAIContext {
    props: AsComponentXML<ApplyAIFilterContextProps>;
}
