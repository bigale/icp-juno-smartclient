import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface TreeGridProps extends ListGridProps {

/**
 * See {@link isc.TreeGrid.customIconDropProperty TreeGrid.customIconDropProperty}.
 */
customIconDropProperty?: string;

/**
 * See {@link isc.TreeGrid.useAllDataSourceFields TreeGrid.useAllDataSourceFields}.
 */
useAllDataSourceFields?: boolean;

/**
 * See {@link isc.TreeGrid.getDropFolder() TreeGrid.getDropFolder()}.
 */
getDropFolder?: Function;

/**
 * See {@link isc.TreeGrid.openFolder() TreeGrid.openFolder()}.
 */
openFolder?: Function;

/**
 * See {@link isc.TreeGrid.customIconOpenProperty TreeGrid.customIconOpenProperty}.
 */
customIconOpenProperty?: string;

/**
 * See {@link isc.TreeGrid.selectedIconSuffix TreeGrid.selectedIconSuffix}.
 */
selectedIconSuffix?: string;

/**
 * See {@link isc.TreeGrid.openerIconSize TreeGrid.openerIconSize}.
 */
openerIconSize?: number;

/**
 * See {@link isc.TreeGrid.canReorderRecords TreeGrid.canReorderRecords}.
 */
canReorderRecords?: boolean;

/**
 * See {@link isc.TreeGrid.showSelectedIcons TreeGrid.showSelectedIcons}.
 */
showSelectedIcons?: boolean;

/**
 * See {@link isc.TreeGrid.cantDragMultipleNodeOccurencesMessage TreeGrid.cantDragMultipleNodeOccurencesMessage}.
 */
cantDragMultipleNodeOccurencesMessage?: string;

/**
 * See {@link isc.TreeGrid.getOpenIcon() TreeGrid.getOpenIcon()}.
 */
getOpenIcon?: Function;

/**
 * See {@link isc.TreeGrid.groupByField TreeGrid.groupByField}.
 */
groupByField?: string | string[];

/**
 * See {@link isc.TreeGrid.isExportingClientData() TreeGrid.isExportingClientData()}.
 */
isExportingClientData?: Function;

/**
 * See {@link isc.TreeGrid.manyItemsImage TreeGrid.manyItemsImage}.
 */
manyItemsImage?: string;

/**
 * See {@link isc.TreeGrid.getViewState() TreeGrid.getViewState()}.
 */
getViewState?: Function;

/**
 * See {@link isc.TreeGrid.getCellAlign() TreeGrid.getCellAlign()}.
 */
getCellAlign?: Function;

/**
 * See {@link isc.TreeGrid.showFullConnectors TreeGrid.showFullConnectors}.
 */
showFullConnectors?: boolean;

/**
 * See {@link isc.TreeGrid.iconSize TreeGrid.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.TreeGrid.createDefaultTreeField TreeGrid.createDefaultTreeField}.
 */
createDefaultTreeField?: boolean;

/**
 * See {@link isc.TreeGrid.childCannotBeItsOwnAncestorMessage TreeGrid.childCannotBeItsOwnAncestorMessage}.
 */
childCannotBeItsOwnAncestorMessage?: string;

/**
 * See {@link isc.TreeGrid.recordDoubleClick() TreeGrid.recordDoubleClick()}.
 */
recordDoubleClick?: Function;

/**
 * See {@link isc.TreeGrid.folderContextClick() TreeGrid.folderContextClick()}.
 */
folderContextClick?: Function;

/**
 * See {@link isc.TreeGrid.transferNodes() TreeGrid.transferNodes()}.
 */
transferNodes?: Function;

/**
 * See {@link isc.TreeGrid.parentAlreadyContainsChildMessage TreeGrid.parentAlreadyContainsChildMessage}.
 */
parentAlreadyContainsChildMessage?: string;

/**
 * See {@link isc.TreeGrid.animateFolderEffect TreeGrid.animateFolderEffect}.
 */
animateFolderEffect?: string;

/**
 * See {@link isc.TreeGrid.toggleFolder() TreeGrid.toggleFolder()}.
 */
toggleFolder?: Function;

/**
 * See {@link isc.TreeGrid.leafContextClick() TreeGrid.leafContextClick()}.
 */
leafContextClick?: Function;

/**
 * See {@link isc.TreeGrid.extraIconGap TreeGrid.extraIconGap}.
 */
extraIconGap?: number;

/**
 * See {@link isc.TreeGrid.setSelectedPaths() TreeGrid.setSelectedPaths()}.
 */
setSelectedPaths?: Function;

/**
 * See {@link isc.TreeGrid.nodeContextClick() TreeGrid.nodeContextClick()}.
 */
nodeContextClick?: Function;

/**
 * See {@link isc.TreeGrid.iconPadding TreeGrid.iconPadding}.
 */
iconPadding?: number;

/**
 * See {@link isc.TreeGrid.canAcceptDroppedRecords TreeGrid.canAcceptDroppedRecords}.
 */
canAcceptDroppedRecords?: boolean;

/**
 * See {@link isc.TreeGrid.offlineNodeMessage TreeGrid.offlineNodeMessage}.
 */
offlineNodeMessage?: string;

/**
 * See {@link isc.TreeGrid.showFolderIcons TreeGrid.showFolderIcons}.
 */
showFolderIcons?: boolean;

/**
 * See {@link isc.TreeGrid.isOverOpenArea() TreeGrid.isOverOpenArea()}.
 */
isOverOpenArea?: Function;

/**
 * See {@link isc.TreeGrid.setViewState() TreeGrid.setViewState()}.
 */
setViewState?: Function;

/**
 * See {@link isc.TreeGrid.shouldAnimateFolder() TreeGrid.shouldAnimateFolder()}.
 */
shouldAnimateFolder?: Function;

/**
 * See {@link isc.TreeGrid.filterData() TreeGrid.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.TreeGrid.displayNodeType TreeGrid.displayNodeType}.
 */
displayNodeType?: string;

/**
 * See {@link isc.TreeGrid.leafClick() TreeGrid.leafClick()}.
 */
leafClick?: Function;

/**
 * See {@link isc.TreeGrid.folderClosed() TreeGrid.folderClosed()}.
 */
folderClosed?: Function;

/**
 * See {@link isc.TreeGrid.getDragTrackerIcon() TreeGrid.getDragTrackerIcon()}.
 */
getDragTrackerIcon?: Function;

/**
 * See {@link isc.TreeGrid.openerImage TreeGrid.openerImage}.
 */
openerImage?: string | SCStatefulImgConfig;

/**
 * See {@link isc.TreeGrid.dataArity TreeGrid.dataArity}.
 */
dataArity?: string;

/**
 * See {@link isc.TreeGrid.closedIconSuffix TreeGrid.closedIconSuffix}.
 */
closedIconSuffix?: string;

/**
 * See {@link isc.TreeGrid.initialData TreeGrid.initialData}.
 */
initialData?: TreeNode[];

/**
 * See {@link isc.TreeGrid.showRoot TreeGrid.showRoot}.
 */
showRoot?: boolean;

/**
 * See {@link isc.TreeGrid.showDisabledSelectionCheckbox TreeGrid.showDisabledSelectionCheckbox}.
 */
showDisabledSelectionCheckbox?: boolean;

/**
 * See {@link isc.TreeGrid.selectionProperty TreeGrid.selectionProperty}.
 */
selectionProperty?: string;

/**
 * See {@link isc.TreeGrid.keepParentsOnFilter TreeGrid.keepParentsOnFilter}.
 */
keepParentsOnFilter?: boolean;

/**
 * See {@link isc.TreeGrid.canSelectAll TreeGrid.canSelectAll}.
 */
canSelectAll?: boolean;

/**
 * See {@link isc.TreeGrid.openerIconHeight TreeGrid.openerIconHeight}.
 */
openerIconHeight?: number;

/**
 * See {@link isc.TreeGrid.recordDrop() TreeGrid.recordDrop()}.
 */
recordDrop?: Function;

/**
 * See {@link isc.TreeGrid.customIconSelectedProperty TreeGrid.customIconSelectedProperty}.
 */
customIconSelectedProperty?: string;

/**
 * See {@link isc.TreeGrid.treeFieldTitle TreeGrid.treeFieldTitle}.
 */
treeFieldTitle?: string;

/**
 * See {@link isc.TreeGrid.iconBaseStyle TreeGrid.iconBaseStyle}.
 */
iconBaseStyle?: string;

/**
 * See {@link isc.TreeGrid.treeRootValue TreeGrid.treeRootValue}.
 */
treeRootValue?: any;

/**
 * See {@link isc.TreeGrid.autoAssignTreeField TreeGrid.autoAssignTreeField}.
 */
autoAssignTreeField?: boolean;

/**
 * See {@link isc.TreeGrid.dataFetchMode TreeGrid.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.TreeGrid.getDraggedNodeLocators() TreeGrid.getDraggedNodeLocators()}.
 */
getDraggedNodeLocators?: Function;

/**
 * See {@link isc.TreeGrid.connectorImage TreeGrid.connectorImage}.
 */
connectorImage?: string | SCStatefulImgConfig;

/**
 * See {@link isc.TreeGrid.showCustomIconDrop TreeGrid.showCustomIconDrop}.
 */
showCustomIconDrop?: boolean;

/**
 * See {@link isc.TreeGrid.showNodeIcons TreeGrid.showNodeIcons}.
 */
showNodeIcons?: boolean;

/**
 * See {@link isc.TreeGrid.recordDropAppearance TreeGrid.recordDropAppearance}.
 */
recordDropAppearance?: string;

/**
 * See {@link isc.TreeGrid.transferDragData() TreeGrid.transferDragData()}.
 */
transferDragData?: Function;

/**
 * See {@link isc.TreeGrid.canReparentNodes TreeGrid.canReparentNodes}.
 */
canReparentNodes?: boolean;

/**
 * See {@link isc.TreeGrid.getNodeTitle() TreeGrid.getNodeTitle()}.
 */
getNodeTitle?: Function;

/**
 * See {@link isc.TreeGrid.customIconProperty TreeGrid.customIconProperty}.
 */
customIconProperty?: string;

/**
 * See {@link isc.TreeGrid.cascadeSelection TreeGrid.cascadeSelection}.
 */
cascadeSelection?: boolean;

/**
 * See {@link isc.TreeGrid.animateFolderSpeed TreeGrid.animateFolderSpeed}.
 */
animateFolderSpeed?: number;

/**
 * See {@link isc.TreeGrid.showCustomIconSelected TreeGrid.showCustomIconSelected}.
 */
showCustomIconSelected?: boolean;

/**
 * See {@link isc.TreeGrid.leaveSelectionCheckboxGap TreeGrid.leaveSelectionCheckboxGap}.
 */
leaveSelectionCheckboxGap?: boolean;

/**
 * See {@link isc.TreeGrid.animateFolderMaxRows TreeGrid.animateFolderMaxRows}.
 */
animateFolderMaxRows?: number;

/**
 * See {@link isc.TreeGrid.canDragRecordsOut TreeGrid.canDragRecordsOut}.
 */
canDragRecordsOut?: boolean;

/**
 * See {@link isc.TreeGrid.autoPreserveOpenState TreeGrid.autoPreserveOpenState}.
 */
autoPreserveOpenState?: string;

/**
 * See {@link isc.TreeGrid.willAcceptDrop() TreeGrid.willAcceptDrop()}.
 */
willAcceptDrop?: Function;

/**
 * See {@link isc.TreeGrid.cantDragIntoSelfMessage TreeGrid.cantDragIntoSelfMessage}.
 */
cantDragIntoSelfMessage?: string;

/**
 * See {@link isc.TreeGrid.loadingIcon TreeGrid.loadingIcon}.
 */
loadingIcon?: string;

/**
 * See {@link isc.TreeGrid.separateFolders TreeGrid.separateFolders}.
 */
separateFolders?: boolean;

/**
 * See {@link isc.TreeGrid.nodeIcon TreeGrid.nodeIcon}.
 */
nodeIcon?: string;

/**
 * See {@link isc.TreeGrid.canDropOnLeaves TreeGrid.canDropOnLeaves}.
 */
canDropOnLeaves?: boolean;

/**
 * See {@link isc.TreeGrid.rowClick() TreeGrid.rowClick()}.
 */
rowClick?: Function;

/**
 * See {@link isc.TreeGrid.getEventRow() TreeGrid.getEventRow()}.
 */
getEventRow?: Function;

/**
 * See {@link isc.TreeGrid.getAnimateFolderMaxRows() TreeGrid.getAnimateFolderMaxRows()}.
 */
getAnimateFolderMaxRows?: Function;

/**
 * See {@link isc.TreeGrid.fetchData() TreeGrid.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.TreeGrid.indentRecordComponents TreeGrid.indentRecordComponents}.
 */
indentRecordComponents?: boolean;

/**
 * See {@link isc.TreeGrid.exportClientData() TreeGrid.exportClientData()}.
 */
exportClientData?: Function;

/**
 * See {@link isc.TreeGrid.folderOpened() TreeGrid.folderOpened()}.
 */
folderOpened?: Function;

/**
 * See {@link isc.TreeGrid.autoFetchTextMatchStyle TreeGrid.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.TreeGrid.iconPaddingProperty TreeGrid.iconPaddingProperty}.
 */
iconPaddingProperty?: string;

/**
 * See {@link isc.TreeGrid.isOverExtraIcon() TreeGrid.isOverExtraIcon()}.
 */
isOverExtraIcon?: Function;

/**
 * See {@link isc.TreeGrid.animateFolderTime TreeGrid.animateFolderTime}.
 */
animateFolderTime?: number;

/**
 * See {@link isc.TreeGrid.serverFilterFields TreeGrid.serverFilterFields}.
 */
serverFilterFields?: string[];

/**
 * See {@link isc.TreeGrid.nodeClick() TreeGrid.nodeClick()}.
 */
nodeClick?: Function;

/**
 * See {@link isc.TreeGrid.showDropEndSpace TreeGrid.showDropEndSpace}.
 */
showDropEndSpace?: boolean;

/**
 * See {@link isc.TreeGrid.data TreeGrid.data}.
 */
data?: Tree;

/**
 * See {@link isc.TreeGrid.showConnectors TreeGrid.showConnectors}.
 */
showConnectors?: boolean;

/**
 * See {@link isc.TreeGrid.sortFoldersBeforeLeaves TreeGrid.sortFoldersBeforeLeaves}.
 */
sortFoldersBeforeLeaves?: boolean;

/**
 * See {@link isc.TreeGrid.getSelectedPaths() TreeGrid.getSelectedPaths()}.
 */
getSelectedPaths?: Function;

/**
 * See {@link isc.TreeGrid.showLoadingIcons TreeGrid.showLoadingIcons}.
 */
showLoadingIcons?: boolean;

/**
 * See {@link isc.TreeGrid.autoOpenTree TreeGrid.autoOpenTree}.
 */
autoOpenTree?: string;

/**
 * See {@link isc.TreeGrid.folderDrop() TreeGrid.folderDrop()}.
 */
folderDrop?: Function;

/**
 * See {@link isc.TreeGrid.getIcon() TreeGrid.getIcon()}.
 */
getIcon?: Function;

/**
 * See {@link isc.TreeGrid.openIconPadding TreeGrid.openIconPadding}.
 */
openIconPadding?: number;

/**
 * See {@link isc.TreeGrid.showOpener TreeGrid.showOpener}.
 */
showOpener?: boolean;

/**
 * See {@link isc.TreeGrid.dragDataAction TreeGrid.dragDataAction}.
 */
dragDataAction?: string;

/**
 * See {@link isc.TreeGrid.closeFolder() TreeGrid.closeFolder()}.
 */
closeFolder?: Function;

/**
 * See {@link isc.TreeGrid.openerIconWidth TreeGrid.openerIconWidth}.
 */
openerIconWidth?: number;

/**
 * See {@link isc.TreeGrid.dataArrived() TreeGrid.dataArrived()}.
 */
dataArrived?: Function;

/**
 * See {@link isc.TreeGrid.dataChanged() TreeGrid.dataChanged()}.
 */
dataChanged?: Function;

/**
 * See {@link isc.TreeGrid.loadAllRecords() TreeGrid.loadAllRecords()}.
 */
loadAllRecords?: Function;

/**
 * See {@link isc.TreeGrid.canDropSiblingAfterLastNode TreeGrid.canDropSiblingAfterLastNode}.
 */
canDropSiblingAfterLastNode?: boolean;

/**
 * See {@link isc.TreeGrid.dropIconSuffix TreeGrid.dropIconSuffix}.
 */
dropIconSuffix?: string;

/**
 * See {@link isc.TreeGrid.showSelectedOpener TreeGrid.showSelectedOpener}.
 */
showSelectedOpener?: boolean;

/**
 * See {@link isc.TreeGrid.getExtraIcon() TreeGrid.getExtraIcon()}.
 */
getExtraIcon?: Function;

/**
 * See {@link isc.TreeGrid.setData() TreeGrid.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.TreeGrid.showDropIcons TreeGrid.showDropIcons}.
 */
showDropIcons?: boolean;

/**
 * See {@link isc.TreeGrid.alwaysShowOpener TreeGrid.alwaysShowOpener}.
 */
alwaysShowOpener?: boolean;

/**
 * See {@link isc.TreeGrid.dropEndSpace TreeGrid.dropEndSpace}.
 */
dropEndSpace?: number;

/**
 * See {@link isc.TreeGrid.groupBy() TreeGrid.groupBy()}.
 */
groupBy?: Function;

/**
 * See {@link isc.TreeGrid.loadDataOnDemand TreeGrid.loadDataOnDemand}.
 */
loadDataOnDemand?: boolean;

/**
 * See {@link isc.TreeGrid.setOpenState() TreeGrid.setOpenState()}.
 */
setOpenState?: Function;

/**
 * See {@link isc.TreeGrid.showCustomIconOpen TreeGrid.showCustomIconOpen}.
 */
showCustomIconOpen?: boolean;

/**
 * See {@link isc.TreeGrid.openIconSuffix TreeGrid.openIconSuffix}.
 */
openIconSuffix?: string;

/**
 * See {@link isc.TreeGrid.treeFieldMinWidth TreeGrid.treeFieldMinWidth}.
 */
treeFieldMinWidth?: number;

/**
 * See {@link isc.TreeGrid.setNodeIcon() TreeGrid.setNodeIcon()}.
 */
setNodeIcon?: Function;

/**
 * See {@link isc.TreeGrid.startEditingNew() TreeGrid.startEditingNew()}.
 */
startEditingNew?: Function;

/**
 * See {@link isc.TreeGrid.folderIcon TreeGrid.folderIcon}.
 */
folderIcon?: string;

/**
 * See {@link isc.TreeGrid.animateFolders TreeGrid.animateFolders}.
 */
animateFolders?: boolean;

/**
 * See {@link isc.TreeGrid.transferSelectedData() TreeGrid.transferSelectedData()}.
 */
transferSelectedData?: Function;

/**
 * See {@link isc.TreeGrid.canEditCell() TreeGrid.canEditCell()}.
 */
canEditCell?: Function;

/**
 * See {@link isc.TreeGrid.showPartialSelection TreeGrid.showPartialSelection}.
 */
showPartialSelection?: boolean;

/**
 * See {@link isc.TreeGrid.fields TreeGrid.fields}.
 */
fields?: TreeGridField[];

/**
 * See {@link isc.TreeGrid.folderIconPadding TreeGrid.folderIconPadding}.
 */
folderIconPadding?: number;

/**
 * See {@link isc.TreeGrid.folderClick() TreeGrid.folderClick()}.
 */
folderClick?: Function;

/**
 * See {@link isc.TreeGrid.dataProperties TreeGrid.dataProperties}.
 */
dataProperties?: Tree;

/**
 * See {@link isc.TreeGrid.dataSource TreeGrid.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.TreeGrid.getOpenState() TreeGrid.getOpenState()}.
 */
getOpenState?: Function;

/**
 * See {@link isc.TreeGrid.saveOpenStateInViewState TreeGrid.saveOpenStateInViewState}.
 */
saveOpenStateInViewState?: boolean;

/**
 * See {@link isc.TreeGrid.indentSize TreeGrid.indentSize}.
 */
indentSize?: number;

/**
 * See {@link isc.TreeGrid.openLeaf() TreeGrid.openLeaf()}.
 */
openLeaf?: Function;

/**
 * See {@link isc.TreeGrid.cantDragIntoChildMessage TreeGrid.cantDragIntoChildMessage}.
 */
cantDragIntoChildMessage?: string;

/**
 * See {@link isc.TreeGrid.showOpenIcons TreeGrid.showOpenIcons}.
 */
showOpenIcons?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TreeGrid wraps the SmartClient widget class
 * {@link isc.TreeGrid TreeGrid} for React, allowing you to import
 * TreeGrid for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class TreeGrid extends ListGrid {
    props: AsComponentXML<TreeGridProps>;
}
