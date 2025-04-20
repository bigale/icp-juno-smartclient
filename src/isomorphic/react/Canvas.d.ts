import React from 'react';
import { IBaseComponent } from './core/IBaseComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CanvasProps {

/**
 * See {@link isc.Canvas.visibilityChanged() Canvas.visibilityChanged()}.
 */
visibilityChanged?: Function;

/**
 * See {@link isc.Canvas.locatePeersType Canvas.locatePeersType}.
 */
locatePeersType?: string;

/**
 * See {@link isc.Canvas.dragResizeMove() Canvas.dragResizeMove()}.
 */
dragResizeMove?: Function;

/**
 * See {@link isc.Canvas.animateResize() Canvas.animateResize()}.
 */
animateResize?: Function;

/**
 * See {@link isc.Canvas.maxHeight Canvas.maxHeight}.
 */
maxHeight?: number;

/**
 * See {@link isc.Canvas.dropTarget Canvas.dropTarget}.
 */
dropTarget?: Canvas | string;

/**
 * See {@link isc.Canvas.getContents() Canvas.getContents()}.
 */
getContents?: Function;

/**
 * See {@link isc.Canvas.shouldDragScroll() Canvas.shouldDragScroll()}.
 */
shouldDragScroll?: Function;

/**
 * See {@link isc.Canvas.moveTo() Canvas.moveTo()}.
 */
moveTo?: Function;

/**
 * See {@link isc.Canvas.resizeBarTarget Canvas.resizeBarTarget}.
 */
resizeBarTarget?: string;

/**
 * See {@link isc.Canvas.editNode Canvas.editNode}.
 */
editNode?: EditNode;

/**
 * See {@link isc.Canvas.autoDraw Canvas.autoDraw}.
 */
autoDraw?: boolean;

/**
 * See {@link isc.Canvas.getWidth() Canvas.getWidth()}.
 */
getWidth?: Function;

/**
 * See {@link isc.Canvas.proportionalResizing Canvas.proportionalResizing}.
 */
proportionalResizing?: string;

/**
 * See {@link isc.Canvas.autoShowParent Canvas.autoShowParent}.
 */
autoShowParent?: boolean;

/**
 * See {@link isc.Canvas.edgeSize Canvas.edgeSize}.
 */
edgeSize?: number;

/**
 * See {@link isc.Canvas.htmlElement Canvas.htmlElement}.
 */
htmlElement?: string;

/**
 * See {@link isc.Canvas.animateScrollTime Canvas.animateScrollTime}.
 */
animateScrollTime?: number;

/**
 * See {@link isc.Canvas.setBottom() Canvas.setBottom()}.
 */
setBottom?: Function;

/**
 * See {@link isc.Canvas.encloses() Canvas.encloses()}.
 */
encloses?: Function;

/**
 * See {@link isc.Canvas.pageScrollUp() Canvas.pageScrollUp()}.
 */
pageScrollUp?: Function;

/**
 * See {@link isc.Canvas.leavePageSpace Canvas.leavePageSpace}.
 */
leavePageSpace?: number;

/**
 * See {@link isc.Canvas.setAriaState() Canvas.setAriaState()}.
 */
setAriaState?: Function;

/**
 * See {@link isc.Canvas.dropOut() Canvas.dropOut()}.
 */
dropOut?: Function;

/**
 * See {@link isc.Canvas.isGroup Canvas.isGroup}.
 */
isGroup?: boolean;

/**
 * See {@link isc.Canvas.linkHTML() Canvas.linkHTML()}.
 */
linkHTML?: Function;

/**
 * See {@link isc.Canvas.shadowSoftness Canvas.shadowSoftness}.
 */
shadowSoftness?: number;

/**
 * See {@link isc.Canvas.hoverHeight Canvas.hoverHeight}.
 */
hoverHeight?: number;

/**
 * See {@link isc.Canvas.isSnapAlignCandidate Canvas.isSnapAlignCandidate}.
 */
isSnapAlignCandidate?: boolean;

/**
 * See {@link isc.Canvas.hoverMoveWithMouse Canvas.hoverMoveWithMouse}.
 */
hoverMoveWithMouse?: boolean;

/**
 * See {@link isc.Canvas.keepInParentRect Canvas.keepInParentRect}.
 */
keepInParentRect?: boolean | number[];

/**
 * See {@link isc.Canvas.opacity Canvas.opacity}.
 */
opacity?: number;

/**
 * See {@link isc.Canvas.getViewportWidth() Canvas.getViewportWidth()}.
 */
getViewportWidth?: Function;

/**
 * See {@link isc.Canvas.updateTabPositionOnReparent Canvas.updateTabPositionOnReparent}.
 */
updateTabPositionOnReparent?: boolean;

/**
 * See {@link isc.Canvas.dragMove() Canvas.dragMove()}.
 */
dragMove?: Function;

/**
 * See {@link isc.Canvas.canFocus Canvas.canFocus}.
 */
canFocus?: boolean;

/**
 * See {@link isc.Canvas.testDataContext Canvas.testDataContext}.
 */
testDataContext?: DataContext;

/**
 * See {@link isc.Canvas.moveBy() Canvas.moveBy()}.
 */
moveBy?: Function;

/**
 * See {@link isc.Canvas.mouseStillDownInitialDelay Canvas.mouseStillDownInitialDelay}.
 */
mouseStillDownInitialDelay?: number;

/**
 * See {@link isc.Canvas.skinImgDir Canvas.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.Canvas.enable() Canvas.enable()}.
 */
enable?: Function;

/**
 * See {@link isc.Canvas.moveBelow() Canvas.moveBelow()}.
 */
moveBelow?: Function;

/**
 * See {@link isc.Canvas.animateMoveAcceleration Canvas.animateMoveAcceleration}.
 */
animateMoveAcceleration?: string;

/**
 * See {@link isc.Canvas.shadowVOffset Canvas.shadowVOffset}.
 */
shadowVOffset?: number;

/**
 * See {@link isc.Canvas.useOpacityFilter Canvas.useOpacityFilter}.
 */
useOpacityFilter?: boolean;

/**
 * See {@link isc.Canvas.hoverDelay Canvas.hoverDelay}.
 */
hoverDelay?: number;

/**
 * See {@link isc.Canvas.enclosesRect() Canvas.enclosesRect()}.
 */
enclosesRect?: Function;

/**
 * See {@link isc.Canvas.getImgURL() Canvas.getImgURL()}.
 */
getImgURL?: Function;

/**
 * See {@link isc.Canvas.dragResizeAppearance Canvas.dragResizeAppearance}.
 */
dragResizeAppearance?: string;

/**
 * See {@link isc.Canvas.hideUsingDisplayNone Canvas.hideUsingDisplayNone}.
 */
hideUsingDisplayNone?: boolean;

/**
 * See {@link isc.Canvas.left Canvas.left}.
 */
left?: number | string;

/**
 * See {@link isc.Canvas.mouseWheel() Canvas.mouseWheel()}.
 */
mouseWheel?: Function;

/**
 * See {@link isc.Canvas.setShowPointer() Canvas.setShowPointer()}.
 */
setShowPointer?: Function;

/**
 * See {@link isc.Canvas.clickMaskUp() Canvas.clickMaskUp()}.
 */
clickMaskUp?: Function;

/**
 * See {@link isc.Canvas.childrenResizeSnapAlign Canvas.childrenResizeSnapAlign}.
 */
childrenResizeSnapAlign?: boolean;

/**
 * See {@link isc.Canvas.getSnapTo() Canvas.getSnapTo()}.
 */
getSnapTo?: Function;

/**
 * See {@link isc.Canvas.setCanFocus() Canvas.setCanFocus()}.
 */
setCanFocus?: Function;

/**
 * See {@link isc.Canvas.getPageRight() Canvas.getPageRight()}.
 */
getPageRight?: Function;

/**
 * See {@link isc.Canvas.shadowOffset Canvas.shadowOffset}.
 */
shadowOffset?: number;

/**
 * See {@link isc.Canvas.showPendingMarker() Canvas.showPendingMarker()}.
 */
showPendingMarker?: Function;

/**
 * See {@link isc.Canvas.isRuleScope Canvas.isRuleScope}.
 */
isRuleScope?: boolean;

/**
 * See {@link isc.Canvas.getZIndex() Canvas.getZIndex()}.
 */
getZIndex?: Function;

/**
 * See {@link isc.Canvas.getUISummary() Canvas.getUISummary()}.
 */
getUISummary?: Function;

