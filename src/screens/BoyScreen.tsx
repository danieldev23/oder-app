import * as React from 'react'
import { View, Text } from 'react-native'
import { Button, Header } from 'react-native-elements'
import styled from 'styled-components'
// import * as Notifications from 'expo-notifications';p-0

const Page = styled(View)`
    padding: 40px 30px 0 30px;
`
const Heading = styled(Text)`
text-align: center;
font-size: 20px;
margin-bottom: 16px;
font-weight: bold;
`
// async function getNotificationToken() {
//   const { status } = await Notifications.getPermissionsAsync()
//   if (status != 'granted') {
//     await { status } = await Notifications.requestPermissionsAsync()
//     if (status != 'granted') {
//       alert('Failed to get notification token')
//       return
//     }
//   }

//   const tokenData = await Notifications.getExpoPushTokenAsync()
//   const token = tokenData.data
//   console.log({ token })
//   return token

// }

const BoyScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: 'Cho bạn nam 👦', style: { color: '#fff' } }} />
      <Page>
        <Heading>Bạn chưa có mã số, bấm vào đây để lấy mã</Heading>
        <Button title="Bấm để lấy mã số"  />
      </Page>
    </View>
  )
}

export default BoyScreen