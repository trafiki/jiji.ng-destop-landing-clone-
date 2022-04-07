import Ad from "./Ad";

function TrendingAds(props) {
  const { ads } = props;
  return (
    <ul class="trending-ads">
      {ads.map((ad) => (
        <Ad {...ad} />
      ))}
    </ul>
  );
}

TrendingAds.defaultProps = {
  ads: [
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Corolla 2007 S Gray",
      price: "₦ 1,330,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77336601_MzAwLTIyNS1jZDNiNDYxZjBl.jpg",
      numberOfImages: "2",
    },
    {
      name: "Hyundai Accent 2013 SE Silver",
      price: "₦ 2,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77399499_MzAwLTQwMC02OTg0MjMwY2Y3.jpg",
      numberOfImages: "8",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77398880_MzAwLTM4MC0yNmVhZThlYTdi.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77311893_MzAwLTQwMC0yNTQ0OWUzOTJl.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77349830_MzAwLTQwMC0xZTgwMjZlZjM2.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77310141_MzAwLTQwMC1iMDhkOGE0YjQ0.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77351629_MzAwLTQwMC04ZmVlMzM3MDMx.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77411833_MzAwLTQwMC05NjA3YzRjNzEz.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77364392_MzAwLTQwMC1mZTdlNzA4MmVh.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/67492355_MzAwLTQwMC1jMzc4MTU1MTll.jpg",
      numberOfImages: "9",
    },
    {
      name: "Furnished Mini Flat in Alimosho for Rent",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77305044_MzAwLTIyNS1iNjYzYmRiMGZk.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Corolla 2007 S Gray",
      price: "₦ 1,330,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77336601_MzAwLTIyNS1jZDNiNDYxZjBl.jpg",
      numberOfImages: "2",
    },
    {
      name: "Hyundai Accent 2013 SE Silver",
      price: "₦ 2,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77399499_MzAwLTQwMC02OTg0MjMwY2Y3.jpg",
      numberOfImages: "8",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77398880_MzAwLTM4MC0yNmVhZThlYTdi.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://bidfax.info/uploads/posts/2021-05/21/toyota-camry-ce-2008-4t4be46k78r028765-img1.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77311893_MzAwLTQwMC0yNTQ0OWUzOTJl.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77349830_MzAwLTQwMC0xZTgwMjZlZjM2.jpg",
      numberOfImages: "9",
    },
    {
      name: "Toyota Camry 2008 2.4 LE Silver",
      price: "₦ 1,400,000",
      image:
        "https://pictures-nigeria.jijistatic.com/77310141_MzAwLTQwMC1iMDhkOGE0YjQ0.jpg",
      numberOfImages: "9",
    },
  ],
};

export default TrendingAds;
