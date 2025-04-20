import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NotifySettingsProps {

/**
 * See {@link isc.NotifySettings.maxStackDismissMode NotifySettings.maxStackDismissMode}.
 */
maxStackDismissMode?: string;

/**
 * See {@link isc.NotifySettings.slideSpeed NotifySettings.slideSpeed}.
 */
slideSpeed?: number;

/**
 * See {@link isc.NotifySettings.multiMessageMode NotifySettings.multiMessageMode}.
 */
multiMessageMode?: string;

/**
 * See {@link isc.NotifySettings.slideInOrigin NotifySettings.slideInOrigin}.
 */
slideInOrigin?: string;

/**
 * See {@link isc.NotifySettings.labelProperties NotifySettings.labelProperties}.
 */
labelProperties?: Label;

/**
 * See {@link isc.NotifySettings.messagePriority NotifySettings.messagePriority}.
 */
messagePriority?: number;

/**
 * See {@link isc.NotifySettings.positionCanvas NotifySettings.positionCanvas}.
 */
positionCanvas?: Canvas;

/**
 * See {@link isc.NotifySettings.applyPriorityToAppearance NotifySettings.applyPriorityToAppearance}.
 */
applyPriorityToAppearance?: boolean;

/**
 * See {@link isc.NotifySettings.messageIconOrientation NotifySettings.messageIconOrientation}.
 */
messageIconOrientation?: string;

/**
 * See {@link isc.NotifySettings.disappearMethod NotifySettings.disappearMethod}.
 */
disappearMethod?: string;

/**
 * See {@link isc.NotifySettings.fadeOutDuration NotifySettings.fadeOutDuration}.
 */
fadeOutDuration?: number;

/**
 * See {@link isc.NotifySettings.stackDirection NotifySettings.stackDirection}.
 */
stackDirection?: string;

/**
 * See {@link isc.NotifySettings.position NotifySettings.position}.
 */
position?: string;

/**
 * See {@link isc.NotifySettings.messageIcon NotifySettings.messageIcon}.
 */
messageIcon?: string;

/**
 * See {@link isc.NotifySettings.topOffset NotifySettings.topOffset}.
 */
topOffset?: number;

/**
 * See {@link isc.NotifySettings.stackPersistence NotifySettings.stackPersistence}.
 */
stackPersistence?: string;

/**
 * See {@link isc.NotifySettings.maxStackSize NotifySettings.maxStackSize}.
 */
maxStackSize?: number;

/**
 * See {@link isc.NotifySettings.repositionMethod NotifySettings.repositionMethod}.
 */
repositionMethod?: string;

/**
 * See {@link isc.NotifySettings.y NotifySettings.y}.
 */
y?: number;

/**
 * See {@link isc.NotifySettings.canDismiss NotifySettings.canDismiss}.
 */
canDismiss?: boolean;

/**
 * See {@link isc.NotifySettings.stackSpacing NotifySettings.stackSpacing}.
 */
stackSpacing?: number;

/**
 * See {@link isc.NotifySettings.duration NotifySettings.duration}.
 */
duration?: number;

/**
 * See {@link isc.NotifySettings.slideOutOrigin NotifySettings.slideOutOrigin}.
 */
slideOutOrigin?: string;

/**
 * See {@link isc.NotifySettings.messageControlPadding NotifySettings.messageControlPadding}.
 */
messageControlPadding?: number;

/**
 * See {@link isc.NotifySettings.actionSeparator NotifySettings.actionSeparator}.
 */
actionSeparator?: string;

/**
 * See {@link isc.NotifySettings.x NotifySettings.x}.
 */
x?: number;

/**
 * See {@link isc.NotifySettings.messageIconHeight NotifySettings.messageIconHeight}.
 */
messageIconHeight?: number;

/**
 * See {@link isc.NotifySettings.autoFitMaxWidth NotifySettings.autoFitMaxWidth}.
 */
autoFitMaxWidth?: number | string;

/**
 * See {@link isc.NotifySettings.styleName NotifySettings.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.NotifySettings.messageIconWidth NotifySettings.messageIconWidth}.
 */
messageIconWidth?: number;

/**
 * See {@link isc.NotifySettings.appearMethod NotifySettings.appearMethod}.
 */
appearMethod?: string;

/**
 * See {@link isc.NotifySettings.stayIfHovered NotifySettings.stayIfHovered}.
 */
stayIfHovered?: boolean;

/**
 * See {@link isc.NotifySettings.fadeInDuration NotifySettings.fadeInDuration}.
 */
fadeInDuration?: number;

/**
 * See {@link isc.NotifySettings.actionStyleName NotifySettings.actionStyleName}.
 */
actionStyleName?: string;

/**
 * See {@link isc.NotifySettings.leftOffset NotifySettings.leftOffset}.
 */
leftOffset?: number;

/**
 * See {@link isc.NotifySettings.messageIconSpacing NotifySettings.messageIconSpacing}.
 */
messageIconSpacing?: number;

/**
 * See {@link isc.NotifySettings.autoFitWidth NotifySettings.autoFitWidth}.
 */
autoFitWidth?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NotifySettings wraps the SmartClient object
 * {@link isc.NotifySettings NotifySettings} for React, allowing you to import
 * NotifySettings for use in React JS and JSX.
 * @class
 */
declare class NotifySettings extends ILogicalComponent {
    props: AsComponentXML<NotifySettingsProps>;
}
