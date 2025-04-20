import React from 'react';
import { DataBoundAIRequest, DataBoundAIRequestProps } from './DataBoundAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface SuggestRecordSummaryTitleRequestProps extends DataBoundAIRequestProps {

/**
 * See {@link isc.SuggestRecordSummaryTitleRequest.aiRequest SuggestRecordSummaryTitleRequest.aiRequest}.
 */
aiRequest?: SingleSourceAIRequest;

/**
 * See {@link isc.SuggestRecordSummaryTitleRequest.aiRequestSource SuggestRecordSummaryTitleRequest.aiRequestSource}.
 */
aiRequestSource?: string;

/**
 * See {@link isc.SuggestRecordSummaryTitleRequest.visibleFieldNames SuggestRecordSummaryTitleRequest.visibleFieldNames}.
 */
visibleFieldNames?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SuggestRecordSummaryTitleRequest wraps the SmartClient object
 * {@link isc.SuggestRecordSummaryTitleRequest SuggestRecordSummaryTitleRequest} for React, allowing you to import
 * SuggestRecordSummaryTitleRequest for use in React JS and JSX.
 * @class
 */
declare class SuggestRecordSummaryTitleRequest extends DataBoundAIRequest {
    props: AsComponentXML<SuggestRecordSummaryTitleRequestProps>;
}
