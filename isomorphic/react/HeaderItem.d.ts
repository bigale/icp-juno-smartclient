import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface HeaderItemProps extends FormItemProps {

/**
 * See {@link isc.HeaderItem.editProxyConstructor HeaderItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.HeaderItem.endRow HeaderItem.endRow}.
 */
endRow?: boolean;

/**
 * See {@link isc.HeaderItem.applyAlignToText HeaderItem.applyAlignToText}.
 */
applyAlignToText?: boolean;

/**
 * See {@link isc.HeaderItem.colSpan HeaderItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.HeaderItem.showTitle HeaderItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.HeaderItem.align HeaderItem.align}.
 */
align?: string;

/**
 * See {@link isc.HeaderItem.defaultValue HeaderItem.defaultValue}.
 */
defaultValue?: string;

/**
 * See {@link isc.HeaderItem.startRow HeaderItem.startRow}.
 */
startRow?: boolean;

/**
 * See {@link isc.HeaderItem.canSelectText HeaderItem.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.HeaderItem.textBoxStyle HeaderItem.textBoxStyle}.
 */
textBoxStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HeaderItem wraps the SmartClient widget class
 * {@link isc.HeaderItem HeaderItem} for React, allowing you to import
 * HeaderItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class HeaderItem extends FormItem {
    props: AsComponentXML<HeaderItemProps>;
}
