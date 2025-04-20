import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface EditPaneProps extends CanvasProps {

/**
 * See {@link isc.EditPane.getPaletteNodesFromJS() EditPane.getPaletteNodesFromJS()}.
 */
getPaletteNodesFromJS?: Function;

/**
 * See {@link isc.EditPane.makePaletteNode() EditPane.makePaletteNode()}.
 */
makePaletteNode?: Function;

/**
 * See {@link isc.EditPane.canGroupSelect EditPane.canGroupSelect}.
 */
canGroupSelect?: boolean;

/**
 * See {@link isc.EditPane.rootComponent EditPane.rootComponent}.
 */
rootComponent?: PaletteNode;

/**
 * See {@link isc.EditPane.serializeEditNodesAsJSON() EditPane.serializeEditNodesAsJSON()}.
 */
serializeEditNodesAsJSON?: Function;

/**
 * See {@link isc.EditPane.makeEditNode() EditPane.makeEditNode()}.
 */
makeEditNode?: Function;

/**
 * See {@link isc.EditPane.pasteEditNodes() EditPane.pasteEditNodes()}.
 */
pasteEditNodes?: Function;

/**
 * See {@link isc.EditPane.hideGroupBorderOnDrag EditPane.hideGroupBorderOnDrag}.
 */
hideGroupBorderOnDrag?: boolean;

/**
 * See {@link isc.EditPane.setDefaultPalette() EditPane.setDefaultPalette()}.
 */
setDefaultPalette?: Function;

/**
 * See {@link isc.EditPane.isNodeEditingOn() EditPane.isNodeEditingOn()}.
 */
isNodeEditingOn?: Function;

/**
 * See {@link isc.EditPane.addFromPaletteNode() EditPane.addFromPaletteNode()}.
 */
addFromPaletteNode?: Function;

/**
 * See {@link isc.EditPane.addNode() EditPane.addNode()}.
 */
addNode?: Function;

/**
 * See {@link isc.EditPane.getDefaultPalette() EditPane.getDefaultPalette()}.
 */
getDefaultPalette?: Function;

/**
 * See {@link isc.EditPane.editContextProperties EditPane.editContextProperties}.
 */
editContextProperties?: EditContext | EditContext;

/**
 * See {@link isc.EditPane.getEditNodeTree() EditPane.getEditNodeTree()}.
 */
getEditNodeTree?: Function;

/**
 * See {@link isc.EditPane.addFromPaletteNodes() EditPane.addFromPaletteNodes()}.
 */
addFromPaletteNodes?: Function;

/**
 * See {@link isc.EditPane.serializeEditNodes() EditPane.serializeEditNodes()}.
 */
serializeEditNodes?: Function;

/**
 * See {@link isc.EditPane.removeAll() EditPane.removeAll()}.
 */
removeAll?: Function;

/**
 * See {@link isc.EditPane.reorderNode() EditPane.reorderNode()}.
 */
reorderNode?: Function;

/**
 * See {@link isc.EditPane.addPaletteNodesFromJS() EditPane.addPaletteNodesFromJS()}.
 */
addPaletteNodesFromJS?: Function;

/**
 * See {@link isc.EditPane.getRootEditNode() EditPane.getRootEditNode()}.
 */
getRootEditNode?: Function;

/**
 * See {@link isc.EditPane.showSelectedLabel EditPane.showSelectedLabel}.
 */
showSelectedLabel?: boolean;

/**
 * See {@link isc.EditPane.setNodeProperties() EditPane.setNodeProperties()}.
 */
setNodeProperties?: Function;

/**
 * See {@link isc.EditPane.useCopyPasteShortcuts EditPane.useCopyPasteShortcuts}.
 */
useCopyPasteShortcuts?: boolean;

/**
 * See {@link isc.EditPane.canDragGroup EditPane.canDragGroup}.
 */
canDragGroup?: boolean;

/**
 * See {@link isc.EditPane.selectedBorder EditPane.selectedBorder}.
 */
selectedBorder?: string;

/**
 * See {@link isc.EditPane.selectedLabelBackgroundColor EditPane.selectedLabelBackgroundColor}.
 */
selectedLabelBackgroundColor?: string;

/**
 * See {@link isc.EditPane.serializeAllEditNodesAsJSON() EditPane.serializeAllEditNodesAsJSON()}.
 */
serializeAllEditNodesAsJSON?: Function;

/**
 * See {@link isc.EditPane.addPaletteNodesFromJSON() EditPane.addPaletteNodesFromJSON()}.
 */
addPaletteNodesFromJSON?: Function;

/**
 * See {@link isc.EditPane.makePaletteNodeTree() EditPane.makePaletteNodeTree()}.
 */
makePaletteNodeTree?: Function;

/**
 * See {@link isc.EditPane.destroyAll() EditPane.destroyAll()}.
 */
destroyAll?: Function;

/**
 * See {@link isc.EditPane.autoEditNewNodes EditPane.autoEditNewNodes}.
 */
autoEditNewNodes?: boolean;

/**
 * See {@link isc.EditPane.getNodeProperty() EditPane.getNodeProperty()}.
 */
getNodeProperty?: Function;

/**
 * See {@link isc.EditPane.serializeAllEditNodes() EditPane.serializeAllEditNodes()}.
 */
serializeAllEditNodes?: Function;

/**
 * See {@link isc.EditPane.persistCoordinates EditPane.persistCoordinates}.
 */
persistCoordinates?: boolean;

/**
 * See {@link isc.EditPane.addPaletteNodesFromXML() EditPane.addPaletteNodesFromXML()}.
 */
addPaletteNodesFromXML?: Function;

/**
 * See {@link isc.EditPane.getEditContext() EditPane.getEditContext()}.
 */
getEditContext?: Function;

/**
 * See {@link isc.EditPane.getPaletteNodesFromXML() EditPane.getPaletteNodesFromXML()}.
 */
getPaletteNodesFromXML?: Function;

/**
 * See {@link isc.EditPane.removeNode() EditPane.removeNode()}.
 */
removeNode?: Function;

/**
 * See {@link isc.EditPane.getSaveData() EditPane.getSaveData()}.
 */
getSaveData?: Function;

/**
 * See {@link isc.EditPane.enableEditing() EditPane.enableEditing()}.
 */
enableEditing?: Function;

/**
 * See {@link isc.EditPane.allowNestedDrops EditPane.allowNestedDrops}.
 */
allowNestedDrops?: boolean;

/**
 * See {@link isc.EditPane.removeNodeProperties() EditPane.removeNodeProperties()}.
 */
removeNodeProperties?: Function;

/**
 * See {@link isc.EditPane.copyEditNodes() EditPane.copyEditNodes()}.
 */
copyEditNodes?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EditPane wraps the SmartClient widget class
 * {@link isc.EditPane EditPane} for React, allowing you to import
 * EditPane for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class EditPane extends Canvas {
    props: AsComponentXML<EditPaneProps>;
}
