import { useState } from "react";
import Container from "../Container/Container";
import "./Sidebar.css";
import {SlUserFemale} from 'react-icons/sl';
import {AiOutlineHeart, AiOutlineStar, AiOutlineBell} from 'react-icons/ai';
import {CiSettings} from 'react-icons/ci';
const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (index) => {
      setSelectedOption(index);
    };
  
    return (
        <div className="w-[300px] border-r-2 h-[100vh]">
            <Container>
                <h1 className="py-24 text-2xl font-bold"> User Profile</h1>

                <div className="options text-xl">
                    <h3
                        className={`option ${selectedOption === 0 ? 'selected' : ''}  gap-4 items-center`}
                        onClick={() => handleOptionClick(0)}
                    >
                        <SlUserFemale></SlUserFemale>
                        <span>User info</span>
                    </h3>
                    <h3
                        className={`option ${selectedOption === 1 ? 'selected' : ''}  gap-4  items-center`}
                        onClick={() => handleOptionClick(1)}
                    >
                        <AiOutlineHeart></AiOutlineHeart>
                        <span>Favorite</span>
                    </h3>
                    <h3
                        className={`option ${selectedOption === 2 ? 'selected' : ''}  gap-4 items-center`}
                        onClick={() => handleOptionClick(2)}
                    >
                        <AiOutlineStar></AiOutlineStar>
                        <span>Watchlist</span>
                    </h3>
                    <h3
                        className={`option ${selectedOption === 3 ? 'selected' : ''}  gap-4 items-center`}
                        onClick={() => handleOptionClick(3)}
                    >
                        <CiSettings></CiSettings>
                        <span>Setting</span>
                    </h3>
                    <h3
                        className={`option ${selectedOption === 4 ? 'selected' : ''}  gap-4 items-center`}
                        onClick={() => handleOptionClick(4)}
                    >
                        <AiOutlineBell></AiOutlineBell>
                        <span>Notification</span>
                    </h3>
                </div>

            </Container>

        </div>
    )
}

export default Sidebar;