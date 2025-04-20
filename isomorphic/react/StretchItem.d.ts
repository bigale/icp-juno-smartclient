import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface StretchItemProps {

/**
 * See {@link isc.StretchItem.vSrc StretchItem.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.StretchItem.src StretchItem.src}.
 */
src?: string;

/**
 * See {@link isc.StretchItem.width StretchItem.width}.
 */
width?: number | string;

/**
 * See {@link isc.StretchItem.height StretchItem.height}.
 */
height?: number | string;

/**
 * See {@link isc.StretchItem.name StretchItem.name}.
 */
name?: string;

/**
 * See {@link isc.StretchItem.hSrc StretchItem.hSrc}.
 */
hSrc?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StretchItem wraps the SmartClient object
 * {@link isc.StretchItem StretchItem} for React, allowing you to import
 * StretchItem for use in React JS and JSX.
 * @class
 */
declare class StretchItem extends ILogicalComponent {
    props: AsComponentXML<StretchItemProps>;
}
