import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MessagingProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Messaging wraps the non-rendered SmartClient class
 * {@link isc.Messaging Messaging} for React, allowing you to import
 *  Messaging for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Messaging extends ILogicalComponent {
    props: AsComponentXML<MessagingProps>;
}
