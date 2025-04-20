import React from 'react';
import { ListGridRecord, ListGridRecordProps } from './ListGridRecord';
import { AsComponentXML } from './core/ReactComponent';


declare interface MenuItemProps extends ListGridRecordProps {

/**
 * See {@link isc.MenuItem.keyTitle MenuItem.keyTitle}.
 */
keyTitle?: string;

/**
 * See {@link isc.MenuItem.iconWidth MenuItem.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.MenuItem.canSelectParent MenuItem.canSelectParent}.
 */
canSelectParent?: boolean;

/**
 * See {@link isc.MenuItem.title MenuItem.title}.
 */
title?: string;

/**
 * See {@link isc.MenuItem.enableIf() MenuItem.enableIf()}.
 */
enableIf?: Function;

/**
 * See {@link isc.MenuItem.isSeparator MenuItem.isSeparator}.
 */
isSeparator?: boolean;

/**
 * See {@link isc.MenuItem.action() MenuItem.action()}.
 */
action?: Function;

/**
 * See {@link isc.MenuItem.autoDismiss MenuItem.autoDismiss}.
 */
autoDismiss?: boolean;

/**
 * See {@link isc.MenuItem.embeddedComponentPosition MenuItem.embeddedComponentPosition}.
 */
embeddedComponentPosition?: string;

/**
 * See {@link isc.MenuItem.dynamicTitle() MenuItem.dynamicTitle()}.
 */
dynamicTitle?: Function;

/**
 * See {@link isc.MenuItem.embeddedComponentFields MenuItem.embeddedComponentFields}.
 */
embeddedComponentFields?: string[];

/**
 * See {@link isc.MenuItem.fetchSubmenus MenuItem.fetchSubmenus}.
 */
fetchSubmenus?: boolean;

/**
 * See {@link isc.MenuItem.disabledIcon MenuItem.disabledIcon}.
 */
disabledIcon?: string;

/**
 * See {@link isc.MenuItem.icon MenuItem.icon}.
 */
icon?: string;

/**
 * See {@link isc.MenuItem.dynamicIcon() MenuItem.dynamicIcon()}.
 */
dynamicIcon?: Function;

/**
 * See {@link isc.MenuItem.checked MenuItem.checked}.
 */
checked?: boolean;

/**
 * See {@link isc.MenuItem.click() MenuItem.click()}.
 */
click?: Function;

/**
 * See {@link isc.MenuItem.enabled MenuItem.enabled}.
 */
enabled?: boolean;

/**
 * See {@link isc.MenuItem.hidden MenuItem.hidden}.
 */
hidden?: boolean;

/**
 * See {@link isc.MenuItem.checkIf() MenuItem.checkIf()}.
 */
checkIf?: Function;

/**
 * See {@link isc.MenuItem.embeddedComponent MenuItem.embeddedComponent}.
 */
embeddedComponent?: Canvas;

/**
 * See {@link isc.MenuItem.visibleWhen MenuItem.visibleWhen}.
 */
visibleWhen?: AdvancedCriteria;

/**
 * See {@link isc.MenuItem.iconHeight MenuItem.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.MenuItem.enableWhen MenuItem.enableWhen}.
 */
enableWhen?: AdvancedCriteria;

/**
 * See {@link isc.MenuItem.submenu MenuItem.submenu}.
 */
submenu?: Menu;

/**
 * See {@link isc.MenuItem.keys MenuItem.keys}.
 */
keys?: KeyIdentifier | KeyIdentifier[];

/**
 * See {@link isc.MenuItem.showIconOnlyInline MenuItem.showIconOnlyInline}.
 */
showIconOnlyInline?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MenuItem wraps the SmartClient object
 * {@link isc.MenuItem MenuItem} for React, allowing you to import
 * MenuItem for use in React JS and JSX.
 * @class
 */
declare class MenuItem extends ListGridRecord {
    props: AsComponentXML<MenuItemProps>;
}
