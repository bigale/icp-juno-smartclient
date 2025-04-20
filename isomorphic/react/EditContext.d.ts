import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface EditContextProps {

/**
 * See {@link isc.EditContext.selectedTintOpacity EditContext.selectedTintOpacity}.
 */
selectedTintOpacity?: number;

/**
 * See {@link isc.EditContext.serializeEditNodesAsJSON() EditContext.serializeEditNodesAsJSON()}.
 */
serializeEditNodesAsJSON?: Function;

/**
 * See {@link isc.EditContext.removeAll() EditContext.removeAll()}.
 */
removeAll?: Function;

/**
 * See {@link isc.EditContext.makePaletteNodeTree() EditContext.makePaletteNodeTree()}.
 */
makePaletteNodeTree?: Function;

/**
 * See {@link isc.EditContext.getRootEditNode() EditContext.getRootEditNode()}.
 */
getRootEditNode?: Function;

/**
 * See {@link isc.EditContext.setNodeProperties() EditContext.setNodeProperties()}.
 */
setNodeProperties?: Function;

/**
 * See {@link isc.EditContext.substitutedNode() EditContext.substitutedNode()}.
 */
substitutedNode?: Function;

/**
 * See {@link isc.EditContext.selectedAppearance EditContext.selectedAppearance}.
 */
selectedAppearance?: string;

/**
 * See {@link isc.EditContext.getPaletteNodesFromXML() EditContext.getPaletteNodesFromXML()}.
 */
getPaletteNodesFromXML?: Function;

/**
 * See {@link isc.EditContext.getEditNodesByType() EditContext.getEditNodesByType()}.
 */
getEditNodesByType?: Function;

/**
 * See {@link isc.EditContext.copyEditNodes() EditContext.copyEditNodes()}.
 */
copyEditNodes?: Function;

/**
 * See {@link isc.EditContext.hideGroupBorderOnDrag EditContext.hideGroupBorderOnDrag}.
 */
hideGroupBorderOnDrag?: boolean;

/**
 * See {@link isc.EditContext.getSelectedLabelText() EditContext.getSelectedLabelText()}.
 */
getSelectedLabelText?: Function;

/**
 * See {@link isc.EditContext.canDragGroup EditContext.canDragGroup}.
 */
canDragGroup?: boolean;

/**
 * See {@link isc.EditContext.inlineEditorShowing() EditContext.inlineEditorShowing()}.
 */
inlineEditorShowing?: Function;

/**
 * See {@link isc.EditContext.makeEditNode() EditContext.makeEditNode()}.
 */
makeEditNode?: Function;

/**
 * See {@link isc.EditContext.enableEditing() EditContext.enableEditing()}.
 */
enableEditing?: Function;

/**
 * See {@link isc.EditContext.makePaletteNode() EditContext.makePaletteNode()}.
 */
makePaletteNode?: Function;

/**
 * See {@link isc.EditContext.nodeRemoved() EditContext.nodeRemoved()}.
 */
nodeRemoved?: Function;

/**
 * See {@link isc.EditContext.getSelectedEditNodes() EditContext.getSelectedEditNodes()}.
 */
getSelectedEditNodes?: Function;

/**
 * See {@link isc.EditContext.nodeMoved() EditContext.nodeMoved()}.
 */
nodeMoved?: Function;

/**
 * See {@link isc.EditContext.editMaskProperties EditContext.editMaskProperties}.
 */
editMaskProperties?: Object;

/**
 * See {@link isc.EditContext.addPaletteNodesFromXML() EditContext.addPaletteNodesFromXML()}.
 */
addPaletteNodesFromXML?: Function;

/**
 * See {@link isc.EditContext.removeNodeProperties() EditContext.removeNodeProperties()}.
 */
removeNodeProperties?: Function;

/**
 * See {@link isc.EditContext.addFromPaletteNodes() EditContext.addFromPaletteNodes()}.
 */
addFromPaletteNodes?: Function;

/**
 * See {@link isc.EditContext.setDefaultPalette() EditContext.setDefaultPalette()}.
 */
setDefaultPalette?: Function;

/**
 * See {@link isc.EditContext.selectEditNode() EditContext.selectEditNode()}.
 */
selectEditNode?: Function;

/**
 * See {@link isc.EditContext.nodeAdded() EditContext.nodeAdded()}.
 */
nodeAdded?: Function;

/**
 * See {@link isc.EditContext.isNodeEditingOn() EditContext.isNodeEditingOn()}.
 */
isNodeEditingOn?: Function;

/**
 * See {@link isc.EditContext.setEditProxyProperties() EditContext.setEditProxyProperties()}.
 */
setEditProxyProperties?: Function;

/**
 * See {@link isc.EditContext.persistCoordinates EditContext.persistCoordinates}.
 */
persistCoordinates?: boolean;

/**
 * See {@link isc.EditContext.addNode() EditContext.addNode()}.
 */
addNode?: Function;

/**
 * See {@link isc.EditContext.serializeEditNodes() EditContext.serializeEditNodes()}.
 */
serializeEditNodes?: Function;

/**
 * See {@link isc.EditContext.showSelectedLabel EditContext.showSelectedLabel}.
 */
showSelectedLabel?: boolean;

/**
 * See {@link isc.EditContext.hoopSelectorProperties EditContext.hoopSelectorProperties}.
 */
hoopSelectorProperties?: Object;

/**
 * See {@link isc.EditContext.pasteEditNodes() EditContext.pasteEditNodes()}.
 */
pasteEditNodes?: Function;

/**
 * See {@link isc.EditContext.deselectEditNodes() EditContext.deselectEditNodes()}.
 */
deselectEditNodes?: Function;

/**
 * See {@link isc.EditContext.canSelectEditNodes EditContext.canSelectEditNodes}.
 */
canSelectEditNodes?: boolean;

/**
 * See {@link isc.EditContext.editNodeHasDataSource() EditContext.editNodeHasDataSource()}.
 */
editNodeHasDataSource?: Function;

/**
 * See {@link isc.EditContext.useCopyPasteShortcuts EditContext.useCopyPasteShortcuts}.
 */
useCopyPasteShortcuts?: boolean;

/**
 * See {@link isc.EditContext.enableInlineEdit EditContext.enableInlineEdit}.
 */
enableInlineEdit?: boolean;

/**
 * See {@link isc.EditContext.createPaletteNodeTree() EditContext.createPaletteNodeTree()}.
 */
createPaletteNodeTree?: Function;

/**
 * See {@link isc.EditContext.addPaletteNodesFromJSON() EditContext.addPaletteNodesFromJSON()}.
 */
addPaletteNodesFromJSON?: Function;

/**
 * See {@link isc.EditContext.addFromPaletteNodeTree() EditContext.addFromPaletteNodeTree()}.
 */
addFromPaletteNodeTree?: Function;

/**
 * See {@link isc.EditContext.getNodeProperty() EditContext.getNodeProperty()}.
 */
getNodeProperty?: Function;

/**
 * See {@link isc.EditContext.selectSingleEditNode() EditContext.selectSingleEditNode()}.
 */
selectSingleEditNode?: Function;

/**
 * See {@link isc.EditContext.isEditNodeSelected() EditContext.isEditNodeSelected()}.
 */
isEditNodeSelected?: Function;

/**
 * See {@link isc.EditContext.convertedNode() EditContext.convertedNode()}.
 */
convertedNode?: Function;

/**
 * See {@link isc.EditContext.autoEditNewNodes EditContext.autoEditNewNodes}.
 */
autoEditNewNodes?: boolean;

/**
 * See {@link isc.EditContext.getDefaultPalette() EditContext.getDefaultPalette()}.
 */
getDefaultPalette?: Function;

/**
 * See {@link isc.EditContext.getPaletteNodesFromJS() EditContext.getPaletteNodesFromJS()}.
 */
getPaletteNodesFromJS?: Function;

/**
 * See {@link isc.EditContext.showSelectedLabelOnSelect EditContext.showSelectedLabelOnSelect}.
 */
showSelectedLabelOnSelect?: boolean;

/**
 * See {@link isc.EditContext.editMaskClicked() EditContext.editMaskClicked()}.
 */
editMaskClicked?: Function;

/**
 * See {@link isc.EditContext.serializeAllEditNodesAsJSON() EditContext.serializeAllEditNodesAsJSON()}.
 */
serializeAllEditNodesAsJSON?: Function;

/**
 * See {@link isc.EditContext.getEditNodeTree() EditContext.getEditNodeTree()}.
 */
getEditNodeTree?: Function;

/**
 * See {@link isc.EditContext.allowDropThrough EditContext.allowDropThrough}.
 */
allowDropThrough?: boolean;

/**
 * See {@link isc.EditContext.allowNestedDrops EditContext.allowNestedDrops}.
 */
allowNestedDrops?: boolean;

/**
 * See {@link isc.EditContext.canGroupSelect EditContext.canGroupSelect}.
 */
canGroupSelect?: boolean;

/**
 * See {@link isc.EditContext.selectedEditNodesUpdated() EditContext.selectedEditNodesUpdated()}.
 */
selectedEditNodesUpdated?: Function;

/**
 * See {@link isc.EditContext.hoopSelectionMode EditContext.hoopSelectionMode}.
 */
hoopSelectionMode?: string;

/**
 * See {@link isc.EditContext.getSelectedEditNode() EditContext.getSelectedEditNode()}.
 */
getSelectedEditNode?: Function;

/**
 * See {@link isc.EditContext.defaultParent EditContext.defaultParent}.
 */
defaultParent?: EditNode;

/**
 * See {@link isc.EditContext.editNodeUpdated() EditContext.editNodeUpdated()}.
 */
editNodeUpdated?: Function;

/**
 * See {@link isc.EditContext.serializeAllEditNodes() EditContext.serializeAllEditNodes()}.
 */
serializeAllEditNodes?: Function;

/**
 * See {@link isc.EditContext.selectedLabelBackgroundColor EditContext.selectedLabelBackgroundColor}.
 */
selectedLabelBackgroundColor?: string;

/**
 * See {@link isc.EditContext.selectAllEditNodes() EditContext.selectAllEditNodes()}.
 */
selectAllEditNodes?: Function;

/**
 * See {@link isc.EditContext.selectedBorder EditContext.selectedBorder}.
 */
selectedBorder?: string;

/**
 * See {@link isc.EditContext.selectedTintColor EditContext.selectedTintColor}.
 */
selectedTintColor?: string;

/**
 * See {@link isc.EditContext.addPaletteNodesFromJS() EditContext.addPaletteNodesFromJS()}.
 */
addPaletteNodesFromJS?: Function;

/**
 * See {@link isc.EditContext.selectionType EditContext.selectionType}.
 */
selectionType?: string;

/**
 * See {@link isc.EditContext.rootComponent EditContext.rootComponent}.
 */
rootComponent?: PaletteNode;

/**
 * See {@link isc.EditContext.destroyAll() EditContext.destroyAll()}.
 */
destroyAll?: Function;

/**
 * See {@link isc.EditContext.deselectAllEditNodes() EditContext.deselectAllEditNodes()}.
 */
deselectAllEditNodes?: Function;

/**
 * See {@link isc.EditContext.editNodeHasFields() EditContext.editNodeHasFields()}.
 */
editNodeHasFields?: Function;

/**
 * See {@link isc.EditContext.removeNode() EditContext.removeNode()}.
 */
removeNode?: Function;

/**
 * See {@link isc.EditContext.addPaletteNodeFormItemConstructors() EditContext.addPaletteNodeFormItemConstructors()}.
 */
addPaletteNodeFormItemConstructors?: Function;

/**
 * See {@link isc.EditContext.addFromPaletteNode() EditContext.addFromPaletteNode()}.
 */
addFromPaletteNode?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EditContext wraps the non-rendered SmartClient class
 * {@link isc.EditContext EditContext} for React, allowing you to import
 *  EditContext for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class EditContext extends ILogicalComponent {
    props: AsComponentXML<EditContextProps>;
}
