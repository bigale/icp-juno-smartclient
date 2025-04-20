import React from 'react';
import { BuildViaAIContext, BuildViaAIContextProps } from './BuildViaAIContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildCriterionContextProps extends BuildViaAIContextProps {

/**
 * See {@link isc.BuildCriterionContext.mode BuildCriterionContext.mode}.
 */
mode?: string;

/**
 * See {@link isc.BuildCriterionContext.buildRequest BuildCriterionContext.buildRequest}.
 */
buildRequest?: BuildCriterionRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildCriterionContext wraps the SmartClient object
 * {@link isc.BuildCriterionContext BuildCriterionContext} for React, allowing you to import
 * BuildCriterionContext for use in React JS and JSX.
 * @class
 */
declare class BuildCriterionContext extends BuildViaAIContext {
    props: AsComponentXML<BuildCriterionContextProps>;
}
