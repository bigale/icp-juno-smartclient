import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiAutoChildProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiAutoChild wraps the SmartClient object
 * {@link isc.MultiAutoChild MultiAutoChild} for React, allowing you to import
 * MultiAutoChild for use in React JS and JSX.
 * @class
 */
declare class MultiAutoChild extends ILogicalComponent {
    props: AsComponentXML<MultiAutoChildProps>;
}
