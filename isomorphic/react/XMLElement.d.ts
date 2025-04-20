import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface XMLElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * XMLElement wraps the SmartClient object
 * {@link isc.XMLElement XMLElement} for React, allowing you to import
 * XMLElement for use in React JS and JSX.
 * @class
 */
declare class XMLElement extends ILogicalComponent {
    props: AsComponentXML<XMLElementProps>;
}
