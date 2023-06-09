import React from 'react'
import style from '@/pages/map/map.module.css'
import { useState } from 'react';


export default function Map1(props: any) {

  const { datas } = props



  return (
    <>
      <div className={`${style.mapContainer} ${style.layout}`}>

        {datas.map((data: any) => {
          return <>
            <img key={data.id} className={`${style['map' + data.id]} ${style.hover_cursor}`} src={`${data.src}기본.png`} alt="지도 이미지"
              onMouseOver={() => {
                const target = document.getElementById(data.id);
                if (target)
                  target.style.visibility = 'visible'
              }}></img>

          </>
        })}
      </div>
    </>
  )
}
