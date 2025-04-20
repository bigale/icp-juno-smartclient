import React from 'react';
import { AsyncOperationResult, AsyncOperationResultProps } from './AsyncOperationResult';
import { AsComponentXML } from './core/ReactComponent';


declare interface BuildViaAIResponseProps extends AsyncOperationResultProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BuildViaAIResponse wraps the SmartClient object
 * {@link isc.BuildViaAIResponse BuildViaAIResponse} for React, allowing you to import
 * BuildViaAIResponse for use in React JS and JSX.
 * @class
 */
declare class BuildViaAIResponse extends AsyncOperationResult {
    props: AsComponentXML<BuildViaAIResponseProps>;
}
