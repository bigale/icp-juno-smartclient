import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridDiscardAllEditsTaskProps extends ComponentTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridDiscardAllEditsTask wraps the SmartClient widget class
 * {@link isc.GridDiscardAllEditsTask GridDiscardAllEditsTask} for React, allowing you to import
 * GridDiscardAllEditsTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridDiscardAllEditsTask extends ComponentTask {
    props: AsComponentXML<GridDiscardAllEditsTaskProps>;
}
