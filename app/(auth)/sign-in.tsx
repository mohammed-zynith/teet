import { View, Text } from 'react-native'
import { Link } from "expo-router";

const signin = () => {
  return (
    <View>
      <Text>signin</Text>
      <Link href="/(auth)/sign-up">Create account</Link>
    </View>
  )
}

export default signin