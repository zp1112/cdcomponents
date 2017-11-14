/**
 * @author candyZheng
 * Date: 17/11/12
 */
import Chat from './src/chat'

/* istanbul ignore next */
Chat.install = function (Vue) {
  Vue.component(Chat.name, Chat)
}

export default Chat
