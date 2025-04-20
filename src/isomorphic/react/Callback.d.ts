import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CallbackProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Callback wraps the SmartClient object
 * {@link isc.Callback Callback} for React, allowing you to import
 * Callback for use in React JS and JSX.
 * @class
 */
declare class Callback extends ILogicalComponent {
    props: AsComponentXML<CallbackProps>;
}
