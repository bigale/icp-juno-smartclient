import React from 'react';
import { StatefulCanvas, StatefulCanvasProps } from './StatefulCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface SimpleTileProps extends StatefulCanvasProps {

/**
 * See {@link isc.SimpleTile.getInnerHTML() SimpleTile.getInnerHTML()}.
 */
getInnerHTML?: Function;

/**
 * See {@link isc.SimpleTile.creator SimpleTile.creator}.
 */
creator?: TileGrid;

/**
 * See {@link isc.SimpleTile.tileGrid SimpleTile.tileGrid}.
 */
tileGrid?: TileGrid;

/**
 * See {@link isc.SimpleTile.baseStyle SimpleTile.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.SimpleTile.getRecord() SimpleTile.getRecord()}.
 */
getRecord?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SimpleTile wraps the SmartClient widget class
 * {@link isc.SimpleTile SimpleTile} for React, allowing you to import
 * SimpleTile for use in React JS and JSX.
 * @class
 * @extends StatefulCanvas
 */
declare class SimpleTile extends StatefulCanvas {
    props: AsComponentXML<SimpleTileProps>;
}
