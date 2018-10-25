import * as React from "react";
import { Tree, Icon } from "antd";
import { Section } from "react-fullpage";
import "../../antd.css";
import { skillsArray } from "../../utils/infos/treeData";

const s = require("./style.scss");
const TreeNode = Tree.TreeNode;

export class TreeSection extends React.Component<{}, {}> {
	public render() {
		const skillArray = skillsArray;
		return (
			<Section style={{ height: "100vh" }}>
				<div className={s.sectionAreas}>
					<h1>Áreas de Conhecimento</h1>
					<h2>Veja um pouco dos conceitos com os quais já trabalhei.</h2>
					<div className={s.treeBox}>
						{skillArray.map((skill, index) => (
							<div className={s.tree}>
								<Tree showIcon key={index}>
									<TreeNode
										icon={<Icon type={skill.iconType!} />}
										title={skill.skillName}
										key="0-0"
									>
										<TreeNode title="Áreas" key="0-0-0">
											{skill.areas.map((area, areaIndex) => (
												<TreeNode title={area} key={"0-0-0-" + areaIndex} />
											))}
										</TreeNode>
										<TreeNode title="Ferramentas e Conceitos" key="0-0-1">
											{skill.technologies.map((tech, techIndex) => (
												<TreeNode title={tech} key={"0-0-1-" + techIndex} />
											))}
										</TreeNode>
									</TreeNode>
								</Tree>
							</div>
						))}
					</div>
				</div>
			</Section>
		);
	}
}
