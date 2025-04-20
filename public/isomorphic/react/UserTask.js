import { Task } from './Task';

export class UserTask extends Task {
    static ISC_CLASS_NAME = 'UserTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"targetView":[{"className":"Canvas"},"String"],"targetForm":[{"className":"DynamicForm"},"String"],"inlineView":{"className":"Canvas"},"passThruOutput":"Boolean","saveToServer":"Boolean","wizard":"Boolean","targetVM":[{"className":"ValuesManager"},"String"]};

}
