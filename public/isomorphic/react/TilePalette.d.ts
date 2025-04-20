import React from 'react';
import { TileGrid, TileGridProps } from './TileGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface TilePaletteProps extends TileGridProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TilePalette wraps the SmartClient widget class
 * {@link isc.TilePalette TilePalette} for React, allowing you to import
 * TilePalette for use in React JS and JSX.
 * @class
 * @extends TileGrid
 */
declare class TilePalette extends TileGrid {
    props: AsComponentXML<TilePaletteProps>;
}
