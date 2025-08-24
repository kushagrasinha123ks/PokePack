import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-3 mt-16 w-full">
            <div className="flex items-center justify-center space-x-4">
                <span className="text-white">Contact</span>
                <div className="flex space-x-3">
                    <a 
                        href="https://github.com/kushagrasinha123ks" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <img 
                            src={github} 
                            alt="GitHub" 
                            className="w-5 h-5 invert" 
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/kush19/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <img 
                            src={linkedin} 
                            alt="LinkedIn" 
                            className="w-5 h-5 invert" 
                        />
                    </a>
                </div>
                <span className="text-white ml-4">Powered by <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">pokeapi.co</a></span>
            </div>
        </footer>
    );
};

export default Footer;
