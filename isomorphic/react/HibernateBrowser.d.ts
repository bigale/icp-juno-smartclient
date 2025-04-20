import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface HibernateBrowserProps extends WindowProps {

/**
 * See {@link isc.HibernateBrowser.cancelButtonProperties HibernateBrowser.cancelButtonProperties}.
 */
cancelButtonProperties?: Button;

/**
 * See {@link isc.HibernateBrowser.mappingTreeProperties HibernateBrowser.mappingTreeProperties}.
 */
mappingTreeProperties?: TreeGrid;

/**
 * See {@link isc.HibernateBrowser.excludeSubstring HibernateBrowser.excludeSubstring}.
 */
excludeSubstring?: string | string[];

/**
 * See {@link isc.HibernateBrowser.dataGridProperties HibernateBrowser.dataGridProperties}.
 */
dataGridProperties?: ListGrid;

/**
 * See {@link isc.HibernateBrowser.title HibernateBrowser.title}.
 */
title?: string;

/**
 * See {@link isc.HibernateBrowser.getResults() HibernateBrowser.getResults()}.
 */
getResults?: Function;

/**
 * See {@link isc.HibernateBrowser.selectButtonProperties HibernateBrowser.selectButtonProperties}.
 */
selectButtonProperties?: Button;

/**
 * See {@link isc.HibernateBrowser.includeSubstring HibernateBrowser.includeSubstring}.
 */
includeSubstring?: string | string[];

/**
 * See {@link isc.HibernateBrowser.getGeneratedDataSource() HibernateBrowser.getGeneratedDataSource()}.
 */
getGeneratedDataSource?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HibernateBrowser wraps the SmartClient widget class
 * {@link isc.HibernateBrowser HibernateBrowser} for React, allowing you to import
 * HibernateBrowser for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class HibernateBrowser extends Window {
    props: AsComponentXML<HibernateBrowserProps>;
}
