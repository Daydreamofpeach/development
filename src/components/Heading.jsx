import React from 'react'

import { TextField } from '@mui/material';


//SearchBar Top of the Page Component

const Heading = () => {
    return (
      <div className="position-center bg-zinc-900 md:pt-0 pt-2 justify-content-center text-center position: sticky text-white">
        <TextField
          classname="text-white"
          id="-width-text-field"
          label="Search New Zealand"
          placeholder="Ōtautahi"
          //   helperText="Type a Location"
          margin="normal"
          fullWidth // this may override your custom width
        />
      </div>
    );
}

export default Heading;