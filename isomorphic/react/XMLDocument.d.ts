import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface XMLDocumentProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * XMLDocument wraps the SmartClient object
 * {@link isc.XMLDocument XMLDocument} for React, allowing you to import
 * XMLDocument for use in React JS and JSX.
 * @class
 */
declare class XMLDocument extends ILogicalComponent {
    props: AsComponentXML<XMLDocumentProps>;
}
