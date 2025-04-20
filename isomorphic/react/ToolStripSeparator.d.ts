import React from 'react';
import { Img, ImgProps } from './Img';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripSeparatorProps extends ImgProps {

/**
 * See {@link isc.ToolStripSeparator.vSrc ToolStripSeparator.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.ToolStripSeparator.editProxyConstructor ToolStripSeparator.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ToolStripSeparator.hSrc ToolStripSeparator.hSrc}.
 */
hSrc?: string;

/**
 * See {@link isc.ToolStripSeparator.skinImgDir ToolStripSeparator.skinImgDir}.
 */
skinImgDir?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripSeparator wraps the SmartClient widget class
 * {@link isc.ToolStripSeparator ToolStripSeparator} for React, allowing you to import
 * ToolStripSeparator for use in React JS and JSX.
 * @class
 * @extends Img
 */
declare class ToolStripSeparator extends Img {
    props: AsComponentXML<ToolStripSeparatorProps>;
}
