import { useSelector } from "react-redux";
import { Descriptions } from 'antd';    

const IncomeStatement = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { incomeStatementHistory } = stock;

    const incomeStatement = incomeStatementHistory.incomeStatementHistory.map(incomeStatement => ({
        endDate: incomeStatement.endDate.fmt,
        totalRevenue: incomeStatement.totalRevenue.fmt,
        costOfRevenue: incomeStatement.costOfRevenue.fmt,
        grossProfit: incomeStatement.grossProfit.fmt,
        totalOperatingExpenses: incomeStatement.totalOperatingExpenses.fmt,
        operatingIncome: incomeStatement.operatingIncome.fmt,
        netIncome: incomeStatement.netIncome.fmt
    }));

    const displayIncomeStatementValue = (value, dollarSign) => {
        return incomeStatement.map(item => {
            return <Descriptions.Item>
                {dollarSign ? `$${item[value]}` : item[value]}
                </Descriptions.Item>
        });
    }

    return (
        <>
            <Descriptions bordered column={5}>
                <Descriptions.Item label="Date" />
                { displayIncomeStatementValue('endDate', false)}
          
                <Descriptions.Item label="Total Revenues"/>
                { displayIncomeStatementValue('totalRevenue', true)}

                <Descriptions.Item label="Cost of Revenue"/>
                { displayIncomeStatementValue('costOfRevenue', true)}

                <Descriptions.Item label="Gross Profits"/>
                { displayIncomeStatementValue('grossProfit', true)}

                <Descriptions.Item label="Total Operating Expenses"/>
                { displayIncomeStatementValue('totalOperatingExpenses', true)}

                <Descriptions.Item label="Operating Income"/>
                { displayIncomeStatementValue('operatingIncome', true)}

                <Descriptions.Item label="Net Income"/>
                { displayIncomeStatementValue('netIncome', true)}
            </Descriptions> 
        </>
    )
}

export default IncomeStatement;