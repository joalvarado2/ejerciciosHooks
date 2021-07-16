import React, {useState, useEffect} from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

    const {name, email} = formState

    useEffect(() => {
        console.log("hey")
    },[])
    
    useEffect(() => {
        console.log("el email cambio")
    },[email])

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
                [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <h1>useEffect</h1>
            <hr/> 

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="TuNombre@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === "jonathan") && <Message/>}
        </div>
    )
}

export default SimpleForm
