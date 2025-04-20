import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface SetScreenDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.SetScreenDataTask.dataContextBinding SetScreenDataTask.dataContextBinding}.
 */
dataContextBinding?: DataContextBinding;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SetScreenDataTask wraps the SmartClient widget class
 * {@link isc.SetScreenDataTask SetScreenDataTask} for React, allowing you to import
 * SetScreenDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class SetScreenDataTask extends ComponentTask {
    props: AsComponentXML<SetScreenDataTaskProps>;
}
