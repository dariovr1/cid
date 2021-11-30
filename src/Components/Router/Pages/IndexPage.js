import React, {useEffect, Fragment} from 'react';
import ProgressBox from '../../ProgressBox';
import Header from '../../Header';
import TableContainerContainer from '../../TableContainerComponent';


const IndexPage = () => {
    return(
        <div>
            <Header />
            <div style={{ backgroundColor: '#faf9f9' , padding:'20px' }}>
            <ProgressBox />
            </div>
            <TableContainerContainer />
        </div>
    )
};


export default IndexPage;