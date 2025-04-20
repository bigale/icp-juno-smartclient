import React from 'react';
import { TabBar, TabBarProps } from './TabBar';
import { AsComponentXML } from './core/ReactComponent';


declare interface VerticalTabBarProps extends TabBarProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * VerticalTabBar wraps the SmartClient widget class
 * {@link isc.VerticalTabBar VerticalTabBar} for React, allowing you to import
 * VerticalTabBar for use in React JS and JSX.
 * @class
 * @extends TabBar
 */
declare class VerticalTabBar extends TabBar {
    props: AsComponentXML<VerticalTabBarProps>;
}
