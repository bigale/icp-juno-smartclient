import React from 'react';
import { IconButton, IconButtonProps } from './IconButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface IconMenuButtonProps extends IconButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IconMenuButton wraps the SmartClient widget class
 * {@link isc.IconMenuButton IconMenuButton} for React, allowing you to import
 * IconMenuButton for use in React JS and JSX.
 * @class
 * @extends IconButton
 */
declare class IconMenuButton extends IconButton {
    props: AsComponentXML<IconMenuButtonProps>;
}
