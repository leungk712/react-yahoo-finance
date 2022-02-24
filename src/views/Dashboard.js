import { Tabs } from 'antd';
import Price from '../components/stock-data/Price';

const { TabPane } = Tabs;

const Dashboard = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Price" key="1">
      <Price />
    </TabPane>
    <TabPane tab="Income Statement" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Balance Sheets" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default Dashboard;