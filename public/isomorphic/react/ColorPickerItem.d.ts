import React from 'react';
import { ColorItem, ColorItemProps } from './ColorItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ColorPickerItemProps extends ColorItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ColorPickerItem wraps the SmartClient widget class
 * {@link isc.ColorPickerItem ColorPickerItem} for React, allowing you to import
 * ColorPickerItem for use in React JS and JSX.
 * @class
 * @extends ColorItem
 */
declare class ColorPickerItem extends ColorItem {
    props: AsComponentXML<ColorPickerItemProps>;
}
