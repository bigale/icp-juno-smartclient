import { CanvasItem } from './CanvasItem';

export class SectionItem extends CanvasItem {
    static ISC_CLASS_NAME = 'SectionItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canCollapse":"Boolean","sectionExpanded":"Boolean","sectionVisible":"boolean","defaultValue":"String","canTabToHeader":"boolean","itemIds":{"className":"FieldName","isArray":true}};

}
