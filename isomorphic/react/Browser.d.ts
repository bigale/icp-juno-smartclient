import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface BrowserProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Browser wraps the non-rendered SmartClient class
 * {@link isc.Browser Browser} for React, allowing you to import
 *  Browser for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Browser extends ILogicalComponent {
    props: AsComponentXML<BrowserProps>;
}
