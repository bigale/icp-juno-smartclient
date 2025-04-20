import { Window } from './Window';

export class LoginDialog extends Window {
    static ISC_CLASS_NAME = 'LoginDialog';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"passwordItemProperties":{"className":"PasswordItem","isProperties":true},"dismissable":"Boolean","showLostPasswordLink":"Boolean","registrationItemProperties":{"className":"LinkItem","isProperties":true},"lostPasswordItemProperties":{"className":"LinkItem","isProperties":true},"showRegistrationLink":"Boolean","loginFormProperties":{"className":"DynamicForm","isProperties":true},"usernameItemProperties":{"className":"TextItem","isProperties":true},"dismissOnEscape":"boolean","showCloseButton":"boolean","items":[{"className":"Canvas","isArray":true},{"className":"Canvas"},"String"],"loginFailureItemProperties":{"className":"BlurbItem","isProperties":true},"formFields":{"className":"FormItem","isArray":true},"loginButtonProperties":{"className":"ButtonItem","isProperties":true},"allowBlankPassword":"Boolean"};

}
