import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SavedSearchesProps {

/**
 * See {@link isc.SavedSearches.getApplicationId() SavedSearches.getApplicationId()}.
 */
getApplicationId?: Function;

/**
 * See {@link isc.SavedSearches.screenIdField SavedSearches.screenIdField}.
 */
screenIdField?: string;

/**
 * See {@link isc.SavedSearches.getLocalDataSource() SavedSearches.getLocalDataSource()}.
 */
getLocalDataSource?: Function;

/**
 * See {@link isc.SavedSearches.getSavedSearchDataSource() SavedSearches.getSavedSearchDataSource()}.
 */
getSavedSearchDataSource?: Function;

/**
 * See {@link isc.SavedSearches.setDefaultAdminSearchOperation SavedSearches.setDefaultAdminSearchOperation}.
 */
setDefaultAdminSearchOperation?: string;

/**
 * See {@link isc.SavedSearches.savedSearchIDPrefix SavedSearches.savedSearchIDPrefix}.
 */
savedSearchIDPrefix?: string;

/**
 * See {@link isc.SavedSearches.projectIdField SavedSearches.projectIdField}.
 */
projectIdField?: string;

/**
 * See {@link isc.SavedSearches.searchNameField SavedSearches.searchNameField}.
 */
searchNameField?: string;

/**
 * See {@link isc.SavedSearches.userIdField SavedSearches.userIdField}.
 */
userIdField?: string;

/**
 * See {@link isc.SavedSearches.applicationIdField SavedSearches.applicationIdField}.
 */
applicationIdField?: string;

/**
 * See {@link isc.SavedSearches.adminField SavedSearches.adminField}.
 */
adminField?: string;

/**
 * See {@link isc.SavedSearches.componentIdField SavedSearches.componentIdField}.
 */
componentIdField?: string;

/**
 * See {@link isc.SavedSearches.setDefaultUserSearchOperation SavedSearches.setDefaultUserSearchOperation}.
 */
setDefaultUserSearchOperation?: string;

/**
 * See {@link isc.SavedSearches.defaultField SavedSearches.defaultField}.
 */
defaultField?: string;

/**
 * See {@link isc.SavedSearches.applicationId SavedSearches.applicationId}.
 */
applicationId?: string;

/**
 * See {@link isc.SavedSearches.getSavedSearchId() SavedSearches.getSavedSearchId()}.
 */
getSavedSearchId?: Function;

/**
 * See {@link isc.SavedSearches.primaryKeyField SavedSearches.primaryKeyField}.
 */
primaryKeyField?: string;

/**
 * See {@link isc.SavedSearches.adminRole SavedSearches.adminRole}.
 */
adminRole?: string;

/**
 * See {@link isc.SavedSearches.allowNullApplicationId SavedSearches.allowNullApplicationId}.
 */
allowNullApplicationId?: boolean;

/**
 * See {@link isc.SavedSearches.setDefaultUserSearch() SavedSearches.setDefaultUserSearch()}.
 */
setDefaultUserSearch?: Function;

/**
 * See {@link isc.SavedSearches.adminDefaultField SavedSearches.adminDefaultField}.
 */
adminDefaultField?: string;

/**
 * See {@link isc.SavedSearches.dataField SavedSearches.dataField}.
 */
dataField?: string;

/**
 * See {@link isc.SavedSearches.defaultDataSource SavedSearches.defaultDataSource}.
 */
defaultDataSource?: DataSource | string;

/**
 * See {@link isc.SavedSearches.getDefaultDataSource() SavedSearches.getDefaultDataSource()}.
 */
getDefaultDataSource?: Function;

/**
 * See {@link isc.SavedSearches.saveDefaultSearchToServer SavedSearches.saveDefaultSearchToServer}.
 */
saveDefaultSearchToServer?: boolean;

/**
 * See {@link isc.SavedSearches.setDefaultAdminSearch() SavedSearches.setDefaultAdminSearch()}.
 */
setDefaultAdminSearch?: Function;

/**
 * See {@link isc.SavedSearches.offlineStorageKey SavedSearches.offlineStorageKey}.
 */
offlineStorageKey?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SavedSearches wraps the non-rendered SmartClient class
 * {@link isc.SavedSearches SavedSearches} for React, allowing you to import
 *  SavedSearches for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SavedSearches extends ILogicalComponent {
    props: AsComponentXML<SavedSearchesProps>;
}
