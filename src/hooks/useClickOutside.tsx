import { useCallback, useEffect, useState } from 'react';

const useClickOutside = (ref: any) => {
	const [isClickedOutSide, setIsClickedOutSide] = useState(false);

	const handleClickOutside = useCallback(
		(event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsClickedOutSide(true);
			}
		},
		[ref],
	);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, handleClickOutside]);

	return { isClickedOutSide, setIsClickedOutSide };
};

export default useClickOutside;
