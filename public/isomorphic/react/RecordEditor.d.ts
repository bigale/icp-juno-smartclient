import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface RecordEditorProps extends ListGridProps {

/**
 * See {@link isc.RecordEditor.performAction() RecordEditor.performAction()}.
 */
performAction?: Function;

/**
 * See {@link isc.RecordEditor.filterImg RecordEditor.filterImg}.
 */
filterImg?: string;

/**
 * See {@link isc.RecordEditor.actionButtonProperties RecordEditor.actionButtonProperties}.
 */
actionButtonProperties?: Button;

/**
 * See {@link isc.RecordEditor.baseStyle RecordEditor.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.RecordEditor.actionButtonStyle RecordEditor.actionButtonStyle}.
 */
actionButtonStyle?: string;

/**
 * See {@link isc.RecordEditor.skinImgDir RecordEditor.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.RecordEditor.suppressNullValueFormat RecordEditor.suppressNullValueFormat}.
 */
suppressNullValueFormat?: boolean;

/**
 * See {@link isc.RecordEditor.canSaveSearches RecordEditor.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.RecordEditor.recordSummaryBaseStyle RecordEditor.recordSummaryBaseStyle}.
 */
recordSummaryBaseStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RecordEditor wraps the SmartClient widget class
 * {@link isc.RecordEditor RecordEditor} for React, allowing you to import
 * RecordEditor for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class RecordEditor extends ListGrid {
    props: AsComponentXML<RecordEditorProps>;
}
