import { useEffect, useState } from "react"

const ContactBook = () => {
  const [contactInput, setContactInput] = useState({
    name: "",
    mobileNumber: "",
    email: "",
  })

  const [contactData, setContactData] = useState(() => {
    try {
      const savedContacts = JSON.parse(localStorage.getItem("contactdata"))
      return savedContacts ? savedContacts : []
    }
    catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("contactdata", JSON.stringify(contactData))
  }, [contactData])

  const handleInput = (e) => {
    const { name, value } = e.target
    setContactInput({ ...contactInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setContactData((prev) => [...prev, contactInput])
    setContactInput({
      name: "",
      mobileNumber: "",
      email: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Contact Book Application</h1>

        <form onSubmit={handleSubmit} className="mb-8 rounded bg-white p-6 shadow">
          <div className="grid gap-4">
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="name"
              placeholder="Name"
              value={contactInput.name}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="tel"
              name="mobileNumber"
              placeholder="Mobile number"
              value={contactInput.mobileNumber}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              value={contactInput.email}
              onChange={handleInput}
              required
            />
          </div>

          <button className="mt-5 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Save Contact
          </button>
        </form>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Contact List</h2>

        {contactData.length === 0 ? (
          <p className="rounded bg-white p-4 text-center text-gray-500 shadow">No Contacts Found</p>
        ) : (
          <div className="space-y-4">
            {contactData.map((contact, index) => (
              <div key={index} className="rounded bg-white p-5 shadow">
                <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
                <p className="text-gray-600">Mobile: {contact.mobileNumber}</p>
                <p className="text-gray-600">Email: {contact.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactBook
