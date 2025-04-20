import React from 'react';
import { Process, ProcessProps } from './Process';
import { AsComponentXML } from './core/ReactComponent';


declare interface TourProps extends ProcessProps {

/**
 * See {@link isc.Tour.tourStepWizardAutoCompleteTitle Tour.tourStepWizardAutoCompleteTitle}.
 */
tourStepWizardAutoCompleteTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardRecordStepHeaderPrompt Tour.tourStepWizardRecordStepHeaderPrompt}.
 */
tourStepWizardRecordStepHeaderPrompt?: string;

/**
 * See {@link isc.Tour.tourWizardShowProgressTitle Tour.tourWizardShowProgressTitle}.
 */
tourWizardShowProgressTitle?: string;

/**
 * See {@link isc.Tour.tourCompleteTitle Tour.tourCompleteTitle}.
 */
tourCompleteTitle?: string;

/**
 * See {@link isc.Tour.notifyValidationMessage() Tour.notifyValidationMessage()}.
 */
notifyValidationMessage?: Function;

/**
 * See {@link isc.Tour.stepActionButtonTitle Tour.stepActionButtonTitle}.
 */
stepActionButtonTitle?: string;

/**
 * See {@link isc.Tour.windowDefaults Tour.windowDefaults}.
 */
windowDefaults?: Canvas;

/**
 * See {@link isc.Tour.canCancel Tour.canCancel}.
 */
canCancel?: boolean;

/**
 * See {@link isc.Tour.tourStepWizardNextStepButtonTitle Tour.tourStepWizardNextStepButtonTitle}.
 */
tourStepWizardNextStepButtonTitle?: string;

/**
 * See {@link isc.Tour.tourWizardTourTypeTitle Tour.tourWizardTourTypeTitle}.
 */
tourWizardTourTypeTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardInstructionsTitle Tour.tourStepWizardInstructionsTitle}.
 */
tourStepWizardInstructionsTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardAutoCompletePrompt Tour.tourStepWizardAutoCompletePrompt}.
 */
tourStepWizardAutoCompletePrompt?: string;

/**
 * See {@link isc.Tour.dropOutlineBorder Tour.dropOutlineBorder}.
 */
dropOutlineBorder?: string;

/**
 * See {@link isc.Tour.autoReset Tour.autoReset}.
 */
autoReset?: boolean;

/**
 * See {@link isc.Tour.tourStepWizardDropTargetTitle Tour.tourStepWizardDropTargetTitle}.
 */
tourStepWizardDropTargetTitle?: string;

/**
 * See {@link isc.Tour.tourCompleteMakeChangesButtonTitle Tour.tourCompleteMakeChangesButtonTitle}.
 */
tourCompleteMakeChangesButtonTitle?: string;

/**
 * See {@link isc.Tour.notifyMessageSettings Tour.notifyMessageSettings}.
 */
notifyMessageSettings?: NotifySettings;

/**
 * See {@link isc.Tour.outlineBorder Tour.outlineBorder}.
 */
outlineBorder?: string;

/**
 * See {@link isc.Tour.tourStepWizardTargePrompt Tour.tourStepWizardTargePrompt}.
 */
tourStepWizardTargePrompt?: string;

/**
 * See {@link isc.Tour.firstStepActionButtonTitle Tour.firstStepActionButtonTitle}.
 */
firstStepActionButtonTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardTargeNotifyText Tour.tourStepWizardTargeNotifyText}.
 */
tourStepWizardTargeNotifyText?: string;

/**
 * See {@link isc.Tour.tourStepWizardBindOutputTitle Tour.tourStepWizardBindOutputTitle}.
 */
tourStepWizardBindOutputTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardRecordStepTitle Tour.tourStepWizardRecordStepTitle}.
 */
tourStepWizardRecordStepTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardDropTargetPrompt Tour.tourStepWizardDropTargetPrompt}.
 */
tourStepWizardDropTargetPrompt?: string;

/**
 * See {@link isc.Tour.showProgress Tour.showProgress}.
 */
showProgress?: boolean;

/**
 * See {@link isc.Tour.tourStepWizardTargetTitle Tour.tourStepWizardTargetTitle}.
 */
tourStepWizardTargetTitle?: string;

/**
 * See {@link isc.Tour.tourWizardReifyTourTitle Tour.tourWizardReifyTourTitle}.
 */
tourWizardReifyTourTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardExpectedValueHint Tour.tourStepWizardExpectedValueHint}.
 */
tourStepWizardExpectedValueHint?: string;

/**
 * See {@link isc.Tour.tourWizardInteractiveTourTitle Tour.tourWizardInteractiveTourTitle}.
 */
tourWizardInteractiveTourTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardDropTargetNotifyText Tour.tourStepWizardDropTargetNotifyText}.
 */
tourStepWizardDropTargetNotifyText?: string;

