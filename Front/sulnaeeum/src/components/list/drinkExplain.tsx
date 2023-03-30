import { DrinkDetailType } from '@/types/DataTypes'
import React, { useState } from 'react'
import { ClearBtn } from './clearBtn'
import { Modal } from '../common/modal'
import DrinkClear from './modal/drinkClear'

export const DrinkExplain = (props: {drink : DrinkDetailType}) => {
    const {drink} = props
    const [open, setOpen] = useState<boolean>(false)
    const modalOpen = () => {
      setOpen(!open) 
    };
  return (
    <div className={'w-7/12'}>
        <Modal w='500px' h='auto' open={open} modalOpen={modalOpen}>
          <DrinkClear drinkName={drink.drinkName} modalOpen={modalOpen}/>
        </Modal>
        <div className={'flex justify-between items-center pl-8 pr-4'}>
            <div className={'flex items-end text-[16px] font-preEL'}>
              <div className={'mr-4 text-[34px] font-preR'}>{drink.drinkName}</div>
              {drink.drinkLevel}% | {drink.drinkAmount} 
            </div>
            <div onClick={modalOpen}>
              <ClearBtn />
            </div>
        </div>
        <hr className={'border-xs border-zinc-300 mt-2 mb-10'} />
        <div className={'flex'}>
          <div className={'flex justify-center w-1/3 h-[300px]'}><img className={'h-full'} src={drink.drinkImage} alt="" /></div>
          <div className={'w-2/3 py-2'}>
            <div className={'flex items-center p-2 h-[80px] mb-4 rounded-xl bg-zinc-100'}>술 재료가 들어갈 자리입니다ㅏㅏㅏㅏㅏ</div>
            <div className={'flex items-center p-2 h-[180px] rounded-xl bg-zinc-100'}>{drink.drinkInfo}</div>
          </div>
        </div>
    </div>
  )
}