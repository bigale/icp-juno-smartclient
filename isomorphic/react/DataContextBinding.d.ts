import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DataContextBindingProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DataContextBinding wraps the SmartClient object
 * {@link isc.DataContextBinding DataContextBinding} for React, allowing you to import
 * DataContextBinding for use in React JS and JSX.
 * @class
 */
declare class DataContextBinding extends ILogicalComponent {
    props: AsComponentXML<DataContextBindingProps>;
}
