import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIProgressMessageProps {

/**
 * See {@link isc.AIProgressMessage.content AIProgressMessage.content}.
 */
content?: string;

/**
 * See {@link isc.AIProgressMessage.category AIProgressMessage.category}.
 */
category?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIProgressMessage wraps the SmartClient object
 * {@link isc.AIProgressMessage AIProgressMessage} for React, allowing you to import
 * AIProgressMessage for use in React JS and JSX.
 * @class
 */
declare class AIProgressMessage extends ILogicalComponent {
    props: AsComponentXML<AIProgressMessageProps>;
}
