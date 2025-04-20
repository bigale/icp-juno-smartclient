import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface FloatItemProps extends TextItemProps {

/**
 * See {@link isc.FloatItem.defaultValue FloatItem.defaultValue}.
 */
defaultValue?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FloatItem wraps the SmartClient widget class
 * {@link isc.FloatItem FloatItem} for React, allowing you to import
 * FloatItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class FloatItem extends TextItem {
    props: AsComponentXML<FloatItemProps>;
}
