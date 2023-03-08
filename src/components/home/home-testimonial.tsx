import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { HomeSection } from "./home-section";
import { TestimonialCard } from "@src/components/testimonial-card";

export function HomeTestimonial() {
  return (
    <HomeSection>
      <Container className="mt-[120px] mb-[106px] px-4 sm:px-6 xl:px-0">
        <Badge className="text-center">TESTIMONIAL</Badge>
        <Title className="text-center">
          What do our clients say that we <br /> never let down?
        </Title>
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          slidesPerView={1}
          spaceBetween={31}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          pagination={{ clickable: true }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          className="mt-[136px] w-[415px] max-[415px]:w-full md:w-[830px] xl:w-[1308px]"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <TestimonialCard
                isActive={isActive}
                img={
                  <StaticImage src="../../images/avatar-1.png" alt="avatar" />
                }
                name="Courtney Henry"
                company="Biffco Enterprises Ltd."
                text="Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <TestimonialCard
                isActive={isActive}
                img={
                  <StaticImage src="../../images/avatar-2.png" alt="avatar" />
                }
                name="Esther Howard"
                company="Abstergo Ltd."
                text="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <TestimonialCard
                isActive={isActive}
                img={
                  <StaticImage src="../../images/avatar-3.png" alt="avatar" />
                }
                name="Ronald Richards"
                company="Barone LLC."
                text="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "
              />
            )}
          </SwiperSlide>
        </Swiper>
      </Container>
    </HomeSection>
  );
}
