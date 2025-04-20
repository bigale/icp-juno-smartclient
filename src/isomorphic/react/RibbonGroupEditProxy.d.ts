import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RibbonGroupEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RibbonGroupEditProxy wraps the non-rendered SmartClient class
 * {@link isc.RibbonGroupEditProxy RibbonGroupEditProxy} for React, allowing you to import
 *  RibbonGroupEditProxy for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class RibbonGroupEditProxy extends ILogicalComponent {
    props: AsComponentXML<RibbonGroupEditProxyProps>;
}
