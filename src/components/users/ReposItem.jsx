import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function ReposItem({ repo }) {
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo;
	return (
		<div className="mb-2 rounded-md card">
			<div className="card-body">
				<h3 className="text-xl mb-2 font-semibold">
					<a href={html_url} target="_blank" rel="noreferrer">
						<FaLink className="inline mr-1" />
						{name}
					</a>
				</h3>
				<p>{description}</p>
				<div>
					<div className="mr-2 rounded-xl badge badge-info badge-lg">
						<FaEye className="mr-2" />
						{watchers_count}
					</div>
					<div className="mr-2 rounded-xl badge badge-success badge-lg">
						<FaStar className="mr-2" />
						{stargazers_count}
					</div>
					<div className="mr-2 rounded-xl badge badge-error badge-lg">
						<FaInfo className="mr-2" />
						{open_issues}
					</div>
					<div className="mr-2 rounded-xl badge badge-warning badge-lg">
						<FaUtensils className="mr-2" />
						{forks}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReposItem;
