import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const Landing = () => {
  return (
    <div className="text-white text-center h-screen flex flex-col justify-center items-center">
      <p className="font-medium text-xl mb-4">Abdirahman Ibrahim</p>
      
      <div className="grid grid-cols-3 gap-2">
        <button><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdiths"><FaLinkedin size={32} color="#FFFFFF" /></a></button>
        <button><a target="_blank" rel="noreferrer" href="https://www.twitter.com/abdiths"><FaTwitterSquare size={32} color="#FFFFFF" /></a></button>
        <button><a target="_blank" rel="noreferrer" href="https://www.github.com/abdiths"><FaGithubSquare size={32} color="#FFFFFF" /></a></button>
      </div> 

      <div className="text-l mt-4">
        <p>This website is a work in progress.</p>
        <p>(please feel free to reach out- don&apos;t be shy)</p><br/>
        <a href="mailto:aaibrahim@unc.edu">aaibrahim@unc.edu</a>
      </div>
    </div>
  );
};

export default Landing;
