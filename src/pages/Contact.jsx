import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const details = {
  name: 'Satyam Urkude',
  bio: 'Frontend Developer',
  contact: {
    email: 'https://satyamurkude@gmail.com',
    github: 'https://github.com/satyamurkude',
    linkedin: 'https://www.linkedin.com/in/satyam-urkude-982561249/',
    twitter: 'https://twitter.com/satyam_urkude',
  },
};

const Contact = () => {
  return (
    <div className='container-max min-h-screen'>
      <h1 className='text-2xl my-4 font-bold'>Contact</h1>
      <div>
        <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
        <p className='text-lg'>{details.bio}</p>
  <p>I'm in my third year of Computer Science Engineering, specializing in Competitive Programming using JavaScript. My passion lies in Web Development and Blockchain Technology Seeking challenges, I aim to create impactful solutions. I'm enthusiastic about collaborating for positive change through technology!</p>
<br></br>
<p>Apart from coding, some other activities that I love to do!</p><br></br>
<ol>
<li><span>Love to dive deep in concepts of coding</span><br></br></li>
<li><span>Love to play(Piano,Flute,Harmonium)</span><br></br></li>
<li><span>To Learn About Entrepreneurship</span><br></br></li>
</ol>
<br></br>
<img className='h-40 w-40 border border-black' src="https://media.licdn.com/dms/image/D5603AQFxwumMToFGYA/profile-displayphoto-shrink_800_800/0/1698640734427?e=1709164800&v=beta&t=tXpO0kYRGb0f2r92VR1uJO_X5_eJM0XZgGwg1rLUwmU" alt="pic"/>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <a href={details.contact.email} className='flex items-center gap-1'>
              {details.contact.email}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Github: </span>{' '}
            <a
              href={details.contact.github}
              className='flex items-center gap-1'
            >
              {details.contact.github}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Linkedin: </span>{' '}
            <a
              href={details.contact.linkedin}
              className='flex items-center gap-1'
            >
              {details.contact.linkedin}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Twitter: </span>{' '}
            <a
              href={details.contact.twitter}
              className='flex items-center gap-1'
            >
              {details.contact.twitter}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
