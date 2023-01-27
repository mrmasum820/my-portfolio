import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/images/icons/1.jpg'
import IMG2 from '../../assets/images/icons/2.jpg'
import IMG3 from '../../assets/images/icons/3.jpg'
import IMG4 from '../../assets/images/icons/4.jpg'
import IMG5 from '../../assets/images/icons/5.jpg'
import IMG6 from '../../assets/images/icons/6.jpg'
import IMG7 from '../../assets/images/icons/7.jpg'
import IMG8 from '../../assets/images/icons/8.jpg'
import IMG9 from '../../assets/images/icons/9.jpg'
import IMG10 from '../../assets/images/icons/10.jpg'
import IMG11 from '../../assets/images/icons/11.jpg'
import IMG12 from '../../assets/images/icons/12.jpg'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const data = [
  {
    image: IMG1,
    name: 'christianbernal',
    review: 'I don’t normally write reviews but wow. The website is clean, concise and everything asked for. On top of that personally he was incredibly helpful, walking me through step by step and giving personal recommendations.',

  },
  {
    image: IMG2,
    name: 'gmc',
    review: 'Easily the most patient seller I have worked with over my years on Fiverr, I am not the best for tracking my replies, but he was incredible with waiting for me. Work was great quality, we will work together again for sure.',
  },
  {
    image: IMG3,
    name: 'jodiwashington',
    review: 'MD is AMAZING. His customer service is EXCELLENT. I will definitely be using him again very soon for my other website needs. He is so sweet, and eager to help. I enjoyed our interaction and can not wait for the next project.',
  },
  {
    image: IMG4,
    name: 'tgsolution',
    review: 'Thank you so much for your work, I will be ordering more work from you. Excellent work and customer service! They are so professional. My website was done poorly by a previous web designer but they were able to do this work in no time until I was satisfied!!!',
  },
  {
    image: IMG5,
    name: 'wcolon',
    review: 'MD Mahbub was amazing to work with. From the moment the gig was commissioned work started and he delivered. Seller very patient with the corrections and edits. Amazing seller to deal with. 5 star delivery for me.',
  },
  {
    image: IMG6,
    name: 'u_b6380ce1cfbd',
    review: 'Seller is an expert in Wordpress. He is my go-to for anything Wordpress.He can not only edit a website, but make any modifications you may deem necessary. I highly recommend this Seller for anything you may need pertaining to Wordpress. Thank you!',
  },
  {
    image: IMG7,
    name: 'chrisgage',
    review: 'Excellent experience. Very professional, fast and their competency level is expert. I will be a long time customer. Well done.',
  },
  {
    image: IMG8,
    name: 'patrick',
    review: 'This is the second time I hired a gig with this freelancer and the delivery has been very good so far. I will work with him again.',
  },
  {
    image: IMG9,
    name: 'allstarprocessi',
    review: 'Excellent communication, picks up the phone to talk when asked.. Awesome to work with!!',
  },
  {
    image: IMG10,
    name: 'morelegg',
    review: 'Excellent experience . He was patient and understanding with what I needed done. I highly recommend him!',
  },
  {
    image: IMG11,
    name: 'mztrina',
    review: 'After a disastrous experience with another person, working with MD has turned out to be fantastic. He has enough skills to customize a template as complex as Foxiz. Abid was responsive and incredibly helpful throughout the entire process. I have other project in mind and will contact with MD Rahman again. Fantastic work MD Rahman! Congrats',
  },
  {
    image: IMG12,
    name: 'ferdinandaditya',
    review: 'Easier designed to work with. I gave him a few references website, , and the first design were exactly what I was looking for. The only thing that needed to be adjusted in the slightest was content & design location. The mark and font choices were perfect in the concepts and made it directly to the final product. Very communicative were delivered in the agreed-upon time frame. From start to finish.',
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}


      >
        {
          data.map(({ name, image, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={image} alt={name} />
                </div>

                <h5 className='client__name'>{name}</h5>
                <small>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default testimonials