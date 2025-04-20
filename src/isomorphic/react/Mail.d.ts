import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MailProps {

/**
 * See {@link isc.Mail.messageTemplate Mail.messageTemplate}.
 */
messageTemplate?: string;

/**
 * See {@link isc.Mail.subject Mail.subject}.
 */
subject?: string;

/**
 * See {@link isc.Mail.to Mail.to}.
 */
to?: string;

/**
 * See {@link isc.Mail.auth Mail.auth}.
 */
auth?: string;

/**
 * See {@link isc.Mail.messageData Mail.messageData}.
 */
messageData?: string;

/**
 * See {@link isc.Mail.encoding Mail.encoding}.
 */
encoding?: string;

/**
 * See {@link isc.Mail.port Mail.port}.
 */
port?: string;

/**
 * See {@link isc.Mail.from Mail.from}.
 */
from?: string;

/**
 * See {@link isc.Mail.templateFile Mail.templateFile}.
 */
templateFile?: string;

/**
 * See {@link isc.Mail.contentType Mail.contentType}.
 */
contentType?: string;

/**
 * See {@link isc.Mail.host Mail.host}.
 */
host?: string;

/**
 * See {@link isc.Mail.user Mail.user}.
 */
user?: string;

/**
 * See {@link isc.Mail.replyTo Mail.replyTo}.
 */
replyTo?: string;

/**
 * See {@link isc.Mail.bcc Mail.bcc}.
 */
bcc?: string;

/**
 * See {@link isc.Mail.password Mail.password}.
 */
password?: string;

/**
 * See {@link isc.Mail.cc Mail.cc}.
 */
cc?: string;

/**
 * See {@link isc.Mail.multiple Mail.multiple}.
 */
multiple?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Mail wraps the non-rendered SmartClient class
 * {@link isc.Mail Mail} for React, allowing you to import
 *  Mail for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Mail extends ILogicalComponent {
    props: AsComponentXML<MailProps>;
}
