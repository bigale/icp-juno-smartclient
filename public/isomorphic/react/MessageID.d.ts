import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MessageIDProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MessageID wraps the SmartClient object
 * {@link isc.MessageID MessageID} for React, allowing you to import
 * MessageID for use in React JS and JSX.
 * @class
 */
declare class MessageID extends ILogicalComponent {
    props: AsComponentXML<MessageIDProps>;
}
