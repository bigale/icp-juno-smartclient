import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NotifyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Notify wraps the non-rendered SmartClient class
 * {@link isc.Notify Notify} for React, allowing you to import
 *  Notify for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Notify extends ILogicalComponent {
    props: AsComponentXML<NotifyProps>;
}
