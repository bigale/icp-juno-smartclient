import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface PortalLayoutProps extends LayoutProps {

/**
 * See {@link isc.PortalLayout.willAcceptPortletDrop() PortalLayout.willAcceptPortletDrop()}.
 */
willAcceptPortletDrop?: Function;

/**
 * See {@link isc.PortalLayout.setCanShrinkColumnWidths() PortalLayout.setCanShrinkColumnWidths()}.
 */
setCanShrinkColumnWidths?: Function;

/**
 * See {@link isc.PortalLayout.numColumns PortalLayout.numColumns}.
 */
numColumns?: number;

/**
 * See {@link isc.PortalLayout.getPortletArray() PortalLayout.getPortletArray()}.
 */
getPortletArray?: Function;

/**
 * See {@link isc.PortalLayout.overflow PortalLayout.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.PortalLayout.canResizePortlets PortalLayout.canResizePortlets}.
 */
canResizePortlets?: boolean;

/**
 * See {@link isc.PortalLayout.setShowColumnMenus() PortalLayout.setShowColumnMenus()}.
 */
setShowColumnMenus?: Function;

/**
 * See {@link isc.PortalLayout.columnBorder PortalLayout.columnBorder}.
 */
columnBorder?: string;

/**
 * See {@link isc.PortalLayout.preventRowUnderflow PortalLayout.preventRowUnderflow}.
 */
preventRowUnderflow?: boolean;

/**
 * See {@link isc.PortalLayout.removeColumn() PortalLayout.removeColumn()}.
 */
removeColumn?: Function;

/**
 * See {@link isc.PortalLayout.getPortalPosition() PortalLayout.getPortalPosition()}.
 */
getPortalPosition?: Function;

/**
 * See {@link isc.PortalLayout.portletRestored() PortalLayout.portletRestored()}.
 */
portletRestored?: Function;

/**
 * See {@link isc.PortalLayout.portlets PortalLayout.portlets}.
 */
portlets?: Portlet[];

/**
 * See {@link isc.PortalLayout.canShrinkColumnWidths PortalLayout.canShrinkColumnWidths}.
 */
canShrinkColumnWidths?: boolean;

/**
 * See {@link isc.PortalLayout.portletsChanged() PortalLayout.portletsChanged()}.
 */
portletsChanged?: Function;

/**
 * See {@link isc.PortalLayout.getNumColumns() PortalLayout.getNumColumns()}.
 */
getNumColumns?: Function;

/**
 * See {@link isc.PortalLayout.canResizeColumns PortalLayout.canResizeColumns}.
 */
canResizeColumns?: boolean;

/**
 * See {@link isc.PortalLayout.willMinimizePortlet() PortalLayout.willMinimizePortlet()}.
 */
willMinimizePortlet?: Function;

/**
 * See {@link isc.PortalLayout.willMaximizePortlet() PortalLayout.willMaximizePortlet()}.
 */
willMaximizePortlet?: Function;

/**
 * See {@link isc.PortalLayout.portletDropTypes PortalLayout.portletDropTypes}.
 */
portletDropTypes?: string[];

/**
 * See {@link isc.PortalLayout.rowProperties PortalLayout.rowProperties}.
 */
rowProperties?: Layout;

/**
 * See {@link isc.PortalLayout.portletHSpacing PortalLayout.portletHSpacing}.
 */
portletHSpacing?: number;

/**
 * See {@link isc.PortalLayout.addColumn() PortalLayout.addColumn()}.
 */
addColumn?: Function;

/**
 * See {@link isc.PortalLayout.setColumnOverflow() PortalLayout.setColumnOverflow()}.
 */
setColumnOverflow?: Function;

/**
 * See {@link isc.PortalLayout.columnOverflow PortalLayout.columnOverflow}.
 */
columnOverflow?: string;

/**
 * See {@link isc.PortalLayout.setColumnWidth() PortalLayout.setColumnWidth()}.
 */
setColumnWidth?: Function;

/**
 * See {@link isc.PortalLayout.portletMinimized() PortalLayout.portletMinimized()}.
 */
portletMinimized?: Function;

/**
 * See {@link isc.PortalLayout.setColumnPreventUnderflow() PortalLayout.setColumnPreventUnderflow()}.
 */
setColumnPreventUnderflow?: Function;

/**
 * See {@link isc.PortalLayout.preventUnderflow PortalLayout.preventUnderflow}.
 */
preventUnderflow?: boolean;

/**
 * See {@link isc.PortalLayout.portletVSpacing PortalLayout.portletVSpacing}.
 */
portletVSpacing?: number;

/**
 * See {@link isc.PortalLayout.stretchColumnWidthsProportionally PortalLayout.stretchColumnWidthsProportionally}.
 */
stretchColumnWidthsProportionally?: boolean;

/**
 * See {@link isc.PortalLayout.setPortletDropTypes() PortalLayout.setPortletDropTypes()}.
 */
setPortletDropTypes?: Function;

/**
 * See {@link isc.PortalLayout.setCanStretchColumnWidths() PortalLayout.setCanStretchColumnWidths()}.
 */
setCanStretchColumnWidths?: Function;

/**
 * See {@link isc.PortalLayout.setColumnBorder() PortalLayout.setColumnBorder()}.
 */
setColumnBorder?: Function;

/**
 * See {@link isc.PortalLayout.showColumnMenus PortalLayout.showColumnMenus}.
 */
showColumnMenus?: boolean;

/**
 * See {@link isc.PortalLayout.canResizeRows PortalLayout.canResizeRows}.
 */
canResizeRows?: boolean;

/**
 * See {@link isc.PortalLayout.setCanResizeColumns() PortalLayout.setCanResizeColumns()}.
 */
setCanResizeColumns?: Function;

/**
 * See {@link isc.PortalLayout.setPreventUnderflow() PortalLayout.setPreventUnderflow()}.
 */
setPreventUnderflow?: Function;

/**
 * See {@link isc.PortalLayout.preventColumnUnderflow PortalLayout.preventColumnUnderflow}.
 */
preventColumnUnderflow?: boolean;

/**
 * See {@link isc.PortalLayout.willClosePortlet() PortalLayout.willClosePortlet()}.
 */
willClosePortlet?: Function;

/**
 * See {@link isc.PortalLayout.setColumnSpacing() PortalLayout.setColumnSpacing()}.
 */
setColumnSpacing?: Function;

/**
 * See {@link isc.PortalLayout.portletsResized() PortalLayout.portletsResized()}.
 */
portletsResized?: Function;

/**
 * See {@link isc.PortalLayout.getDropPortlet() PortalLayout.getDropPortlet()}.
 */
getDropPortlet?: Function;

/**
 * See {@link isc.PortalLayout.getPortlets() PortalLayout.getPortlets()}.
 */
getPortlets?: Function;

/**
 * See {@link isc.PortalLayout.setCanResizePortlets() PortalLayout.setCanResizePortlets()}.
 */
setCanResizePortlets?: Function;

/**
 * See {@link isc.PortalLayout.addPortlet() PortalLayout.addPortlet()}.
 */
addPortlet?: Function;

/**
 * See {@link isc.PortalLayout.setStretchColumnWidthsProportionally() PortalLayout.setStretchColumnWidthsProportionally()}.
 */
setStretchColumnWidthsProportionally?: Function;

/**
 * See {@link isc.PortalLayout.willRestorePortlet() PortalLayout.willRestorePortlet()}.
 */
willRestorePortlet?: Function;

/**
 * See {@link isc.PortalLayout.setPortletHSpacing() PortalLayout.setPortletHSpacing()}.
 */
setPortletHSpacing?: Function;

/**
 * See {@link isc.PortalLayout.getColumnWidth() PortalLayout.getColumnWidth()}.
 */
getColumnWidth?: Function;

/**
 * See {@link isc.PortalLayout.portletMaximized() PortalLayout.portletMaximized()}.
 */
portletMaximized?: Function;

/**
 * See {@link isc.PortalLayout.setPreventRowUnderflow() PortalLayout.setPreventRowUnderflow()}.
 */
setPreventRowUnderflow?: Function;

/**
 * See {@link isc.PortalLayout.dropTypes PortalLayout.dropTypes}.
 */
dropTypes?: string[];

/**
 * See {@link isc.PortalLayout.rowLayoutProperties PortalLayout.rowLayoutProperties}.
 */
rowLayoutProperties?: Layout;

/**
 * See {@link isc.PortalLayout.setCanResizeRows() PortalLayout.setCanResizeRows()}.
 */
setCanResizeRows?: Function;

/**
 * See {@link isc.PortalLayout.columnSpacing PortalLayout.columnSpacing}.
 */
columnSpacing?: number;

/**
 * See {@link isc.PortalLayout.canStretchColumnWidths PortalLayout.canStretchColumnWidths}.
 */
canStretchColumnWidths?: boolean;

/**
 * See {@link isc.PortalLayout.setPortletVSpacing() PortalLayout.setPortletVSpacing()}.
 */
setPortletVSpacing?: Function;

/**
 * See {@link isc.PortalLayout.removePortlet() PortalLayout.removePortlet()}.
 */
removePortlet?: Function;

/**
 * See {@link isc.PortalLayout.columnProperties PortalLayout.columnProperties}.
 */
columnProperties?: Layout;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PortalLayout wraps the SmartClient widget class
 * {@link isc.PortalLayout PortalLayout} for React, allowing you to import
 * PortalLayout for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class PortalLayout extends Layout {
    props: AsComponentXML<PortalLayoutProps>;
}
