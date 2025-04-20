import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface LayoutProps extends CanvasProps {

/**
 * See {@link isc.Layout.reflow() Layout.reflow()}.
 */
reflow?: Function;

/**
 * See {@link isc.Layout.removeMember() Layout.removeMember()}.
 */
removeMember?: Function;

/**
 * See {@link isc.Layout.removeMembers() Layout.removeMembers()}.
 */
removeMembers?: Function;

/**
 * See {@link isc.Layout.setLayoutMargin() Layout.setLayoutMargin()}.
 */
setLayoutMargin?: Function;

/**
 * See {@link isc.Layout.managePercentBreadth Layout.managePercentBreadth}.
 */
managePercentBreadth?: boolean;

/**
 * See {@link isc.Layout.members Layout.members}.
 */
members?: Canvas[];

/**
 * See {@link isc.Layout.paddingAsLayoutMargin Layout.paddingAsLayoutMargin}.
 */
paddingAsLayoutMargin?: boolean;

/**
 * See {@link isc.Layout.minMemberLength Layout.minMemberLength}.
 */
minMemberLength?: number;

/**
 * See {@link isc.Layout.getChildTabPosition() Layout.getChildTabPosition()}.
 */
getChildTabPosition?: Function;

/**
 * See {@link isc.Layout.enforcePolicy Layout.enforcePolicy}.
 */
enforcePolicy?: boolean;

/**
 * See {@link isc.Layout.layoutRightMargin Layout.layoutRightMargin}.
 */
layoutRightMargin?: number;

/**
 * See {@link isc.Layout.locateMembersBy Layout.locateMembersBy}.
 */
locateMembersBy?: string;

/**
 * See {@link isc.Layout.membersMargin Layout.membersMargin}.
 */
membersMargin?: number;

/**
 * See {@link isc.Layout.getMemberNumber() Layout.getMemberNumber()}.
 */
getMemberNumber?: Function;

/**
 * See {@link isc.Layout.setVisibleMember() Layout.setVisibleMember()}.
 */
setVisibleMember?: Function;

/**
 * See {@link isc.Layout.stackZIndex Layout.stackZIndex}.
 */
stackZIndex?: string;

/**
 * See {@link isc.Layout.reorderMembers() Layout.reorderMembers()}.
 */
reorderMembers?: Function;

/**
 * See {@link isc.Layout.hasMember() Layout.hasMember()}.
 */
hasMember?: Function;

/**
 * See {@link isc.Layout.placeHolderDefaults Layout.placeHolderDefaults}.
 */
placeHolderDefaults?: Canvas;

/**
 * See {@link isc.Layout.getMemberSizes() Layout.getMemberSizes()}.
 */
getMemberSizes?: Function;

/**
 * See {@link isc.Layout.drop() Layout.drop()}.
 */
drop?: Function;

/**
 * See {@link isc.Layout.resizeBarSize Layout.resizeBarSize}.
 */
resizeBarSize?: number;

/**
 * See {@link isc.Layout.memberOverlap Layout.memberOverlap}.
 */
memberOverlap?: number;

/**
 * See {@link isc.Layout.getMemberOffset() Layout.getMemberOffset()}.
 */
getMemberOffset?: Function;

/**
 * See {@link isc.Layout.getMember() Layout.getMember()}.
 */
getMember?: Function;

/**
 * See {@link isc.Layout.defaultResizeBars Layout.defaultResizeBars}.
 */
defaultResizeBars?: string;

/**
 * See {@link isc.Layout.vPolicy Layout.vPolicy}.
 */
vPolicy?: string;

/**
 * See {@link isc.Layout.locateMembersType Layout.locateMembersType}.
 */
locateMembersType?: string;

/**
 * See {@link isc.Layout.leaveScrollbarGap Layout.leaveScrollbarGap}.
 */
leaveScrollbarGap?: boolean;

/**
 * See {@link isc.Layout.vertical Layout.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.Layout.resizeBarClass Layout.resizeBarClass}.
 */
resizeBarClass?: string;

/**
 * See {@link isc.Layout.showMember() Layout.showMember()}.
 */
showMember?: Function;

/**
 * See {@link isc.Layout.getMembersLength() Layout.getMembersLength()}.
 */
getMembersLength?: Function;

/**
 * See {@link isc.Layout.reorderMember() Layout.reorderMember()}.
 */
reorderMember?: Function;

/**
 * See {@link isc.Layout.minBreadthMember Layout.minBreadthMember}.
 */
minBreadthMember?: string | number | Canvas;

/**
 * See {@link isc.Layout.hideMember() Layout.hideMember()}.
 */
hideMember?: Function;

/**
 * See {@link isc.Layout.getDropPosition() Layout.getDropPosition()}.
 */
getDropPosition?: Function;

/**
 * See {@link isc.Layout.layoutTopMargin Layout.layoutTopMargin}.
 */
layoutTopMargin?: number;

/**
 * See {@link isc.Layout.getDropComponent() Layout.getDropComponent()}.
 */
getDropComponent?: Function;

/**
 * See {@link isc.Layout.animateMembers Layout.animateMembers}.
 */
animateMembers?: boolean;

/**
 * See {@link isc.Layout.membersChanged() Layout.membersChanged()}.
 */
membersChanged?: Function;

/**
 * See {@link isc.Layout.replaceMember() Layout.replaceMember()}.
 */
replaceMember?: Function;

/**
 * See {@link isc.Layout.align Layout.align}.
 */
align?: string | string;

/**
 * See {@link isc.Layout.layoutStartMargin Layout.layoutStartMargin}.
 */
layoutStartMargin?: number;

/**
 * See {@link isc.Layout.defaultLayoutAlign Layout.defaultLayoutAlign}.
 */
defaultLayoutAlign?: string | string;

/**
 * See {@link isc.Layout.dropLineThickness Layout.dropLineThickness}.
 */
dropLineThickness?: number;

/**
 * See {@link isc.Layout.setMembers() Layout.setMembers()}.
 */
setMembers?: Function;

/**
 * See {@link isc.Layout.dropLineProperties Layout.dropLineProperties}.
 */
dropLineProperties?: Canvas;

/**
 * See {@link isc.Layout.layoutMargin Layout.layoutMargin}.
 */
layoutMargin?: number;

/**
 * See {@link isc.Layout.resizeBarProperties Layout.resizeBarProperties}.
 */
resizeBarProperties?: Splitbar;

/**
 * See {@link isc.Layout.animateMemberTime Layout.animateMemberTime}.
 */
animateMemberTime?: number;

/**
 * See {@link isc.Layout.reflowNow() Layout.reflowNow()}.
 */
reflowNow?: Function;

/**
 * See {@link isc.Layout.hPolicy Layout.hPolicy}.
 */
hPolicy?: string;

/**
 * See {@link isc.Layout.placeHolderProperties Layout.placeHolderProperties}.
 */
placeHolderProperties?: Canvas;

/**
 * See {@link isc.Layout.revealChild() Layout.revealChild()}.
 */
revealChild?: Function;

/**
 * See {@link isc.Layout.showDragPlaceHolder Layout.showDragPlaceHolder}.
 */
showDragPlaceHolder?: boolean;

/**
 * See {@link isc.Layout.addMember() Layout.addMember()}.
 */
addMember?: Function;

/**
 * See {@link isc.Layout.getMembers() Layout.getMembers()}.
 */
getMembers?: Function;

/**
 * See {@link isc.Layout.overflow Layout.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.Layout.layoutBottomMargin Layout.layoutBottomMargin}.
 */
layoutBottomMargin?: number;

/**
 * See {@link isc.Layout.addMembers() Layout.addMembers()}.
 */
addMembers?: Function;

/**
 * See {@link isc.Layout.hideDropLine() Layout.hideDropLine()}.
 */
hideDropLine?: Function;

/**
 * See {@link isc.Layout.showDropLines Layout.showDropLines}.
 */
showDropLines?: boolean;

/**
 * See {@link isc.Layout.editProxyConstructor Layout.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Layout.getMemberDefaultBreadth() Layout.getMemberDefaultBreadth()}.
 */
getMemberDefaultBreadth?: Function;

/**
 * See {@link isc.Layout.layoutEndMargin Layout.layoutEndMargin}.
 */
layoutEndMargin?: number;

/**
 * See {@link isc.Layout.layoutLeftMargin Layout.layoutLeftMargin}.
 */
layoutLeftMargin?: number;

/**
 * See {@link isc.Layout.setAlign() Layout.setAlign()}.
 */
setAlign?: Function;

/**
 * See {@link isc.Layout.minMemberSize Layout.minMemberSize}.
 */
minMemberSize?: number;

/**
 * See {@link isc.Layout.canDropComponents Layout.canDropComponents}.
 */
canDropComponents?: boolean;

/**
 * See {@link isc.Layout.reverseOrder Layout.reverseOrder}.
 */
reverseOrder?: boolean;

/**
 * See {@link isc.Layout.orientation Layout.orientation}.
 */
orientation?: string;

/**
 * See {@link isc.Layout.layoutIsDirty() Layout.layoutIsDirty()}.
 */
layoutIsDirty?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Layout wraps the SmartClient widget class
 * {@link isc.Layout Layout} for React, allowing you to import
 * Layout for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class Layout extends Canvas {
    props: AsComponentXML<LayoutProps>;
}
