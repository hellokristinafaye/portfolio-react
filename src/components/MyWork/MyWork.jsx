import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1 className="">My Latest Work</h1>
        <img src={theme_pattern} alt="" className="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <>
              <img key={index} src={work.w_img} alt="" className="" />
              <img src="" alt="" className="" />
            </>
          );
        })}

      <div className="work-hover">
        <div className="card-hover">Hello</div>
      </div>

      </div>
      
      

      


      {/* commenting out the button until we have more projects to showcase */}
      {/* <div className="mywork-showmore">
        <p className="">Show More</p>
        <img src={arrow_icon} alt="" className="" />
      </div> */}

    </div>
  );
}

export default MyWork