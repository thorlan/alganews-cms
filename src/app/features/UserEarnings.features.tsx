import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import useEarnings from "../../core/hooks/useEarnings";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {

    const { detailedUser, fetchDetailedUser } = useEarnings();

    useEffect(() => {
        fetchDetailedUser();
    }, [fetchDetailedUser])

    if (!detailedUser) {
        return <UserEarningsWrapper style={{ height: 123 }}>
            <Skeleton height={37} width={144} />
            <Skeleton height={37} width={144} />
            <Skeleton height={37} width={144} />
            <Skeleton height={37} width={144} />
        </UserEarningsWrapper>;
    }

    return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="ganhos no mês" value={detailedUser.metrics.monthlyEarnings} isCurrency />
        <ValueDescriptor color="primary" description="ganhos na semana" value={detailedUser.metrics.weeklyEarnings} isCurrency />
        <ValueDescriptor color="default" description="ganhos de sempre" value={detailedUser.metrics.lifetimeEarnings} isCurrency />
        <ValueDescriptor color="default" description="total de palavras" value={detailedUser.metrics.lifetimeWords} />
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
`;