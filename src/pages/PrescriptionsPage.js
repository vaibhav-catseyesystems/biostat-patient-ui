import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../components/common/PageHeader'
import SearchBar from '../components/common/SearchBar'
import Loader from '../components/common/Loader'
import { getUserPrescriptions } from '../actions/userPrescriptionActions'
import CardBase from '../components/common/CardBase'
import { BioStatButton } from '../components/common/BioStatButton'

export const PrescriptionsPage = () => {
    const dispatch = useDispatch()
    const userPrescriptionReducer = useSelector((state) => state.userPrescriptionReducer)
    const { loading, error, prescriptionList, pagination } = userPrescriptionReducer
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRecords = prescriptionList?.filter((record) => {
        const matchesSearch = record?.prescription_name?.toLowerCase().includes(searchQuery?.toLowerCase())
        return matchesSearch;
    });

    function formatDate(createdAt) {
        const date = new Date(createdAt);
        return date.toLocaleDateString("en-US");
    }

    useEffect(() => {
        dispatch(getUserPrescriptions(1, 5))
    }, [])

    return (
        <div>
            <PageHeader heading={"Prescriptions"} subheading={"My presciptions"} />
            <SearchBar placeholder={"Search prescriptions"} value={searchQuery} onChange={setSearchQuery} />
            {loading && <Loader />}
            {error ? (
                <p className="text-center text-red-500 py-8">Failed to load presciptions. Please try again.</p>
            ) : (
                <div className="grid gap-4 overflow-hidden mt-4">
                    {
                        filteredRecords.map((prescription) => (
                            <CardBase
                                title={prescription.prescription_name}
                                subtitle={prescription.description}
                                children={
                                    <div className='flex-1'>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                                            <div className="flex items-center gap-1">
                                                <span className="text-[14px] text-[#64748B]">Prescription Type:</span>
                                                <span className="text-[14px] text-[#1E293B] capitalize">
                                                    {prescription?.prescription_details[0]?.prescription_type || "NA"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[14px] text-[#64748B]">Dosage Info:</span>
                                                <span className="text-[14px] text-[#1E293B]">{prescription?.prescription_details[0]?.times_per_day + "/day" || "NA"}</span>
                                                <span className="text-[14px] text-[#1E293B]">{prescription?.prescription_details[0]?.instruction || "NA"}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                                            <div className="flex items-center gap-1">
                                                <span className="text-[14px] text-[#64748B]">Prescribed By:</span>
                                                <span className="text-[14px] text-[#1E293B] capitalize">
                                                    {prescription?.doctor_id || "NA"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[14px] text-[#64748B]">Prescription date:</span>
                                                <span className="text-[14px] text-[#1E293B]">{formatDate(prescription?.prescription_date) || "NA"}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                actionButton={
                                    <BioStatButton title={"Order now"} />
                                }
                            />
                        ))
                    }
                </div>
            )}

        </div>
    )
}
