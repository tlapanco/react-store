import avatar from '../assets/avatar.png';
import Reveal from './Reveal'

export const Hero = () => {
    return (
        <Reveal>
        <section className="w-full mt-4 pt-3 flex flex-col items-center justify-center gap-4 select-none">
            <img src={avatar} width={200} height="auto" className='drop-shadow-profile'/>
            <p className='bg-white px-3 pt-3 border border-s-purple rounded-md shadow-xl shadow-s-purple text-xl text-center line-clamp-3 max-w-[250px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid unde inventore. </p>
            
        </section>
        </Reveal>
    )
}