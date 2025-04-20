import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SelectOtherItemProps {

/**
 * See {@link isc.SelectOtherItem.selectOtherPrompt SelectOtherItem.selectOtherPrompt}.
 */
selectOtherPrompt?: string;

/**
 * See {@link isc.SelectOtherItem.separatorTitle SelectOtherItem.separatorTitle}.
 */
separatorTitle?: string;

/**
 * See {@link isc.SelectOtherItem.otherTitle SelectOtherItem.otherTitle}.
 */
otherTitle?: string;

/**
 * See {@link isc.SelectOtherItem.otherValue SelectOtherItem.otherValue}.
 */
otherValue?: string;

/**
 * See {@link isc.SelectOtherItem.dialogWidth SelectOtherItem.dialogWidth}.
 */
dialogWidth?: number;

/**
 * See {@link isc.SelectOtherItem.separatorValue SelectOtherItem.separatorValue}.
 */
separatorValue?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SelectOtherItem wraps the non-rendered SmartClient class
 * {@link isc.SelectOtherItem SelectOtherItem} for React, allowing you to import
 *  SelectOtherItem for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SelectOtherItem extends ILogicalComponent {
    props: AsComponentXML<SelectOtherItemProps>;
}
