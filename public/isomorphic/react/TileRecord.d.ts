import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TileRecordProps {

/**
 * See {@link isc.TileRecord.tileProperties TileRecord.tileProperties}.
 */
tileProperties?: Canvas;

/**
 * See {@link isc.TileRecord.tileConstructor TileRecord.tileConstructor}.
 */
tileConstructor?: string;

/**
 * See {@link isc.TileRecord.minimumImageFieldSize TileRecord.minimumImageFieldSize}.
 */
minimumImageFieldSize?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TileRecord wraps the SmartClient object
 * {@link isc.TileRecord TileRecord} for React, allowing you to import
 * TileRecord for use in React JS and JSX.
 * @class
 */
declare class TileRecord extends ILogicalComponent {
    props: AsComponentXML<TileRecordProps>;
}
