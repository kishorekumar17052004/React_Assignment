import { useState } from "react"

const initialProfileData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
}

const UserProfile = () => {
  const [profileData, setProfileData] = useState(initialProfileData)
  const [submittedProfile, setSubmittedProfile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData({ ...profileData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedProfile({ ...profileData })
    setProfileData(initialProfileData)
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-cyan-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <section className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-sky-100/70">
          <header className="bg-gradient-to-r from-sky-600 to-cyan-500 px-6 py-8 text-white sm:px-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-100">
              Assignment 11
            </p>
            <h1 className="text-3xl font-bold">User Profile Form</h1>
            <p className="mt-2 text-sky-100">
              Enter your information to create a complete profile.
            </p>
          </header>

          <form
            className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
            onSubmit={handleSubmit}
          >
            <label className="text-sm font-semibold text-slate-700">
              Name
              <input
                className={inputStyle}
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Email
              <input
                className={inputStyle}
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Mobile
              <input
                className={inputStyle}
                type="tel"
                name="mobile"
                value={profileData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Address
              <textarea
                className={`${inputStyle} min-h-12 resize-none`}
                name="address"
                value={profileData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="1"
                required
              />
            </label>

            <button
              className="mt-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200 sm:col-span-2"
              type="submit"
            >
              Create Profile
            </button>
          </form>
        </section>

        {submittedProfile && (
          <article className="mx-auto mt-10 max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-700 p-6 text-white">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-100 text-2xl font-bold uppercase text-sky-700">
                {submittedProfile.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                  User Profile
                </p>
                <h2 className="mt-1 text-2xl font-bold">{submittedProfile.name}</h2>
              </div>
            </div>

            <dl className="divide-y divide-slate-100 px-6 py-2">
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</dt>
                <dd className="mt-1 break-words font-medium text-slate-800">{submittedProfile.email}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mobile</dt>
                <dd className="mt-1 font-medium text-slate-800">{submittedProfile.mobile}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Address</dt>
                <dd className="mt-1 whitespace-pre-wrap font-medium text-slate-800">{submittedProfile.address}</dd>
              </div>
            </dl>
          </article>
        )}
      </div>
    </main>
  )
}

export default UserProfile
