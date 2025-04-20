import React from 'react';
import { TreeNode, TreeNodeProps } from './TreeNode';
import { AsComponentXML } from './core/ReactComponent';


declare interface NavItemProps extends TreeNodeProps {

/**
 * See {@link isc.NavItem.enableWhen NavItem.enableWhen}.
 */
enableWhen?: AdvancedCriteria;

/**
 * See {@link isc.NavItem.pane NavItem.pane}.
 */
pane?: Canvas | string;

/**
 * See {@link isc.NavItem.isHeader NavItem.isHeader}.
 */
isHeader?: boolean;

/**
 * See {@link isc.NavItem.icon NavItem.icon}.
 */
icon?: string;

/**
 * See {@link isc.NavItem.isSeparator NavItem.isSeparator}.
 */
isSeparator?: boolean;

/**
 * See {@link isc.NavItem.title NavItem.title}.
 */
title?: string;

/**
 * See {@link isc.NavItem.id NavItem.id}.
 */
id?: string;

/**
 * See {@link isc.NavItem.customStyle NavItem.customStyle}.
 */
customStyle?: string;

/**
 * See {@link isc.NavItem.items NavItem.items}.
 */
items?: NavItem[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NavItem wraps the SmartClient object
 * {@link isc.NavItem NavItem} for React, allowing you to import
 * NavItem for use in React JS and JSX.
 * @class
 */
declare class NavItem extends TreeNode {
    props: AsComponentXML<NavItemProps>;
}
