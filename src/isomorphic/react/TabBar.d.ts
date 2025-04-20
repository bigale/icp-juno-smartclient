import React from 'react';
import { Toolbar, ToolbarProps } from './Toolbar';
import { AsComponentXML } from './core/ReactComponent';


declare interface TabBarProps extends ToolbarProps {

/**
 * See {@link isc.TabBar.moreTab TabBar.moreTab}.
 */
moreTab?: Tab;

/**
 * See {@link isc.TabBar.baseLineSrc TabBar.baseLineSrc}.
 */
baseLineSrc?: string;

/**
 * See {@link isc.TabBar.breadth TabBar.breadth}.
 */
breadth?: number;

/**
 * See {@link isc.TabBar.showMoreTab TabBar.showMoreTab}.
 */
showMoreTab?: boolean;

/**
 * See {@link isc.TabBar.selectTab() TabBar.selectTab()}.
 */
selectTab?: Function;

/**
 * See {@link isc.TabBar.editProxyConstructor TabBar.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.TabBar.closeTabKeys TabBar.closeTabKeys}.
 */
closeTabKeys?: KeyIdentifier[];

/**
 * See {@link isc.TabBar.baseLineThickness TabBar.baseLineThickness}.
 */
baseLineThickness?: number;

/**
 * See {@link isc.TabBar.baseLineCapSize TabBar.baseLineCapSize}.
 */
baseLineCapSize?: number;

/**
 * See {@link isc.TabBar.moreTabCount TabBar.moreTabCount}.
 */
moreTabCount?: number;

/**
 * See {@link isc.TabBar.tabs TabBar.tabs}.
 */
tabs?: Tab[];

/**
 * See {@link isc.TabBar.defaultTabSize TabBar.defaultTabSize}.
 */
defaultTabSize?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TabBar wraps the SmartClient widget class
 * {@link isc.TabBar TabBar} for React, allowing you to import
 * TabBar for use in React JS and JSX.
 * @class
 * @extends Toolbar
 */
declare class TabBar extends Toolbar {
    props: AsComponentXML<TabBarProps>;
}
