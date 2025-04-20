import { Toolbar } from './Toolbar';

export class TabBar extends Toolbar {
    static ISC_CLASS_NAME = 'TabBar';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"moreTab":{"className":"Tab"},"breadth":"number","showMoreTab":"boolean","closeTabKeys":{"className":"KeyIdentifier","isArray":true},"baseLineThickness":"number","baseLineCapSize":"number","moreTabCount":"int","tabs":{"className":"Tab","isArray":true},"defaultTabSize":"number"};
static CHILD_TYPE_MAPPING = {"Tab":"tabs"};

}
