import { ComponentTask } from './ComponentTask';

export class AddScreenTask extends ComponentTask {
    static ISC_CLASS_NAME = 'AddScreenTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"dataContextBinding":{"className":"DataContextBinding"},"titleFormula":{"className":"UserSummary"},"canClose":"Boolean"};

}
