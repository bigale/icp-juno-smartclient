import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface DialogProps extends WindowProps {

/**
 * See {@link isc.Dialog.styleName Dialog.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.Dialog.messageStyle Dialog.messageStyle}.
 */
messageStyle?: string;

/**
 * See {@link isc.Dialog.defaultWidth Dialog.defaultWidth}.
 */
defaultWidth?: number;

/**
 * See {@link isc.Dialog.closeClick() Dialog.closeClick()}.
 */
closeClick?: Function;

/**
 * See {@link isc.Dialog.setButtons() Dialog.setButtons()}.
 */
setButtons?: Function;

/**
 * See {@link isc.Dialog.message Dialog.message}.
 */
message?: string;

/**
 * See {@link isc.Dialog.autoFocus Dialog.autoFocus}.
 */
autoFocus?: boolean;

/**
 * See {@link isc.Dialog.iconSize Dialog.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.Dialog.applyClick() Dialog.applyClick()}.
 */
applyClick?: Function;

/**
 * See {@link isc.Dialog.setToolbarButtons() Dialog.setToolbarButtons()}.
 */
setToolbarButtons?: Function;

/**
 * See {@link isc.Dialog.cancelClick() Dialog.cancelClick()}.
 */
cancelClick?: Function;

/**
 * See {@link isc.Dialog.confirmIcon Dialog.confirmIcon}.
 */
confirmIcon?: string;

/**
 * See {@link isc.Dialog.icon Dialog.icon}.
 */
icon?: string;

/**
 * See {@link isc.Dialog.toolbarProperties Dialog.toolbarProperties}.
 */
toolbarProperties?: Toolbar;

/**
 * See {@link isc.Dialog.toolbarButtons Dialog.toolbarButtons}.
 */
toolbarButtons?: Button[] | Button[];

/**
 * See {@link isc.Dialog.iconStyle Dialog.iconStyle}.
 */
iconStyle?: string;

/**
 * See {@link isc.Dialog.showToolbar Dialog.showToolbar}.
 */
showToolbar?: boolean;

/**
 * See {@link isc.Dialog.askIcon Dialog.askIcon}.
 */
askIcon?: string;

/**
 * See {@link isc.Dialog.saveData() Dialog.saveData()}.
 */
saveData?: Function;

/**
 * See {@link isc.Dialog.okClick() Dialog.okClick()}.
 */
okClick?: Function;

/**
 * See {@link isc.Dialog.sayIcon Dialog.sayIcon}.
 */
sayIcon?: string;

/**
 * See {@link isc.Dialog.buttons Dialog.buttons}.
 */
buttons?: Button[] | Button[];

/**
 * See {@link isc.Dialog.doneClick() Dialog.doneClick()}.
 */
doneClick?: Function;

/**
 * See {@link isc.Dialog.autoFocusButton Dialog.autoFocusButton}.
 */
autoFocusButton?: Canvas | string | number;

/**
 * See {@link isc.Dialog.buttonClick() Dialog.buttonClick()}.
 */
buttonClick?: Function;

/**
 * See {@link isc.Dialog.setMessage() Dialog.setMessage()}.
 */
setMessage?: Function;

/**
 * See {@link isc.Dialog.warnIcon Dialog.warnIcon}.
 */
warnIcon?: string;

/**
 * See {@link isc.Dialog.yesClick() Dialog.yesClick()}.
 */
yesClick?: Function;

/**
 * See {@link isc.Dialog.noClick() Dialog.noClick()}.
 */
noClick?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Dialog wraps the SmartClient widget class
 * {@link isc.Dialog Dialog} for React, allowing you to import
 * Dialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class Dialog extends Window {
    props: AsComponentXML<DialogProps>;
}
