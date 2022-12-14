import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatSenderAudioMessageBubbleComponent } from "./cometchat-sender-audio-message-bubble/cometchat-sender-audio-message-bubble.component";
import { CometChatMessageActions } from "../CometChat-message-actions/cometchat-message-actions.module";
import { CometChatReadReceipt } from "../CometChat-read-receipt/cometchat-read-receipt.module";
import { CometChatMessageReactions } from "../Extensions/CometChat-message-reactions/cometchat-message-reactions.module";

@NgModule({
  declarations: [CometChatSenderAudioMessageBubbleComponent],
  imports: [
    CommonModule,
    CometChatMessageActions,
    CometChatReadReceipt,
    CometChatMessageReactions,
  ],
  exports: [CometChatSenderAudioMessageBubbleComponent],
})
export class CometChatSenderAudioMessageBubble { }
