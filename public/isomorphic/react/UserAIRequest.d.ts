import React from 'react';
import { SingleSourceAIRequest, SingleSourceAIRequestProps } from './SingleSourceAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface UserAIRequestProps extends SingleSourceAIRequestProps {

/**
 * See {@link isc.UserAIRequest.additionalMessages UserAIRequest.additionalMessages}.
 */
additionalMessages?: AIMessage[];

/**
 * See {@link isc.UserAIRequest.promptType UserAIRequest.promptType}.
 */
promptType?: string;

/**
 * See {@link isc.UserAIRequest.prompt UserAIRequest.prompt}.
 */
prompt?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UserAIRequest wraps the SmartClient object
 * {@link isc.UserAIRequest UserAIRequest} for React, allowing you to import
 * UserAIRequest for use in React JS and JSX.
 * @class
 */
declare class UserAIRequest extends SingleSourceAIRequest {
    props: AsComponentXML<UserAIRequestProps>;
}
