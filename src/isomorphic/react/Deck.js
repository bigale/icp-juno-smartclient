import { Layout } from './Layout';

export class Deck extends Layout {
    static ISC_CLASS_NAME = 'Deck';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"panes":{"className":"Canvas","isArray":true},"currentPane":[{"className":"Canvas"},"String"]};

}
