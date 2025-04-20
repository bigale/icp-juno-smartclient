import React from 'react';
import { VStack, VStackProps } from './VStack';
import { AsComponentXML } from './core/ReactComponent';


declare interface AdvancedHiliteEditorProps extends VStackProps {

/**
 * See {@link isc.AdvancedHiliteEditor.invalidHilitePrompt AdvancedHiliteEditor.invalidHilitePrompt}.
 */
invalidHilitePrompt?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.cancelButtonTitle AdvancedHiliteEditor.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.filterBuilderProperties AdvancedHiliteEditor.filterBuilderProperties}.
 */
filterBuilderProperties?: FilterBuilder;

/**
 * See {@link isc.AdvancedHiliteEditor.hiliteFormProperties AdvancedHiliteEditor.hiliteFormProperties}.
 */
hiliteFormProperties?: DynamicForm;

/**
 * See {@link isc.AdvancedHiliteEditor.title AdvancedHiliteEditor.title}.
 */
title?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.saveButtonTitle AdvancedHiliteEditor.saveButtonTitle}.
 */
saveButtonTitle?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.filterGroupTitle AdvancedHiliteEditor.filterGroupTitle}.
 */
filterGroupTitle?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.callback AdvancedHiliteEditor.callback}.
 */
callback?: Callback;

/**
 * See {@link isc.AdvancedHiliteEditor.appearanceGroupTitle AdvancedHiliteEditor.appearanceGroupTitle}.
 */
appearanceGroupTitle?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.saveHilite() AdvancedHiliteEditor.saveHilite()}.
 */
saveHilite?: Function;

/**
 * See {@link isc.AdvancedHiliteEditor.cancelButtonProperties AdvancedHiliteEditor.cancelButtonProperties}.
 */
cancelButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.AdvancedHiliteEditor.hiliteIcons AdvancedHiliteEditor.hiliteIcons}.
 */
hiliteIcons?: string[];

/**
 * See {@link isc.AdvancedHiliteEditor.targetFieldsItemTitle AdvancedHiliteEditor.targetFieldsItemTitle}.
 */
targetFieldsItemTitle?: string;

/**
 * See {@link isc.AdvancedHiliteEditor.saveButtonProperties AdvancedHiliteEditor.saveButtonProperties}.
 */
saveButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.AdvancedHiliteEditor.cancelEditing() AdvancedHiliteEditor.cancelEditing()}.
 */
cancelEditing?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AdvancedHiliteEditor wraps the SmartClient widget class
 * {@link isc.AdvancedHiliteEditor AdvancedHiliteEditor} for React, allowing you to import
 * AdvancedHiliteEditor for use in React JS and JSX.
 * @class
 * @extends VStack
 */
declare class AdvancedHiliteEditor extends VStack {
    props: AsComponentXML<AdvancedHiliteEditorProps>;
}
