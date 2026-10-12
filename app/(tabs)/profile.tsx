import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-50">
      <Text className="text-neutral-900 text-2xl font-bold mb-2">My Profile</Text>
      <Text className="text-neutral-500">Transaction history and settings.</Text>
    </View>
  );
}