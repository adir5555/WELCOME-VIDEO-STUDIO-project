import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from "react";
import { useEffect } from "react";
const SwiperSl = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const saladItem = data.filter(card => card.category === 'salad');
        setTodo(saladItem);
      })

  }, [])
  return (
    <div  className="my-20">
      <Swiper

        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          todo.map(item => <SwiperSlide key={item._id}>
            <div className="card  image-full  ">
              <figure>
                <img src={item.image}  alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
               
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default SwiperSl;