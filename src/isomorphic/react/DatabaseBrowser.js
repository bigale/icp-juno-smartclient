import { Window } from './Window';

export class DatabaseBrowser extends Window {
    static ISC_CLASS_NAME = 'DatabaseBrowser';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"selectButtonProperties":{"className":"Button","isProperties":true},"databaseListProperties":{"className":"ListGrid","isProperties":true},"schemaTreeProperties":{"className":"ListGrid","isProperties":true},"dataGridProperties":{"className":"ListGrid","isProperties":true},"excludeSubstring":["String",{"className":"String","isArray":true}],"cancelButtonProperties":{"className":"Button","isProperties":true},"includeSubstring":["String",{"className":"String","isArray":true}]};

}
