export interface ITimeline {
	companyName: string;
	about: string[];
	job: string[];
	jobDescription: string[];
}

export const timelineSteps: ITimeline[] = [
	{
		companyName: "Construtora Santa Helena",
		about: [
			"Fundada em 1975, uma das mais tradicionais empresas do setor de edificações da Bahia. Desde o início, a empresa elabora projetos aliados as novas tecnologias apresentando eficiência nos processos, na segurança, no acabamento e no cumprimento dos prazos contratados.",
		],
		jobDescription: [
			"Trabalhei como parte da equipe de engenheiros e técnicos eletricistas em projetos de instalações elétricas na Rede Bahia. Executando atividades de desenhista em CAD, pude participar dos projetos de comissionamento e de implementação de subestações de energia, de projetos luminotécnicos e de dimensionamento de circuitos elétricos.",
		],
		job: ["Estagiário Construtora Santa Helena   - Nov/2013 - Jun/2014"],
	},
	{
		companyName: "OPTIMUS Jr - Controle e Automação",
		about: [
			"Fundada em 2010, a OPTIMUS Jr é uma empresa sem fins lucrativos que tem o intuito de difundir a vivência empresarial ao estudante de graduação através de experiências práticas que vão além do que se é aprendido em sala de aula.",
			"Focando-se no desenvolvimento pessoal e professional dos estudantes, membros voluntários, a empresa desenvolve projetos na área de controle e automação com custos mais acessíveis à sociedade.",
		],
		jobDescription: [
			"Como assessor de projetos, trabalhei do desenvolvimento de projetos relacionados a prototipagem de um robô para captação de energia solar a fim de energizar uma residência. Tive a oportunidade de aprender conceitos de eletrônica e metodologia de gerenciamento de projetos atravês do PMBOK®.",
			"Como director da área de projetos, trabalhei na implementação do projeto de monitoramento e controle do nível de água dos reservatórios da escolar politécnica da UFBA. Neste projeto pude trabalhar com gerenciamento de projetos através de conceitos como análise de caminho crítico (CPM), pelo gerenciamento de prazos utilizando o gráfico de Gantt.",
		],
		job: [
			"Assessor de Projetos - Mar/2012 - Dez/2012",
			"Diretor de Projetos - Jan/2013 - Dez/2013",
		],
	},
	{
		companyName: "Rede Bahia",
		about: [
			"Fundada em 1985, a Rede Bahia, atualmente, é uma afilhada da Rede Globo de Televisão. A Rede Bahia é um conjunto de empresas composta por 6 emissoras de televisão, dentre elas a TV Bahia localizada em Salvador.",
			"Com a sua principal atividade, a transmissão de notícias via televisão. E é a maior empresa de comunicação do Norte/Nordeste do país.",
		],
		jobDescription: [
			"Como estagiário na gerência de Elétrica e Climatização, desenvolvi um sistema de supervisão da energia elétrica a fim de monitorar o comportamento da alimentação dos circuitos da empresa.",
			"Como estagiário na coordenadoria de Projetos, trabalhei com metodologias de gerenciamento de projetos baseadas no PMBOK®. Nelas utilizei conhecimentos como análise de caminho crítico, análise PERT e gráfico de Pareto para custos e indicadores de projetos baseados em valor agregado, para gerir juntamente com os supervisores a construção da infraestrutura da Nova Central Técnica da emissora e demais projetos executivos.",
		],
		job: ["stagiário Rede Bahia   - Out/2015 - Out/2017"],
	},
	{
		companyName: "Cubos Tecnologia",
		about: [
			"Fundada em 2013, a Cubos Tecnologia é uma Startup Baiana que possui como objetivo, transformar a sociedade com a tecnologia. E trabalha com o desenvolvimento de sistemas web e aplicativos nativos para smartphones (iOS e Android) com o foco no usuário.",
		],
		jobDescription: ["Desenvolvimento de websites e paíneis administrativos"],
		job: [
			"Estagiário de Front-End da Cubos - Jan/2018 até Jul/2018",
			"Desenvolvedor Front-End da Cubos - Ago/2018 até o momento",
		],
	},
];
