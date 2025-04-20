import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface HiliteEditorProps extends VLayoutProps {

/**
 * See {@link isc.HiliteEditor.saveHilites() HiliteEditor.saveHilites()}.
 */
saveHilites?: Function;

/**
 * See {@link isc.HiliteEditor.hiliteRuleProperties HiliteEditor.hiliteRuleProperties}.
 */
hiliteRuleProperties?: HiliteRule;

/**
 * See {@link isc.HiliteEditor.clearHilites() HiliteEditor.clearHilites()}.
 */
clearHilites?: Function;

/**
 * See {@link isc.HiliteEditor.fieldListProperties HiliteEditor.fieldListProperties}.
 */
fieldListProperties?: ListGrid;

/**
 * See {@link isc.HiliteEditor.setHilites() HiliteEditor.setHilites()}.
 */
setHilites?: Function;

/**
 * See {@link isc.HiliteEditor.callback HiliteEditor.callback}.
 */
callback?: Callback;

/**
 * See {@link isc.HiliteEditor.addAdvancedRuleButtonProperties HiliteEditor.addAdvancedRuleButtonProperties}.
 */
addAdvancedRuleButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.HiliteEditor.addAdvancedRuleButtonTitle HiliteEditor.addAdvancedRuleButtonTitle}.
 */
addAdvancedRuleButtonTitle?: string;

/**
 * See {@link isc.HiliteEditor.advancedRuleHeight HiliteEditor.advancedRuleHeight}.
 */
advancedRuleHeight?: number;

/**
 * See {@link isc.HiliteEditor.availableFieldsColumnTitle HiliteEditor.availableFieldsColumnTitle}.
 */
availableFieldsColumnTitle?: string;

/**
 * See {@link isc.HiliteEditor.removeRule() HiliteEditor.removeRule()}.
 */
removeRule?: Function;

/**
 * See {@link isc.HiliteEditor.cancelButtonProperties HiliteEditor.cancelButtonProperties}.
 */
cancelButtonProperties?: StatefulCanvas;

/**
 * See {@link isc.HiliteEditor.hiliteIcons HiliteEditor.hiliteIcons}.
 */
hiliteIcons?: string[];

/**
 * See {@link isc.HiliteEditor.cancelButtonTitle HiliteEditor.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.HiliteEditor.saveButtonTitle HiliteEditor.saveButtonTitle}.
 */
saveButtonTitle?: string;

/**
 * See {@link isc.HiliteEditor.saveButtonProperties HiliteEditor.saveButtonProperties}.
 */
saveButtonProperties?: StatefulCanvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HiliteEditor wraps the SmartClient widget class
 * {@link isc.HiliteEditor HiliteEditor} for React, allowing you to import
 * HiliteEditor for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class HiliteEditor extends VLayout {
    props: AsComponentXML<HiliteEditorProps>;
}
