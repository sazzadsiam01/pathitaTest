// import heroImg from "@/assets/images/heroImage.svg"
import heroImg from '../assests/images/heroImage.svg';

const Hero = () => {
    return (
        <div className="px-6 sm:px-20 flex flex-col-reverse md:flex-row items-center md:h-[calc(100vh-74px)]">
            <div className="text-gray w-full md:w-[55%]">
                <h1 className="text-left text-[28px] sm:text-5xl font-body">আপনার জানা ও জানানোর আগ্রহকে বিকশিত করুন</h1>
                <p className="mt-5 text-sm font-body">আপনার পড়া বই সম্পর্কে অভিজ্ঞতা শেয়ার করুন, অন্যদের অভিজ্ঞতা জানুন এবং আবিষ্কার করুন আপনার প্রিয় বই</p>
                <button className="bg-primary hover:bg-gray text-gray hover:text-white font-medium font-primary px-4 py-2 rounded-3xl mt-5 transition-all duration-300">শুরু করুন</button>
            </div>
            <div className='w-full md:w-[45%]'>
                <img className='w-full h-full' src={heroImg} alt="hero-image" />
            </div>
        </div>
    )
}
export default Hero
