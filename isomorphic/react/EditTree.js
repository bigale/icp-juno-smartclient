import { TreeGrid } from './TreeGrid';

export class EditTree extends TreeGrid {
    static ISC_CLASS_NAME = 'EditTree';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"rootComponent":{"className":"PaletteNode"},"canShowFilterEditor":"boolean","persistCoordinates":"Boolean","useCopyPasteShortcuts":"Boolean","canDragGroup":"Boolean","showSelectedLabel":"Boolean","hideGroupBorderOnDrag":"Boolean","allowNestedDrops":"Boolean","autoEditNewNodes":"Boolean","canGroupSelect":"Boolean","editContext":{"className":"EditContext"},"canSaveSearches":"boolean"};

}
