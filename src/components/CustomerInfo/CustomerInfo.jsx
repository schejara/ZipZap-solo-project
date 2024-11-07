import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import './CustomerInfo.css';
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
        <div >
            <h2 >Shipping Address</h2>
            <form  className="container" onSubmit={(event) => addInfo(event)}>
                <input className="input-field" onChange={handleNameChange} type='text' Value ='Shobha Chejara' placeholder='Name'></input>
                <input onChange={handleAddressChange} type='text' Value = '18261 Glacier Way' placeholder='Adress'></input>
                <input onChange={handleCityChange} type='text' Value = 'Lakeville, MN' placeholder='City'></input>
                <input onChange={handleZipChange} type='text' Value = '55044' placeholder='ZIP code'></input>
                
                <button type='submit'>Place Order</button>
            </form>
            <form className=" radio-form" onChange={(event) => handlePickupChange(event)}>
                <input type='radio' name='pickup' id='pickupradio' />Pickup
                <input type='radio' name = 'pickup' id = 'deliveryradio' defaultChecked = {true}/> Delivery
            </form>
            
            
        </div>
    )
}

export default CustomerInfoForm