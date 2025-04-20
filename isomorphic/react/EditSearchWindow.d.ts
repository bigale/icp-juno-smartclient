import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface EditSearchWindowProps extends WindowProps {

/**
 * See {@link isc.EditSearchWindow.title EditSearchWindow.title}.
 */
title?: string;

/**
 * See {@link isc.EditSearchWindow.savedSearchEditorProperties EditSearchWindow.savedSearchEditorProperties}.
 */
savedSearchEditorProperties?: SavedSearchEditor;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EditSearchWindow wraps the SmartClient widget class
 * {@link isc.EditSearchWindow EditSearchWindow} for React, allowing you to import
 * EditSearchWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class EditSearchWindow extends Window {
    props: AsComponentXML<EditSearchWindowProps>;
}
