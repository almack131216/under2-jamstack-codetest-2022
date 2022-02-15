import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Heading } from "../../atoms/Heading"
import useForm from "../../../hooks/useForm"

SignUp.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export function SignUp({ className = "" }) {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const { firstName, lastName, email, company } = formData

  const formSignUp = () => {
    setLoading(true)
    console.log("FORM submitted with values: ", values)

    const sendForm = async () => {
      try {
        let res = await fetch("https://under2.free.beeceptor.com/submit", {
          method: "POST",
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            company: values.company,
          }),
        })
        let resJson = await res.json()
        if (res.status === 200) {
          setFormData({})
          setMessage("Subscribed successfully")
        } else {
          setMessage("Some error occured")
        }
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }

    sendForm()
  }

  const { handleChange, values, errors, handleSubmit } = useForm(formSignUp)

  if (errors) {
    console.log(errors)
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <section className={`${className}`}>
      <Container>
        <div className='col-span-full bg-gray-100 '>
          <Heading className=''>
            Financial Tech trends, straight to your inbox
          </Heading>
          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First name</label>
            <input
              type='text'
              name='firstName'
              onChange={handleChange}
              value={firstName}
            />

            <label htmlFor='lastName'>Last name</label>
            <input
              type='text'
              name='lastName'
              onChange={handleChange}
              value={lastName}
            />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              onChange={handleChange}
              value={email}
            />

            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              onChange={handleChange}
              value={company}
            />

            <button className='inline-block bg-blue-700 hover:bg-blue-800 px-5 py-4 rounded-md text-white'>
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}
