import picture from '../../../assets/images/pfp.jpg'
import {Helmet} from 'react-helmet'

const Contact = () => {
    return (
        <div className="h-full grid grid-cols-12">
            {/* For title */}
            <Helmet>
                <title>Clifford Danes Yaun | Contact</title>
            </Helmet>

            <div className="col-span-12 p-4 flex flex-col items-center justify-center gap-8">
                <div className="avatar flex items-center justify-center">
                    <div className="w-1/4 rounded-full">
                        <img src={picture} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <code className="uppercase text-2xl">Clifford danes yaun</code>
                    <code className="text-center uppercase text-xl opacity-50">Software Developer</code>
                </div>
                <div className="w-full px-4 py-2 flex flex-col gap-4 justify-center items-center text-center">
                    <p className="text-2xl md:text-4xl">
                        Davao City, Philippines <br />
                        09396594909 <br />
                        <a href="mailto:clifforddanesyaun@gmail.com" className="text-black hover:text-black hover:underline text-md">
                            clifforddanesyaun@gmail.com
                        </a>
                    </p>
                </div>
                <div className="">
                    <code className="flex justify-between gap-8 uppercase">
                        <a href="https://www.facebook.com/Dadadanesss/" 
                            target="_blank" 
                            className="text-black hover:text-black hover:underline"
                        >
                            facebook
                        </a>
                        <a href="https://www.linkedin.com/in/clifford-danes-yaun-6b0172250" 
                            target="_blank" 
                            className="text-black hover:text-black hover:underline"
                        >
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/daneseyy?igsh=ZWp0eW1vbXBmMmV5" 
                            target="_blank" 
                            className="text-black hover:text-black hover:underline"
                        >
                            instagram
                        </a>
                    </code>
                </div>
            </div>
        </div>
    )
}

export default Contact