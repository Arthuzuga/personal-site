import * as React from "react";
import {  Divider } from "antd";
import {  Section } from "react-fullpage";
import "../../antd.css";
const s = require("./style.scss");

const photo = require("../../assets/img/personalPhoto.jpg");

export class ResumeSection extends React.Component<{}, {}> {
	public render() {
		return (
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
									positivo que ela pode causar na sociedade.
								</p>
								<p>
									Como desenvolvedor trabalho com soluções em JavaScript e
									sistemas em Java para aplicativos Android.
								</p>
								<p>
									Como Engenheiro de Automação trabalho com criação de sistema
									de controle e aquisição de dados (SCADA) para transformar
									informação em resolução de problemas.
								</p>
							</div>
						</div>
					</Section>
		);
	}
}
