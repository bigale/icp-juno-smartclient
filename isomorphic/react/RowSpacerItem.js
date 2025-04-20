import { SpacerItem } from './SpacerItem';

export class RowSpacerItem extends SpacerItem {
    static ISC_CLASS_NAME = 'RowSpacerItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"colSpan":["int","String"],"startRow":"Boolean","showTitle":"Boolean","endRow":"Boolean"};

}
