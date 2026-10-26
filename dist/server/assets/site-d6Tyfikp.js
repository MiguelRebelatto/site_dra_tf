import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Prefixa caminhos absolutos com `import.meta.env.BASE_URL` (ex.: GitHub Pages em `/site_dra_tf/`). */
function withBasePath(path) {
	const base = "/site_dra_tf/";
	if (!path.startsWith("/")) return `${base}${path}`;
	if (path === "/") return base;
	return `${base.replace(/\/$/, "")}${path}`;
}
//#endregion
//#region src/assets/artigo-capa.jpg
var artigo_capa_default = "/site_dra_tf/assets/artigo-capa-BKK4x9W2.jpg";
//#endregion
//#region src/lib/site.ts
var SITE = {
	doctor: "Dra. Tatiana Fonseca Santiago",
	specialty: "Fertilidade Restaurativa do Casal",
	om: "OM 56762",
	city: "Lisboa",
	whatsapp: "351900000000",
	email: "contacto@exemplo.pt",
	instagram: "https://instagram.com/",
	beholdFeedId: ""
};
var COURSES = [{
	slug: "fertilidade-natural",
	title: "Fertilidade Natural do Casal",
	desc: "Compreender o ciclo, os sinais do corpo e os fatores que influenciam a fertilidade de ambos.",
	url: "https://hotmart.com/"
}, {
	slug: "preparar-gravidez",
	title: "Preparar a Gravidez",
	desc: "Um guia para o casal cuidar da saúde antes da conceção, com base em evidência científica.",
	url: "https://hotmart.com/"
}];
var ARTICLES = [
	{
		slug: "o-que-e-fertilidade-restaurativa",
		title: "O que é a fertilidade restaurativa?",
		excerpt: "Uma abordagem que procura identificar e tratar as causas da infertilidade no casal.",
		category: "Fertilidade",
		cover: artigo_capa_default,
		published: "2026-10-10",
		reviewed: "2026-10-14",
		body: [
			"A fertilidade restaurativa é uma abordagem médica que procura compreender por que razão a gravidez não acontece, investigando as causas subjacentes no homem e na mulher.",
			"Em vez de olhar apenas para o resultado, a avaliação considera o ciclo menstrual, a saúde hormonal, o estilo de vida e a saúde do parceiro.",
			"Cada casal é único, e o plano de cuidado deve ser definido em consulta médica."
		],
		references: ["Exemplo de referência científica — a substituir pela autora."]
	},
	{
		slug: "a-fertilidade-e-do-casal",
		title: "A fertilidade é sempre do casal",
		excerpt: "Porque é que a avaliação deve incluir ambos os parceiros desde o início.",
		category: "Casal",
		cover: artigo_capa_default,
		published: "2026-10-05",
		reviewed: "2026-10-05",
		body: ["Em cerca de metade dos casos, há fatores masculinos envolvidos. Avaliar ambos desde o início poupa tempo e preocupação.", "A consulta em casal permite um plano partilhado e mais completo."],
		references: ["Exemplo de referência científica — a substituir pela autora."]
	},
	{
		slug: "conhecer-o-ciclo-menstrual",
		title: "Conhecer o ciclo menstrual",
		excerpt: "O ciclo é um sinal vital. Saiba o que observar.",
		category: "Ciclo",
		cover: artigo_capa_default,
		published: "2026-09-28",
		reviewed: "2026-09-28",
		body: ["O ciclo menstrual dá informação valiosa sobre a saúde hormonal da mulher.", "Registar o ciclo ajuda a médica a perceber padrões e a orientar a investigação."],
		references: ["Exemplo de referência científica — a substituir pela autora."]
	}
];
var sortedArticles = () => [...ARTICLES].sort((a, b) => b.published.localeCompare(a.published));
var fmtDate = (d) => new Date(d).toLocaleDateString("pt-PT", {
	day: "numeric",
	month: "long",
	year: "numeric"
});
//#endregion
export { sortedArticles as a, fmtDate as i, COURSES as n, cn as o, SITE as r, withBasePath as s, ARTICLES as t };
