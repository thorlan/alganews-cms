import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import withBoundary from "../../core/hoc/withBoundary";
import usePerfomance from "../../core/hooks/usePerfomance";
import Chart from "../components/Chart/Chart";

function UserPerformance() {

    const { fetchEditorMonthlyEarnings, editorEarnings, error} = usePerfomance();

    useEffect(() => {
        fetchEditorMonthlyEarnings();
    }, [fetchEditorMonthlyEarnings])

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