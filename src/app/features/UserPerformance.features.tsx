import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import withBoundary from "../../core/hoc/withBoundary";
import TransformEditorMonthlyEarningsIntoChartJs from "../../core/utils/TransformEditorMonthlyEarningsIntoChartJs";
import MetricService from "../../sdk/services/Metric.service";
import Chart, { ChartProps } from "../components/Chart/Chart";

function UserPerformance() {

    const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();
    const [error, setError] = useState<Error>();

    useEffect(() => {
        MetricService
            .getEditorMonthlyEarnings()
            .then(TransformEditorMonthlyEarningsIntoChartJs)
            .then(setEditorEarnings)
            .catch(error => {
                setError(new Error(error.message));
            });
    }, [])

    if(error){
        throw error;
    }

    if(!editorEarnings){
        return <Skeleton height={227}/>;
    }

    return <Chart
        title={'Média de performance nos últimos 12 meses'}
        data={editorEarnings}
    />
}

export default withBoundary(UserPerformance, 'perfomance')