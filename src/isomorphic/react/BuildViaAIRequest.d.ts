import React from 'react';
import { AsyncOperationParams, AsyncOperationParamsProps } from './AsyncOperationParams';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildViaAIRequestProps extends AsyncOperationParamsProps {

/**
 * See {@link isc.BuildViaAIRequest.userCanCancel BuildViaAIRequest.userCanCancel}.
 */
userCanCancel?: boolean;

/**
 * See {@link isc.BuildViaAIRequest.userAIRequest BuildViaAIRequest.userAIRequest}.
 */
userAIRequest?: UserAIRequest;

/**
 * See {@link isc.BuildViaAIRequest.showProgressDialog BuildViaAIRequest.showProgressDialog}.
 */
showProgressDialog?: boolean;

/**
 * See {@link isc.BuildViaAIRequest.maxRetries BuildViaAIRequest.maxRetries}.
 */
maxRetries?: number;

/**
 * See {@link isc.BuildViaAIRequest.progressDialogProperties BuildViaAIRequest.progressDialogProperties}.
 */
progressDialogProperties?: BuildViaAIProgressDialog;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildViaAIRequest wraps the SmartClient object
 * {@link isc.BuildViaAIRequest BuildViaAIRequest} for React, allowing you to import
 * BuildViaAIRequest for use in React JS and JSX.
 * @class
 */
declare class BuildViaAIRequest extends AsyncOperationParams {
    props: AsComponentXML<BuildViaAIRequestProps>;
}
