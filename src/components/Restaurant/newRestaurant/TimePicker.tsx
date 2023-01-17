import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

type Props = {
  time?: string,
  parentCallback:(arg:string) =>void
}

export default function ResponsiveTimePickers({time = "00:00", parentCallback}:Props) {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2018-01-01T'+time+':00.000Z'),
  );

  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        <MobileTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            let hour= newValue?.hour().toString();
            let minute= newValue?.minute().toString();

            if(newValue){
              if(newValue?.hour()<10){
                hour = newValue?.hour()!=0 ? "0"+newValue?.hour():"00";
              }
            }
            if(newValue){
              if(newValue?.minute()<10){
                minute = newValue?.minute()!=0 ? "0"+newValue?.minute():"00";
              }
            }
            parentCallback(hour+':'+minute);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}