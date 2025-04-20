import React from 'react';
import { TreeGrid, TreeGridProps } from './TreeGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface PickTreeMenuProps extends TreeGridProps {

/**
 * See {@link isc.PickTreeMenu.canSaveSearches PickTreeMenu.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.PickTreeMenu.canShowFilterEditor PickTreeMenu.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PickTreeMenu wraps the SmartClient widget class
 * {@link isc.PickTreeMenu PickTreeMenu} for React, allowing you to import
 * PickTreeMenu for use in React JS and JSX.
 * @class
 * @extends TreeGrid
 */
declare class PickTreeMenu extends TreeGrid {
    props: AsComponentXML<PickTreeMenuProps>;
}
