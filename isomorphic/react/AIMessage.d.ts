import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIMessageProps {

/**
 * See {@link isc.AIMessage.type AIMessage.type}.
 */
type?: string;

/**
 * See {@link isc.AIMessage.content AIMessage.content}.
 */
content?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIMessage wraps the SmartClient object
 * {@link isc.AIMessage AIMessage} for React, allowing you to import
 * AIMessage for use in React JS and JSX.
 * @class
 */
declare class AIMessage extends ILogicalComponent {
    props: AsComponentXML<AIMessageProps>;
}
