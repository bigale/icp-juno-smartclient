import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface SuggestRecordSummaryTitleResultProps extends AsyncOperationResultProps {

/**
 * See {@link isc.SuggestRecordSummaryTitleResult.relevantFieldNames SuggestRecordSummaryTitleResult.relevantFieldNames}.
 */
relevantFieldNames?: string[];

/**
 * See {@link isc.SuggestRecordSummaryTitleResult.suggestedTitle SuggestRecordSummaryTitleResult.suggestedTitle}.
 */
suggestedTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SuggestRecordSummaryTitleResult wraps the SmartClient object
 * {@link isc.SuggestRecordSummaryTitleResult SuggestRecordSummaryTitleResult} for React, allowing you to import
 * SuggestRecordSummaryTitleResult for use in React JS and JSX.
 * @class
 */
declare class SuggestRecordSummaryTitleResult extends AsyncOperationResult {
    props: AsComponentXML<SuggestRecordSummaryTitleResultProps>;
}
