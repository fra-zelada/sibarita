"use client";

import Image from "next/image";

export function FoodCategoriesComponent() {
    const categories = [
        {
            title: "Fast Food",
            image: "/DSC00157.jpg",
            description:
                "Quick and delicious meals for people on the go. Our fast food options are perfect for a speedy lunch or dinner.",
        },
        {
            title: "Lunch",
            image: "/DSC05296.jpg",
            description:
                "Enjoy a relaxing midday meal with our diverse lunch menu. From light salads to hearty sandwiches, we've got you covered.",
        },
        {
            title: "Dinner",
            image: "/DSC05615.jpg",
            description:
                "Experience fine dining with our exquisite dinner options. Perfect for romantic evenings or family gatherings.",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                    >
                        <div className="relative h-48">
                            <Image
                                src={category.image}
                                alt={category.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6 flex-grow">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">
                                {category.title}
                            </h2>
                            <p className="text-gray-600">
                                {category.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
