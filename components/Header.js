import React from 'react';
import Link from 'next/link';

import styled from '@emotion/styled';

const Header = () => (
	<HeaderStyled>
		<ul>
			<li>
				<Link href="/">
					<a>
						<img src={'/static/assets/logo.svg'} alt="Q-CTRL" />
					</a>
				</Link>
			</li>
		</ul>
	</HeaderStyled>
);

const HeaderStyled = styled.div`
	background-color: #fff;
	margin: 0;
	height: 60px;
	ul {
		display: flex;
		justify-content: space-between;

		align-content: center;
		height: 60px;
	}
	li {
		display: flex;
		padding: 6px 20px;
	}
`;

export default Header;
