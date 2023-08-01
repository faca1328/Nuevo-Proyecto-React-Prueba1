
import { useForm } from "../Hooks/useForm";

export function FormComp() {

    const initialForm = {
        exampleInputUser1: '',
        exampleInputEmail1: '',
        exampleInputPassword1: ''
    }

    //enviamos el initialForm al hook y recibimos los valore formState y onInputChange que los desestructuramos
    const {formState, onInputChange} = useForm(initialForm)

    // y del formState desestructuramos los valores del initialForm
    const {exampleInputUser1, exampleInputEmail1, exampleInputPassword1} = formState

    const onSubmit = (event) => {
        event.preventDefault() //evita q se actualice la pag
        console.log(formState);}

    return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputUser1">User Name</label>
                    <input type="text" className="form-control" name="exampleInputUser1" placeholder="User Name" value={exampleInputUser1} onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={exampleInputEmail1} onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="exampleInputPassword1" placeholder="Password" value={exampleInputPassword1} onChange={onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            )
}
