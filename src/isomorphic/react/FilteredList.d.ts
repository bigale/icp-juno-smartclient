import React from 'react';
import { ResultSet, ResultSetProps } from './ResultSet';
import { AsComponentXML } from './core/ReactComponent';


declare interface FilteredListProps extends ResultSetProps {

/**
 * See {@link isc.FilteredList.dataSource FilteredList.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.FilteredList.setAllRows() FilteredList.setAllRows()}.
 */
setAllRows?: Function;

/**
 * See {@link isc.FilteredList.allRows FilteredList.allRows}.
 */
allRows?: Record[];

/**
 * See {@link isc.FilteredList.invalidateCache() FilteredList.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.FilteredList.modifiable FilteredList.modifiable}.
 */
modifiable?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FilteredList wraps the SmartClient widget class
 * {@link isc.FilteredList FilteredList} for React, allowing you to import
 * FilteredList for use in React JS and JSX.
 * @class
 * @extends ResultSet
 */
declare class FilteredList extends ResultSet {
    props: AsComponentXML<FilteredListProps>;
}
