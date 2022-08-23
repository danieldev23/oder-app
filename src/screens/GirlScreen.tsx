import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import styled from 'styled-components'

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
const GirlScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: 'Cho bạn nữ 👧', style: { color: '#fff' } }} />
      <View>
        <Input label='Mã số của bạn nam ' placeholder='Nhập tài khoản của Crush!' />
        <Button style={styles.container} title="Xác nhận mã số" />
      </View>
      <View style={{ marginTop: 30 }} >
        <Heading>Anh ơiiii!</Heading>
        <ButtonContainer>
          <SummonButton color="#e74c3c">
            <SummonButtonText>Em muốn đi chơi &#128523;</SummonButtonText>
          </SummonButton>
          <SummonButton color="#2980b9">
            <SummonButtonText>Anh đẹp trai wa &#128521;</SummonButtonText>
          </SummonButton>
          <SummonButton color="#2ecc71">
            <SummonButtonText>Iu anh nhìu lắm ❤️</SummonButtonText>
          </SummonButton>
          <SummonButton color="#f1c40f">
            <SummonButtonText>Ting ting anh ơi 📱</SummonButtonText>
          </SummonButton>
        </ButtonContainer>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: '4px',
  }
})
export default GirlScreen