import React from 'react';
import { Authentication, AuthenticationProps } from './Authentication';
import { AsComponentXML } from './core/ReactComponent';


declare interface AuthProps extends AuthenticationProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Auth wraps the SmartClient widget class
 * {@link isc.Auth Auth} for React, allowing you to import
 * Auth for use in React JS and JSX.
 * @class
 * @extends Authentication
 */
declare class Auth extends Authentication {
    props: AsComponentXML<AuthProps>;
}
