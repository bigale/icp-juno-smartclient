import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSCallbackProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSCallback wraps the SmartClient object
 * {@link isc.DSCallback DSCallback} for React, allowing you to import
 * DSCallback for use in React JS and JSX.
 * @class
 */
declare class DSCallback extends ILogicalComponent {
    props: AsComponentXML<DSCallbackProps>;
}
