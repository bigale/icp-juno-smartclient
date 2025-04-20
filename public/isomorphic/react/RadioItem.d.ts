import React from 'react';
import { NativeCheckboxItem, NativeCheckboxItemProps } from './NativeCheckboxItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface RadioItemProps extends NativeCheckboxItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RadioItem wraps the SmartClient widget class
 * {@link isc.RadioItem RadioItem} for React, allowing you to import
 * RadioItem for use in React JS and JSX.
 * @class
 * @extends NativeCheckboxItem
 */
declare class RadioItem extends NativeCheckboxItem {
    props: AsComponentXML<RadioItemProps>;
}
