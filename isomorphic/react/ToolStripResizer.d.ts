import React from 'react';
import { ImgSplitbar, ImgSplitbarProps } from './ImgSplitbar';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripResizerProps extends ImgSplitbarProps {

/**
 * See {@link isc.ToolStripResizer.hSrc ToolStripResizer.hSrc}.
 */
hSrc?: string;

/**
 * See {@link isc.ToolStripResizer.vSrc ToolStripResizer.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.ToolStripResizer.skinImgDir ToolStripResizer.skinImgDir}.
 */
skinImgDir?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripResizer wraps the SmartClient widget class
 * {@link isc.ToolStripResizer ToolStripResizer} for React, allowing you to import
 * ToolStripResizer for use in React JS and JSX.
 * @class
 * @extends ImgSplitbar
 */
declare class ToolStripResizer extends ImgSplitbar {
    props: AsComponentXML<ToolStripResizerProps>;
}
