import React from 'react';
import { SyntaxHiliter, SyntaxHiliterProps } from './SyntaxHiliter';
import { AsComponentXML } from './core/ReactComponent';


declare interface XMLSyntaxHiliterProps extends SyntaxHiliterProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * XMLSyntaxHiliter wraps the SmartClient widget class
 * {@link isc.XMLSyntaxHiliter XMLSyntaxHiliter} for React, allowing you to import
 * XMLSyntaxHiliter for use in React JS and JSX.
 * @class
 * @extends SyntaxHiliter
 */
declare class XMLSyntaxHiliter extends SyntaxHiliter {
    props: AsComponentXML<XMLSyntaxHiliterProps>;
}
