import React from 'react';
import { TextItem, TextItemProps } from './TextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DataPathItemProps extends TextItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DataPathItem wraps the SmartClient widget class
 * {@link isc.DataPathItem DataPathItem} for React, allowing you to import
 * DataPathItem for use in React JS and JSX.
 * @class
 * @extends TextItem
 */
declare class DataPathItem extends TextItem {
    props: AsComponentXML<DataPathItemProps>;
}
