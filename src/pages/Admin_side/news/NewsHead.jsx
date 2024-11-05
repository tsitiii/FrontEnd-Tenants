// import React from 'react'

// import axios from "axios"
// import { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const NewsHead = () => {
    // const [photos, setPhotos]= useState([])
    const photos=[
      {
        "id": "102",
        "author": "Ben Moore",
        "width": 2000,
        "height": 1500,
        "url": "https://unsplash.com/photos/pJILiyPdrXI",
        "download_url": "https://picsum.photos/id/102/2000/1500"
      },
      {
        "id": "103",
        "author": "Ilham Rahmansyah",
        "width": 2000,
        "height": 1500,
        "url": "https://unsplash.com/photos/DwTZwZYi9Ww",
        "download_url": "https://picsum.photos/id/103/2000/1500"
      },
      {
        "id": "104",
        "author": "Dyaa Eldin",
        "width": 2592,
        "height": 1500,
        "url": "https://unsplash.com/photos/2fl-ocJ5MOA",
        "download_url": "https://picsum.photos/id/104/3840/2160"
      },
      {
        "id": "106",
        "author": "Arvee Marie",
        "width": 2592,
        "height": 1936,
        "url": "https://unsplash.com/photos/YnfGtpt2gf4",
        "download_url": "https://picsum.photos/id/106/2592/1728"
      },
    ];

  return (
    <>
           <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop={true} >
            {photos.map((photo)=>(
              <div key={photo.id} className="h-[75vh]">
                <img src={photo.download_url} alt={`photo by ${photo.author}`} className="h-full w-full object-cover" />
              </div>
            ))}
           </Carousel>
    </>
  )
}

export default NewsHead