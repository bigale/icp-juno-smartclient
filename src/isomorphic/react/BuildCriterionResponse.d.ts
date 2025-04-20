import React from 'react';
import { BuildViaAIResponse, BuildViaAIResponseProps } from './BuildViaAIResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildCriterionResponseProps extends BuildViaAIResponseProps {

/**
 * See {@link isc.BuildCriterionResponse.criterion BuildCriterionResponse.criterion}.
 */
criterion?: AdvancedCriteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildCriterionResponse wraps the SmartClient object
 * {@link isc.BuildCriterionResponse BuildCriterionResponse} for React, allowing you to import
 * BuildCriterionResponse for use in React JS and JSX.
 * @class
 */
declare class BuildCriterionResponse extends BuildViaAIResponse {
    props: AsComponentXML<BuildCriterionResponseProps>;
}
