export const ClearBtn = () => {
    return (
        <div className={"cursor-pointer flex justify-center items-center text-white bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full hover:scale-105 hover:font-preL transition ease-in-out duration-100 font-preEL text-[20px] w-[80px] h-[36px]"}>clear</div>
    )
}

export const ClearTrue = () => {
    return (
        <div className={"flex justify-center items-center bg-gradient-to-r from-teal-300 to-emerald-400 p-[1px] rounded-full font-preEL text-[20px] w-[80px] h-[36px]"}>
            <div className={"flex justify-center items-center w-full h-full bg-white rounded-full text-teal-400"}>clear</div>
        </div>
    )
}

export const ClearFalse = () => {
    return (
        <div className={"flex justify-center items-center text-[#D3D3D3] border border-[#D3D3D3] rounded-full font-preEL text-[20px] w-[80px] h-[36px]"}>clear</div>
    )
}