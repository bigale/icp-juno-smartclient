import { CanvasItem } from './CanvasItem';

export class MultiFileItem extends CanvasItem {
    static ISC_CLASS_NAME = 'MultiFileItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"editButtonProperties":{"className":"StatefulCanvas","isProperties":true},"dataSource":{"className":"DataSource"},"removeButtonProperties":{"className":"StatefulCanvas","isProperties":true}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
