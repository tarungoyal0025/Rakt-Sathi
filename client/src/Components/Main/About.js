import React from 'react'

const About = () => {
  return (
    <div className='mx-5'>
      <p className=' fs-2 text-white bg-danger fw-bold text-center mt-4'>About Rakt Sathi</p>
      <br /><p className='fs-3'>Rakt Sathi works as a platform for users to register  either to request/donate blood and blood banks to manage their stocks by managing the pending donations and request along with scheduling blood camps and managing them. The system will authenticate the user/bank using their username(mobile) and password to further perform other actions.</p>
      <br /><p className='fs-3'>It includes managing and tracking blood donations, connecting donors with recipients, and providing real-time information on blood shortages and needs. The platform will include both a user-facing interface and an blood bank’s interface for managing the data.</p>
      <p className='fs-1 mt-3'>
        <a target="_blank" href="https://github.com/tarungoyal0025"><i className='bx bxl-github'></i></a>&nbsp;&nbsp;
        <a target="_blank" href="https://www.linkedin.com/in/tarungoyal0025/"><i className='bx bxl-linkedin-square'></i> </a>
      </p>
    </div>
  )
}

export default About