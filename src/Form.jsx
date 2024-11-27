 import React from "react";
 
 const Form = React.forwardRef(function Form({}, ref) {
    const name = React.useRef()
    const email = React.useRef()

    React.useImperativeHandle(ref, () => {
        return{
            clear(){
                name.current.value = ''
                email.current.value = ''
            }
        }
    })

    return (
      <form ref={ref}>
        <p>
          <label>Name</label>
          <input ref={name} type="text" />
        </p>
  
        <p>
          <label>Email</label>
          <input ref={email} type="email" />
        </p>
        <p id="actions">
          <button>Save</button>
        </p>
      </form>
    );
  })
  
  export default Form;