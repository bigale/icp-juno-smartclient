import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface EventHandlerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EventHandler wraps the non-rendered SmartClient class
 * {@link isc.EventHandler EventHandler} for React, allowing you to import
 *  EventHandler for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class EventHandler extends ILogicalComponent {
    props: AsComponentXML<EventHandlerProps>;
}
