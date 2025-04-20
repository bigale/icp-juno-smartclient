import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface IntegerItemProps extends TextItemProps {

/**
 * See {@link isc.IntegerItem.defaultValue IntegerItem.defaultValue}.
 */
defaultValue?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IntegerItem wraps the SmartClient widget class
 * {@link isc.IntegerItem IntegerItem} for React, allowing you to import
 * IntegerItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class IntegerItem extends TextItem {
    props: AsComponentXML<IntegerItemProps>;
}
