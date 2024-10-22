/* eslint-disable @next/next/no-img-element */
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7Sinjp6B7Ly
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function HeaderCarousel() {
    return (
        <Carousel
            className="w-full h-full"
            // autoPlay={{ delay: 5000, disableOnInteraction: false }}

            // navigation={{
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // }}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="relative overflow-hidden max-h-[90vh] ">
                        <div
                            className="w-full h-[90vh]"
                            style={{
                                backgroundImage: 'url("/DSC00106.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        {/* <img
                            src="/DSC00080.jpg"
                            alt="Banner 1"
                            className="object-cover w-full lg:aspect-[22/9] max-h-[90vh]"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">
                                Discover our latest products
                            </h3>
                            <p className="mt-2 text-lg">
                                Check out our new collection and find the
                                perfect fit for you.
                            </p>
                            <Button className="mt-4">Shop Now</Button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative overflow-hidden max-h-[90vh] ">
                        <div
                            className="w-full h-[90vh]"
                            style={{
                                backgroundImage: 'url("/DSC00080.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        {/* <img
                            src="/DSC00080.jpg"
                            alt="Banner 1"
                            className="object-cover w-full lg:aspect-[22/9] max-h-[90vh]"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">
                                Discover our latest products
                            </h3>
                            <p className="mt-2 text-lg">
                                Check out our new collection and find the
                                perfect fit for you.
                            </p>
                            <Button className="mt-4">Shop Now</Button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative overflow-hidden max-h-[90vh] ">
                        <div
                            className="w-full h-[90vh]"
                            style={{
                                backgroundImage: 'url("/DSC00080.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        {/* <img
                            src="/DSC00080.jpg"
                            alt="Banner 1"
                            className="object-cover w-full lg:aspect-[22/9] max-h-[90vh]"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">
                                Discover our latest products
                            </h3>
                            <p className="mt-2 text-lg">
                                Check out our new collection and find the
                                perfect fit for you.
                            </p>
                            <Button className="mt-4">Shop Now</Button>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white hover:text-primary focus:outline-none" />
            <CarouselNext className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white hover:text-primary focus:outline-none" />
        </Carousel>
    );
}
