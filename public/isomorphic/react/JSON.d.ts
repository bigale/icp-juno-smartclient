import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface JSONProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * JSON wraps the non-rendered SmartClient class
 * {@link isc.JSON JSON} for React, allowing you to import
 *  JSON for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class JSON extends ILogicalComponent {
    props: AsComponentXML<JSONProps>;
}
