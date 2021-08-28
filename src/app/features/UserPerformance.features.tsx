import { useEffect, useState } from "react";
import TransformEditorMonthlyEarningsIntoChartJs from "../../core/utils/TransformEditorMonthlyEarningsIntoChartJs";
import MetricService from "../../sdk/services/Metric.service";
import Chart, { ChartProps } from "../components/Chart/Chart";

export default function UserPerformance() {

    const [data, setData] = useState<ChartProps['data']>();

    useEffect(() => {
        MetricService.getEditorMonthlyEarnings().then(TransformEditorMonthlyEarningsIntoChartJs).then(setData);
    }, [])

    if(!data){
        return null;
    }

    return <Chart
        title={'Média de performance nos últimos 12 meses'}
        data={data}
    />
}
