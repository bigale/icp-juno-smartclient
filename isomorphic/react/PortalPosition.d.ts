import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PortalPositionProps {

/**
 * See {@link isc.PortalPosition.rowNum PortalPosition.rowNum}.
 */
rowNum?: number;

/**
 * See {@link isc.PortalPosition.position PortalPosition.position}.
 */
position?: number;

/**
 * See {@link isc.PortalPosition.colNum PortalPosition.colNum}.
 */
colNum?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PortalPosition wraps the SmartClient object
 * {@link isc.PortalPosition PortalPosition} for React, allowing you to import
 * PortalPosition for use in React JS and JSX.
 * @class
 */
declare class PortalPosition extends ILogicalComponent {
    props: AsComponentXML<PortalPositionProps>;
}
