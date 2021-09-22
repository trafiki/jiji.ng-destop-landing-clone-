import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import SliderSection from './SliderSection';
import TrendingAds from './TrendingAds';


function App() {
  return (
    <main class="main">
      <Header />
      <section class="page-content container">

          <SideBar />
          <div class="main-content">
            <SliderSection />
            <TrendingAds />

      </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
