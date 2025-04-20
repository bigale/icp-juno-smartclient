import React from 'react';
import { ImgButton, ImgButtonProps } from './ImgButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface IconImgButtonProps extends ImgButtonProps {

/**
 * See {@link isc.IconImgButton.showMenuOnClick IconImgButton.showMenuOnClick}.
 */
showMenuOnClick?: boolean;

/**
 * See {@link isc.IconImgButton.src IconImgButton.src}.
 */
src?: string | SCStatefulImgConfig;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IconImgButton wraps the SmartClient widget class
 * {@link isc.IconImgButton IconImgButton} for React, allowing you to import
 * IconImgButton for use in React JS and JSX.
 * @class
 * @extends ImgButton
 */
declare class IconImgButton extends ImgButton {
    props: AsComponentXML<IconImgButtonProps>;
}