/**
 * See {@link isc.Canvas.canDragReposition Canvas.canDragReposition}.
 */
canDragReposition?: boolean;

/**
 * See {@link isc.Canvas.dragRepositionAppearance Canvas.dragRepositionAppearance}.
 */
dragRepositionAppearance?: string;

/**
 * See {@link isc.Canvas.childrenSnapResizeToGrid Canvas.childrenSnapResizeToGrid}.
 */
childrenSnapResizeToGrid?: boolean;

/**
 * See {@link isc.Canvas.setEditMode() Canvas.setEditMode()}.
 */
setEditMode?: Function;

/**
 * See {@link isc.Canvas.getPanelContainer() Canvas.getPanelContainer()}.
 */
getPanelContainer?: Function;

/**
 * See {@link isc.Canvas.placeNear() Canvas.placeNear()}.
 */
placeNear?: Function;

/**
 * See {@link isc.Canvas.scrollToRight() Canvas.scrollToRight()}.
 */
scrollToRight?: Function;

/**
 * See {@link isc.Canvas.shadowHOffset Canvas.shadowHOffset}.
 */
shadowHOffset?: number;

/**
 * See {@link isc.Canvas.dragMinHeight Canvas.dragMinHeight}.
 */
dragMinHeight?: number;

/**
 * See {@link isc.Canvas.padding Canvas.padding}.
 */
padding?: number;

/**
 * See {@link isc.Canvas.enableWhen Canvas.enableWhen}.
 */
enableWhen?: AdvancedCriteria;

/**
 * See {@link isc.Canvas.getDefiningPropertyName() Canvas.getDefiningPropertyName()}.
 */
getDefiningPropertyName?: Function;

/**
 * See {@link isc.Canvas.animateResizeAcceleration Canvas.animateResizeAcceleration}.
 */
animateResizeAcceleration?: string;

/**
 * See {@link isc.Canvas.intersectsRect() Canvas.intersectsRect()}.
 */
intersectsRect?: Function;

/**
 * See {@link isc.Canvas.hideContextMenu() Canvas.hideContextMenu()}.
 */
hideContextMenu?: Function;

/**
 * See {@link isc.Canvas.useTouchScrolling Canvas.useTouchScrolling}.
 */
useTouchScrolling?: boolean;

/**
 * See {@link isc.Canvas.setStyleName() Canvas.setStyleName()}.
 */
setStyleName?: Function;

/**
 * See {@link isc.Canvas.dragMaxWidth Canvas.dragMaxWidth}.
 */
dragMaxWidth?: number;

/**
 * See {@link isc.Canvas.setEnabled() Canvas.setEnabled()}.
 */
setEnabled?: Function;

/**
 * See {@link isc.Canvas.dragStartDistance Canvas.dragStartDistance}.
 */
dragStartDistance?: number;

/**
 * See {@link isc.Canvas.containsEventTarget() Canvas.containsEventTarget()}.
 */
containsEventTarget?: Function;

/**
 * See {@link isc.Canvas.matchElement Canvas.matchElement}.
 */
matchElement?: boolean;

/**
 * See {@link isc.Canvas.hideClickMask() Canvas.hideClickMask()}.
 */
hideClickMask?: Function;

/**
 * See {@link isc.Canvas.leaveGroupLabelSpace Canvas.leaveGroupLabelSpace}.
 */
leaveGroupLabelSpace?: boolean;

/**
 * See {@link isc.Canvas.focusInPreviousTabElement() Canvas.focusInPreviousTabElement()}.
 */
focusInPreviousTabElement?: Function;

/**
 * See {@link isc.Canvas.canDragResize Canvas.canDragResize}.
 */
canDragResize?: boolean;

/**
 * See {@link isc.Canvas.position Canvas.position}.
 */
position?: string;

/**
 * See {@link isc.Canvas.depeer() Canvas.depeer()}.
 */
depeer?: Function;

/**
 * See {@link isc.Canvas.getVisibleWidth() Canvas.getVisibleWidth()}.
 */
getVisibleWidth?: Function;

/**
 * See {@link isc.Canvas.edgeCursorMap Canvas.edgeCursorMap}.
 */
edgeCursorMap?: Object;

/**
 * See {@link isc.Canvas.scrollToBottom() Canvas.scrollToBottom()}.
 */
scrollToBottom?: Function;

/**
 * See {@link isc.Canvas.updateTabPositionForDraw() Canvas.updateTabPositionForDraw()}.
 */
updateTabPositionForDraw?: Function;

/**
 * See {@link isc.Canvas.animateMoveTime Canvas.animateMoveTime}.
 */
animateMoveTime?: number;

/**
 * See {@link isc.Canvas.layoutAlign Canvas.layoutAlign}.
 */
layoutAlign?: string | string;

/**
 * See {@link isc.Canvas.groupPadding Canvas.groupPadding}.
 */
groupPadding?: number;

/**
 * See {@link isc.Canvas.height Canvas.height}.
 */
height?: number | string;

/**
 * See {@link isc.Canvas.getScrollWidth() Canvas.getScrollWidth()}.
 */
getScrollWidth?: Function;

/**
 * See {@link isc.Canvas.initWidget() Canvas.initWidget()}.
 */
initWidget?: Function;

/**
 * See {@link isc.Canvas.showComponentMask() Canvas.showComponentMask()}.
 */
showComponentMask?: Function;

/**
 * See {@link isc.Canvas.contains() Canvas.contains()}.
 */
contains?: Function;

/**
 * See {@link isc.Canvas.animateShowEffect Canvas.animateShowEffect}.
 */
animateShowEffect?: string | AnimateShowEffect;

/**
 * See {@link isc.Canvas.disabledCursor Canvas.disabledCursor}.
 */
disabledCursor?: string;

/**
 * See {@link isc.Canvas.parentCanvas Canvas.parentCanvas}.
 */
parentCanvas?: Canvas;

/**
 * See {@link isc.Canvas.animateRectTime Canvas.animateRectTime}.
 */
animateRectTime?: number;

/**
 * See {@link isc.Canvas.animateHideTime Canvas.animateHideTime}.
 */
animateHideTime?: number;

/**
 * See {@link isc.Canvas.pendingMarkerStyle Canvas.pendingMarkerStyle}.
 */
pendingMarkerStyle?: string;

/**
 * See {@link isc.Canvas.setBorder() Canvas.setBorder()}.
 */
setBorder?: Function;

/**
 * See {@link isc.Canvas.menuConstructor Canvas.menuConstructor}.
 */
menuConstructor?: string;

/**
 * See {@link isc.Canvas.getInnerHeight() Canvas.getInnerHeight()}.
 */
getInnerHeight?: Function;

/**
 * See {@link isc.Canvas.contextMenu Canvas.contextMenu}.
 */
contextMenu?: Menu;

/**
 * See {@link isc.Canvas.setValuesManager() Canvas.setValuesManager()}.
 */
setValuesManager?: Function;

/**
 * See {@link isc.Canvas.shadowColor Canvas.shadowColor}.
 */
shadowColor?: string;

/**
 * See {@link isc.Canvas.getParentElements() Canvas.getParentElements()}.
 */
getParentElements?: Function;

/**
 * See {@link isc.Canvas.setBackgroundColor() Canvas.setBackgroundColor()}.
 */
setBackgroundColor?: Function;

/**
 * See {@link isc.Canvas.groupTitle Canvas.groupTitle}.
 */
groupTitle?: string;

/**
 * See {@link isc.Canvas.animateMove() Canvas.animateMove()}.
 */
animateMove?: Function;

/**
 * See {@link isc.Canvas.forwardSVGeventsToObject Canvas.forwardSVGeventsToObject}.
 */
forwardSVGeventsToObject?: boolean;

/**
 * See {@link isc.Canvas.scrollBy() Canvas.scrollBy()}.
 */
scrollBy?: Function;

/**
 * See {@link isc.Canvas.initComplete() Canvas.initComplete()}.
 */
initComplete?: Function;

/**
 * See {@link isc.Canvas.groupBorderCSS Canvas.groupBorderCSS}.
 */
groupBorderCSS?: string;

/**
 * See {@link isc.Canvas.definingPropertyNameOptions Canvas.definingPropertyNameOptions}.
 */
definingPropertyNameOptions?: string[];

/**
 * See {@link isc.Canvas.adjustForContent() Canvas.adjustForContent()}.
 */
adjustForContent?: Function;

/**
 * See {@link isc.Canvas.redrawOnResize Canvas.redrawOnResize}.
 */
