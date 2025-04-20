import { ILogicalComponent } from './core/ILogicalComponent';

export class NotifySettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"slideSpeed":"int","labelProperties":{"className":"Label","isProperties":true},"messagePriority":"MessagePriority","positionCanvas":{"className":"Canvas"},"applyPriorityToAppearance":"boolean","fadeOutDuration":"int","topOffset":"Integer","maxStackSize":"int","y":"Integer","canDismiss":"Boolean","stackSpacing":"int","duration":"int","messageControlPadding":"int","x":"Integer","messageIconHeight":"int","autoFitMaxWidth":["Integer","String"],"messageIconWidth":"int","stayIfHovered":"boolean","fadeInDuration":"int","leftOffset":"Integer","messageIconSpacing":"int","autoFitWidth":"Boolean"};

}
