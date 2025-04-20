import React from 'react';
import { BuildUIViaAIContext, BuildUIViaAIContextProps } from './BuildUIViaAIContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildDataBoundUIViaAIContextProps extends BuildUIViaAIContextProps {

/**
 * See {@link isc.BuildDataBoundUIViaAIContext.buildRequest BuildDataBoundUIViaAIContext.buildRequest}.
 */
buildRequest?: BuildDataBoundUIViaAIRequest;

/**
 * See {@link isc.BuildDataBoundUIViaAIContext.dataSource BuildDataBoundUIViaAIContext.dataSource}.
 */
dataSource?: DataSource;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildDataBoundUIViaAIContext wraps the SmartClient object
 * {@link isc.BuildDataBoundUIViaAIContext BuildDataBoundUIViaAIContext} for React, allowing you to import
 * BuildDataBoundUIViaAIContext for use in React JS and JSX.
 * @class
 */
declare class BuildDataBoundUIViaAIContext extends BuildUIViaAIContext {
    props: AsComponentXML<BuildDataBoundUIViaAIContextProps>;
}
