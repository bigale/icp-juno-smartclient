import React from 'react';
import { RibbonGroup, RibbonGroupProps } from './RibbonGroup';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripGroupProps extends RibbonGroupProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripGroup wraps the SmartClient widget class
 * {@link isc.ToolStripGroup ToolStripGroup} for React, allowing you to import
 * ToolStripGroup for use in React JS and JSX.
 * @class
 * @extends RibbonGroup
 */
declare class ToolStripGroup extends RibbonGroup {
    props: AsComponentXML<ToolStripGroupProps>;
}
