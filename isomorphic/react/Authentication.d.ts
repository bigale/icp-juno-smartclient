import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AuthenticationProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Authentication wraps the non-rendered SmartClient class
 * {@link isc.Authentication Authentication} for React, allowing you to import
 *  Authentication for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Authentication extends ILogicalComponent {
    props: AsComponentXML<AuthenticationProps>;
}
