import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SortSpecifierUtilProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SortSpecifierUtil wraps the non-rendered SmartClient class
 * {@link isc.SortSpecifierUtil SortSpecifierUtil} for React, allowing you to import
 *  SortSpecifierUtil for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SortSpecifierUtil extends ILogicalComponent {
    props: AsComponentXML<SortSpecifierUtilProps>;
}
