import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface IButtonProps extends ButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IButton wraps the SmartClient widget class
 * {@link isc.IButton IButton} for React, allowing you to import
 * IButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class IButton extends Button {
    props: AsComponentXML<IButtonProps>;
}
