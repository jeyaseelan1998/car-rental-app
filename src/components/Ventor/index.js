import { useState } from "react"
import Header from "../Header"

import './index.css'

const Ventor = () => {
    const [carName, setCarName] = useState("")
    const [carImage, setCarImage] = useState("")
    const [carDescription, setCarDescription] = useState("")
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(0)

    const onSubmitHandler = async e => {
        e.preventDefault()
        const id = Math.random() * 100000
        console.log({ carName, carImage, carDescription, location, rating });

        const api = "https://63f1c0324f17278c9a193673.mockapi.io/rentData"
        const options = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id, carName, carImage, carDescription, location, rating })
        }
        const response = await fetch(api, options)
        const data = await response.json()
        if (response.ok) {
            console.log(data, response);
            setCarName("")
            setCarImage("")
            setCarDescription("")
            setLocation("")
            setRating(0)
        } else {
            console.log("error");
        }
    }


    const renderFormFields = () => {
        const onChangeCarName = e => {
            const { value } = e.target
            setCarName(value)
        }
        const onChangeCarUrl = e => {
            const { value } = e.target
            setCarImage(value)
        }
        const onChangeCarDescription = e => {
            const { value } = e.target
            setCarDescription(value)
        }
        const onChangeCarLoaction = e => {
            const { value } = e.target
            setLocation(value)
        }
        const onChangeCarRating = e => {
            const { value } = e.target
            setRating(value)
        }

        return (
            <form className=" m-auto inputs-form-container" onSubmit={onSubmitHandler}>
                <h1 className="add-new-car-heading">Add new rental car</h1>
                <div class="mb-3 mt-4">
                    <input required type="text" class="form-control me-2" placeholder="car name" value={carName} onChange={onChangeCarName} />
                </div>
                <div class="mb-3 mt-4">
                    <input required type="text" class="form-control me-2" placeholder="car image url" value={carImage} onChange={onChangeCarUrl} />
                </div>
                <div class="mb-3 mt-4">
                    <input required type="text" class="form-control me-2" placeholder="car description" value={carDescription} onChange={onChangeCarDescription} />
                </div>
                <div class="mb-3 mt-4 d-flex">
                    <input required type="search" class="form-control me-2" id="fromLocation" placeholder="Location" value={location} onChange={onChangeCarLoaction} />
                    <input required type="range" class="me-2" id="fromLocation" placeholder="Location" value={rating} onChange={onChangeCarRating} />
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        )
    }

    return (
        <div>
            <Header />
            {renderFormFields()}
        </div>
    )
}

export default Ventor