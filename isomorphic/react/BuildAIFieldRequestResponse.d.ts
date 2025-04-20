import React from 'react';
import { BuildViaAIResponse, BuildViaAIResponseProps } from './BuildViaAIResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildAIFieldRequestResponseProps extends BuildViaAIResponseProps {

/**
 * See {@link isc.BuildAIFieldRequestResponse.aiFieldRequest BuildAIFieldRequestResponse.aiFieldRequest}.
 */
aiFieldRequest?: AIFieldRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildAIFieldRequestResponse wraps the SmartClient object
 * {@link isc.BuildAIFieldRequestResponse BuildAIFieldRequestResponse} for React, allowing you to import
 * BuildAIFieldRequestResponse for use in React JS and JSX.
 * @class
 */
declare class BuildAIFieldRequestResponse extends BuildViaAIResponse {
    props: AsComponentXML<BuildAIFieldRequestResponseProps>;
}
