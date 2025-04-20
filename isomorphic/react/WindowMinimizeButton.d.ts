import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowMinimizeButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowMinimizeButton wraps the non-rendered SmartClient class
 * {@link isc.WindowMinimizeButton WindowMinimizeButton} for React, allowing you to import
 *  WindowMinimizeButton for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowMinimizeButton extends ILogicalComponent {
    props: AsComponentXML<WindowMinimizeButtonProps>;
}
