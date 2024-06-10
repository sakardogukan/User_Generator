import { BsCalendar2Date } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FiPhone } from "react-icons/fi"
import { CiLocationOn } from "react-icons/ci"
import React from "react"

const Header = (hData) => {
  console.log(hData)
  // console.log(hData?.data?.email)
  // console.log(hData?.data?.phone)
  // console.log(hData?.data?.dob)
  // console.log(hData?.data?.location)

  return (
    <div>
      <BsCalendar2Date />
      <IoMailOutline />
      <FiPhone />
      <CiLocationOn />
      <h2>{new Date(hData?.data?.dob?.date).toLocaleDateString("tr-TR")}</h2>
      <h2>{hData?.data?.email}</h2>
      <h2>{hData?.data?.phone}</h2>
      <h2>
        {hData?.data?.location?.city} / {hData?.data?.location?.country}
      </h2>
    </div>
  )
}

export default Header
