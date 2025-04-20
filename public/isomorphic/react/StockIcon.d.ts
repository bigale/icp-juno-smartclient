import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface StockIconProps {

/**
 * See {@link isc.StockIcon.fromSrc StockIcon.fromSrc}.
 */
fromSrc?: string;

/**
 * See {@link isc.StockIcon.group StockIcon.group}.
 */
group?: string;

/**
 * See {@link isc.StockIcon.src StockIcon.src}.
 */
src?: string;

/**
 * See {@link isc.StockIcon.index StockIcon.index}.
 */
index?: number;

/**
 * See {@link isc.StockIcon.name StockIcon.name}.
 */
name?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StockIcon wraps the SmartClient object
 * {@link isc.StockIcon StockIcon} for React, allowing you to import
 * StockIcon for use in React JS and JSX.
 * @class
 */
declare class StockIcon extends ILogicalComponent {
    props: AsComponentXML<StockIconProps>;
}