redrawOnResize?: boolean;

/**
 * See {@link isc.Canvas.shadowDepth Canvas.shadowDepth}.
 */
shadowDepth?: number;

/**
 * See {@link isc.Canvas.showRecursively() Canvas.showRecursively()}.
 */
showRecursively?: Function;

/**
 * See {@link isc.Canvas.setWidth() Canvas.setWidth()}.
 */
setWidth?: Function;

/**
 * See {@link isc.Canvas.getID() Canvas.getID()}.
 */
getID?: Function;

/**
 * See {@link isc.Canvas.backgroundColor Canvas.backgroundColor}.
 */
backgroundColor?: string;

/**
 * See {@link isc.Canvas.border Canvas.border}.
 */
border?: string;

/**
 * See {@link isc.Canvas.snapAlignCenterLineStyle Canvas.snapAlignCenterLineStyle}.
 */
snapAlignCenterLineStyle?: string;

/**
 * See {@link isc.Canvas.animateHide() Canvas.animateHide()}.
 */
animateHide?: Function;

/**
 * See {@link isc.Canvas.mouseStillDownDelay Canvas.mouseStillDownDelay}.
 */
mouseStillDownDelay?: number;

/**
 * See {@link isc.Canvas.dragOpacity Canvas.dragOpacity}.
 */
dragOpacity?: number;

/**
 * See {@link isc.Canvas.getPrintHTML() Canvas.getPrintHTML()}.
 */
getPrintHTML?: Function;

/**
 * See {@link isc.Canvas.backgroundPosition Canvas.backgroundPosition}.
 */
backgroundPosition?: string;

/**
 * See {@link isc.Canvas.setPercentSource() Canvas.setPercentSource()}.
 */
setPercentSource?: Function;

/**
 * See {@link isc.Canvas.animateShow() Canvas.animateShow()}.
 */
animateShow?: Function;

/**
 * See {@link isc.Canvas.autoPopulateData Canvas.autoPopulateData}.
 */
autoPopulateData?: boolean;

/**
 * See {@link isc.Canvas.animateFade() Canvas.animateFade()}.
 */
animateFade?: Function;

/**
 * See {@link isc.Canvas.getVSnapPosition() Canvas.getVSnapPosition()}.
 */
getVSnapPosition?: Function;

/**
 * See {@link isc.Canvas.destroyed Canvas.destroyed}.
 */
destroyed?: boolean;

/**
 * See {@link isc.Canvas.getFullDataPath() Canvas.getFullDataPath()}.
 */
getFullDataPath?: Function;

/**
 * See {@link isc.Canvas.setGroupTitle() Canvas.setGroupTitle()}.
 */
setGroupTitle?: Function;

/**
 * See {@link isc.Canvas.dropTypes Canvas.dropTypes}.
 */
dropTypes?: string[] | string;

/**
 * See {@link isc.Canvas.showHoverComponents Canvas.showHoverComponents}.
 */
showHoverComponents?: boolean;

/**
 * See {@link isc.Canvas.isDrawn() Canvas.isDrawn()}.
 */
isDrawn?: Function;

/**
 * See {@link isc.Canvas.accessKey Canvas.accessKey}.
 */
accessKey?: string;

/**
 * See {@link isc.Canvas.scrolled() Canvas.scrolled()}.
 */
scrolled?: Function;

/**
 * See {@link isc.Canvas.layoutChildren() Canvas.layoutChildren()}.
 */
layoutChildren?: Function;

/**
 * See {@link isc.Canvas.doubleClick() Canvas.doubleClick()}.
 */
doubleClick?: Function;

/**
 * See {@link isc.Canvas.dataContext Canvas.dataContext}.
 */
dataContext?: DataContext;

/**
 * See {@link isc.Canvas.receiveScrollbarEvents Canvas.receiveScrollbarEvents}.
 */
receiveScrollbarEvents?: boolean;

/**
 * See {@link isc.Canvas.getPageBottom() Canvas.getPageBottom()}.
 */
getPageBottom?: Function;

/**
 * See {@link isc.Canvas.hideComponentMask() Canvas.hideComponentMask()}.
 */
hideComponentMask?: Function;

/**
 * See {@link isc.Canvas.getHeight() Canvas.getHeight()}.
 */
getHeight?: Function;

/**
 * See {@link isc.Canvas.snapAxis Canvas.snapAxis}.
 */
snapAxis?: string;

/**
 * See {@link isc.Canvas.childrenSnapToGrid Canvas.childrenSnapToGrid}.
 */
childrenSnapToGrid?: boolean;

/**
 * See {@link isc.Canvas.canDropBefore Canvas.canDropBefore}.
 */
canDropBefore?: boolean;

/**
 * See {@link isc.Canvas.addPeer() Canvas.addPeer()}.
 */
addPeer?: Function;

/**
 * See {@link isc.Canvas.valuesManager Canvas.valuesManager}.
 */
valuesManager?: ValuesManager | string;

/**
 * See {@link isc.Canvas.scrollbarConstructor Canvas.scrollbarConstructor}.
 */
scrollbarConstructor?: string;

/**
 * See {@link isc.Canvas.snapGridStyle Canvas.snapGridStyle}.
 */
snapGridStyle?: string;

/**
 * See {@link isc.Canvas.getOffsetY() Canvas.getOffsetY()}.
 */
getOffsetY?: Function;

/**
 * See {@link isc.Canvas.clearExplicitTabIndex() Canvas.clearExplicitTabIndex()}.
 */
clearExplicitTabIndex?: Function;

/**
 * See {@link isc.Canvas.getInnerHTML() Canvas.getInnerHTML()}.
 */
getInnerHTML?: Function;

/**
 * See {@link isc.Canvas.getInnerContentHeight() Canvas.getInnerContentHeight()}.
 */
getInnerContentHeight?: Function;

/**
 * See {@link isc.Canvas.dragMaxHeight Canvas.dragMaxHeight}.
 */
dragMaxHeight?: number;

/**
 * See {@link isc.Canvas.hide() Canvas.hide()}.
 */
hide?: Function;

/**
 * See {@link isc.Canvas.getLocalId() Canvas.getLocalId()}.
 */
getLocalId?: Function;

/**
 * See {@link isc.Canvas.contents Canvas.contents}.
 */
contents?: string;

/**
 * See {@link isc.Canvas.showShadow Canvas.showShadow}.
 */
showShadow?: boolean;

/**
 * See {@link isc.Canvas.alwaysShowScrollbars Canvas.alwaysShowScrollbars}.
 */
alwaysShowScrollbars?: boolean;

/**
 * See {@link isc.Canvas.parentResized() Canvas.parentResized()}.
 */
parentResized?: Function;

/**
 * See {@link isc.Canvas.mouseMove() Canvas.mouseMove()}.
 */
mouseMove?: Function;

/**
 * See {@link isc.Canvas.scrollbarSize Canvas.scrollbarSize}.
 */
scrollbarSize?: number;

/**
 * See {@link isc.Canvas.removeSnapAlignCandidate() Canvas.removeSnapAlignCandidate()}.
 */
removeSnapAlignCandidate?: Function;

/**
 * See {@link isc.Canvas.borderRadius Canvas.borderRadius}.
 */
borderRadius?: string;

/**
 * See {@link isc.Canvas.doubleClickDelay Canvas.doubleClickDelay}.
 */
doubleClickDelay?: number;

/**
 * See {@link isc.Canvas.bringToFront() Canvas.bringToFront()}.
 */
bringToFront?: Function;

/**
 * See {@link isc.Canvas.htmlPosition Canvas.htmlPosition}.
 */
htmlPosition?: string;

/**
 * See {@link isc.Canvas.setImage() Canvas.setImage()}.
 */
setImage?: Function;

/**
 * See {@link isc.Canvas.keyPress() Canvas.keyPress()}.
 */
keyPress?: Function;

/**
 * See {@link isc.Canvas.snapOnDrop Canvas.snapOnDrop}.
 */
snapOnDrop?: boolean;

/**
 * See {@link isc.Canvas.useBackMask Canvas.useBackMask}.
 */
useBackMask?: boolean;

/**
 * See {@link isc.Canvas.clear() Canvas.clear()}.
 */
clear?: Function;

/**
 * See {@link isc.Canvas.destroying Canvas.destroying}.
 */
destroying?: boolean;

/**
 * See {@link isc.Canvas.dynamicContentsVars Canvas.dynamicContentsVars}.
 */
dynamicContentsVars?: ValueMap;

