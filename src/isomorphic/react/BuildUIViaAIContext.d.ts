import React from 'react';
import { BuildViaAIContext, BuildViaAIContextProps } from './BuildViaAIContext';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildUIViaAIContextProps extends BuildViaAIContextProps {

/**
 * See {@link isc.BuildUIViaAIContext.buildRequest BuildUIViaAIContext.buildRequest}.
 */
buildRequest?: BuildUIViaAIRequest;

/**
 * See {@link isc.BuildUIViaAIContext.nodes BuildUIViaAIContext.nodes}.
 */
nodes?: PaletteNode[];

/**
 * See {@link isc.BuildUIViaAIContext.jsCode BuildUIViaAIContext.jsCode}.
 */
jsCode?: string;

/**
 * See {@link isc.BuildUIViaAIContext.uiType BuildUIViaAIContext.uiType}.
 */
uiType?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildUIViaAIContext wraps the SmartClient object
 * {@link isc.BuildUIViaAIContext BuildUIViaAIContext} for React, allowing you to import
 * BuildUIViaAIContext for use in React JS and JSX.
 * @class
 */
declare class BuildUIViaAIContext extends BuildViaAIContext {
    props: AsComponentXML<BuildUIViaAIContextProps>;
}
