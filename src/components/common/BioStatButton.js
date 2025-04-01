import React from 'react'

export const BioStatButton = ({ title, onclick, icon,variant='primary' }) => {
    const variantClass=variant=='primary'?"bg-[#4318D1] text-white":
    variant=='secondary'?"bg-[#F1F5F9] text-[#64748B]":"bg-[#4318D1] text-white"
    return (
        <>
            <button
                onClick={onclick}
                className={variantClass+ " px-3 py-2 rounded-[8px] font-[500] max-sm:w-full flex cursor-pointer items-center justify-center gap-2"}
            >
                <span>{title}</span>
                {icon && <span className="text-[20px]">{icon}</span>}
            </button>
        </>
    )
}
