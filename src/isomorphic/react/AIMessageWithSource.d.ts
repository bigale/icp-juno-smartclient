import React from 'react';
import { AIMessage, AIMessageProps } from './AIMessage';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIMessageWithSourceProps extends AIMessageProps {

/**
 * See {@link isc.AIMessageWithSource.source AIMessageWithSource.source}.
 */
source?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIMessageWithSource wraps the SmartClient object
 * {@link isc.AIMessageWithSource AIMessageWithSource} for React, allowing you to import
 * AIMessageWithSource for use in React JS and JSX.
 * @class
 */
declare class AIMessageWithSource extends AIMessage {
    props: AsComponentXML<AIMessageWithSourceProps>;
}
