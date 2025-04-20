import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridSaveAllEditsTaskProps extends ComponentTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridSaveAllEditsTask wraps the SmartClient widget class
 * {@link isc.GridSaveAllEditsTask GridSaveAllEditsTask} for React, allowing you to import
 * GridSaveAllEditsTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridSaveAllEditsTask extends ComponentTask {
    props: AsComponentXML<GridSaveAllEditsTaskProps>;
}
