import { Text, View } from 'react-native';

export default function RewardsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-50">
      <Text className="text-neutral-900 text-2xl font-bold mb-2">Rewards Catalog</Text>
      <Text className="text-neutral-500">Spend your SAYA+ points here.</Text>
    </View>
  );
}