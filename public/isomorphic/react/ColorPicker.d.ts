import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface ColorPickerProps extends WindowProps {

/**
 * See {@link isc.ColorPicker.getRed() ColorPicker.getRed()}.
 */
getRed?: Function;

/**
 * See {@link isc.ColorPicker.cancelButtonProperties ColorPicker.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.ColorPicker.satFieldTitle ColorPicker.satFieldTitle}.
 */
satFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.getBlue() ColorPicker.getBlue()}.
 */
getBlue?: Function;

/**
 * See {@link isc.ColorPicker.lessButtonTitle ColorPicker.lessButtonTitle}.
 */
lessButtonTitle?: string;

/**
 * See {@link isc.ColorPicker.basicColorLabel ColorPicker.basicColorLabel}.
 */
basicColorLabel?: string;

/**
 * See {@link isc.ColorPicker.lumWidth ColorPicker.lumWidth}.
 */
lumWidth?: number;

/**
 * See {@link isc.ColorPicker.autoHide ColorPicker.autoHide}.
 */
autoHide?: boolean;

/**
 * See {@link isc.ColorPicker.setHue() ColorPicker.setHue()}.
 */
setHue?: Function;

/**
 * See {@link isc.ColorPicker.moreButtonTitle ColorPicker.moreButtonTitle}.
 */
moreButtonTitle?: string;

/**
 * See {@link isc.ColorPicker.showOkButton ColorPicker.showOkButton}.
 */
showOkButton?: boolean;

/**
 * See {@link isc.ColorPicker.setSaturation() ColorPicker.setSaturation()}.
 */
setSaturation?: Function;

/**
 * See {@link isc.ColorPicker.showCancelButton ColorPicker.showCancelButton}.
 */
showCancelButton?: boolean;

/**
 * See {@link isc.ColorPicker.colorButtonSize ColorPicker.colorButtonSize}.
 */
colorButtonSize?: number;

/**
 * See {@link isc.ColorPicker.lumFieldTitle ColorPicker.lumFieldTitle}.
 */
lumFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.setOpacity() ColorPicker.setOpacity()}.
 */
setOpacity?: Function;

/**
 * See {@link isc.ColorPicker.defaultColor ColorPicker.defaultColor}.
 */
defaultColor?: string;

/**
 * See {@link isc.ColorPicker.blueFieldTitle ColorPicker.blueFieldTitle}.
 */
blueFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.getGreen() ColorPicker.getGreen()}.
 */
getGreen?: Function;

/**
 * See {@link isc.ColorPicker.selectedColorLabel ColorPicker.selectedColorLabel}.
 */
selectedColorLabel?: string;

/**
 * See {@link isc.ColorPicker.okButtonProperties ColorPicker.okButtonProperties}.
 */
okButtonProperties?: IButton;

/**
 * See {@link isc.ColorPicker.blueFieldPrompt ColorPicker.blueFieldPrompt}.
 */
blueFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.autoCenterOnShow ColorPicker.autoCenterOnShow}.
 */
autoCenterOnShow?: boolean;

/**
 * See {@link isc.ColorPicker.autoPosition ColorPicker.autoPosition}.
 */
autoPosition?: boolean;

/**
 * See {@link isc.ColorPicker.satFieldPrompt ColorPicker.satFieldPrompt}.
 */
satFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.greenFieldPrompt ColorPicker.greenFieldPrompt}.
 */
greenFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.showModeToggleButton ColorPicker.showModeToggleButton}.
 */
showModeToggleButton?: boolean;

/**
 * See {@link isc.ColorPicker.allowComplexMode ColorPicker.allowComplexMode}.
 */
allowComplexMode?: boolean;

/**
 * See {@link isc.ColorPicker.setBlue() ColorPicker.setBlue()}.
 */
setBlue?: Function;

/**
 * See {@link isc.ColorPicker.okButtonTitle ColorPicker.okButtonTitle}.
 */
okButtonTitle?: string;

/**
 * See {@link isc.ColorPicker.setGreen() ColorPicker.setGreen()}.
 */
setGreen?: Function;

/**
 * See {@link isc.ColorPicker.getOpacity() ColorPicker.getOpacity()}.
 */
getOpacity?: Function;

/**
 * See {@link isc.ColorPicker.defaultOpacity ColorPicker.defaultOpacity}.
 */
