import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import useAuth from "../../core/hooks/useAuth";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {

    const { user } = useAuth();

    if (!user) {
        return <UserEarningsWrapper style={{ height: 123 }}>
            <Skeleton height={37} width={144} />
            <Skeleton height={37} width={144} />
            <Skeleton height={37} width={144} />
            <Skeleton height={37} width={144} />
        </UserEarningsWrapper>;
    }

    return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="ganhos no mês" value={user.metrics.monthlyEarnings} isCurrency />
        <ValueDescriptor color="primary" description="ganhos na semana" data-testid={"weeklyEarnings"} value={user.metrics.weeklyEarnings} isCurrency />
        <ValueDescriptor color="default" description="ganhos de sempre" value={user.metrics.lifetimeEarnings} isCurrency />
        <ValueDescriptor color="default" description="total de palavras" value={user.metrics.lifetimeWords} />
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
`;