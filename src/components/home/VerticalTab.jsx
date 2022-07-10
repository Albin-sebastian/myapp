import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import { Featured } from './pages/Featured';
import { Ai } from './pages/Ai';
import { Compute } from './pages/Compute';
import { Internet } from './pages/Internet';
import { Containers } from './pages/Containers';
import { Hybrid } from './pages/Hybrid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,

    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid
            sx={{ bgcolor: 'background.paper', display: 'flex', height: 524 }}
        >
            <Tabs
                TabIndicatorProps={{
                    sx: {
                        borderLeft: ' 2px solid',
                        bgcolor: "orange",
                        height: "10px"
                    },
                    tabs: {
                        "& button[aria-selected='true']": {
                            border: "3px solid red"
                        }
                    }
                }}
                // sx={{ textDecoration: 'underline', borderLeft: '2px solid #e8e8e8' }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
            //sx={{ borderColor: 'divider', borderLeft: '2px solid #e8e8e8' }}
            >
                <Tab label="Featured at Build" {...a11yProps(0)} underline="hover" />
                <Tab label="AI + machine learning" {...a11yProps(1)} sx={{ textTransform: 'none', borderLeft: '2px solid #e8e8e8' }} />
                <Tab label="Compute" {...a11yProps(2)} sx={{ textTransform: 'none' }} />
                <Tab label="Containers" {...a11yProps(3)} sx={{ textTransform: 'none' }} />
                <Tab label="Hybrid + multicloud " {...a11yProps(4)} sx={{ textTransform: 'none' }} />
                <Tab label="Internet of Things(IoT)" {...a11yProps(5)} sx={{ textTransform: 'none' }} />
                <Tab label="See all products(200+) > " {...a11yProps(6)} sx={{ textTransform: 'none' }} />
            </Tabs>
            <TabPanel value={value} index={0} >
                <Featured />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Ai />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Compute />

            </TabPanel>
            <TabPanel value={value} index={3}>
                <Containers />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Hybrid />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Internet />

            </TabPanel>
            <TabPanel value={value} index={6}>
                see all
            </TabPanel>
        </Grid >
    );
}
