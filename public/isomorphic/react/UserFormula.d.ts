import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface UserFormulaProps {

/**
 * See {@link isc.UserFormula.text UserFormula.text}.
 */
text?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UserFormula wraps the SmartClient object
 * {@link isc.UserFormula UserFormula} for React, allowing you to import
 * UserFormula for use in React JS and JSX.
 * @class
 */
declare class UserFormula extends ILogicalComponent {
    props: AsComponentXML<UserFormulaProps>;
}
