/* eslint-disable no-restricted-syntax */
import React from 'react'
import './index.css'

const Contacts = props => {
  const {data} = props
  const updatedData = {}
  let prefix = data[0][0]
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === prefix) {
      if (updatedData[prefix]) {
        updatedData[prefix].push(data[i])
      } else {
        updatedData[prefix] = [data[i]]
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      prefix = data[i][0]
      updatedData[prefix] = [data[i]]
    }
  }
  const headings = Object.keys(updatedData)

  const refs = {}
  for (const i of headings) {
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
    headings.map(each => (
      <>
        <p className="headings" key={each} ref={refs[each]}>
          {each}
        </p>
        {renderNames(each)}
      </>
    ))

  const renderQuickButtons = () => (
    <div className="buttons-container">
      {headings.map(each => (
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
