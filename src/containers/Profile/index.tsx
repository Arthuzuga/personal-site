import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import { ScrollToTopOnMount, SectionsContainer } from "react-fullpage";
import "../../antd.css";
import { ResumeSection } from "../ResumeSection";
import { TimelineSection } from "../TimelineSection";
import { TreeSection } from "../TreeSection";

interface IProps {
	routerStore: RouterStore;
}

const options = {
	activeClass: "active", // the class that is appended to the sections links
	anchors: ["Resume", "Timeline", "TreeOfSkills"], // the anchors for each sections
	arrowNavigation: true, // use arrow keys
	className: "SectionContainer", // the class name for the section container
	delay: 1000, // the scroll animation speed
	navigation: true, // use dots navigatio
	scrollBar: false, // use the browser default scrollbar
	sectionClassName: "Section", // the section class name
	sectionPaddingTop: "0", // the section top padding
	sectionPaddingBottom: "0", // the section bottom padding
	verticalAlign: true, // align the content of each section vertical
};

@inject("routerStore")
@observer
export class Profile extends React.Component<IProps, {}> {
	// private goTo = (path: string) => {
	// 	this.props.routerStore.push(path);
	// };

	public render() {
		return (
			<div>
				<ScrollToTopOnMount />
				<SectionsContainer {...options}>
					<ResumeSection />
					<TimelineSection />
					<TreeSection />
					{/* <Section style={{ height: "100vh" }}>
						<div className={s.sectionDivLight}>
							Page 4: Carousel of Projects
						</div>
					</Section> */}
				</SectionsContainer>
			</div>
		);
	}
}
