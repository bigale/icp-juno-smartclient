import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AutoChildProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AutoChild wraps the SmartClient object
 * {@link isc.AutoChild AutoChild} for React, allowing you to import
 * AutoChild for use in React JS and JSX.
 * @class
 */
declare class AutoChild extends ILogicalComponent {
    props: AsComponentXML<AutoChildProps>;
}
