import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TreeNodeProps {

/**
 * See {@link isc.TreeNode.iconPadding TreeNode.iconPadding}.
 */
iconPadding?: number;

/**
 * See {@link isc.TreeNode.isFolder TreeNode.isFolder}.
 */
isFolder?: boolean | string;

/**
 * See {@link isc.TreeNode.name TreeNode.name}.
 */
name?: string;

/**
 * See {@link isc.TreeNode.icon TreeNode.icon}.
 */
icon?: string;

/**
 * See {@link isc.TreeNode.enabled TreeNode.enabled}.
 */
enabled?: boolean;

/**
 * See {@link isc.TreeNode.canDrag TreeNode.canDrag}.
 */
canDrag?: boolean;

/**
 * See {@link isc.TreeNode.parentId TreeNode.parentId}.
 */
parentId?: string | number;

/**
 * See {@link isc.TreeNode.id TreeNode.id}.
 */
id?: string | number;

/**
 * See {@link isc.TreeNode.childComponents TreeNode.childComponents}.
 */
childComponents?: TreeNode[];

/**
 * See {@link isc.TreeNode.showOpenIcon TreeNode.showOpenIcon}.
 */
showOpenIcon?: boolean;

/**
 * See {@link isc.TreeNode.showSelectedIcon TreeNode.showSelectedIcon}.
 */
showSelectedIcon?: boolean;

/**
 * See {@link isc.TreeNode.showDropIcon TreeNode.showDropIcon}.
 */
showDropIcon?: boolean;

/**
 * See {@link isc.TreeNode.title TreeNode.title}.
 */
title?: string;

/**
 * See {@link isc.TreeNode.canAcceptDrop TreeNode.canAcceptDrop}.
 */
canAcceptDrop?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TreeNode wraps the SmartClient object
 * {@link isc.TreeNode TreeNode} for React, allowing you to import
 * TreeNode for use in React JS and JSX.
 * @class
 */
declare class TreeNode extends ILogicalComponent {
    props: AsComponentXML<TreeNodeProps>;
}
