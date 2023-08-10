
import { GiHamburgerMenu } from 'react-icons/gi';
// import { AiOutlineBell } from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
import img from '../../../public/logo.png'
function NavigationBar() {
    return (
        <>
        <div className="navbar bg-base-100 w-[90%] mx-auto">
            <div className="flex-1">
                <GiHamburgerMenu></GiHamburgerMenu>
            </div>
            <div className="flex-none gap-4">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                <div className="w-10 rounded-full">
                            <img src={img} />
                        </div>
                        <p>Md. Abu Sayeed Ifty</p>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                    
                        <div >
                            <IoIosArrowDown></IoIosArrowDown>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
       
        <hr />
        </>
    );
}

export default NavigationBar;
