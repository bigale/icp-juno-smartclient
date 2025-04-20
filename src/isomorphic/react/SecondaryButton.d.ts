import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface SecondaryButtonProps extends ButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SecondaryButton wraps the SmartClient widget class
 * {@link isc.SecondaryButton SecondaryButton} for React, allowing you to import
 * SecondaryButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class SecondaryButton extends Button {
    props: AsComponentXML<SecondaryButtonProps>;
}
