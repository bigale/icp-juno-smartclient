import { Criterion } from './Criterion';

export class AdvancedCriteria extends Criterion {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"strictSQLFiltering":"Boolean"};

}
