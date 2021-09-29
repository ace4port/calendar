import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'

export default function DateTimeValidation({value, label, ...props}) {
  const [_value, setValue] = React.useState(value)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DateTimePicker
          openTo="year"
          views={['year', 'month', 'day', 'hours', 'minutes']}
          label={label}
          value={_value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
    </LocalizationProvider>
  )
}
