import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIResponseProps extends AsyncOperationResultProps {

/**
 * See {@link isc.AIResponse.message AIResponse.message}.
 */
message?: AIMessage;

/**
 * See {@link isc.AIResponse.errorType AIResponse.errorType}.
 */
errorType?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIResponse wraps the SmartClient object
 * {@link isc.AIResponse AIResponse} for React, allowing you to import
 * AIResponse for use in React JS and JSX.
 * @class
 */
declare class AIResponse extends AsyncOperationResult {
    props: AsComponentXML<AIResponseProps>;
}
