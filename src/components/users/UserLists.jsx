import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext.jsx";
import Spinner from "../layout/Spinner.jsx";

function UserLists() {
	const { users, loading } = useContext(GithubContext);

	if (!loading) {
		return (
			<ul className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</ul>
		);
	} else {
		return <Spinner />;
	}
}

export default UserLists;
