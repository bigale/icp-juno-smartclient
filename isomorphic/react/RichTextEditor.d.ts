import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface RichTextEditorProps extends VLayoutProps {

/**
 * See {@link isc.RichTextEditor.toolbarProperties RichTextEditor.toolbarProperties}.
 */
toolbarProperties?: Layout;

/**
 * See {@link isc.RichTextEditor.backgroundColorPrompt RichTextEditor.backgroundColorPrompt}.
 */
backgroundColorPrompt?: string;

/**
 * See {@link isc.RichTextEditor.editAreaBackgroundColor RichTextEditor.editAreaBackgroundColor}.
 */
editAreaBackgroundColor?: string;

/**
 * See {@link isc.RichTextEditor.fontSelectorItemProperties RichTextEditor.fontSelectorItemProperties}.
 */
fontSelectorItemProperties?: SelectItem;

/**
 * See {@link isc.RichTextEditor.pasteSelectionPrompt RichTextEditor.pasteSelectionPrompt}.
 */
pasteSelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.toolbarBackgroundColor RichTextEditor.toolbarBackgroundColor}.
 */
toolbarBackgroundColor?: string;

/**
 * See {@link isc.RichTextEditor.strikethroughSelectionPrompt RichTextEditor.strikethroughSelectionPrompt}.
 */
strikethroughSelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.listPropertiesWarningText RichTextEditor.listPropertiesWarningText}.
 */
listPropertiesWarningText?: string;

/**
 * See {@link isc.RichTextEditor.setValue() RichTextEditor.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.RichTextEditor.colorControls RichTextEditor.colorControls}.
 */
colorControls?: string[];

/**
 * See {@link isc.RichTextEditor.fontSizeSelectorPrompt RichTextEditor.fontSizeSelectorPrompt}.
 */
fontSizeSelectorPrompt?: string;

/**
 * See {@link isc.RichTextEditor.alignRightPrompt RichTextEditor.alignRightPrompt}.
 */
alignRightPrompt?: string;

/**
 * See {@link isc.RichTextEditor.italicSelectionPrompt RichTextEditor.italicSelectionPrompt}.
 */
italicSelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.cutSelectionPrompt RichTextEditor.cutSelectionPrompt}.
 */
cutSelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.orderedListPrompt RichTextEditor.orderedListPrompt}.
 */
orderedListPrompt?: string;

/**
 * See {@link isc.RichTextEditor.richEditorSupported() RichTextEditor.richEditorSupported()}.
 */
richEditorSupported?: Function;

/**
 * See {@link isc.RichTextEditor.getValue() RichTextEditor.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.RichTextEditor.useDesignMode RichTextEditor.useDesignMode}.
 */
useDesignMode?: boolean;

/**
 * See {@link isc.RichTextEditor.outdentPrompt RichTextEditor.outdentPrompt}.
 */
outdentPrompt?: string;

/**
 * See {@link isc.RichTextEditor.doWarn() RichTextEditor.doWarn()}.
 */
doWarn?: Function;

/**
 * See {@link isc.RichTextEditor.unorderedListPrompt RichTextEditor.unorderedListPrompt}.
 */
unorderedListPrompt?: string;

/**
 * See {@link isc.RichTextEditor.justifyPrompt RichTextEditor.justifyPrompt}.
 */
justifyPrompt?: string;

/**
 * See {@link isc.RichTextEditor.moveFocusOnTab RichTextEditor.moveFocusOnTab}.
 */
moveFocusOnTab?: boolean;

/**
 * See {@link isc.RichTextEditor.alignCenterPrompt RichTextEditor.alignCenterPrompt}.
 */
alignCenterPrompt?: string;

/**
 * See {@link isc.RichTextEditor.alignLeftPrompt RichTextEditor.alignLeftPrompt}.
 */
alignLeftPrompt?: string;

/**
 * See {@link isc.RichTextEditor.colorPrompt RichTextEditor.colorPrompt}.
 */
colorPrompt?: string;

/**
 * See {@link isc.RichTextEditor.fontSizes RichTextEditor.fontSizes}.
 */
fontSizes?: Object;

/**
 * See {@link isc.RichTextEditor.bulletControls RichTextEditor.bulletControls}.
 */
bulletControls?: string[];

/**
 * See {@link isc.RichTextEditor.fontSelectorPrompt RichTextEditor.fontSelectorPrompt}.
 */
fontSelectorPrompt?: string;

/**
 * See {@link isc.RichTextEditor.toolAreaProperties RichTextEditor.toolAreaProperties}.
 */
toolAreaProperties?: Layout;

/**
 * See {@link isc.RichTextEditor.formatControls RichTextEditor.formatControls}.
 */
formatControls?: string[];

/**
 * See {@link isc.RichTextEditor.copySelectionPrompt RichTextEditor.copySelectionPrompt}.
 */
copySelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.editAreaProperties RichTextEditor.editAreaProperties}.
 */
editAreaProperties?: Canvas;

/**
 * See {@link isc.RichTextEditor.indentPrompt RichTextEditor.indentPrompt}.
 */
indentPrompt?: string;

/**
 * See {@link isc.RichTextEditor.controlGroups RichTextEditor.controlGroups}.
 */
controlGroups?: string[];

/**
 * See {@link isc.RichTextEditor.listPropertiesPrompt RichTextEditor.listPropertiesPrompt}.
 */
listPropertiesPrompt?: string;

/**
 * See {@link isc.RichTextEditor.underlineSelectionPrompt RichTextEditor.underlineSelectionPrompt}.
 */
underlineSelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.fontControls RichTextEditor.fontControls}.
 */
fontControls?: string[];

/**
 * See {@link isc.RichTextEditor.styleControls RichTextEditor.styleControls}.
 */
styleControls?: string[];

/**
 * See {@link isc.RichTextEditor.setMoveFocusOnTab() RichTextEditor.setMoveFocusOnTab()}.
 */
setMoveFocusOnTab?: Function;

/**
 * See {@link isc.RichTextEditor.listPropertiesDialogProperties RichTextEditor.listPropertiesDialogProperties}.
 */
listPropertiesDialogProperties?: ListPropertiesDialog;

/**
 * See {@link isc.RichTextEditor.value RichTextEditor.value}.
 */
value?: string;

/**
 * See {@link isc.RichTextEditor.styleWithCSS RichTextEditor.styleWithCSS}.
 */
styleWithCSS?: boolean;

/**
 * See {@link isc.RichTextEditor.boldSelectionPrompt RichTextEditor.boldSelectionPrompt}.
 */
boldSelectionPrompt?: string;

/**
 * See {@link isc.RichTextEditor.fontSizeSelectorItemProperties RichTextEditor.fontSizeSelectorItemProperties}.
 */
fontSizeSelectorItemProperties?: SelectItem;

/**
 * See {@link isc.RichTextEditor.fontNames RichTextEditor.fontNames}.
 */
fontNames?: Object;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RichTextEditor wraps the SmartClient widget class
 * {@link isc.RichTextEditor RichTextEditor} for React, allowing you to import
 * RichTextEditor for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class RichTextEditor extends VLayout {
    props: AsComponentXML<RichTextEditorProps>;
}
