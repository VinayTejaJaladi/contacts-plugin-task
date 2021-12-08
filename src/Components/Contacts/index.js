/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react'
import './index.css'

const Contacts = props => {
  const {data} = props

  const updatedData = data.reduce((acc, cur) => {
    const prefix = cur[0]
    if (acc[prefix]) {
      acc[prefix].push(cur)
    } else {
      acc[prefix] = [cur]
    }
    return acc
  }, {})

  const refs = {}
  for (const i in updatedData) {
    refs[i] = React.createRef()
  }

  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

  const renderNames = key => {
    const names = updatedData[key]
    return (
      <>
        {names.map(name => (
          <p className="names" key={name}>
            {name}
          </p>
        ))}
      </>
    )
  }

  const renderHeadings = () =>
    Object.keys(updatedData).map(each => (
      <>
        <p className="headings" key={each} ref={refs[each]}>
          {each}
        </p>
        {renderNames(each)}
      </>
    ))

  const renderQuickButtons = () => (
    <div className="buttons-container">
      {Object.keys(updatedData).map(each => (
        <button
          type="button"
          className="quick-buttons"
          onClick={() => handleClick(each)}
        >
          {each}
        </button>
      ))}
    </div>
  )

  return (
    <div className="list-contacts-buttons">
      <div className="headings-names">{renderHeadings()}</div>
      <div>{renderQuickButtons()}</div>
    </div>
  )
}

export default Contacts
