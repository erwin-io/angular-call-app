import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatSenderVideoMessageBubbleComponent } from "./cometchat-sender-video-message-bubble/cometchat-sender-video-message-bubble.component";
import { CometChatReadReceipt } from "../CometChat-read-receipt/cometchat-read-receipt.module";
import { CometChatMessageActions } from "../CometChat-message-actions/cometchat-message-actions.module";
import { CometChatMessageReactions } from "../Extensions/CometChat-message-reactions/cometchat-message-reactions.module";

@NgModule({
  declarations: [CometChatSenderVideoMessageBubbleComponent],
  imports: [
    CommonModule,
    CometChatReadReceipt,
    CometChatMessageActions,
    CometChatMessageReactions,
  ],
  exports: [CometChatSenderVideoMessageBubbleComponent],
})
export class CometChatSenderVideoMessageBubble { }
