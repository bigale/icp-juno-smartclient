import { ListGrid } from './ListGrid';

export class PickListMenu extends ListGrid {
    static ISC_CLASS_NAME = 'PickListMenu';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canSaveSearches":"boolean","canShowFilterEditor":"boolean","normalCellHeight":"number","dataProperties":{"className":"ResultSet","isProperties":true}};

}
