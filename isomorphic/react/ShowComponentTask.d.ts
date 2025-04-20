import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface ShowComponentTaskProps extends ComponentTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ShowComponentTask wraps the SmartClient widget class
 * {@link isc.ShowComponentTask ShowComponentTask} for React, allowing you to import
 * ShowComponentTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class ShowComponentTask extends ComponentTask {
    props: AsComponentXML<ShowComponentTaskProps>;
}
