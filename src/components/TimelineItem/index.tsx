import * as React from "react";
import { Timeline, Collapse } from "antd";
import "../../antd.css";
import { timelineSteps, ITimeline } from "../../utils/infos/timelineData";
const s = require("./style.scss");

interface IProps {
	item: ITimeline;
	index: number;
}

const Panel = Collapse.Panel;

export class TimelineItem extends React.Component<IProps, {}> {
	public render() {
		const { item, index } = this.props;
		return (
			<Timeline.Item
				color={timelineSteps.length - 1 === index ? "blue" : "green"}
				style={{ width: "100%" }}
				key={index}
			>
				<Collapse
					bordered={false}
					accordion
					style={{ background: "rgb(236,239,241)" }}
				>
					<Panel
						header={item.companyName}
						key={(1 + index).toString()}
						showArrow={true}
					>
						<div className={s.collapseDiv}>
							<h3>Sobre a {item.companyName}:</h3>
							{item.about.map((about, aboutIndex) => (
								<span key={aboutIndex}>{about}</span>
							))}
							<h3>Descrição das atividades:</h3>
							{item.jobDescription.map((description, descriptionIndex) => (
								<span key={descriptionIndex}>{description}</span>
							))}
							<ul>
								{item.job.map((job, jobIndex) => (
									<li key={jobIndex}>{job}</li>
								))}
							</ul>
						</div>
					</Panel>
				</Collapse>
			</Timeline.Item>
		);
	}
}
