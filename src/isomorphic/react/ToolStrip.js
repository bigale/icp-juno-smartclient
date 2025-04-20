import { Layout } from './Layout';

export class ToolStrip extends Layout {
    static ISC_CLASS_NAME = 'ToolStrip';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"separatorBreadth":"int","vertical":"Boolean","resizeBarSize":"int","formWrapperDefaults":{"className":"DynamicForm","isProperties":true},"members":{"className":"Canvas","isArray":true},"formWrapperProperties":{"className":"DynamicForm","isProperties":true},"separatorSize":"int","height":"Number"};
static CHILD_TYPE_MAPPING = {"Canvas":"members"};

}
