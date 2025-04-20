import React from 'react';
import { SpacerItem, SpacerItemProps } from './SpacerItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface RowSpacerItemProps extends SpacerItemProps {

/**
 * See {@link isc.RowSpacerItem.colSpan RowSpacerItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.RowSpacerItem.startRow RowSpacerItem.startRow}.
 */
startRow?: boolean;

/**
 * See {@link isc.RowSpacerItem.showTitle RowSpacerItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.RowSpacerItem.endRow RowSpacerItem.endRow}.
 */
endRow?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RowSpacerItem wraps the SmartClient widget class
 * {@link isc.RowSpacerItem RowSpacerItem} for React, allowing you to import
 * RowSpacerItem for use in React JS and JSX.
 * @class
 * @extends SpacerItem
 */
declare class RowSpacerItem extends SpacerItem {
    props: AsComponentXML<RowSpacerItemProps>;
}
