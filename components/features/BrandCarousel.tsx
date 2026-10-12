import { brands } from '@/lib/brands';
import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export function BrandCarousel() {
  const router = useRouter();

  return (
    <View className="mt-8">
      <Text className="px-6 text-black text-lg font-bold mb-4">Our Brands</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6" contentContainerStyle={{ paddingRight: 40 }}>
        
        {brands.map((brand, index) => (
          <MotiView
            key={brand.id}
            from={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 300 + (index * 100) }}
          >
            <TouchableOpacity 
              onPress={() => {
                router.push({
                  pathname: "/brand/[id]",
                  params: { id: brand.slug }
                });
              }}
              // Removed the gray background and padding here, relying on ImageBackground dimensions instead
              className="mr-4 rounded-2xl overflow-hidden shadow-sm"
              activeOpacity={0.8}
            >
              {/* 1. The Image Background */}
              <ImageBackground 
                source={brand.image}  
                className="w-36 h-36 justify-end" 
                resizeMode="cover"
              >
                {/* 2. The Dark Overlay (Ensures text is readable over bright photos) */}
                <View className="absolute inset-0 bg-black/40" />
                
                {/* 3. The Brand Name (Circle removed entirely) */}
                <Text className="text-white font-bold p-4 z-10">{brand.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </MotiView>
        ))}
        
      </ScrollView>
    </View>
  );
}