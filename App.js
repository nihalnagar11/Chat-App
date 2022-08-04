import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import initialMessages from './messages';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './src/InputToolbar';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setMessages(initialMessages.reverse())
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      text={text}
      // alignTop
      alwaysShowSend
      scrollToBottom
      // showUserAvatar
      renderAvatarOnTop
      renderUsernameOnMessage
      bottomOffset={26}
      onInputTextChanged={setText}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      // isCustomViewBottom
      messagesContainerStyle={{ backgroundColor: '#ccc' }}
      parsePatterns={(linkStyle) => [
        {
          pattern: /#(\w+)/,
          style: linkStyle,
          onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
      ]}
      // renderInputToolbar={renderInputToolbar}
      renderActions={renderActions}
    />
  )
}
