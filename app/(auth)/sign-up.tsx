import { View, Text } from 'react-native'
import { Link } from "expo-router";

const signup = () => {
  return (
    <View>
      <Text>signup</Text>
      <Link href="/(auth)/sign-in">Already have an account? Sign in</Link>
    </View>
  )
}

export default signup