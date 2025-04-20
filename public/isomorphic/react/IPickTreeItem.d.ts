import React from 'react';
import { PickTreeItem, PickTreeItemProps } from './PickTreeItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface IPickTreeItemProps extends PickTreeItemProps {

/**
 * See {@link isc.IPickTreeItem.buttonProperties IPickTreeItem.buttonProperties}.
 */
buttonProperties?: Canvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IPickTreeItem wraps the SmartClient widget class
 * {@link isc.IPickTreeItem IPickTreeItem} for React, allowing you to import
 * IPickTreeItem for use in React JS and JSX.
 * @class
 * @extends PickTreeItem
 */
declare class IPickTreeItem extends PickTreeItem {
    props: AsComponentXML<IPickTreeItemProps>;
}
