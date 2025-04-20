import React from 'react';
import { BuildViaAIRequest, BuildViaAIRequestProps } from './BuildViaAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildUIViaAIRequestProps extends BuildViaAIRequestProps {

/**
 * See {@link isc.BuildUIViaAIRequest.maxValidationRetries BuildUIViaAIRequest.maxValidationRetries}.
 */
maxValidationRetries?: number;

/**
 * See {@link isc.BuildUIViaAIRequest.validationTypes BuildUIViaAIRequest.validationTypes}.
 */
validationTypes?: string[];

/**
 * See {@link isc.BuildUIViaAIRequest.allowedUITypes BuildUIViaAIRequest.allowedUITypes}.
 */
allowedUITypes?: string[];

/**
 * See {@link isc.BuildUIViaAIRequest.userAIRequest BuildUIViaAIRequest.userAIRequest}.
 */
userAIRequest?: UserAIRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildUIViaAIRequest wraps the SmartClient object
 * {@link isc.BuildUIViaAIRequest BuildUIViaAIRequest} for React, allowing you to import
 * BuildUIViaAIRequest for use in React JS and JSX.
 * @class
 */
declare class BuildUIViaAIRequest extends BuildViaAIRequest {
    props: AsComponentXML<BuildUIViaAIRequestProps>;
}
