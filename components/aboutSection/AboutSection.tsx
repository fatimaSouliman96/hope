import Image from 'next/image'
import './aboutSection.css'

export default function AboutSection(
    {
        title,
        descrabtion,
        shapes,
        links,
        aboutPge,
        reverse
    }:
        {
            title: string,
            descrabtion: string,
            shapes?: boolean,
            links?:string[],
            aboutPge?: string,
            reverse?: string,
        }) {
    return (
        <div className={`about ${aboutPge} ${reverse}` }>
            <div className='text-side'>
                <h2 className='section-title'>
                    {title}
                </h2>
                <p>
                    {descrabtion}
                </p>
            </div>
            <div className="image-side">
                {
                    shapes ?
                        <>
                            <div className='dotes' >
                                <Image src={'/dotes.svg'} alt='dotes' fill objectFit='cover' />
                            </div>
                            <div className='Rectangle' >
                                <Image src={'/Rectangle-about.svg'} alt='Rectangle' fill objectFit='cover' />
                            </div>
                            <div className='image' >
                                <Image src={'/aboutHome.png'} alt='aboutHome' fill objectFit='cover' />
                            </div>
                        </>
                        :
                        <div className='images' >
                            {links && links.map((ele, index) => {
                                return <div  className={ele.slice(1,5)} style={{position:"relative"}} key={index}><Image src={ele} alt='aboutHome' fill objectFit='cover' /></div>
                            }) }
                        </div>
                }

            </div>
        </div>
    )
}
