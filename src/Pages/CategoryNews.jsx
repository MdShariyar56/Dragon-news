import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCArd from '../Component/newsCArd';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews,SetcategoryNews] = useState([])
   
    // console.log(id, data)

    useEffect(() => {
        if(id=="0"){
            SetcategoryNews(data);
            return
        }
        else if( id == "1"){
            const filteredNews = data.filter(news=>news.others.is_tody_pick == true);
            SetcategoryNews(filteredNews);
        }
        else{
             const filteredNews = data.filter(news=>news.category_id == id);

            // console.log(filteredNews)

            SetcategoryNews(filteredNews)

        }
       

    },[data,id])

    return (
        <div>
            <h1 className='font-bold'>
               Total <span className='text-secondary'>{categoryNews.length}</span> news Found
            </h1>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news) =>(
                        <NewsCArd key={news.id} news={news}></NewsCArd>
                    
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;