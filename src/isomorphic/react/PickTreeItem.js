import { CanvasItem } from './CanvasItem';

export class PickTreeItem extends CanvasItem {
    static ISC_CLASS_NAME = 'PickTreeItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"valueTree":{"className":"Tree"},"shouldSaveValue":"Boolean","buttonProperties":{"className":"Canvas","isProperties":true},"loadDataOnDemand":"Boolean","dataProperties":{"className":"Tree","isProperties":true},"optionDataSource":{"className":"DataSource"},"canSelectParentItems":"Boolean"};

}
