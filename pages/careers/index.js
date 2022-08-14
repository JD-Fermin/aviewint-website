import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import FavoriteInfluencer from '../../components/sections/translator/FavoriteInfluencer';
import PerksAview from '../../components/sections/translator/PerksAview';
import MakeImpact from '../../components/sections/translator/MakeImpact';
import CompanyCulture from '../../components/sections/translator/CompanyCulture';
import Blobs from '../../components/UI/Blobs';

const Careers = () => {
  return (
    <>
      <Header curPage="Careers" />
      <FavoriteInfluencer />
      <PerksAview />
      <MakeImpact />
      <CompanyCulture />
      <Footer />
      <Blobs />
    </>
  );
};

export default Careers;