import { IBaseComponent } from './core/IBaseComponent';

export class Sound extends IBaseComponent {
    static ISC_CLASS_NAME = 'Sound';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"src":["String",{"className":"String","isArray":true}],"autoPlay":"boolean","autoLoad":"boolean"};

}
