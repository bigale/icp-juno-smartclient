import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowFooterSpacerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * WindowFooterSpacer wraps the non-rendered SmartClient class
 * {@link isc.WindowFooterSpacer WindowFooterSpacer} for React, allowing you to import
 *  WindowFooterSpacer for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class WindowFooterSpacer extends ILogicalComponent {
    props: AsComponentXML<WindowFooterSpacerProps>;
}
