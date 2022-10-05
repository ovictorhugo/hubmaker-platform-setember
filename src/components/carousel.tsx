import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return  (
        <div className="p-24 pt-0">
            <Slider className="" {...settings}>
                <div className=" w-4 rounded pr-4">
                    <div className=" min-h-[80vh] bg-photo1 rounded bg-cover bg-center bg-no-repeat flex flex-col items-center w-full"></div>
                </div>
                <div className=" w-4 rounded pr-4">
                    <div className=" min-h-[80vh] bg-photo2 rounded bg-cover bg-center bg-no-repeat flex flex-col items-center w-full"></div>
                </div>
                <div className=" w-4 rounded pr-4">
                    <div className=" min-h-[80vh] bg-photo3 rounded bg-cover bg-center bg-no-repeat flex flex-col items-center w-full"></div>
                </div>
                <div className=" w-4 rounded pr-4">
                    <div className=" min-h-[80vh] bg-photo4 rounded bg-cover bg-center bg-no-repeat flex flex-col items-center w-full"></div>
                </div>
                <div className=" w-4 rounded pr-4">
                    <div className=" min-h-[80vh] bg-photo5 rounded bg-cover bg-center bg-no-repeat flex flex-col items-center w-full"></div>
                </div>
                <div className=" w-4 rounded">
                    <div className=" min-h-[80vh] bg-photo6 rounded bg-cover bg-center bg-no-repeat flex flex-col items-center w-full"></div>
                </div>
                
            </Slider>
        </div>
    )
}