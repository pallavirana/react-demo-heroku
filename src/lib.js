import React from 'react'
import './css/bootstrap.css'
import './css/font-awesome.min.css'
import './css/style.css'
import specialities from './images/specialities-icon.png';
import experience from './images/experience-highlights.png';
import business from './images/business-icon.png';
import blog1 from './images/blog-img1.jpg';
import blog2 from './images/blog-img2.jpg';
import blog3 from './images/blog-img3.jpg';

export const header =(
  <header>
<div className="container">
      <div className="headercontent">
    <h1>Vishal Shahi</h1>
    <h2>Serial Entrepreneur, Startup Evangelist, 17+ years of technology gameplay</h2>
    <h3>Vishal Shahi is a serial entrepreneur and has been a founder of several successful IT
companies. Having 17+ years of hands-on experience in agile enterprise, web and
mobile-commerce and platform development & delivery, he is playing technical and
functional role in his companies. </h3><h3>

Vishal is a startup mentor and has helped several budding entrepreneurs to
successfully launch their own startups. He leverages his strong technical and strategic
experience to create winning teams,  and scale mission-driven organisations.</h3>
<p><a href="https://www.facebook.com/vishal.shahi" className="socialmedia" target="_blank"><i className="fa fa-facebook"></i></a>
   <a href="https://twitter.com/nutsitlab" className="socialmedia" target="_blank"><i className="fa fa-twitter"></i></a>
   <a href="https://www.linkedin.com/in/shahivishal/" className="socialmedia" target="_blank"><i className="fa fa-linkedin"></i></a>  </p>
</div>
</div>
  </header>
	)

export const expyears =(
  <section className="yearsrexp">

    <div className="container anglebg">
    <div className="leftblock yearsblock">
          <div className="years redtxt"><span className="intheyear">In the year</span><br/><span className="yearno">2004</span></div>
          <p>He founded Infact Solutions, a technology and software development company in the
year 2004 with a vision of providing end-to-end web services, such as designing,
development, hosting, and internet marketing - all under one roof. At the time when IT
outsourcing was still in its nascent stage and everyone programmer was looking to be
a part of this revolution, Vishal too decided to jump on the bandwagon, but in an all
different way. He decided to start his own technology company with an ambition to
challenge the traditional offshore delivery model and to create bespoke software that
solves important problems for businesses.</p>
    </div>
    <div className="rightblock yearsblock">
    <div className="years"><span className="intheyear">In the year</span><br/><span className="yearno">2007</span></div>
      <p>Adding another milestone in his portfolio, Vishal co-founded Zooom-IT in 2007, a joint
venture between Infact Solutions and NZ Technologies, an Information Technology firm
that quickly expanded its presence to four countries. He is leading the company as
Chief Technology Officer (CTO), and is responsible for design and development of
software architecture. </p>
    </div>
  </div>
      </section>

)

export const expyears2009 =(
  <section className="yearsrexp alternate">
    <div className="container anglebg">
<div className="leftblock yearsblock">
      <div className="years"><span className="intheyear">In the year</span><br/><span className="yearno">2009</span></div>
      <p>Vishal founded NUTSITLAB LLC in 2009 as a comprehensive, all-service technology
outsourcing company, where he helps businesses grow in an exponential, yet organic
way. His impressive fast track management career is demonstrated the ability to build
peak performing teams and achieve cross functional objectives. He is a result-driven IT
professional with hands-on expertise in envisioning success, generating multi-million
dollar revenue, and pursuing growth initiatives grounded firmly on business and
economic value. And this is evident from the success of the companies he is managing
now. </p>
</div>
<div className="rightblock yearsblock">
<div className="years redtxt"><span className="intheyear">In the year</span><br/><span className="yearno">2014</span></div>
  <p>In 2014, Vishal co-founded ucreate.it, a specialized IT firm that allows businesses to
create cost effective minimum viable products to validate a concept before scaling up.
He is handling ucreate.it as its Chief Executive Officer (CEO), taking care of everything
from technology and business development to brand enhancement and sales strategy.</p>
<p>Vishal’s ability to seamlessly incorporate advanced technologies into business systems
has helped him deliver strategic initiatives for his customers. He has successfully
demonstrated his proficiency in understanding and solving complex business
problems, and adopting pragmatic agile and lean thinking.​   ​ All the companies that he
has founded or co-founded are purely a result of his passion for technology and
commitment to todays youth with skills and opportunity. He is a firm believer that
technology can innovate the future and has been consistently working towards it. </p>
</div>
</div>
</section>
)

