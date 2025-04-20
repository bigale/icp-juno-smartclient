import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListPaletteProps extends ListGridProps {

/**
 * See {@link isc.ListPalette.canShowFilterEditor ListPalette.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;

/**
 * See {@link isc.ListPalette.canSaveSearches ListPalette.canSaveSearches}.
 */
canSaveSearches?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListPalette wraps the SmartClient widget class
 * {@link isc.ListPalette ListPalette} for React, allowing you to import
 * ListPalette for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class ListPalette extends ListGrid {
    props: AsComponentXML<ListPaletteProps>;
}
