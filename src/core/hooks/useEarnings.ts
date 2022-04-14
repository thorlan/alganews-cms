import { User, UserService } from "danielbonifacio-sdk";
import { useCallback, useState } from "react";

export default function useEarnings() {

    const [user, setUser] = useState<User.Detailed>();

    const fetchDetailedUser = useCallback(async function () {
        UserService.getDetailedUser(7).then(setUser);
    }, []);

    return {
        user,
        fetchDetailedUser,
    }
}