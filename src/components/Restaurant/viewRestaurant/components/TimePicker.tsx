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
          }}

          renderInput={(params) => <TextField {...params} />}
          
          onAccept={()=>{
            let hour= value?.hour().toString();
            let minute= value?.minute().toString();

            if(value){
              if(value?.hour()<10){
                hour = value?.hour()!=0 ? "0"+value?.hour():"00";
              }
            }
            if(value){
              if(value?.minute()<10){
                minute = value?.minute()!=0 ? "0"+value?.minute():"00";
              }
            }
            parentCallback(hour+':'+minute);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}