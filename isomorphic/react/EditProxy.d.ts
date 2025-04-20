import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface EditProxyProps {

/**
 * See {@link isc.EditProxy.useCopyPasteShortcuts EditProxy.useCopyPasteShortcuts}.
 */
useCopyPasteShortcuts?: boolean;

/**
 * See {@link isc.EditProxy.showSelectedAppearance() EditProxy.showSelectedAppearance()}.
 */
showSelectedAppearance?: Function;

/**
 * See {@link isc.EditProxy.canSelectChildren EditProxy.canSelectChildren}.
 */
canSelectChildren?: boolean;

/**
 * See {@link isc.EditProxy.allowNestedDrops EditProxy.allowNestedDrops}.
 */
allowNestedDrops?: boolean;

/**
 * See {@link isc.EditProxy.startInlineEditing() EditProxy.startInlineEditing()}.
 */
startInlineEditing?: Function;

/**
 * See {@link isc.EditProxy.showDragHandle EditProxy.showDragHandle}.
 */
showDragHandle?: boolean;

/**
 * See {@link isc.EditProxy.inlineEditEvent EditProxy.inlineEditEvent}.
 */
inlineEditEvent?: string;

/**
 * See {@link isc.EditProxy.hoopSelectorProperties EditProxy.hoopSelectorProperties}.
 */
hoopSelectorProperties?: Canvas;

/**
 * See {@link isc.EditProxy.childrenSnapToGrid EditProxy.childrenSnapToGrid}.
 */
childrenSnapToGrid?: boolean;

/**
 * See {@link isc.EditProxy.inlineEditInstructions EditProxy.inlineEditInstructions}.
 */
inlineEditInstructions?: string;

/**
 * See {@link isc.EditProxy.childrenSnapResizeToGrid EditProxy.childrenSnapResizeToGrid}.
 */
childrenSnapResizeToGrid?: boolean;

/**
 * See {@link isc.EditProxy.setInlineEditText() EditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.EditProxy.inlineEditFormProperties EditProxy.inlineEditFormProperties}.
 */
inlineEditFormProperties?: DynamicForm;

/**
 * See {@link isc.EditProxy.selectedTintColor EditProxy.selectedTintColor}.
 */
selectedTintColor?: string;

/**
 * See {@link isc.EditProxy.setCanSelectChildren() EditProxy.setCanSelectChildren()}.
 */
setCanSelectChildren?: Function;

/**
 * See {@link isc.EditProxy.inlineEditOnDrop EditProxy.inlineEditOnDrop}.
 */
inlineEditOnDrop?: boolean;

/**
 * See {@link isc.EditProxy.bringToFrontOnSelect EditProxy.bringToFrontOnSelect}.
 */
bringToFrontOnSelect?: boolean;

/**
 * See {@link isc.EditProxy.canSelect EditProxy.canSelect}.
 */
canSelect?: boolean;

/**
 * See {@link isc.EditProxy.selectedLabelBackgroundColor EditProxy.selectedLabelBackgroundColor}.
 */
selectedLabelBackgroundColor?: string;

/**
 * See {@link isc.EditProxy.editMaskProperties EditProxy.editMaskProperties}.
 */
editMaskProperties?: Canvas;

/**
 * See {@link isc.EditProxy.getInlineEditText() EditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.EditProxy.supportsInlineEdit EditProxy.supportsInlineEdit}.
 */
supportsInlineEdit?: boolean;

/**
 * See {@link isc.EditProxy.selectedTintOpacity EditProxy.selectedTintOpacity}.
 */
selectedTintOpacity?: number;

/**
 * See {@link isc.EditProxy.selectedAppearance EditProxy.selectedAppearance}.
 */
selectedAppearance?: string;

/**
 * See {@link isc.EditProxy.inlineEditMultiline EditProxy.inlineEditMultiline}.
 */
inlineEditMultiline?: boolean;

/**
 * See {@link isc.EditProxy.selectedBorder EditProxy.selectedBorder}.
 */
selectedBorder?: string;

/**
 * See {@link isc.EditProxy.autoMaskChildren EditProxy.autoMaskChildren}.
 */
autoMaskChildren?: boolean;

/**
 * See {@link isc.EditProxy.inlineEditInstructionLabelProperties EditProxy.inlineEditInstructionLabelProperties}.
 */
inlineEditInstructionLabelProperties?: Label;

/**
 * See {@link isc.EditProxy.useEditMask EditProxy.useEditMask}.
 */
useEditMask?: boolean;

/**
 * See {@link isc.EditProxy.persistCoordinates EditProxy.persistCoordinates}.
 */
persistCoordinates?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EditProxy wraps the non-rendered SmartClient class
 * {@link isc.EditProxy EditProxy} for React, allowing you to import
 *  EditProxy for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class EditProxy extends ILogicalComponent {
    props: AsComponentXML<EditProxyProps>;
}
