import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface AdaptiveMenuProps extends LayoutProps {

/**
 * See {@link isc.AdaptiveMenu.partialInlining AdaptiveMenu.partialInlining}.
 */
partialInlining?: boolean;

/**
 * See {@link isc.AdaptiveMenu.menuButtonTitle AdaptiveMenu.menuButtonTitle}.
 */
menuButtonTitle?: string;

/**
 * See {@link isc.AdaptiveMenu.inlineImgButtonProperties AdaptiveMenu.inlineImgButtonProperties}.
 */
inlineImgButtonProperties?: ImgButton;

/**
 * See {@link isc.AdaptiveMenu.inlineSeparatorProperties AdaptiveMenu.inlineSeparatorProperties}.
 */
inlineSeparatorProperties?: ToolStripSeparator;

/**
 * See {@link isc.AdaptiveMenu.setItems() AdaptiveMenu.setItems()}.
 */
setItems?: Function;

/**
 * See {@link isc.AdaptiveMenu.inlineSubmenuItemProperties AdaptiveMenu.inlineSubmenuItemProperties}.
 */
inlineSubmenuItemProperties?: IconMenuButton;

/**
 * See {@link isc.AdaptiveMenu.showIconOnlyInline AdaptiveMenu.showIconOnlyInline}.
 */
showIconOnlyInline?: boolean;

/**
 * See {@link isc.AdaptiveMenu.items AdaptiveMenu.items}.
 */
items?: MenuItem[];

/**
 * See {@link isc.AdaptiveMenu.menuButtonIcon AdaptiveMenu.menuButtonIcon}.
 */
menuButtonIcon?: string;

/**
 * See {@link isc.AdaptiveMenu.menuButtonProperties AdaptiveMenu.menuButtonProperties}.
 */
menuButtonProperties?: MenuButton;

/**
 * See {@link isc.AdaptiveMenu.setPartialInlining() AdaptiveMenu.setPartialInlining()}.
 */
setPartialInlining?: Function;

/**
 * See {@link isc.AdaptiveMenu.inlinePlacement AdaptiveMenu.inlinePlacement}.
 */
inlinePlacement?: string | string;

/**
 * See {@link isc.AdaptiveMenu.inlineMenuItemProperties AdaptiveMenu.inlineMenuItemProperties}.
 */
inlineMenuItemProperties?: ToolStripButton;

/**
 * See {@link isc.AdaptiveMenu.menuProperties AdaptiveMenu.menuProperties}.
 */
menuProperties?: Menu;

/**
 * See {@link isc.AdaptiveMenu.showInlineSeparators AdaptiveMenu.showInlineSeparators}.
 */
showInlineSeparators?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AdaptiveMenu wraps the SmartClient widget class
 * {@link isc.AdaptiveMenu AdaptiveMenu} for React, allowing you to import
 * AdaptiveMenu for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class AdaptiveMenu extends Layout {
    props: AsComponentXML<AdaptiveMenuProps>;
}
