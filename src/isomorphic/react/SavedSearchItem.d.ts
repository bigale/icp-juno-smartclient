import React from 'react';
import { SelectItem, SelectItemProps } from './SelectItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SavedSearchItemProps extends SelectItemProps {

/**
 * See {@link isc.SavedSearchItem.copySearchFieldProperties SavedSearchItem.copySearchFieldProperties}.
 */
copySearchFieldProperties?: ListGridField;

/**
 * See {@link isc.SavedSearchItem.hint SavedSearchItem.hint}.
 */
hint?: string;

/**
 * See {@link isc.SavedSearchItem.editProxyConstructor SavedSearchItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.SavedSearchItem.canEditSearch SavedSearchItem.canEditSearch}.
 */
canEditSearch?: boolean;

/**
 * See {@link isc.SavedSearchItem.copySearchHoverText SavedSearchItem.copySearchHoverText}.
 */
copySearchHoverText?: string;

/**
 * See {@link isc.SavedSearchItem.targetDataSource SavedSearchItem.targetDataSource}.
 */
targetDataSource?: DataSource;

/**
 * See {@link isc.SavedSearchItem.addSearchValue SavedSearchItem.addSearchValue}.
 */
addSearchValue?: string;

/**
 * See {@link isc.SavedSearchItem.saveLastSearch SavedSearchItem.saveLastSearch}.
 */
saveLastSearch?: boolean;

/**
 * See {@link isc.SavedSearchItem.editSearchHoverText SavedSearchItem.editSearchHoverText}.
 */
editSearchHoverText?: string;

/**
 * See {@link isc.SavedSearchItem.canRemoveSearch SavedSearchItem.canRemoveSearch}.
 */
canRemoveSearch?: boolean;

/**
 * See {@link isc.SavedSearchItem.newRecordValues SavedSearchItem.newRecordValues}.
 */
newRecordValues?: Record;

/**
 * See {@link isc.SavedSearchItem.markAsAdminDefaultFieldProperties SavedSearchItem.markAsAdminDefaultFieldProperties}.
 */
markAsAdminDefaultFieldProperties?: ListGridField;

/**
 * See {@link isc.SavedSearchItem.savedSearchDS SavedSearchItem.savedSearchDS}.
 */
savedSearchDS?: string;

/**
 * See {@link isc.SavedSearchItem.confirmRemoval SavedSearchItem.confirmRemoval}.
 */
confirmRemoval?: boolean;

/**
 * See {@link isc.SavedSearchItem.title SavedSearchItem.title}.
 */
title?: string;

/**
 * See {@link isc.SavedSearchItem.confirmRemovalMessage SavedSearchItem.confirmRemovalMessage}.
 */
confirmRemovalMessage?: string;

/**
 * See {@link isc.SavedSearchItem.markAsDefaultFieldProperties SavedSearchItem.markAsDefaultFieldProperties}.
 */
markAsDefaultFieldProperties?: ListGridField;

/**
 * See {@link isc.SavedSearchItem.searchChanged() SavedSearchItem.searchChanged()}.
 */
searchChanged?: Function;

/**
 * See {@link isc.SavedSearchItem.addSearchIcon SavedSearchItem.addSearchIcon}.
 */
addSearchIcon?: string;

/**
 * See {@link isc.SavedSearchItem.canAddSearch SavedSearchItem.canAddSearch}.
 */
canAddSearch?: boolean;

/**
 * See {@link isc.SavedSearchItem.saveDefaultSearch SavedSearchItem.saveDefaultSearch}.
 */
saveDefaultSearch?: boolean;

/**
 * See {@link isc.SavedSearchItem.removeSearchFieldProperties SavedSearchItem.removeSearchFieldProperties}.
 */
removeSearchFieldProperties?: ListGridField;

/**
 * See {@link isc.SavedSearchItem.savedSearchId SavedSearchItem.savedSearchId}.
 */
savedSearchId?: string;

/**
 * See {@link isc.SavedSearchItem.editSearchFieldProperties SavedSearchItem.editSearchFieldProperties}.
 */
editSearchFieldProperties?: ListGridField;

/**
 * See {@link isc.SavedSearchItem.canCopySearch SavedSearchItem.canCopySearch}.
 */
canCopySearch?: boolean;

/**
 * See {@link isc.SavedSearchItem.defaultSearchNameSuffix SavedSearchItem.defaultSearchNameSuffix}.
 */
defaultSearchNameSuffix?: string;

/**
 * See {@link isc.SavedSearchItem.editSearchWindowProperties SavedSearchItem.editSearchWindowProperties}.
 */
editSearchWindowProperties?: EditSearchWindow;

/**
 * See {@link isc.SavedSearchItem.canModifyProperty SavedSearchItem.canModifyProperty}.
 */
canModifyProperty?: string;

/**
 * See {@link isc.SavedSearchItem.storedState SavedSearchItem.storedState}.
 */
storedState?: string;

/**
 * See {@link isc.SavedSearchItem.markAsDefaultHoverText SavedSearchItem.markAsDefaultHoverText}.
 */
markAsDefaultHoverText?: string;

/**
 * See {@link isc.SavedSearchItem.adminRole SavedSearchItem.adminRole}.
 */
adminRole?: string;

/**
 * See {@link isc.SavedSearchItem.adminSeparatorRecordProperties SavedSearchItem.adminSeparatorRecordProperties}.
 */
adminSeparatorRecordProperties?: ListGridRecord;

/**
 * See {@link isc.SavedSearchItem.removeSearchHoverText SavedSearchItem.removeSearchHoverText}.
 */
removeSearchHoverText?: string;

/**
 * See {@link isc.SavedSearchItem.markAsAdminDefaultHoverText SavedSearchItem.markAsAdminDefaultHoverText}.
 */
markAsAdminDefaultHoverText?: string;

/**
 * See {@link isc.SavedSearchItem.targetEditsCriteria SavedSearchItem.targetEditsCriteria}.
 */
targetEditsCriteria?: boolean;

/**
 * See {@link isc.SavedSearchItem.offlineStorageKey SavedSearchItem.offlineStorageKey}.
 */
offlineStorageKey?: string;

/**
 * See {@link isc.SavedSearchItem.pickListFields SavedSearchItem.pickListFields}.
 */
pickListFields?: ListGridField[];

/**
 * See {@link isc.SavedSearchItem.setTargetComponent() SavedSearchItem.setTargetComponent()}.
 */
setTargetComponent?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SavedSearchItem wraps the SmartClient widget class
 * {@link isc.SavedSearchItem SavedSearchItem} for React, allowing you to import
 * SavedSearchItem for use in React JS and JSX.
 * @class
 * @extends SelectItem
 */
declare class SavedSearchItem extends SelectItem {
    props: AsComponentXML<SavedSearchItemProps>;
}
