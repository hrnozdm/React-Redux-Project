import React from 'react';
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
  return (
    <div>
     <Slider {...settings}>
          <div className='!flex items-center bg-gray-100'>
            <div className='p-10'>
                <div className='text-6xl font-bold'>En kaliteli ayakkabılar</div>
                <div className='text-lg py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempore.</div>
                <a  className='bg-gray-300 rounded-full px-4 py-2 text-xl cursor-pointer text-center' href="" type='submit'>İncele</a>
            </div>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5475743-f4ba-4140-9c07-51dff9da7740/air-force-1-low-retro-qs-ayakkab%C4%B1s%C4%B1-vxwqw0.png" alt="" style={{height:'700px',width:'700px'}}/>
          </div>

          <div className='!flex items-center bg-gray-100'>
            <div className='p-10'>
                <div className='text-6xl font-bold'>En kaliteli ayakkabılar</div>
                <div className='text-lg py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempore.</div>
                <div><a href="" type='submit'>İncele</a></div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fea6277-542a-4e77-9176-2e97117b9f0a/dunk-low-ayakkab%C4%B1s%C4%B1-gqDX6n.png" alt="" style={{height:'700px',width:'700px'}}/>
          </div>


          <div className='!flex items-center bg-gray-100'>
            <div className='p-10'>
                <div className='text-6xl font-bold'>En kaliteli ayakkabılar</div>
                <div className='text-lg py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, tempore.</div>
                <div><a href="" type='submit'>İncele</a></div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa131214-62dd-4b7c-b15d-16c7e73b5acb/terminator-low-ayakkab%C4%B1s%C4%B1-5w907R.png" alt="" style={{height:'700px',width:'700px'}}/>
          </div>
         
        </Slider>
    </div>
  )
}


export default SliderComp
