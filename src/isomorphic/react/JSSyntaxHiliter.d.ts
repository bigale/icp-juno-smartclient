import React from 'react';
import { SyntaxHiliter, SyntaxHiliterProps } from './SyntaxHiliter';
import { AsComponentXML } from './core/ReactComponent';


declare interface JSSyntaxHiliterProps extends SyntaxHiliterProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * JSSyntaxHiliter wraps the SmartClient widget class
 * {@link isc.JSSyntaxHiliter JSSyntaxHiliter} for React, allowing you to import
 * JSSyntaxHiliter for use in React JS and JSX.
 * @class
 * @extends SyntaxHiliter
 */
declare class JSSyntaxHiliter extends SyntaxHiliter {
    props: AsComponentXML<JSSyntaxHiliterProps>;
}
