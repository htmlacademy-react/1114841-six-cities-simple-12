import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks/index';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/const';
import LoginPage from '../login-page/login-page';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getOffers } from '../../store/offers-data/offers-data.selectors';
import { getCity } from '../../store/sorting-process/sorting-process.selectors';

function MainPage(): JSX.Element {

  const activeTab = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentOffers = offers.filter((offer) => offer.city.name === activeTab);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);


  const offer = currentOffers.find((currentOffer) => currentOffer.city.name === activeTab);
  const city = offer?.city;

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (<LoginPage />);
  }

  if (city === undefined) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  return (
    <div className="page page--gray page--main">

      <Header />


      <main className={`page__main page__main--index ${currentOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs activeTab={activeTab} />

        <div className="cities">

          <OfferList city={city} currentOffers={currentOffers} activeTab={activeTab} />

        </div>
      </main>
    </div>
  );
}

export default MainPage;
