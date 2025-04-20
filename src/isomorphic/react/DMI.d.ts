import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DMIProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DMI wraps the non-rendered SmartClient class
 * {@link isc.DMI DMI} for React, allowing you to import
 *  DMI for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class DMI extends ILogicalComponent {
    props: AsComponentXML<DMIProps>;
}
