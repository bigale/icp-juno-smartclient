import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface NavigateSplitPaneTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.NavigateSplitPaneTask.showRecursively NavigateSplitPaneTask.showRecursively}.
 */
showRecursively?: boolean;

/**
 * See {@link isc.NavigateSplitPaneTask.targetPane NavigateSplitPaneTask.targetPane}.
 */
targetPane?: string;

/**
 * See {@link isc.NavigateSplitPaneTask.title NavigateSplitPaneTask.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NavigateSplitPaneTask wraps the SmartClient widget class
 * {@link isc.NavigateSplitPaneTask NavigateSplitPaneTask} for React, allowing you to import
 * NavigateSplitPaneTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class NavigateSplitPaneTask extends ComponentTask {
    props: AsComponentXML<NavigateSplitPaneTaskProps>;
}
