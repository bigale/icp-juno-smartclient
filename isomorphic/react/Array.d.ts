import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ArrayProps {

/**
 * See {@link isc.Array.find() Array.find()}.
 */
find?: Function;

/**
 * See {@link isc.Array.equals() Array.equals()}.
 */
equals?: Function;

/**
 * See {@link isc.Array.setSort() Array.setSort()}.
 */
setSort?: Function;

/**
 * See {@link isc.Array.slide() Array.slide()}.
 */
slide?: Function;

/**
 * See {@link isc.Array.unsort() Array.unsort()}.
 */
unsort?: Function;

/**
 * See {@link isc.Array.add() Array.add()}.
 */
add?: Function;

/**
 * See {@link isc.Array.getRange() Array.getRange()}.
 */
getRange?: Function;

/**
 * See {@link isc.Array.getValueMap() Array.getValueMap()}.
 */
getValueMap?: Function;

/**
 * See {@link isc.Array.findNextIndex() Array.findNextIndex()}.
 */
findNextIndex?: Function;

/**
 * See {@link isc.Array.setLength() Array.setLength()}.
 */
setLength?: Function;

/**
 * See {@link isc.Array.addList() Array.addList()}.
 */
addList?: Function;

/**
 * See {@link isc.Array.slideRange() Array.slideRange()}.
 */
slideRange?: Function;

/**
 * See {@link isc.Array.makeIndex() Array.makeIndex()}.
 */
makeIndex?: Function;

/**
 * See {@link isc.Array.max() Array.max()}.
 */
max?: Function;

/**
 * See {@link isc.Array.getItems() Array.getItems()}.
 */
getItems?: Function;

/**
 * See {@link isc.Array.sortByProperty() Array.sortByProperty()}.
 */
sortByProperty?: Function;

/**
 * See {@link isc.Array.or() Array.or()}.
 */
or?: Function;

/**
 * See {@link isc.Array.containsProperty() Array.containsProperty()}.
 */
containsProperty?: Function;

/**
 * See {@link isc.Array.clearProperty() Array.clearProperty()}.
 */
clearProperty?: Function;

/**
 * See {@link isc.Array.isEmpty() Array.isEmpty()}.
 */
isEmpty?: Function;

/**
 * See {@link isc.Array.findIndex() Array.findIndex()}.
 */
findIndex?: Function;

/**
 * See {@link isc.Array.map() Array.map()}.
 */
map?: Function;

/**
 * See {@link isc.Array.min() Array.min()}.
 */
min?: Function;

/**
 * See {@link isc.Array.lastIndexOf() Array.lastIndexOf()}.
 */
lastIndexOf?: Function;

/**
 * See {@link isc.Array.addAt() Array.addAt()}.
 */
addAt?: Function;

/**
 * See {@link isc.Array.contains() Array.contains()}.
 */
contains?: Function;

/**
 * See {@link isc.Array.findAll() Array.findAll()}.
 */
findAll?: Function;

/**
 * See {@link isc.Array.containsAll() Array.containsAll()}.
 */
containsAll?: Function;

/**
 * See {@link isc.Array.last() Array.last()}.
 */
last?: Function;

/**
 * See {@link isc.Array.sum() Array.sum()}.
 */
sum?: Function;

/**
 * See {@link isc.Array.indexOf() Array.indexOf()}.
 */
indexOf?: Function;

/**
 * See {@link isc.Array.getUniqueItems() Array.getUniqueItems()}.
 */
getUniqueItems?: Function;

/**
 * See {@link isc.Array.dataChanged() Array.dataChanged()}.
 */
dataChanged?: Function;

/**
 * See {@link isc.Array.set() Array.set()}.
 */
set?: Function;

/**
 * See {@link isc.Array.and() Array.and()}.
 */
and?: Function;

/**
 * See {@link isc.Array.intersect() Array.intersect()}.
 */
intersect?: Function;

/**
 * See {@link isc.Array.first() Array.first()}.
 */
first?: Function;

/**
 * See {@link isc.Array.getProperty() Array.getProperty()}.
 */
getProperty?: Function;

/**
 * See {@link isc.Array.duplicate() Array.duplicate()}.
 */
duplicate?: Function;

/**
 * See {@link isc.Array.removeList() Array.removeList()}.
 */
removeList?: Function;

/**
 * See {@link isc.Array.removeAt() Array.removeAt()}.
 */
removeAt?: Function;

/**
 * See {@link isc.Array.callMethod() Array.callMethod()}.
 */
callMethod?: Function;

/**
 * See {@link isc.Array.getLength() Array.getLength()}.
 */
getLength?: Function;

/**
 * See {@link isc.Array.remove() Array.remove()}.
 */
remove?: Function;

/**
 * See {@link isc.Array.addListAt() Array.addListAt()}.
 */
addListAt?: Function;

/**
 * See {@link isc.Array.get() Array.get()}.
 */
get?: Function;

/**
 * See {@link isc.Array.setProperty() Array.setProperty()}.
 */
setProperty?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Array wraps the SmartClient object
 * {@link isc.Array Array} for React, allowing you to import
 * Array for use in React JS and JSX.
 * @class
 */
declare class Array extends ILogicalComponent {
    props: AsComponentXML<ArrayProps>;
}