/**
 * See {@link isc.Tour.tourStepWizardCaseSensitiveTitle Tour.tourStepWizardCaseSensitiveTitle}.
 */
tourStepWizardCaseSensitiveTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardExpectedValueTitle Tour.tourStepWizardExpectedValueTitle}.
 */
tourStepWizardExpectedValueTitle?: string;

/**
 * See {@link isc.Tour.lastStepActionButtonTitle Tour.lastStepActionButtonTitle}.
 */
lastStepActionButtonTitle?: string;

/**
 * See {@link isc.Tour.showProgressPercent Tour.showProgressPercent}.
 */
showProgressPercent?: boolean;

/**
 * See {@link isc.Tour.allowDropOnDescendants Tour.allowDropOnDescendants}.
 */
allowDropOnDescendants?: boolean;

/**
 * See {@link isc.Tour.tourCompleteViewXMLButtonTitle Tour.tourCompleteViewXMLButtonTitle}.
 */
tourCompleteViewXMLButtonTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardTitle Tour.tourStepWizardTitle}.
 */
tourStepWizardTitle?: string;

/**
 * See {@link isc.Tour.tourCompleteRunTourButtonTitle Tour.tourCompleteRunTourButtonTitle}.
 */
tourCompleteRunTourButtonTitle?: string;

/**
 * See {@link isc.Tour.tourWizardTitle Tour.tourWizardTitle}.
 */
tourWizardTitle?: string;

/**
 * See {@link isc.Tour.showCancelButton Tour.showCancelButton}.
 */
showCancelButton?: boolean;

/**
 * See {@link isc.Tour.tourWizardRequiredDataSourcesTitle Tour.tourWizardRequiredDataSourcesTitle}.
 */
tourWizardRequiredDataSourcesTitle?: string;

/**
 * See {@link isc.Tour.notifyType Tour.notifyType}.
 */
notifyType?: string;

/**
 * See {@link isc.Tour.cancelSteps Tour.cancelSteps}.
 */
cancelSteps?: ProcessElement[];

/**
 * See {@link isc.Tour.tourStepWizardBindOutputHint Tour.tourStepWizardBindOutputHint}.
 */
tourStepWizardBindOutputHint?: string;

/**
 * See {@link isc.Tour.firstStepCancelButtonTitle Tour.firstStepCancelButtonTitle}.
 */
firstStepCancelButtonTitle?: string;

/**
 * See {@link isc.Tour.tourWizardRequiredDataSourcesHint Tour.tourWizardRequiredDataSourcesHint}.
 */
tourWizardRequiredDataSourcesHint?: string;

/**
 * See {@link isc.Tour.tourWizardRecordButtonTitle Tour.tourWizardRecordButtonTitle}.
 */
tourWizardRecordButtonTitle?: string;

/**
 * See {@link isc.Tour.stepCancelButtonTitle Tour.stepCancelButtonTitle}.
 */
stepCancelButtonTitle?: string;

/**
 * See {@link isc.Tour.tourWizardUITourTitle Tour.tourWizardUITourTitle}.
 */
tourWizardUITourTitle?: string;

/**
 * See {@link isc.Tour.tourWizardNewScreenPickerTitle Tour.tourWizardNewScreenPickerTitle}.
 */
tourWizardNewScreenPickerTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardDropTargetHint Tour.tourStepWizardDropTargetHint}.
 */
tourStepWizardDropTargetHint?: string;

/**
 * See {@link isc.Tour.steps Tour.steps}.
 */
steps?: ProcessElement[];

/**
 * See {@link isc.Tour.tourStepWizardDoneButtonTitle Tour.tourStepWizardDoneButtonTitle}.
 */
tourStepWizardDoneButtonTitle?: string;

/**
 * See {@link isc.Tour.tourStepWizardNoStepsMessage Tour.tourStepWizardNoStepsMessage}.
 */
tourStepWizardNoStepsMessage?: string;

/**
 * See {@link isc.Tour.tourCompleteTourIdTitle Tour.tourCompleteTourIdTitle}.
 */
tourCompleteTourIdTitle?: string;

/**
 * See {@link isc.Tour.showInputValidationMessage Tour.showInputValidationMessage}.
 */
showInputValidationMessage?: boolean;

/**
 * See {@link isc.Tour.stepCancelButtonPrompt Tour.stepCancelButtonPrompt}.
 */
stepCancelButtonPrompt?: string;

/**
 * See {@link isc.Tour.tourStepWizardActionTypeTitle Tour.tourStepWizardActionTypeTitle}.
 */
tourStepWizardActionTypeTitle?: string;

/**
 * See {@link isc.Tour.mode Tour.mode}.
 */
mode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Tour wraps the SmartClient widget class
 * {@link isc.Tour Tour} for React, allowing you to import
 * Tour for use in React JS and JSX.
 * @class
 * @extends Process
 */
declare class Tour extends Process {
    props: AsComponentXML<TourProps>;
}
