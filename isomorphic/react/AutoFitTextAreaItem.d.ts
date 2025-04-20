import React from 'react';
import { TextAreaItem, TextAreaItemProps } from './TextAreaItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface AutoFitTextAreaItemProps extends TextAreaItemProps {

/**
 * See {@link isc.AutoFitTextAreaItem.maxHeight AutoFitTextAreaItem.maxHeight}.
 */
maxHeight?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AutoFitTextAreaItem wraps the SmartClient widget class
 * {@link isc.AutoFitTextAreaItem AutoFitTextAreaItem} for React, allowing you to import
 * AutoFitTextAreaItem for use in React JS and JSX.
 * @class
 * @extends TextAreaItem
 */
declare class AutoFitTextAreaItem extends TextAreaItem {
    props: AsComponentXML<AutoFitTextAreaItemProps>;
}
