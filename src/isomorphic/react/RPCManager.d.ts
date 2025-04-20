import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RPCManagerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RPCManager wraps the non-rendered SmartClient class
 * {@link isc.RPCManager RPCManager} for React, allowing you to import
 *  RPCManager for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class RPCManager extends ILogicalComponent {
    props: AsComponentXML<RPCManagerProps>;
}
