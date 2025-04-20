import React from 'react';
import { BuildViaAIContext, BuildViaAIContextProps } from './BuildViaAIContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildAIFieldRequestContextProps extends BuildViaAIContextProps {

/**
 * See {@link isc.BuildAIFieldRequestContext.buildRequest BuildAIFieldRequestContext.buildRequest}.
 */
buildRequest?: BuildAIFieldRequestRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildAIFieldRequestContext wraps the SmartClient object
 * {@link isc.BuildAIFieldRequestContext BuildAIFieldRequestContext} for React, allowing you to import
 * BuildAIFieldRequestContext for use in React JS and JSX.
 * @class
 */
declare class BuildAIFieldRequestContext extends BuildViaAIContext {
    props: AsComponentXML<BuildAIFieldRequestContextProps>;
}
