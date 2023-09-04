import React from 'react'

const About = () => {
  return (
    <div name = "About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                My name is Saksham Purbey, and I am a third-year undergraduate student at Georgia Tech. I am currently majoring in Computer Science with threads in Intelligence and Modeling/Simulation. I am well-accustomed to various programming languages like HTML/CSS, JavaScript, Java, Python, and C. I have experience in working with artificial intelligence and machine learning. From TensorFlow and PyTorch to SciKit Learn, I have worked with various machine learning libraries to build various data-driven solutions. Apart from my experience in web-development, I have worked with the AWS Cloud, and I have dabbled in agile mobile development. I am passionate about developing software, and I look forward to combining my technical knowledge with my passion for healthcare and finance to develop meaningful products.
            </p>
            <br></br>

            <p className='text-xl'>
                I am currently seeking internships to hone my skills by developing solutions to real problems in the industry. Please feel free to contact me with any potential opportunities!
            </p>
        </div>
    </div>
  )
}

export default About