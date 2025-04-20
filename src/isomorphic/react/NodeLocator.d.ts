import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NodeLocatorProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NodeLocator wraps the SmartClient object
 * {@link isc.NodeLocator NodeLocator} for React, allowing you to import
 * NodeLocator for use in React JS and JSX.
 * @class
 */
declare class NodeLocator extends ILogicalComponent {
    props: AsComponentXML<NodeLocatorProps>;
}
