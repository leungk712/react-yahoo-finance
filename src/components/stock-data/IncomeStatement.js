import { useSelector } from "react-redux";
import { Descriptions } from 'antd';
import parseISO from 'date-fns/parseISO'
import { format } from 'date-fns';    

const IncomeStatement = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { incomeStatementHistory } = stock;

    const incomeStatement = incomeStatementHistory.incomeStatementHistory.map(incomeStatement => ({
        endDate: format(parseISO(incomeStatement.endDate.fmt), 'MM/dd/yyyy'),
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

    const incomeStatementData = [
        {
            label: "Date",
            value: "endDate",
            dollarSign: false
        },
        {
            label: "Total Revenues",
            value: "totalRevenue",
            dollarSign: true
        },
        {
            label: "Cost of Revenue",
            value: "costOfRevenue",
            dollarSign: true
        },
        {
            label: "Gross Profits",
            value: "grossProfit",
            dollarSign: true
        },
        {
            label: "Total Operating Expenses",
            value: "totalOperatingExpenses",
            dollarSign: true
        },
        {
            label: "Operating Income",
            value: "operatingIncome",
            dollarSign: true
        },
        {
            label: "Net Income",
            value: "netIncome",
            dollarSign: true
        },
    ];

    return (
        <>
            <Descriptions bordered column={5}>
                {
                    incomeStatementData.map(incomeStatement => { 
                        return (
                            <>
                                <Descriptions.Item label={incomeStatement.label} />
                                { displayIncomeStatementValue(incomeStatement.value, incomeStatement.dollarSign) }
                            </>
                        )
                    })
                }
            </Descriptions> 
        </>
    )
}

export default IncomeStatement;