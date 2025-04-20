import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripButtonProps extends ButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStripButton wraps the SmartClient widget class
 * {@link isc.ToolStripButton ToolStripButton} for React, allowing you to import
 * ToolStripButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class ToolStripButton extends Button {
    props: AsComponentXML<ToolStripButtonProps>;
}