export const riding =(
  <section className="riderspanel">
    <div className="container">
        <div className="col-lg-5 content">

        <p>Vishal is passionate about riding bikes and own stunning Harley Davidson. He wishes
        to ride across the entire world. In pursuit of his  this dream, he has already travelled
        from Kashmir to Kanyakumari - the North corner to South corner of India. He has
        covered approximately 26000 Miles riding on his bike.</p><p> In fact, he is so passionate about
        bike riding, his new venture <a href="http://ridersopinion.com/" target="_blank">ridersopinion.com</a> revolves around connecting the
        like-minded riders across the globe.   </p>
  </div>
        </div>
  </section>
)

export const highlightsblock =(
  <section className="hightlights">
      <div className="container">
        <div className="col-lg-12"><p>Vishal is actively involved in many societal causes, especially blind and differently-
        abled kids - a cause that is close to his heart. He often organizes events for these special
        kids, like taking them out for a movie or a lunch. </p>
        <p>He earned his graduation degree from the prestigious Punjab University, Chandigarh,
        and also holds Project Management certifications. Apart from the companies he owns,
        he has held key positions in several Information Technology companies, specialized in
        global delivery model. </p></div>
        <div className="col-sm-4 block">
              <img src={specialities} />
              <h3>Specialties  </h3>
              <p>Technology advice <br/>
  Team management <br/>
  Business and Product strategy <br/>
  Agile and Hybrid development
  </p>
        </div>
          <div className="col-sm-4 block">
                <img src={experience} />
                <h3>Experience Highlights </h3>
                <p><strong>ucreate.it</strong> Chief Executive Officer - India <br/>


  <strong>NUTSITLAB</strong> Chief Executive Officer<br/>


  <strong>Zooom-IT</strong> Chief Technology Officer<br/>


  <strong>Infact Solutions</strong> Chief Executive Officer
  </p>
          </div>
          <div className="col-sm-4 block">
                <img src={business} />
                <h3>Business Mantra  & Cares About </h3>
                <p>Care about the customer<br/>
                  Invest in ideas that matter<br/>
                  Blind and Differently-abled kids
  </p>
          </div>

      </div>
  </section>
)


export const blogpanel =(
  <section className="blogpanel">
      <div className="container">
          <div className="col-lg-12">
                <div className="heading"><h2>Recent Posts</h2>

          </div>  </div>
            <div className="col-sm-4">
                <div className="blog">
                    <img src={blog1} />
                    <p className="date">
                        <i className="fa fa-calendar"></i> 20 June, 2017
                    </p>
                    <h3>Beutiful World</h3>
                    <p>“I can see, that is why I can be happy, in what you call the dark, but which to me is golden. I can see a God-made world, not a man-made world” <a href="https://www.linkedin.com/pulse/beautiful-world-vishal-shahi" target="_blank">Read More <i className="fa fa-angle-double-right"></i></a></p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="blog">
                    <img src={blog2} />
                      <p className="date">
                        <i className="fa fa-calendar"></i> 8 June, 2017
                    </p>
                    <h3>Visit to an unlike world</h3>
                    <p>Imagine that you have to go from one room to another with your eyes closed. You may find it difficult; you may collide with the things and find it quite a hassle to manoeuvre yourself. <a href="https://www.linkedin.com/pulse/visit-unalike-world-vishal-shahi" target="_blank">Read More <i className="fa fa-angle-double-right"></i></a></p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="blog">
                    <img src={blog3} />
                      <p className="date">
                        <i className="fa fa-calendar"></i> 25 April, 2017
                    </p>
                    <h3>WHAT WE BELIEVE IN The Entrepreneurial Mindset & Startups</h3>
                    <p>Your entrepreneurial venture begins with you. Entrepreneurship is a challenging and rewarding path. <a href="https://www.linkedin.com/pulse/what-we-believe-entrepreneurial-mindset-startups-vishal-shahi" target="_blank">Read More <i className="fa fa-angle-double-right"></i></a></p>
                </div>
            </div>
      </div>
  </section>
)

export const footer =(
  <footer>
        Copyright © 2017. All rights reserved.
  </footer>
)
