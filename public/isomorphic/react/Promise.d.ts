import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PromiseProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Promise wraps the SmartClient object
 * {@link isc.Promise Promise} for React, allowing you to import
 * Promise for use in React JS and JSX.
 * @class
 */
declare class Promise extends ILogicalComponent {
    props: AsComponentXML<PromiseProps>;
}
