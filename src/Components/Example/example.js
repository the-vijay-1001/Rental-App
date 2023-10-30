import React, { useState, useCallback, useEffect } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { TextInput } from 'react-native-paper'

export function Example() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])
  return (
    <View className="w-50 h-full pb-0.5">
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      messagesContainerStyle={{backgroundColor: 'orange'}}
      textInputStyle={{ backgroundColor: "black", height: 200,color:"white" }}
    />
    </View>
  )
}