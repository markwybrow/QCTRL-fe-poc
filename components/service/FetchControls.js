import { useEffect, useState } from 'react';

export const useFetchControls = api => {
	const [controls, setControls] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);

		fetch(api)
			.then(res => res.json())
			.then(json => {
				setLoading(false);
				if (json) {
					setControls(json);
				} else {
					setControls([]);
				}
			})
			.catch(err => {
				setError(err);
				setLoading(false);
			});
	}, [api]);
	return { controls, loading, error };
};
