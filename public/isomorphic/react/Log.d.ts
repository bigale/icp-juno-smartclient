import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface LogProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Log wraps the non-rendered SmartClient class
 * {@link isc.Log Log} for React, allowing you to import
 *  Log for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Log extends ILogicalComponent {
    props: AsComponentXML<LogProps>;
}
