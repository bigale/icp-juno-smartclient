import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface TabSetProps extends CanvasProps {

/**
 * See {@link isc.TabSet.tabIconClick() TabSet.tabIconClick()}.
 */
tabIconClick?: Function;

/**
 * See {@link isc.TabSet.moreTabPaneProperties TabSet.moreTabPaneProperties}.
 */
moreTabPaneProperties?: VLayout | Canvas;

/**
 * See {@link isc.TabSet.bottomEdgeSizes TabSet.bottomEdgeSizes}.
 */
bottomEdgeSizes?: EdgeSizes;

/**
 * See {@link isc.TabSet.symmetricEdges TabSet.symmetricEdges}.
 */
symmetricEdges?: boolean;

/**
 * See {@link isc.TabSet.setPaneContainerOverflow() TabSet.setPaneContainerOverflow()}.
 */
setPaneContainerOverflow?: Function;

/**
 * See {@link isc.TabSet.tabDeselected() TabSet.tabDeselected()}.
 */
tabDeselected?: Function;

/**
 * See {@link isc.TabSet.getTabObject() TabSet.getTabObject()}.
 */
getTabObject?: Function;

/**
 * See {@link isc.TabSet.tabBarPosition TabSet.tabBarPosition}.
 */
tabBarPosition?: string;

/**
 * See {@link isc.TabSet.titleEditorProperties TabSet.titleEditorProperties}.
 */
titleEditorProperties?: TextItem | TextItem;

/**
 * See {@link isc.TabSet.tabBarProperties TabSet.tabBarProperties}.
 */
tabBarProperties?: TabBar | TabBar;

/**
 * See {@link isc.TabSet.setCanCloseTabs() TabSet.setCanCloseTabs()}.
 */
setCanCloseTabs?: Function;

/**
 * See {@link isc.TabSet.addTab() TabSet.addTab()}.
 */
addTab?: Function;

/**
 * See {@link isc.TabSet.cancelTabTitleEditing() TabSet.cancelTabTitleEditing()}.
 */
cancelTabTitleEditing?: Function;

/**
 * See {@link isc.TabSet.showTabBar TabSet.showTabBar}.
 */
showTabBar?: boolean;

/**
 * See {@link isc.TabSet.simpleTabIconOnlyBaseStyle TabSet.simpleTabIconOnlyBaseStyle}.
 */
simpleTabIconOnlyBaseStyle?: string;

/**
 * See {@link isc.TabSet.canAddTabs TabSet.canAddTabs}.
 */
canAddTabs?: boolean;

/**
 * See {@link isc.TabSet.hideTab() TabSet.hideTab()}.
 */
hideTab?: Function;

/**
 * See {@link isc.TabSet.scrollerButtonSize TabSet.scrollerButtonSize}.
 */
scrollerButtonSize?: number;

/**
 * See {@link isc.TabSet.removeTab() TabSet.removeTab()}.
 */
removeTab?: Function;

/**
 * See {@link isc.TabSet.showTabScroller TabSet.showTabScroller}.
 */
showTabScroller?: boolean;

/**
 * See {@link isc.TabSet.tabBarControlLayoutProperties TabSet.tabBarControlLayoutProperties}.
 */
tabBarControlLayoutProperties?: Layout;

/**
 * See {@link isc.TabSet.editTabTitle() TabSet.editTabTitle()}.
 */
editTabTitle?: Function;

/**
 * See {@link isc.TabSet.moreTabPaneNavBarProperties TabSet.moreTabPaneNavBarProperties}.
 */
moreTabPaneNavBarProperties?: NavigationBar;

/**
 * See {@link isc.TabSet.destroyPanes TabSet.destroyPanes}.
 */
destroyPanes?: boolean;

/**
 * See {@link isc.TabSet.canReorderTabs TabSet.canReorderTabs}.
 */
canReorderTabs?: boolean;

/**
 * See {@link isc.TabSet.defaultTabWidth TabSet.defaultTabWidth}.
 */
defaultTabWidth?: number;

/**
 * See {@link isc.TabSet.titleEditorTopOffset TabSet.titleEditorTopOffset}.
 */
titleEditorTopOffset?: number;

/**
 * See {@link isc.TabSet.scrollBack() TabSet.scrollBack()}.
 */
scrollBack?: Function;

/**
 * See {@link isc.TabSet.setTabPickerTitle() TabSet.setTabPickerTitle()}.
 */
setTabPickerTitle?: Function;

/**
 * See {@link isc.TabSet.selectedTab TabSet.selectedTab}.
 */
selectedTab?: Tab | number;

/**
 * See {@link isc.TabSet.tabProperties TabSet.tabProperties}.
 */
tabProperties?: Tab;

/**
 * See {@link isc.TabSet.closeTabIcon TabSet.closeTabIcon}.
 */
closeTabIcon?: string;

/**
 * See {@link isc.TabSet.showTabContextMenu() TabSet.showTabContextMenu()}.
 */
showTabContextMenu?: Function;

/**
 * See {@link isc.TabSet.getSelectedTab() TabSet.getSelectedTab()}.
 */
getSelectedTab?: Function;

/**
 * See {@link isc.TabSet.tabs TabSet.tabs}.
 */
tabs?: Tab[];

/**
 * See {@link isc.TabSet.setTabIcon() TabSet.setTabIcon()}.
 */
setTabIcon?: Function;

/**
 * See {@link isc.TabSet.titleChanged() TabSet.titleChanged()}.
 */
titleChanged?: Function;

/**
 * See {@link isc.TabSet.canEditTabTitles TabSet.canEditTabTitles}.
 */
canEditTabTitles?: boolean;

/**
 * See {@link isc.TabSet.rightEdgeOffsets TabSet.rightEdgeOffsets}.
 */
rightEdgeOffsets?: EdgeSizes;

/**
 * See {@link isc.TabSet.moreTabPaneTableProperties TabSet.moreTabPaneTableProperties}.
 */
moreTabPaneTableProperties?: TableView;

/**
 * See {@link isc.TabSet.removeTabs() TabSet.removeTabs()}.
 */
removeTabs?: Function;

/**
 * See {@link isc.TabSet.paneMargin TabSet.paneMargin}.
 */
paneMargin?: number;

/**
 * See {@link isc.TabSet.paneContainerClassName TabSet.paneContainerClassName}.
 */
paneContainerClassName?: string;

/**
 * See {@link isc.TabSet.defaultTabHeight TabSet.defaultTabHeight}.
 */
defaultTabHeight?: number;

/**
 * See {@link isc.TabSet.symmetricScroller TabSet.symmetricScroller}.
 */
symmetricScroller?: boolean;

/**
 * See {@link isc.TabSet.moreTabImage TabSet.moreTabImage}.
 */
moreTabImage?: string;

/**
 * See {@link isc.TabSet.tabBarAlign TabSet.tabBarAlign}.
 */
tabBarAlign?: string | string;

/**
 * See {@link isc.TabSet.topEdgeOffsets TabSet.topEdgeOffsets}.
 */
topEdgeOffsets?: EdgeSizes;

/**
 * See {@link isc.TabSet.closeClick() TabSet.closeClick()}.
 */
closeClick?: Function;

/**
 * See {@link isc.TabSet.paneContainerProperties TabSet.paneContainerProperties}.
 */
paneContainerProperties?: VLayout;

/**
 * See {@link isc.TabSet.tabPickerProperties TabSet.tabPickerProperties}.
 */
tabPickerProperties?: ImgButton;

/**
 * See {@link isc.TabSet.titleEditorRightOffset TabSet.titleEditorRightOffset}.
 */
titleEditorRightOffset?: number;

/**
 * See {@link isc.TabSet.moreTabCount TabSet.moreTabCount}.
 */
moreTabCount?: number;

/**
 * See {@link isc.TabSet.tabsReordered() TabSet.tabsReordered()}.
 */
tabsReordered?: Function;

/**
 * See {@link isc.TabSet.getSelectedTabNumber() TabSet.getSelectedTabNumber()}.
 */
getSelectedTabNumber?: Function;

/**
 * See {@link isc.TabSet.getTabNumber() TabSet.getTabNumber()}.
 */
getTabNumber?: Function;

/**
 * See {@link isc.TabSet.scrollerVSrc TabSet.scrollerVSrc}.
 */
scrollerVSrc?: string;

/**
 * See {@link isc.TabSet.moreTabProperties TabSet.moreTabProperties}.
 */
moreTabProperties?: Tab | Tab;

/**
 * See {@link isc.TabSet.touchPickerButtonSize TabSet.touchPickerButtonSize}.
 */
touchPickerButtonSize?: number;

/**
 * See {@link isc.TabSet.symmetricPickerButton TabSet.symmetricPickerButton}.
 */
symmetricPickerButton?: boolean;

/**
 * See {@link isc.TabSet.pickerButtonHSrc TabSet.pickerButtonHSrc}.
 */
pickerButtonHSrc?: string;

/**
 * See {@link isc.TabSet.scrollerSrc TabSet.scrollerSrc}.
 */
scrollerSrc?: string;

/**
 * See {@link isc.TabSet.topEdgeSizes TabSet.topEdgeSizes}.
 */
topEdgeSizes?: EdgeSizes;

/**
 * See {@link isc.TabSet.disableTab() TabSet.disableTab()}.
 */
disableTab?: Function;

/**
 * See {@link isc.TabSet.showMoreTab TabSet.showMoreTab}.
 */
showMoreTab?: boolean;

/**
 * See {@link isc.TabSet.setCanCloseTab() TabSet.setCanCloseTab()}.
 */
setCanCloseTab?: Function;

/**
 * See {@link isc.TabSet.useIOSTabs TabSet.useIOSTabs}.
 */
useIOSTabs?: boolean;

/**
 * See {@link isc.TabSet.setTabTitle() TabSet.setTabTitle()}.
 */
setTabTitle?: Function;

/**
 * See {@link isc.TabSet.animateTabScrolling TabSet.animateTabScrolling}.
 */
animateTabScrolling?: boolean;

/**
 * See {@link isc.TabSet.bottomEdgeOffsets TabSet.bottomEdgeOffsets}.
 */
bottomEdgeOffsets?: EdgeSizes;

/**
 * See {@link isc.TabSet.getPaneContainerEdges() TabSet.getPaneContainerEdges()}.
 */
getPaneContainerEdges?: Function;

/**
 * See {@link isc.TabSet.getTabPane() TabSet.getTabPane()}.
 */
getTabPane?: Function;

/**
 * See {@link isc.TabSet.showTabPicker TabSet.showTabPicker}.
 */
showTabPicker?: boolean;

/**
 * See {@link isc.TabSet.paneContainerOverflow TabSet.paneContainerOverflow}.
 */
paneContainerOverflow?: string;

/**
 * See {@link isc.TabSet.leftEdgeSizes TabSet.leftEdgeSizes}.
 */
leftEdgeSizes?: EdgeSizes;

/**
 * See {@link isc.TabSet.tabBarControls TabSet.tabBarControls}.
 */
tabBarControls?: string[];

/**
 * See {@link isc.TabSet.revealChild() TabSet.revealChild()}.
 */
revealChild?: Function;

/**
 * See {@link isc.TabSet.skinImgDir TabSet.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.TabSet.scrollerHSrc TabSet.scrollerHSrc}.
 */
scrollerHSrc?: string;

/**
 * See {@link isc.TabSet.showPartialEdges TabSet.showPartialEdges}.
 */
showPartialEdges?: boolean;

/**
 * See {@link isc.TabSet.scrollerProperties TabSet.scrollerProperties}.
 */
scrollerProperties?: StretchImgButton;

/**
 * See {@link isc.TabSet.tabBarThickness TabSet.tabBarThickness}.
 */
tabBarThickness?: number;

/**
 * See {@link isc.TabSet.editProxyConstructor TabSet.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.TabSet.pickerButtonVSrc TabSet.pickerButtonVSrc}.
 */
pickerButtonVSrc?: string;

/**
 * See {@link isc.TabSet.showTab() TabSet.showTab()}.
 */
showTab?: Function;

/**
 * See {@link isc.TabSet.setTabProperties() TabSet.setTabProperties()}.
 */
setTabProperties?: Function;

/**
 * See {@link isc.TabSet.ariaCloseableSuffix TabSet.ariaCloseableSuffix}.
 */
ariaCloseableSuffix?: string;

/**
 * See {@link isc.TabSet.removeLastTab() TabSet.removeLastTab()}.
 */
removeLastTab?: Function;

/**
 * See {@link isc.TabSet.setTabPane() TabSet.setTabPane()}.
 */
setTabPane?: Function;

/**
 * See {@link isc.TabSet.rightEdgeSizes TabSet.rightEdgeSizes}.
 */
rightEdgeSizes?: EdgeSizes;

/**
 * See {@link isc.TabSet.pickerButtonSize TabSet.pickerButtonSize}.
 */
pickerButtonSize?: number;

/**
 * See {@link isc.TabSet.reorderTab() TabSet.reorderTab()}.
 */
reorderTab?: Function;

/**
 * See {@link isc.TabSet.enableTab() TabSet.enableTab()}.
 */
enableTab?: Function;

/**
 * See {@link isc.TabSet.leftEdgeOffsets TabSet.leftEdgeOffsets}.
 */
leftEdgeOffsets?: EdgeSizes;

/**
 * See {@link isc.TabSet.tabForPane() TabSet.tabForPane()}.
 */
tabForPane?: Function;

/**
 * See {@link isc.TabSet.simpleTabBaseStyle TabSet.simpleTabBaseStyle}.
 */
simpleTabBaseStyle?: string;

/**
 * See {@link isc.TabSet.addTabClicked() TabSet.addTabClicked()}.
 */
addTabClicked?: Function;

/**
 * See {@link isc.TabSet.addTabs() TabSet.addTabs()}.
 */
addTabs?: Function;

/**
 * See {@link isc.TabSet.moreTabTitle TabSet.moreTabTitle}.
 */
moreTabTitle?: string;

/**
 * See {@link isc.TabSet.scrollForward() TabSet.scrollForward()}.
 */
scrollForward?: Function;

/**
 * See {@link isc.TabSet.titleEditorLeftOffset TabSet.titleEditorLeftOffset}.
 */
titleEditorLeftOffset?: number;

/**
 * See {@link isc.TabSet.titleEditEvent TabSet.titleEditEvent}.
 */
titleEditEvent?: string;

/**
 * See {@link isc.TabSet.getTab() TabSet.getTab()}.
 */
getTab?: Function;

/**
 * See {@link isc.TabSet.addTabButtonProperties TabSet.addTabButtonProperties}.
 */
addTabButtonProperties?: ImgButton;

/**
 * See {@link isc.TabSet.useSimpleTabs TabSet.useSimpleTabs}.
 */
useSimpleTabs?: boolean;

/**
 * See {@link isc.TabSet.addTabButtonIcon TabSet.addTabButtonIcon}.
 */
addTabButtonIcon?: string;

/**
 * See {@link isc.TabSet.locateTabsBy TabSet.locateTabsBy}.
 */
locateTabsBy?: string;

/**
 * See {@link isc.TabSet.closeTabIconSize TabSet.closeTabIconSize}.
 */
closeTabIconSize?: number;

/**
 * See {@link isc.TabSet.updateTab() TabSet.updateTab()}.
 */
updateTab?: Function;

/**
 * See {@link isc.TabSet.canCloseTabs TabSet.canCloseTabs}.
 */
canCloseTabs?: boolean;

/**
 * See {@link isc.TabSet.moreTabPaneDefaults TabSet.moreTabPaneDefaults}.
 */
moreTabPaneDefaults?: Canvas;

/**
 * See {@link isc.TabSet.tabSelected() TabSet.tabSelected()}.
 */
tabSelected?: Function;

/**
 * See {@link isc.TabSet.addTabClick() TabSet.addTabClick()}.
 */
addTabClick?: Function;

/**
 * See {@link isc.TabSet.pickerButtonSrc TabSet.pickerButtonSrc}.
 */
pickerButtonSrc?: string;

/**
 * See {@link isc.TabSet.tabIsVisible() TabSet.tabIsVisible()}.
 */
tabIsVisible?: Function;

/**
 * See {@link isc.TabSet.showPaneContainerEdges TabSet.showPaneContainerEdges}.
 */
showPaneContainerEdges?: boolean;

/**
 * See {@link isc.TabSet.saveTabTitle() TabSet.saveTabTitle()}.
 */
saveTabTitle?: Function;

/**
 * See {@link isc.TabSet.selectTab() TabSet.selectTab()}.
 */
selectTab?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TabSet wraps the SmartClient widget class
 * {@link isc.TabSet TabSet} for React, allowing you to import
 * TabSet for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class TabSet extends Canvas {
    props: AsComponentXML<TabSetProps>;
}
