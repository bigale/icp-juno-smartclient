import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface SetTitleTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.SetTitleTask.targetFieldName SetTitleTask.targetFieldName}.
 */
targetFieldName?: string;

/**
 * See {@link isc.SetTitleTask.targetSectionName SetTitleTask.targetSectionName}.
 */
targetSectionName?: string;

/**
 * See {@link isc.SetTitleTask.title SetTitleTask.title}.
 */
title?: string;

/**
 * See {@link isc.SetTitleTask.textFormula SetTitleTask.textFormula}.
 */
textFormula?: UserSummary;

/**
 * See {@link isc.SetTitleTask.targetTabName SetTitleTask.targetTabName}.
 */
targetTabName?: string | string;

/**
 * See {@link isc.SetTitleTask.targetSectionTitle SetTitleTask.targetSectionTitle}.
 */
targetSectionTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SetTitleTask wraps the SmartClient widget class
 * {@link isc.SetTitleTask SetTitleTask} for React, allowing you to import
 * SetTitleTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class SetTitleTask extends ComponentTask {
    props: AsComponentXML<SetTitleTaskProps>;
}
