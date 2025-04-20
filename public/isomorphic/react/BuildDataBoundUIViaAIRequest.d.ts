import React from 'react';
import { BuildUIViaAIRequest, BuildUIViaAIRequestProps } from './BuildUIViaAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildDataBoundUIViaAIRequestProps extends BuildUIViaAIRequestProps {

/**
 * See {@link isc.BuildDataBoundUIViaAIRequest.availableDataSources BuildDataBoundUIViaAIRequest.availableDataSources}.
 */
availableDataSources?: string[];

/**
 * See {@link isc.BuildDataBoundUIViaAIRequest.allowedUITypes BuildDataBoundUIViaAIRequest.allowedUITypes}.
 */
allowedUITypes?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildDataBoundUIViaAIRequest wraps the SmartClient object
 * {@link isc.BuildDataBoundUIViaAIRequest BuildDataBoundUIViaAIRequest} for React, allowing you to import
 * BuildDataBoundUIViaAIRequest for use in React JS and JSX.
 * @class
 */
declare class BuildDataBoundUIViaAIRequest extends BuildUIViaAIRequest {
    props: AsComponentXML<BuildDataBoundUIViaAIRequestProps>;
}
