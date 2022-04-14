import { Metric, MetricService } from "danielbonifacio-sdk";
import { useCallback, useState } from "react";

export default function useTopTags() {

    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);

    const fetchTopTags = useCallback(async function () {
        MetricService.getTop3Tags().then(setTopTags);
    }, []);

    return {
        fetchTopTags,
        topTags
    }
}