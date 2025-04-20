import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormulaBuilderProps extends VLayoutProps {

/**
 * See {@link isc.FormulaBuilder.titleFieldProperties FormulaBuilder.titleFieldProperties}.
 */
titleFieldProperties?: TextItem;

/**
 * See {@link isc.FormulaBuilder.sampleHeaderTitle FormulaBuilder.sampleHeaderTitle}.
 */
sampleHeaderTitle?: string;

/**
 * See {@link isc.FormulaBuilder.invalidBlankPrompt FormulaBuilder.invalidBlankPrompt}.
 */
invalidBlankPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.defaultNewFieldTitle FormulaBuilder.defaultNewFieldTitle}.
 */
defaultNewFieldTitle?: string;

/**
 * See {@link isc.FormulaBuilder.helpIconProperties FormulaBuilder.helpIconProperties}.
 */
helpIconProperties?: FormItemIcon;

/**
 * See {@link isc.FormulaBuilder.validBuilderPrompt FormulaBuilder.validBuilderPrompt}.
 */
validBuilderPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.fieldKeyProperties FormulaBuilder.fieldKeyProperties}.
 */
fieldKeyProperties?: ListGrid;

/**
 * See {@link isc.FormulaBuilder.builderTypeText FormulaBuilder.builderTypeText}.
 */
builderTypeText?: string;

/**
 * See {@link isc.FormulaBuilder.autoHideCheckBoxProperties FormulaBuilder.autoHideCheckBoxProperties}.
 */
autoHideCheckBoxProperties?: TextItem;

/**
 * See {@link isc.FormulaBuilder.getSamplePrompt() FormulaBuilder.getSamplePrompt()}.
 */
getSamplePrompt?: Function;

/**
 * See {@link isc.FormulaBuilder.warnDuplicateTitles FormulaBuilder.warnDuplicateTitles}.
 */
warnDuplicateTitles?: string;

/**
 * See {@link isc.FormulaBuilder.field FormulaBuilder.field}.
 */
field?: Field;

/**
 * See {@link isc.FormulaBuilder.testButtonProperties FormulaBuilder.testButtonProperties}.
 */
testButtonProperties?: Button;

/**
 * See {@link isc.FormulaBuilder.getUpdatedFieldObject() FormulaBuilder.getUpdatedFieldObject()}.
 */
getUpdatedFieldObject?: Function;

/**
 * See {@link isc.FormulaBuilder.titleFieldTitle FormulaBuilder.titleFieldTitle}.
 */
titleFieldTitle?: string;

/**
 * See {@link isc.FormulaBuilder.saveConfirmationPrompt FormulaBuilder.saveConfirmationPrompt}.
 */
saveConfirmationPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.anotherTestRequestedCancellationReason FormulaBuilder.anotherTestRequestedCancellationReason}.
 */
anotherTestRequestedCancellationReason?: string;

/**
 * See {@link isc.FormulaBuilder.currentComponentFieldPrompt FormulaBuilder.currentComponentFieldPrompt}.
 */
currentComponentFieldPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.warnDuplicateTitlesMessage FormulaBuilder.warnDuplicateTitlesMessage}.
 */
warnDuplicateTitlesMessage?: string;

/**
 * See {@link isc.FormulaBuilder.cancelled FormulaBuilder.cancelled}.
 */
cancelled?: boolean;

/**
 * See {@link isc.FormulaBuilder.cancelButtonTitle FormulaBuilder.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.FormulaBuilder.instructionsProperties FormulaBuilder.instructionsProperties}.
 */
instructionsProperties?: DynamicForm;

/**
 * See {@link isc.FormulaBuilder.dataSource FormulaBuilder.dataSource}.
 */
dataSource?: DataSource | string;

/**
 * See {@link isc.FormulaBuilder.samplePrompt FormulaBuilder.samplePrompt}.
 */
samplePrompt?: string;

/**
 * See {@link isc.FormulaBuilder.save() FormulaBuilder.save()}.
 */
save?: Function;

/**
 * See {@link isc.FormulaBuilder.defaultErrorText FormulaBuilder.defaultErrorText}.
 */
defaultErrorText?: string;

/**
 * See {@link isc.FormulaBuilder.autoHideCheckBoxLabel FormulaBuilder.autoHideCheckBoxLabel}.
 */
autoHideCheckBoxLabel?: string;

/**
 * See {@link isc.FormulaBuilder.testRecord FormulaBuilder.testRecord}.
 */
testRecord?: Record;

/**
 * See {@link isc.FormulaBuilder.instructionsTextStart FormulaBuilder.instructionsTextStart}.
 */
instructionsTextStart?: string;

/**
 * See {@link isc.FormulaBuilder.helpWindowTitle FormulaBuilder.helpWindowTitle}.
 */
helpWindowTitle?: string;

/**
 * See {@link isc.FormulaBuilder.testFunction() FormulaBuilder.testFunction()}.
 */
testFunction?: Function;

/**
 * See {@link isc.FormulaBuilder.getHelpText() FormulaBuilder.getHelpText()}.
 */
getHelpText?: Function;

/**
 * See {@link isc.FormulaBuilder.invalidGeneratedFunctionPrompt FormulaBuilder.invalidGeneratedFunctionPrompt}.
 */
invalidGeneratedFunctionPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.showHelpIcon FormulaBuilder.showHelpIcon}.
 */
showHelpIcon?: boolean;

/**
 * See {@link isc.FormulaBuilder.fields FormulaBuilder.fields}.
 */
fields?: Field[];

/**
 * See {@link isc.FormulaBuilder.ruleContextTitle FormulaBuilder.ruleContextTitle}.
 */
ruleContextTitle?: string;

/**
 * See {@link isc.FormulaBuilder.userSavedCancellationReason FormulaBuilder.userSavedCancellationReason}.
 */
userSavedCancellationReason?: string;

/**
 * See {@link isc.FormulaBuilder.testButtonHoverContents FormulaBuilder.testButtonHoverContents}.
 */
testButtonHoverContents?: string;

/**
 * See {@link isc.FormulaBuilder.dataSourceFieldPrompt FormulaBuilder.dataSourceFieldPrompt}.
 */
dataSourceFieldPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.cancelButtonProperties FormulaBuilder.cancelButtonProperties}.
 */
cancelButtonProperties?: Button;

/**
 * See {@link isc.FormulaBuilder.mathFunctions FormulaBuilder.mathFunctions}.
 */
mathFunctions?: string[];

/**
 * See {@link isc.FormulaBuilder.editMode FormulaBuilder.editMode}.
 */
editMode?: boolean;

/**
 * See {@link isc.FormulaBuilder.nearbyComponentFieldPrompt FormulaBuilder.nearbyComponentFieldPrompt}.
 */
nearbyComponentFieldPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.saveAddAnotherButtonTitle FormulaBuilder.saveAddAnotherButtonTitle}.
 */
saveAddAnotherButtonTitle?: string;

/**
 * See {@link isc.FormulaBuilder.getTestRecord() FormulaBuilder.getTestRecord()}.
 */
getTestRecord?: Function;

/**
 * See {@link isc.FormulaBuilder.saveAddAnotherButtonProperties FormulaBuilder.saveAddAnotherButtonProperties}.
 */
saveAddAnotherButtonProperties?: Button;

/**
 * See {@link isc.FormulaBuilder.autoTestDelay FormulaBuilder.autoTestDelay}.
 */
autoTestDelay?: number;

/**
 * See {@link isc.FormulaBuilder.valueSuffix FormulaBuilder.valueSuffix}.
 */
valueSuffix?: string;

/**
 * See {@link isc.FormulaBuilder.testButtonTitle FormulaBuilder.testButtonTitle}.
 */
testButtonTitle?: string;

/**
 * See {@link isc.FormulaBuilder.autoTest FormulaBuilder.autoTest}.
 */
autoTest?: boolean;

/**
 * See {@link isc.FormulaBuilder.showAutoHideCheckBox FormulaBuilder.showAutoHideCheckBox}.
 */
showAutoHideCheckBox?: boolean;

/**
 * See {@link isc.FormulaBuilder.targetRuleScope FormulaBuilder.targetRuleScope}.
 */
targetRuleScope?: string | Canvas;

/**
 * See {@link isc.FormulaBuilder.saveAddAnother() FormulaBuilder.saveAddAnother()}.
 */
saveAddAnother?: Function;

/**
 * See {@link isc.FormulaBuilder.saveButtonTitle FormulaBuilder.saveButtonTitle}.
 */
saveButtonTitle?: string;

/**
 * See {@link isc.FormulaBuilder.keyColumnTitle FormulaBuilder.keyColumnTitle}.
 */
keyColumnTitle?: string;

/**
 * See {@link isc.FormulaBuilder.fireOnClose() FormulaBuilder.fireOnClose()}.
 */
fireOnClose?: Function;

/**
 * See {@link isc.FormulaBuilder.sourceFieldColumnTitle FormulaBuilder.sourceFieldColumnTitle}.
 */
sourceFieldColumnTitle?: string;

/**
 * See {@link isc.FormulaBuilder.valuePrefix FormulaBuilder.valuePrefix}.
 */
valuePrefix?: string;

/**
 * See {@link isc.FormulaBuilder.setFormula() FormulaBuilder.setFormula()}.
 */
setFormula?: Function;

/**
 * See {@link isc.FormulaBuilder.useSingleLetterKey FormulaBuilder.useSingleLetterKey}.
 */
useSingleLetterKey?: boolean;

/**
 * See {@link isc.FormulaBuilder.formulaFieldProperties FormulaBuilder.formulaFieldProperties}.
 */
formulaFieldProperties?: TextItem;

/**
 * See {@link isc.FormulaBuilder.invalidBuilderPrompt FormulaBuilder.invalidBuilderPrompt}.
 */
invalidBuilderPrompt?: string;

/**
 * See {@link isc.FormulaBuilder.messageLabelProperties FormulaBuilder.messageLabelProperties}.
 */
messageLabelProperties?: Label;

/**
 * See {@link isc.FormulaBuilder.saveButtonProperties FormulaBuilder.saveButtonProperties}.
 */
saveButtonProperties?: Button;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormulaBuilder wraps the SmartClient widget class
 * {@link isc.FormulaBuilder FormulaBuilder} for React, allowing you to import
 * FormulaBuilder for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class FormulaBuilder extends VLayout {
    props: AsComponentXML<FormulaBuilderProps>;
}
