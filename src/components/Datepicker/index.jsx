import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import Stack from '@mui/material/Stack'

export default function DateTimeValidation({name, placeholder, value, onChange, ...props}) {
  // const [value, setValue] = React.useState()

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} />}
        label="Sart time 10am - 4:30pm"
        value={value}
        onChange={onChange}
        minDate={new Date('2020-08-31')}
        minTime={new Date(0, 0, 0, 10)}
        maxTime={new Date(0, 0, 0, 16, 30)}
        {...props}
      />
    </LocalizationProvider>
  )
}
