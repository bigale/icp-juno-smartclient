import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface SavedSearchEditorProps extends VLayoutProps {

/**
 * See {@link isc.SavedSearchEditor.cancelButtonProperties SavedSearchEditor.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.SavedSearchEditor.overwriteSharedSearchConfirmationMessage SavedSearchEditor.overwriteSharedSearchConfirmationMessage}.
 */
overwriteSharedSearchConfirmationMessage?: string;

/**
 * See {@link isc.SavedSearchEditor.validationFailedMessage SavedSearchEditor.validationFailedMessage}.
 */
validationFailedMessage?: string;

/**
 * See {@link isc.SavedSearchEditor.saveButtonProperties SavedSearchEditor.saveButtonProperties}.
 */
saveButtonProperties?: IButton;

/**
 * See {@link isc.SavedSearchEditor.addSearchText SavedSearchEditor.addSearchText}.
 */
addSearchText?: string;

/**
 * See {@link isc.SavedSearchEditor.promptLabelProperties SavedSearchEditor.promptLabelProperties}.
 */
promptLabelProperties?: Label;

/**
 * See {@link isc.SavedSearchEditor.isAdmin SavedSearchEditor.isAdmin}.
 */
isAdmin?: boolean;

/**
 * See {@link isc.SavedSearchEditor.overwriteSearchConfirmationMessage SavedSearchEditor.overwriteSearchConfirmationMessage}.
 */
overwriteSearchConfirmationMessage?: string;

/**
 * See {@link isc.SavedSearchEditor.filterBuilderProperties SavedSearchEditor.filterBuilderProperties}.
 */
filterBuilderProperties?: FilterBuilder;

/**
 * See {@link isc.SavedSearchEditor.sharedSearchTitle SavedSearchEditor.sharedSearchTitle}.
 */
sharedSearchTitle?: string;

/**
 * See {@link isc.SavedSearchEditor.editSearchText SavedSearchEditor.editSearchText}.
 */
editSearchText?: string;

/**
 * See {@link isc.SavedSearchEditor.sharedSearchCheckboxProperties SavedSearchEditor.sharedSearchCheckboxProperties}.
 */
sharedSearchCheckboxProperties?: CheckboxItem;

/**
 * See {@link isc.SavedSearchEditor.mode SavedSearchEditor.mode}.
 */
mode?: string;

/**
 * See {@link isc.SavedSearchEditor.searchNameItemProperties SavedSearchEditor.searchNameItemProperties}.
 */
searchNameItemProperties?: TextItem;

/**
 * See {@link isc.SavedSearchEditor.defaultSearchCheckboxProperties SavedSearchEditor.defaultSearchCheckboxProperties}.
 */
defaultSearchCheckboxProperties?: CheckboxItem;

/**
 * See {@link isc.SavedSearchEditor.defaultSearchTitle SavedSearchEditor.defaultSearchTitle}.
 */
defaultSearchTitle?: string;

/**
 * See {@link isc.SavedSearchEditor.gridAddSearchText SavedSearchEditor.gridAddSearchText}.
 */
gridAddSearchText?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SavedSearchEditor wraps the SmartClient widget class
 * {@link isc.SavedSearchEditor SavedSearchEditor} for React, allowing you to import
 * SavedSearchEditor for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class SavedSearchEditor extends VLayout {
    props: AsComponentXML<SavedSearchEditorProps>;
}
