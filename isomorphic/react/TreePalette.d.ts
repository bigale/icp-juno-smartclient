import React from 'react';
import { TreeGrid, TreeGridProps } from './TreeGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface TreePaletteProps extends TreeGridProps {

/**
 * See {@link isc.TreePalette.componentDefaults TreePalette.componentDefaults}.
 */
componentDefaults?: Object;

/**
 * See {@link isc.TreePalette.canSaveSearches TreePalette.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.TreePalette.canShowFilterEditor TreePalette.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TreePalette wraps the SmartClient widget class
 * {@link isc.TreePalette TreePalette} for React, allowing you to import
 * TreePalette for use in React JS and JSX.
 * @class
 * @extends TreeGrid
 */
declare class TreePalette extends TreeGrid {
    props: AsComponentXML<TreePaletteProps>;
}
