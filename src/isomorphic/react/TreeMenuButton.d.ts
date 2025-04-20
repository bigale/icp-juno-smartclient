import React from 'react';
import { MenuButton, MenuButtonProps } from './MenuButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface TreeMenuButtonProps extends MenuButtonProps {

/**
 * See {@link isc.TreeMenuButton.title TreeMenuButton.title}.
 */
title?: string;

/**
 * See {@link isc.TreeMenuButton.treeMenuProperties TreeMenuButton.treeMenuProperties}.
 */
treeMenuProperties?: Menu;

/**
 * See {@link isc.TreeMenuButton.selectedBaseStyle TreeMenuButton.selectedBaseStyle}.
 */
selectedBaseStyle?: string;

/**
 * See {@link isc.TreeMenuButton.treeMenuConstructor TreeMenuButton.treeMenuConstructor}.
 */
treeMenuConstructor?: string;

/**
 * See {@link isc.TreeMenuButton.dataProperties TreeMenuButton.dataProperties}.
 */
dataProperties?: Tree;

/**
 * See {@link isc.TreeMenuButton.emptyMenuMessage TreeMenuButton.emptyMenuMessage}.
 */
emptyMenuMessage?: string;

/**
 * See {@link isc.TreeMenuButton.showPath TreeMenuButton.showPath}.
 */
showPath?: boolean;

/**
 * See {@link isc.TreeMenuButton.pathSeparatorString TreeMenuButton.pathSeparatorString}.
 */
pathSeparatorString?: string;

/**
 * See {@link isc.TreeMenuButton.unselectedTitle TreeMenuButton.unselectedTitle}.
 */
unselectedTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TreeMenuButton wraps the SmartClient widget class
 * {@link isc.TreeMenuButton TreeMenuButton} for React, allowing you to import
 * TreeMenuButton for use in React JS and JSX.
 * @class
 * @extends MenuButton
 */
declare class TreeMenuButton extends MenuButton {
    props: AsComponentXML<TreeMenuButtonProps>;
}
