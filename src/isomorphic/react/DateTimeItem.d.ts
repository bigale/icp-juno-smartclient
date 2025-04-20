import React from 'react';
import { DateItem, DateItemProps } from './DateItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateTimeItemProps extends DateItemProps {

/**
 * See {@link isc.DateTimeItem.displayFormat DateTimeItem.displayFormat}.
 */
displayFormat?: string;

/**
 * See {@link isc.DateTimeItem.browserInputType DateTimeItem.browserInputType}.
 */
browserInputType?: string;

/**
 * See {@link isc.DateTimeItem.inputFormat DateTimeItem.inputFormat}.
 */
inputFormat?: string;

/**
 * See {@link isc.DateTimeItem.useTextField DateTimeItem.useTextField}.
 */
useTextField?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateTimeItem wraps the SmartClient widget class
 * {@link isc.DateTimeItem DateTimeItem} for React, allowing you to import
 * DateTimeItem for use in React JS and JSX.
 * @class
 * @extends DateItem
 */
declare class DateTimeItem extends DateItem {
    props: AsComponentXML<DateTimeItemProps>;
}
