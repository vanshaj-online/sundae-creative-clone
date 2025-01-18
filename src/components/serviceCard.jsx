import React from 'react'

function serviceCard({titleOne, titleTwo, index, title3}) {
    return (
        <div className='bg-[#1d2120] cursor-pointer'>
            <div className={`flex w-full pt-5 border-b ${index === 0 && 'border-t'} border-black justify-center bg-white hover:rounded-[80px] transition-all duration-300 ease-in-out relative`}>
                <span className='text-textred text-xs menu-font uppercase font-medium absolute top-5 left-[17%]'>service /00{index + 1}</span>
                <div className='text-8xl text-black uppercase flex-col flex items-center font-thin'>
                    <span className=''>{titleOne}</span>
                    <span className=''>{titleTwo}</span>
                    {title3 && <span className=''>{title3}</span>}
                </div>
            </div>
        </div>
    )
}

export default serviceCard