import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

const User = () => {
  const [userData, setUserData] = useState()

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(userData)

  return (
    <div className="text-center">
      <h1 className="text-info mt-3 mb-5">User Random Generator App</h1>
      <Container className="border border-4 w-50 p-3">
        <img src={userData?.picture?.large} alt="" className="rounded-circle mt-3" />
        <h2>Hi, My name is</h2>
        <h1>{userData?.name?.first} {userData?.name?.last}</h1>
        <h2>{new Date(userData?.dob?.date).toLocaleDateString("tr-TR")}</h2>
        <h3>{userData?.email}</h3>
        <h4>{userData?.phone}</h4>
        <h5>{userData?.location?.city} / {userData?.location?.country}</h5>
      </Container>
      <button className="btn btn-success mt-5" onClick={getUser}>
        Click for Random User Generate
      </button>
    </div>
  )
}

export default User
