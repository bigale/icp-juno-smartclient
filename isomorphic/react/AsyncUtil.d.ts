import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AsyncUtilProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AsyncUtil wraps the non-rendered SmartClient class
 * {@link isc.AsyncUtil AsyncUtil} for React, allowing you to import
 *  AsyncUtil for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class AsyncUtil extends ILogicalComponent {
    props: AsComponentXML<AsyncUtilProps>;
}
