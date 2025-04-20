import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface HiddenItemProps extends FormItemProps {

/**
 * See {@link isc.HiddenItem.colSpan HiddenItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.HiddenItem.showTitle HiddenItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.HiddenItem.alwaysFetchMissingValues HiddenItem.alwaysFetchMissingValues}.
 */
alwaysFetchMissingValues?: boolean;

/**
 * See {@link isc.HiddenItem.rowSpan HiddenItem.rowSpan}.
 */
rowSpan?: number;

/**
 * See {@link isc.HiddenItem.fetchMissingValues HiddenItem.fetchMissingValues}.
 */
fetchMissingValues?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HiddenItem wraps the SmartClient widget class
 * {@link isc.HiddenItem HiddenItem} for React, allowing you to import
 * HiddenItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class HiddenItem extends FormItem {
    props: AsComponentXML<HiddenItemProps>;
}
