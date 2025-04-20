import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripSeparatorEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripSeparatorEditProxy wraps the non-rendered SmartClient class
 * {@link isc.ToolStripSeparatorEditProxy ToolStripSeparatorEditProxy} for React, allowing you to import
 *  ToolStripSeparatorEditProxy for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class ToolStripSeparatorEditProxy extends ILogicalComponent {
    props: AsComponentXML<ToolStripSeparatorEditProxyProps>;
}
