import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PageProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Page wraps the non-rendered SmartClient class
 * {@link isc.Page Page} for React, allowing you to import
 *  Page for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Page extends ILogicalComponent {
    props: AsComponentXML<PageProps>;
}
