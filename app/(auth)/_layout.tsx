import { Stack } from "expo-router";


export default function AuthLayout() {{
    return (
        <Stack>
            <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="create-account" options={{ headerShown: false }} />
        </Stack>
    )
}}