/**
 * See {@link isc.Canvas.containsFocus() Canvas.containsFocus()}.
 */
containsFocus?: Function;

/**
 * See {@link isc.Canvas.ariaRole Canvas.ariaRole}.
 */
ariaRole?: string;

/**
 * See {@link isc.Canvas.dynamicContents Canvas.dynamicContents}.
 */
dynamicContents?: boolean;

/**
 * See {@link isc.Canvas.isDisabled() Canvas.isDisabled()}.
 */
isDisabled?: Function;

/**
 * See {@link isc.Canvas.dragRepositionMove() Canvas.dragRepositionMove()}.
 */
dragRepositionMove?: Function;

/**
 * See {@link isc.Canvas.updateChildTabPositions() Canvas.updateChildTabPositions()}.
 */
updateChildTabPositions?: Function;

/**
 * See {@link isc.Canvas.setContents() Canvas.setContents()}.
 */
setContents?: Function;

/**
 * See {@link isc.Canvas.showDragShadow Canvas.showDragShadow}.
 */
showDragShadow?: boolean;

/**
 * See {@link isc.Canvas.canHover Canvas.canHover}.
 */
canHover?: boolean;

/**
 * See {@link isc.Canvas.drop() Canvas.drop()}.
 */
drop?: Function;

/**
 * See {@link isc.Canvas.keyUp() Canvas.keyUp()}.
 */
keyUp?: Function;

/**
 * See {@link isc.Canvas.sizeMayChangeOnRedraw Canvas.sizeMayChangeOnRedraw}.
 */
sizeMayChangeOnRedraw?: boolean;

/**
 * See {@link isc.Canvas.resizeTo() Canvas.resizeTo()}.
 */
resizeTo?: Function;

/**
 * See {@link isc.Canvas.isEnabled() Canvas.isEnabled()}.
 */
isEnabled?: Function;

/**
 * See {@link isc.Canvas.momentumScrollMinSpeed Canvas.momentumScrollMinSpeed}.
 */
momentumScrollMinSpeed?: number;

/**
 * See {@link isc.Canvas.snapToAlign Canvas.snapToAlign}.
 */
snapToAlign?: boolean;

/**
 * See {@link isc.Canvas.getHoverHTML() Canvas.getHoverHTML()}.
 */
getHoverHTML?: Function;

/**
 * See {@link isc.Canvas.handleHover() Canvas.handleHover()}.
 */
handleHover?: Function;

/**
 * See {@link isc.Canvas.ruleContextChanged() Canvas.ruleContextChanged()}.
 */
ruleContextChanged?: Function;

/**
 * See {@link isc.Canvas.getChildTabPosition() Canvas.getChildTabPosition()}.
 */
getChildTabPosition?: Function;

/**
 * See {@link isc.Canvas.blur() Canvas.blur()}.
 */
blur?: Function;

/**
 * See {@link isc.Canvas.startLine Canvas.startLine}.
 */
startLine?: boolean;

/**
 * See {@link isc.Canvas.canSelectText Canvas.canSelectText}.
 */
canSelectText?: boolean;

/**
 * See {@link isc.Canvas.hoverAutoFitWidth Canvas.hoverAutoFitWidth}.
 */
hoverAutoFitWidth?: boolean;

/**
 * See {@link isc.Canvas.draw() Canvas.draw()}.
 */
draw?: Function;

/**
 * See {@link isc.Canvas.willAcceptDrop() Canvas.willAcceptDrop()}.
 */
willAcceptDrop?: Function;

/**
 * See {@link isc.Canvas.setTop() Canvas.setTop()}.
 */
setTop?: Function;

/**
 * See {@link isc.Canvas.peers Canvas.peers}.
 */
peers?: Canvas[];

/**
 * See {@link isc.Canvas.childrenSnapCenterAlign Canvas.childrenSnapCenterAlign}.
 */
childrenSnapCenterAlign?: boolean;

/**
 * See {@link isc.Canvas.sendToBack() Canvas.sendToBack()}.
 */
sendToBack?: Function;

/**
 * See {@link isc.Canvas.dragRepositionStop() Canvas.dragRepositionStop()}.
 */
dragRepositionStop?: Function;

/**
 * See {@link isc.Canvas.hoverScreen Canvas.hoverScreen}.
 */
hoverScreen?: string;

/**
 * See {@link isc.Canvas.canAdaptWidth Canvas.canAdaptWidth}.
 */
canAdaptWidth?: boolean;

/**
 * See {@link isc.Canvas.getHSnapPosition() Canvas.getHSnapPosition()}.
 */
getHSnapPosition?: Function;

/**
 * See {@link isc.Canvas.showCustomScrollbars Canvas.showCustomScrollbars}.
 */
showCustomScrollbars?: boolean;

/**
 * See {@link isc.Canvas.scrollByPercent() Canvas.scrollByPercent()}.
 */
scrollByPercent?: Function;

/**
 * See {@link isc.Canvas.setCursor() Canvas.setCursor()}.
 */
setCursor?: Function;

/**
 * See {@link isc.Canvas.canDrop Canvas.canDrop}.
 */
canDrop?: boolean;

/**
 * See {@link isc.Canvas.show() Canvas.show()}.
 */
show?: Function;

/**
 * See {@link isc.Canvas.percentBox Canvas.percentBox}.
 */
percentBox?: string;

/**
 * See {@link isc.Canvas.hoverHidden() Canvas.hoverHidden()}.
 */
hoverHidden?: Function;

/**
 * See {@link isc.Canvas.dropMove() Canvas.dropMove()}.
 */
dropMove?: Function;

/**
 * See {@link isc.Canvas.scrollToLeft() Canvas.scrollToLeft()}.
 */
scrollToLeft?: Function;

/**
 * See {@link isc.Canvas.getOuterElement() Canvas.getOuterElement()}.
 */
getOuterElement?: Function;

/**
 * See {@link isc.Canvas.correctZoomOverflow Canvas.correctZoomOverflow}.
 */
correctZoomOverflow?: boolean;

/**
 * See {@link isc.Canvas.parentMoved() Canvas.parentMoved()}.
 */
parentMoved?: Function;

/**
 * See {@link isc.Canvas.groupLabelStyleName Canvas.groupLabelStyleName}.
 */
groupLabelStyleName?: string;

/**
 * See {@link isc.Canvas.getTop() Canvas.getTop()}.
 */
getTop?: Function;

/**
 * See {@link isc.Canvas.resizeFrom Canvas.resizeFrom}.
 */
resizeFrom?: string[];

/**
 * See {@link isc.Canvas.minNonEdgeSize Canvas.minNonEdgeSize}.
 */
minNonEdgeSize?: number;

/**
 * See {@link isc.Canvas.snapOffsetLeft Canvas.snapOffsetLeft}.
 */
snapOffsetLeft?: number;

/**
 * See {@link isc.Canvas.snapHGap Canvas.snapHGap}.
 */
snapHGap?: number;

/**
 * See {@link isc.Canvas.getPageTop() Canvas.getPageTop()}.
 */
getPageTop?: Function;

/**
 * See {@link isc.Canvas.setAccessKey() Canvas.setAccessKey()}.
 */
setAccessKey?: Function;

/**
 * See {@link isc.Canvas.animateShowTime Canvas.animateShowTime}.
 */
animateShowTime?: number;

/**
 * See {@link isc.Canvas.canDrag Canvas.canDrag}.
 */
canDrag?: boolean;

/**
 * See {@link isc.Canvas.mouseOut() Canvas.mouseOut()}.
 */
mouseOut?: Function;

/**
 * See {@link isc.Canvas.setDragTracker() Canvas.setDragTracker()}.
 */
setDragTracker?: Function;

/**
 * See {@link isc.Canvas.animateRect() Canvas.animateRect()}.
 */
animateRect?: Function;

/**
 * See {@link isc.Canvas.dataPath Canvas.dataPath}.
 */
dataPath?: string;

/**
 * See {@link isc.Canvas.getPrintStyleName() Canvas.getPrintStyleName()}.
 */
getPrintStyleName?: Function;

/**
 * See {@link isc.Canvas.setShowResizeBar() Canvas.setShowResizeBar()}.
 */
setShowResizeBar?: Function;

/**
 * See {@link isc.Canvas.resized() Canvas.resized()}.
 */
resized?: Function;

/**
 * See {@link isc.Canvas.matchElementWidth Canvas.matchElementWidth}.
 */
matchElementWidth?: string;

/**
 * See {@link isc.Canvas.markForRedraw() Canvas.markForRedraw()}.
 */
