import React from 'react';
import { DynamicForm, DynamicFormProps } from './DynamicForm';
import { AsComponentXML } from './core/ReactComponent';


declare interface SavedSearchFormProps extends DynamicFormProps {

/**
 * See {@link isc.SavedSearchForm.hint SavedSearchForm.hint}.
 */
hint?: string;

/**
 * See {@link isc.SavedSearchForm.markAsDefaultHoverText SavedSearchForm.markAsDefaultHoverText}.
 */
markAsDefaultHoverText?: string;

/**
 * See {@link isc.SavedSearchForm.overflow SavedSearchForm.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.SavedSearchForm.searchChanged() SavedSearchForm.searchChanged()}.
 */
searchChanged?: Function;

/**
 * See {@link isc.SavedSearchForm.newRecordValues SavedSearchForm.newRecordValues}.
 */
newRecordValues?: Record;

/**
 * See {@link isc.SavedSearchForm.addSearchIcon SavedSearchForm.addSearchIcon}.
 */
addSearchIcon?: string;

/**
 * See {@link isc.SavedSearchForm.removeSearchHoverText SavedSearchForm.removeSearchHoverText}.
 */
removeSearchHoverText?: string;

/**
 * See {@link isc.SavedSearchForm.adminRole SavedSearchForm.adminRole}.
 */
adminRole?: string;

/**
 * See {@link isc.SavedSearchForm.title SavedSearchForm.title}.
 */
title?: string;

/**
 * See {@link isc.SavedSearchForm.confirmRemovalMessage SavedSearchForm.confirmRemovalMessage}.
 */
confirmRemovalMessage?: string;

/**
 * See {@link isc.SavedSearchForm.saveDefaultSearch SavedSearchForm.saveDefaultSearch}.
 */
saveDefaultSearch?: boolean;

/**
 * See {@link isc.SavedSearchForm.copySearchHoverText SavedSearchForm.copySearchHoverText}.
 */
copySearchHoverText?: string;

/**
 * See {@link isc.SavedSearchForm.canEditSearch SavedSearchForm.canEditSearch}.
 */
canEditSearch?: boolean;

/**
 * See {@link isc.SavedSearchForm.canAddSearch SavedSearchForm.canAddSearch}.
 */
canAddSearch?: boolean;

/**
 * See {@link isc.SavedSearchForm.canCopySearch SavedSearchForm.canCopySearch}.
 */
canCopySearch?: string;

/**
 * See {@link isc.SavedSearchForm.targetEditsCriteria SavedSearchForm.targetEditsCriteria}.
 */
targetEditsCriteria?: boolean;

/**
 * See {@link isc.SavedSearchForm.canRemoveSearch SavedSearchForm.canRemoveSearch}.
 */
canRemoveSearch?: boolean;

/**
 * See {@link isc.SavedSearchForm.offlineStorageKey SavedSearchForm.offlineStorageKey}.
 */
offlineStorageKey?: string;

/**
 * See {@link isc.SavedSearchForm.canModifyProperty SavedSearchForm.canModifyProperty}.
 */
canModifyProperty?: boolean;

/**
 * See {@link isc.SavedSearchForm.setTargetComponent() SavedSearchForm.setTargetComponent()}.
 */
setTargetComponent?: Function;

/**
 * See {@link isc.SavedSearchForm.numCols SavedSearchForm.numCols}.
 */
numCols?: number;

/**
 * See {@link isc.SavedSearchForm.height SavedSearchForm.height}.
 */
height?: number;

/**
 * See {@link isc.SavedSearchForm.storedState SavedSearchForm.storedState}.
 */
storedState?: string;

/**
 * See {@link isc.SavedSearchForm.editSearchHoverText SavedSearchForm.editSearchHoverText}.
 */
editSearchHoverText?: string;

/**
 * See {@link isc.SavedSearchForm.targetDataSource SavedSearchForm.targetDataSource}.
 */
targetDataSource?: DataSource;

/**
 * See {@link isc.SavedSearchForm.addSearchValue SavedSearchForm.addSearchValue}.
 */
addSearchValue?: string;

/**
 * See {@link isc.SavedSearchForm.confirmRemoval SavedSearchForm.confirmRemoval}.
 */
confirmRemoval?: boolean;

/**
 * See {@link isc.SavedSearchForm.saveLastSearch SavedSearchForm.saveLastSearch}.
 */
saveLastSearch?: boolean;

/**
 * See {@link isc.SavedSearchForm.targetComponent SavedSearchForm.targetComponent}.
 */
targetComponent?: Canvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SavedSearchForm wraps the SmartClient widget class
 * {@link isc.SavedSearchForm SavedSearchForm} for React, allowing you to import
 * SavedSearchForm for use in React JS and JSX.
 * @class
 * @extends DynamicForm
 */
declare class SavedSearchForm extends DynamicForm {
    props: AsComponentXML<SavedSearchFormProps>;
}
