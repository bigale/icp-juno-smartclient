import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TimerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Timer wraps the non-rendered SmartClient class
 * {@link isc.Timer Timer} for React, allowing you to import
 *  Timer for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Timer extends ILogicalComponent {
    props: AsComponentXML<TimerProps>;
}
