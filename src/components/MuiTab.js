import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { commercialInterior, corporateInterior, homeInterior } from '../Navmenudata';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
const TabItemContent = ({tabContent}) => {
    return (<div className="d-flex flex-wrap justify-content-between gap-2">
        {tabContent?.map((e, index) => {
            return (
                <div key={index} className='tab-flex-items'>
                        <i className={e.icon}></i>   <div>{e.name}</div>
                </div>
            )
        })}
    </div>)
}
export default function MuiTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: "100%", borderRadius: "10px" }} className='tab-main-div'>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="House interior" {...a11yProps(0)} />
                    <Tab label="Corporate interior" {...a11yProps(1)} />
                    <Tab label="Commercial building" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <TabItemContent tabContent={homeInterior}/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <TabItemContent tabContent={corporateInterior}/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <TabItemContent tabContent={commercialInterior}/>
            </TabPanel>
        </Box>
    );
}
