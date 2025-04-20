import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateRangeDialogProps extends WindowProps {

/**
 * See {@link isc.DateRangeDialog.rangeItemProperties DateRangeDialog.rangeItemProperties}.
 */
rangeItemProperties?: DateRangeItem;

/**
 * See {@link isc.DateRangeDialog.clearButtonProperties DateRangeDialog.clearButtonProperties}.
 */
clearButtonProperties?: IButton;

/**
 * See {@link isc.DateRangeDialog.cancelButtonTitle DateRangeDialog.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.DateRangeDialog.okButtonProperties DateRangeDialog.okButtonProperties}.
 */
okButtonProperties?: IButton;

/**
 * See {@link isc.DateRangeDialog.clearButtonTitle DateRangeDialog.clearButtonTitle}.
 */
clearButtonTitle?: string;

/**
 * See {@link isc.DateRangeDialog.cancelButtonProperties DateRangeDialog.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.DateRangeDialog.okButtonTitle DateRangeDialog.okButtonTitle}.
 */
okButtonTitle?: string;

/**
 * See {@link isc.DateRangeDialog.headerTitle DateRangeDialog.headerTitle}.
 */
headerTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateRangeDialog wraps the SmartClient widget class
 * {@link isc.DateRangeDialog DateRangeDialog} for React, allowing you to import
 * DateRangeDialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class DateRangeDialog extends Window {
    props: AsComponentXML<DateRangeDialogProps>;
}
