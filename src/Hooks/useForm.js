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

    const onSubmit = (event) => {
        event.preventDefault() //evita q se actualice la pag
        console.log(formState);}

    //enviamos estos valores al componente
    return {
        formState,
        onInputChange
    }
}