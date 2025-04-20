import { CanvasItem } from './CanvasItem';

export class ButtonItem extends CanvasItem {
    static ISC_CLASS_NAME = 'ButtonItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"enableWhen":{"className":"AdvancedCriteria"},"buttonProperties":[{"className":"Canvas","isProperties":true},{"className":"Object","isProperties":true}],"endRow":"Boolean","autoFit":"Boolean","height":"number","showFocusedAsOver":"Boolean","startRow":"Boolean","showTitle":"Boolean"};

}
