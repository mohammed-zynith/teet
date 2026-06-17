import "@/global.css"
import { Text, View } from "react-native";
import { Link } from "expo-router"; 
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        vidhya pannada
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white px-4 py-2">
          Go to Onboarding
      </Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white px-4 py-2">
          Go to Sign In
      </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white px-4 py-2">
          Go to Sign Up
      </Link>
      <Link href="/subscriptions/spotify">Spotify subscription</Link>
      <Link href={
        {
          pathname: "/subscriptions/[id]",
          params: { id: "claude" }
        }
      }
      >Claude subscription
      </Link>
      <Link href="/subscriptions/gpt">GPT subscription</Link>
    </View>
  );
}