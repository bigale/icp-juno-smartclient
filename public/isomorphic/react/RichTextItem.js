import { CanvasItem } from './CanvasItem';

export class RichTextItem extends CanvasItem {
    static ISC_CLASS_NAME = 'RichTextItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"shouldSaveValue":"Boolean","showTitle":"Boolean","defaultValue":"String","startRow":"Boolean","endRow":"Boolean","controlGroups":{"className":"String","isArray":true},"colSpan":["int","String"],"moveFocusOnTab":"boolean"};

}
