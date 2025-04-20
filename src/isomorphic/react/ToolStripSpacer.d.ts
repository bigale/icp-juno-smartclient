import React from 'react';
import { LayoutSpacer, LayoutSpacerProps } from './LayoutSpacer';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripSpacerProps extends LayoutSpacerProps {

/**
 * See {@link isc.ToolStripSpacer.space ToolStripSpacer.space}.
 */
space?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripSpacer wraps the SmartClient widget class
 * {@link isc.ToolStripSpacer ToolStripSpacer} for React, allowing you to import
 * ToolStripSpacer for use in React JS and JSX.
 * @class
 * @extends LayoutSpacer
 */
declare class ToolStripSpacer extends LayoutSpacer {
    props: AsComponentXML<ToolStripSpacerProps>;
}
