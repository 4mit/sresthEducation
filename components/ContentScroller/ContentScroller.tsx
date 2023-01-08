import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

import { Carousel } from 'primereact/carousel';
import { Skeleton } from 'primereact/skeleton';

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '600px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1,
  },
];

const courses = [
  'Math',
  'Physics', 'English', 'Bio', 'UPSC', "SSC", "10th", "12th"
]

const ContentScroller = ({ items = [] }) => {
  const [catrgories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const productTemplate = (category: string) => {
    return (
      <div
        className="border m-1 rounded-full text-center"        
      >
        <div className="p-3">
          <a
            href="#"
            className=" font-semibold"
          >
            {category}
          </a>
        </div>
      </div>
    );
  };
  useEffect(() => {
    fetch('https://product-be.herokuapp.com/articles/getCategoryList')
      .then((data) => data.json())
      .then((data) => {
        console.log('data>>>', data);        
        setCategories(data);
      })
      .catch((e) => {
        setCategories([]);
        console.log('errr', e);
      }).finally(() =>{
        setLoading(false);
      })
  }, []);

  return (
    <div className="p-5 relative">
      {loading && (
        <div className="grid grid-cols-6 gap-2">
          {new Array(6).fill(0).map(() => {
            return <Skeleton width="11rem" height="4rem" borderRadius="16px" />;
          })}
        </div>
      )}
      {!loading && (
        <Carousel
          value={courses}
          numVisible={6}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      )}
    </div>
  );
};
export default ContentScroller;
