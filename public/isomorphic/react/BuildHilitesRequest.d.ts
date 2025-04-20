import React from 'react';
import { BuildCriterionRequest, BuildCriterionRequestProps } from './BuildCriterionRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildHilitesRequestProps extends BuildCriterionRequestProps {

/**
 * See {@link isc.BuildHilitesRequest.records BuildHilitesRequest.records}.
 */
records?: Record[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildHilitesRequest wraps the SmartClient object
 * {@link isc.BuildHilitesRequest BuildHilitesRequest} for React, allowing you to import
 * BuildHilitesRequest for use in React JS and JSX.
 * @class
 */
declare class BuildHilitesRequest extends BuildCriterionRequest {
    props: AsComponentXML<BuildHilitesRequestProps>;
}
