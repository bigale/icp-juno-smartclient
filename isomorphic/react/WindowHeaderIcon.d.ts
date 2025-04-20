import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowHeaderIconProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowHeaderIcon wraps the non-rendered SmartClient class
 * {@link isc.WindowHeaderIcon WindowHeaderIcon} for React, allowing you to import
 *  WindowHeaderIcon for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowHeaderIcon extends ILogicalComponent {
    props: AsComponentXML<WindowHeaderIconProps>;
}
