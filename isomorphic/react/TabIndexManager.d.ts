import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TabIndexManagerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TabIndexManager wraps the non-rendered SmartClient class
 * {@link isc.TabIndexManager TabIndexManager} for React, allowing you to import
 *  TabIndexManager for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class TabIndexManager extends ILogicalComponent {
    props: AsComponentXML<TabIndexManagerProps>;
}
