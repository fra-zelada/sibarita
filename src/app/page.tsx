import { HeaderCarousel } from "@/components/component/header-carousel";
import { NavBar } from "@/components/component/nav-bar";
import { FoodCategoriesComponent } from "@/components/food-categories";
import { FoodOfferingComponent } from "@/components/food-offering";
import { FooterComponent } from "@/components/footer";
import { LocationSectionComponent } from "@/components/location-section";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen p-0 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-0  items-center w-full">
                <header className="w-full bg-black   ">
                    <NavBar />
                    <HeaderCarousel />
                </header>
                <FoodCategoriesComponent />
                <FoodOfferingComponent />
                <LocationSectionComponent />
            </main>
            <FooterComponent />
        </div>
    );
}
