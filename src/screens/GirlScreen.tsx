import * as React from 'react'
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import styled from 'styled-components'
import {sendPushNotification, getToken} from './api'

const Page = styled(View)`
    padding: 40px 30px 0 30px;
`

const ButtonContainer = styled(View)`
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Heading = styled(Text)`
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`
const SummonButton = styled(TouchableOpacity) <{ color?: string }>`
    background-color: ${p => p.color || 'red'}
    flex: 48% 0 0;
    margin: 2px;
    border-radius: 9px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`

const SummonButtonText = styled(Text)`
    color: white;
    font-size: 16px;
`
const HeaderContent = styled(Header)`
    width: 10px;
`
const HeadingTop = styled(Text)`
text-align: center;
font-size: 24px;
color: white;
margin-bottom: 16px;
background-color: rgb(32, 137, 220);
`

const GirlScreen: React.FC = () => {
      const [tokenInput, setTokenInput] = React.useState('')
      const [token, setToken] = React.useState<Token | undefined>()
  return (
    <View>
      <HeadingTop>👧</HeadingTop>
      {token ? (<View>
        <Heading>👦Mã số của anh niu là: {token.id}.</Heading>
        <Heading>Sẵn sàng kết nối📶!</Heading>
      </View>) : (
      <View>
        <Input label='Mã số của bạn nam ' placeholder='Nhập tài khoản của Crush!' value={tokenInput} onChangeText={setTokenInput}/>
        <Button style={styles.container} title="Xác nhận mã số" onPress={async () => {
          const storedToken = await getToken(tokenInput)
          setToken(storedToken)
        }}/>
      </View>
      )}
          {token &&  <View style={{ marginTop: 30 }} >
        <Heading>🥰Anh iu ơiiii!</Heading>
        <ButtonContainer>
          <SummonButton color="#e74c3c" onPress={() => sendPushNotification(token.token, 'Em muốn đi chơi😙', 'Đi chơi chứ ở nhà chán lắm🤭')}>
            <SummonButtonText> &#128523; Em muốn đi chơi</SummonButtonText>
          </SummonButton>
          <SummonButton color="#2980b9" onPress={() => sendPushNotification(token.token, 'Em thèm trà sữa🧋', '😉Cho em 1 cốc matcha đá xay nhầm ánh mắt của anh')}>
            <SummonButtonText>Em thèm trà sữa 🧋</SummonButtonText>
          </SummonButton>
          <SummonButton color="#2ecc71" onPress={() => sendPushNotification(token.token, 'Em iu anh nhìu nhắm🥰!', '')}>
            <SummonButtonText>😘 Em nhớ anh quá!</SummonButtonText>
          </SummonButton>
          <SummonButton color="#f1c40f" onPress={() => sendPushNotification(token.token, '📱Call hong anh', 'Bé call cho anh nhó😗')}>
            <SummonButtonText>Call nha anh iu 📱</SummonButtonText>
          </SummonButton>
          <SummonButton color="#FF9551">
            <SummonButtonText></SummonButtonText>
          </SummonButton>
          <SummonButton color="#E15FED">
            <SummonButtonText></SummonButtonText>
          </SummonButton>
        </ButtonContainer>
      </View>}


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: '4px',
  },

})
export default GirlScreen