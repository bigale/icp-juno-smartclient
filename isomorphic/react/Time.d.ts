import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TimeProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Time wraps the non-rendered SmartClient class
 * {@link isc.Time Time} for React, allowing you to import
 *  Time for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Time extends ILogicalComponent {
    props: AsComponentXML<TimeProps>;
}
