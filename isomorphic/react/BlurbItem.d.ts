import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface BlurbItemProps extends FormItemProps {

/**
 * See {@link isc.BlurbItem.textBoxStyle BlurbItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.BlurbItem.clipValue BlurbItem.clipValue}.
 */
clipValue?: boolean;

/**
 * See {@link isc.BlurbItem.colSpan BlurbItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.BlurbItem.editProxyConstructor BlurbItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.BlurbItem.canSelectText BlurbItem.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.BlurbItem.showTitle BlurbItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.BlurbItem.wrap BlurbItem.wrap}.
 */
wrap?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BlurbItem wraps the SmartClient widget class
 * {@link isc.BlurbItem BlurbItem} for React, allowing you to import
 * BlurbItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class BlurbItem extends FormItem {
    props: AsComponentXML<BlurbItemProps>;
}
