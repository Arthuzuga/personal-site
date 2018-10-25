import * as React from "react";
import { inject, observer } from "mobx-react";
import { Collapse, Timeline, Tree, Icon, Divider } from "antd";
import { RouterStore } from "mobx-react-router";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";
import "antd/dist/antd.css";
const s = require("./style.scss");
// const photo = require("../../assets/img/personalPhoto.jpg");

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

const Panel = Collapse.Panel;
const TreeNode = Tree.TreeNode;
const skillsArray = [
	{
		skillName: "Engenharia",
		areas: ["Desenho Técnico", "Projeto Elétrico", "Projeto Luminotécnico"],
		technologies: ["AutoCAD", "DiaLux", "SketchUp"],
		iconType: "rocket",
	},
	{
		skillName: "Automação",
		areas: ["Automação Residencial", "SCADA", "Robótica"],
		technologies: ["ModBus", "Elipse E3", "SCADABR", "Matlab"],
		iconType: "tool",
	},
	{
		skillName: "Eletrônica",
		areas: [
			"Eletrônica Analógica",
			"Eletrônica Digital",
			"Eletrônica de Potência",
			"Motores",
			"Microcontroladores",
			"Microcomputadores",
		],
		technologies: ["Proteus", "Eagle", "Arduino", "Raspberrry PI"],
		iconType: "bulb",
	},
	{
		skillName: "Desenvolvimento",
		areas: ["Front-End", "Backend", "Mobile"],
		technologies: [
			"HTML & CSS",
			"JavaScript",
			"ReactJs",
			"MobX",
			"TypeScript",
			"NodeJS",
			"SQL",
			"PHP",
			"Java",
			"C#",
			"Python",
		],
		iconType: "laptop",
	},
	{
		skillName: "Gestão",
		areas: ["Empreendedorismo", "Gestão de Projetos"],
		technologies: ["Empretec", "PMI", "PMBOK®", "SCRUM", "MSProject"],
		iconType: "team",
	},
];
const photo = require("../../assets/img/personalPhoto.jpg");

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
					<Section style={{ height: "100vh" }}>
						<div className={s.sectionResume}>
							<div className={s.resumeBox}>
								<div className={s.photoDiv}>
									<img src={photo} className={s.photo} alt="Avatar" />
								</div>
								<div className={s.resumeHeader}>
									<h1>João Tavares</h1>
									<h2>Engenheiro de Controle e Automação</h2>
									<h2>Desenvolvedor Front-End</h2>
									<h3>Salvador - Bahia</h3>
								</div>
								<Divider style={{ background: "#000" }} />
								<p>Oi, eu sou o João! </p>
								<p>
									Sou um entusiasta por tecnologia que gosta de ver o impacto
									positivo que ela pode causar no conhecimento da sociedade.{" "}
								</p>
								<p>
									Como programador trabalho com soluções em JavaScript, bem como
									sistemas em Java para Android's apps.
								</p>
								<p>
									Como Engenheiro de Automação trabalho com solução de sistema
									de controle e aquisição de dados (SCADA) para transformar
									dados em resolução de problemas.
								</p>
							</div>
						</div>
					</Section>
					<Section style={{ height: "100vh" }}>
						<div className={s.sectionDivLight}>
							<h1>Histórico Profissional</h1>
							<h2>Conheça um pouco da minha trajetória.</h2>
							<div className={s.timelineBox}>
								<Timeline>
									<Timeline.Item color="green" style={{ width: "100%" }}>
										<Collapse
											bordered={false}
											accordion
											style={{ background: "rgb(236,239,241)" }}
										>
											<Panel
												header="Construtora Santa Helena"
												key="1"
												showArrow={true}
											>
												<div className={s.collapseDiv}>
													<h3>Sobre a Construtora Santa Helena:</h3>
													<span>
														Fundada em 1975, uma das mais tradicionais empresas
														do setor de edificações da Bahia. Desde o início, a
														empresa elabora projetos aliados as novas
														tecnologias apresentando eficiência nos processos,
														na segurança, no acabamento e no cumprimento dos
														prazos contratados.
													</span>
													<h3>Descrição das atividades:</h3>
													<span>
														Trabalhei como parte da equipe de engenheiros e
														técnicos eletricistas em projetos de instalações
														elétricas na Rede Bahia. Executando atividades de
														desenhista em CAD, pude participar dos projetos de
														comissionamento e de implementação de subestações de
														energia, de projetos luminotécnicos e de
														dimensionamento de circuitos elétricos.
													</span>
													<ul>
														<li>Estagiário Rede Bahia - Nov/2013 - Jun/2014</li>
													</ul>
												</div>
											</Panel>
										</Collapse>
									</Timeline.Item>
									<Timeline.Item color="green" style={{ width: "100%" }}>
										<Collapse
											bordered={false}
											accordion
											style={{ background: "rgb(236,239,241)" }}
										>
											<Panel
												header="OPTIMUS Jr - Controle e Automação"
												key="1"
												showArrow={true}
											>
												<div className={s.collapseDiv}>
													<h3>Sobre a OPTIMUS JR. – CONTROLE E AUTOMAÇÃO:</h3>
													<span>
														Fundada em 2010, a OPTIMUS Jr é uma empresa sem fins
														lucrativos que tem o intuito de difundir a vivência
														empresarial ao estudante de graduação através de
														experiências práticas que vão além do que se é
														aprendido em sala de aula.
													</span>
													<span>
														Focando-se no desenvolvimento pessoal e professional
														dos estudantes, membros voluntários, a empresa
														desenvolve projetos na área de controle e automação
														com custos mais acessíveis à sociedade.
													</span>
													<h3>Descrição das atividades:</h3>
													<span>
														Como assessor de projetos, trabalhei do
														desenvolvimento de projetos relacionados a
														prototipagem de um robô para captação de energia
														solar a fim de energizar uma residência. Tive a
														oportunidade de aprender conceitos de eletrônica e
														metodologia de gerenciamento de projetos atravês do
														PMBOK®.
													</span>
													<span>
														Como director da área de projetos, trabalhei na
														implementação do projeto de monitoramento e controle
														do nível de água dos reservatórios da escolar
														politécnica da UFBA. Neste projeto pude trabalhar
														com gerenciamento de projetos através de conceitos
														como análise de caminho crítico (CPM), pelo
														gerenciamento de prazos utilizando o gráfico de
														Gantt.
													</span>
												</div>
											</Panel>
										</Collapse>
									</Timeline.Item>
									<Timeline.Item color="green" style={{ width: "100%" }}>
										<Collapse
											bordered={false}
											accordion
											style={{ background: "rgb(236,239,241)" }}
										>
											<Panel header="Rede Bahia" key="1">
												<div className={s.collapseDiv}>
													<h3>Sobre Rede Bahia:</h3>
													<span>
														Fundada em 1985, a Rede Bahia, atualmente, é uma
														afilhada da Rede Globo de Televisão. A Rede Bahia é
														um conjunto de empresas composta por 6 emissoras de
														televisão, dentre elas a TV Bahia localizada em
														Salvador. Com a sua principal atividade, a
														transmissão de notícias via televisão. E é a maior
														empresa de comunicação do Norte/Nordeste do país.
													</span>
													<h3>Descrição das Atividades e Cargos:</h3>
													<span>
														Como estagiário na gerência de Elétrica e
														Climatização, desenvolvi um sistema de supervisão da
														energia elétrica a fim de monitorar o comportamento
														da alimentação dos circuitos da empresa.
													</span>
													<span>
														Como estagiário na coordenadoria de Projetos,
														trabalhei com metodologias de gerenciamento de
														projetos baseadas no PMBOK®. Nelas utilizei
														conhecimentos como análise de caminho crítico,
														análise PERT e gráfico de Pareto para custos e
														indicadores de projetos baseados em valor agregado,
														para gerir juntamente com os supervisores a
														construção da infraestrutura da Nova Central Técnica
														da emissora e demais projetos executivos.
													</span>
													<ul>
														<li>Estagiário Rede Bahia - Out/2015 - Out/2017</li>
													</ul>
												</div>
											</Panel>
										</Collapse>
									</Timeline.Item>
									<Timeline.Item color="blue" style={{ width: "100%" }}>
										<Collapse
											bordered={false}
											accordion
											style={{ background: "rgb(236,239,241)" }}
										>
											<Panel header="Cubos Tecnologia" key="1">
												<div className={s.collapseDiv}>
													<h3>Sobre a Cubos Tecnologia:</h3>
													<span>
														Fundada em 2013, a Cubos Tecnologia é uma Startup
														Baiana que possui como objetivo, transformar a
														sociedade com a tecnologia. E trabalha com o
														desenvolvimento de sistemas web e aplicativos
														nativos para smartphones (iOS e Android) com o foco
														no usuário.
													</span>
													<h3>Descrição das Atividades e Cargos:</h3>
													<ul>
														<li>
															Estagiário de Front-End da Cubos - Jan/2018 até
															Jul/2018
														</li>
														<li>
															Desenvolvedor Front-End da Cubos - Ago/2018 até o
															momento
														</li>
													</ul>
												</div>
											</Panel>
										</Collapse>
									</Timeline.Item>
								</Timeline>
							</div>
						</div>
					</Section>
					<Section style={{ height: "100vh" }}>
						<div className={s.sectionAreas}>
							<h1>Áreas de Conhecimento</h1>
							<h2>Veja um pouco dos conceitos com os quais já trabalhei.</h2>
							<div className={s.treeBox}>
								{skillsArray.map((skill, index) => (
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
