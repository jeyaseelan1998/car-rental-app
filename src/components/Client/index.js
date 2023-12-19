import { useEffect, useState } from "react"
import Header from "../Header"
import RentCard from "../RentCard"

import './index.css'

const Client = () => {
    const [from, setFrom] = useState("")
    const [rentData, setRentData] = useState([])


    const getData = async () => {
        const api = "https://63f1c0324f17278c9a193673.mockapi.io/rentData"
        const response = await fetch(api)
        const data = await response.json()
        if (response.ok) {
            setRentData(data);
        } else {
            console.log("error");
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const onSearchTriggered = e => {
        e.preventDefault()

        

    }

    const renderFormFields = () => {
        const onChangeFrom = e => {
            const { value } = e.target
            setFrom(value)
        }

        return (
            <form className="text-center" onSubmit={onSearchTriggered}>
                <div class="mb-3 mt-4 d-flex align-items-center w-50 m-auto">
                    <input required type="search" class="form-control me-2" id="fromLocation" placeholder="Search by location" value={from} onChange={onChangeFrom} />
                </div>
            </form>
        )
    }

    const renderRentCards = () => {
        const filteredResults = rentData.filter(({location}) => location.toLowerCase().includes(from.toLowerCase()))
        
        return (
            <ul className="p-0 d-flex cards-list">
                {
                    filteredResults.map((item, index) => <RentCard key={index} rendDetails={item} />)
                }
            </ul>
        )
    }


    return (
        <div>
            <Header />
            {renderFormFields()}
            {renderRentCards()}
        </div>
    )
}

export default Client