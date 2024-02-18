// import reactLogo from '../assets/react.svg' 
import { FaBeer, FaEye, FaReply } from 'react-icons/fa';
import { FaRegMessage } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdTime } from "react-icons/io";
import './Post.css'

const Dummy = [
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "How to Make Your Own DIY Avengers Costume",
        "description": "Tips and tricks for creating Avengers costumes at home.",
        "views": "1578"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "The Best Avengers Memes to Brighten Your Day",
        "description": "Hilarious memes featuring the Avengers and their antics.",
        "views": "2436"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "Which Avengers Character Are You Based on Your Zodiac Sign?",
        "description": "Find out which Avengers character matches your zodiac sign.",
        "views": "1894"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "The Ultimate Avengers Quiz: How Well Do You Know the MCU?",
        "description": "Test your knowledge of the MCU with this Avengers quiz.",
        "views": "2765"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "The Avengers Ranked by Their Power Levels",
        "description": "A ranking of the Avengers by their strength and abilities.",
        "views": "3217"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "The Best Avengers Fan Art You Need to See",
        "description": "Amazing fan art of the Avengers by talented artists.",
        "views": "2983"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "The Avengers Assemble: A History of the Team",
        "description": "A history of the Avengers, from their origins to now.",
        "views": "2641"
    },
    {
        "profile_pic": "https://www.pngall.com/wp-content/uploads/4/Marvel-Avengers-PNG-Free-Image.png",
        "title": "The Avengers Endgame: What's Next for the MCU?",
        "description": "What we know so far about the future of the MCU.",
        "views": "3378"
    }
]

export default function Posts() {
    const reactLogo = "https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/delta%20batch-2_mvxhpplauw20tr.jpeg"
    return (
        <>
        <div id="wrapper" style={{paddingInline:'20px', paddingTop:'12px'}}>
            {
                Dummy?.map((e) => (
                    <div id='main'>
                        <div id='profile__picture'>
                            <img src={e.profile_pic} alt="" />
                        </div>
                        <div id="posts">
                            <div id="post__title">
                                <p>{e.title}</p>
                                <p>{e.description}</p>
                            </div>
                            <div id="message__view__time__icon">
                                <FaMessage size='30px' id='message__icon' color='#a3e635' />
                                <div id="eye__icon__box" style={{paddingBlock:"4px"}}>
                                    <FaEye display='inline' id='views__icon' color='#082f49'/><p style={{ color: '#082f49' }}>{e.views}</p>
                                </div>
                                <IoMdTime id='eye__icon' color='#082f49' />
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}