markForRedraw?: Function;

/**
 * See {@link isc.Canvas.visibleWhen Canvas.visibleWhen}.
 */
visibleWhen?: AdvancedCriteria;

/**
 * See {@link isc.Canvas.shouldSnapOnDrop() Canvas.shouldSnapOnDrop()}.
 */
shouldSnapOnDrop?: Function;

/**
 * See {@link isc.Canvas.edgeCenterBackgroundColor Canvas.edgeCenterBackgroundColor}.
 */
edgeCenterBackgroundColor?: string;

/**
 * See {@link isc.Canvas.setRelativeTabPosition() Canvas.setRelativeTabPosition()}.
 */
setRelativeTabPosition?: Function;

/**
 * See {@link isc.Canvas.setSnapEdge() Canvas.setSnapEdge()}.
 */
setSnapEdge?: Function;

/**
 * See {@link isc.Canvas.mouseDown() Canvas.mouseDown()}.
 */
mouseDown?: Function;

/**
 * See {@link isc.Canvas.getImage() Canvas.getImage()}.
 */
getImage?: Function;

/**
 * See {@link isc.Canvas.width Canvas.width}.
 */
width?: number | string;

/**
 * See {@link isc.Canvas.maxWidth Canvas.maxWidth}.
 */
maxWidth?: number;

/**
 * See {@link isc.Canvas.animateRectAcceleration Canvas.animateRectAcceleration}.
 */
animateRectAcceleration?: string;

/**
 * See {@link isc.Canvas.getAriaState() Canvas.getAriaState()}.
 */
getAriaState?: Function;

/**
 * See {@link isc.Canvas.setLocatorParent() Canvas.setLocatorParent()}.
 */
setLocatorParent?: Function;

/**
 * See {@link isc.Canvas.maxZoomOverflowError Canvas.maxZoomOverflowError}.
 */
maxZoomOverflowError?: number;

/**
 * See {@link isc.Canvas.alwaysManageFocusNavigation Canvas.alwaysManageFocusNavigation}.
 */
alwaysManageFocusNavigation?: boolean;

/**
 * See {@link isc.Canvas.getRight() Canvas.getRight()}.
 */
getRight?: Function;

/**
 * See {@link isc.Canvas.hoverWidth Canvas.hoverWidth}.
 */
hoverWidth?: number;

/**
 * See {@link isc.Canvas.childComponents Canvas.childComponents}.
 */
childComponents?: Canvas[];

/**
 * See {@link isc.Canvas.persistentMatchElement Canvas.persistentMatchElement}.
 */
persistentMatchElement?: boolean;

/**
 * See {@link isc.Canvas.getContentElement() Canvas.getContentElement()}.
 */
getContentElement?: Function;

/**
 * See {@link isc.Canvas.editProxyConstructor Canvas.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Canvas.useImageForSVG Canvas.useImageForSVG}.
 */
useImageForSVG?: boolean;

/**
 * See {@link isc.Canvas.adaptWidthBy() Canvas.adaptWidthBy()}.
 */
adaptWidthBy?: Function;

/**
 * See {@link isc.Canvas.redraw() Canvas.redraw()}.
 */
redraw?: Function;

/**
 * See {@link isc.Canvas.containsEvent() Canvas.containsEvent()}.
 */
containsEvent?: Function;

/**
 * See {@link isc.Canvas.animateScroll() Canvas.animateScroll()}.
 */
animateScroll?: Function;

/**
 * See {@link isc.Canvas.destroy() Canvas.destroy()}.
 */
destroy?: Function;

/**
 * See {@link isc.Canvas.setOpacity() Canvas.setOpacity()}.
 */
setOpacity?: Function;

/**
 * See {@link isc.Canvas.childrenSnapAlign Canvas.childrenSnapAlign}.
 */
childrenSnapAlign?: boolean;

/**
 * See {@link isc.Canvas.dragIntersectStyle Canvas.dragIntersectStyle}.
 */
dragIntersectStyle?: string;

/**
 * See {@link isc.Canvas.edgeShowCenter Canvas.edgeShowCenter}.
 */
edgeShowCenter?: boolean;

/**
 * See {@link isc.Canvas.setUpdateTabPositionOnReparent() Canvas.setUpdateTabPositionOnReparent()}.
 */
setUpdateTabPositionOnReparent?: Function;

/**
 * See {@link isc.Canvas.canvasItem Canvas.canvasItem}.
 */
canvasItem?: CanvasItem;

/**
 * See {@link isc.Canvas.matchElementHeight Canvas.matchElementHeight}.
 */
matchElementHeight?: string;

/**
 * See {@link isc.Canvas.setEdgeOpacity() Canvas.setEdgeOpacity()}.
 */
setEdgeOpacity?: Function;

/**
 * See {@link isc.Canvas.defaultHeight Canvas.defaultHeight}.
 */
defaultHeight?: number;

/**
 * See {@link isc.Canvas.dataContextChanged() Canvas.dataContextChanged()}.
 */
dataContextChanged?: Function;

/**
 * See {@link isc.Canvas.setShowSnapGrid() Canvas.setShowSnapGrid()}.
 */
setShowSnapGrid?: Function;

/**
 * See {@link isc.Canvas.dragMinWidth Canvas.dragMinWidth}.
 */
dragMinWidth?: number;

/**
 * See {@link isc.Canvas.percentSource Canvas.percentSource}.
 */
percentSource?: Canvas;

/**
 * See {@link isc.Canvas.isPrinting Canvas.isPrinting}.
 */
isPrinting?: boolean;

/**
 * See {@link isc.Canvas.snapVGap Canvas.snapVGap}.
 */
snapVGap?: number;

/**
 * See {@link isc.Canvas.animateShowAcceleration Canvas.animateShowAcceleration}.
 */
animateShowAcceleration?: string;

/**
 * See {@link isc.Canvas.animateFadeTime Canvas.animateFadeTime}.
 */
animateFadeTime?: number;

/**
 * See {@link isc.Canvas.animateScrollAcceleration Canvas.animateScrollAcceleration}.
 */
animateScrollAcceleration?: string;

/**
 * See {@link isc.Canvas.pointerTarget Canvas.pointerTarget}.
 */
pointerTarget?: string | string;

/**
 * See {@link isc.Canvas.workflows Canvas.workflows}.
 */
workflows?: Process[];

/**
 * See {@link isc.Canvas.getScrollTop() Canvas.getScrollTop()}.
 */
getScrollTop?: Function;

/**
 * See {@link isc.Canvas.childrenSnapEdgeAlign Canvas.childrenSnapEdgeAlign}.
 */
childrenSnapEdgeAlign?: boolean;

/**
 * See {@link isc.Canvas.getMasterCanvas() Canvas.getMasterCanvas()}.
 */
getMasterCanvas?: Function;

/**
 * See {@link isc.Canvas.shadowSpread Canvas.shadowSpread}.
 */
shadowSpread?: number;

/**
 * See {@link isc.Canvas.setHtmlElement() Canvas.setHtmlElement()}.
 */
setHtmlElement?: Function;

/**
 * See {@link isc.Canvas.printStyleName Canvas.printStyleName}.
 */
printStyleName?: string;

/**
 * See {@link isc.Canvas.setMargin() Canvas.setMargin()}.
 */
setMargin?: Function;

/**
 * See {@link isc.Canvas.cursor Canvas.cursor}.
 */
cursor?: string;

/**
 * See {@link isc.Canvas.markForDestroy() Canvas.markForDestroy()}.
 */
markForDestroy?: Function;

/**
 * See {@link isc.Canvas.snapHDirection Canvas.snapHDirection}.
 */
snapHDirection?: string;

/**
 * See {@link isc.Canvas.backgroundImage Canvas.backgroundImage}.
 */
backgroundImage?: string;

/**
 * See {@link isc.Canvas.click() Canvas.click()}.
 */
click?: Function;

/**
 * See {@link isc.Canvas.updateChildTabPosition() Canvas.updateChildTabPosition()}.
 */
updateChildTabPosition?: Function;

/**
 * See {@link isc.Canvas.revealChild() Canvas.revealChild()}.
 */
revealChild?: Function;

/**
 * See {@link isc.Canvas.componentMaskProperties Canvas.componentMaskProperties}.
 */
componentMaskProperties?: Canvas;

/**
 * See {@link isc.Canvas.locatorName Canvas.locatorName}.
 */
locatorName?: string;

