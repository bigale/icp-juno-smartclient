import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ObjectProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Object wraps the SmartClient object
 * {@link isc.Object Object} for React, allowing you to import
 * Object for use in React JS and JSX.
 * @class
 */
declare class Object extends ILogicalComponent {
    props: AsComponentXML<ObjectProps>;
}
