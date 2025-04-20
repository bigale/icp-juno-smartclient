import React from 'react';
import { BuildViaAIResponse, BuildViaAIResponseProps } from './BuildViaAIResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildHilitesResponseProps extends BuildViaAIResponseProps {

/**
 * See {@link isc.BuildHilitesResponse.hilites BuildHilitesResponse.hilites}.
 */
hilites?: Hilite[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildHilitesResponse wraps the SmartClient object
 * {@link isc.BuildHilitesResponse BuildHilitesResponse} for React, allowing you to import
 * BuildHilitesResponse for use in React JS and JSX.
 * @class
 */
declare class BuildHilitesResponse extends BuildViaAIResponse {
    props: AsComponentXML<BuildHilitesResponseProps>;
}
