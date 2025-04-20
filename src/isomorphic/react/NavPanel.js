import { SplitPane } from './SplitPane';

export class NavPanel extends SplitPane {
    static ISC_CLASS_NAME = 'NavPanel';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"navGridProperties":{"className":"TreeGrid","isProperties":true},"navLayoutProperties":{"className":"VLayout","isProperties":true},"isTree":"Boolean","currentItem":{"className":"NavItem"},"navDeckProperties":{"className":"Deck","isProperties":true},"navBeforeMembers":{"className":"Canvas","isArray":true},"defaultToFirstItem":"Boolean","navItems":{"className":"NavItem","isArray":true},"navAfterMembers":{"className":"Canvas","isArray":true},"autoOpenItems":"Boolean"};

}
