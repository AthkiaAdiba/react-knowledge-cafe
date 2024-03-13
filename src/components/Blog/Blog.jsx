import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog);
    const { id, title, cover, time, author_name, author_img, posted_date, hashtags } = blog;
    return (
        <div className='space-y-5 mb-20'>
            <img className='mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img className='w-16 h-16 rounded-full bg-cover' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-2xl'>{time} min read</span>
                    <button onClick={ () => handleAddToBookmark(blog)} className='ml-2 text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
            className='text-purple-800 font-bold underline' 
            onClick={() => handleMarkAsRead(id, time)}
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;