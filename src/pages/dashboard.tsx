import type React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { PricingCards } from '../components/pricing-cards';
import { plans } from '../data/pricing-plans';
import 'swiper/swiper-bundle.css';

export const DashboardPage: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-bold">
        Already have a phone? Choose your Power Plan:
      </h2>
      <div className="pricing-swiper relative w-full pt-4">
        <Swiper
          className="overflow-visible! py-16!"
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView="auto"
          navigation
          watchSlidesProgress={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoHeight={false}
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.id} className="h-auto!">
              <PricingCards plan={plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
