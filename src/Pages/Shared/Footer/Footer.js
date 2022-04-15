import './Footer.css'

const Footer = () => {
   const today = new Date()
   const year = today.getFullYear()
    return (
        <footer className='text-center mt-3 mb-3'>
            <p>copyright @ {year}</p>
        </footer>
    );
};

export default Footer;