import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface LinkItemProps extends TextItemProps {

/**
 * See {@link isc.LinkItem.disableIconsOnReadOnly LinkItem.disableIconsOnReadOnly}.
 */
disableIconsOnReadOnly?: boolean;

/**
 * See {@link isc.LinkItem.linkTitle LinkItem.linkTitle}.
 */
linkTitle?: string;

/**
 * See {@link isc.LinkItem.iconVAlign LinkItem.iconVAlign}.
 */
iconVAlign?: string;

/**
 * See {@link isc.LinkItem.readOnlyDisplay LinkItem.readOnlyDisplay}.
 */
readOnlyDisplay?: string;

/**
 * See {@link isc.LinkItem.setLinkTitle() LinkItem.setLinkTitle()}.
 */
setLinkTitle?: Function;

/**
 * See {@link isc.LinkItem.target LinkItem.target}.
 */
target?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LinkItem wraps the SmartClient widget class
 * {@link isc.LinkItem LinkItem} for React, allowing you to import
 * LinkItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class LinkItem extends TextItem {
    props: AsComponentXML<LinkItemProps>;
}
