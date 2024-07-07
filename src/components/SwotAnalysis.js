import React from 'react';
import SWOTImage from './images/Picture1.png';

const SwotAnalysis = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-8xl bg-gray-100 p-6 rounded-lg shadow-lg ml-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Good Morning, Manan Gandhi</h1>
          <div className="flex items-center">
            <div className="mr-2 text-sm text-gray-600">MG</div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center">MG</div>
          </div>
        </div>
        
         <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-left">SWOT Analysis</h2>
          <p className="text-gray-600 text-left">SWOT Analysis is a strategic planning technique used to identify Strengths, Weaknesses, Opportunities, and Threats.</p>
        </div>

        <div className="grid grid-cols-2 gap-80">
          <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-lg text-left"><span className="heading"  ><b>Technical Skills:</b></span> Proficient in HTML, CSS, JavaScript, and various frontend frameworks (e.g., React, Angular).</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Creativity:</b></span> Ability to design aesthetically pleasing and user-friendly interfaces.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Problem Solving:</b></span> Strong analytical skills to troubleshoot and debug frontend issues efficiently.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Adaptability:</b></span> Quick learner, able to grasp new technologies and frameworks swiftly.</p>  
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-lg text-left"><span className="heading"  ><b>Technical Skills:</b></span> Proficient in HTML, CSS, JavaScript, and various frontend frameworks (e.g., React, Angular).</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Creativity:</b></span> Ability to design aesthetically pleasing and user-friendly interfaces.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Problem Solving:</b></span> Strong analytical skills to troubleshoot and debug frontend issues efficiently.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Adaptability:</b></span> Quick learner, able to grasp new technologies and frameworks swiftly.</p>  
          </div>
        </div>
        {/* Code For Image */}
        <div className="flex justify-center" style={{ marginTop: "-50px" }}>
          <img src={SWOTImage} alt="Strengths" className="w-64 h-64" />
        </div>


        <div className="grid grid-cols-2 gap-80" style={{ marginTop: "-50px" }}>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-lg text-left"><span className="heading"  ><b>Technical Skills:</b></span> Proficient in HTML, CSS, JavaScript, and various frontend frameworks (e.g., React, Angular).</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Creativity:</b></span> Ability to design aesthetically pleasing and user-friendly interfaces.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Problem Solving:</b></span> Strong analytical skills to troubleshoot and debug frontend issues efficiently.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Adaptability:</b></span> Quick learner, able to grasp new technologies and frameworks swiftly.</p>  
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-lg text-left"><span className="heading"  ><b>Technical Skills:</b></span> Proficient in HTML, CSS, JavaScript, and various frontend frameworks (e.g., React, Angular).</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Creativity:</b></span> Ability to design aesthetically pleasing and user-friendly interfaces.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Problem Solving:</b></span> Strong analytical skills to troubleshoot and debug frontend issues efficiently.</p>
          <p className="text-lg text-left"><span className="heading"  ><b>Adaptability:</b></span> Quick learner, able to grasp new technologies and frameworks swiftly.</p>  
          </div>
        </div>


        
      </div>
    </div> 
  );
};

export default SwotAnalysis;
