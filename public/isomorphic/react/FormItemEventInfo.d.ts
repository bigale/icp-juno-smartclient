import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormItemEventInfoProps {

/**
 * See {@link isc.FormItemEventInfo.overInlineError FormItemEventInfo.overInlineError}.
 */
overInlineError?: boolean;

/**
 * See {@link isc.FormItemEventInfo.item FormItemEventInfo.item}.
 */
item?: FormItem;

/**
 * See {@link isc.FormItemEventInfo.overTitle FormItemEventInfo.overTitle}.
 */
overTitle?: boolean;

/**
 * See {@link isc.FormItemEventInfo.icon FormItemEventInfo.icon}.
 */
icon?: string;

/**
 * See {@link isc.FormItemEventInfo.overTextBox FormItemEventInfo.overTextBox}.
 */
overTextBox?: boolean;

/**
 * See {@link isc.FormItemEventInfo.overElement FormItemEventInfo.overElement}.
 */
overElement?: boolean;

/**
 * See {@link isc.FormItemEventInfo.overItem FormItemEventInfo.overItem}.
 */
overItem?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormItemEventInfo wraps the SmartClient object
 * {@link isc.FormItemEventInfo FormItemEventInfo} for React, allowing you to import
 * FormItemEventInfo for use in React JS and JSX.
 * @class
 */
declare class FormItemEventInfo extends ILogicalComponent {
    props: AsComponentXML<FormItemEventInfoProps>;
}
