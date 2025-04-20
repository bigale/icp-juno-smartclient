import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface BooleanItemProps extends FormItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BooleanItem wraps the SmartClient widget class
 * {@link isc.BooleanItem BooleanItem} for React, allowing you to import
 * BooleanItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class BooleanItem extends FormItem {
    props: AsComponentXML<BooleanItemProps>;
}