/**
 * See {@link isc.Canvas.snapGridLineProperties Canvas.snapGridLineProperties}.
 */
snapGridLineProperties?: DrawLine;

/**
 * See {@link isc.Canvas.animateHideEffect Canvas.animateHideEffect}.
 */
animateHideEffect?: string | AnimateShowEffect;

/**
 * See {@link isc.Canvas.setRight() Canvas.setRight()}.
 */
setRight?: Function;

/**
 * See {@link isc.Canvas.locateChildrenBy Canvas.locateChildrenBy}.
 */
locateChildrenBy?: string;

/**
 * See {@link isc.Canvas.appImgDir Canvas.appImgDir}.
 */
appImgDir?: string;

/**
 * See {@link isc.Canvas.minWidth Canvas.minWidth}.
 */
minWidth?: number;

/**
 * See {@link isc.Canvas.mouseStillDown() Canvas.mouseStillDown()}.
 */
mouseStillDown?: Function;

/**
 * See {@link isc.Canvas.scrollToPercent() Canvas.scrollToPercent()}.
 */
scrollToPercent?: Function;

/**
 * See {@link isc.Canvas.shouldPrint Canvas.shouldPrint}.
 */
shouldPrint?: boolean;

/**
 * See {@link isc.Canvas.useNativeDrag Canvas.useNativeDrag}.
 */
useNativeDrag?: boolean;

/**
 * See {@link isc.Canvas.setSnapOffsetTop() Canvas.setSnapOffsetTop()}.
 */
setSnapOffsetTop?: Function;

/**
 * See {@link isc.Canvas.dragResizeStop() Canvas.dragResizeStop()}.
 */
dragResizeStop?: Function;

/**
 * See {@link isc.Canvas.noDoubleClicks Canvas.noDoubleClicks}.
 */
noDoubleClicks?: boolean;

/**
 * See {@link isc.Canvas.proportionalResizeModifiers Canvas.proportionalResizeModifiers}.
 */
proportionalResizeModifiers?: string[];

/**
 * See {@link isc.Canvas.setGroupLabelBackgroundColor() Canvas.setGroupLabelBackgroundColor()}.
 */
setGroupLabelBackgroundColor?: Function;

/**
 * See {@link isc.Canvas.imgHTML() Canvas.imgHTML()}.
 */
imgHTML?: Function;

/**
 * See {@link isc.Canvas.getScrollRight() Canvas.getScrollRight()}.
 */
getScrollRight?: Function;

/**
 * See {@link isc.Canvas.dragStop() Canvas.dragStop()}.
 */
dragStop?: Function;

/**
 * See {@link isc.Canvas.updateEditNode() Canvas.updateEditNode()}.
 */
updateEditNode?: Function;

/**
 * See {@link isc.Canvas.snapResizeToAlign Canvas.snapResizeToAlign}.
 */
snapResizeToAlign?: boolean;

/**
 * See {@link isc.Canvas.removeRuleContext() Canvas.removeRuleContext()}.
 */
removeRuleContext?: Function;

/**
 * See {@link isc.Canvas.overflow Canvas.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.Canvas.getOffsetX() Canvas.getOffsetX()}.
 */
getOffsetX?: Function;

/**
 * See {@link isc.Canvas.edgeOffset Canvas.edgeOffset}.
 */
edgeOffset?: number;

/**
 * See {@link isc.Canvas.snapAlignEdgeLineStyle Canvas.snapAlignEdgeLineStyle}.
 */
snapAlignEdgeLineStyle?: string;

/**
 * See {@link isc.Canvas.focus() Canvas.focus()}.
 */
focus?: Function;

/**
 * See {@link isc.Canvas.snapToEdgeAlign Canvas.snapToEdgeAlign}.
 */
snapToEdgeAlign?: boolean;

/**
 * See {@link isc.Canvas.customEdges Canvas.customEdges}.
 */
customEdges?: string[];

/**
 * See {@link isc.Canvas.snapOffsetTop Canvas.snapOffsetTop}.
 */
snapOffsetTop?: number;

/**
 * See {@link isc.Canvas.resizeBy() Canvas.resizeBy()}.
 */
resizeBy?: Function;

/**
 * See {@link isc.Canvas.showClickMask() Canvas.showClickMask()}.
 */
showClickMask?: Function;

/**
 * See {@link isc.Canvas.dropOver() Canvas.dropOver()}.
 */
dropOver?: Function;

/**
 * See {@link isc.Canvas.animateAcceleration Canvas.animateAcceleration}.
 */
animateAcceleration?: string;

/**
 * See {@link isc.Canvas.tabIndex Canvas.tabIndex}.
 */
tabIndex?: number;

/**
 * See {@link isc.Canvas.locateChildrenType Canvas.locateChildrenType}.
 */
locateChildrenType?: string;

/**
 * See {@link isc.Canvas.shadowImage Canvas.shadowImage}.
 */
shadowImage?: string;

/**
 * See {@link isc.Canvas.getByLocalId() Canvas.getByLocalId()}.
 */
getByLocalId?: Function;

/**
 * See {@link isc.Canvas.hoverAutoFitMaxWidth Canvas.hoverAutoFitMaxWidth}.
 */
hoverAutoFitMaxWidth?: number | string;

/**
 * See {@link isc.Canvas.focusInNextTabElement() Canvas.focusInNextTabElement()}.
 */
focusInNextTabElement?: Function;

/**
 * See {@link isc.Canvas.getRuleContext() Canvas.getRuleContext()}.
 */
getRuleContext?: Function;

/**
 * See {@link isc.Canvas.setRect() Canvas.setRect()}.
 */
setRect?: Function;

/**
 * See {@link isc.Canvas.dragRepositionStart() Canvas.dragRepositionStart()}.
 */
dragRepositionStart?: Function;

/**
 * See {@link isc.Canvas.enabled Canvas.enabled}.
 */
enabled?: boolean;

/**
 * See {@link isc.Canvas.groupLabelBackgroundColor Canvas.groupLabelBackgroundColor}.
 */
groupLabelBackgroundColor?: string;

/**
 * See {@link isc.Canvas.showNextTo() Canvas.showNextTo()}.
 */
showNextTo?: Function;

/**
 * See {@link isc.Canvas.showResizeBar Canvas.showResizeBar}.
 */
showResizeBar?: boolean;

/**
 * See {@link isc.Canvas.showContextMenu() Canvas.showContextMenu()}.
 */
showContextMenu?: Function;

/**
 * See {@link isc.Canvas.isVisible() Canvas.isVisible()}.
 */
isVisible?: Function;

/**
 * See {@link isc.Canvas.scrollTo() Canvas.scrollTo()}.
 */
scrollTo?: Function;

/**
 * See {@link isc.Canvas.focusAtEnd() Canvas.focusAtEnd()}.
 */
focusAtEnd?: Function;

/**
 * See {@link isc.Canvas.getAriaStateDefaults() Canvas.getAriaStateDefaults()}.
 */
getAriaStateDefaults?: Function;

/**
 * See {@link isc.Canvas.rightMouseDown() Canvas.rightMouseDown()}.
 */
rightMouseDown?: Function;

/**
 * See {@link isc.Canvas.disable() Canvas.disable()}.
 */
disable?: Function;

/**
 * See {@link isc.Canvas.pageScrollDown() Canvas.pageScrollDown()}.
 */
pageScrollDown?: Function;

/**
 * See {@link isc.Canvas.defaultWidth Canvas.defaultWidth}.
 */
defaultWidth?: number;

/**
 * See {@link isc.Canvas.topElement Canvas.topElement}.
 */
topElement?: Canvas;

/**
 * See {@link isc.Canvas.dragMaskType Canvas.dragMaskType}.
 */
dragMaskType?: string;

/**
 * See {@link isc.Canvas.getViewportHeight() Canvas.getViewportHeight()}.
 */
getViewportHeight?: Function;

/**
 * See {@link isc.Canvas.animateTime Canvas.animateTime}.
 */
animateTime?: number;

/**
 * See {@link isc.Canvas.dragTarget Canvas.dragTarget}.
 */
dragTarget?: Canvas | string;

/**
 * See {@link isc.Canvas.getBottom() Canvas.getBottom()}.
 */
getBottom?: Function;

/**
 * See {@link isc.Canvas.canAcceptDrop Canvas.canAcceptDrop}.
 */
canAcceptDrop?: boolean;

/**
 * See {@link isc.Canvas.animateResizeTime Canvas.animateResizeTime}.
 */
animateResizeTime?: number;

