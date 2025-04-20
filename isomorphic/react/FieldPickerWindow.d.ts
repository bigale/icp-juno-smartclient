import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface FieldPickerWindowProps extends WindowProps {

/**
 * See {@link isc.FieldPickerWindow.title FieldPickerWindow.title}.
 */
title?: string;

/**
 * See {@link isc.FieldPickerWindow.fieldPickerProperties FieldPickerWindow.fieldPickerProperties}.
 */
fieldPickerProperties?: FieldPicker;

/**
 * See {@link isc.FieldPickerWindow.autoDismiss FieldPickerWindow.autoDismiss}.
 */
autoDismiss?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FieldPickerWindow wraps the SmartClient widget class
 * {@link isc.FieldPickerWindow FieldPickerWindow} for React, allowing you to import
 * FieldPickerWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class FieldPickerWindow extends Window {
    props: AsComponentXML<FieldPickerWindowProps>;
}
