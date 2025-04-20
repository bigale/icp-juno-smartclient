import React from 'react';
import { StretchImgButton, StretchImgButtonProps } from './StretchImgButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface MiniNavControlProps extends StretchImgButtonProps {

/**
 * See {@link isc.MiniNavControl.upClick() MiniNavControl.upClick()}.
 */
upClick?: Function;

/**
 * See {@link isc.MiniNavControl.upButtonSrc MiniNavControl.upButtonSrc}.
 */
upButtonSrc?: string;

/**
 * See {@link isc.MiniNavControl.skinImgDir MiniNavControl.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.MiniNavControl.downClick() MiniNavControl.downClick()}.
 */
downClick?: Function;

/**
 * See {@link isc.MiniNavControl.downButtonSrc MiniNavControl.downButtonSrc}.
 */
downButtonSrc?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MiniNavControl wraps the SmartClient widget class
 * {@link isc.MiniNavControl MiniNavControl} for React, allowing you to import
 * MiniNavControl for use in React JS and JSX.
 * @class
 * @extends StretchImgButton
 */
declare class MiniNavControl extends StretchImgButton {
    props: AsComponentXML<MiniNavControlProps>;
}