/**
 * See {@link isc.Canvas.setDisabled() Canvas.setDisabled()}.
 */
setDisabled?: Function;

/**
 * See {@link isc.Canvas.setTabIndex() Canvas.setTabIndex()}.
 */
setTabIndex?: Function;

/**
 * See {@link isc.Canvas.disableTouchScrollingForDrag Canvas.disableTouchScrollingForDrag}.
 */
disableTouchScrollingForDrag?: boolean;

/**
 * See {@link isc.Canvas.containsPoint() Canvas.containsPoint()}.
 */
containsPoint?: Function;

/**
 * See {@link isc.Canvas.nativeAutoHideScrollbars Canvas.nativeAutoHideScrollbars}.
 */
nativeAutoHideScrollbars?: boolean;

/**
 * See {@link isc.Canvas.setDataContext() Canvas.setDataContext()}.
 */
setDataContext?: Function;

/**
 * See {@link isc.Canvas.setSnapOffsetLeft() Canvas.setSnapOffsetLeft()}.
 */
setSnapOffsetLeft?: Function;

/**
 * See {@link isc.Canvas.setPanelContainer() Canvas.setPanelContainer()}.
 */
setPanelContainer?: Function;

/**
 * See {@link isc.Canvas.snapToCenterAlign Canvas.snapToCenterAlign}.
 */
snapToCenterAlign?: boolean;

/**
 * See {@link isc.Canvas.canAdaptHeight Canvas.canAdaptHeight}.
 */
canAdaptHeight?: boolean;

/**
 * See {@link isc.Canvas.shrinkElementOnHide Canvas.shrinkElementOnHide}.
 */
shrinkElementOnHide?: boolean;

/**
 * See {@link isc.Canvas.ariaState Canvas.ariaState}.
 */
ariaState?: Object;

/**
 * See {@link isc.Canvas.getHoverComponent() Canvas.getHoverComponent()}.
 */
getHoverComponent?: Function;

/**
 * See {@link isc.Canvas.dragStart() Canvas.dragStart()}.
 */
dragStart?: Function;

/**
 * See {@link isc.Canvas.focusChanged() Canvas.focusChanged()}.
 */
focusChanged?: Function;

/**
 * See {@link isc.Canvas.getScrollLeft() Canvas.getScrollLeft()}.
 */
getScrollLeft?: Function;

/**
 * See {@link isc.Canvas.focusAfterGroup() Canvas.focusAfterGroup()}.
 */
focusAfterGroup?: Function;

/**
 * See {@link isc.Canvas.getScrollHeight() Canvas.getScrollHeight()}.
 */
getScrollHeight?: Function;

/**
 * See {@link isc.Canvas.canDragScroll Canvas.canDragScroll}.
 */
canDragScroll?: boolean;

/**
 * See {@link isc.Canvas.edgeBackgroundColor Canvas.edgeBackgroundColor}.
 */
edgeBackgroundColor?: string;

/**
 * See {@link isc.Canvas.animateResizeLayoutMode Canvas.animateResizeLayoutMode}.
 */
animateResizeLayoutMode?: string;

/**
 * See {@link isc.Canvas.edgeImage Canvas.edgeImage}.
 */
edgeImage?: string;

/**
 * See {@link isc.Canvas.showPointer Canvas.showPointer}.
 */
showPointer?: boolean;

/**
 * See {@link isc.Canvas.edgeMarginSize Canvas.edgeMarginSize}.
 */
edgeMarginSize?: number;

/**
 * See {@link isc.Canvas.getScrollbarSize() Canvas.getScrollbarSize()}.
 */
getScrollbarSize?: Function;

/**
 * See {@link isc.Canvas.hoverPersist Canvas.hoverPersist}.
 */
hoverPersist?: string;

/**
 * See {@link isc.Canvas.setPageTop() Canvas.setPageTop()}.
 */
setPageTop?: Function;

/**
 * See {@link isc.Canvas.autoParent Canvas.autoParent}.
 */
autoParent?: string;

/**
 * See {@link isc.Canvas.hover() Canvas.hover()}.
 */
hover?: Function;

/**
 * See {@link isc.Canvas.pointerSettings Canvas.pointerSettings}.
 */
pointerSettings?: PointerSettings;

/**
 * See {@link isc.Canvas.isFocused() Canvas.isFocused()}.
 */
isFocused?: Function;

/**
 * See {@link isc.Canvas.getLeft() Canvas.getLeft()}.
 */
getLeft?: Function;

/**
 * See {@link isc.Canvas.locatePeersBy Canvas.locatePeersBy}.
 */
locatePeersBy?: string;

/**
 * See {@link isc.Canvas.snapToGrid Canvas.snapToGrid}.
 */
snapToGrid?: boolean;

/**
 * See {@link isc.Canvas.endLine Canvas.endLine}.
 */
endLine?: boolean;

/**
 * See {@link isc.Canvas.snapVDirection Canvas.snapVDirection}.
 */
snapVDirection?: string;

/**
 * See {@link isc.Canvas.editProxyProperties Canvas.editProxyProperties}.
 */
editProxyProperties?: EditProxy;

/**
 * See {@link isc.Canvas.dragRepositionCursor Canvas.dragRepositionCursor}.
 */
dragRepositionCursor?: string;

/**
 * See {@link isc.Canvas.hoverFocusKey Canvas.hoverFocusKey}.
 */
hoverFocusKey?: string;

/**
 * See {@link isc.Canvas.provideRuleContext() Canvas.provideRuleContext()}.
 */
provideRuleContext?: Function;

/**
 * See {@link isc.Canvas.setDataPath() Canvas.setDataPath()}.
 */
setDataPath?: Function;

/**
 * See {@link isc.Canvas.locateByIDOnly Canvas.locateByIDOnly}.
 */
locateByIDOnly?: boolean;

/**
 * See {@link isc.Canvas.margin Canvas.margin}.
 */
margin?: number;

/**
 * See {@link isc.Canvas.getSnapEdge() Canvas.getSnapEdge()}.
 */
getSnapEdge?: Function;

/**
 * See {@link isc.Canvas.ID Canvas.ID}.
 */
ID?: string;

/**
 * See {@link isc.Canvas.setHtmlPosition() Canvas.setHtmlPosition()}.
 */
setHtmlPosition?: Function;

/**
 * See {@link isc.Canvas.definingProperty Canvas.definingProperty}.
 */
definingProperty?: string;

/**
 * See {@link isc.Canvas.print() Canvas.print()}.
 */
print?: Function;

/**
 * See {@link isc.Canvas.intersects() Canvas.intersects()}.
 */
intersects?: Function;

/**
 * See {@link isc.Canvas.adaptHeightBy() Canvas.adaptHeightBy()}.
 */
adaptHeightBy?: Function;

/**
 * See {@link isc.Canvas.drawn() Canvas.drawn()}.
 */
drawn?: Function;

/**
 * See {@link isc.Canvas.setMinWidth() Canvas.setMinWidth()}.
 */
setMinWidth?: Function;

/**
 * See {@link isc.Canvas.visibility Canvas.visibility}.
 */
visibility?: string;

/**
 * See {@link isc.Canvas.adaptiveWidthPriority Canvas.adaptiveWidthPriority}.
 */
adaptiveWidthPriority?: number;

/**
 * See {@link isc.Canvas.hoverVAlign Canvas.hoverVAlign}.
 */
hoverVAlign?: string;

/**
 * See {@link isc.Canvas.floatingScrollbars Canvas.floatingScrollbars}.
 */
floatingScrollbars?: boolean;

/**
 * See {@link isc.Canvas.pendingMarkerVisible Canvas.pendingMarkerVisible}.
 */
pendingMarkerVisible?: boolean;

/**
 * See {@link isc.Canvas.setShowShadow() Canvas.setShowShadow()}.
 */
setShowShadow?: Function;

/**
 * See {@link isc.Canvas.extraSpace Canvas.extraSpace}.
 */
extraSpace?: number;

/**
 * See {@link isc.Canvas.showEdges Canvas.showEdges}.
 */
showEdges?: boolean;

/**
 * See {@link isc.Canvas.dragResizeStart() Canvas.dragResizeStart()}.
 */
dragResizeStart?: Function;

/**
 * See {@link isc.Canvas.getParentCanvas() Canvas.getParentCanvas()}.
 */
getParentCanvas?: Function;

/**
 * See {@link isc.Canvas.useCSSShadow Canvas.useCSSShadow}.
 */
useCSSShadow?: boolean;