defaultOpacity?: number;

/**
 * See {@link isc.ColorPicker.supportsTransparency ColorPicker.supportsTransparency}.
 */
supportsTransparency?: boolean;

/**
 * See {@link isc.ColorPicker.setRed() ColorPicker.setRed()}.
 */
setRed?: Function;

/**
 * See {@link isc.ColorPicker.htmlFieldTitle ColorPicker.htmlFieldTitle}.
 */
htmlFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.getSaturation() ColorPicker.getSaturation()}.
 */
getSaturation?: Function;

/**
 * See {@link isc.ColorPicker.hueFieldTitle ColorPicker.hueFieldTitle}.
 */
hueFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.getLuminosity() ColorPicker.getLuminosity()}.
 */
getLuminosity?: Function;

/**
 * See {@link isc.ColorPicker.swatchHeight ColorPicker.swatchHeight}.
 */
swatchHeight?: number;

/**
 * See {@link isc.ColorPicker.colorChanged() ColorPicker.colorChanged()}.
 */
colorChanged?: Function;

/**
 * See {@link isc.ColorPicker.getHtmlColor() ColorPicker.getHtmlColor()}.
 */
getHtmlColor?: Function;

/**
 * See {@link isc.ColorPicker.redFieldPrompt ColorPicker.redFieldPrompt}.
 */
redFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.htmlFieldPrompt ColorPicker.htmlFieldPrompt}.
 */
htmlFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.redFieldTitle ColorPicker.redFieldTitle}.
 */
redFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.setCurrentPickMode() ColorPicker.setCurrentPickMode()}.
 */
setCurrentPickMode?: Function;

/**
 * See {@link isc.ColorPicker.swatchWidth ColorPicker.swatchWidth}.
 */
swatchWidth?: number;

/**
 * See {@link isc.ColorPicker.greenFieldTitle ColorPicker.greenFieldTitle}.
 */
greenFieldTitle?: string;

/**
 * See {@link isc.ColorPicker.hueFieldPrompt ColorPicker.hueFieldPrompt}.
 */
hueFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.cancelButtonTitle ColorPicker.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.ColorPicker.setSupportsTransparency() ColorPicker.setSupportsTransparency()}.
 */
setSupportsTransparency?: Function;

/**
 * See {@link isc.ColorPicker.modeToggleButtonProperties ColorPicker.modeToggleButtonProperties}.
 */
modeToggleButtonProperties?: IButton;

/**
 * See {@link isc.ColorPicker.swatchImageURL ColorPicker.swatchImageURL}.
 */
swatchImageURL?: string;

/**
 * See {@link isc.ColorPicker.crosshairImageURL ColorPicker.crosshairImageURL}.
 */
crosshairImageURL?: string;

/**
 * See {@link isc.ColorPicker.lumFieldPrompt ColorPicker.lumFieldPrompt}.
 */
lumFieldPrompt?: string;

/**
 * See {@link isc.ColorPicker.opacitySliderLabel ColorPicker.opacitySliderLabel}.
 */
opacitySliderLabel?: string;

/**
 * See {@link isc.ColorPicker.colorButtonBaseStyle ColorPicker.colorButtonBaseStyle}.
 */
colorButtonBaseStyle?: string;

/**
 * See {@link isc.ColorPicker.setLuminosity() ColorPicker.setLuminosity()}.
 */
setLuminosity?: Function;

/**
 * See {@link isc.ColorPicker.defaultPickMode ColorPicker.defaultPickMode}.
 */
defaultPickMode?: string;

/**
 * See {@link isc.ColorPicker.opacityText ColorPicker.opacityText}.
 */
opacityText?: string;

/**
 * See {@link isc.ColorPicker.colorSelected() ColorPicker.colorSelected()}.
 */
colorSelected?: Function;

/**
 * See {@link isc.ColorPicker.getHue() ColorPicker.getHue()}.
 */
getHue?: Function;

/**
 * See {@link isc.ColorPicker.setHtmlColor() ColorPicker.setHtmlColor()}.
 */
setHtmlColor?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ColorPicker wraps the SmartClient widget class
 * {@link isc.ColorPicker ColorPicker} for React, allowing you to import
 * ColorPicker for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class ColorPicker extends Window {
    props: AsComponentXML<ColorPickerProps>;
}
