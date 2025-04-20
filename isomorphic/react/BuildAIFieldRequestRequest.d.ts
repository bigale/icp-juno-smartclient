import React from 'react';
import { BuildViaAIRequest, BuildViaAIRequestProps } from './BuildViaAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildAIFieldRequestRequestProps extends BuildViaAIRequestProps {

/**
 * See {@link isc.BuildAIFieldRequestRequest.dataSource BuildAIFieldRequestRequest.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.BuildAIFieldRequestRequest.showProgressDialog BuildAIFieldRequestRequest.showProgressDialog}.
 */
showProgressDialog?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildAIFieldRequestRequest wraps the SmartClient object
 * {@link isc.BuildAIFieldRequestRequest BuildAIFieldRequestRequest} for React, allowing you to import
 * BuildAIFieldRequestRequest for use in React JS and JSX.
 * @class
 */
declare class BuildAIFieldRequestRequest extends BuildViaAIRequest {
    props: AsComponentXML<BuildAIFieldRequestRequestProps>;
}
