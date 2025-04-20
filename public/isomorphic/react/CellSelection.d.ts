import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CellSelectionProps {

/**
 * See {@link isc.CellSelection.selectSingleCell() CellSelection.selectSingleCell()}.
 */
selectSingleCell?: Function;

/**
 * See {@link isc.CellSelection.selectionChanged() CellSelection.selectionChanged()}.
 */
selectionChanged?: Function;

/**
 * See {@link isc.CellSelection.getSelectedRecord() CellSelection.getSelectedRecord()}.
 */
getSelectedRecord?: Function;

/**
 * See {@link isc.CellSelection.deselectCell() CellSelection.deselectCell()}.
 */
deselectCell?: Function;

/**
 * See {@link isc.CellSelection.selectCellList() CellSelection.selectCellList()}.
 */
selectCellList?: Function;

/**
 * See {@link isc.CellSelection.cellIsSelected() CellSelection.cellIsSelected()}.
 */
cellIsSelected?: Function;

/**
 * See {@link isc.CellSelection.selectCell() CellSelection.selectCell()}.
 */
selectCell?: Function;

/**
 * See {@link isc.CellSelection.deselectCellList() CellSelection.deselectCellList()}.
 */
deselectCellList?: Function;

/**
 * See {@link isc.CellSelection.anySelected() CellSelection.anySelected()}.
 */
anySelected?: Function;

/**
 * See {@link isc.CellSelection.getSelectedCells() CellSelection.getSelectedCells()}.
 */
getSelectedCells?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CellSelection wraps the non-rendered SmartClient class
 * {@link isc.CellSelection CellSelection} for React, allowing you to import
 *  CellSelection for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class CellSelection extends ILogicalComponent {
    props: AsComponentXML<CellSelectionProps>;
}
