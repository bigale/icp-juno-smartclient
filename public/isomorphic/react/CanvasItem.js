import { FormItem } from './FormItem';

export class CanvasItem extends FormItem {
    static ISC_CLASS_NAME = 'CanvasItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"editCriteriaInInnerForm":"Boolean","minHeight":"Integer","maxHeight":"Integer","multiple":"Boolean","height":["int","String"],"shouldSaveValue":"Boolean","canvasProperties":[{"className":"Object","isProperties":true},{"className":"Canvas","isProperties":true}],"canvasDefaults":{"className":"Object"},"applyPromptToCanvas":"Boolean","autoDestroy":"Boolean"};

}
