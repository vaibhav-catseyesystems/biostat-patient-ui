import React from 'react'

const PageHeader = ({ heading, subheading }) => {

    return (
        <>
            <header className="flex-1 justify-between items-center mb-6">
                <div>
                    <h1 className="text-[32px] font-semibold text-[#1E293B] mb-4">
                        {heading}
                    </h1>
                    <p className="text-[16px] text-[#64748B]">
                        {subheading}
                    </p>
                </div>
                <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
            </header>
           
        </>
    )
};

export default PageHeader;
