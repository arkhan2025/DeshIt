import React, { useRef, useEffect, useState } from "react";
import "./review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Arrow from "../../assets/arrow.png";
import ico from "../../assets/ico.png";
import star from "../../assets/star.png";
import lighted from "../../assets/lighted.png";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";

const Review = () => {
  const reviews = [    
    {
      icon: ico,
      badge: lighted,
      text: `"Working with DeshIT-BD has been transformative for our organization. Their 
      team doesn't just deliver technology—they understand our vision and help bring 
      it to life with precision and care. What sets them apart is their dedication,
      professionalism, and ability to translate complex ideas into solutions that
      truly make a difference. DeshIT-BD is a partner you can trust to elevate 
      your projects from concept to success."`,
      img: r2,
      name: "Stacy Duty",
      title: "Founder at The WeighPay Group",
    },
    {
      icon: ico,
      badge: star,
      text: `"Collaborating with DeshIT-BD has been an inspiring experience. Their team
      combines technical excellence with a creative approach that brings ideas
      to life in ways I didn't imagine possible. They are more than developers—they
      are true partners who listen, innovate, and deliver with precision. For 
      anyone seeking a team that can turn vision into reality, DeshIT-BD is 
      unmatched.."`,
      img: r3,
      name: "Woody Klemetson",
      title: "Founder & Lead Developer at Mesmerize Software Studio",
    },
    {
      icon: ico,
      badge: star,
      text: `"DeshIT-BD brings the kind of speed and adaptability every startup dreams of. 
      They understand how to balance rapid execution with long-term scalability, 
      which is rare in a tech partner. From idea to implementation, their team has 
      been reliable, resourceful, and deeply committed to our success. DeshIT-BD isn't 
      just a development team—they're an extension of our startup.."`,
      img: r1,
      name: "Woody Klemetson",
      title: "Founder and CEO at AskElephant",
    },
    {
      icon: ico,
      badge: lighted,
      text: `"Working with DeshIT-BD has been transformative for our organization. Their 
      team doesn't just deliver technology—they understand our vision and help bring 
      it to life with precision and care. What sets them apart is their dedication,
      professionalism, and ability to translate complex ideas into solutions that
      truly make a difference. DeshIT-BD is a partner you can trust to elevate 
      your projects from concept to success."`,
      img: r2,
      name: "Stacy Duty",
      title: "Founder at The WeighPay Group",
    },
    {
      icon: ico,
      badge: star,
      text: `"Collaborating with DeshIT-BD has been an inspiring experience. Their team
      combines technical excellence with a creative approach that brings ideas
      to life in ways I didn't imagine possible. They are more than developers—they
      are true partners who listen, innovate, and deliver with precision. For 
      anyone seeking a team that can turn vision into reality, DeshIT-BD is 
      unmatched.."`,
      img: r3,
      name: "Woody Klemetson",
      title: "Founder & Lead Developer at Mesmerize Software Studio",
    },
    {
      icon: ico,
      badge: star,
      text: `"DeshIT-BD brings the kind of speed and adaptability every startup dreams of. 
      They understand how to balance rapid execution with long-term scalability, 
      which is rare in a tech partner. From idea to implementation, their team has 
      been reliable, resourceful, and deeply committed to our success. DeshIT-BD isn't 
      just a development team—they're an extension of our startup.."`,
      img: r1,
      name: "Woody Klemetson",
      title: "Founder and CEO at AskElephant",
    },
    {
      icon: ico,
      badge: lighted,
      text: `"Working with DeshIT-BD has been transformative for our organization. Their 
      team doesn't just deliver technology—they understand our vision and help bring 
      it to life with precision and care. What sets them apart is their dedication,
      professionalism, and ability to translate complex ideas into solutions that
      truly make a difference. DeshIT-BD is a partner you can trust to elevate 
      your projects from concept to success."`,
      img: r2,
      name: "Stacy Duty",
      title: "Founder at The WeighPay Group",
    },
    {
      icon: ico,
      badge: star,
      text: `"DeshIT-BD brings the kind of speed and adaptability every startup dreams of. 
      They understand how to balance rapid execution with long-term scalability, 
      which is rare in a tech partner. From idea to implementation, their team has 
      been reliable, resourceful, and deeply committed to our success. DeshIT-BD isn't 
      just a development team—they're an extension of our startup.."`,
      img: r1,
      name: "Woody Klemetson",
      title: "Founder and CEO at AskElephant",
    },
    
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const circleRefs = useRef([]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [mergedBars, setMergedBars] = useState([]);

  // Update navigation refs with custom buttons only
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    let indices = [];
    for (let i = 0; i < swiper.params.slidesPerView; i++) {
      indices.push((swiper.realIndex + i) % reviews.length);
    }
    setActiveIndices(indices);
  };

  // Calculate merged bars
  useEffect(() => {
    if (circleRefs.current.length === 0) return;

    let groups = [];
    let temp = [];
    for (let i = 0; i < reviews.length; i++) {
      if (activeIndices.includes(i)) {
        temp.push(i);
      } else if (temp.length > 0) {
        groups.push([...temp]);
        temp = [];
      }
    }
    if (temp.length > 0) groups.push([...temp]);

    // Handle wrap-around merging
    if (
      groups.length > 1 &&
      groups[0][0] === 0 &&
      groups[groups.length - 1][groups[groups.length - 1].length - 1] === reviews.length - 1
    ) {
      groups[0] = [...groups[groups.length - 1], ...groups[0]];
      groups.pop();
    }

    const bars = groups.map((group) => {
      const first = circleRefs.current[group[0]];
      const last = circleRefs.current[group[group.length - 1]];
      if (first && last) {
        return {
          left: first.offsetLeft,
          width: last.offsetLeft - first.offsetLeft + first.offsetWidth, 
        };
      }
      return null;
    }).filter(Boolean);

    setMergedBars(bars);
  }, [activeIndices]);

  return (
    <section id="review" className="comp">
      <div className="hd2">
        <img src={Arrow} alt="arrow" />
        <h1>Client Reviews</h1>
      </div>

      <div className="review-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          navigation={false} // Disable default buttons
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="review_card">
                <img src={review.icon} alt="" />
                <img src={review.badge} alt="" />
                <p>{review.text}</p>
                <div className="reviewr">
                  <img src={review.img} alt="" />
                  <div className="name">
                    <h6>{review.name}</h6>
                    <p>{review.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-btns">
          <button onClick={() => swiperInstance?.slidePrev()} ref={prevRef} className="prev">←</button>
          <button onClick={() => swiperInstance?.slideNext()} ref={nextRef} className="next">→</button>
        </div>

        <div className="indicator" style={{ position: "relative", height: "8px", justifyContent: "center", display: "flex" }}>
          {mergedBars.map((bar, idx) => (
            <div
              key={idx}
              className="merged-bar"
              style={{
                position: "absolute",
                left: bar.left,
                width: bar.width,
                height: "8px",
                background: "linear-gradient(to bottom, #f94a5b 0%, #6a4fff 100%)",
                borderRadius: "4px",
                transition: "all 0.3s ease"
              }}
            />
          ))}
          {reviews.map((_, idx) => (
            <div
              key={idx}
              className={`circle ${activeIndices.includes(idx) ? "active" : ""}`}
              ref={(el) => (circleRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;