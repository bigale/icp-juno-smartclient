import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ColorItemProps extends TextItemProps {

/**
 * See {@link isc.ColorItem.pickerColorSelected() ColorItem.pickerColorSelected()}.
 */
pickerColorSelected?: Function;

/**
 * See {@link isc.ColorItem.pickerIconWidth ColorItem.pickerIconWidth}.
 */
pickerIconWidth?: number;

/**
 * See {@link isc.ColorItem.allowComplexMode ColorItem.allowComplexMode}.
 */
allowComplexMode?: boolean;

/**
 * See {@link isc.ColorItem.pickerIconSrc ColorItem.pickerIconSrc}.
 */
pickerIconSrc?: string;

/**
 * See {@link isc.ColorItem.pickerIconPrompt ColorItem.pickerIconPrompt}.
 */
pickerIconPrompt?: string;

/**
 * See {@link isc.ColorItem.defaultPickerMode ColorItem.defaultPickerMode}.
 */
defaultPickerMode?: string;

/**
 * See {@link isc.ColorItem.showPickerIcon ColorItem.showPickerIcon}.
 */
showPickerIcon?: boolean;

/**
 * See {@link isc.ColorItem.pickerIconHeight ColorItem.pickerIconHeight}.
 */
pickerIconHeight?: number;

/**
 * See {@link isc.ColorItem.supportsTransparency ColorItem.supportsTransparency}.
 */
supportsTransparency?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ColorItem wraps the SmartClient widget class
 * {@link isc.ColorItem ColorItem} for React, allowing you to import
 * ColorItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class ColorItem extends TextItem {
    props: AsComponentXML<ColorItemProps>;
}
