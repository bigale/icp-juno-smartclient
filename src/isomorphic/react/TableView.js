import { ListGrid } from './ListGrid';

export class TableView extends ListGrid {
    static ISC_CLASS_NAME = 'TableView';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canSaveSearches":"boolean","showNavigation":"boolean","showIconField":"Boolean","canShowFilterEditor":"boolean"};

}
