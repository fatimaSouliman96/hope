import Image from 'next/image'
import './resentPostsCard.css'
import Link from 'next/link'

export default function ResentPostsCard(
  {  title,
    desc,
    img}
    :
    {
        title: string,
        desc: string,
        img: string
    }
) {
  return (
    <div className='resentPostsCard'>
        <div className="top-side">
            <div className="image">
                <Image className='imgpost' src={img} alt={title} width={86} height={79} objectFit='cover' />
            </div>
            <h1 className='title'>
                {title}
            </h1>
        </div>
        <div className="desc">
            {desc} ...
            <Link href={""} > read more</Link>

        </div>
    </div>
  )
}
