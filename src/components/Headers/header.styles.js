import styled from "styled-components";

export const Mobile = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

export const NavMenu = styled.div`
	display: flex;
	padding: 10px 40px;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
	overflow-y: hidden;

	gap: 2rem;
`;

export const Container = styled.div`
	background: ${(props) => props.color};
	color: white;
`;

export const Cspan = styled.div`
	width: 100px;
	cursor: pointer;
	gap: 0;
	font-size: 14px;
	justify-content: center;
	display: block;
`;

export const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 32px;
	gap: 1px;

	width: 110px;
	height: 46px;

	/* primary color/600 */
	border: ${(props) => (props.primary ? 0 : "1px solid #AE2BFF")};
	background: ${(props) => (props.primary ? "#AE2BFF" : "white")};
	color: ${(props) => (props.primary ? "white" : "#AE2BFF")};
	border-radius: 8px;
`;

export const SecondButton = styled(Button)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 32px;
	gap: 1px;

	width: 100%;
	height: 51px;
	border: ${(props) => (props.primary ? 0 : "1px solid white")};
	background: ${(props) => (props.primary ? "white" : "#AE2BFF")};
	color: ${(props) => (props.primary ? "#AE2BFF" : "white")};
	border-radius: 8px;
`;
export const Desktop = styled.header`
	display: flex;
	justify-content: space-between;
	max-width: 1400px;
	margin-inline: auto;
	padding: 40px;
	align-items: center;
	div {
		display: flex;
		gap: 30px;
		justify-content: space-between;
		align-items: center;
		a {
			font-family: "Gilmer Bold";
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			/* identical to box height, or 150% */

			letter-spacing: 0.015em;

			/* Text color/600 */

			color: #151313;
		}
		.active {
			color: #ae2bff;
		}
	}
	section {
		display: flex;
		gap: 10px;
		justify-content: space-between;
		align-items: center;
	}
`;
