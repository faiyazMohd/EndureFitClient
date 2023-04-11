import React from "react";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import BookMarksTabs from "../components/Others/BookMarksTabs";

// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const Bookmarks = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh]">
      <Navbar />
      <Alert />
      <div className="mt-5 mb-8">
        <h1 className="text-5xl font-bold text-[#1a2b4b] text-center">Bookmarks</h1>
      </div>

      <BookMarksTabs />
      {/* <Footer /> */}
    </div>
  );
};

export default Bookmarks;
