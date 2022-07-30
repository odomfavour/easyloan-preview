import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useAppContext } from "../context/context";

const LaonHistoryTable = () => {
	const { user } = useAppContext();
	const [isLoanApplied, setIsLoanApplied] = useState(false);

	useEffect(() => {
		if (user.loanApplication) {
			setIsLoanApplied(true);
		}
	}, [user.loanApplication]);

	return (
		<>
			{isLoanApplied ? (
				<Table responsive>
					<tbody>
						{user.loanApplication.map(
							(loan, index) =>
								loan.orderID && (
									<tr key={index}>
										<td>{loan.name}</td>
										<td>Jul 2022 - Aug 2022 </td>
										<td>{`N${new Intl.NumberFormat().format(loan.totalLoanAmt)}`}</td>
										<td>Open</td>
									</tr>
								),
						)}
					</tbody>
				</Table>
			) : (
				<div>No loans applied for...</div>
			)}
		</>
	);
};

export default LaonHistoryTable;
