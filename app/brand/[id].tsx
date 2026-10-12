import { brands } from '@/lib/brands';
import { FontAwesome5 } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Globe, MapPin, Phone } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function BrandScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const brand = brands.find((b) => b.slug === id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!brand) {
    return (
      <View className="flex-1 bg-[#171717] items-center justify-center">
        <Stack.Screen options={{ headerShown: false }} />
        <Text className="text-white text-xl font-bold">Brand Not Found</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4 p-4 bg-[#262626] rounded-xl">
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View className="flex-1 bg-[#171717] items-center justify-center">
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar style="light" />
        <ActivityIndicator size="large" color="#EAB308" />
        <Text className="text-neutral-500 mt-4 font-medium tracking-widest uppercase text-xs">
          Loading {brand.name}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#171717]">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      
      {/* --- HERO HEADER --- */}
      <ImageBackground 
        source={brand.image}
        className="h-64 bg-neutral-800 rounded-b-[40px] relative justify-end pb-6 px-6 overflow-hidden"
        resizeMode="cover"
      >
        {/* Dark overlay so the white text pops against bright photos */}
        <View className="absolute inset-0 bg-black/50" />
        
        <TouchableOpacity 
          className="absolute top-14 left-6 z-10 w-10 h-10 bg-black/40 rounded-full items-center justify-center"
          onPress={() => router.back()}
        >
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        
        <Text className="text-white text-4xl font-bold tracking-tight z-10">{brand.name}</Text>
        <View className="flex-row items-center mt-2 z-10">
          <MapPin color="#EAB308" size={16} />
          <Text className="text-neutral-300 ml-2">{brand.location || 'Location TBA'}</Text>
        </View>
      </ImageBackground>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* --- PROFILE SECTION --- */}
        <View className="px-6 py-8">
          <Text className="text-white text-lg font-bold mb-2">About</Text>
          <Text className="text-neutral-400 leading-relaxed">
            {brand.description}
          </Text>
        </View>

        {/* --- CONTACT & SOCIALS (Dynamic Links) --- */}
        <View className="px-6 mb-8 flex-row gap-4 flex-wrap">
          
          {brand.contact?.socials?.instagram && (
            <TouchableOpacity 
              onPress={() => Linking.openURL(brand.contact!.socials!.instagram!)}
              className="bg-[#262626] p-4 rounded-2xl flex-1 min-w-[70px] items-center justify-center border border-neutral-800"
            >
              <FontAwesome5 name="instagram" size={24} color="#EAB308" />
              <Text className="text-neutral-400 text-xs mt-2">Instagram</Text>
            </TouchableOpacity>
          )}

          {brand.contact?.socials?.tiktok && (
            <TouchableOpacity 
              onPress={() => Linking.openURL(brand.contact!.socials!.tiktok!)}
              className="bg-[#262626] p-4 rounded-2xl flex-1 min-w-[70px] items-center justify-center border border-neutral-800"
            >
              <FontAwesome5 name="tiktok" size={24} color="#EAB308" />
              <Text className="text-neutral-400 text-xs mt-2">TikTok</Text>
            </TouchableOpacity>
          )}

          {brand.website && (
            <TouchableOpacity 
              onPress={() => Linking.openURL(brand.website!)}
              className="bg-[#262626] p-4 rounded-2xl flex-1 min-w-[70px] items-center justify-center border border-neutral-800"
            >
              <Globe color="#EAB308" size={24} />
              <Text className="text-neutral-400 text-xs mt-2">Website</Text>
            </TouchableOpacity>
          )}

          {brand.contact?.contactPerson && (
            <TouchableOpacity 
              onPress={() => Linking.openURL(`tel:${brand.contact!.contactPerson}`)}
              className="bg-[#262626] p-4 rounded-2xl flex-1 min-w-[70px] items-center justify-center border border-neutral-800"
            >
              <Phone color="#EAB308" size={24} />
              <Text className="text-neutral-400 text-xs mt-2">Call</Text>
            </TouchableOpacity>
          )}
          
        </View>

        {/* --- GALLERY SECTION --- */}
        {brand.gallery && brand.gallery.length > 0 && (
          <View className="mb-8">
            <Text className="px-6 text-white text-lg font-bold mb-4">Gallery</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6" contentContainerStyle={{ paddingRight: 40 }}>
              {brand.gallery.map((imagePath, index) => (
                <View 
                  key={index} 
                  className="w-48 h-32 bg-[#262626] rounded-2xl mr-4 overflow-hidden relative"
                >
                  {/* Swapped placeholder text for the actual images */}
                  <Image 
                    source={imagePath} 
                    className="absolute inset-0 w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* --- PROMO / RSVP SECTION --- */}
        {brand.contact?.rsvp && (
          <View className="px-6 pb-12 mt-4">
            <TouchableOpacity 
              onPress={() => Linking.openURL(brand.contact!.rsvp!)}
              className="bg-yellow-500 rounded-2xl p-4 items-center shadow-lg"
            >
              <Text className="text-black font-bold text-lg">Book a Reservation</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}