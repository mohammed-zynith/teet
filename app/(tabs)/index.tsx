import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSF } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSF);

export default function Index() {
  return (
    <SafeAreaView className= "flex-1 bg-background p-5">
      <Text className="text-2xl font-bold">Home</Text>
      <Link href ="/onboarding" className="mt-4 rounded bg-primary text-white px-4 py-2">
        Go to Onboarding
      </Link>
      <Link href = "/(auth)/sign-up" className="mt-4 rounded bg-primary text-white px-4 py-2">
        Go to Sign Up
      </Link>
      <Link href = "/(auth)/sign-in" className="mt-4 rounded bg-primary text-white px-4 py-2">
        Go to Sign In
      </Link>
    </SafeAreaView>
  );
}
