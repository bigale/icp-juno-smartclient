import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeValueResultProps extends AsyncOperationResultProps {

/**
 * See {@link isc.SummarizeValueResult.summary SummarizeValueResult.summary}.
 */
summary?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeValueResult wraps the SmartClient object
 * {@link isc.SummarizeValueResult SummarizeValueResult} for React, allowing you to import
 * SummarizeValueResult for use in React JS and JSX.
 * @class
 */
declare class SummarizeValueResult extends AsyncOperationResult {
    props: AsComponentXML<SummarizeValueResultProps>;
}
