import { useState } from "react"

export function useForm(initialForm={}) {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            // poner el name entre [] modifica el valor dentro de formState
            [name]: value
        })
    }

    const resetForm = () => {
        setFormState(initialForm);}
    
    //enviamos estos valores al componente
    return {
        formState,
        onInputChange,
        resetForm
    }
}