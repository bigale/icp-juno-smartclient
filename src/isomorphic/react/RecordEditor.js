import { ListGrid } from './ListGrid';

export class RecordEditor extends ListGrid {
    static ISC_CLASS_NAME = 'RecordEditor';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"actionButtonProperties":{"className":"Button","isProperties":true},"suppressNullValueFormat":"boolean","canSaveSearches":"boolean"};

}
