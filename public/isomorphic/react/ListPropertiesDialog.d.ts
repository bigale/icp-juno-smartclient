import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListPropertiesDialogProps extends WindowProps {

/**
 * See {@link isc.ListPropertiesDialog.cancelButtonProperties ListPropertiesDialog.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.ListPropertiesDialog.applyClick() ListPropertiesDialog.applyClick()}.
 */
applyClick?: Function;

/**
 * See {@link isc.ListPropertiesDialog.applyButtonProperties ListPropertiesDialog.applyButtonProperties}.
 */
applyButtonProperties?: IButton;

/**
 * See {@link isc.ListPropertiesDialog.listPropertiesPaneProperties ListPropertiesDialog.listPropertiesPaneProperties}.
 */
listPropertiesPaneProperties?: ListPropertiesPane;

/**
 * See {@link isc.ListPropertiesDialog.title ListPropertiesDialog.title}.
 */
title?: string;

/**
 * See {@link isc.ListPropertiesDialog.cancelButtonTitle ListPropertiesDialog.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.ListPropertiesDialog.cancelClick() ListPropertiesDialog.cancelClick()}.
 */
cancelClick?: Function;

/**
 * See {@link isc.ListPropertiesDialog.applyButtonTitle ListPropertiesDialog.applyButtonTitle}.
 */
applyButtonTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListPropertiesDialog wraps the SmartClient widget class
 * {@link isc.ListPropertiesDialog ListPropertiesDialog} for React, allowing you to import
 * ListPropertiesDialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class ListPropertiesDialog extends Window {
    props: AsComponentXML<ListPropertiesDialogProps>;
}
