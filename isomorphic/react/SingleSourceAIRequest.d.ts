import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SingleSourceAIRequestProps {

/**
 * See {@link isc.SingleSourceAIRequest.prompt SingleSourceAIRequest.prompt}.
 */
prompt?: any;

/**
 * See {@link isc.SingleSourceAIRequest.promptType SingleSourceAIRequest.promptType}.
 */
promptType?: string;

/**
 * See {@link isc.SingleSourceAIRequest.additionalMessages SingleSourceAIRequest.additionalMessages}.
 */
additionalMessages?: AIMessage[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SingleSourceAIRequest wraps the SmartClient object
 * {@link isc.SingleSourceAIRequest SingleSourceAIRequest} for React, allowing you to import
 * SingleSourceAIRequest for use in React JS and JSX.
 * @class
 */
declare class SingleSourceAIRequest extends ILogicalComponent {
    props: AsComponentXML<SingleSourceAIRequestProps>;
}
