import Image from 'next/image'
import './blogCard.css'
import Link from 'next/link'

export default function BlogCard({
    title,
    desc,
    img,
}: {
    title: string;
    desc: string;
    img: string;
}) {
    return (
        <div className='blog-card'>
            <div className='image-side'>
                <Image className='imge' src={img} alt='blogCard' fill objectFit='cover' />
            </div>
            <div className='text-side'>
                <h1 className='title'>{title}</h1>
                <p className='desc'>{desc} ... 
                    <Link href={"#"} >Read more</Link></p>
            </div>
        </div>
    )
}
