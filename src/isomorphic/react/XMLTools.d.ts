import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface XMLToolsProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * XMLTools wraps the non-rendered SmartClient class
 * {@link isc.XMLTools XMLTools} for React, allowing you to import
 *  XMLTools for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class XMLTools extends ILogicalComponent {
    props: AsComponentXML<XMLToolsProps>;
}
