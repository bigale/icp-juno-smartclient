import React from 'react';
import { ButtonItem, ButtonItemProps } from './ButtonItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SubmitItemProps extends ButtonItemProps {

/**
 * See {@link isc.SubmitItem.title SubmitItem.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SubmitItem wraps the SmartClient widget class
 * {@link isc.SubmitItem SubmitItem} for React, allowing you to import
 * SubmitItem for use in React JS and JSX.
 * @class
 * @extends ButtonItem
 */
declare class SubmitItem extends ButtonItem {
    props: AsComponentXML<SubmitItemProps>;
}
