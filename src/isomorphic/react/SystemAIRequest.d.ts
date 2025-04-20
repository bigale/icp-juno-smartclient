import React from 'react';
import { SingleSourceAIRequest, SingleSourceAIRequestProps } from './SingleSourceAIRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface SystemAIRequestProps extends SingleSourceAIRequestProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SystemAIRequest wraps the SmartClient object
 * {@link isc.SystemAIRequest SystemAIRequest} for React, allowing you to import
 * SystemAIRequest for use in React JS and JSX.
 * @class
 */
declare class SystemAIRequest extends SingleSourceAIRequest {
    props: AsComponentXML<SystemAIRequestProps>;
}
