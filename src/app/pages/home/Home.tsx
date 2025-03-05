import background from '../../../assets/images/bg-photo.jpg';
import Card from '../../components/Card';
import drrs from '../../../assets/images/Wavy_Tech-27_Single-11.jpg'
import offboarding from '../../../assets/images/4180157.jpg'
import fitmentor from '../../../assets/images/5971185.jpg'
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Clifford Danes Yaun</title>
            </Helmet>
            
            <div
                className="hero h-screen justify-start"
                style={{
                    backgroundImage: `url(${background})`,
                }}>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md md:max-w-lg text-black">
                        <code className="mb-5 font-bold uppercase">clifford danes yaun</code>
                        <p className="mb-5 text-5xl">
                            Computer Engineer. Software Developer.
                        </p>
                    </div>
                </div>
            </div>

            {/* about me section */}
            <div className="px-4 py-10">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-8">
                        <h2 className='text-4xl'>
                            I specialize in developing and maintaining applications and also provide mentorship to computer science students on their projects. In addition to my professional work, I have a strong interest in hardware development and enjoy exploring projects with Arduino and Raspberry Pi.
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-2"></div>
                    <div className="col-span-12 md:col-span-2 shadow rounded-md px-4 py-2 h-min">
                        <span className='font-bold'>Capabilities</span>
                        <ul>
                            <code>
                                <li>PHP (Laravel)</li>
                                <li>ReactJS</li>
                                <li>C#</li>
                                <li>Web Development</li>
                                <li>Windows Service Development</li>
                            </code>
                        </ul>
                    </div>
                </div>
                
            </div>

            {/* projects section */}
            <div className='px-4 py-10'>
                <h1 className='mb-3'><code>Projects</code></h1>
                <div className='grid grid-cols-12 gap-4'>
                    <div className="col-span-12 md:col-span-4">
                        <Card
                            title="Disaster Response and Recovery System"
                            body="A disaster response, recovery and monitoring system for emergency units and citizens."
                            picture={drrs}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Card
                            title="FitMentor"
                            body="Gym membership and monitoring app for gym personnels and clients."
                            picture={fitmentor}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Card
                            title="Employee Offboarding"
                            body="For human resources offboarding processes."
                            picture={offboarding}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home