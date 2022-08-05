import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatMessageActions } from "../../CometChat-message-actions/cometchat-message-actions.module";
import { CometChatAvatar } from "../../../Shared/CometChat-avatar/cometchat-avatar.module";
import { CometChatReadReceipt } from "../../CometChat-read-receipt/cometchat-read-receipt.module";
import { CometChatMessageReactions } from "../CometChat-message-reactions/cometchat-message-reactions.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CometChatMessageActions,
    CometChatAvatar,
    CometChatReadReceipt,
    CometChatMessageReactions,
  ],
  exports: [],
})
export class CometChatReceiverStickerMessageBubble { }
