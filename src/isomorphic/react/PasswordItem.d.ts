import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface PasswordItemProps extends TextItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PasswordItem wraps the SmartClient widget class
 * {@link isc.PasswordItem PasswordItem} for React, allowing you to import
 * PasswordItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class PasswordItem extends TextItem {
    props: AsComponentXML<PasswordItemProps>;
}
