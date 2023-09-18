import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function OriginBox({ id }) {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={Cities}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Origin" />}
    />
  );
}

const Cities = [
  { label: 'Edinburgh', year: 1994 },
  { label: 'Bratislava', year: 1972 }
]