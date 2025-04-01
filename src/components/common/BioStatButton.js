import React from 'react'

export const BioStatButton = ({ title, onclick, icon }) => {
    return (
        <>
            <button
                onClick={onclick}
                className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full flex cursor-pointer items-center justify-center gap-2"
            >
                <span>{title}</span>
                {icon && <span className="text-[20px]">{icon}</span>}
            </button>
        </>
    )
}
