import { QrCode, X } from 'lucide-react-native';
import { MotiView } from 'moti';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export function LoyaltyCard({ points, tier }: { points: string, tier: string }) {
  // Functional state to toggle the QR view
  const [showQR, setShowQR] = useState(false);

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', delay: 100 }}
      className="bg-neutral-900 rounded-3xl p-6 shadow-xl mx-6"
    >
      {showQR ? (
         <View className="items-center justify-center py-4">
            <View className="w-32 h-32 bg-white rounded-lg items-center justify-center mb-4">
               {/* This is where your actual react-native-qrcode-svg will go later */}
               <QrCode size={80} color="#171717" />
            </View>
            <TouchableOpacity onPress={() => setShowQR(false)} className="flex-row items-center p-2">
               <X size={18} color="#fff" />
               <Text className="text-white font-bold ml-2">Hide QR Code</Text>
            </TouchableOpacity>
         </View>
      ) : (
        <>
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white text-lg font-bold tracking-widest">SAYA+</Text>
            <View className="bg-yellow-500/20 px-3 py-1 rounded-full">
              <Text className="text-yellow-500 text-xs font-bold">{tier}</Text>
            </View>
          </View>
          <Text className="text-neutral-400 text-sm mb-2">Available Points</Text>
          <Text className="text-white text-5xl font-black mb-6">{points}</Text>
          <TouchableOpacity
            onPress={() => setShowQR(true)}
            className="bg-white rounded-xl py-3 flex-row justify-center items-center"
          >
            <QrCode size={18} color="#171717" />
            <Text className="text-neutral-900 font-bold ml-2">Show QR Code</Text>
          </TouchableOpacity>
        </>
      )}
    </MotiView>
  );
}