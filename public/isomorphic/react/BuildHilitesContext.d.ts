import React from 'react';
import { BuildViaAIContext, BuildViaAIContextProps } from './BuildViaAIContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildHilitesContextProps extends BuildViaAIContextProps {

/**
 * See {@link isc.BuildHilitesContext.buildRequest BuildHilitesContext.buildRequest}.
 */
buildRequest?: BuildHilitesRequest;

/**
 * See {@link isc.BuildHilitesContext.mode BuildHilitesContext.mode}.
 */
mode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildHilitesContext wraps the SmartClient object
 * {@link isc.BuildHilitesContext BuildHilitesContext} for React, allowing you to import
 * BuildHilitesContext for use in React JS and JSX.
 * @class
 */
declare class BuildHilitesContext extends BuildViaAIContext {
    props: AsComponentXML<BuildHilitesContextProps>;
}
