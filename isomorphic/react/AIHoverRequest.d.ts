import React from 'react';
import { SystemAIRequest, SystemAIRequestProps } from './SystemAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIHoverRequestProps extends SystemAIRequestProps {

/**
 * See {@link isc.AIHoverRequest.relevantFieldNames AIHoverRequest.relevantFieldNames}.
 */
relevantFieldNames?: string[];

/**
 * See {@link isc.AIHoverRequest.examples AIHoverRequest.examples}.
 */
examples?: SummarizeValueExample[];

/**
 * See {@link isc.AIHoverRequest.includeRecord AIHoverRequest.includeRecord}.
 */
includeRecord?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIHoverRequest wraps the SmartClient object
 * {@link isc.AIHoverRequest AIHoverRequest} for React, allowing you to import
 * AIHoverRequest for use in React JS and JSX.
 * @class
 */
declare class AIHoverRequest extends SystemAIRequest {
    props: AsComponentXML<AIHoverRequestProps>;
}
