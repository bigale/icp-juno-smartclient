import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIEngineProps {

/**
 * See {@link isc.AIEngine.canSupportVisionRequests() AIEngine.canSupportVisionRequests()}.
 */
canSupportVisionRequests?: Function;

/**
 * See {@link isc.AIEngine.couldSupportRequest() AIEngine.couldSupportRequest()}.
 */
couldSupportRequest?: Function;

/**
 * See {@link isc.AIEngine.name AIEngine.name}.
 */
name?: string;

/**
 * See {@link isc.AIEngine.sendRequest() AIEngine.sendRequest()}.
 */
sendRequest?: Function;

/**
 * See {@link isc.AIEngine.engineId AIEngine.engineId}.
 */
engineId?: string;

/**
 * See {@link isc.AIEngine.provider AIEngine.provider}.
 */
provider?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIEngine wraps the non-rendered SmartClient class
 * {@link isc.AIEngine AIEngine} for React, allowing you to import
 *  AIEngine for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class AIEngine extends ILogicalComponent {
    props: AsComponentXML<AIEngineProps>;
}
