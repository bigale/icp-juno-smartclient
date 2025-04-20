import React from 'react';
import { BuildViaAIResponse, BuildViaAIResponseProps } from './BuildViaAIResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildUIViaAIResponseProps extends BuildViaAIResponseProps {

/**
 * See {@link isc.BuildUIViaAIResponse.jsCode BuildUIViaAIResponse.jsCode}.
 */
jsCode?: string;

/**
 * See {@link isc.BuildUIViaAIResponse.nodes BuildUIViaAIResponse.nodes}.
 */
nodes?: PaletteNode[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildUIViaAIResponse wraps the SmartClient object
 * {@link isc.BuildUIViaAIResponse BuildUIViaAIResponse} for React, allowing you to import
 * BuildUIViaAIResponse for use in React JS and JSX.
 * @class
 */
declare class BuildUIViaAIResponse extends BuildViaAIResponse {
    props: AsComponentXML<BuildUIViaAIResponseProps>;
}
