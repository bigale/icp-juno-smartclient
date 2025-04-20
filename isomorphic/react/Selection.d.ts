import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SelectionProps {

/**
 * See {@link isc.Selection.deselectItem() Selection.deselectItem()}.
 */
deselectItem?: Function;

/**
 * See {@link isc.Selection.isSelected() Selection.isSelected()}.
 */
isSelected?: Function;

/**
 * See {@link isc.Selection.isPartiallySelected() Selection.isPartiallySelected()}.
 */
isPartiallySelected?: Function;

/**
 * See {@link isc.Selection.deselectList() Selection.deselectList()}.
 */
deselectList?: Function;

/**
 * See {@link isc.Selection.selectRange() Selection.selectRange()}.
 */
selectRange?: Function;

/**
 * See {@link isc.Selection.select() Selection.select()}.
 */
select?: Function;

/**
 * See {@link isc.Selection.selectAll() Selection.selectAll()}.
 */
selectAll?: Function;

/**
 * See {@link isc.Selection.deselectRange() Selection.deselectRange()}.
 */
deselectRange?: Function;

/**
 * See {@link isc.Selection.anySelected() Selection.anySelected()}.
 */
anySelected?: Function;

/**
 * See {@link isc.Selection.multipleSelected() Selection.multipleSelected()}.
 */
multipleSelected?: Function;

/**
 * See {@link isc.Selection.selectItem() Selection.selectItem()}.
 */
selectItem?: Function;

/**
 * See {@link isc.Selection.setSelected() Selection.setSelected()}.
 */
setSelected?: Function;

/**
 * See {@link isc.Selection.selectionRangeNotLoadedMessage Selection.selectionRangeNotLoadedMessage}.
 */
selectionRangeNotLoadedMessage?: string;

/**
 * See {@link isc.Selection.selectList() Selection.selectList()}.
 */
selectList?: Function;

/**
 * See {@link isc.Selection.selectSingle() Selection.selectSingle()}.
 */
selectSingle?: Function;

/**
 * See {@link isc.Selection.getLength() Selection.getLength()}.
 */
getLength?: Function;

/**
 * See {@link isc.Selection.deselect() Selection.deselect()}.
 */
deselect?: Function;

/**
 * See {@link isc.Selection.deselectAll() Selection.deselectAll()}.
 */
deselectAll?: Function;

/**
 * See {@link isc.Selection.getSelectedRecord() Selection.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.Selection.getSelection() Selection.getSelection()}.
 */
getSelection?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Selection wraps the non-rendered SmartClient class
 * {@link isc.Selection Selection} for React, allowing you to import
 *  Selection for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Selection extends ILogicalComponent {
    props: AsComponentXML<SelectionProps>;
}
