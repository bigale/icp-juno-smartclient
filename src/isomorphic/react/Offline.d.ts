import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface OfflineProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Offline wraps the non-rendered SmartClient class
 * {@link isc.Offline Offline} for React, allowing you to import
 *  Offline for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Offline extends ILogicalComponent {
    props: AsComponentXML<OfflineProps>;
}
