import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Searchbar from '../components/Searchbar';
import Price from '../components/stock-data/Price';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>Sider</Sider>
        <Layout>
          <Header />
          <Content style={{ margin: '50px' }}>
              <Searchbar/>
              <Price />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
}

export default Home; 