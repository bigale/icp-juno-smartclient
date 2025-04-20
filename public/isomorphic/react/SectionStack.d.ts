import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionStackProps extends VLayoutProps {

/**
 * See {@link isc.SectionStack.canTabToHeaders SectionStack.canTabToHeaders}.
 */
canTabToHeaders?: boolean;

/**
 * See {@link isc.SectionStack.canCollapseAll SectionStack.canCollapseAll}.
 */
canCollapseAll?: boolean;

/**
 * See {@link isc.SectionStack.closeSectionIconSize SectionStack.closeSectionIconSize}.
 */
closeSectionIconSize?: number;

/**
 * See {@link isc.SectionStack.getSectionNumber() SectionStack.getSectionNumber()}.
 */
getSectionNumber?: Function;

/**
 * See {@link isc.SectionStack.addItem() SectionStack.addItem()}.
 */
addItem?: Function;

/**
 * See {@link isc.SectionStack.setItems() SectionStack.setItems()}.
 */
setItems?: Function;

/**
 * See {@link isc.SectionStack.setSectionProperties() SectionStack.setSectionProperties()}.
 */
setSectionProperties?: Function;

/**
 * See {@link isc.SectionStack.sectionIsVisible() SectionStack.sectionIsVisible()}.
 */
sectionIsVisible?: Function;

/**
 * See {@link isc.SectionStack.setAnimateSections() SectionStack.setAnimateSections()}.
 */
setAnimateSections?: Function;

/**
 * See {@link isc.SectionStack.canResizeSections SectionStack.canResizeSections}.
 */
canResizeSections?: boolean;

/**
 * See {@link isc.SectionStack.sections SectionStack.sections}.
 */
sections?: SectionStackSection[];

/**
 * See {@link isc.SectionStack.setSectionTitle() SectionStack.setSectionTitle()}.
 */
setSectionTitle?: Function;

/**
 * See {@link isc.SectionStack.showExpandControls SectionStack.showExpandControls}.
 */
showExpandControls?: boolean;

/**
 * See {@link isc.SectionStack.itemEndIndent SectionStack.itemEndIndent}.
 */
itemEndIndent?: number;

/**
 * See {@link isc.SectionStack.expandSection() SectionStack.expandSection()}.
 */
expandSection?: Function;

/**
 * See {@link isc.SectionStack.visibilityMode SectionStack.visibilityMode}.
 */
visibilityMode?: string;

/**
 * See {@link isc.SectionStack.getSectionNames() SectionStack.getSectionNames()}.
 */
getSectionNames?: Function;

/**
 * See {@link isc.SectionStack.locateSectionsBy SectionStack.locateSectionsBy}.
 */
locateSectionsBy?: string;

/**
 * See {@link isc.SectionStack.reorderSection() SectionStack.reorderSection()}.
 */
reorderSection?: Function;

/**
 * See {@link isc.SectionStack.itemStartIndent SectionStack.itemStartIndent}.
 */
itemStartIndent?: number;

/**
 * See {@link isc.SectionStack.canDropComponents SectionStack.canDropComponents}.
 */
canDropComponents?: boolean;

/**
 * See {@link isc.SectionStack.sectionIsExpanded() SectionStack.sectionIsExpanded()}.
 */
sectionIsExpanded?: Function;

/**
 * See {@link isc.SectionStack.showSection() SectionStack.showSection()}.
 */
showSection?: Function;

/**
 * See {@link isc.SectionStack.closeSectionIcon SectionStack.closeSectionIcon}.
 */
closeSectionIcon?: string;

/**
 * See {@link isc.SectionStack.revealChild() SectionStack.revealChild()}.
 */
revealChild?: Function;

/**
 * See {@link isc.SectionStack.sectionForItem() SectionStack.sectionForItem()}.
 */
sectionForItem?: Function;

/**
 * See {@link isc.SectionStack.moveSection() SectionStack.moveSection()}.
 */
moveSection?: Function;

/**
 * See {@link isc.SectionStack.animateSections SectionStack.animateSections}.
 */
animateSections?: boolean;

/**
 * See {@link isc.SectionStack.scrollSectionIntoView SectionStack.scrollSectionIntoView}.
 */
scrollSectionIntoView?: boolean;

/**
 * See {@link isc.SectionStack.styleName SectionStack.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.SectionStack.useGlobalSectionIDs SectionStack.useGlobalSectionIDs}.
 */
useGlobalSectionIDs?: boolean;

/**
 * See {@link isc.SectionStack.collapseSection() SectionStack.collapseSection()}.
 */
collapseSection?: Function;

/**
 * See {@link isc.SectionStack.getExpandedSections() SectionStack.getExpandedSections()}.
 */
getExpandedSections?: Function;

/**
 * See {@link isc.SectionStack.closeSection() SectionStack.closeSection()}.
 */
closeSection?: Function;

/**
 * See {@link isc.SectionStack.removeItem() SectionStack.removeItem()}.
 */
removeItem?: Function;

/**
 * See {@link isc.SectionStack.locateSectionsType SectionStack.locateSectionsType}.
 */
locateSectionsType?: string;

/**
 * See {@link isc.SectionStack.sectionHeaderClick() SectionStack.sectionHeaderClick()}.
 */
sectionHeaderClick?: Function;

/**
 * See {@link isc.SectionStack.closeSectionButtonProperties SectionStack.closeSectionButtonProperties}.
 */
closeSectionButtonProperties?: ImgButton;

/**
 * See {@link isc.SectionStack.closeSectionButtonDefaults SectionStack.closeSectionButtonDefaults}.
 */
closeSectionButtonDefaults?: ImgButton;

/**
 * See {@link isc.SectionStack.editProxyConstructor SectionStack.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.SectionStack.canCloseSections SectionStack.canCloseSections}.
 */
canCloseSections?: boolean;

/**
 * See {@link isc.SectionStack.addSection() SectionStack.addSection()}.
 */
addSection?: Function;

/**
 * See {@link isc.SectionStack.setVisibilityMode() SectionStack.setVisibilityMode()}.
 */
setVisibilityMode?: Function;

/**
 * See {@link isc.SectionStack.getVisibleSections() SectionStack.getVisibleSections()}.
 */
getVisibleSections?: Function;

/**
 * See {@link isc.SectionStack.closeSectionButtonConstructor SectionStack.closeSectionButtonConstructor}.
 */
closeSectionButtonConstructor?: string;

/**
 * See {@link isc.SectionStack.canReorderSections SectionStack.canReorderSections}.
 */
canReorderSections?: boolean;

/**
 * See {@link isc.SectionStack.getSectionHeader() SectionStack.getSectionHeader()}.
 */
getSectionHeader?: Function;

/**
 * See {@link isc.SectionStack.overflow SectionStack.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.SectionStack.itemIndent SectionStack.itemIndent}.
 */
itemIndent?: number;

/**
 * See {@link isc.SectionStack.headerHeight SectionStack.headerHeight}.
 */
headerHeight?: number;

/**
 * See {@link isc.SectionStack.getSections() SectionStack.getSections()}.
 */
getSections?: Function;

/**
 * See {@link isc.SectionStack.removeSection() SectionStack.removeSection()}.
 */
removeSection?: Function;

/**
 * See {@link isc.SectionStack.hideSection() SectionStack.hideSection()}.
 */
hideSection?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionStack wraps the SmartClient widget class
 * {@link isc.SectionStack SectionStack} for React, allowing you to import
 * SectionStack for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class SectionStack extends VLayout {
    props: AsComponentXML<SectionStackProps>;
}
