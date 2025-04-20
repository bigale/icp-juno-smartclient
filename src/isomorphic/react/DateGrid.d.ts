import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateGridProps extends ListGridProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateGrid wraps the SmartClient widget class
 * {@link isc.DateGrid DateGrid} for React, allowing you to import
 * DateGrid for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class DateGrid extends ListGrid {
    props: AsComponentXML<DateGridProps>;
}
