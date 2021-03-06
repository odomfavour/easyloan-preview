import React from "react";

import { Container, Col, Row, Stack } from "react-bootstrap";
import { LoanCalculator } from "../components/index";
import PageWrapper from "../layouts/page_wrapper/PageWrapper";

const LoanCalculatorPage = () => {
  const prevPath = localStorage.getItem("prevPath");

	return (
		<>
			<style type="text/css">
				{`
          .content-wrapper{
            background-color: #fff;
          }

          .title{
            line-height: 3rem;
          }

          hr{
            color: var(--purple);
            background-color: var(--purple);
            height: 2px;
            width: 9em;
            margin-top: 0;
          }

          .form-spacing .vstack{
            gap: 1rem;
          }

          @media (max-width: 575.98px) {
            .title{
              font-size: 1.5rem;
              line-height: 2rem;
            }

            hr{
              width: 10em;
            }

            .form-spacing .vstack{
              gap: 2rem;
            }
          }
        `}
			</style>
			<PageWrapper>
				<Stack className="content-wrapper pt-4">
					<Container className="">
						<Row className="d-flex ">
							<Col className="w-5">
								<h1 className="heading-font title">Loan Calculator</h1>
								<hr />
							</Col>
						</Row>
					</Container>
					<LoanCalculator styles="bg-light-gray px-0 form-spacing" prevPath={prevPath} />
				</Stack>
			</PageWrapper>
		</>
	);
};

export default LoanCalculatorPage;
