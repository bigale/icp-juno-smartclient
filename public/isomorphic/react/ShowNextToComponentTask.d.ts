import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface ShowNextToComponentTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.ShowNextToComponentTask.canOcclude ShowNextToComponentTask.canOcclude}.
 */
canOcclude?: boolean;

/**
 * See {@link isc.ShowNextToComponentTask.side ShowNextToComponentTask.side}.
 */
side?: string;

/**
 * See {@link isc.ShowNextToComponentTask.nextToComponentId ShowNextToComponentTask.nextToComponentId}.
 */
nextToComponentId?: string;

/**
 * See {@link isc.ShowNextToComponentTask.skipAnimation ShowNextToComponentTask.skipAnimation}.
 */
skipAnimation?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ShowNextToComponentTask wraps the SmartClient widget class
 * {@link isc.ShowNextToComponentTask ShowNextToComponentTask} for React, allowing you to import
 * ShowNextToComponentTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class ShowNextToComponentTask extends ComponentTask {
    props: AsComponentXML<ShowNextToComponentTaskProps>;
}
