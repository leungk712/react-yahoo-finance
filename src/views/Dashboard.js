import { Tabs } from 'antd';
import BalanceSheet from '../components/stock-data/BalanceSheet';
import Price from '../components/stock-data/Price';
import IncomeStatement from '../components/stock-data/IncomeStatement';

const { TabPane } = Tabs;

const Dashboard = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Price" key="1">
      <Price />
    </TabPane>
    <TabPane tab="Income Statement" key="2">
      <IncomeStatement />
    </TabPane>
    <TabPane tab="Balance Sheets" key="3">
      <BalanceSheet />
    </TabPane>
  </Tabs>
);

export default Dashboard;