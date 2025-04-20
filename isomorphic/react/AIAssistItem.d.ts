import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIAssistItemProps extends TextItemProps {

/**
 * See {@link isc.AIAssistItem.rootCanvas AIAssistItem.rootCanvas}.
 */
rootCanvas?: Canvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIAssistItem wraps the SmartClient widget class
 * {@link isc.AIAssistItem AIAssistItem} for React, allowing you to import
 * AIAssistItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class AIAssistItem extends TextItem {
    props: AsComponentXML<AIAssistItemProps>;
}
