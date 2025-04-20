import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface AutoFitButtonProps extends ButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AutoFitButton wraps the SmartClient widget class
 * {@link isc.AutoFitButton AutoFitButton} for React, allowing you to import
 * AutoFitButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class AutoFitButton extends Button {
    props: AsComponentXML<AutoFitButtonProps>;
}
