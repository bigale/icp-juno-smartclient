import React from 'react';
import { TreeGrid, TreeGridProps } from './TreeGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface EditTreeProps extends TreeGridProps {

/**
 * See {@link isc.EditTree.makePaletteNode() EditTree.makePaletteNode()}.
 */
makePaletteNode?: Function;

/**
 * See {@link isc.EditTree.getPaletteNodesFromXML() EditTree.getPaletteNodesFromXML()}.
 */
getPaletteNodesFromXML?: Function;

/**
 * See {@link isc.EditTree.rootComponent EditTree.rootComponent}.
 */
rootComponent?: PaletteNode;

/**
 * See {@link isc.EditTree.canShowFilterEditor EditTree.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;

/**
 * See {@link isc.EditTree.destroyAll() EditTree.destroyAll()}.
 */
destroyAll?: Function;

/**
 * See {@link isc.EditTree.getRootEditNode() EditTree.getRootEditNode()}.
 */
getRootEditNode?: Function;

/**
 * See {@link isc.EditTree.persistCoordinates EditTree.persistCoordinates}.
 */
persistCoordinates?: boolean;

/**
 * See {@link isc.EditTree.addPaletteNodesFromJSON() EditTree.addPaletteNodesFromJSON()}.
 */
addPaletteNodesFromJSON?: Function;

/**
 * See {@link isc.EditTree.makeEditNode() EditTree.makeEditNode()}.
 */
makeEditNode?: Function;

/**
 * See {@link isc.EditTree.getDefaultPalette() EditTree.getDefaultPalette()}.
 */
getDefaultPalette?: Function;

/**
 * See {@link isc.EditTree.removeAll() EditTree.removeAll()}.
 */
removeAll?: Function;

/**
 * See {@link isc.EditTree.reorderNode() EditTree.reorderNode()}.
 */
reorderNode?: Function;

/**
 * See {@link isc.EditTree.copyEditNodes() EditTree.copyEditNodes()}.
 */
copyEditNodes?: Function;

/**
 * See {@link isc.EditTree.addFromPaletteNodes() EditTree.addFromPaletteNodes()}.
 */
addFromPaletteNodes?: Function;

/**
 * See {@link isc.EditTree.useCopyPasteShortcuts EditTree.useCopyPasteShortcuts}.
 */
useCopyPasteShortcuts?: boolean;

/**
 * See {@link isc.EditTree.getEditContext() EditTree.getEditContext()}.
 */
getEditContext?: Function;

/**
 * See {@link isc.EditTree.canDragGroup EditTree.canDragGroup}.
 */
canDragGroup?: boolean;

/**
 * See {@link isc.EditTree.addNode() EditTree.addNode()}.
 */
addNode?: Function;

/**
 * See {@link isc.EditTree.makePaletteNodeTree() EditTree.makePaletteNodeTree()}.
 */
makePaletteNodeTree?: Function;

/**
 * See {@link isc.EditTree.enableEditing() EditTree.enableEditing()}.
 */
enableEditing?: Function;

/**
 * See {@link isc.EditTree.pasteEditNodes() EditTree.pasteEditNodes()}.
 */
pasteEditNodes?: Function;

/**
 * See {@link isc.EditTree.showSelectedLabel EditTree.showSelectedLabel}.
 */
showSelectedLabel?: boolean;

/**
 * See {@link isc.EditTree.isNodeEditingOn() EditTree.isNodeEditingOn()}.
 */
isNodeEditingOn?: Function;

/**
 * See {@link isc.EditTree.selectedLabelBackgroundColor EditTree.selectedLabelBackgroundColor}.
 */
selectedLabelBackgroundColor?: string;

/**
 * See {@link isc.EditTree.serializeEditNodes() EditTree.serializeEditNodes()}.
 */
serializeEditNodes?: Function;

/**
 * See {@link isc.EditTree.getNodeProperty() EditTree.getNodeProperty()}.
 */
getNodeProperty?: Function;

/**
 * See {@link isc.EditTree.hideGroupBorderOnDrag EditTree.hideGroupBorderOnDrag}.
 */
hideGroupBorderOnDrag?: boolean;

/**
 * See {@link isc.EditTree.removeNodeProperties() EditTree.removeNodeProperties()}.
 */
removeNodeProperties?: Function;

/**
 * See {@link isc.EditTree.setNodeProperties() EditTree.setNodeProperties()}.
 */
setNodeProperties?: Function;

/**
 * See {@link isc.EditTree.selectedBorder EditTree.selectedBorder}.
 */
selectedBorder?: string;

/**
 * See {@link isc.EditTree.serializeAllEditNodes() EditTree.serializeAllEditNodes()}.
 */
serializeAllEditNodes?: Function;

/**
 * See {@link isc.EditTree.allowNestedDrops EditTree.allowNestedDrops}.
 */
allowNestedDrops?: boolean;

/**
 * See {@link isc.EditTree.getPaletteNodesFromJS() EditTree.getPaletteNodesFromJS()}.
 */
getPaletteNodesFromJS?: Function;

/**
 * See {@link isc.EditTree.getEditNodeTree() EditTree.getEditNodeTree()}.
 */
getEditNodeTree?: Function;

/**
 * See {@link isc.EditTree.addPaletteNodesFromXML() EditTree.addPaletteNodesFromXML()}.
 */
addPaletteNodesFromXML?: Function;

/**
 * See {@link isc.EditTree.autoEditNewNodes EditTree.autoEditNewNodes}.
 */
autoEditNewNodes?: boolean;

/**
 * See {@link isc.EditTree.setDefaultPalette() EditTree.setDefaultPalette()}.
 */
setDefaultPalette?: Function;

/**
 * See {@link isc.EditTree.addFromPaletteNode() EditTree.addFromPaletteNode()}.
 */
addFromPaletteNode?: Function;

/**
 * See {@link isc.EditTree.canGroupSelect EditTree.canGroupSelect}.
 */
canGroupSelect?: boolean;

/**
 * See {@link isc.EditTree.addPaletteNodesFromJS() EditTree.addPaletteNodesFromJS()}.
 */
addPaletteNodesFromJS?: Function;

/**
 * See {@link isc.EditTree.serializeEditNodesAsJSON() EditTree.serializeEditNodesAsJSON()}.
 */
serializeEditNodesAsJSON?: Function;

/**
 * See {@link isc.EditTree.removeNode() EditTree.removeNode()}.
 */
removeNode?: Function;

/**
 * See {@link isc.EditTree.editContext EditTree.editContext}.
 */
editContext?: EditContext;

/**
 * See {@link isc.EditTree.serializeAllEditNodesAsJSON() EditTree.serializeAllEditNodesAsJSON()}.
 */
serializeAllEditNodesAsJSON?: Function;

/**
 * See {@link isc.EditTree.canSaveSearches EditTree.canSaveSearches}.
 */
canSaveSearches?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EditTree wraps the SmartClient widget class
 * {@link isc.EditTree EditTree} for React, allowing you to import
 * EditTree for use in React JS and JSX.
 * @class
 * @extends TreeGrid
 */
declare class EditTree extends TreeGrid {
    props: AsComponentXML<EditTreeProps>;
}
