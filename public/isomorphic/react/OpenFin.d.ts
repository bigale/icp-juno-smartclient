import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface OpenFinProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * OpenFin wraps the non-rendered SmartClient class
 * {@link isc.OpenFin OpenFin} for React, allowing you to import
 *  OpenFin for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class OpenFin extends ILogicalComponent {
    props: AsComponentXML<OpenFinProps>;
}
