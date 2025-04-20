import { BrowserPlugin } from './BrowserPlugin';

export class ActiveXControl extends BrowserPlugin {
    static ISC_CLASS_NAME = 'ActiveXControl';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"params":{"className":"Object"}};

}
