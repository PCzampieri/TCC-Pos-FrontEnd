import React from 'react'
import moment from 'moment'

const DateFormat = ({date}) => {
    const d = moment(date).format('DD/MM/YYYY')
  return <span>&nbsp;{d}</span>
}

export default DateFormat