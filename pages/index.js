import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Tech Edge Advisors - Make Software Work</title>
      <meta name="description" content="Together, we can make software work. An integrated technical consultancy and software development agency with a laser focus on solving your business needs." />
    </Head>

    <Nav/>

    <img className="cover" src="/img/mountains@2x.png"></img>

    <div className="container">
      <div className="brand">
        <img className="logo" alt="Tech Edge Advisors logo" src="/img/logo-square.png"></img>
        <h1 className="name">Tech Edge Advisors, LLC</h1>
      </div>
      
      <section>
        <p className="lead">Together, we can make software work.</p>
        <p>Tech Edge Advisors is an integrated technical consultancy and software development agency with a laser focus on solving your business problems.</p>
      </section>

      <section>
        <h3>We know every side of the industry.</h3>
        <p>
          We've worked those who provide software and those who adopt it.<br/>
          We've led the sales teams, service teams, and engineering teams, on-shore and off.<br/>
          No matter your industry, we're the ones to make software work with you.
        </p>
      </section>

      <section>
        <h3>We've worked with Fortune 500 companies and 5 person startups.</h3>
        <p>
          We've been on the ground floor of startups and the highest floors of enterprises.<br/>
          We know that software has the potential to transform every business.<br/>
          No matter your size, we're the ones to make software work with you.
        </p>
      </section>


      <section>
        <h3>All in all, we're software experts.</h3>
        <p>
          We've implemented CRMs in health care and built the software for financial services.<br/>
          We've fundraised for universities and provided world-class support to non-profits.<br/>
          No matter your challenges, we're the ones to make software work with you.
        </p>
      </section>

      <section className="contact">
        <h2>Let's do this, together.</h2>
        <p>See how great business software can be.</p>

        <div className="content-form" dangerouslySetInnerHTML={{__html: `
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
  portalId: "6238237",
  formId: "0a344f21-b3e4-4f12-bfa4-a1d38789c9ac"
});
</script>
        `}}/>
      </section>
    </div>

    <style jsx global>{`
      body {
        font-family: chaparral-pro-display, serif;
        font-size: 16px;
      }
      
      .lead {
        font-weight: 700;
        font-size: 3rem;
        margin: 0.5rem 0;
      }

      h1 {
        font-size: 3rem;
        margin: 0.5rem 0;
      }

      h2 {
        font-size: 2.6rem;
        margin: 0.5rem 0;
      }

      h3 {
        font-size: 1.8rem;
        margin: 0.5rem 0;
      }

      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }

      section {
        margin: 5rem 0;
      }

      body {
        margin: 0;
        padding: 0;
      }

    `}</style>

    <style jsx>{`
      h1.name {
        font-size: 1.4rem;
        font-weight: 300;
      }

      .content-form {
        margin: 2rem 0;
      }

      .logo {
        width: 5rem;
        display: block;
        margin: 0 auto;

        
      }

      .brand {
        text-align: center;
        margin: 5rem auto;
      }

      .container {
        margin: 0 auto;
        width: 60rem;
        max-width: 90vw;
      }
      
      .contact {
        margin-top: 10rem;
      }

      .cover {
        width: 100vw;

        height: 60vh;
      }
    `}</style>
  </div>
)

export default Home
