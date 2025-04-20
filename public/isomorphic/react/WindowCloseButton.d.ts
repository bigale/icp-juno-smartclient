import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowCloseButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowCloseButton wraps the non-rendered SmartClient class
 * {@link isc.WindowCloseButton WindowCloseButton} for React, allowing you to import
 *  WindowCloseButton for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowCloseButton extends ILogicalComponent {
    props: AsComponentXML<WindowCloseButtonProps>;
}
