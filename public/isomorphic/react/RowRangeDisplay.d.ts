import React from 'react';
import { Label, LabelProps } from './Label';
import { AsComponentXML } from './core/ReactComponent';


declare interface RowRangeDisplayProps extends LabelProps {

/**
 * See {@link isc.RowRangeDisplay.canRequestRowCount RowRangeDisplay.canRequestRowCount}.
 */
canRequestRowCount?: boolean;

/**
 * See {@link isc.RowRangeDisplay.sourceGrid RowRangeDisplay.sourceGrid}.
 */
sourceGrid?: ListGrid;

/**
 * See {@link isc.RowRangeDisplay.align RowRangeDisplay.align}.
 */
align?: string;

/**
 * See {@link isc.RowRangeDisplay.interactiveStyleName RowRangeDisplay.interactiveStyleName}.
 */
interactiveStyleName?: string;

/**
 * See {@link isc.RowRangeDisplay.vlign RowRangeDisplay.vlign}.
 */
vlign?: string;

/**
 * See {@link isc.RowRangeDisplay.wrap RowRangeDisplay.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.RowRangeDisplay.requestRowCountPrompt RowRangeDisplay.requestRowCountPrompt}.
 */
requestRowCountPrompt?: string;

/**
 * See {@link isc.RowRangeDisplay.setSourceGrid() RowRangeDisplay.setSourceGrid()}.
 */
setSourceGrid?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RowRangeDisplay wraps the SmartClient widget class
 * {@link isc.RowRangeDisplay RowRangeDisplay} for React, allowing you to import
 * RowRangeDisplay for use in React JS and JSX.
 * @class
 * @extends Label
 */
declare class RowRangeDisplay extends Label {
    props: AsComponentXML<RowRangeDisplayProps>;
}
