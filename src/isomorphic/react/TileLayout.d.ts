import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface TileLayoutProps extends CanvasProps {

/**
 * See {@link isc.TileLayout.getTile() TileLayout.getTile()}.
 */
getTile?: Function;

/**
 * See {@link isc.TileLayout.tileSize TileLayout.tileSize}.
 */
tileSize?: number;

/**
 * See {@link isc.TileLayout.paddingAsLayoutMargin TileLayout.paddingAsLayoutMargin}.
 */
paddingAsLayoutMargin?: boolean;

/**
 * See {@link isc.TileLayout.showDragLine TileLayout.showDragLine}.
 */
showDragLine?: boolean;

/**
 * See {@link isc.TileLayout.setTileSize() TileLayout.setTileSize()}.
 */
setTileSize?: Function;

/**
 * See {@link isc.TileLayout.tilesPerLine TileLayout.tilesPerLine}.
 */
tilesPerLine?: number;

/**
 * See {@link isc.TileLayout.setTileVMargin() TileLayout.setTileVMargin()}.
 */
setTileVMargin?: Function;

/**
 * See {@link isc.TileLayout.addTile() TileLayout.addTile()}.
 */
addTile?: Function;

/**
 * See {@link isc.TileLayout.tileMargin TileLayout.tileMargin}.
 */
tileMargin?: number;

/**
 * See {@link isc.TileLayout.tileWidth TileLayout.tileWidth}.
 */
tileWidth?: number;

/**
 * See {@link isc.TileLayout.tileVMargin TileLayout.tileVMargin}.
 */
tileVMargin?: number;

/**
 * See {@link isc.TileLayout.animateTileChange TileLayout.animateTileChange}.
 */
animateTileChange?: boolean;

/**
 * See {@link isc.TileLayout.transformTileRect() TileLayout.transformTileRect()}.
 */
transformTileRect?: Function;

/**
 * See {@link isc.TileLayout.dragDataAction TileLayout.dragDataAction}.
 */
dragDataAction?: string;

/**
 * See {@link isc.TileLayout.transferDragData() TileLayout.transferDragData()}.
 */
transferDragData?: Function;

/**
 * See {@link isc.TileLayout.tileHeight TileLayout.tileHeight}.
 */
tileHeight?: number;

/**
 * See {@link isc.TileLayout.dragLineStyle TileLayout.dragLineStyle}.
 */
dragLineStyle?: string;

/**
 * See {@link isc.TileLayout.dragLineThickness TileLayout.dragLineThickness}.
 */
dragLineThickness?: number;

/**
 * See {@link isc.TileLayout.layoutMargin TileLayout.layoutMargin}.
 */
layoutMargin?: number;

/**
 * See {@link isc.TileLayout.setTileHeight() TileLayout.setTileHeight()}.
 */
setTileHeight?: Function;

/**
 * See {@link isc.TileLayout.overflow TileLayout.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.TileLayout.autoWrapLines TileLayout.autoWrapLines}.
 */
autoWrapLines?: boolean;

/**
 * See {@link isc.TileLayout.setTileHMargin() TileLayout.setTileHMargin()}.
 */
setTileHMargin?: Function;

/**
 * See {@link isc.TileLayout.tiles TileLayout.tiles}.
 */
tiles?: Canvas[];

/**
 * See {@link isc.TileLayout.expandMargins TileLayout.expandMargins}.
 */
expandMargins?: boolean;

/**
 * See {@link isc.TileLayout.removeTile() TileLayout.removeTile()}.
 */
removeTile?: Function;

/**
 * See {@link isc.TileLayout.orientation TileLayout.orientation}.
 */
orientation?: string;

/**
 * See {@link isc.TileLayout.getDragData() TileLayout.getDragData()}.
 */
getDragData?: Function;

/**
 * See {@link isc.TileLayout.getDropIndex() TileLayout.getDropIndex()}.
 */
getDropIndex?: Function;

/**
 * See {@link isc.TileLayout.setTileMargin() TileLayout.setTileMargin()}.
 */
setTileMargin?: Function;

/**
 * See {@link isc.TileLayout.setTileWidth() TileLayout.setTileWidth()}.
 */
setTileWidth?: Function;

/**
 * See {@link isc.TileLayout.layoutPolicy TileLayout.layoutPolicy}.
 */
layoutPolicy?: string;

/**
 * See {@link isc.TileLayout.setTilesPerLine() TileLayout.setTilesPerLine()}.
 */
setTilesPerLine?: Function;

/**
 * See {@link isc.TileLayout.tileHMargin TileLayout.tileHMargin}.
 */
tileHMargin?: number;

/**
 * See {@link isc.TileLayout.dragLineProperties TileLayout.dragLineProperties}.
 */
dragLineProperties?: Canvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TileLayout wraps the SmartClient widget class
 * {@link isc.TileLayout TileLayout} for React, allowing you to import
 * TileLayout for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class TileLayout extends Canvas {
    props: AsComponentXML<TileLayoutProps>;
}
