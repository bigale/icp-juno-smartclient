import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface NativeCheckboxItemProps extends FormItemProps {

/**
 * See {@link isc.NativeCheckboxItem.showLabel NativeCheckboxItem.showLabel}.
 */
showLabel?: boolean;

/**
 * See {@link isc.NativeCheckboxItem.textBoxStyle NativeCheckboxItem.textBoxStyle}.
 */
textBoxStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NativeCheckboxItem wraps the SmartClient widget class
 * {@link isc.NativeCheckboxItem NativeCheckboxItem} for React, allowing you to import
 * NativeCheckboxItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class NativeCheckboxItem extends FormItem {
    props: AsComponentXML<NativeCheckboxItemProps>;
}
