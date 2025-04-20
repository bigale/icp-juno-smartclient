import { VLayout } from './VLayout';

export class GradientEditor extends VLayout {
    static ISC_CLASS_NAME = 'GradientEditor';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"dragSnapAngle":"int","showPreviewCanvas":"Boolean","previewCanvasProperties":{"className":"Canvas","isProperties":true},"outputFormProperties":{"className":"DynamicForm","isProperties":true}};

}
