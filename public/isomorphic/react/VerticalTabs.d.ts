import React from 'react';
import { TabSet, TabSetProps } from './TabSet';
import { AsComponentXML } from './core/ReactComponent';


declare interface VerticalTabsProps extends TabSetProps {

/**
 * See {@link isc.VerticalTabs.tabBarPosition VerticalTabs.tabBarPosition}.
 */
tabBarPosition?: string;

/**
 * See {@link isc.VerticalTabs.vertical VerticalTabs.vertical}.
 */
vertical?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * VerticalTabs wraps the SmartClient widget class
 * {@link isc.VerticalTabs VerticalTabs} for React, allowing you to import
 * VerticalTabs for use in React JS and JSX.
 * @class
 * @extends TabSet
 */
declare class VerticalTabs extends TabSet {
    props: AsComponentXML<VerticalTabsProps>;
}
