'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalsStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	body {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section, header, footer {
		padding: 1rem 10%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (max-width: 768px) { padding: 1rem 5%; }
	}

	section { min-height: 100vh; }

	a {
		transition: .4s;
		font-weight: 700;
	}

	main, header, footer {
		max-width: 1920px;
		width: 100%;
	}
`;
