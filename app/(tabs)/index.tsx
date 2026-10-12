// app/(tabs)/index.tsx
import { ScrollView } from "react-native";
import { BrandCarousel } from "../../components/features/BrandCarousel";
import { Header } from "../../components/features/Header";
import { LoyaltyCard } from "../../components/features/LoyaltyCard";
import { RecentActivity } from "../../components/features/RecentActivity";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-neutral-50"
      showsVerticalScrollIndicator={false}
    >
      <Header userName="Ido" />
      <LoyaltyCard points="2,450" tier="GOLD TIER" />
      <BrandCarousel />
      <RecentActivity />
    </ScrollView>
  );
}
