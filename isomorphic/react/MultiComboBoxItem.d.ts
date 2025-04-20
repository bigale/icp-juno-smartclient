import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiComboBoxItemProps extends CanvasItemProps {

/**
 * See {@link isc.MultiComboBoxItem.pickListConstructor MultiComboBoxItem.pickListConstructor}.
 */
pickListConstructor?: string;

/**
 * See {@link isc.MultiComboBoxItem.valueMap MultiComboBoxItem.valueMap}.
 */
valueMap?: string[] | Object;

/**
 * See {@link isc.MultiComboBoxItem.deselectedButtonStyle MultiComboBoxItem.deselectedButtonStyle}.
 */
deselectedButtonStyle?: string;

/**
 * See {@link isc.MultiComboBoxItem.addUnknownValues MultiComboBoxItem.addUnknownValues}.
 */
addUnknownValues?: boolean;

/**
 * See {@link isc.MultiComboBoxItem.pendingStatusChanged() MultiComboBoxItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.MultiComboBoxItem.pendingButtonStyle MultiComboBoxItem.pendingButtonStyle}.
 */
pendingButtonStyle?: string;

/**
 * See {@link isc.MultiComboBoxItem.optionDataSource MultiComboBoxItem.optionDataSource}.
 */
optionDataSource?: DataSource | string;

/**
 * See {@link isc.MultiComboBoxItem.buttonProperties MultiComboBoxItem.buttonProperties}.
 */
buttonProperties?: IButton;

/**
 * See {@link isc.MultiComboBoxItem.pickTreeConstructor MultiComboBoxItem.pickTreeConstructor}.
 */
pickTreeConstructor?: string;

/**
 * See {@link isc.MultiComboBoxItem.displayField MultiComboBoxItem.displayField}.
 */
displayField?: string;

/**
 * See {@link isc.MultiComboBoxItem.showValue() MultiComboBoxItem.showValue()}.
 */
showValue?: Function;

/**
 * See {@link isc.MultiComboBoxItem.valueField MultiComboBoxItem.valueField}.
 */
valueField?: string;

/**
 * See {@link isc.MultiComboBoxItem.shouldSaveValue MultiComboBoxItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.MultiComboBoxItem.autoFitButtons MultiComboBoxItem.autoFitButtons}.
 */
autoFitButtons?: boolean;

/**
 * See {@link isc.MultiComboBoxItem.autoFetchData MultiComboBoxItem.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.MultiComboBoxItem.setLayoutStyle() MultiComboBoxItem.setLayoutStyle()}.
 */
setLayoutStyle?: Function;

/**
 * See {@link isc.MultiComboBoxItem.optionOperationId MultiComboBoxItem.optionOperationId}.
 */
optionOperationId?: string;

/**
 * See {@link isc.MultiComboBoxItem.layoutStyle MultiComboBoxItem.layoutStyle}.
 */
layoutStyle?: string;

/**
 * See {@link isc.MultiComboBoxItem.comboFormProperties MultiComboBoxItem.comboFormProperties}.
 */
comboFormProperties?: DynamicForm;

/**
 * See {@link isc.MultiComboBoxItem.rootNodeId MultiComboBoxItem.rootNodeId}.
 */
rootNodeId?: string | number;

/**
 * See {@link isc.MultiComboBoxItem.comboBoxWidth MultiComboBoxItem.comboBoxWidth}.
 */
comboBoxWidth?: number;

/**
 * See {@link isc.MultiComboBoxItem.autoOpenTree MultiComboBoxItem.autoOpenTree}.
 */
autoOpenTree?: string;

/**
 * See {@link isc.MultiComboBoxItem.setAutoFitButtons() MultiComboBoxItem.setAutoFitButtons()}.
 */
setAutoFitButtons?: Function;

/**
 * See {@link isc.MultiComboBoxItem.alwaysExitOnTab MultiComboBoxItem.alwaysExitOnTab}.
 */
alwaysExitOnTab?: boolean;

/**
 * See {@link isc.MultiComboBoxItem.useInsertionOrder MultiComboBoxItem.useInsertionOrder}.
 */
useInsertionOrder?: boolean;

/**
 * See {@link isc.MultiComboBoxItem.comboBoxProperties MultiComboBoxItem.comboBoxProperties}.
 */
comboBoxProperties?: ComboBoxItem;

/**
 * See {@link isc.MultiComboBoxItem.dataSetType MultiComboBoxItem.dataSetType}.
 */
dataSetType?: string;

/**
 * See {@link isc.MultiComboBoxItem.valueLayoutProperties MultiComboBoxItem.valueLayoutProperties}.
 */
valueLayoutProperties?: Layout;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiComboBoxItem wraps the SmartClient widget class
 * {@link isc.MultiComboBoxItem MultiComboBoxItem} for React, allowing you to import
 * MultiComboBoxItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class MultiComboBoxItem extends CanvasItem {
    props: AsComponentXML<MultiComboBoxItemProps>;
}
