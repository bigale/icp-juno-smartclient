import React from 'react';
import { DBCField, DBCFieldProps } from './DBCField';
import { AsComponentXML } from './core/ReactComponent';


declare interface DetailViewerFieldProps extends DBCFieldProps {

/**
 * See {@link isc.DetailViewerField.imageHeight DetailViewerField.imageHeight}.
 */
imageHeight?: number | string;

/**
 * See {@link isc.DetailViewerField.displayField DetailViewerField.displayField}.
 */
displayField?: string;

/**
 * See {@link isc.DetailViewerField.valueMap DetailViewerField.valueMap}.
 */
valueMap?: Object;

/**
 * See {@link isc.DetailViewerField.imageURLSuffix DetailViewerField.imageURLSuffix}.
 */
imageURLSuffix?: string;

/**
 * See {@link isc.DetailViewerField.target DetailViewerField.target}.
 */
target?: string;

/**
 * See {@link isc.DetailViewerField.cellStyle DetailViewerField.cellStyle}.
 */
cellStyle?: string;

/**
 * See {@link isc.DetailViewerField.showIf() DetailViewerField.showIf()}.
 */
showIf?: Function;

/**
 * See {@link isc.DetailViewerField.canExport DetailViewerField.canExport}.
 */
canExport?: boolean;

/**
 * See {@link isc.DetailViewerField.includeFrom DetailViewerField.includeFrom}.
 */
includeFrom?: string;

/**
 * See {@link isc.DetailViewerField.decimalPad DetailViewerField.decimalPad}.
 */
decimalPad?: number;

/**
 * See {@link isc.DetailViewerField.linkURLPrefix DetailViewerField.linkURLPrefix}.
 */
linkURLPrefix?: string;

/**
 * See {@link isc.DetailViewerField.type DetailViewerField.type}.
 */
type?: string;

/**
 * See {@link isc.DetailViewerField.showFileInline DetailViewerField.showFileInline}.
 */
showFileInline?: boolean;

/**
 * See {@link isc.DetailViewerField.imageURLPrefix DetailViewerField.imageURLPrefix}.
 */
imageURLPrefix?: string;

/**
 * See {@link isc.DetailViewerField.format DetailViewerField.format}.
 */
format?: string;

/**
 * See {@link isc.DetailViewerField.exportFormat DetailViewerField.exportFormat}.
 */
exportFormat?: string;

/**
 * See {@link isc.DetailViewerField.dataPath DetailViewerField.dataPath}.
 */
dataPath?: string;

/**
 * See {@link isc.DetailViewerField.linkURLSuffix DetailViewerField.linkURLSuffix}.
 */
linkURLSuffix?: string;

/**
 * See {@link isc.DetailViewerField.hiliteIconWidth DetailViewerField.hiliteIconWidth}.
 */
hiliteIconWidth?: number;

/**
 * See {@link isc.DetailViewerField.userFormula DetailViewerField.userFormula}.
 */
userFormula?: UserFormula;

/**
 * See {@link isc.DetailViewerField.userSummary DetailViewerField.userSummary}.
 */
userSummary?: UserSummary;

/**
 * See {@link isc.DetailViewerField.name DetailViewerField.name}.
 */
name?: string;

/**
 * See {@link isc.DetailViewerField.formatCellValue() DetailViewerField.formatCellValue()}.
 */
formatCellValue?: Function;

/**
 * See {@link isc.DetailViewerField.canHilite DetailViewerField.canHilite}.
 */
canHilite?: boolean;

/**
 * See {@link isc.DetailViewerField.value DetailViewerField.value}.
 */
value?: string;

/**
 * See {@link isc.DetailViewerField.title DetailViewerField.title}.
 */
title?: string;

/**
 * See {@link isc.DetailViewerField.decimalPrecision DetailViewerField.decimalPrecision}.
 */
decimalPrecision?: number;

/**
 * See {@link isc.DetailViewerField.exportRawValues DetailViewerField.exportRawValues}.
 */
exportRawValues?: boolean;

/**
 * See {@link isc.DetailViewerField.hiliteIconLeftPadding DetailViewerField.hiliteIconLeftPadding}.
 */
hiliteIconLeftPadding?: number;

/**
 * See {@link isc.DetailViewerField.imageWidth DetailViewerField.imageWidth}.
 */
imageWidth?: number | string;

/**
 * See {@link isc.DetailViewerField.linkText DetailViewerField.linkText}.
 */
linkText?: string;

/**
 * See {@link isc.DetailViewerField.getCellStyle() DetailViewerField.getCellStyle()}.
 */
getCellStyle?: Function;

/**
 * See {@link isc.DetailViewerField.timeFormatter DetailViewerField.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.DetailViewerField.printCellStyle DetailViewerField.printCellStyle}.
 */
printCellStyle?: string;

/**
 * See {@link isc.DetailViewerField.escapeHTML DetailViewerField.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.DetailViewerField.dateFormatter DetailViewerField.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.DetailViewerField.height DetailViewerField.height}.
 */
height?: number;

/**
 * See {@link isc.DetailViewerField.hiliteIconSize DetailViewerField.hiliteIconSize}.
 */
hiliteIconSize?: number;

/**
 * See {@link isc.DetailViewerField.hiliteIconHeight DetailViewerField.hiliteIconHeight}.
 */
hiliteIconHeight?: number;

/**
 * See {@link isc.DetailViewerField.imageSize DetailViewerField.imageSize}.
 */
imageSize?: number | string;

/**
 * See {@link isc.DetailViewerField.linkTextProperty DetailViewerField.linkTextProperty}.
 */
linkTextProperty?: string;

/**
 * See {@link isc.DetailViewerField.emptyCellValue DetailViewerField.emptyCellValue}.
 */
emptyCellValue?: string;

/**
 * See {@link isc.DetailViewerField.hiliteIconPosition DetailViewerField.hiliteIconPosition}.
 */
hiliteIconPosition?: string;

/**
 * See {@link isc.DetailViewerField.hiliteIconRightPadding DetailViewerField.hiliteIconRightPadding}.
 */
hiliteIconRightPadding?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DetailViewerField wraps the SmartClient object
 * {@link isc.DetailViewerField DetailViewerField} for React, allowing you to import
 * DetailViewerField for use in React JS and JSX.
 * @class
 */
declare class DetailViewerField extends DBCField {
    props: AsComponentXML<DetailViewerFieldProps>;
}
