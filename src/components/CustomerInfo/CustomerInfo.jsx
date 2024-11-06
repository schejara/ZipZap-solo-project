import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
function CustomerInfoForm(){
    let [nameToSend, setNameToSend] = useState('')
    let [addressToSend, setAddressToSend] = useState('')
    let [cityToSend, setCityToSend] = useState('')
    let [zipToSend, setZipToSend] = useState('')
    let [pickupOrDelivery, setPickupOrDelivery] = useState ('Pickup')
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setNameToSend(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddressToSend(event.target.value)
    }

    const handleCityChange = (event) => {
        setCityToSend(event.target.value)
    }

    const handleZipChange = (event) => {
        setZipToSend(event.target.value)
    }
    const handlePickupChange = (event) =>{
        if(event.target.id === 'pickupradio'){
            setPickupOrDelivery('Pickup')
        }
        else if(event.target.id === 'deliveryradio'){
            setPickupOrDelivery('Delivery')
        }
    }

    const history = useHistory();
    const addInfo = (event) => {
        event.preventDefault();
        dispatch({
            type:'setInfo',
            payload: {
                name: nameToSend,
                address: addressToSend,
                city: cityToSend,
                zip: zipToSend,
                pickupOrDelivery: pickupOrDelivery
            }
        })
        history.push('/OrderConfirmation')
    }
    return(
        <div>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={(event) => addInfo(event)}>
                <input onChange={handleNameChange} type='text' placeholder='Name'></input>
                <input onChange={handleAddressChange} type='text' placeholder='Adress'></input>
                <input onChange={handleCityChange} type='text' placeholder='City'></input>
                <input onChange={handleZipChange} type='text' placeholder='ZIP code'></input>
                <button type='submit'>Submit</button>
            </form>
            <form onChange={(event) => handlePickupChange(event)}>
                <input type='radio' name='pickup' id='pickupradio' defaultChecked = {true}/>Pickup
                <input type='radio' name = 'pickup' id = 'deliveryradio'/> Delivery
            </form>
        </div>
    )
}

export default CustomerInfoForm