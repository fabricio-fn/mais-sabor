import styled from "styled-components";

export const StyleTestimonials = styled.section`
	flex-direction: column;
	gap: 4rem;
	width: 100%;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.secondary};
	overflow: hidden;
	text-align: center;

	.title { flex-direction: column; }

	.slick-slider { width: 100%; }

	button { display: none !important; }

	.item {
		cursor: move;
		gap: 3rem;
		display: flex !important;
		flex-direction: column;

		.content {
			gap: 3rem;
			flex-direction: column;
			width: 700px;

			@media (max-width: 768px) { width: 100%; }
		}

		.user {
			gap: 1rem;
			flex-direction: column;

			img { border-radius: 1rem; }
		}
	}
`