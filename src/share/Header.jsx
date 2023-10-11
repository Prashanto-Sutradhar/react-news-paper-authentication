import moment from 'moment/moment';
import logo from'../assets/logo.png'
const Header = () => {
    return (
        <div className=' mx-auto  flex items-center flex-col'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className=' text-xl'>{moment().format("dddd, MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;