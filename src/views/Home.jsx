import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import Searchbar from '../components/Searchbar';
import Dashboard from './Dashboard';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
    const stock = useSelector(state => state.stocks.value);
    let displayedView;

    if (stock.loadingMessage === 'retrieving stock info...' ) {
      displayedView = <Skeleton /> 
    } else if (stock.loadingMessage === "successfully retrieved stock info..." && Object.keys(stock).length) {
      displayedView = <Dashboard />
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>Sider</Sider>
        <Layout>
          <Header />
          <Content style={{ margin: '50px' }}>
            <Searchbar />
            { displayedView }
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
}

export default Home; 