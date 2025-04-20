import { Canvas } from './Canvas';

export class EditPane extends Canvas {
    static ISC_CLASS_NAME = 'EditPane';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canGroupSelect":"Boolean","rootComponent":{"className":"PaletteNode"},"hideGroupBorderOnDrag":"Boolean","editContextProperties":{"className":"EditContext","isProperties":true},"showSelectedLabel":"Boolean","useCopyPasteShortcuts":"Boolean","canDragGroup":"Boolean","autoEditNewNodes":"Boolean","persistCoordinates":"Boolean","allowNestedDrops":"Boolean"};

}
