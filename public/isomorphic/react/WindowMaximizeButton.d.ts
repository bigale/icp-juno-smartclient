import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowMaximizeButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowMaximizeButton wraps the non-rendered SmartClient class
 * {@link isc.WindowMaximizeButton WindowMaximizeButton} for React, allowing you to import
 *  WindowMaximizeButton for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowMaximizeButton extends ILogicalComponent {
    props: AsComponentXML<WindowMaximizeButtonProps>;
}
