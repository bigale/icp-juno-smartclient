import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface StaticTextItemProps extends FormItemProps {

/**
 * See {@link isc.StaticTextItem.applyAlignToText StaticTextItem.applyAlignToText}.
 */
applyAlignToText?: boolean;

/**
 * See {@link isc.StaticTextItem.canSelectText StaticTextItem.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.StaticTextItem.wrap StaticTextItem.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.StaticTextItem.applyHeightToTextBox StaticTextItem.applyHeightToTextBox}.
 */
applyHeightToTextBox?: boolean;

/**
 * See {@link isc.StaticTextItem.defaultValue StaticTextItem.defaultValue}.
 */
defaultValue?: string;

/**
 * See {@link isc.StaticTextItem.editProxyConstructor StaticTextItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.StaticTextItem.clipValue StaticTextItem.clipValue}.
 */
clipValue?: boolean;

/**
 * See {@link isc.StaticTextItem.escapeHTML StaticTextItem.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.StaticTextItem.outputAsHTML StaticTextItem.outputAsHTML}.
 */
outputAsHTML?: boolean;

/**
 * See {@link isc.StaticTextItem.dateFormatter StaticTextItem.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.StaticTextItem.textBoxStyle StaticTextItem.textBoxStyle}.
 */
textBoxStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StaticTextItem wraps the SmartClient widget class
 * {@link isc.StaticTextItem StaticTextItem} for React, allowing you to import
 * StaticTextItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class StaticTextItem extends FormItem {
    props: AsComponentXML<StaticTextItemProps>;
}
