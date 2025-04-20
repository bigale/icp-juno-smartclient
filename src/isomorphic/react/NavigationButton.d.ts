import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface NavigationButtonProps extends ButtonProps {

/**
 * See {@link isc.NavigationButton.direction NavigationButton.direction}.
 */
direction?: string;

/**
 * See {@link isc.NavigationButton.forwardBaseStyle NavigationButton.forwardBaseStyle}.
 */
forwardBaseStyle?: string;

/**
 * See {@link isc.NavigationButton.backBaseStyle NavigationButton.backBaseStyle}.
 */
backBaseStyle?: string;

/**
 * See {@link isc.NavigationButton.baseStyle NavigationButton.baseStyle}.
 */
baseStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NavigationButton wraps the SmartClient widget class
 * {@link isc.NavigationButton NavigationButton} for React, allowing you to import
 * NavigationButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class NavigationButton extends Button {
    props: AsComponentXML<NavigationButtonProps>;
}
