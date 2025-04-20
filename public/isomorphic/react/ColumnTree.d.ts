import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ColumnTreeProps extends LayoutProps {

/**
 * See {@link isc.ColumnTree.selectRecords() ColumnTree.selectRecords()}.
 */
selectRecords?: Function;

/**
 * See {@link isc.ColumnTree.fields ColumnTree.fields}.
 */
fields?: ListGridField[];

/**
 * See {@link isc.ColumnTree.showOpenIcons ColumnTree.showOpenIcons}.
 */
showOpenIcons?: boolean;

/**
 * See {@link isc.ColumnTree.getRecord() ColumnTree.getRecord()}.
 */
getRecord?: Function;

/**
 * See {@link isc.ColumnTree.nodeSelected() ColumnTree.nodeSelected()}.
 */
nodeSelected?: Function;

/**
 * See {@link isc.ColumnTree.openIconSuffix ColumnTree.openIconSuffix}.
 */
openIconSuffix?: string;

/**
 * See {@link isc.ColumnTree.showDetailFields ColumnTree.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.ColumnTree.getColumnTitle() ColumnTree.getColumnTitle()}.
 */
getColumnTitle?: Function;

/**
 * See {@link isc.ColumnTree.setData() ColumnTree.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.ColumnTree.autoFetchTextMatchStyle ColumnTree.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.ColumnTree.transferNodes() ColumnTree.transferNodes()}.
 */
transferNodes?: Function;

/**
 * See {@link isc.ColumnTree.autoFetchData ColumnTree.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.ColumnTree.closedIconSuffix ColumnTree.closedIconSuffix}.
 */
closedIconSuffix?: string;

/**
 * See {@link isc.ColumnTree.setHilites() ColumnTree.setHilites()}.
 */
setHilites?: Function;

/**
 * See {@link isc.ColumnTree.anySelected() ColumnTree.anySelected()}.
 */
anySelected?: Function;

/**
 * See {@link isc.ColumnTree.loadDataOnDemand ColumnTree.loadDataOnDemand}.
 */
loadDataOnDemand?: boolean;

/**
 * See {@link isc.ColumnTree.nodeIcon ColumnTree.nodeIcon}.
 */
nodeIcon?: string;

/**
 * See {@link isc.ColumnTree.fetchData() ColumnTree.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.ColumnTree.getNodeTitle() ColumnTree.getNodeTitle()}.
 */
getNodeTitle?: Function;

/**
 * See {@link isc.ColumnTree.implicitCriteria ColumnTree.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.ColumnTree.columnWidths ColumnTree.columnWidths}.
 */
columnWidths?: string[];

/**
 * See {@link isc.ColumnTree.selectAllRecords() ColumnTree.selectAllRecords()}.
 */
selectAllRecords?: Function;

/**
 * See {@link isc.ColumnTree.backButtonProperties ColumnTree.backButtonProperties}.
 */
backButtonProperties?: IButton;

/**
 * See {@link isc.ColumnTree.showMultipleColumns ColumnTree.showMultipleColumns}.
 */
showMultipleColumns?: boolean;

/**
 * See {@link isc.ColumnTree.columnProperties ColumnTree.columnProperties}.
 */
columnProperties?: ListGrid | ListGrid;

/**
 * See {@link isc.ColumnTree.getData() ColumnTree.getData()}.
 */
getData?: Function;

/**
 * See {@link isc.ColumnTree.customIconProperty ColumnTree.customIconProperty}.
 */
customIconProperty?: string;

/**
 * See {@link isc.ColumnTree.getSelectedRecord() ColumnTree.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.ColumnTree.getColumn() ColumnTree.getColumn()}.
 */
getColumn?: Function;

/**
 * See {@link isc.ColumnTree.columnTitles ColumnTree.columnTitles}.
 */
columnTitles?: string[];

/**
 * See {@link isc.ColumnTree.folderIcon ColumnTree.folderIcon}.
 */
folderIcon?: string;

/**
 * See {@link isc.ColumnTree.data ColumnTree.data}.
 */
data?: Tree;

/**
 * See {@link isc.ColumnTree.dataProperties ColumnTree.dataProperties}.
 */
dataProperties?: Tree;

/**
 * See {@link isc.ColumnTree.deselectRecords() ColumnTree.deselectRecords()}.
 */
deselectRecords?: Function;

/**
 * See {@link isc.ColumnTree.getColumnProperties() ColumnTree.getColumnProperties()}.
 */
getColumnProperties?: Function;

/**
 * See {@link isc.ColumnTree.folderDrop() ColumnTree.folderDrop()}.
 */
folderDrop?: Function;

/**
 * See {@link isc.ColumnTree.filterData() ColumnTree.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.ColumnTree.navigateBack() ColumnTree.navigateBack()}.
 */
navigateBack?: Function;

/**
 * See {@link isc.ColumnTree.selectRecord() ColumnTree.selectRecord()}.
 */
selectRecord?: Function;

/**
 * See {@link isc.ColumnTree.dataFetchMode ColumnTree.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.ColumnTree.firstColumnTitle ColumnTree.firstColumnTitle}.
 */
firstColumnTitle?: string;

/**
 * See {@link isc.ColumnTree.deselectRecord() ColumnTree.deselectRecord()}.
 */
deselectRecord?: Function;

/**
 * See {@link isc.ColumnTree.emptyColumnMessages ColumnTree.emptyColumnMessages}.
 */
emptyColumnMessages?: string[];

/**
 * See {@link isc.ColumnTree.deselectAllRecords() ColumnTree.deselectAllRecords()}.
 */
deselectAllRecords?: Function;

/**
 * See {@link isc.ColumnTree.showHeaders ColumnTree.showHeaders}.
 */
showHeaders?: boolean;

/**
 * See {@link isc.ColumnTree.canDragRecordsOut ColumnTree.canDragRecordsOut}.
 */
canDragRecordsOut?: boolean;

/**
 * See {@link isc.ColumnTree.showCustomIconOpen ColumnTree.showCustomIconOpen}.
 */
showCustomIconOpen?: boolean;

/**
 * See {@link isc.ColumnTree.dataSource ColumnTree.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.ColumnTree.backButtonTitle ColumnTree.backButtonTitle}.
 */
backButtonTitle?: string;

/**
 * See {@link isc.ColumnTree.initialCriteria ColumnTree.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.ColumnTree.fixedColumns ColumnTree.fixedColumns}.
 */
fixedColumns?: number;

/**
 * See {@link isc.ColumnTree.shouldShowHeader() ColumnTree.shouldShowHeader()}.
 */
shouldShowHeader?: Function;

/**
 * See {@link isc.ColumnTree.showNodeCount ColumnTree.showNodeCount}.
 */
showNodeCount?: boolean;

/**
 * See {@link isc.ColumnTree.customIconOpenProperty ColumnTree.customIconOpenProperty}.
 */
customIconOpenProperty?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ColumnTree wraps the SmartClient widget class
 * {@link isc.ColumnTree ColumnTree} for React, allowing you to import
 * ColumnTree for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class ColumnTree extends Layout {
    props: AsComponentXML<ColumnTreeProps>;
}
