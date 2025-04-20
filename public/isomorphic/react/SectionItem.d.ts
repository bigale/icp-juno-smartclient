import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionItemProps extends CanvasItemProps {

/**
 * See {@link isc.SectionItem.editProxyConstructor SectionItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.SectionItem.isExpanded() SectionItem.isExpanded()}.
 */
isExpanded?: Function;

/**
 * See {@link isc.SectionItem.canCollapse SectionItem.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.SectionItem.sectionExpanded SectionItem.sectionExpanded}.
 */
sectionExpanded?: boolean;

/**
 * See {@link isc.SectionItem.collapseSection() SectionItem.collapseSection()}.
 */
collapseSection?: Function;

/**
 * See {@link isc.SectionItem.sectionVisible SectionItem.sectionVisible}.
 */
sectionVisible?: boolean;

/**
 * See {@link isc.SectionItem.defaultValue SectionItem.defaultValue}.
 */
defaultValue?: string;

/**
 * See {@link isc.SectionItem.canTabToHeader SectionItem.canTabToHeader}.
 */
canTabToHeader?: boolean;

/**
 * See {@link isc.SectionItem.itemIds SectionItem.itemIds}.
 */
itemIds?: string[];

/**
 * See {@link isc.SectionItem.expandSection() SectionItem.expandSection()}.
 */
expandSection?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionItem wraps the SmartClient widget class
 * {@link isc.SectionItem SectionItem} for React, allowing you to import
 * SectionItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class SectionItem extends CanvasItem {
    props: AsComponentXML<SectionItemProps>;
}
