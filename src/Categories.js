import Category from './Category';

function Categories(props) {
  const {categories} = props;
  return (
    <ul class="categories">
      { categories.map(item => <Category name={item.name} image={item.image} ads={item.ads} />) }
    </ul>
  );
}

Categories.defaultProps = {
  categories: [
    {
      name: "Vehicles",
      image: "https://assets.jiji.ng/art/attributes/categories/vehicles.png",
      ads: "164,230 ads"
    },
    {
      name: "Property",
      image: "https://assets.jiji.ng/art/attributes/categories/real-estate.png",
      ads: "70,984 ads"
    },
    {
      name: "Mobile Phones & Tablets",
      image: "https://assets.jiji.ng/art/attributes/categories/mobile.png",
      ads: "75,870 ads"
    },
    {
      name: "Furniture & Appliances",
      image: "https://assets.jiji.ng/art/attributes/categories/home.png",
      ads: "380,354 ads"
    },
    {
      name: "Electronics",
      image: "https://assets.jiji.ng/art/attributes/categories/electronics.png",
      ads: "205,605 ads"
    },
    {
      name: "Fashion",
      image: "https://assets.jiji.ng/art/attributes/categories/fashion.png",
      ads: "214,250"
    },
    {
      name: "Health & Beauty",
      image: "https://assets.jiji.ng/art/attributes/categories/beauty.png",
      ads: "154,210"
    },
    {
      name: "Sports, Arts & Outdoors",
      image: "https://assets.jiji.ng/art/attributes/categories/hobbies.png",
      ads: "193,235"
    },
    {
      name: "Services",
      image: "https://assets.jiji.ng/art/attributes/categories/services.png",
      ads: "51,233"
    },
    {
      name: "Jobs",
      image: "https://assets.jiji.ng/art/attributes/categories/jobs.png",
      ads: "1,756"
    },
    {
      name: "Agriculture & Food",
      image: "https://assets.jiji.ng/art/attributes/categories/agriculture.png",
      ads: "153,240"
    },
    {
      name: "Babies & Kids",
      image: "https://assets.jiji.ng/art/attributes/categories/babies.png",
      ads: "120,113"
    }
  ]
}

export default Categories;
