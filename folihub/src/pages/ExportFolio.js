import React from 'react';
import Welcome from "react-welcome-page";
import {} from '../components/ExportFolioStyle';

class ExportFolio extends React.Component {
    render() {
        if (this.state.loading) {
            return (
                <Welcome
                loopDUration={1000}
                data={[
                    {
                        backgroundColor: colorPlan.Light,
                        textColor: colorPlan.Dark,
                        text: "Loading...",
                        image: {Logo_Dark}
                    }
                ]}
                />
            );
        }
        else {
            var pages = [];
            
        }
    }
}
export default ExportFolio;
