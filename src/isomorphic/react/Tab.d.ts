import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface TabProps {

/**
 * See {@link isc.Tab.pane Tab.pane}.
 */
pane?: Canvas | string;

/**
 * See {@link isc.Tab.prompt Tab.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.Tab.visibleWhen Tab.visibleWhen}.
 */
visibleWhen?: Criteria;

/**
 * See {@link isc.Tab.canClose Tab.canClose}.
 */
canClose?: boolean;

/**
 * See {@link isc.Tab.tabDeselected() Tab.tabDeselected()}.
 */
tabDeselected?: Function;

/**
 * See {@link isc.Tab.paneMargin Tab.paneMargin}.
 */
paneMargin?: number;

/**
 * See {@link isc.Tab.ID Tab.ID}.
 */
ID?: string;

/**
 * See {@link isc.Tab.iconHeight Tab.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.Tab.iconWidth Tab.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.Tab.hidden Tab.hidden}.
 */
hidden?: boolean;

/**
 * See {@link isc.Tab.canAdaptWidth Tab.canAdaptWidth}.
 */
canAdaptWidth?: boolean;

/**
 * See {@link isc.Tab.disabled Tab.disabled}.
 */
disabled?: boolean;

/**
 * See {@link isc.Tab.icon Tab.icon}.
 */
icon?: string;

/**
 * See {@link isc.Tab.iconSize Tab.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.Tab.pickerTitle Tab.pickerTitle}.
 */
pickerTitle?: string;

/**
 * See {@link isc.Tab.tabSelected() Tab.tabSelected()}.
 */
tabSelected?: Function;

/**
 * See {@link isc.Tab.canEditTitle Tab.canEditTitle}.
 */
canEditTitle?: boolean;

/**
 * See {@link isc.Tab.name Tab.name}.
 */
name?: string;

/**
 * See {@link isc.Tab.canReorder Tab.canReorder}.
 */
canReorder?: boolean;

/**
 * See {@link isc.Tab.title Tab.title}.
 */
title?: string;

/**
 * See {@link isc.Tab.closeIconSize Tab.closeIconSize}.
 */
closeIconSize?: number;

/**
 * See {@link isc.Tab.closeIcon Tab.closeIcon}.
 */
closeIcon?: string;

/**
 * See {@link isc.Tab.width Tab.width}.
 */
width?: number;

/**
 * See {@link isc.Tab.enableWhen Tab.enableWhen}.
 */
enableWhen?: Criteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Tab wraps the SmartClient object
 * {@link isc.Tab Tab} for React, allowing you to import
 * Tab for use in React JS and JSX.
 * @class
 */
declare class Tab extends ILogicalComponent {
    props: AsComponentXML<TabProps>;
}
