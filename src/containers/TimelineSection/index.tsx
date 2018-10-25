import * as React from "react";
import { Timeline } from "antd";
import { Section } from "react-fullpage";
import "../../antd.css";
import { timelineSteps } from "../../utils/infos/timelineData";
import { TimelineItem } from "../../components/TimelineItem";
const s = require("./style.scss");

export class TimelineSection extends React.Component<{}, {}> {
	public render() {
		return (
			<Section style={{ height: "100vh" }}>
				<div className={s.sectionDivLight}>
					<h1>Histórico Profissional</h1>
					<h2>Conheça um pouco da minha trajetória.</h2>
					<div className={s.timelineBox}>
						<Timeline>
							{timelineSteps.map((item, index) => (
								<TimelineItem item={item} index={index} key={index}/>
							))}
						</Timeline>
					</div>
				</div>
			</Section>
		);
	}
}
