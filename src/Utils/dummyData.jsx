import {GrBucket, GrGift, GrHome} from "react-icons/gr"
import { IoIosArrowRoundForward, IoIosPerson} from "react-icons/io"
import { FaArrowRightLong} from "react-icons/fa6"

const BlogDummy = [
  {
    imgSrc: "./B-frame1.png",
    id: 1,
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,
    title: "Journey through Time: My UnforgettableAdventures Around the World",
    content:
      "From the majestic peaks of snow-capped mountains to the sun-kissed beaches with turquoise waters, each photograph becomes a window to a new world, inviting you to explore and dream",
  },
  {
    imgSrc: "./B-frame2.png",
    id: 2,
    title:
      "Memoirs of a Dreamer: Embracing Creativity and Artistry in Everyday Life",
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,

    content:
      "Through the ups and downs, I've found solace in expressing myself through art, and I can't wait to hear your thoughts and connect with kindred spirits. Let's celebrate the magic of imagination together! 🌈 💫",
  },
  {
    imgSrc: "./B-frame3.png",
    id: 3,
    title: "Life Lessons and Growth: Reflections on Overcoming Challenges",
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,

    content:
      "In this safe space, let's embrace vulnerability and wisdom as we connect through shared experiences. May my stories inspire you on your own path of growth and self-discovery. 🌿🌼",
  },
  {
    imgSrc: "./B-frame4.png",
    id: 4,
    // more: <IoIosArrowRoundForward />,
    more: <FaArrowRightLong />,

    title:
      "Embracing Wellness: My Journey to Mindfulness, Meditation, Yoga, and Self-Care",
    content:
      "In this soul-nourishing post, I open my heart to inspire and uplift each one of you on your path to well-being. Through mindfulness practices, yoga serenity, and self-care rituals, I've found profound peace and balance.",
  },
];
   export default BlogDummy;

   export const NavObject = [
    {id:"1", name:"Home", icon:<GrHome/>, to:""},
    {id:"2", name:"Profile", icon:<IoIosPerson/>, to:""},
    {id:"3", name:"Explore", icon:<GrGift/>, to:""},
    {id:"4", name:"Your Posts", icon:<GrBucket/>, to:""},
   ]