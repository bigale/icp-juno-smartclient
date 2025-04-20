import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface AddScreenTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.AddScreenTask.screenName AddScreenTask.screenName}.
 */
screenName?: string;

/**
 * See {@link isc.AddScreenTask.title AddScreenTask.title}.
 */
title?: string;

/**
 * See {@link isc.AddScreenTask.dataContextBinding AddScreenTask.dataContextBinding}.
 */
dataContextBinding?: DataContextBinding;

/**
 * See {@link isc.AddScreenTask.titleFormula AddScreenTask.titleFormula}.
 */
titleFormula?: UserSummary;

/**
 * See {@link isc.AddScreenTask.canClose AddScreenTask.canClose}.
 */
canClose?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AddScreenTask wraps the SmartClient widget class
 * {@link isc.AddScreenTask AddScreenTask} for React, allowing you to import
 * AddScreenTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class AddScreenTask extends ComponentTask {
    props: AsComponentXML<AddScreenTaskProps>;
}
