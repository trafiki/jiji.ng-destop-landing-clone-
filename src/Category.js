function Category(props) {
  const {name, image, ads} = props;
  console.log(ads)
  return (

    <li>
    <img src={image} alt="" />
    <div class="cat-info">
      {name}
      <div>{ads}</div>
    </div>
    <span><svg id="arrow-right" viewBox="0 0 176.2 309.1"> <path fill="inherit" d="M174,149.3L26.9,2.2c-2.9-2.9-7.7-2.9-10.6,0L2.2,16.3C0.8,17.7,0,19.7,0,21.6s0.8,3.9,2.2,5.3l127.6,127.6L2.2,282.2
	c-1.4,1.4-2.2,3.3-2.2,5.3s0.8,3.9,2.2,5.3l14.1,14.1c1.5,1.5,3.4,2.2,5.3,2.2s3.8-0.7,5.3-2.2L174,159.9
	C176.9,156.9,176.9,152.2,174,149.3z"></path> </svg></span>
    </li>
  );
}

export default Category;
