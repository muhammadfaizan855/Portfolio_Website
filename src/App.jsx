import codeLogo from "./assets/codeLogo.png"
import Type from "./components/type.jsx"
import Logo2 from './assets/logo2.svg'
import Animation from "./components/Animation.tsx"

const App = () => {
  

  return (
    <>

      {/* Background animation */}
      <Animation />
      
      
        <section  className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white" id="home">
  <div className="max-w-full w-full px-6 sm:px-10 lg:px-28 py-10 overflow-hidden">
        

    {/* 1st Main Section */}
    
    <div className="flex flex-wrap items-center justify-between">
       
      {/* Left Column */}
    
      <div className="w-full md:w-7/12 mb-8 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-poppins mb-4">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
          I am
          <strong className="text-[#00debf] font-poppins ml-2">MUHAMMAD FAIZAN</strong>
        </h1>

        {/* Typewriter Effect */}
        <div className="mt-8">
          <Type />
        </div>
      </div>



      {/* Right Column logo */}
      <div className="w-full md:w-5/12 flex justify-center">
        <img
          className="h-auto my-10 max-w-xs sm:max-w-sm lg:max-w-md"
          src={codeLogo}
          alt="Code Logo"
        />
      </div>
    </div>

     {/* 1st section ended */}




    {/* Second Section */}


    <div className="mt-16 px-6 sm:px-10 lg:px-0">
      <div className="flex flex-wrap text-center md:text-left items-center">


        {/* Description Section */}

        <div className="w-full md:w-8/12 mb-10 md:mb-0 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            LET ME <span className="text-[#00debf]"> INTRODUCE </span> MYSELF
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />
            I am fluent in classics like{" "}
            <i>
              <b className="text-[#00debf]">JavaScript, React.js, and React Native.</b>
            </i>
            <br />
            <br />
            My field of interest includes building new{" "}
            <i>
              <b className="text-[#00debf]">Web Technologies and Products</b>
            </i>{" "}
            and exploring areas related to{" "}
            <i>
              <b className="text-[#00debf]">
                Deep Learning and Natural Language Processing.
              </b>
            </i>
            <br />
            <br />
            Whenever possible, I apply my passion for developing products with{" "}
            <i>
              <b className="text-[#00debf]">Modern JavaScript Libraries and Frameworks</b>
            </i>{" "}
            like{" "}
            <i>
              <b className="text-[#00debf]">React.js</b>
            </i>.
          </p>
        </div>

        {/* Avatar Section */}

        <div className="w-full md:w-4/12 flex justify-center">
          <img
            className="h-auto my-10 max-w-xs sm:max-w-sm lg:max-w-md"
            src={Logo2}
            alt="Avatar Logo"
          />
        </div>
      </div>
    </div>
  
  
    {/* Second Section ended*/}








    {/* third section started  */}
  
  
    <div className="min-h-screen flex items-center text-center justify-center bg-cover bg-center">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm p-6 md:p-8 lg:p-10">
<h1 className='text-4xl lg:text-3xl xl:text-4xl mt-5 mb-5 font-poppins leading-tight text-white'>
 FIND ME ON
</h1>
<p className="mt-6 text-base sm:text-sm font-poppins font-light text-white leading-relaxed">FEEL FREE TO <span className="text-[#62f0dd]">CONNECT</span> WITH ME</p>






  {/* social media icons  */}

  {/* Facebook Icons Started */}

  <ul className="flex justify-center mt-8 space-x-4">
  <li className="rounded-full duration-300 p-1.5 shadow-inner shadow-[#73bc9c9d]  hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      className="text-[#4aeede]"
      title="Facebook"
      target="_blank"
    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </li>

  {/* Facebook Icons Ended*/}




  {/* Email Icons Started*/}



  <li className="rounded-full duration-200 p-1.5 shadow-inner shadow-[#73bc9c9d] hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      href="mailto:faizanhanif560@gmail.com"
      className="text-[#4aeede]"
      title="Mail"
      target="_blank"

    >
     <svg
  className="w-10 h-10 p-1"
  fill="currentColor"
  viewBox="0 0 48 48"
  aria-hidden="true"
>
  <path
    d="M44.5 6H3.5C2.1 6 1 7.1 1 8.5v31C1 40.9 2.1 42 3.5 42h41c1.4 0 2.5-1.1 2.5-2.5v-31C47 7.1 45.9 6 44.5 6ZM43 8 24 23 5 8h38Zm1 31H4V12l19.2 15c.5.4 1.1.4 1.6 0L44 12v27Z"
    fill="currentColor"
  ></path>
   </svg>

  {/* Email Icons Ended*/}




  {/* GitHub Icons Started*/}
   

    </a>
  </li>
  <li className="rounded-full duration-200 p-1.5 shadow-inner shadow-[#73bc9c9d] hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      href="https://github.com/muhammadfaizan855"
      className="text-[#4aeede]"
      title="GitHub"
      target="_blank"

    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>


  {/* GitHub Icons Ended*/}





  {/* LinkedIn Icons Started*/}
  

    </a>
  </li>
  <li className="rounded-full duration-200 p-1.5 shadow-inner shadow-[#73bc9c9d] hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
  <a
    href="https://www.linkedin.com/in/muhammadfaizan855"
    aria-label="Find us on LinkedIn"
    target="_blank"
    rel="noopener"
    className="text-[#4aeede]"
    title="LinkedIn"

  >
    <svg
      className="w-10 h-10 p-1.5"
      fill="currentColor"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
        fill="currentColor"
      ></path>
    </svg>
  </a>
</li>
  
  {/* LinkedIn Icons Ended*/}


</ul>

  {/* .....  */}
  </div>
</div>
    {/* third Section ended*/}

  </div>
</section>
    </>

  )
}

export default App