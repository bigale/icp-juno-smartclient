import { ProcessElement } from './ProcessElement';

export class MultiDecisionTask extends ProcessElement {
    static ISC_CLASS_NAME = 'MultiDecisionTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"decisionList":{"className":"DecisionBranch","isArray":true}};

}
