import React from 'react';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import SubHeader from '../subHeader/SubHeader';

import sub03 from './sub03.jpg'

const Branch = () => {
      return (
            <div>
                  <Nav/>
                  <SubHeader 
                        subImg={sub03}
                        title='지사 안내'
                        sec='원활한 고객 서비스를 제공드리기 위해 지사와 협력하고 있습니다.'
                  />
                  <Footer/>
            </div>
      );
};

export default Branch;