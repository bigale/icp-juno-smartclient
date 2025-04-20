import React from 'react';
import { ButtonItem, ButtonItemProps } from './ButtonItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface CancelItemProps extends ButtonItemProps {

/**
 * See {@link isc.CancelItem.title CancelItem.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CancelItem wraps the SmartClient widget class
 * {@link isc.CancelItem CancelItem} for React, allowing you to import
 * CancelItem for use in React JS and JSX.
 * @class
 * @extends ButtonItem
 */
declare class CancelItem extends ButtonItem {
    props: AsComponentXML<CancelItemProps>;
}
