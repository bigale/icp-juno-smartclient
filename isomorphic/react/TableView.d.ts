import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface TableViewProps extends ListGridProps {

/**
 * See {@link isc.TableView.formatRecord() TableView.formatRecord()}.
 */
formatRecord?: Function;

/**
 * See {@link isc.TableView.infoField TableView.infoField}.
 */
infoField?: string;

/**
 * See {@link isc.TableView.navIcon TableView.navIcon}.
 */
navIcon?: string;

/**
 * See {@link isc.TableView.canSaveSearches TableView.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.TableView.recordLayout TableView.recordLayout}.
 */
recordLayout?: string;

/**
 * See {@link isc.TableView.descriptionField TableView.descriptionField}.
 */
descriptionField?: string;

/**
 * See {@link isc.TableView.titleField TableView.titleField}.
 */
titleField?: string;

/**
 * See {@link isc.TableView.navigationMode TableView.navigationMode}.
 */
navigationMode?: string;

/**
 * See {@link isc.TableView.showNavigation TableView.showNavigation}.
 */
showNavigation?: boolean;

/**
 * See {@link isc.TableView.showIconField TableView.showIconField}.
 */
showIconField?: boolean;

/**
 * See {@link isc.TableView.imageClick() TableView.imageClick()}.
 */
imageClick?: Function;

/**
 * See {@link isc.TableView.wholeRecordNavIcon TableView.wholeRecordNavIcon}.
 */
wholeRecordNavIcon?: string;

/**
 * See {@link isc.TableView.recordNavigationProperty TableView.recordNavigationProperty}.
 */
recordNavigationProperty?: string;

/**
 * See {@link isc.TableView.recordTitleStyle TableView.recordTitleStyle}.
 */
recordTitleStyle?: string;

/**
 * See {@link isc.TableView.canShowFilterEditor TableView.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;

/**
 * See {@link isc.TableView.recordDescriptionStyle TableView.recordDescriptionStyle}.
 */
recordDescriptionStyle?: string;

/**
 * See {@link isc.TableView.recordNavigationClick() TableView.recordNavigationClick()}.
 */
recordNavigationClick?: Function;

/**
 * See {@link isc.TableView.recordInfoStyle TableView.recordInfoStyle}.
 */
recordInfoStyle?: string;

/**
 * See {@link isc.TableView.dataField TableView.dataField}.
 */
dataField?: string;

/**
 * See {@link isc.TableView.recordDataStyle TableView.recordDataStyle}.
 */
recordDataStyle?: string;

/**
 * See {@link isc.TableView.iconField TableView.iconField}.
 */
iconField?: string;

/**
 * See {@link isc.TableView.tableMode TableView.tableMode}.
 */
tableMode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TableView wraps the SmartClient widget class
 * {@link isc.TableView TableView} for React, allowing you to import
 * TableView for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class TableView extends ListGrid {
    props: AsComponentXML<TableViewProps>;
}
