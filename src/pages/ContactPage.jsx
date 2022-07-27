import React, { useContext, useEffect } from "react";
import PageWrapper from "../layouts/page_wrapper/PageWrapper";
import { Col, Container, Row, Stack, Image } from "react-bootstrap";
import { useDesktop } from "../pages/DesktopContext";
import { ContactContext } from "../pages/ContactContext";
import { Contact } from "../components/index";
import map from "../assets/map2.svg";

const ContactPage = () => {
	const isDesktop = useDesktop();
	const { setIsDashboard } = useContext(ContactContext);
	useEffect(() => {
		setIsDashboard(false);
	}, []);

	return (
		<>
			<style type="text/css">
				{`
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

          @media (max-width: 991.98px) {
            .title{
              font-size: 1.5rem;
              line-height: 2rem;
            }

            hr{
              width: 10em;
            }
          }

          @media (max-width: 575.98px) {
            .title{
              font-size: 1.5rem;
              line-height: 2rem;
            }

            hr{
              width: 10em;
            }
          }
        `}
			</style>
			<PageWrapper>
				<Stack className="contact-page px-2 ">
					{!isDesktop && (
						<Container className="">
							<Row className="d-flex ">
								<Col className="w-5">
									<h1 className="heading-font title fw-bold">Get in Touch With Us</h1>
									<hr />
								</Col>
							</Row>
						</Container>
					)}
					<Container className=" px-lg-4 ">
						<Row>
							<Col className=" px-4">
								<h2 className="heading fw-bold ">Get in Touch With Us</h2>
							</Col>
						</Row>
						<Row>
							<Col className="">
								<Contact />
							</Col>
						</Row>
					</Container>
				</Stack>
				<div className="d-md-block d-lg-none mb-3 mt-4">
					<Image src={map} alt="map" className="img-fluid rounded" />
				</div>
			</PageWrapper>
		</>
	);
};

export default ContactPage;
