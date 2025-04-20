import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SpinnerItemProps extends TextItemProps {

/**
 * See {@link isc.SpinnerItem.mask SpinnerItem.mask}.
 */
mask?: string;

/**
 * See {@link isc.SpinnerItem.decreaseIconProperties SpinnerItem.decreaseIconProperties}.
 */
decreaseIconProperties?: FormItemIcon;

/**
 * See {@link isc.SpinnerItem.getPreviousValue() SpinnerItem.getPreviousValue()}.
 */
getPreviousValue?: Function;

/**
 * See {@link isc.SpinnerItem.unstackedReadOnlyTextBoxStyle SpinnerItem.unstackedReadOnlyTextBoxStyle}.
 */
unstackedReadOnlyTextBoxStyle?: string;

/**
 * See {@link isc.SpinnerItem.defaultValue SpinnerItem.defaultValue}.
 */
defaultValue?: number;

/**
 * See {@link isc.SpinnerItem.max SpinnerItem.max}.
 */
max?: number;

/**
 * See {@link isc.SpinnerItem.step SpinnerItem.step}.
 */
step?: number;

/**
 * See {@link isc.SpinnerItem.maskOverwriteMode SpinnerItem.maskOverwriteMode}.
 */
maskOverwriteMode?: boolean;

/**
 * See {@link isc.SpinnerItem.unstackedPrintTextBoxStyle SpinnerItem.unstackedPrintTextBoxStyle}.
 */
unstackedPrintTextBoxStyle?: string;

/**
 * See {@link isc.SpinnerItem.maskPromptChar SpinnerItem.maskPromptChar}.
 */
maskPromptChar?: string;

/**
 * See {@link isc.SpinnerItem.getNextValue() SpinnerItem.getNextValue()}.
 */
getNextValue?: Function;

/**
 * See {@link isc.SpinnerItem.min SpinnerItem.min}.
 */
min?: number;

/**
 * See {@link isc.SpinnerItem.maskSaveLiterals SpinnerItem.maskSaveLiterals}.
 */
maskSaveLiterals?: boolean;

/**
 * See {@link isc.SpinnerItem.increaseIconProperties SpinnerItem.increaseIconProperties}.
 */
increaseIconProperties?: FormItemIcon;

/**
 * See {@link isc.SpinnerItem.maskPadChar SpinnerItem.maskPadChar}.
 */
maskPadChar?: string;

/**
 * See {@link isc.SpinnerItem.unstackedTextBoxStyle SpinnerItem.unstackedTextBoxStyle}.
 */
unstackedTextBoxStyle?: string;

/**
 * See {@link isc.SpinnerItem.writeStackedIcons SpinnerItem.writeStackedIcons}.
 */
writeStackedIcons?: boolean;

/**
 * See {@link isc.SpinnerItem.stackedIconsHeight SpinnerItem.stackedIconsHeight}.
 */
stackedIconsHeight?: number;

/**
 * See {@link isc.SpinnerItem.stackedIconsWidth SpinnerItem.stackedIconsWidth}.
 */
stackedIconsWidth?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SpinnerItem wraps the SmartClient widget class
 * {@link isc.SpinnerItem SpinnerItem} for React, allowing you to import
 * SpinnerItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class SpinnerItem extends TextItem {
    props: AsComponentXML<SpinnerItemProps>;
}
