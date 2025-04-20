import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface FieldPickerProps extends VLayoutProps {

/**
 * See {@link isc.FieldPicker.instructionLabelProperties FieldPicker.instructionLabelProperties}.
 */
instructionLabelProperties?: Label;

/**
 * See {@link isc.FieldPicker.confirmText FieldPicker.confirmText}.
 */
confirmText?: string;

/**
 * See {@link isc.FieldPicker.removeText FieldPicker.removeText}.
 */
removeText?: string;

/**
 * See {@link isc.FieldPicker.availableFieldsHeaderControls FieldPicker.availableFieldsHeaderControls}.
 */
availableFieldsHeaderControls?: Canvas[];

/**
 * See {@link isc.FieldPicker.availableFieldsGridProperties FieldPicker.availableFieldsGridProperties}.
 */
availableFieldsGridProperties?: ListGrid;

/**
 * See {@link isc.FieldPicker.availableFieldsTitle FieldPicker.availableFieldsTitle}.
 */
availableFieldsTitle?: string;

/**
 * See {@link isc.FieldPicker.showHilitesButton FieldPicker.showHilitesButton}.
 */
showHilitesButton?: boolean;

/**
 * See {@link isc.FieldPicker.callback() FieldPicker.callback()}.
 */
callback?: Function;

/**
 * See {@link isc.FieldPicker.currentFieldsTitle FieldPicker.currentFieldsTitle}.
 */
currentFieldsTitle?: string;

/**
 * See {@link isc.FieldPicker.setAvailableFields() FieldPicker.setAvailableFields()}.
 */
setAvailableFields?: Function;

/**
 * See {@link isc.FieldPicker.sampleValueTitle FieldPicker.sampleValueTitle}.
 */
sampleValueTitle?: string;

/**
 * See {@link isc.FieldPicker.buttonLayoutProperties FieldPicker.buttonLayoutProperties}.
 */
buttonLayoutProperties?: HLayout;

/**
 * See {@link isc.FieldPicker.instructions FieldPicker.instructions}.
 */
instructions?: string;

/**
 * See {@link isc.FieldPicker.cancelButtonTitle FieldPicker.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.FieldPicker.removeItemTitle FieldPicker.removeItemTitle}.
 */
removeItemTitle?: string;

/**
 * See {@link isc.FieldPicker.dataBoundComponent FieldPicker.dataBoundComponent}.
 */
dataBoundComponent?: Canvas;

/**
 * See {@link isc.FieldPicker.cancelChangesButtonProperties FieldPicker.cancelChangesButtonProperties}.
 */
cancelChangesButtonProperties?: IButton;

/**
 * See {@link isc.FieldPicker.showFieldOrderButtons FieldPicker.showFieldOrderButtons}.
 */
showFieldOrderButtons?: boolean;

/**
 * See {@link isc.FieldPicker.currentFieldsGridProperties FieldPicker.currentFieldsGridProperties}.
 */
currentFieldsGridProperties?: ListGrid;

/**
 * See {@link isc.FieldPicker.saveAndExitButtonProperties FieldPicker.saveAndExitButtonProperties}.
 */
saveAndExitButtonProperties?: IButton;

/**
 * See {@link isc.FieldPicker.hilitesText FieldPicker.hilitesText}.
 */
hilitesText?: string;

/**
 * See {@link isc.FieldPicker.addCustomFieldsButtonTitle FieldPicker.addCustomFieldsButtonTitle}.
 */
addCustomFieldsButtonTitle?: string;

/**
 * See {@link isc.FieldPicker.availableTitleTitle FieldPicker.availableTitleTitle}.
 */
availableTitleTitle?: string;

/**
 * See {@link isc.FieldPicker.emptyTitleHint FieldPicker.emptyTitleHint}.
 */
emptyTitleHint?: string;

/**
 * See {@link isc.FieldPicker.dataSource FieldPicker.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.FieldPicker.saveAndExitButtonTitle FieldPicker.saveAndExitButtonTitle}.
 */
saveAndExitButtonTitle?: string;

/**
 * See {@link isc.FieldPicker.currentTitleTitle FieldPicker.currentTitleTitle}.
 */
currentTitleTitle?: string;

/**
 * See {@link isc.FieldPicker.canFilterSampleValue FieldPicker.canFilterSampleValue}.
 */
canFilterSampleValue?: boolean;

/**
 * See {@link isc.FieldPicker.sampleRecord FieldPicker.sampleRecord}.
 */
sampleRecord?: Record | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FieldPicker wraps the SmartClient widget class
 * {@link isc.FieldPicker FieldPicker} for React, allowing you to import
 * FieldPicker for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class FieldPicker extends VLayout {
    props: AsComponentXML<FieldPickerProps>;
}
