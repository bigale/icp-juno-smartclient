import React from 'react';
import { BuildViaAIRequest, BuildViaAIRequestProps } from './BuildViaAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface ApplyAIFilterRequestProps extends BuildViaAIRequestProps {

/**
 * See {@link isc.ApplyAIFilterRequest.aiCriterion ApplyAIFilterRequest.aiCriterion}.
 */
aiCriterion?: AdvancedCriteria;

/**
 * See {@link isc.ApplyAIFilterRequest.showProgressDialog ApplyAIFilterRequest.showProgressDialog}.
 */
showProgressDialog?: boolean;

/**
 * See {@link isc.ApplyAIFilterRequest.records ApplyAIFilterRequest.records}.
 */
records?: Record[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ApplyAIFilterRequest wraps the SmartClient object
 * {@link isc.ApplyAIFilterRequest ApplyAIFilterRequest} for React, allowing you to import
 * ApplyAIFilterRequest for use in React JS and JSX.
 * @class
 */
declare class ApplyAIFilterRequest extends BuildViaAIRequest {
    props: AsComponentXML<ApplyAIFilterRequestProps>;
}
