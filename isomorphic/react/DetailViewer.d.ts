import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface DetailViewerProps extends CanvasProps {

/**
 * See {@link isc.DetailViewer.hiliteIconRightPadding DetailViewer.hiliteIconRightPadding}.
 */
hiliteIconRightPadding?: number;

/**
 * See {@link isc.DetailViewer.fieldPickerFieldProperties DetailViewer.fieldPickerFieldProperties}.
 */
fieldPickerFieldProperties?: string[];

/**
 * See {@link isc.DetailViewer.fetchRequestProperties DetailViewer.fetchRequestProperties}.
 */
fetchRequestProperties?: DSRequest;

/**
 * See {@link isc.DetailViewer.showDetailFields DetailViewer.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.DetailViewer.fieldIsVisible() DetailViewer.fieldIsVisible()}.
 */
fieldIsVisible?: Function;

/**
 * See {@link isc.DetailViewer.loadingMessage DetailViewer.loadingMessage}.
 */
loadingMessage?: string;

/**
 * See {@link isc.DetailViewer.emptyMessageStyle DetailViewer.emptyMessageStyle}.
 */
emptyMessageStyle?: string;

/**
 * See {@link isc.DetailViewer.getViewState() DetailViewer.getViewState()}.
 */
getViewState?: Function;

/**
 * See {@link isc.DetailViewer.valueAlign DetailViewer.valueAlign}.
 */
valueAlign?: string;

/**
 * See {@link isc.DetailViewer.labelPrefix DetailViewer.labelPrefix}.
 */
labelPrefix?: string;

/**
 * See {@link isc.DetailViewer.hiliteIconSize DetailViewer.hiliteIconSize}.
 */
hiliteIconSize?: number;

/**
 * See {@link isc.DetailViewer.showEmptyField DetailViewer.showEmptyField}.
 */
showEmptyField?: boolean;

/**
 * See {@link isc.DetailViewer.isExportingClientData() DetailViewer.isExportingClientData()}.
 */
isExportingClientData?: Function;

/**
 * See {@link isc.DetailViewer.dataSource DetailViewer.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.DetailViewer.printHeaderStyle DetailViewer.printHeaderStyle}.
 */
printHeaderStyle?: string;

/**
 * See {@link isc.DetailViewer.getCellStyle() DetailViewer.getCellStyle()}.
 */
getCellStyle?: Function;

/**
 * See {@link isc.DetailViewer.hiliteIcons DetailViewer.hiliteIcons}.
 */
hiliteIcons?: string[];

/**
 * See {@link isc.DetailViewer.dataArity DetailViewer.dataArity}.
 */
dataArity?: string;

/**
 * See {@link isc.DetailViewer.wrapLabel DetailViewer.wrapLabel}.
 */
wrapLabel?: boolean;

/**
 * See {@link isc.DetailViewer.setViewState() DetailViewer.setViewState()}.
 */
setViewState?: Function;

/**
 * See {@link isc.DetailViewer.emptyCellValue DetailViewer.emptyCellValue}.
 */
emptyCellValue?: string;

/**
 * See {@link isc.DetailViewer.fieldIdProperty DetailViewer.fieldIdProperty}.
 */
fieldIdProperty?: string;

/**
 * See {@link isc.DetailViewer.labelStyle DetailViewer.labelStyle}.
 */
labelStyle?: string;

/**
 * See {@link isc.DetailViewer.setData() DetailViewer.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.DetailViewer.recordsPerBlock DetailViewer.recordsPerBlock}.
 */
recordsPerBlock?: number;

/**
 * See {@link isc.DetailViewer.hiliteIconLeftPadding DetailViewer.hiliteIconLeftPadding}.
 */
hiliteIconLeftPadding?: number;

/**
 * See {@link isc.DetailViewer.rowHeight DetailViewer.rowHeight}.
 */
rowHeight?: number;

/**
 * See {@link isc.DetailViewer.fields DetailViewer.fields}.
 */
fields?: DetailViewerField[];

/**
 * See {@link isc.DetailViewer.hiliteIconHeight DetailViewer.hiliteIconHeight}.
 */
hiliteIconHeight?: number;

/**
 * See {@link isc.DetailViewer.styleName DetailViewer.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.DetailViewer.implicitCriteria DetailViewer.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.DetailViewer.fetchRelatedData() DetailViewer.fetchRelatedData()}.
 */
fetchRelatedData?: Function;

/**
 * See {@link isc.DetailViewer.labelSuffix DetailViewer.labelSuffix}.
 */
labelSuffix?: string;

/**
 * See {@link isc.DetailViewer.cellStyle DetailViewer.cellStyle}.
 */
cellStyle?: string;

/**
 * See {@link isc.DetailViewer.printLabelStyle DetailViewer.printLabelStyle}.
 */
printLabelStyle?: string;

/**
 * See {@link isc.DetailViewer.exportData() DetailViewer.exportData()}.
 */
exportData?: Function;

/**
 * See {@link isc.DetailViewer.viewSelectedData() DetailViewer.viewSelectedData()}.
 */
viewSelectedData?: Function;

/**
 * See {@link isc.DetailViewer.dataFetchMode DetailViewer.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.DetailViewer.fieldPickerWindowProperties DetailViewer.fieldPickerWindowProperties}.
 */
fieldPickerWindowProperties?: FieldPickerWindow;

/**
 * See {@link isc.DetailViewer.showEmptyMessage DetailViewer.showEmptyMessage}.
 */
showEmptyMessage?: boolean;

/**
 * See {@link isc.DetailViewer.datetimeFormatter DetailViewer.datetimeFormatter}.
 */
datetimeFormatter?: string;

/**
 * See {@link isc.DetailViewer.headerStyle DetailViewer.headerStyle}.
 */
headerStyle?: string;

/**
 * See {@link isc.DetailViewer.blockStyle DetailViewer.blockStyle}.
 */
blockStyle?: string;

/**
 * See {@link isc.DetailViewer.separatorStyle DetailViewer.separatorStyle}.
 */
separatorStyle?: string;

/**
 * See {@link isc.DetailViewer.wrapValues DetailViewer.wrapValues}.
 */
wrapValues?: boolean;

/**
 * See {@link isc.DetailViewer.printCellStyle DetailViewer.printCellStyle}.
 */
printCellStyle?: string;

/**
 * See {@link isc.DetailViewer.emptyMessage DetailViewer.emptyMessage}.
 */
emptyMessage?: string;

/**
 * See {@link isc.DetailViewer.dateFormatter DetailViewer.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.DetailViewer.canPickFields DetailViewer.canPickFields}.
 */
canPickFields?: boolean;

/**
 * See {@link isc.DetailViewer.hiliteIconPosition DetailViewer.hiliteIconPosition}.
 */
hiliteIconPosition?: string;

/**
 * See {@link isc.DetailViewer.data DetailViewer.data}.
 */
data?: DetailViewerRecord[] | Record[];

/**
 * See {@link isc.DetailViewer.labelAlign DetailViewer.labelAlign}.
 */
labelAlign?: string;

/**
 * See {@link isc.DetailViewer.blockSeparator DetailViewer.blockSeparator}.
 */
blockSeparator?: string;

/**
 * See {@link isc.DetailViewer.exportClientData() DetailViewer.exportClientData()}.
 */
exportClientData?: Function;

/**
 * See {@link isc.DetailViewer.emptyMessageHTML() DetailViewer.emptyMessageHTML()}.
 */
emptyMessageHTML?: Function;

/**
 * See {@link isc.DetailViewer.configureFieldsText DetailViewer.configureFieldsText}.
 */
configureFieldsText?: string;

/**
 * See {@link isc.DetailViewer.editProxyConstructor DetailViewer.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.DetailViewer.initialCriteria DetailViewer.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.DetailViewer.getCellCSSText() DetailViewer.getCellCSSText()}.
 */
getCellCSSText?: Function;

/**
 * See {@link isc.DetailViewer.getRecordIndex() DetailViewer.getRecordIndex()}.
 */
getRecordIndex?: Function;

/**
 * See {@link isc.DetailViewer.setHilites() DetailViewer.setHilites()}.
 */
setHilites?: Function;

/**
 * See {@link isc.DetailViewer.hiliteIconWidth DetailViewer.hiliteIconWidth}.
 */
hiliteIconWidth?: number;

/**
 * See {@link isc.DetailViewer.loadingMessageStyle DetailViewer.loadingMessageStyle}.
 */
loadingMessageStyle?: string;

/**
 * See {@link isc.DetailViewer.timeFormatter DetailViewer.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.DetailViewer.linkTextProperty DetailViewer.linkTextProperty}.
 */
linkTextProperty?: string;

/**
 * See {@link isc.DetailViewer.formatCellValue() DetailViewer.formatCellValue()}.
 */
formatCellValue?: Function;

/**
 * See {@link isc.DetailViewer.autoFetchData DetailViewer.autoFetchData}.
 */
autoFetchData?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DetailViewer wraps the SmartClient widget class
 * {@link isc.DetailViewer DetailViewer} for React, allowing you to import
 * DetailViewer for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class DetailViewer extends Canvas {
    props: AsComponentXML<DetailViewerProps>;
}
