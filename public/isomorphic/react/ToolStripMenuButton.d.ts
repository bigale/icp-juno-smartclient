import React from 'react';
import { MenuButton, MenuButtonProps } from './MenuButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripMenuButtonProps extends MenuButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripMenuButton wraps the SmartClient widget class
 * {@link isc.ToolStripMenuButton ToolStripMenuButton} for React, allowing you to import
 * ToolStripMenuButton for use in React JS and JSX.
 * @class
 * @extends MenuButton
 */
declare class ToolStripMenuButton extends MenuButton {
    props: AsComponentXML<ToolStripMenuButtonProps>;
}
