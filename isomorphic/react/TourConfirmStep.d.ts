import React from 'react';
import { UserTask, UserTaskProps } from './UserTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface TourConfirmStepProps extends UserTaskProps {

/**
 * See {@link isc.TourConfirmStep.targetViewDefaults TourConfirmStep.targetViewDefaults}.
 */
targetViewDefaults?: Canvas;

/**
 * See {@link isc.TourConfirmStep.instructions TourConfirmStep.instructions}.
 */
instructions?: string;

/**
 * See {@link isc.TourConfirmStep.title TourConfirmStep.title}.
 */
title?: string;

/**
 * See {@link isc.TourConfirmStep.failureElement TourConfirmStep.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.TourConfirmStep.targetViewConstructor TourConfirmStep.targetViewConstructor}.
 */
targetViewConstructor?: string;

/**
 * See {@link isc.TourConfirmStep.nextElement TourConfirmStep.nextElement}.
 */
nextElement?: string;

/**
 * See {@link isc.TourConfirmStep.showCancelButton TourConfirmStep.showCancelButton}.
 */
showCancelButton?: boolean;

/**
 * See {@link isc.TourConfirmStep.actionButtonTitle TourConfirmStep.actionButtonTitle}.
 */
actionButtonTitle?: string;

/**
 * See {@link isc.TourConfirmStep.cancelButtonTitle TourConfirmStep.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.TourConfirmStep.showActionButton TourConfirmStep.showActionButton}.
 */
showActionButton?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TourConfirmStep wraps the SmartClient widget class
 * {@link isc.TourConfirmStep TourConfirmStep} for React, allowing you to import
 * TourConfirmStep for use in React JS and JSX.
 * @class
 * @extends UserTask
 */
declare class TourConfirmStep extends UserTask {
    props: AsComponentXML<TourConfirmStepProps>;
}
