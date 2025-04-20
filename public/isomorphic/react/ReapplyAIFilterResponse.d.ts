import React from 'react';
import { BuildViaAIResponse, BuildViaAIResponseProps } from './BuildViaAIResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface ReapplyAIFilterResponseProps extends BuildViaAIResponseProps {

/**
 * See {@link isc.ReapplyAIFilterResponse.matchingUpdatedRecords ReapplyAIFilterResponse.matchingUpdatedRecords}.
 */
matchingUpdatedRecords?: Record[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ReapplyAIFilterResponse wraps the SmartClient object
 * {@link isc.ReapplyAIFilterResponse ReapplyAIFilterResponse} for React, allowing you to import
 * ReapplyAIFilterResponse for use in React JS and JSX.
 * @class
 */
declare class ReapplyAIFilterResponse extends BuildViaAIResponse {
    props: AsComponentXML<ReapplyAIFilterResponseProps>;
}
