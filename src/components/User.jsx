import React, { useState, useEffect } from "react"
import Header from "./Header"
import Container from "react-bootstrap/Container"
import UserStyle from "../scss/user.module.scss"
import "./../output.css"
const User = ({dark}) => {
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
  useEffect(() => {
    console.log(dark)
    console.log("Iam here")
  }, [dark])

  // console.log(userData)

  return (
    <div className=" flex-1 h-100% bg-yellow-800">
          <div className={`${dark?'bg-slate-700':'bg-white' } w-full h-100% `} >
              <div className="text-center">
              <h1 className="text-info mt-5 mb-5 fs-2">User Random Generator App</h1>
              <Container className="flex-row justify-center items-center border border-4 border-dark w-50 p-3 text-center bg-yellow-200">
                <div className={`w-100%  flex justify-center`}>
                <img
                  src={userData?.picture?.large}
                  alt=""
                  className="rounded-circle mt-3 mb-3 border-dark border-2"
                />
                </div>
                <h2 className={UserStyle.specialTextUser}>
                  Hi, My name is{" "}
                  <span className={UserStyle["span"]}>
                    "{userData?.name?.first} {userData?.name?.last}"
                  </span>
                </h2>
                <h5 className={UserStyle.specialTextUser} style={{ color: "blue" }}>
                  You can see my information from the icons...
                </h5>
                <Header data={userData} />
              </Container>
              <button className="btn btn-success mt-5 fs-3" onClick={getUser}>
                Click for Random User Generate
              </button>
            </div>
        </div>
    </div>
  )
}

export default User
