import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SyntaxHiliterProps {

/**
 * See {@link isc.SyntaxHiliter.hilite() SyntaxHiliter.hilite()}.
 */
hilite?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SyntaxHiliter wraps the non-rendered SmartClient class
 * {@link isc.SyntaxHiliter SyntaxHiliter} for React, allowing you to import
 *  SyntaxHiliter for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SyntaxHiliter extends ILogicalComponent {
    props: AsComponentXML<SyntaxHiliterProps>;
}
