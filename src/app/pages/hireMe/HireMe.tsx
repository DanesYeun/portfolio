import { ArrowDownCircleIcon } from "@heroicons/react/16/solid"
import CardSm from "../../components/CardSm"
import resume from '../../../assets/files/resume.pdf'
import { Helmet } from "react-helmet"

const HireMe = () => {
    return (
        <div className="grid grid-cols-12 gap-8">
            <Helmet>
                <title>Clifford Danes Yaun | Hire Me</title>
            </Helmet>
            <div className="col-span-12">
                <br />
            </div>
            <div className="col-span-12 grid grid-cols-12 px-4 md:px-10 py-2 md:py-8 flex flex-col gap-2">
                <code className="uppercase col-span-12">open for work</code>
                <span className="text-2xl w-full md:w-3/4 col-span-12">
                    I have been a software developer for almost 2 years. Each day growing more and more personally and professionally. I am open to new experiences and not afraid to take exta steps in in order to do what is needed to be done. I am confident with my skills and experience, that I can be a valuable asset to your company and team.
                </span>
                <br />
                <span className="text-2xl w-full md:w-1/2 col-span-12">
                    I am available for hire through linkedin or contact me through my &nbsp;
                    <code className="tooltip hover:cursor-pointer" data-tip="clifforddanesyaun@gmail.com">
                        email
                    </code>.
                </span>
                <br />
                <div className="col-span-12">
                    <code className="flex items-center justify-center md:justify-start gap-8 uppercase">
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
                        <a href={resume} target="_blank" className="btn btn-sm btn-outline btn-primary hover:text-white">
                            <ArrowDownCircleIcon className="size-5"/>
                            Download My Resume
                        </a>
                    </code>
                </div>
            </div>
            <div className="col-span-12 flex flex-col gap-4 px-4 md:px-10 py-2 md:py-8">
                <code className="">Skills and Services</code>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-3">
                        <CardSm 
                            title="Web Development" 
                            body="I can desgn and develop applications using Laravel and ReactJS. Can handle large scoped application with ease." 
                        />
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <CardSm 
                            title="Windows Service Development" 
                            body="I can develop windows service applications using C# .NET." 
                        />
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <CardSm 
                            title="Laravel" 
                            body="I develop web applications and API using laravel framework." 
                        />
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <CardSm 
                            title="C#" 
                            body="I have minimal experience on developing API with .NET framework. But confident in previous experience that I can handle developing medium scaled apps." 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireMe