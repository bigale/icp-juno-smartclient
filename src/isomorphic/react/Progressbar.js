import { StretchImg } from './StretchImg';

export class Progressbar extends StretchImg {
    static ISC_CLASS_NAME = 'Progressbar';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"length":["Number","String"],"percentDone":"number","useCssStyles":"boolean","vertical":"Boolean","breadth":"number"};

}
