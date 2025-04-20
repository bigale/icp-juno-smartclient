import { ILogicalComponent } from './core/ILogicalComponent';

export class EditProxy extends ILogicalComponent {
    static ISC_CLASS_NAME = 'EditProxy';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"useCopyPasteShortcuts":"Boolean","canSelectChildren":"Boolean","allowNestedDrops":"Boolean","showDragHandle":"Boolean","hoopSelectorProperties":{"className":"Canvas","isProperties":true},"childrenSnapToGrid":"Boolean","childrenSnapResizeToGrid":"Boolean","inlineEditFormProperties":{"className":"DynamicForm","isProperties":true},"inlineEditOnDrop":"Boolean","bringToFrontOnSelect":"Boolean","canSelect":"Boolean","editMaskProperties":{"className":"Canvas","isProperties":true},"supportsInlineEdit":"Boolean","selectedTintOpacity":"Number","inlineEditMultiline":"Boolean","autoMaskChildren":"Boolean","inlineEditInstructionLabelProperties":{"className":"Label","isProperties":true},"useEditMask":"Boolean","persistCoordinates":"Boolean"};

}
