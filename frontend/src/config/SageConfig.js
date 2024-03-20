import ImgDefault from "../assets/imgs/sages/default-agent-2.webp";
import ImgPo from "../assets/imgs/sages/po.png";
import ImgStephen from "../assets/imgs/sages/stephen_chow.png";

export const sageList = [
    {
        sageName:"AI",
        sageFullName:"AI",
        country:"AI director (default).",
        movies:"",
        description:"",
        image:ImgDefault,  
    },
    {
        sageName:"Stephen",
        sageFullName:"Stephen Chow",
        country:"Chinese",
        movies:"Kung Fu Hustle(2004), Shaolin Soccer(2001), The Final Combat(1999), ",
        description:`Stephen Chow, is a prominent figure in the Hong Kong film industry, renowned for his work as an actor, director, and producer. He is best known for his unique style of mo lei tau comedy—a form of slapstick humor.`,
        image:ImgStephen, 
    },
    {
        sageName:"Po",
        sageFullName:"Kung Fu Panda  (fictional character)",
        country:"Chinese",
        movies:"Kong Fu Pandas",
        description:`Po is a lovable, clumsy panda who becomes the Dragon Warrior in the animated film series "Kung Fu Panda." Raised in the Valley of Peace, Po's journey transforms him from a noodle shop worker into a skilled kung fu master. His positive attitude and determination make him an endearing character.`,
        image:ImgPo,  
    },
]


export const defaultSage = sageList[0];