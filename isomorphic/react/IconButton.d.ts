import React from 'react';
import { RibbonButton, RibbonButtonProps } from './RibbonButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface IconButtonProps extends RibbonButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IconButton wraps the SmartClient widget class
 * {@link isc.IconButton IconButton} for React, allowing you to import
 * IconButton for use in React JS and JSX.
 * @class
 * @extends RibbonButton
 */
declare class IconButton extends RibbonButton {
    props: AsComponentXML<IconButtonProps>;
}
