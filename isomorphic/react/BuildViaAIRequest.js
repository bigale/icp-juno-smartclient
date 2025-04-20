import { AsyncOperationParams } from './AsyncOperationParams';

export class BuildViaAIRequest extends AsyncOperationParams {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"userCanCancel":"Boolean","userAIRequest":{"className":"UserAIRequest"},"showProgressDialog":"Boolean","maxRetries":"Integer","progressDialogProperties":{"className":"BuildViaAIProgressDialog","isProperties":true}};

}
