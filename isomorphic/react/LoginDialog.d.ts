import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface LoginDialogProps extends WindowProps {

/**
 * See {@link isc.LoginDialog.loginFunc() LoginDialog.loginFunc()}.
 */
loginFunc?: Function;

/**
 * See {@link isc.LoginDialog.passwordItemTitle LoginDialog.passwordItemTitle}.
 */
passwordItemTitle?: string;

/**
 * See {@link isc.LoginDialog.errorMessage LoginDialog.errorMessage}.
 */
errorMessage?: string;

/**
 * See {@link isc.LoginDialog.passwordItemProperties LoginDialog.passwordItemProperties}.
 */
passwordItemProperties?: PasswordItem;

/**
 * See {@link isc.LoginDialog.errorStyle LoginDialog.errorStyle}.
 */
errorStyle?: string;

/**
 * See {@link isc.LoginDialog.dismissable LoginDialog.dismissable}.
 */
dismissable?: boolean;

/**
 * See {@link isc.LoginDialog.loginButtonTitle LoginDialog.loginButtonTitle}.
 */
loginButtonTitle?: string;

/**
 * See {@link isc.LoginDialog.register() LoginDialog.register()}.
 */
register?: Function;

/**
 * See {@link isc.LoginDialog.showLostPasswordLink LoginDialog.showLostPasswordLink}.
 */
showLostPasswordLink?: boolean;

/**
 * See {@link isc.LoginDialog.registrationItemProperties LoginDialog.registrationItemProperties}.
 */
registrationItemProperties?: LinkItem;

/**
 * See {@link isc.LoginDialog.lostPasswordItemProperties LoginDialog.lostPasswordItemProperties}.
 */
lostPasswordItemProperties?: LinkItem;

/**
 * See {@link isc.LoginDialog.showRegistrationLink LoginDialog.showRegistrationLink}.
 */
showRegistrationLink?: boolean;

/**
 * See {@link isc.LoginDialog.loginFormProperties LoginDialog.loginFormProperties}.
 */
loginFormProperties?: DynamicForm;

/**
 * See {@link isc.LoginDialog.usernameItemProperties LoginDialog.usernameItemProperties}.
 */
usernameItemProperties?: TextItem;

/**
 * See {@link isc.LoginDialog.dismissOnEscape LoginDialog.dismissOnEscape}.
 */
dismissOnEscape?: boolean;

/**
 * See {@link isc.LoginDialog.lostPassword() LoginDialog.lostPassword()}.
 */
lostPassword?: Function;

/**
 * See {@link isc.LoginDialog.title LoginDialog.title}.
 */
title?: string;

/**
 * See {@link isc.LoginDialog.showCloseButton LoginDialog.showCloseButton}.
 */
showCloseButton?: boolean;

/**
 * See {@link isc.LoginDialog.items LoginDialog.items}.
 */
items?: Canvas[] | Canvas | string;

/**
 * See {@link isc.LoginDialog.loginFailureItemProperties LoginDialog.loginFailureItemProperties}.
 */
loginFailureItemProperties?: BlurbItem;

/**
 * See {@link isc.LoginDialog.formFields LoginDialog.formFields}.
 */
formFields?: FormItem[];

/**
 * See {@link isc.LoginDialog.lostPasswordItemTitle LoginDialog.lostPasswordItemTitle}.
 */
lostPasswordItemTitle?: string;

/**
 * See {@link isc.LoginDialog.registrationItemTitle LoginDialog.registrationItemTitle}.
 */
registrationItemTitle?: string;

/**
 * See {@link isc.LoginDialog.loginButtonProperties LoginDialog.loginButtonProperties}.
 */
loginButtonProperties?: ButtonItem;

/**
 * See {@link isc.LoginDialog.allowBlankPassword LoginDialog.allowBlankPassword}.
 */
allowBlankPassword?: boolean;

/**
 * See {@link isc.LoginDialog.usernameItemTitle LoginDialog.usernameItemTitle}.
 */
usernameItemTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LoginDialog wraps the SmartClient widget class
 * {@link isc.LoginDialog LoginDialog} for React, allowing you to import
 * LoginDialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class LoginDialog extends Window {
    props: AsComponentXML<LoginDialogProps>;
}
