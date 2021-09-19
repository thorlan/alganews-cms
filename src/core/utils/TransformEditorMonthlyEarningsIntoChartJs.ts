import { ChartProps } from "../../app/components/Chart/Chart";
import { Metric } from "orlandini-sdk";
import { format } from 'date-fns'
import {ptBR} from 'date-fns/locale'

function TransformEditorMonthlyEarningsIntoChartJs(editorEarning: Metric.EditorMonthlyEarnings): ChartProps['data'] {

    const labels: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];

    editorEarning.forEach(earning => {
        const formatedMonth = format(new Date(earning.yearMonth), 'MMMM', { locale: ptBR } );
        labels.push(formatedMonth);
        data1.push(earning.totalAmount);
        data2.push(earning.totalPlatformAverageAmount);
    })

    return {
        labels,
        datasets: [
            {
                label: 'Performance pessoal',
                data: data1,
                fill: true,
                backgroundColor: '#0099FF',
                borderColor: '#0099FF',
                borderWidth: 0.5,
               // yAxisID: 'cashflow',
            },
            {
                label: 'Performance média do time',
                data: data2,
                fill: true,
                backgroundColor: '#274060',
                borderColor: '#274060',
                borderWidth: 0.5,
               // yAxisID: 'cashflow',
            }
        ]
    }
}

export default TransformEditorMonthlyEarningsIntoChartJs;