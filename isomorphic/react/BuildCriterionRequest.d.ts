import React from 'react';
import { BuildViaAIRequest, BuildViaAIRequestProps } from './BuildViaAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildCriterionRequestProps extends BuildViaAIRequestProps {

/**
 * See {@link isc.BuildCriterionRequest.dataSource BuildCriterionRequest.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.BuildCriterionRequest.userAIRequest BuildCriterionRequest.userAIRequest}.
 */
userAIRequest?: UserAIRequest;

/**
 * See {@link isc.BuildCriterionRequest.mode BuildCriterionRequest.mode}.
 */
mode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildCriterionRequest wraps the SmartClient object
 * {@link isc.BuildCriterionRequest BuildCriterionRequest} for React, allowing you to import
 * BuildCriterionRequest for use in React JS and JSX.
 * @class
 */
declare class BuildCriterionRequest extends BuildViaAIRequest {
    props: AsComponentXML<BuildCriterionRequestProps>;
}
