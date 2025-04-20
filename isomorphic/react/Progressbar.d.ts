import React from 'react';
import { StretchImg, StretchImgProps } from './StretchImg';
import { AsComponentXML } from './core/ReactComponent';


declare interface ProgressbarProps extends StretchImgProps {

/**
 * See {@link isc.Progressbar.getLength() Progressbar.getLength()}.
 */
getLength?: Function;

/**
 * See {@link isc.Progressbar.setLength() Progressbar.setLength()}.
 */
setLength?: Function;

/**
 * See {@link isc.Progressbar.length Progressbar.length}.
 */
length?: number | string;

/**
 * See {@link isc.Progressbar.editProxyConstructor Progressbar.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Progressbar.setPercentDone() Progressbar.setPercentDone()}.
 */
setPercentDone?: Function;

/**
 * See {@link isc.Progressbar.baseStyle Progressbar.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.Progressbar.percentDone Progressbar.percentDone}.
 */
percentDone?: number;

/**
 * See {@link isc.Progressbar.useCssStyles Progressbar.useCssStyles}.
 */
useCssStyles?: boolean;

/**
 * See {@link isc.Progressbar.percentChanged() Progressbar.percentChanged()}.
 */
percentChanged?: Function;

/**
 * See {@link isc.Progressbar.src Progressbar.src}.
 */
src?: string;

/**
 * See {@link isc.Progressbar.setBreadth() Progressbar.setBreadth()}.
 */
setBreadth?: Function;

/**
 * See {@link isc.Progressbar.vertical Progressbar.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.Progressbar.breadth Progressbar.breadth}.
 */
breadth?: number;

/**
 * See {@link isc.Progressbar.getAriaStateDefaults() Progressbar.getAriaStateDefaults()}.
 */
getAriaStateDefaults?: Function;

/**
 * See {@link isc.Progressbar.getBreadth() Progressbar.getBreadth()}.
 */
getBreadth?: Function;

/**
 * See {@link isc.Progressbar.progressStyle Progressbar.progressStyle}.
 */
progressStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Progressbar wraps the SmartClient widget class
 * {@link isc.Progressbar Progressbar} for React, allowing you to import
 * Progressbar for use in React JS and JSX.
 * @class
 * @extends StretchImg
 */
declare class Progressbar extends StretchImg {
    props: AsComponentXML<ProgressbarProps>;
}
