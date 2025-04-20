import { CanvasItem } from './CanvasItem';

export class ToolbarItem extends CanvasItem {
    static ISC_CLASS_NAME = 'ToolbarItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"colSpan":["int","String"],"createButtonsOnInit":"Boolean","buttons":{"className":"StatefulCanvas","isArray":true},"canvasProperties":{"className":"Canvas","isProperties":true},"buttonProperties":{"className":"Object","isProperties":true},"endRow":"Boolean","buttonAutoFit":"Boolean","showTitle":"Boolean","buttonSpace":"number","startRow":"Boolean","vertical":"Boolean"};

}
