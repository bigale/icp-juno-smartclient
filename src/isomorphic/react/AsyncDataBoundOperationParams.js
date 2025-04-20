import { AsyncOperationParams } from './AsyncOperationParams';

export class AsyncDataBoundOperationParams extends AsyncOperationParams {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"dataSource":{"className":"DataSource"}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
