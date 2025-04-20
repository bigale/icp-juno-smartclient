import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TreeProps {

/**
 * See {@link isc.Tree.titleProperty Tree.titleProperty}.
 */
titleProperty?: string;

/**
 * See {@link isc.Tree.remove() Tree.remove()}.
 */
remove?: Function;

/**
 * See {@link isc.Tree.getParents() Tree.getParents()}.
 */
getParents?: Function;

/**
 * See {@link isc.Tree.getFolders() Tree.getFolders()}.
 */
getFolders?: Function;

/**
 * See {@link isc.Tree.getLeaves() Tree.getLeaves()}.
 */
getLeaves?: Function;

/**
 * See {@link isc.Tree.removeChildren() Tree.removeChildren()}.
 */
removeChildren?: Function;

/**
 * See {@link isc.Tree.hasLeaves() Tree.hasLeaves()}.
 */
hasLeaves?: Function;

/**
 * See {@link isc.Tree.addList() Tree.addList()}.
 */
addList?: Function;

/**
 * See {@link isc.Tree.openAll() Tree.openAll()}.
 */
openAll?: Function;

/**
 * See {@link isc.Tree.getDescendants() Tree.getDescendants()}.
 */
getDescendants?: Function;

/**
 * See {@link isc.Tree.setSortFoldersBeforeLeaves() Tree.setSortFoldersBeforeLeaves()}.
 */
setSortFoldersBeforeLeaves?: Function;

/**
 * See {@link isc.Tree.linkPositionField Tree.linkPositionField}.
 */
linkPositionField?: string;

/**
 * See {@link isc.Tree.getDescendantNodeLocators() Tree.getDescendantNodeLocators()}.
 */
getDescendantNodeLocators?: Function;

/**
 * See {@link isc.Tree.openFolders() Tree.openFolders()}.
 */
openFolders?: Function;

/**
 * See {@link isc.Tree.rootValue Tree.rootValue}.
 */
rootValue?: string | number;

/**
 * See {@link isc.Tree.defaultIsFolder Tree.defaultIsFolder}.
 */
defaultIsFolder?: boolean;

/**
 * See {@link isc.Tree.getTitle() Tree.getTitle()}.
 */
getTitle?: Function;

/**
 * See {@link isc.Tree.getMultiLinkParents() Tree.getMultiLinkParents()}.
 */
getMultiLinkParents?: Function;

/**
 * See {@link isc.Tree.getFilteredTree() Tree.getFilteredTree()}.
 */
getFilteredTree?: Function;

/**
 * See {@link isc.Tree.data Tree.data}.
 */
data?: TreeNode[];

/**
 * See {@link isc.Tree.closeFolder() Tree.closeFolder()}.
 */
closeFolder?: Function;

/**
 * See {@link isc.Tree.allowFilterOnLinkFields Tree.allowFilterOnLinkFields}.
 */
allowFilterOnLinkFields?: boolean;

/**
 * See {@link isc.Tree.pathDelim Tree.pathDelim}.
 */
pathDelim?: string;

/**
 * See {@link isc.Tree.getChildrenResultSet() Tree.getChildrenResultSet()}.
 */
getChildrenResultSet?: Function;

/**
 * See {@link isc.Tree.isDescendantOf() Tree.isDescendantOf()}.
 */
isDescendantOf?: Function;

/**
 * See {@link isc.Tree.linkNodes() Tree.linkNodes()}.
 */
linkNodes?: Function;

/**
 * See {@link isc.Tree.idField Tree.idField}.
 */
idField?: string;

/**
 * See {@link isc.Tree.defaultNodeTitle Tree.defaultNodeTitle}.
 */
defaultNodeTitle?: string;

/**
 * See {@link isc.Tree.getParentPath() Tree.getParentPath()}.
 */
getParentPath?: Function;

/**
 * See {@link isc.Tree.getDescendantLeaves() Tree.getDescendantLeaves()}.
 */
getDescendantLeaves?: Function;

/**
 * See {@link isc.Tree.unloadChildren() Tree.unloadChildren()}.
 */
unloadChildren?: Function;

/**
 * See {@link isc.Tree.isMultiLinkTree() Tree.isMultiLinkTree()}.
 */
isMultiLinkTree?: Function;

/**
 * See {@link isc.Tree.hasChildren() Tree.hasChildren()}.
 */
hasChildren?: Function;

/**
 * See {@link isc.Tree.getNodeLocator() Tree.getNodeLocator()}.
 */
getNodeLocator?: Function;

/**
 * See {@link isc.Tree.getLength() Tree.getLength()}.
 */
getLength?: Function;

/**
 * See {@link isc.Tree.findNodeIndex() Tree.findNodeIndex()}.
 */
findNodeIndex?: Function;

/**
 * See {@link isc.Tree.dataSource Tree.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.Tree.autoOpenRoot Tree.autoOpenRoot}.
 */
autoOpenRoot?: boolean;

/**
 * See {@link isc.Tree.openProperty Tree.openProperty}.
 */
openProperty?: string;

/**
 * See {@link isc.Tree.isInAncestorChain() Tree.isInAncestorChain()}.
 */
isInAncestorChain?: Function;

/**
 * See {@link isc.Tree.sortFoldersBeforeLeaves Tree.sortFoldersBeforeLeaves}.
 */
sortFoldersBeforeLeaves?: boolean;

/**
 * See {@link isc.Tree.dataChanged() Tree.dataChanged()}.
 */
dataChanged?: Function;

/**
 * See {@link isc.Tree.closeAll() Tree.closeAll()}.
 */
closeAll?: Function;

/**
 * See {@link isc.Tree.getLoadState() Tree.getLoadState()}.
 */
getLoadState?: Function;

/**
 * See {@link isc.Tree.isOpen() Tree.isOpen()}.
 */
isOpen?: Function;

/**
 * See {@link isc.Tree.reloadChildren() Tree.reloadChildren()}.
 */
reloadChildren?: Function;

/**
 * See {@link isc.Tree.openFolder() Tree.openFolder()}.
 */
openFolder?: Function;

/**
 * See {@link isc.Tree.showRoot Tree.showRoot}.
 */
showRoot?: boolean;

/**
 * See {@link isc.Tree.getRoot() Tree.getRoot()}.
 */
getRoot?: Function;

/**
 * See {@link isc.Tree.getDescendantFolders() Tree.getDescendantFolders()}.
 */
getDescendantFolders?: Function;

/**
 * See {@link isc.Tree.isLoaded() Tree.isLoaded()}.
 */
isLoaded?: Function;

/**
 * See {@link isc.Tree.findById() Tree.findById()}.
 */
findById?: Function;

/**
 * See {@link isc.Tree.add() Tree.add()}.
 */
add?: Function;

/**
 * See {@link isc.Tree.isFolder() Tree.isFolder()}.
 */
isFolder?: Function;

/**
 * See {@link isc.Tree.getOpenList() Tree.getOpenList()}.
 */
getOpenList?: Function;

/**
 * See {@link isc.Tree.getPathForOpenListIndex() Tree.getPathForOpenListIndex()}.
 */
getPathForOpenListIndex?: Function;

/**
 * See {@link isc.Tree.createNodeLocator() Tree.createNodeLocator()}.
 */
createNodeLocator?: Function;

/**
 * See {@link isc.Tree.nameProperty Tree.nameProperty}.
 */
nameProperty?: string;

/**
 * See {@link isc.Tree.getParent() Tree.getParent()}.
 */
getParent?: Function;

/**
 * See {@link isc.Tree.findNextIndex() Tree.findNextIndex()}.
 */
findNextIndex?: Function;

/**
 * See {@link isc.Tree.getParentsAndPositions() Tree.getParentsAndPositions()}.
 */
getParentsAndPositions?: Function;

/**
 * See {@link isc.Tree.isLeaf() Tree.isLeaf()}.
 */
isLeaf?: Function;

/**
 * See {@link isc.Tree.duplicate() Tree.duplicate()}.
 */
duplicate?: Function;

/**
 * See {@link isc.Tree.find() Tree.find()}.
 */
find?: Function;

/**
 * See {@link isc.Tree.getLevel() Tree.getLevel()}.
 */
getLevel?: Function;

/**
 * See {@link isc.Tree.findNextNodeIndex() Tree.findNextNodeIndex()}.
 */
findNextNodeIndex?: Function;

/**
 * See {@link isc.Tree.loadChildren() Tree.loadChildren()}.
 */
loadChildren?: Function;

/**
 * See {@link isc.Tree.modelType Tree.modelType}.
 */
modelType?: string;

/**
 * See {@link isc.Tree.setChildren() Tree.setChildren()}.
 */
setChildren?: Function;

/**
 * See {@link isc.Tree.linkDataChanged() Tree.linkDataChanged()}.
 */
linkDataChanged?: Function;

/**
 * See {@link isc.Tree.setRoot() Tree.setRoot()}.
 */
setRoot?: Function;

/**
 * See {@link isc.Tree.lastIndexOf() Tree.lastIndexOf()}.
 */
lastIndexOf?: Function;

/**
 * See {@link isc.Tree.hasFolders() Tree.hasFolders()}.
 */
hasFolders?: Function;

/**
 * See {@link isc.Tree.getAllNodes() Tree.getAllNodes()}.
 */
getAllNodes?: Function;

/**
 * See {@link isc.Tree.removeList() Tree.removeList()}.
 */
removeList?: Function;

/**
 * See {@link isc.Tree.separateFolders Tree.separateFolders}.
 */
separateFolders?: boolean;

/**
 * See {@link isc.Tree.closeFolders() Tree.closeFolders()}.
 */
closeFolders?: Function;

/**
 * See {@link isc.Tree.getName() Tree.getName()}.
 */
getName?: Function;

/**
 * See {@link isc.Tree.findIndex() Tree.findIndex()}.
 */
findIndex?: Function;

/**
 * See {@link isc.Tree.multiLinkTree Tree.multiLinkTree}.
 */
multiLinkTree?: boolean;

/**
 * See {@link isc.Tree.indexOf() Tree.indexOf()}.
 */
indexOf?: Function;

/**
 * See {@link isc.Tree.discardParentlessNodes Tree.discardParentlessNodes}.
 */
discardParentlessNodes?: boolean;

/**
 * See {@link isc.Tree.reportCollisions Tree.reportCollisions}.
 */
reportCollisions?: boolean;

/**
 * See {@link isc.Tree.root Tree.root}.
 */
root?: TreeNode;

/**
 * See {@link isc.Tree.getPath() Tree.getPath()}.
 */
getPath?: Function;

/**
 * See {@link isc.Tree.setSeparateFolders() Tree.setSeparateFolders()}.
 */
setSeparateFolders?: Function;

/**
 * See {@link isc.Tree.linkData Tree.linkData}.
 */
linkData?: Record[];

/**
 * See {@link isc.Tree.parentIdField Tree.parentIdField}.
 */
parentIdField?: string;

/**
 * See {@link isc.Tree.setShowRoot() Tree.setShowRoot()}.
 */
setShowRoot?: Function;

/**
 * See {@link isc.Tree.childrenProperty Tree.childrenProperty}.
 */
childrenProperty?: string;

/**
 * See {@link isc.Tree.isFolderProperty Tree.isFolderProperty}.
 */
isFolderProperty?: string;

/**
 * See {@link isc.Tree.isRoot() Tree.isRoot()}.
 */
isRoot?: Function;

/**
 * See {@link isc.Tree.getChildren() Tree.getChildren()}.
 */
getChildren?: Function;

/**
 * See {@link isc.Tree.isParent() Tree.isParent()}.
 */
isParent?: Function;

/**
 * See {@link isc.Tree.move() Tree.move()}.
 */
move?: Function;

/**
 * See {@link isc.Tree.allChildrenLoaded() Tree.allChildrenLoaded()}.
 */
allChildrenLoaded?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Tree wraps the non-rendered SmartClient class
 * {@link isc.Tree Tree} for React, allowing you to import
 *  Tree for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Tree extends ILogicalComponent {
    props: AsComponentXML<TreeProps>;
}
