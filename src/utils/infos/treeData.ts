export interface ISkill {
	skillName: string;
	areas: string[];
	technologies: string[];
	iconType: string;
}

export const skillsArray: ISkill[] = [
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
