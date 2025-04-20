import React from 'react';
import { UserTask, UserTaskProps } from './UserTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface TourStepProps extends UserTaskProps {

/**
 * See {@link isc.TourStep.pointerSnapTo TourStep.pointerSnapTo}.
 */
pointerSnapTo?: string;

/**
 * See {@link isc.TourStep.bindEnteredText TourStep.bindEnteredText}.
 */
bindEnteredText?: string;

/**
 * See {@link isc.TourStep.afterInputTarget TourStep.afterInputTarget}.
 */
afterInputTarget?: string;

/**
 * See {@link isc.TourStep.allowDropOnDescendants TourStep.allowDropOnDescendants}.
 */
allowDropOnDescendants?: boolean;

/**
 * See {@link isc.TourStep.showInputValidationMessage TourStep.showInputValidationMessage}.
 */
showInputValidationMessage?: boolean;

/**
 * See {@link isc.TourStep.title TourStep.title}.
 */
title?: string;

/**
 * See {@link isc.TourStep.expectedValueCaseSensitive TourStep.expectedValueCaseSensitive}.
 */
expectedValueCaseSensitive?: boolean;

/**
 * See {@link isc.TourStep.target TourStep.target}.
 */
target?: string;

/**
 * See {@link isc.TourStep.actionButtonTitle TourStep.actionButtonTitle}.
 */
actionButtonTitle?: string;

/**
 * See {@link isc.TourStep.showActionButton TourStep.showActionButton}.
 */
showActionButton?: boolean;

/**
 * See {@link isc.TourStep.instructions TourStep.instructions}.
 */
instructions?: string;

/**
 * See {@link isc.TourStep.showOutline TourStep.showOutline}.
 */
showOutline?: boolean;

/**
 * See {@link isc.TourStep.autoComplete TourStep.autoComplete}.
 */
autoComplete?: boolean;

/**
 * See {@link isc.TourStep.actionType TourStep.actionType}.
 */
actionType?: string;

/**
 * See {@link isc.TourStep.showArrow TourStep.showArrow}.
 */
showArrow?: boolean;

/**
 * See {@link isc.TourStep.windowDefaults TourStep.windowDefaults}.
 */
windowDefaults?: Canvas;

/**
 * See {@link isc.TourStep.dropTarget TourStep.dropTarget}.
 */
dropTarget?: string;

/**
 * See {@link isc.TourStep.inputValidationNotifyDelay TourStep.inputValidationNotifyDelay}.
 */
inputValidationNotifyDelay?: number;

/**
 * See {@link isc.TourStep.cancelButtonTitle TourStep.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.TourStep.expectedValue TourStep.expectedValue}.
 */
expectedValue?: string | boolean | number | Date;

/**
 * See {@link isc.TourStep.showPointer TourStep.showPointer}.
 */
showPointer?: boolean;

/**
 * See {@link isc.TourStep.targetViewConstructor TourStep.targetViewConstructor}.
 */
targetViewConstructor?: string;

/**
 * See {@link isc.TourStep.targetViewDefaults TourStep.targetViewDefaults}.
 */
targetViewDefaults?: Canvas;

/**
 * See {@link isc.TourStep.inputValidation TourStep.inputValidation}.
 */
inputValidation?: string;

/**
 * See {@link isc.TourStep.showCancelButton TourStep.showCancelButton}.
 */
showCancelButton?: boolean;

/**
 * See {@link isc.TourStep.inputValidationNotifyMessage TourStep.inputValidationNotifyMessage}.
 */
inputValidationNotifyMessage?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TourStep wraps the SmartClient widget class
 * {@link isc.TourStep TourStep} for React, allowing you to import
 * TourStep for use in React JS and JSX.
 * @class
 * @extends UserTask
 */
declare class TourStep extends UserTask {
    props: AsComponentXML<TourStepProps>;
}
