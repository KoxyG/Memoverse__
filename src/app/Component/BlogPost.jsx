function BlogPost(props) {
  const style = `sm:flex items-center gap-4 py-[40px] + ${props.classname}`
  return (
    <div >
      {/* first blog */}
      <div className={style}>
        <img alt="" className='w-[249px] h-[240px]' src={props.imgSrc} />
        <div>
          <h3 className="text-orange-300 text-xl font-semibold leading-7">
            {props.title}
          </h3>
          <p className="text-justify py-[12px] text-white text-opacity-80 text-base font-normal leading-snug">
            {props.content}
          </p>
          <p className="text-orange-300 flex items-center gap-3 text-base font-normal leading-snug">
            Read More
          {props.more}
          </p>
        </div>
      </div>
    </div>
  );
}



export default BlogPost;