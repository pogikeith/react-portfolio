import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">  
        I was born and raised in Southern California and spent a good portion of my life in Arizona as well. I have a beautiful wife and am a dad to four 
        very energetic boys. I love to golf and in the early morning you can find me at the gym. 
        <br></br>
        <br></br>
        Regarding my professional experiences, I have seen failure and much success. I am a hard working, self-driven leader and entreprenuer with 
        experience in many areas. This includes sales, marketing and real estate.
        I have held positions with the title of VP of Sales, VP of Marketing, Recruiting Coordinator, Chief Innovation Officer, Technology Officer and 
        President. I am looking for an opportunity that will allow me to use my experience to help a company flourish.<br></br>
        <br></br>
        In my role as President I implemented systems that grew company revenue 97% from year 1 to year 3. Initiatives included better coordination between 
        sales and marketing teams along with precise communications with dev team. I helped find and create new avenues of manufacturing, design and technology that resulted 
        in new product lines and higher margins increasing our bottom line.<br></br>
        <br></br> 
        In my roles of VP and Recruiting Coordinator I created new onboarding and sales systems increasing sales by 25%. I was also able to develop and implement a 
        marketing and hiring strategy that increased monthly net hires by 60% and retention by over 20%. <br></br>
        <br></br>
        As Chief Innovation Officer and Technology Officer I was the creative director of company websites. I assisted in website development, QA testing and 
        implementation of new content and UI. I worked alongside developers in QA tests and implementation of new content and user interface and design. 
        <br></br>
        <br></br>
        I have recently completed a 600 hour full stack software development course that has increased my ability to better create apps. My ambition is to 
        continue
        to develop this skill to gain employment and more job satisfaction. <br></br>
        <br></br>
        
      </div>
    </div>
  );
}