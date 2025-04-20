import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SpacerItemProps extends FormItemProps {

/**
 * See {@link isc.SpacerItem.showTitle SpacerItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.SpacerItem.width SpacerItem.width}.
 */
width?: number;

/**
 * See {@link isc.SpacerItem.height SpacerItem.height}.
 */
height?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SpacerItem wraps the SmartClient widget class
 * {@link isc.SpacerItem SpacerItem} for React, allowing you to import
 * SpacerItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class SpacerItem extends FormItem {
    props: AsComponentXML<SpacerItemProps>;
}