/**
 * See {@link isc.Canvas.printChildrenAbsolutelyPositioned Canvas.printChildrenAbsolutelyPositioned}.
 */
printChildrenAbsolutelyPositioned?: boolean;

/**
 * See {@link isc.Canvas.componentMaskDefaults Canvas.componentMaskDefaults}.
 */
componentMaskDefaults?: Canvas;

/**
 * See {@link isc.Canvas.autoMaskComponents Canvas.autoMaskComponents}.
 */
autoMaskComponents?: boolean;

/**
 * See {@link isc.Canvas.setBackgroundImage() Canvas.setBackgroundImage()}.
 */
setBackgroundImage?: Function;

/**
 * See {@link isc.Canvas.top Canvas.top}.
 */
top?: number | string;

/**
 * See {@link isc.Canvas.getInnerWidth() Canvas.getInnerWidth()}.
 */
getInnerWidth?: Function;

/**
 * See {@link isc.Canvas.backgroundRepeat Canvas.backgroundRepeat}.
 */
backgroundRepeat?: string;

/**
 * See {@link isc.Canvas.masterElement Canvas.masterElement}.
 */
masterElement?: Canvas;

/**
 * See {@link isc.Canvas.prompt Canvas.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.Canvas.setLeavePageSpace() Canvas.setLeavePageSpace()}.
 */
setLeavePageSpace?: Function;

/**
 * See {@link isc.Canvas.updateHover() Canvas.updateHover()}.
 */
updateHover?: Function;

/**
 * See {@link isc.Canvas.keyDown() Canvas.keyDown()}.
 */
keyDown?: Function;

/**
 * See {@link isc.Canvas.dragType Canvas.dragType}.
 */
dragType?: string;

/**
 * See {@link isc.Canvas.hoverAlign Canvas.hoverAlign}.
 */
hoverAlign?: string;

/**
 * See {@link isc.Canvas.parentElement Canvas.parentElement}.
 */
parentElement?: Canvas;

/**
 * See {@link isc.Canvas.hoverOpacity Canvas.hoverOpacity}.
 */
hoverOpacity?: number;

/**
 * See {@link isc.Canvas.removePeer() Canvas.removePeer()}.
 */
removePeer?: Function;

/**
 * See {@link isc.Canvas.moved() Canvas.moved()}.
 */
moved?: Function;

/**
 * See {@link isc.Canvas.hoverStyle Canvas.hoverStyle}.
 */
hoverStyle?: string;

/**
 * See {@link isc.Canvas.addChild() Canvas.addChild()}.
 */
addChild?: Function;

/**
 * See {@link isc.Canvas.snapAlignCandidates Canvas.snapAlignCandidates}.
 */
snapAlignCandidates?: Canvas[];

/**
 * See {@link isc.Canvas.styleName Canvas.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.Canvas.snapTo Canvas.snapTo}.
 */
snapTo?: string;

/**
 * See {@link isc.Canvas.ruleScope Canvas.ruleScope}.
 */
ruleScope?: string;

/**
 * See {@link isc.Canvas.snapResizeToGrid Canvas.snapResizeToGrid}.
 */
snapResizeToGrid?: boolean;

/**
 * See {@link isc.Canvas.mouseUp() Canvas.mouseUp()}.
 */
mouseUp?: Function;

/**
 * See {@link isc.Canvas.setPageLeft() Canvas.setPageLeft()}.
 */
setPageLeft?: Function;

/**
 * See {@link isc.Canvas.name Canvas.name}.
 */
name?: string;

/**
 * See {@link isc.Canvas.noDropCursor Canvas.noDropCursor}.
 */
noDropCursor?: string;

/**
 * See {@link isc.Canvas.className Canvas.className}.
 */
className?: string;

/**
 * See {@link isc.Canvas.animateHideAcceleration Canvas.animateHideAcceleration}.
 */
animateHideAcceleration?: string;

/**
 * See {@link isc.Canvas.hoverWrap Canvas.hoverWrap}.
 */
hoverWrap?: boolean;

/**
 * See {@link isc.Canvas.addSnapAlignCandidate() Canvas.addSnapAlignCandidate()}.
 */
addSnapAlignCandidate?: Function;

/**
 * See {@link isc.Canvas.dragAppearance Canvas.dragAppearance}.
 */
dragAppearance?: string;

/**
 * See {@link isc.Canvas.isDirty() Canvas.isDirty()}.
 */
isDirty?: Function;

/**
 * See {@link isc.Canvas.hoverAutoDestroy Canvas.hoverAutoDestroy}.
 */
hoverAutoDestroy?: boolean;

/**
 * See {@link isc.Canvas.mouseOver() Canvas.mouseOver()}.
 */
mouseOver?: Function;

/**
 * See {@link isc.Canvas.init() Canvas.init()}.
 */
init?: Function;

/**
 * See {@link isc.Canvas.dragScrollDelay Canvas.dragScrollDelay}.
 */
dragScrollDelay?: number;

/**
 * See {@link isc.Canvas.disabled Canvas.disabled}.
 */
disabled?: boolean;

/**
 * See {@link isc.Canvas.edgeOpacity Canvas.edgeOpacity}.
 */
edgeOpacity?: number;

/**
 * See {@link isc.Canvas.showSnapGrid Canvas.showSnapGrid}.
 */
showSnapGrid?: boolean;

/**
 * See {@link isc.Canvas.snapEdge Canvas.snapEdge}.
 */
snapEdge?: string;

/**
 * See {@link isc.Canvas.minHeight Canvas.minHeight}.
 */
minHeight?: number;

/**
 * See {@link isc.Canvas.setHeight() Canvas.setHeight()}.
 */
setHeight?: Function;

/**
 * See {@link isc.Canvas.getPageLeft() Canvas.getPageLeft()}.
 */
getPageLeft?: Function;

/**
 * See {@link isc.Canvas.moveAbove() Canvas.moveAbove()}.
 */
moveAbove?: Function;

/**
 * See {@link isc.Canvas.adaptiveHeightPriority Canvas.adaptiveHeightPriority}.
 */
adaptiveHeightPriority?: number;

/**
 * See {@link isc.Canvas.getVisibleHeight() Canvas.getVisibleHeight()}.
 */
getVisibleHeight?: Function;

/**
 * See {@link isc.Canvas.getInnerContentWidth() Canvas.getInnerContentWidth()}.
 */
getInnerContentWidth?: Function;

/**
 * See {@link isc.Canvas.visibleAtPoint() Canvas.visibleAtPoint()}.
 */
visibleAtPoint?: Function;

/**
 * See {@link isc.Canvas.removeChild() Canvas.removeChild()}.
 */
removeChild?: Function;

/**
 * See {@link isc.Canvas.getAriaHandleID() Canvas.getAriaHandleID()}.
 */
getAriaHandleID?: Function;

/**
 * See {@link isc.Canvas.deparent() Canvas.deparent()}.
 */
deparent?: Function;

/**
 * See {@link isc.Canvas.setSnapTo() Canvas.setSnapTo()}.
 */
setSnapTo?: Function;

/**
 * See {@link isc.Canvas.showHover Canvas.showHover}.
 */
showHover?: boolean;

/**
 * See {@link isc.Canvas.updateTabPositionOnDraw Canvas.updateTabPositionOnDraw}.
 */
updateTabPositionOnDraw?: boolean;

/**
 * See {@link isc.Canvas.setLeft() Canvas.setLeft()}.
 */
setLeft?: Function;

/**
 * See {@link isc.Canvas.setOverflow() Canvas.setOverflow()}.
 */
setOverflow?: Function;

/**
 * See {@link isc.Canvas.setPadding() Canvas.setPadding()}.
 */
setPadding?: Function;

/**
 * See {@link isc.Canvas.getScrollBottom() Canvas.getScrollBottom()}.
 */
getScrollBottom?: Function;

/**
 * See {@link isc.Canvas.scrollToTop() Canvas.scrollToTop()}.
 */
scrollToTop?: Function;

/**
 * See {@link isc.Canvas.useDragMask Canvas.useDragMask}.
 */
useDragMask?: boolean;

/**
 * See {@link isc.Canvas.setMinHeight() Canvas.setMinHeight()}.
 */
setMinHeight?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Canvas wraps the SmartClient widget class
 * {@link isc.Canvas Canvas} for React, allowing you to import
 * Canvas for use in React JS and JSX.
 * @class
 * @extends IBaseComponent
 */
declare class Canvas extends IBaseComponent {
    props: AsComponentXML<CanvasProps>;
}
