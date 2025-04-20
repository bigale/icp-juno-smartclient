import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface UserConfirmationGatewayProps extends ProcessElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UserConfirmationGateway wraps the SmartClient widget class
 * {@link isc.UserConfirmationGateway UserConfirmationGateway} for React, allowing you to import
 * UserConfirmationGateway for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class UserConfirmationGateway extends ProcessElement {
    props: AsComponentXML<UserConfirmationGatewayProps>;
}
