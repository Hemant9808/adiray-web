import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import chatbot from "../new_assets/chatbot_8074919.webp"

export function Carousel() {
    return (
        <div className="flex flex-col items-center justify-center px-8 py-6">
            <h1 className="title mb-3">Products and Services</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-[600px]"
            >
                <SwiperSlide className="max-w-72 bg-[#EEE] rounded-lg">
                    <div className="flex flex-col gap-2 items-center bg-[#EEE] p-4 rounded-lg">
                        <img className="h-20 w-20" src={chatbot} alt="chatbot" />
                        <h1 className="text-2xl font-medium">Chatbot Developement</h1>
                        <p className="text-gray-500 text-ellipsis line-clamp-4">
                            Empower your business with Conversational AI chatbot to streamline marketing, sales, and improve efficiency, boost sales and conversions, and provide seamless customer support.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="max-w-72 bg-[#EEE] rounded-lg">
                    <div className="flex flex-col gap-2 items-center bg-[#EEE] p-4 rounded-lg">
                        <img className="h-20 w-20" src={chatbot} alt="chatbot" />
                        <h1 className="text-2xl font-medium">Sales Intelligence</h1>
                        <p className="text-gray-500 text-ellipsis line-clamp-4">
                            Equiping you with smart data points, to help you understand the prospects, take informed decisions and close more deals.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="max-w-72 bg-[#EEE] rounded-lg">
                    <div className="flex flex-col gap-2 items-center bg-[#EEE] p-4 rounded-lg">
                        <img className="h-20 w-20" src={chatbot} alt="chatbot" />
                        <h1 className="text-2xl font-medium">Business analytics</h1>
                        <p className="text-gray-500 text-ellipsis line-clamp-4">
                            Providing the best in the business, analysis through statiscal modelling and quantitive methods to drive business outcomes.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="max-w-72 bg-[#EEE] rounded-lg">
                    <div className="flex flex-col gap-2 items-center bg-[#EEE] p-4 rounded-lg">
                        <img className="h-20 w-20" src={chatbot} alt="chatbot" />
                        <h1 className="text-2xl font-medium">Development</h1>
                        <p className="text-gray-500 text-ellipsis line-clamp-4">
                            Providing the best development services to our customers to suit their needs.With our widely experienced team, we ensure the delivery of best results to our clients.
                        </p>
                    </div>

                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">

                    </div>
                    <div className="swiper-button-next slider-arrow">

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}