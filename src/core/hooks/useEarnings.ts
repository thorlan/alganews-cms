import { User, UserService } from "danielbonifacio-sdk";
import { useCallback, useState } from "react";
import useAuth from "./useAuth";

export default function useEarnings() {

    const [detailedUser, setDetailedUser] = useState<User.Detailed>();
    const { user } = useAuth();

    const fetchDetailedUser = useCallback(async function () {
        UserService.getDetailedUser(Number(user?.id))
            .then(setDetailedUser);
    }, [user?.id]);

    return {
        detailedUser,
        fetchDetailedUser,
    }
}