import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface MenuProps extends ListGridProps {

/**
 * See {@link isc.Menu.baseStyle Menu.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.Menu.setItemEnabled() Menu.setItemEnabled()}.
 */
setItemEnabled?: Function;

/**
 * See {@link isc.Menu.target Menu.target}.
 */
target?: Canvas;

/**
 * See {@link isc.Menu.canSaveSearches Menu.canSaveSearches}.
 */
canSaveSearches?: boolean;

/**
 * See {@link isc.Menu.iconBodyStyleName Menu.iconBodyStyleName}.
 */
iconBodyStyleName?: string;

/**
 * See {@link isc.Menu.getVisibleItemNum() Menu.getVisibleItemNum()}.
 */
getVisibleItemNum?: Function;

/**
 * See {@link isc.Menu.fillSpaceStyleName Menu.fillSpaceStyleName}.
 */
fillSpaceStyleName?: string;

/**
 * See {@link isc.Menu.setItemHidden() Menu.setItemHidden()}.
 */
setItemHidden?: Function;

/**
 * See {@link isc.Menu.submenuFieldDefaults Menu.submenuFieldDefaults}.
 */
submenuFieldDefaults?: ListGridField;

/**
 * See {@link isc.Menu.setItemProperties() Menu.setItemProperties()}.
 */
setItemProperties?: Function;

/**
 * See {@link isc.Menu.placement Menu.placement}.
 */
placement?: string;

/**
 * See {@link isc.Menu.submenuDisabledImage Menu.submenuDisabledImage}.
 */
submenuDisabledImage?: string | ImgHTMLProperties;

/**
 * See {@link isc.Menu.filterHiddenItems Menu.filterHiddenItems}.
 */
filterHiddenItems?: boolean;

/**
 * See {@link isc.Menu.fetchSubmenus Menu.fetchSubmenus}.
 */
fetchSubmenus?: boolean;

/**
 * See {@link isc.Menu.setShowIcons() Menu.setShowIcons()}.
 */
setShowIcons?: Function;

/**
 * See {@link isc.Menu.navigationBarProperties Menu.navigationBarProperties}.
 */
navigationBarProperties?: NavigationBar;

/**
 * See {@link isc.Menu.getSubmenu() Menu.getSubmenu()}.
 */
getSubmenu?: Function;

/**
 * See {@link isc.Menu.iconWidth Menu.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.Menu.getItemNum() Menu.getItemNum()}.
 */
getItemNum?: Function;

/**
 * See {@link isc.Menu.items Menu.items}.
 */
items?: MenuItem[];

/**
 * See {@link isc.Menu.dataProperties Menu.dataProperties}.
 */
dataProperties?: Tree;

/**
 * See {@link isc.Menu.setCriteria() Menu.setCriteria()}.
 */
setCriteria?: Function;

/**
 * See {@link isc.Menu.submenuConstructor Menu.submenuConstructor}.
 */
submenuConstructor?: string;

/**
 * See {@link isc.Menu.submenuImage Menu.submenuImage}.
 */
submenuImage?: string | ImgHTMLProperties;

/**
 * See {@link isc.Menu.setItemIcon() Menu.setItemIcon()}.
 */
setItemIcon?: Function;

/**
 * See {@link isc.Menu.initialCriteria Menu.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.Menu.useKeys Menu.useKeys}.
 */
useKeys?: boolean;

/**
 * See {@link isc.Menu.showSubmenus Menu.showSubmenus}.
 */
showSubmenus?: boolean;

/**
 * See {@link isc.Menu.iconFieldProperties Menu.iconFieldProperties}.
 */
iconFieldProperties?: ListGridField;

/**
 * See {@link isc.Menu.getData() Menu.getData()}.
 */
getData?: Function;

/**
 * See {@link isc.Menu.canShowFilterEditor Menu.canShowFilterEditor}.
 */
canShowFilterEditor?: boolean;

/**
 * See {@link isc.Menu.showEdges Menu.showEdges}.
 */
showEdges?: boolean;

/**
 * See {@link isc.Menu.setItemTitle() Menu.setItemTitle()}.
 */
setItemTitle?: Function;

/**
 * See {@link isc.Menu.itemClick() Menu.itemClick()}.
 */
itemClick?: Function;

/**
 * See {@link isc.Menu.autoFetchData Menu.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.Menu.cellHeight Menu.cellHeight}.
 */
cellHeight?: number;

/**
 * See {@link isc.Menu.getAllItems() Menu.getAllItems()}.
 */
getAllItems?: Function;

/**
 * See {@link isc.Menu.showSubmenu() Menu.showSubmenu()}.
 */
showSubmenu?: Function;

/**
 * See {@link isc.Menu.navStackProperties Menu.navStackProperties}.
 */
navStackProperties?: Canvas;

/**
 * See {@link isc.Menu.emptyMessage Menu.emptyMessage}.
 */
emptyMessage?: string;

/**
 * See {@link isc.Menu.iconHeight Menu.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.Menu.defaultWidth Menu.defaultWidth}.
 */
defaultWidth?: number;

/**
 * See {@link isc.Menu.canSelectParentItems Menu.canSelectParentItems}.
 */
canSelectParentItems?: boolean;

/**
 * See {@link isc.Menu.fields Menu.fields}.
 */
fields?: string[] | ListGridField[];

/**
 * See {@link isc.Menu.setData() Menu.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.Menu.showShadow Menu.showShadow}.
 */
showShadow?: boolean;

/**
 * See {@link isc.Menu.iconFillSpaceStyleName Menu.iconFillSpaceStyleName}.
 */
iconFillSpaceStyleName?: string;

/**
 * See {@link isc.Menu.getCellStyle() Menu.getCellStyle()}.
 */
getCellStyle?: Function;

/**
 * See {@link isc.Menu.cascadeAutoDismiss Menu.cascadeAutoDismiss}.
 */
cascadeAutoDismiss?: boolean;

/**
 * See {@link isc.Menu.cancelButtonTitle Menu.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.Menu.autoDraw Menu.autoDraw}.
 */
autoDraw?: boolean;

/**
 * See {@link isc.Menu.showIcons Menu.showIcons}.
 */
showIcons?: boolean;

/**
 * See {@link isc.Menu.data Menu.data}.
 */
data?: MenuItem[] | Tree;

/**
 * See {@link isc.Menu.getItem() Menu.getItem()}.
 */
getItem?: Function;

/**
 * See {@link isc.Menu.autoDismiss Menu.autoDismiss}.
 */
autoDismiss?: boolean;

/**
 * See {@link isc.Menu.dataSource Menu.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.Menu.setItems() Menu.setItems()}.
 */
setItems?: Function;

/**
 * See {@link isc.Menu.submenuDirection Menu.submenuDirection}.
 */
submenuDirection?: string;

/**
 * See {@link isc.Menu.keyFieldProperties Menu.keyFieldProperties}.
 */
keyFieldProperties?: ListGridField;

/**
 * See {@link isc.Menu.getItems() Menu.getItems()}.
 */
getItems?: Function;

/**
 * See {@link isc.Menu.setItemChecked() Menu.setItemChecked()}.
 */
setItemChecked?: Function;

/**
 * See {@link isc.Menu.alternateRecordStyles Menu.alternateRecordStyles}.
 */
alternateRecordStyles?: boolean;

/**
 * See {@link isc.Menu.checkmarkDisabledImage Menu.checkmarkDisabledImage}.
 */
checkmarkDisabledImage?: string | ImgHTMLProperties;

/**
 * See {@link isc.Menu.hideContextMenu() Menu.hideContextMenu()}.
 */
hideContextMenu?: Function;

/**
 * See {@link isc.Menu.iconFieldDefaults Menu.iconFieldDefaults}.
 */
iconFieldDefaults?: ListGridField;

/**
 * See {@link isc.Menu.showContextMenu() Menu.showContextMenu()}.
 */
showContextMenu?: Function;

/**
 * See {@link isc.Menu.itemHiddenProperty Menu.itemHiddenProperty}.
 */
itemHiddenProperty?: string;

/**
 * See {@link isc.Menu.showKeys Menu.showKeys}.
 */
showKeys?: boolean;

/**
 * See {@link isc.Menu.showAnimationEffect Menu.showAnimationEffect}.
 */
showAnimationEffect?: string;

/**
 * See {@link isc.Menu.keyFieldDefaults Menu.keyFieldDefaults}.
 */
keyFieldDefaults?: ListGridField;

/**
 * See {@link isc.Menu.bodyStyleName Menu.bodyStyleName}.
 */
bodyStyleName?: string;

/**
 * See {@link isc.Menu.editProxyConstructor Menu.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Menu.menuButtonWidth Menu.menuButtonWidth}.
 */
menuButtonWidth?: number;

/**
 * See {@link isc.Menu.autoDismissOnBlur Menu.autoDismissOnBlur}.
 */
autoDismissOnBlur?: boolean;

/**
 * See {@link isc.Menu.setShowSubmenus() Menu.setShowSubmenus()}.
 */
setShowSubmenus?: Function;

/**
 * See {@link isc.Menu.titleFieldDefaults Menu.titleFieldDefaults}.
 */
titleFieldDefaults?: ListGridField;

/**
 * See {@link isc.Menu.submenuFieldProperties Menu.submenuFieldProperties}.
 */
submenuFieldProperties?: ListGridField;

/**
 * See {@link isc.Menu.titleFieldProperties Menu.titleFieldProperties}.
 */
titleFieldProperties?: ListGridField;

/**
 * See {@link isc.Menu.fetchData() Menu.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.Menu.checkmarkImage Menu.checkmarkImage}.
 */
checkmarkImage?: string | ImgHTMLProperties;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Menu wraps the SmartClient widget class
 * {@link isc.Menu Menu} for React, allowing you to import
 * Menu for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class Menu extends ListGrid {
    props: AsComponentXML<MenuProps>;
}
