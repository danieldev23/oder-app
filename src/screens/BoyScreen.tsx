import * as React from 'react'
import { useState } from "react";
import { View, Text } from 'react-native'
import { Button, Header } from 'react-native-elements'
import styled from 'styled-components'
import {submitToken, sendPushNotification} from './api'
import * as Notifications from 'expo-notifications';

const Page = styled(View)`
    padding: 40px 30px 0 30px;
`
const Heading = styled(Text)`
text-align: center;
font-size: 20px;
margin-bottom: 16px;
font-weight: bold;
`
async function getNotificationToken() {
  const { status } = await Notifications.getPermissionsAsync()
  if (status != 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status != 'granted') {
      alert('Failed to get notification token')
      return
    }
  }

  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log({ token })
  return token

}

const BoyScreen: React.FC = () => {
  const [token, setToken] = React.useState<Token | undefined>()
  return (
    <View>
      <Header centerComponent={{ text: 'Cho bạn nam 👦', style: { color: '#fff' } }} />
      <Page>
        <Heading>{token ? `Mã số của bạn là ${token.id}.` :
          'Bạn chưa có mã số, bấm vào đây để lấy mã'}</Heading>
        <Button title="Bấm để lấy mã số" onPress={async () => {

          const token = await getNotificationToken()
          if(token) {
            const storedToken = await submitToken(token)
            setToken(storedToken)
          }
        }} />
      </Page>
    </View>
  )
}

export default BoyScreen