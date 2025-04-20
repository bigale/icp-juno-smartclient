import React from 'react';
import { BuildViaAIResponse, BuildViaAIResponseProps } from './BuildViaAIResponse';
import { AsComponentXML } from './core/ReactComponent';


declare interface ApplyAIFilterResponseProps extends BuildViaAIResponseProps {

/**
 * See {@link isc.ApplyAIFilterResponse.matchingRecords ApplyAIFilterResponse.matchingRecords}.
 */
matchingRecords?: Record[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ApplyAIFilterResponse wraps the SmartClient object
 * {@link isc.ApplyAIFilterResponse ApplyAIFilterResponse} for React, allowing you to import
 * ApplyAIFilterResponse for use in React JS and JSX.
 * @class
 */
declare class ApplyAIFilterResponse extends BuildViaAIResponse {
    props: AsComponentXML<ApplyAIFilterResponseProps>;
}
