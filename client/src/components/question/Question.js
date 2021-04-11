import React from 'react';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import SubHeader from '../subHeader/SubHeader';

import sub04 from './sub04.jpg'

const Question = () => {
      return (
            <div>
                  <Nav/>
                  <SubHeader
                        subImg={sub04}
                        title='고객 센터'
                  />
                  <Footer/>
            </div>
      );
};

export default Question;