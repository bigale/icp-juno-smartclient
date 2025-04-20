import React from 'react';
import { StretchImgButton, StretchImgButtonProps } from './StretchImgButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgTabProps extends StretchImgButtonProps {

/**
 * See {@link isc.ImgTab.skinImgDir ImgTab.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.ImgTab.showRollOver ImgTab.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.ImgTab.align ImgTab.align}.
 */
align?: string;

/**
 * See {@link isc.ImgTab.labelSkinImgDir ImgTab.labelSkinImgDir}.
 */
labelSkinImgDir?: string;

/**
 * See {@link isc.ImgTab.showFocus ImgTab.showFocus}.
 */
showFocus?: boolean;

/**
 * See {@link isc.ImgTab.showFocused ImgTab.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.ImgTab.capSize ImgTab.capSize}.
 */
capSize?: number;

/**
 * See {@link isc.ImgTab.baseStyle ImgTab.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.ImgTab.src ImgTab.src}.
 */
src?: string;

/**
 * See {@link isc.ImgTab.titleStyle ImgTab.titleStyle}.
 */
titleStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgTab wraps the SmartClient widget class
 * {@link isc.ImgTab ImgTab} for React, allowing you to import
 * ImgTab for use in React JS and JSX.
 * @class
 * @extends StretchImgButton
 */
declare class ImgTab extends StretchImgButton {
    props: AsComponentXML<ImgTabProps>;
}
