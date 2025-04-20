import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowHeaderLabelProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowHeaderLabel wraps the non-rendered SmartClient class
 * {@link isc.WindowHeaderLabel WindowHeaderLabel} for React, allowing you to import
 *  WindowHeaderLabel for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowHeaderLabel extends ILogicalComponent {
    props: AsComponentXML<WindowHeaderLabelProps>;
}
