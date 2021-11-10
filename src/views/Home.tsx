import AppButton from "../components/AppButton"
import AppHeader from '../components/AppHeader'
import HomeTitle from '../components/HomeTitle'
import HomeParagraph from '../components/HomeParagraph'
import SubscribeCTA from '../components/SubscribeCTA'
import HomeSection from '../components/HomeSection'
import HomeFaqAccordion from '../components/HomeFaqAccordion'
import AppFooter from '../components/AppFooter'
import HomeBackground from '../components/HomeBackground'
import { Link } from "react-router-dom"

import { IFooterLink } from "../components/AppFooter"
const footerLinks: IFooterLink[] = [
    {
        label: 'FAQ',
        link: '#'
    },
    {
        label: 'Investor Relations',
        link: '#'
    },
    {
        label: 'Privacy',
        link: '#'
    },
    {
        label: 'Speed Test',
        link: '#'
    },
    {
        label: 'Help Center',
        link: '#'
    },
    {
        label: 'Jobs',
        link: '#'
    },
    {
        label: 'Cookie Preferences',
        link: '#'
    },
    {
        label: 'Legal Notices',
        link: '#'
    },
    {
        label: 'Account',
        link: '#'
    },
    {
        label: 'Ways to Watch',
        link: '#'
    },
    {
        label: 'Corporate Information',
        link: '#'
    },
    {
        label: 'Only on Netflix',
        link: '#'
    },
    {
        label: 'Media Center',
        link: '#'
    },
    {
        label: 'Terms of Use',
        link: '#'
    },
    {
        label: 'Contact Us',
        link: '#'
    }
]


const Home = () => {
    return (
        <>

            <section className='h-screen w-full relative flex flex-col px-2'>
                <AppHeader>
                    <Link to='/log-in'><AppButton rounded>Sign In</AppButton></Link>
                </AppHeader>
                {/* <div>
                    <img src="../../assets/netflix-splash.jpeg" alt="Netflix splash" className='absolute inset-0 h-full w-full  object-cover' />
                    <div className='absolute inset-0 from-black via-transparent to-black h-full w-full bg-gradient-to-b'></div>
                </div> */}
                <HomeBackground />

                {/* <header className='relative z-10 py-8 md:px-10 flex justify-between items-center'>
                    <img src="../../assets/netflix_logo.png" alt="Netflix Logo" className='h-10 w-auto' />
                </header> */}
                <div className='w-full md:w-1/2 text-center relative mx-auto my-auto'>

                    <HomeTitle className='w-full md:w-3/4 mx-auto'>
                        Unlimited movies, TV shows, and more.
                    </HomeTitle>
                    <HomeParagraph className='my-6'>Watch anywhere. Cancel anytime.</HomeParagraph>
                    <SubscribeCTA />

                </div>

            </section>
            <HomeSection twoColumns>
                <div><HomeTitle>Enjoy on your TV.</HomeTitle>
                    <HomeParagraph className='mt-5'>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </HomeParagraph>

                </div>
                <div className='h-full w-full'>
                    <img src="../../assets/netflix_section_img.png" alt="" className='h-full w-auto block object-contain z-20' />
                </div>
            </HomeSection>
            <HomeSection twoColumns>
                <div className='h-full w-full'>
                    <img src="../../assets/netflix_section_img.png" alt="" className='h-full w-auto block object-contain z-20' />
                </div>
                <div><HomeTitle>Download your shows to watch offline.
                </HomeTitle>
                    <HomeParagraph className='mt-5'>
                        Save your favorites easily and always have something to watch.
                    </HomeParagraph>

                </div>

            </HomeSection>
            <HomeSection twoColumns>
                <div><HomeTitle>Watch everywhere.</HomeTitle>
                    <HomeParagraph className='mt-5'>
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                    </HomeParagraph>

                </div>
                <div className='h-full w-full'>
                    <img src="../../assets/netflix_section_img.png" alt="" className='h-full w-auto block object-contain z-20' />
                </div>
            </HomeSection>
            <HomeSection twoColumns>
                <div className='h-full w-full'>
                    <img src="../../assets/netflix_section_img.png" alt="" className='h-full w-auto block object-contain z-20' />
                </div>
                <div><HomeTitle>Create profiles for kids.

                </HomeTitle>
                    <HomeParagraph className='mt-5'>
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </HomeParagraph>

                </div>

            </HomeSection>
            <HomeSection>
                <HomeTitle className="text-center">Frequently Asked Questions</HomeTitle>
                <div className='grid grid-cols-1 gap-4 mt-10'>
                    <HomeFaqAccordion title='What is Netflix?'>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                    </HomeFaqAccordion>
                    <HomeFaqAccordion title='How much does Netflix cost?'>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
                    </HomeFaqAccordion>
                    <HomeFaqAccordion title='Where can I watch?'>
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </HomeFaqAccordion>
                    <HomeFaqAccordion title='How do I cancel?'>
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </HomeFaqAccordion>
                    <HomeFaqAccordion title='What can I watch on Netflix?'>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.                        </HomeFaqAccordion>
                    <HomeFaqAccordion title='Is Netflix good for kids?'>
                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                       </HomeFaqAccordion>
                    <SubscribeCTA className='mt-5 md:w-2/3 text-center mx-auto' />
                </div>
            </HomeSection>
            <AppFooter footerLinks={footerLinks} className='text-gray-500 bg-black ' />
        </>
    )
}

export default Home