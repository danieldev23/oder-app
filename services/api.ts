import axios from 'axios'
const EXPO_SERVER_URL = 'https://exp.host/--/api/v2/push/send'

export const sendPushNotification = async (token: string, title: string, body: string) => {
  const message = {
    to: token,
    sound: 'default',
    title,
    body,
  }

  await axios.post(EXPO_SERVER_URL, message)
  alert('Đặng Quốc Huy thông báo!')
}