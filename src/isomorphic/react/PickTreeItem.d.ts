import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface PickTreeItemProps extends CanvasItemProps {

/**
 * See {@link isc.PickTreeItem.valueTree PickTreeItem.valueTree}.
 */
valueTree?: Tree;

/**
 * See {@link isc.PickTreeItem.setValueTree() PickTreeItem.setValueTree()}.
 */
setValueTree?: Function;

/**
 * See {@link isc.PickTreeItem.setEmptyDisplayValue() PickTreeItem.setEmptyDisplayValue()}.
 */
setEmptyDisplayValue?: Function;

/**
 * See {@link isc.PickTreeItem.emptyDisplayValue PickTreeItem.emptyDisplayValue}.
 */
emptyDisplayValue?: string;

/**
 * See {@link isc.PickTreeItem.fetchData() PickTreeItem.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.PickTreeItem.pendingButtonStyle PickTreeItem.pendingButtonStyle}.
 */
pendingButtonStyle?: string;

/**
 * See {@link isc.PickTreeItem.shouldSaveValue PickTreeItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.PickTreeItem.emptyMenuMessage PickTreeItem.emptyMenuMessage}.
 */
emptyMenuMessage?: string;

/**
 * See {@link isc.PickTreeItem.buttonProperties PickTreeItem.buttonProperties}.
 */
buttonProperties?: Canvas;

/**
 * See {@link isc.PickTreeItem.readOnlyDisplay PickTreeItem.readOnlyDisplay}.
 */
readOnlyDisplay?: string;

/**
 * See {@link isc.PickTreeItem.dataSource PickTreeItem.dataSource}.
 */
dataSource?: string;

/**
 * See {@link isc.PickTreeItem.pendingStatusChanged() PickTreeItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.PickTreeItem.loadDataOnDemand PickTreeItem.loadDataOnDemand}.
 */
loadDataOnDemand?: boolean;

/**
 * See {@link isc.PickTreeItem.dataProperties PickTreeItem.dataProperties}.
 */
dataProperties?: Tree;

/**
 * See {@link isc.PickTreeItem.optionDataSource PickTreeItem.optionDataSource}.
 */
optionDataSource?: DataSource;

/**
 * See {@link isc.PickTreeItem.canSelectParentItems PickTreeItem.canSelectParentItems}.
 */
canSelectParentItems?: boolean;

/**
 * See {@link isc.PickTreeItem.valueField PickTreeItem.valueField}.
 */
valueField?: string;

/**
 * See {@link isc.PickTreeItem.displayField PickTreeItem.displayField}.
 */
displayField?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PickTreeItem wraps the SmartClient widget class
 * {@link isc.PickTreeItem PickTreeItem} for React, allowing you to import
 * PickTreeItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class PickTreeItem extends CanvasItem {
    props: AsComponentXML<PickTreeItemProps>;
}
