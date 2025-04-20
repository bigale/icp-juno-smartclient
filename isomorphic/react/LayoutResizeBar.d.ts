import React from 'react';
import { Splitbar, SplitbarProps } from './Splitbar';
import { AsComponentXML } from './core/ReactComponent';


declare interface LayoutResizeBarProps extends SplitbarProps {

/**
 * See {@link isc.LayoutResizeBar.setResizeDirection() LayoutResizeBar.setResizeDirection()}.
 */
setResizeDirection?: Function;

/**
 * See {@link isc.LayoutResizeBar.canCollapse LayoutResizeBar.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.LayoutResizeBar.resizeDirection LayoutResizeBar.resizeDirection}.
 */
resizeDirection?: string;

/**
 * See {@link isc.LayoutResizeBar.editProxyConstructor LayoutResizeBar.editProxyConstructor}.
 */
editProxyConstructor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LayoutResizeBar wraps the SmartClient widget class
 * {@link isc.LayoutResizeBar LayoutResizeBar} for React, allowing you to import
 * LayoutResizeBar for use in React JS and JSX.
 * @class
 * @extends Splitbar
 */
declare class LayoutResizeBar extends Splitbar {
    props: AsComponentXML<LayoutResizeBarProps>;
}
