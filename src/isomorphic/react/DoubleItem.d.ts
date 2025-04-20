import React from 'react';
import { FloatItem, FloatItemProps } from './FloatItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DoubleItemProps extends FloatItemProps {

/**
 * See {@link isc.DoubleItem.getValueAsDouble() DoubleItem.getValueAsDouble()}.
 */
getValueAsDouble?: Function;

/**
 * See {@link isc.DoubleItem.defaultValue DoubleItem.defaultValue}.
 */
defaultValue?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DoubleItem wraps the SmartClient widget class
 * {@link isc.DoubleItem DoubleItem} for React, allowing you to import
 * DoubleItem for use in React JS and JSX.
 * @class
 * @extends FloatItem
 */
declare class DoubleItem extends FloatItem {
    props: AsComponentXML<DoubleItemProps>;
}
