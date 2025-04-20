import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowResizerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowResizer wraps the non-rendered SmartClient class
 * {@link isc.WindowResizer WindowResizer} for React, allowing you to import
 *  WindowResizer for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowResizer extends ILogicalComponent {
    props: AsComponentXML<WindowResizerProps>;
}
