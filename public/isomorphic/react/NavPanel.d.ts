import React from 'react';
import { SplitPane, SplitPaneProps } from './SplitPane';
import { AsComponentXML } from './core/ReactComponent';


declare interface NavPanelProps extends SplitPaneProps {

/**
 * See {@link isc.NavPanel.navGridProperties NavPanel.navGridProperties}.
 */
navGridProperties?: TreeGrid;

/**
 * See {@link isc.NavPanel.navLayoutProperties NavPanel.navLayoutProperties}.
 */
navLayoutProperties?: VLayout;

/**
 * See {@link isc.NavPanel.deckStyle NavPanel.deckStyle}.
 */
deckStyle?: string;

/**
 * See {@link isc.NavPanel.setCurrentItem() NavPanel.setCurrentItem()}.
 */
setCurrentItem?: Function;

/**
 * See {@link isc.NavPanel.isTree NavPanel.isTree}.
 */
isTree?: boolean;

/**
 * See {@link isc.NavPanel.currentItem NavPanel.currentItem}.
 */
currentItem?: NavItem;

/**
 * See {@link isc.NavPanel.navDeckProperties NavPanel.navDeckProperties}.
 */
navDeckProperties?: Deck;

/**
 * See {@link isc.NavPanel.navBeforeMembers NavPanel.navBeforeMembers}.
 */
navBeforeMembers?: Canvas[];

/**
 * See {@link isc.NavPanel.setCurrentItemId() NavPanel.setCurrentItemId()}.
 */
setCurrentItemId?: Function;

/**
 * See {@link isc.NavPanel.defaultToFirstItem NavPanel.defaultToFirstItem}.
 */
defaultToFirstItem?: boolean;

/**
 * See {@link isc.NavPanel.navItems NavPanel.navItems}.
 */
navItems?: NavItem[];

/**
 * See {@link isc.NavPanel.headerStyle NavPanel.headerStyle}.
 */
headerStyle?: string;

/**
 * See {@link isc.NavPanel.navItemBaseStyle NavPanel.navItemBaseStyle}.
 */
navItemBaseStyle?: string;

/**
 * See {@link isc.NavPanel.navAfterMembers NavPanel.navAfterMembers}.
 */
navAfterMembers?: Canvas[];

/**
 * See {@link isc.NavPanel.autoOpenItems NavPanel.autoOpenItems}.
 */
autoOpenItems?: boolean;

/**
 * See {@link isc.NavPanel.currentItemId NavPanel.currentItemId}.
 */
currentItemId?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NavPanel wraps the SmartClient widget class
 * {@link isc.NavPanel NavPanel} for React, allowing you to import
 * NavPanel for use in React JS and JSX.
 * @class
 * @extends SplitPane
 */
declare class NavPanel extends SplitPane {
    props: AsComponentXML<NavPanelProps>;
}
