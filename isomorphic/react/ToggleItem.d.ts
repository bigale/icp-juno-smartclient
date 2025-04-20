import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToggleItemProps extends CanvasItemProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToggleItem wraps the SmartClient widget class
 * {@link isc.ToggleItem ToggleItem} for React, allowing you to import
 * ToggleItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class ToggleItem extends CanvasItem {
    props: AsComponentXML<ToggleItemProps>;
}
