import React from 'react';
import { ButtonItem, ButtonItemProps } from './ButtonItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ResetItemProps extends ButtonItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ResetItem wraps the SmartClient widget class
 * {@link isc.ResetItem ResetItem} for React, allowing you to import
 * ResetItem for use in React JS and JSX.
 * @class
 * @extends ButtonItem
 */
declare class ResetItem extends ButtonItem {
    props: AsComponentXML<ResetItemProps>;
}
