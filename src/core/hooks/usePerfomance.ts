import {  MetricService } from "orlandini-sdk";
import { useCallback, useState } from "react";
import { ChartProps } from "../../app/components/Chart/Chart";
import TransformEditorMonthlyEarningsIntoChartJs from "../utils/TransformEditorMonthlyEarningsIntoChartJs";

export default function usePerfomance(){

    const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();
    const [error, setError] = useState<Error>();

    const fetchEditorMonthlyEarnings = useCallback(async function (){
        MetricService
        .getEditorMonthlyEarnings()
        .then(TransformEditorMonthlyEarningsIntoChartJs)
        .then(setEditorEarnings)
        .catch(error => {
            setError(new Error(error.message));
        });
    },[]);

    return {
        fetchEditorMonthlyEarnings,
        editorEarnings,
        error
    }
}