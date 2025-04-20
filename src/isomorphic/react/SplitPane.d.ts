import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface SplitPaneProps extends LayoutProps {

/**
 * See {@link isc.SplitPane.detailToolStripProperties SplitPane.detailToolStripProperties}.
 */
detailToolStripProperties?: NavigationBar;

/**
 * See {@link isc.SplitPane.navigationPane SplitPane.navigationPane}.
 */
navigationPane?: Canvas;

/**
 * See {@link isc.SplitPane.setNavigationTitle() SplitPane.setNavigationTitle()}.
 */
setNavigationTitle?: Function;

/**
 * See {@link isc.SplitPane.setShowRightButton() SplitPane.setShowRightButton()}.
 */
setShowRightButton?: Function;

/**
 * See {@link isc.SplitPane.showNavigationPane() SplitPane.showNavigationPane()}.
 */
showNavigationPane?: Function;

/**
 * See {@link isc.SplitPane.showMiniNav SplitPane.showMiniNav}.
 */
showMiniNav?: boolean;

/**
 * See {@link isc.SplitPane.setDetailPaneTitleTemplate() SplitPane.setDetailPaneTitleTemplate()}.
 */
setDetailPaneTitleTemplate?: Function;

/**
 * See {@link isc.SplitPane.detailNavigationControl SplitPane.detailNavigationControl}.
 */
detailNavigationControl?: Canvas;

/**
 * See {@link isc.SplitPane.showLeftButton SplitPane.showLeftButton}.
 */
showLeftButton?: boolean;

/**
 * See {@link isc.SplitPane.notifyAfterNavigationClick SplitPane.notifyAfterNavigationClick}.
 */
notifyAfterNavigationClick?: boolean;

/**
 * See {@link isc.SplitPane.setPageOrientation() SplitPane.setPageOrientation()}.
 */
setPageOrientation?: Function;

/**
 * See {@link isc.SplitPane.downClick() SplitPane.downClick()}.
 */
downClick?: Function;

/**
 * See {@link isc.SplitPane.setShowListToolStrip() SplitPane.setShowListToolStrip()}.
 */
setShowListToolStrip?: Function;

/**
 * See {@link isc.SplitPane.showResizeBars SplitPane.showResizeBars}.
 */
showResizeBars?: boolean;

/**
 * See {@link isc.SplitPane.navigateDetailPane() SplitPane.navigateDetailPane()}.
 */
navigateDetailPane?: Function;

/**
 * See {@link isc.SplitPane.detailToolButtons SplitPane.detailToolButtons}.
 */
detailToolButtons?: Canvas[];

/**
 * See {@link isc.SplitPane.showListPane() SplitPane.showListPane()}.
 */
showListPane?: Function;

/**
 * See {@link isc.SplitPane.setListTitle() SplitPane.setListTitle()}.
 */
setListTitle?: Function;

/**
 * See {@link isc.SplitPane.setDetailPane() SplitPane.setDetailPane()}.
 */
setDetailPane?: Function;

/**
 * See {@link isc.SplitPane.navigationBarProperties SplitPane.navigationBarProperties}.
 */
navigationBarProperties?: NavigationBar;

/**
 * See {@link isc.SplitPane.navigationClick() SplitPane.navigationClick()}.
 */
navigationClick?: Function;

/**
 * See {@link isc.SplitPane.detailPane SplitPane.detailPane}.
 */
detailPane?: Canvas;

/**
 * See {@link isc.SplitPane.animateNavigationBarStateChanges SplitPane.animateNavigationBarStateChanges}.
 */
animateNavigationBarStateChanges?: boolean;

/**
 * See {@link isc.SplitPane.pageOrientation SplitPane.pageOrientation}.
 */
pageOrientation?: string;

/**
 * See {@link isc.SplitPane.detailTitle SplitPane.detailTitle}.
 */
detailTitle?: string;

/**
 * See {@link isc.SplitPane.listPane SplitPane.listPane}.
 */
listPane?: Canvas;

/**
 * See {@link isc.SplitPane.detailPaneTitleTemplate SplitPane.detailPaneTitleTemplate}.
 */
detailPaneTitleTemplate?: string;

/**
 * See {@link isc.SplitPane.setShowNavigationBar() SplitPane.setShowNavigationBar()}.
 */
setShowNavigationBar?: Function;

/**
 * See {@link isc.SplitPane.listTitle SplitPane.listTitle}.
 */
listTitle?: string;

/**
 * See {@link isc.SplitPane.listPaneTitleTemplate SplitPane.listPaneTitleTemplate}.
 */
listPaneTitleTemplate?: string;

/**
 * See {@link isc.SplitPane.setListPane() SplitPane.setListPane()}.
 */
setListPane?: Function;

/**
 * See {@link isc.SplitPane.currentPane SplitPane.currentPane}.
 */
currentPane?: string;

/**
 * See {@link isc.SplitPane.navigationTitle SplitPane.navigationTitle}.
 */
navigationTitle?: string;

/**
 * See {@link isc.SplitPane.showDetailToolStrip SplitPane.showDetailToolStrip}.
 */
showDetailToolStrip?: boolean;

/**
 * See {@link isc.SplitPane.showDetailPane() SplitPane.showDetailPane()}.
 */
showDetailPane?: Function;

/**
 * See {@link isc.SplitPane.setNavigationPane() SplitPane.setNavigationPane()}.
 */
setNavigationPane?: Function;

/**
 * See {@link isc.SplitPane.addHistoryEntries SplitPane.addHistoryEntries}.
 */
addHistoryEntries?: boolean;

/**
 * See {@link isc.SplitPane.upClick() SplitPane.upClick()}.
 */
upClick?: Function;

/**
 * See {@link isc.SplitPane.navigatePane() SplitPane.navigatePane()}.
 */
navigatePane?: Function;

/**
 * See {@link isc.SplitPane.setLeftButtonTitle() SplitPane.setLeftButtonTitle()}.
 */
setLeftButtonTitle?: Function;

/**
 * See {@link isc.SplitPane.leftButtonProperties SplitPane.leftButtonProperties}.
 */
leftButtonProperties?: NavigationButton;

/**
 * See {@link isc.SplitPane.setDetailToolButtons() SplitPane.setDetailToolButtons()}.
 */
setDetailToolButtons?: Function;

/**
 * See {@link isc.SplitPane.reverseOrder SplitPane.reverseOrder}.
 */
reverseOrder?: boolean;

/**
 * See {@link isc.SplitPane.showRightButton SplitPane.showRightButton}.
 */
showRightButton?: boolean;

/**
 * See {@link isc.SplitPane.setShowLeftButton() SplitPane.setShowLeftButton()}.
 */
setShowLeftButton?: Function;

/**
 * See {@link isc.SplitPane.listToolStripProperties SplitPane.listToolStripProperties}.
 */
listToolStripProperties?: NavigationBar;

/**
 * See {@link isc.SplitPane.navigationPaneWidth SplitPane.navigationPaneWidth}.
 */
navigationPaneWidth?: number | string;

/**
 * See {@link isc.SplitPane.backButtonProperties SplitPane.backButtonProperties}.
 */
backButtonProperties?: NavigationButton;

/**
 * See {@link isc.SplitPane.setRightButtonTitle() SplitPane.setRightButtonTitle()}.
 */
setRightButtonTitle?: Function;

/**
 * See {@link isc.SplitPane.setCurrentPane() SplitPane.setCurrentPane()}.
 */
setCurrentPane?: Function;

/**
 * See {@link isc.SplitPane.setDetailTitle() SplitPane.setDetailTitle()}.
 */
setDetailTitle?: Function;

/**
 * See {@link isc.SplitPane.setAddHistoryEntries() SplitPane.setAddHistoryEntries()}.
 */
setAddHistoryEntries?: Function;

/**
 * See {@link isc.SplitPane.showListToolStrip SplitPane.showListToolStrip}.
 */
showListToolStrip?: boolean;

/**
 * See {@link isc.SplitPane.setDetailNavigationControl() SplitPane.setDetailNavigationControl()}.
 */
setDetailNavigationControl?: Function;

/**
 * See {@link isc.SplitPane.setListPaneTitleTemplate() SplitPane.setListPaneTitleTemplate()}.
 */
setListPaneTitleTemplate?: Function;

/**
 * See {@link isc.SplitPane.vertical SplitPane.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.SplitPane.deviceMode SplitPane.deviceMode}.
 */
deviceMode?: string;

/**
 * See {@link isc.SplitPane.editProxyConstructor SplitPane.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.SplitPane.setShowDetailToolStrip() SplitPane.setShowDetailToolStrip()}.
 */
setShowDetailToolStrip?: Function;

/**
 * See {@link isc.SplitPane.showNavigationBar SplitPane.showNavigationBar}.
 */
showNavigationBar?: boolean;

/**
 * See {@link isc.SplitPane.paneChanged() SplitPane.paneChanged()}.
 */
paneChanged?: Function;

/**
 * See {@link isc.SplitPane.autoNavigate SplitPane.autoNavigate}.
 */
autoNavigate?: boolean;

/**
 * See {@link isc.SplitPane.navigateListPane() SplitPane.navigateListPane()}.
 */
navigateListPane?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SplitPane wraps the SmartClient widget class
 * {@link isc.SplitPane SplitPane} for React, allowing you to import
 * SplitPane for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class SplitPane extends Layout {
    props: AsComponentXML<SplitPaneProps>;
}
