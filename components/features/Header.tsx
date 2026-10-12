import { Bell } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export function Header({ userName }: { userName: string }) {
  return (
    <View className="px-6 pt-8 pb-6 flex-row justify-between items-center">
      <View>
        <Text className="text-neutral-500 text-sm font-medium">Welcome back,</Text>
        <Text className="text-neutral-900 text-2xl font-bold">{userName}</Text>
      </View>
      <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm border border-neutral-100">
        <Bell size={20} color="#171717" />
      </TouchableOpacity>
    </View>
  );
}