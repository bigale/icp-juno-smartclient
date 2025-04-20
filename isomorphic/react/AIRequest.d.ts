import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIRequestProps {

/**
 * See {@link isc.AIRequest.cancellationController AIRequest.cancellationController}.
 */
cancellationController?: CancellationController;

/**
 * See {@link isc.AIRequest.historyConclusion AIRequest.historyConclusion}.
 */
historyConclusion?: string;

/**
 * See {@link isc.AIRequest.responseType AIRequest.responseType}.
 */
responseType?: string;

/**
 * See {@link isc.AIRequest.responseMinimum AIRequest.responseMinimum}.
 */
responseMinimum?: number;

/**
 * See {@link isc.AIRequest.historyIntroduction AIRequest.historyIntroduction}.
 */
historyIntroduction?: string;

/**
 * See {@link isc.AIRequest.temperature AIRequest.temperature}.
 */
temperature?: number;

/**
 * See {@link isc.AIRequest.messages AIRequest.messages}.
 */
messages?: AIMessageWithSource[];

/**
 * See {@link isc.AIRequest.prompt AIRequest.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.AIRequest.responseMaximum AIRequest.responseMaximum}.
 */
responseMaximum?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIRequest wraps the SmartClient object
 * {@link isc.AIRequest AIRequest} for React, allowing you to import
 * AIRequest for use in React JS and JSX.
 * @class
 */
declare class AIRequest extends ILogicalComponent {
    props: AsComponentXML<AIRequestProps>;
}
