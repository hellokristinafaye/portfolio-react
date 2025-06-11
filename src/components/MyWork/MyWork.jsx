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
              <div className="work-container">
                <div className="hover-card">
                  <a href={work.w_deploy_link} target="_blank" className="">
                    <img key={index} src={work.w_img} alt="" className="" />
                  </a>
                  <div className="work-overlay">
                    <p className="">{work.w_name}</p>
                    <p className="work-desc">{work.w_desc}</p>
                    <p className="work-desc">Tech Used: {work.w_tech}</p>

                    <a href={work.w_deploy_link} target="_blank" className="">
                      Live Demo
                    </a>
                    <br className="" />
                    <a href={work.w_github_link} target="_blank" className="">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              {/* overlay section (trial)*/}
            </>
          );
        })}

     

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