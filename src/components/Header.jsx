import { BsCalendar2Date } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { FiPhone } from "react-icons/fi"
import { CiLocationOn } from "react-icons/ci"
import React, { useState } from "react"
import HeaderStyle from "../scss/header.module.scss"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Header = (hData) => {
  const [visibleMail, setVisibleMail] = useState(false)
  const [visiblePhone, setVisiblePhone] = useState(false)
  const [visibleLocation, setVisibleLocation] = useState(false)
  const [visibleDob, setVisibleDob] = useState(false)

  console.log(hData)
  // console.log(hData?.data?.email)
  // console.log(hData?.data?.phone)
  // console.log(hData?.data?.dob)
  // console.log(hData?.data?.location)

  return (
    <div>
      <Row>
        <Col>
          <header className={HeaderStyle.specialborder}>
            <BsCalendar2Date
              onMouseOver={() => {
                setVisibleDob(true)
              }}
              onMouseLeave={() => setVisibleDob(false)}
            />

            <IoMailOutline
              onMouseOver={() => {
                setVisibleMail(true)
              }}
              onMouseLeave={() => setVisibleMail(false)}
            />

            <FiPhone
              onMouseOver={() => {
                setVisiblePhone(true)
              }}
              onMouseLeave={() => setVisiblePhone(false)}
            />

            <CiLocationOn
              onMouseOver={() => {
                setVisibleLocation(true)
              }}
              onMouseLeave={() => setVisibleLocation(false)}
            />
          </header>
        </Col>
      </Row>

      {visibleDob && (
        <h2 className={HeaderStyle.specialText}>
          {new Date(hData?.data?.dob?.date).toLocaleDateString("tr-TR")}
        </h2>
      )}

      {visibleMail && (
        <h2 className={HeaderStyle.specialText}>{hData?.data?.email}</h2>
      )}
      {visiblePhone && (
        <h2 className={HeaderStyle.specialText}>{hData?.data?.phone}</h2>
      )}
      {visibleLocation && (
        <h2 className={HeaderStyle.specialText}>
          {hData?.data?.location?.city} / {hData?.data?.location?.country}
        </h2>
      )}
    </div>
  )
}

export default Header
