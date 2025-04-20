import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface DatabaseBrowserProps extends WindowProps {

/**
 * See {@link isc.DatabaseBrowser.selectButtonProperties DatabaseBrowser.selectButtonProperties}.
 */
selectButtonProperties?: Button;

/**
 * See {@link isc.DatabaseBrowser.serverType DatabaseBrowser.serverType}.
 */
serverType?: string;

/**
 * See {@link isc.DatabaseBrowser.databaseListProperties DatabaseBrowser.databaseListProperties}.
 */
databaseListProperties?: ListGrid;

/**
 * See {@link isc.DatabaseBrowser.schemaTreeProperties DatabaseBrowser.schemaTreeProperties}.
 */
schemaTreeProperties?: ListGrid;

/**
 * See {@link isc.DatabaseBrowser.schema DatabaseBrowser.schema}.
 */
schema?: string;

/**
 * See {@link isc.DatabaseBrowser.dbName DatabaseBrowser.dbName}.
 */
dbName?: string;

/**
 * See {@link isc.DatabaseBrowser.dataGridProperties DatabaseBrowser.dataGridProperties}.
 */
dataGridProperties?: ListGrid;

/**
 * See {@link isc.DatabaseBrowser.getGeneratedDataSource() DatabaseBrowser.getGeneratedDataSource()}.
 */
getGeneratedDataSource?: Function;

/**
 * See {@link isc.DatabaseBrowser.excludeSubstring DatabaseBrowser.excludeSubstring}.
 */
excludeSubstring?: string | string[];

/**
 * See {@link isc.DatabaseBrowser.getResults() DatabaseBrowser.getResults()}.
 */
getResults?: Function;

/**
 * See {@link isc.DatabaseBrowser.cancelButtonProperties DatabaseBrowser.cancelButtonProperties}.
 */
cancelButtonProperties?: Button;

/**
 * See {@link isc.DatabaseBrowser.title DatabaseBrowser.title}.
 */
title?: string;

/**
 * See {@link isc.DatabaseBrowser.includeSubstring DatabaseBrowser.includeSubstring}.
 */
includeSubstring?: string | string[];

/**
 * See {@link isc.DatabaseBrowser.catalog DatabaseBrowser.catalog}.
 */
catalog?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DatabaseBrowser wraps the SmartClient widget class
 * {@link isc.DatabaseBrowser DatabaseBrowser} for React, allowing you to import
 * DatabaseBrowser for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class DatabaseBrowser extends Window {
    props: AsComponentXML<DatabaseBrowserProps>;
}
