import { Text, View } from 'react-native';

const ACTIVITY = [
  { id: '1', title: 'Dined at GoaSaya', points: '+150', date: 'Today, 14:00' },
  { id: '2', title: 'Redeemed Free Coffee', points: '-50', date: 'Yesterday' },
  { id: '3', title: 'Welcome Bonus', points: '+500', date: '01 Apr' },
];

export function RecentActivity() {
  return (
    <View className="mt-8 px-6 pb-20">
      <Text className="text-neutral-900 text-lg font-bold mb-4">Recent Activity</Text>
      {ACTIVITY.map((item) => (
        <View key={item.id} className="flex-row justify-between items-center bg-white p-4 rounded-2xl mb-3 shadow-sm border border-neutral-100">
          <View>
            <Text className="text-neutral-800 font-semibold">{item.title}</Text>
            <Text className="text-neutral-400 text-xs mt-1">{item.date}</Text>
          </View>
          <Text className={item.points.startsWith('+') ? "text-green-600 font-bold" : "text-neutral-800 font-bold"}>
            {item.points}
          </Text>
        </View>
      ))}
    </View>
  );
}