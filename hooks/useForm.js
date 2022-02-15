import React, { useState } from "react"

export const useForm = (callback) => {
  // Form Values
  const [values, setValues] = useState({})
  // Errors
  const [errors, setErrors] = useState({})
  // Remove Errors
  const removeError = (getParameter) => {
    let newObj = { ...errors }
    delete newObj[getParameter]
    setErrors(newObj)
  }

  // Validate
  const validate = (e, name, value) => {
    console.log("validate: ", name, value)
    // validate each input value
    switch (name) {
      case "firstName":
      case "lastName":
      case "company":
        if (value.length <= 3) {
          // set error
          setErrors({
            ...errors,
            name: "Must be at least 4 characters",
          })
        } else {
          // remove error from input
          removeError("name")
        }
        break

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          })
        } else {
          removeError("email")
        }
        break

      default:
        break
    }
  }

  // Method to handle form inputs
  const handleChange = (e) => {
    e.persist()
    // console.log("input name: ", e.target.name);
    // console.log("input value: ", e.target.value);
    validate(e, e.target.name, e.target.value)
    // Set values in state
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()

    if (Object.keys(errors).length === 0 && Object.keys(values).length) {
      callback()
    } else {
      console.log("there is an error ")
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useForm
