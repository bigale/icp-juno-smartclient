import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DataContextProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DataContext wraps the SmartClient object
 * {@link isc.DataContext DataContext} for React, allowing you to import
 * DataContext for use in React JS and JSX.
 * @class
 */
declare class DataContext extends ILogicalComponent {
    props: AsComponentXML<DataContextProps>;
}
