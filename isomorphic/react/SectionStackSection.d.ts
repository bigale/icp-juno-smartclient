import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionStackSectionProps {

/**
 * See {@link isc.SectionStackSection.resizeable SectionStackSection.resizeable}.
 */
resizeable?: boolean;

/**
 * See {@link isc.SectionStackSection.canClose SectionStackSection.canClose}.
 */
canClose?: boolean;

/**
 * See {@link isc.SectionStackSection.expanded SectionStackSection.expanded}.
 */
expanded?: boolean;

/**
 * See {@link isc.SectionStackSection.destroyOnRemove SectionStackSection.destroyOnRemove}.
 */
destroyOnRemove?: boolean;

/**
 * See {@link isc.SectionStackSection.headerProperties SectionStackSection.headerProperties}.
 */
headerProperties?: SectionHeader | ImgSectionHeader;

/**
 * See {@link isc.SectionStackSection.showHeader SectionStackSection.showHeader}.
 */
showHeader?: boolean;

/**
 * See {@link isc.SectionStackSection.canTabToHeader SectionStackSection.canTabToHeader}.
 */
canTabToHeader?: boolean;

/**
 * See {@link isc.SectionStackSection.icon SectionStackSection.icon}.
 */
icon?: string;

/**
 * See {@link isc.SectionStackSection.ID SectionStackSection.ID}.
 */
ID?: string;

/**
 * See {@link isc.SectionStackSection.clipTitle SectionStackSection.clipTitle}.
 */
clipTitle?: boolean;

/**
 * See {@link isc.SectionStackSection.canDropBefore SectionStackSection.canDropBefore}.
 */
canDropBefore?: boolean;

/**
 * See {@link isc.SectionStackSection.hidden SectionStackSection.hidden}.
 */
hidden?: boolean;

/**
 * See {@link isc.SectionStackSection.showClippedTitleOnHover SectionStackSection.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;

/**
 * See {@link isc.SectionStackSection.closeIcon SectionStackSection.closeIcon}.
 */
closeIcon?: string;

/**
 * See {@link isc.SectionStackSection.name SectionStackSection.name}.
 */
name?: string;

/**
 * See {@link isc.SectionStackSection.canCollapse SectionStackSection.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.SectionStackSection.controls SectionStackSection.controls}.
 */
controls?: Canvas[];

/**
 * See {@link isc.SectionStackSection.closeIconSize SectionStackSection.closeIconSize}.
 */
closeIconSize?: number;

/**
 * See {@link isc.SectionStackSection.title SectionStackSection.title}.
 */
title?: string;

/**
 * See {@link isc.SectionStackSection.canReorder SectionStackSection.canReorder}.
 */
canReorder?: boolean;

/**
 * See {@link isc.SectionStackSection.items SectionStackSection.items}.
 */
items?: Canvas[] | string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionStackSection wraps the SmartClient object
 * {@link isc.SectionStackSection SectionStackSection} for React, allowing you to import
 * SectionStackSection for use in React JS and JSX.
 * @class
 */
declare class SectionStackSection extends ILogicalComponent {
    props: AsComponentXML<SectionStackSectionProps>;
}
