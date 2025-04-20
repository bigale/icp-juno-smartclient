import React from 'react';
import { BuildViaAIRequest, BuildViaAIRequestProps } from './BuildViaAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface ReapplyAIFilterRequestProps extends BuildViaAIRequestProps {

/**
 * See {@link isc.ReapplyAIFilterRequest.showProgressDialog ReapplyAIFilterRequest.showProgressDialog}.
 */
showProgressDialog?: boolean;

/**
 * See {@link isc.ReapplyAIFilterRequest.updatedRecords ReapplyAIFilterRequest.updatedRecords}.
 */
updatedRecords?: Record[];

/**
 * See {@link isc.ReapplyAIFilterRequest.aiCriterion ReapplyAIFilterRequest.aiCriterion}.
 */
aiCriterion?: AdvancedCriteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ReapplyAIFilterRequest wraps the SmartClient object
 * {@link isc.ReapplyAIFilterRequest ReapplyAIFilterRequest} for React, allowing you to import
 * ReapplyAIFilterRequest for use in React JS and JSX.
 * @class
 */
declare class ReapplyAIFilterRequest extends BuildViaAIRequest {
    props: AsComponentXML<ReapplyAIFilterRequestProps>;
}
