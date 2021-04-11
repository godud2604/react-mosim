import React from 'react';
import Nav from '../nav/Nav';
import SubHeader from '../subHeader/SubHeader';
import Footer from '../footer/Footer';

import sub02 from './sub02.jpg';

const Alliance = () => {
      return (
            <div>
                  <Nav/>
                  <SubHeader 
                        subImg={sub02}
                        title='제휴사'
                        sec='(주)모심은 검증된 제휴사와 함께 하고 있습니다.'
                  />
                  <Footer/>
            </div>
      );
};

export default Alliance;