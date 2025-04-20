import React from 'react';
import { RibbonButton, RibbonButtonProps } from './RibbonButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface RibbonMenuButtonProps extends RibbonButtonProps {

/**
 * See {@link isc.RibbonMenuButton.showMenuIcon RibbonMenuButton.showMenuIcon}.
 */
showMenuIcon?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RibbonMenuButton wraps the SmartClient widget class
 * {@link isc.RibbonMenuButton RibbonMenuButton} for React, allowing you to import
 * RibbonMenuButton for use in React JS and JSX.
 * @class
 * @extends RibbonButton
 */
declare class RibbonMenuButton extends RibbonButton {
    props: AsComponentXML<RibbonMenuButtonProps>;
}
