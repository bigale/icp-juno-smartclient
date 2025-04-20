import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface BooleanProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Boolean wraps the SmartClient object
 * {@link isc.Boolean Boolean} for React, allowing you to import
 * Boolean for use in React JS and JSX.
 * @class
 */
declare class Boolean extends ILogicalComponent {
    props: AsComponentXML<BooleanProps>;
}
