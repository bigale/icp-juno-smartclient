import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface PickListMenuProps extends ListGridProps {

/**
 * See {@link isc.PickListMenu.canSaveSearches PickListMenu.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.PickListMenu.canShowFilterEditor PickListMenu.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;

/**
 * See {@link isc.PickListMenu.normalCellHeight PickListMenu.normalCellHeight}.
 */
normalCellHeight?: number;

/**
 * See {@link isc.PickListMenu.dataProperties PickListMenu.dataProperties}.
 */
dataProperties?: ResultSet;

/**
 * See {@link isc.PickListMenu.bodyStyleName PickListMenu.bodyStyleName}.
 */
bodyStyleName?: string;

/**
 * See {@link isc.PickListMenu.styleName PickListMenu.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.PickListMenu.applySelection() PickListMenu.applySelection()}.
 */
applySelection?: Function;

/**
 * See {@link isc.PickListMenu.emptyMessage PickListMenu.emptyMessage}.
 */
emptyMessage?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PickListMenu wraps the SmartClient widget class
 * {@link isc.PickListMenu PickListMenu} for React, allowing you to import
 * PickListMenu for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class PickListMenu extends ListGrid {
    props: AsComponentXML<PickListMenuProps>;
}
