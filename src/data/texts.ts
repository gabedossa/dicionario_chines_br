export interface ReadingLine {
  zh: string;
  py: string;
  pt: string;
}

export interface ReadingText {
  id: string;
  title: string;
  titleZh: string;
  level: number;
  lines: ReadingLine[];
}

export const TEXTS: ReadingText[] = [
  // ── HSK 1 ──────────────────────────────────────────────────────────────
  {
    id: 'hsk1-familia',
    title: 'Minha Família',
    titleZh: '我的家',
    level: 1,
    lines: [
      { zh: '你好！我叫小明。', py: 'Nǐ hǎo! Wǒ jiào Xiǎomíng.', pt: 'Olá! Meu nome é Xiǎomíng.' },
      { zh: '我是学生。我家有三口人。', py: 'Wǒ shì xuésheng. Wǒ jiā yǒu sān kǒu rén.', pt: 'Sou estudante. Minha família tem três pessoas.' },
      { zh: '爸爸、妈妈和我。', py: 'Bàba、māma hé wǒ.', pt: 'Papai, mamãe e eu.' },
      { zh: '我们家有一只猫。', py: 'Wǒmen jiā yǒu yī zhī māo.', pt: 'Nossa família tem um gato.' },
      { zh: '猫叫小白，我很喜欢它。', py: 'Māo jiào Xiǎobái, wǒ hěn xǐhuan tā.', pt: 'O gato se chama Xiǎobái. Eu gosto muito dele.' },
    ],
  },
  {
    id: 'hsk1-hoje',
    title: 'Hoje',
    titleZh: '今天',
    level: 1,
    lines: [
      { zh: '今天天气很好。', py: 'Jīntiān tiānqì hěn hǎo.', pt: 'O tempo hoje está muito bom.' },
      { zh: '我去学校。', py: 'Wǒ qù xuéxiào.', pt: 'Eu vou para a escola.' },
      { zh: '老师说：今天学习汉字。', py: 'Lǎoshī shuō: jīntiān xuéxí hànzì.', pt: 'O professor disse: hoje vamos estudar caracteres chineses.' },
      { zh: '我有一本书，书很好看。', py: 'Wǒ yǒu yī běn shū, shū hěn hǎokàn.', pt: 'Tenho um livro; o livro é muito interessante.' },
      { zh: '回家以后，我喝了一杯水。', py: 'Huí jiā yǐhòu, wǒ hē le yī bēi shuǐ.', pt: 'Depois de voltar para casa, tomei um copo d\'água.' },
    ],
  },

  // ── HSK 2 ──────────────────────────────────────────────────────────────
  {
    id: 'hsk2-supermercado',
    title: 'No Supermercado',
    titleZh: '去超市',
    level: 2,
    lines: [
      { zh: '妈妈说今天去超市买东西。', py: 'Māma shuō jīntiān qù chāoshì mǎi dōngxi.', pt: 'Mamãe disse que hoje vamos ao supermercado comprar coisas.' },
      { zh: '我们坐公共汽车去。', py: 'Wǒmen zuò gōnggòng qìchē qù.', pt: 'Vamos de ônibus.' },
      { zh: '超市里有很多水果和蔬菜。', py: 'Chāoshì lǐ yǒu hěn duō shuǐguǒ hé shūcài.', pt: 'No supermercado há muitas frutas e legumes.' },
      { zh: '我买了苹果和香蕉。', py: 'Wǒ mǎi le píngguǒ hé xiāngjiāo.', pt: 'Comprei maçãs e bananas.' },
      { zh: '妈妈说："你长大了，会买东西了。"', py: 'Māma shuō: "Nǐ zhǎngdà le, huì mǎi dōngxi le."', pt: 'Mamãe disse: "Você cresceu, já sabe comprar coisas."' },
    ],
  },
  {
    id: 'hsk2-tempo',
    title: 'O Tempo',
    titleZh: '天气',
    level: 2,
    lines: [
      { zh: '今天下雨了，天气有点儿冷。', py: 'Jīntiān xià yǔ le, tiānqì yǒudiǎnr lěng.', pt: 'Hoje está chovendo; o tempo está um pouco frio.' },
      { zh: '我穿了一件毛衣，还带了雨伞。', py: 'Wǒ chuān le yī jiàn máoyī, hái dài le yǔsǎn.', pt: 'Vesti um suéter e também trouxe um guarda-chuva.' },
      { zh: '我觉得冬天比夏天好，因为我不喜欢太热。', py: 'Wǒ juéde dōngtiān bǐ xiàtiān hǎo, yīnwèi wǒ bù xǐhuan tài rè.', pt: 'Acho o inverno melhor que o verão, porque não gosto de muito calor.' },
      { zh: '明天的天气会好一点吗？', py: 'Míngtiān de tiānqì huì hǎo yīdiǎn ma?', pt: 'O tempo de amanhã vai melhorar um pouco?' },
      { zh: '希望明天是晴天，我想出去玩。', py: 'Xīwàng míngtiān shì qíngtiān, wǒ xiǎng chūqù wán.', pt: 'Espero que amanhã seja dia de sol; quero sair para passear.' },
    ],
  },

  // ── HSK 3 ──────────────────────────────────────────────────────────────
  {
    id: 'hsk3-fim-de-semana',
    title: 'Planos para o Fim de Semana',
    titleZh: '周末计划',
    level: 3,
    lines: [
      { zh: '这个周末，我打算和朋友一起去爬山。', py: 'Zhège zhōumò, wǒ dǎsuàn hé péngyou yīqǐ qù páshān.', pt: 'Neste fim de semana, planejo ir escalar uma montanha com meus amigos.' },
      { zh: '我们早上七点出发，带了很多吃的东西。', py: 'Wǒmen zǎoshang qī diǎn chūfā, dài le hěn duō chī de dōngxi.', pt: 'Saímos às sete da manhã levando muita comida.' },
      { zh: '山上的风景非常美丽，空气也很新鲜。', py: 'Shān shàng de fēngjǐng fēicháng měilì, kōngqì yě hěn xīnxiān.', pt: 'A paisagem na montanha é muito bonita e o ar é fresco.' },
      { zh: '我们在山顶拍了很多照片。', py: 'Wǒmen zài shāndǐng pāi le hěn duō zhàopiàn.', pt: 'Tiramos muitas fotos no topo da montanha.' },
      { zh: '虽然很累，但是心情很好。', py: 'Suīrán hěn lèi, dànshì xīnqíng hěn hǎo.', pt: 'Embora muito cansados, estávamos de bom humor.' },
    ],
  },
  {
    id: 'hsk3-restaurante',
    title: 'No Restaurante',
    titleZh: '在餐厅',
    level: 3,
    lines: [
      { zh: '上个星期我和同事们去了一家新开的中国餐厅。', py: 'Shàng ge xīngqī wǒ hé tóngshìmen qù le yī jiā xīn kāi de Zhōngguó cāntīng.', pt: 'Na semana passada, fui com meus colegas a um restaurante chinês recém-aberto.' },
      { zh: '服务员很热情，菜单也很好看。', py: 'Fúwùyuán hěn rèqíng, càidān yě hěn hǎokàn.', pt: 'O garçom era muito atencioso e o cardápio também era bonito.' },
      { zh: '我们点了北京烤鸭、麻婆豆腐和几个小菜。', py: 'Wǒmen diǎn le Běijīng kǎoyā, mápó dòufu hé jǐ ge xiǎocài.', pt: 'Pedimos pato laqueado de Pequim, tofu mapo e alguns pratos pequenos.' },
      { zh: '菜的味道真的很好，比我以前吃过的都好吃。', py: 'Cài de wèidào zhēn de hěn hǎo, bǐ wǒ yǐqián chī guò de dōu hǎochī.', pt: 'O sabor da comida era realmente ótimo, melhor do que tudo que já comi antes.' },
      { zh: '下次我还要带家人来这里吃饭。', py: 'Xià cì wǒ hái yào dài jiārén lái zhèlǐ chīfàn.', pt: 'Da próxima vez quero trazer a família para comer aqui.' },
    ],
  },

  // ── HSK 4 ──────────────────────────────────────────────────────────────
  {
    id: 'hsk4-vida-urbana',
    title: 'Vida na Cidade',
    titleZh: '城市生活',
    level: 4,
    lines: [
      { zh: '北京是中国的首都，也是一座历史悠久的城市。', py: 'Běijīng shì Zhōngguó de shǒudū, yě shì yī zuò lìshǐ yōujiǔ de chéngshì.', pt: 'Pequim é a capital da China e também uma cidade com longa história.' },
      { zh: '这里有许多著名的历史遗迹，比如长城和故宫。', py: 'Zhèlǐ yǒu xǔduō zhùmíng de lìshǐ yíjī, bǐrú Chángchéng hé Gùgōng.', pt: 'Aqui há muitos locais históricos famosos, como a Grande Muralha e o Palácio Imperial.' },
      { zh: '随着经济的发展，北京变得越来越现代化。', py: 'Suízhe jīngjì de fāzhǎn, Běijīng biàn de yuè lái yuè xiàndàihuà.', pt: 'Com o desenvolvimento econômico, Pequim tornou-se cada vez mais moderna.' },
      { zh: '地铁网络非常发达，出行十分方便。', py: 'Dìtiě wǎngluò fēicháng fādá, chūxíng shífēn fāngbiàn.', pt: 'A rede de metrô é muito desenvolvida e o transporte é muito conveniente.' },
      { zh: '然而，城市化也带来了交通拥堵和环境污染等问题。', py: "Rán'ér, chéngshìhuà yě dài lái le jiāotōng yōngdǔ hé huánjìng wūrǎn děng wèntí.", pt: 'No entanto, a urbanização também trouxe problemas como congestionamentos e poluição ambiental.' },
    ],
  },
  {
    id: 'hsk4-educacao',
    title: 'Educação',
    titleZh: '教育',
    level: 4,
    lines: [
      { zh: '教育是社会发展的基础，对个人的未来也有重要影响。', py: 'Jiàoyù shì shèhuì fāzhǎn de jīchǔ, duì gèrén de wèilái yě yǒu zhòngyào yǐngxiǎng.', pt: 'A educação é a base do desenvolvimento da sociedade e também influencia muito o futuro de cada indivíduo.' },
      { zh: '在中国，学生从小就面临很大的学习压力。', py: 'Zài Zhōngguó, xuésheng cóng xiǎo jiù miànlín hěn dà de xuéxí yālì.', pt: 'Na China, os estudantes enfrentam grande pressão nos estudos desde pequenos.' },
      { zh: '高考是中国最重要的考试，决定学生能上哪所大学。', py: 'Gāokǎo shì Zhōngguó zuì zhòngyào de kǎoshì, juédìng xuésheng néng shàng nǎ suǒ dàxué.', pt: 'O gaokao é o exame mais importante da China, determinando em qual universidade o estudante pode ingressar.' },
      { zh: '近年来，很多家长也开始重视孩子的全面发展，而不只是成绩。', py: 'Jìn nián lái, hěn duō jiāzhǎng yě kāishǐ zhòngshì háizi de quánmiàn fāzhǎn, ér bù zhǐ shì chéngjì.', pt: 'Nos últimos anos, muitos pais começaram a valorizar o desenvolvimento integral das crianças, não apenas as notas.' },
      { zh: '素质教育与应试教育之间的平衡仍然是一个热门话题。', py: 'Sùzhì jiàoyù yǔ yìngshì jiàoyù zhī jiān de pínghéng réngrán shì yīgè rèmén huàtí.', pt: 'O equilíbrio entre educação integral e educação voltada para exames continua sendo um tema muito debatido.' },
    ],
  },

  // ── HSK 5 ──────────────────────────────────────────────────────────────
  {
    id: 'hsk5-tecnologia',
    title: 'Tecnologia e Vida',
    titleZh: '科技的影响',
    level: 5,
    lines: [
      { zh: '互联网的普及深刻改变了人们的生活方式。', py: 'Hùliánwǎng de pǔjí shēnkè gǎibiàn le rénmen de shēnghuó fāngshì.', pt: 'A popularização da internet mudou profundamente o modo de vida das pessoas.' },
      { zh: '人们可以随时随地获取信息、购物、工作和娱乐。', py: 'Rénmen kěyǐ suíshí suídì huòqǔ xìnxī、gòuwù、gōngzuò hé yúlè.', pt: 'As pessoas podem obter informações, fazer compras, trabalhar e se entreter a qualquer hora e em qualquer lugar.' },
      { zh: '人工智能的发展令人叹为观止，机器开始能够完成越来越复杂的任务。', py: 'Réngōng zhìnéng de fāzhǎn lìng rén tàn wéi guān zhǐ, jīqì kāishǐ nénggòu wánchéng yuè lái yuè fùzá de rènwù.', pt: 'O desenvolvimento da inteligência artificial é impressionante; as máquinas já são capazes de realizar tarefas cada vez mais complexas.' },
      { zh: '然而，技术进步也引发了人们对隐私安全和社会公平的担忧。', py: "Rán'ér, jìshù jìnbù yě yǐnfā le rénmen duì yǐnsī ānquán hé shèhuì gōngpíng de dānyōu.", pt: 'No entanto, o progresso tecnológico também gerou preocupações sobre privacidade e equidade social.' },
      { zh: '如何充分利用科技的优势，同时规避其潜在风险，是我们这个时代面临的重大课题。', py: 'Rúhé chōngfèn lìyòng kējì de yōushì, tóngshí guībì qí qiánzài fēngxiǎn, shì wǒmen zhège shídài miànlín de zhòngdà kètí.', pt: 'Como aproveitar plenamente as vantagens da tecnologia e ao mesmo tempo evitar seus riscos potenciais é um grande desafio desta era.' },
    ],
  },
  {
    id: 'hsk5-meio-ambiente',
    title: 'Meio Ambiente',
    titleZh: '环境保护',
    level: 5,
    lines: [
      { zh: '随着工业化进程的加速，全球气候变化已成为人类共同面临的严峻挑战。', py: 'Suízhe gōngyèhuà jìnchéng de jiāsù, quánqiú qìhòu biànhuà yǐ chéng wéi rénlèi gòngtóng miànlín de yánjùn tiǎozhàn.', pt: 'Com a aceleração da industrialização, a mudança climática global tornou-se um sério desafio enfrentado pela humanidade.' },
      { zh: '温室气体的大量排放导致全球气温持续上升，极端天气事件频繁发生。', py: 'Wēnshì qìtǐ de dàliàng páifàng dǎozhì quánqiú qìwēn chíxù shàngshēng, jíduān tiānqì shìjiàn pínfán fāshēng.', pt: 'A emissão massiva de gases de efeito estufa levou ao aumento contínuo da temperatura global e à ocorrência frequente de eventos climáticos extremos.' },
      { zh: '为了遏制气候变化，各国政府和国际组织制定了一系列减排目标和政策。', py: 'Wèi le èzhì qìhòu biànhuà, gè guó zhèngfǔ hé guójì zǔzhī zhìdìng le yī xìliè jiǎn pái mùbiāo hé zhèngcè.', pt: 'Para conter a mudança climática, governos e organizações internacionais estabeleceram uma série de metas e políticas de redução de emissões.' },
      { zh: '发展可再生能源、提高能源利用效率是实现可持续发展的关键途径。', py: 'Fāzhǎn kě zàishēng néngyuán、tígāo néngyuán lìyòng xiàolǜ shì shíxiàn kě chíxù fāzhǎn de guānjiàn tújìng.', pt: 'Desenvolver energias renováveis e melhorar a eficiência energética são caminhos essenciais para o desenvolvimento sustentável.' },
      { zh: '每个人在日常生活中的小小改变，也能为保护地球环境贡献一份力量。', py: 'Měi gè rén zài rìcháng shēnghuó zhōng de xiǎo xiǎo gǎibiàn, yě néng wèi bǎohù dìqiú huánjìng gòngxiàn yī fèn lìliàng.', pt: 'As pequenas mudanças de cada pessoa no dia a dia também podem contribuir para a proteção do meio ambiente terrestre.' },
    ],
  },

  // ── HSK 6 ──────────────────────────────────────────────────────────────
  {
    id: 'hsk6-cultura',
    title: 'Cultura e Identidade',
    titleZh: '文化与认同',
    level: 6,
    lines: [
      { zh: '在全球化浪潮的冲击下，各民族文化面临着前所未有的挑战与机遇。', py: 'Zài quánqiúhuà làngcháo de chōngjī xià, gè mínzú wénhuà miànlín zhe qián suǒ wèi yǒu de tiǎozhàn yǔ jīyù.', pt: 'Sob o impacto da globalização, as culturas dos povos enfrentam desafios e oportunidades sem precedentes.' },
      { zh: '一方面，文化交流促进了相互理解与合作；另一方面，强势文化的渗透也威胁着弱势文化的生存空间。', py: 'Yī fāngmiàn, wénhuà jiāoliú cùjìn le xiānghù lǐjiě yǔ hézuò; lìng yī fāngmiàn, qiángshì wénhuà de shèntòu yě wēixié zhe ruòshì wénhuà de shēngcún kōngjiān.', pt: 'Por um lado, o intercâmbio cultural promove a compreensão mútua e a cooperação; por outro, a penetração de culturas dominantes ameaça o espaço de sobrevivência das culturas minoritárias.' },
      { zh: '如何在保护本土文化的同时，积极融入世界文化多元体系，是当今社会亟待解决的问题。', py: 'Rúhé zài bǎohù běntǔ wénhuà de tóngshí, jījí róngrù shìjiè wénhuà duōyuán tǐxì, shì dāngjīn shèhuì jídài jiějué de wèntí.', pt: 'Como proteger a cultura local enquanto se integra ao sistema multicultural global é um problema urgente da sociedade atual.' },
      { zh: '文化认同的建构涉及历史记忆、语言、宗教、习俗等多个维度。', py: 'Wénhuà rèntóng de jiàngòu shèjí lìshǐ jìyì、yǔyán、zōngjiào、xísú děng duō gè wéidù.', pt: 'A construção da identidade cultural envolve múltiplas dimensões como memória histórica, língua, religião e costumes.' },
      { zh: '唯有在尊重差异的基础上寻求共识，才能实现真正意义上的文化共荣。', py: 'Wéi yǒu zài zūnzhòng chāyì de jīchǔ shàng xúnqiú gòngshí, cái néng shíxiàn zhēnzhèng yìyì shàng de wénhuà gòngróng.', pt: 'Somente buscando consenso com base no respeito às diferenças será possível alcançar uma verdadeira prosperidade cultural compartilhada.' },
    ],
  },
  {
    id: 'hsk6-filosofia',
    title: 'Filosofia Chinesa',
    titleZh: '中国哲学',
    level: 6,
    lines: [
      { zh: '儒家思想以"仁"为核心，强调个人修养与社会责任的统一。', py: 'Rújiā sīxiǎng yǐ "rén" wéi héxīn, qiángdiào gèrén xiūyǎng yǔ shèhuì zérèn de tǒngyī.', pt: 'O pensamento confuciano tem o "ren" (benevolência) como núcleo, enfatizando a unidade entre o cultivo pessoal e a responsabilidade social.' },
      { zh: '道家则主张顺应自然，追求"无为而治"的境界。', py: 'Dàojiā zé zhǔzhāng shùnyìng zìrán, zhuīqiú "wúwéi ér zhì" de jìngjiè.', pt: 'O taoismo preconiza seguir a natureza, buscando o estado de "wu wei" — governar sem esforço forçado.' },
      { zh: '这两种思想虽然侧重不同，但都深刻影响了中国人的价值观和行为方式。', py: 'Zhè liǎng zhǒng sīxiǎng suīrán cèzhòng bùtóng, dàn dōu shēnkè yǐngxiǎng le Zhōngguórén de jiàzhíguān hé xíngwéi fāngshì.', pt: 'Embora essas duas correntes tenham ênfases diferentes, ambas influenciaram profundamente os valores e o comportamento dos chineses.' },
      { zh: '在当代中国，传统哲学智慧与现代价值观念的融合与碰撞，催生了新的文化思潮。', py: 'Zài dāngdài Zhōngguó, chuántǒng zhéxué zhìhuì yǔ xiàndài jiàzhíguānniàn de rónghé yǔ pèngzhuàng, cuīshēng le xīn de wénhuà sīcháo.', pt: 'Na China contemporânea, a fusão e o choque entre a sabedoria filosófica tradicional e os valores modernos geraram novas correntes culturais.' },
      { zh: '如何在继承中创新，在创新中继承，是中华文明在新时代面临的重要课题。', py: 'Rúhé zài jìchéng zhōng chuàngxīn, zài chuàngxīn zhōng jìchéng, shì Zhōnghuá wénmíng zài xīn shídài miànlín de zhòngyào kètí.', pt: 'Como inovar na herança e herdar na inovação é um tema central que a civilização chinesa enfrenta na nova era.' },
    ],
  },

  // ── HSK 1 (novos) ──────────────────────────────────────────────────────
  {
    id: 'hsk1-quarto',
    title: 'Meu Quarto',
    titleZh: '我的房间',
    level: 1,
    lines: [
      { zh: '我的房间不大，但是很干净。', py: 'Wǒ de fángjiān bù dà, dànshì hěn gānjìng.', pt: 'Meu quarto não é grande, mas é muito limpo.' },
      { zh: '有一张床和一张桌子。', py: 'Yǒu yī zhāng chuáng hé yī zhāng zhuōzi.', pt: 'Tem uma cama e uma mesa.' },
      { zh: '桌子上有书和铅笔。', py: 'Zhuōzi shàng yǒu shū hé qiānbǐ.', pt: 'Na mesa há livros e lápis.' },
      { zh: '我喜欢在房间里看书。', py: 'Wǒ xǐhuan zài fángjiān lǐ kàn shū.', pt: 'Gosto de ler no meu quarto.' },
      { zh: '晚上我在房间里睡觉。', py: 'Wǎnshang wǒ zài fángjiān lǐ shuìjiào.', pt: 'À noite eu durmo no meu quarto.' },
    ],
  },
  {
    id: 'hsk1-escola',
    title: 'Na Escola',
    titleZh: '在学校',
    level: 1,
    lines: [
      { zh: '学校很大，有很多学生。', py: 'Xuéxiào hěn dà, yǒu hěn duō xuésheng.', pt: 'A escola é grande e tem muitos alunos.' },
      { zh: '老师很好，我很喜欢他。', py: 'Lǎoshī hěn hǎo, wǒ hěn xǐhuan tā.', pt: 'O professor é bom; gosto muito dele.' },
      { zh: '我们每天学习汉语和数学。', py: 'Wǒmen měitiān xuéxí Hànyǔ hé shùxué.', pt: 'Estudamos chinês e matemática todos os dias.' },
      { zh: '下课以后，我们踢足球。', py: 'Xià kè yǐhòu, wǒmen tī zúqiú.', pt: 'Depois da aula, jogamos futebol.' },
      { zh: '我爱我的学校。', py: 'Wǒ ài wǒ de xuéxiào.', pt: 'Eu amo minha escola.' },
    ],
  },
  {
    id: 'hsk1-animais',
    title: 'Os Animais',
    titleZh: '动物',
    level: 1,
    lines: [
      { zh: '我家有一只小狗，叫大毛。', py: 'Wǒ jiā yǒu yī zhī xiǎo gǒu, jiào Dàmáo.', pt: 'Minha família tem um cachorrinho chamado Dàmáo.' },
      { zh: '他每天跑步，很活泼。', py: 'Tā měitiān pǎobù, hěn huópō.', pt: 'Ele corre todo dia e é muito animado.' },
      { zh: '动物园里有大象和熊猫。', py: 'Dòngwùyuán lǐ yǒu dàxiàng hé xióngmāo.', pt: 'No zoológico tem elefantes e pandas.' },
      { zh: '我很喜欢熊猫，它很可爱。', py: 'Wǒ hěn xǐhuan xióngmāo, tā hěn kě\'ài.', pt: 'Gosto muito de pandas; eles são muito fofos.' },
      { zh: '猫和狗是很好的朋友。', py: 'Māo hé gǒu shì hěn hǎo de péngyou.', pt: 'Gatos e cachorros são bons amigos.' },
    ],
  },
  {
    id: 'hsk1-comida',
    title: 'A Comida',
    titleZh: '食物',
    level: 1,
    lines: [
      { zh: '我很喜欢吃中国菜。', py: 'Wǒ hěn xǐhuan chī Zhōngguó cài.', pt: 'Gosto muito de comida chinesa.' },
      { zh: '妈妈做的饭最好吃。', py: 'Māma zuò de fàn zuì hǎochī.', pt: 'A comida que a mamãe faz é a mais gostosa.' },
      { zh: '我每天早上喝牛奶，吃面包。', py: 'Wǒ měitiān zǎoshang hē niúnǎi, chī miànbāo.', pt: 'Toda manhã bebo leite e como pão.' },
      { zh: '我不喜欢吃鱼，我喜欢吃肉。', py: 'Wǒ bù xǐhuan chī yú, wǒ xǐhuan chī ròu.', pt: 'Não gosto de peixe; gosto de carne.' },
      { zh: '苹果是我最喜欢的水果。', py: 'Píngguǒ shì wǒ zuì xǐhuan de shuǐguǒ.', pt: 'A maçã é minha fruta favorita.' },
    ],
  },
  {
    id: 'hsk1-cores',
    title: 'As Cores',
    titleZh: '颜色',
    level: 1,
    lines: [
      { zh: '我喜欢红色，红色很漂亮。', py: 'Wǒ xǐhuan hóngsè, hóngsè hěn piàoliang.', pt: 'Gosto da cor vermelha; o vermelho é muito bonito.' },
      { zh: '天是蓝色的，草是绿色的。', py: 'Tiān shì lánsè de, cǎo shì lǜsè de.', pt: 'O céu é azul e o capim é verde.' },
      { zh: '我的书包是黑色的。', py: 'Wǒ de shūbāo shì hēisè de.', pt: 'Minha mochila é preta.' },
      { zh: '妈妈的衣服是白色的，很好看。', py: 'Māma de yīfu shì báisè de, hěn hǎokàn.', pt: 'A roupa da mamãe é branca e fica muito bem.' },
      { zh: '你最喜欢什么颜色？', py: 'Nǐ zuì xǐhuan shénme yánsè?', pt: 'Qual é sua cor favorita?' },
    ],
  },

  // ── HSK 2 (novos) ──────────────────────────────────────────────────────
  {
    id: 'hsk2-aniversario',
    title: 'O Aniversário',
    titleZh: '生日',
    level: 2,
    lines: [
      { zh: '今天是我的生日，我很高兴。', py: 'Jīntiān shì wǒ de shēngrì, wǒ hěn gāoxìng.', pt: 'Hoje é meu aniversário; estou muito feliz.' },
      { zh: '朋友们来我家给我庆祝生日。', py: 'Péngyoumen lái wǒ jiā gěi wǒ qìngzhù shēngrì.', pt: 'Os amigos vieram à minha casa comemorar meu aniversário.' },
      { zh: '妈妈做了一个大蛋糕，上面有蜡烛。', py: 'Māma zuò le yī ge dà dàngāo, shàngmiàn yǒu làzhú.', pt: 'A mamãe fez um bolo grande com velas em cima.' },
      { zh: '我许了一个愿望，然后吹灭蜡烛。', py: 'Wǒ xǔ le yī gè yuànwang, ránhòu chuī miè làzhú.', pt: 'Fiz um pedido e depois apaguei as velas soprando.' },
      { zh: '朋友们送给我很多礼物，我非常感谢他们。', py: 'Péngyoumen sòng gěi wǒ hěn duō lǐwù, wǒ fēicháng gǎnxiè tāmen.', pt: 'Os amigos me deram muitos presentes; sou muito grato a eles.' },
    ],
  },
  {
    id: 'hsk2-doenca',
    title: 'A Doença',
    titleZh: '生病',
    level: 2,
    lines: [
      { zh: '昨天我发烧了，头也很疼。', py: 'Zuótiān wǒ fāshāo le, tóu yě hěn téng.', pt: 'Ontem eu tive febre e também muita dor de cabeça.' },
      { zh: '妈妈说要去医院看病。', py: 'Māma shuō yào qù yīyuàn kàn bìng.', pt: 'A mamãe disse que precisávamos ir ao hospital.' },
      { zh: '医生检查了我的身体，说我感冒了。', py: 'Yīshēng jiǎnchá le wǒ de shēntǐ, shuō wǒ gǎnmào le.', pt: 'O médico me examinou e disse que eu estava resfriado.' },
      { zh: '他给我开了药，让我多喝水、多休息。', py: 'Tā gěi wǒ kāi le yào, ràng wǒ duō hē shuǐ, duō xiūxi.', pt: 'Ele me receitou remédio e mandou beber mais água e descansar bastante.' },
      { zh: '今天好多了，希望明天可以去上学。', py: 'Jīntiān hǎo duō le, xīwàng míngtiān kěyǐ qù shàngxué.', pt: 'Hoje estou muito melhor; espero poder ir à escola amanhã.' },
    ],
  },
  {
    id: 'hsk2-fim-de-semana',
    title: 'O Fim de Semana',
    titleZh: '周末',
    level: 2,
    lines: [
      { zh: '这个周末我没有课，很轻松。', py: 'Zhège zhōumò wǒ méiyǒu kè, hěn qīngsōng.', pt: 'Neste fim de semana não tenho aulas; estou relaxado.' },
      { zh: '周六上午，我帮妈妈打扫房间。', py: 'Zhōuliù shàngwǔ, wǒ bāng māma dǎsǎo fángjiān.', pt: 'Sábado de manhã, ajudei a mamãe a limpar a casa.' },
      { zh: '下午，我去朋友家玩了两个小时。', py: 'Xiàwǔ, wǒ qù péngyou jiā wán le liǎng gè xiǎoshí.', pt: 'À tarde, fui à casa do amigo e fiquei duas horas brincando.' },
      { zh: '周日，我们一家人去爬山，很开心。', py: 'Zhōurì, wǒmen yī jiā rén qù páshān, hěn kāixīn.', pt: 'No domingo, a família foi escalar uma montanha; foi muito divertido.' },
      { zh: '周末虽然短，但是过得很充实。', py: 'Zhōumò suīrán duǎn, dànshì guò de hěn chōngshí.', pt: 'O fim de semana é curto, mas foi muito bem aproveitado.' },
    ],
  },
  {
    id: 'hsk2-no-restaurante',
    title: 'No Restaurante',
    titleZh: '在饭馆',
    level: 2,
    lines: [
      { zh: '昨天晚上，我们一家人去饭馆吃饭。', py: 'Zuótiān wǎnshang, wǒmen yī jiā rén qù fànguǎn chīfàn.', pt: 'Ontem à noite, toda a família foi ao restaurante jantar.' },
      { zh: '服务员问我们想吃什么。', py: 'Fúwùyuán wèn wǒmen xiǎng chī shénme.', pt: 'O garçom perguntou o que queríamos comer.' },
      { zh: '爸爸点了红烧肉，妈妈点了鱼。', py: 'Bàba diǎn le hóngshāo ròu, māma diǎn le yú.', pt: 'Papai pediu carne de porco ensopada e mamãe pediu peixe.' },
      { zh: '菜很好吃，我们吃了很多。', py: 'Cài hěn hǎochī, wǒmen chī le hěn duō.', pt: 'A comida era muito boa e comemos bastante.' },
      { zh: '最后，爸爸付了钱，我们回家了。', py: 'Zuìhòu, bàba fù le qián, wǒmen huí jiā le.', pt: 'No final, papai pagou a conta e voltamos para casa.' },
    ],
  },
  {
    id: 'hsk2-parque',
    title: 'No Parque',
    titleZh: '在公园',
    level: 2,
    lines: [
      { zh: '每天早上，很多人在公园里锻炼身体。', py: 'Měitiān zǎoshang, hěn duō rén zài gōngyuán lǐ duànliàn shēntǐ.', pt: 'Toda manhã, muitas pessoas se exercitam no parque.' },
      { zh: '老人们打太极拳，年轻人跑步。', py: 'Lǎorénmen dǎ tàijíquán, niánqīng rén pǎobù.', pt: 'Os idosos praticam tai chi e os jovens correm.' },
      { zh: '公园里有很多花，非常漂亮。', py: 'Gōngyuán lǐ yǒu hěn duō huā, fēicháng piàoliang.', pt: 'No parque há muitas flores; é muito bonito.' },
      { zh: '孩子们在玩，笑声很大。', py: 'Háizimen zài wán, xiàoshēng hěn dà.', pt: 'As crianças estão brincando e as risadas são altas.' },
      { zh: '我觉得在公园散步让我心情很好。', py: 'Wǒ juéde zài gōngyuán sànbù ràng wǒ xīnqíng hěn hǎo.', pt: 'Acho que passear no parque me deixa de bom humor.' },
    ],
  },

  // ── HSK 3 (novos) ──────────────────────────────────────────────────────
  {
    id: 'hsk3-aprendendo-chines',
    title: 'Aprendendo Chinês',
    titleZh: '学中文',
    level: 3,
    lines: [
      { zh: '我开始学中文已经两年了，进步很大。', py: 'Wǒ kāishǐ xué Zhōngwén yǐjīng liǎng nián le, jìnbù hěn dà.', pt: 'Já faz dois anos que comecei a aprender chinês; melhorei muito.' },
      { zh: '一开始，我觉得汉字很难写，拼音也很难读。', py: 'Yī kāishǐ, wǒ juéde hànzì hěn nán xiě, pīnyīn yě hěn nán dú.', pt: 'No início, achei os caracteres chineses difíceis de escrever e o pinyin difícil de pronunciar.' },
      { zh: '但是老师告诉我，坚持练习是最重要的。', py: 'Dànshì lǎoshī gàosù wǒ, jiānchí liànxí shì zuì zhòngyào de.', pt: 'Mas o professor me disse que praticar com persistência é o mais importante.' },
      { zh: '现在我可以用中文和朋友聊天，感觉很好。', py: 'Xiànzài wǒ kěyǐ yòng Zhōngwén hé péngyou liáotiān, gǎnjué hěn hǎo.', pt: 'Agora consigo conversar com amigos em chinês; é uma ótima sensação.' },
      { zh: '学语言让我了解了不同的文化，非常有意思。', py: 'Xué yǔyán ràng wǒ liǎojiě le bùtóng de wénhuà, fēicháng yǒu yìsi.', pt: 'Aprender um idioma me permitiu conhecer culturas diferentes; é muito interessante.' },
    ],
  },
  {
    id: 'hsk3-esporte',
    title: 'O Esporte',
    titleZh: '运动',
    level: 3,
    lines: [
      { zh: '我最喜欢的运动是篮球，每周打两次。', py: 'Wǒ zuì xǐhuan de yùndòng shì lánqiú, měi zhōu dǎ liǎng cì.', pt: 'Meu esporte favorito é o basquete; jogo duas vezes por semana.' },
      { zh: '运动让我的身体更健康，心情也更好。', py: 'Yùndòng ràng wǒ de shēntǐ gèng jiànkāng, xīnqíng yě gèng hǎo.', pt: 'O esporte me mantém mais saudável e de melhor humor.' },
      { zh: '我们学校的篮球队上个月得了市里的冠军。', py: 'Wǒmen xuéxiào de lánqiú duì shàng ge yuè dé le shì lǐ de guànjūn.', pt: 'O time de basquete da nossa escola ganhou o campeonato da cidade no mês passado.' },
      { zh: '除了篮球，我还喜欢游泳和跑步。', py: 'Chúle lánqiú, wǒ hái xǐhuan yóuyǒng hé pǎobù.', pt: 'Além do basquete, também gosto de natação e corrida.' },
      { zh: '我认为坚持运动对每个人都很重要。', py: 'Wǒ rènwéi jiānchí yùndòng duì měi gè rén dōu hěn zhòngyào.', pt: 'Acho que manter-se ativo é importante para todos.' },
    ],
  },
  {
    id: 'hsk3-hobby',
    title: 'Meu Hobby',
    titleZh: '我的爱好',
    level: 3,
    lines: [
      { zh: '我最大的爱好是画画，从小就喜欢。', py: 'Wǒ zuì dà de àihào shì huà huà, cóng xiǎo jiù xǐhuan.', pt: 'Meu maior hobby é desenhar; gosto desde pequeno.' },
      { zh: '每天放学后，我都会花一个小时练习。', py: 'Měitiān fàng xué hòu, wǒ dōu huì huā yī gè xiǎoshí liànxí.', pt: 'Todo dia depois da escola, passo uma hora praticando.' },
      { zh: '我画了很多风景画，还画过人物。', py: 'Wǒ huà le hěn duō fēngjǐng huà, hái huà guò rénwù.', pt: 'Pintei muitas paisagens e também já pintei pessoas.' },
      { zh: '上个月，我的画在学校展览中得了奖。', py: 'Shàng ge yuè, wǒ de huà zài xuéxiào zhǎnlǎn zhōng dé le jiǎng.', pt: 'No mês passado, meu desenho ganhou um prêmio na exposição da escola.' },
      { zh: '我希望以后能成为一名画家。', py: 'Wǒ xīwàng yǐhòu néng chéngwéi yī míng huàjiā.', pt: 'Espero poder me tornar um pintor no futuro.' },
    ],
  },
  {
    id: 'hsk3-trabalho-do-pai',
    title: 'O Trabalho do Meu Pai',
    titleZh: '爸爸的工作',
    level: 3,
    lines: [
      { zh: '我爸爸是一名医生，在医院工作了二十年。', py: 'Wǒ bàba shì yī míng yīshēng, zài yīyuàn gōngzuò le èrshí nián.', pt: 'Meu pai é médico e trabalha no hospital há vinte anos.' },
      { zh: '他每天很早起床，有时候工作到很晚。', py: 'Tā měitiān hěn zǎo qǐchuáng, yǒu shíhou gōngzuò dào hěn wǎn.', pt: 'Ele acorda muito cedo todos os dias e às vezes trabalha até tarde.' },
      { zh: '爸爸说，帮助病人是他最开心的事。', py: 'Bàba shuō, bāngzhù bìngrén shì tā zuì kāixīn de shì.', pt: 'Papai diz que ajudar os pacientes é o que o faz mais feliz.' },
      { zh: '虽然工作很辛苦，但他从来不抱怨。', py: 'Suīrán gōngzuò hěn xīnkǔ, dàn tā cónglái bù bàoyuàn.', pt: 'Embora o trabalho seja pesado, ele nunca reclama.' },
      { zh: '我非常尊敬我的爸爸，希望以后也能像他一样。', py: 'Wǒ fēicháng zūnjìng wǒ de bàba, xīwàng yǐhòu yě néng xiàng tā yīyàng.', pt: 'Tenho muito respeito pelo meu pai e espero ser como ele no futuro.' },
    ],
  },
  {
    id: 'hsk3-xangai',
    title: 'Viagem a Xangai',
    titleZh: '去上海',
    level: 3,
    lines: [
      { zh: '暑假的时候，我和父母去了上海旅游。', py: 'Shǔjià de shíhou, wǒ hé fùmǔ qù le Shànghǎi lǚyóu.', pt: 'Nas férias de verão, fui a Xangai com meus pais.' },
      { zh: '上海是中国最繁华的城市之一，到处都很热闹。', py: 'Shànghǎi shì Zhōngguó zuì fánhuá de chéngshì zhī yī, dàochù dōu hěn rènào.', pt: 'Xangai é uma das cidades mais prósperas da China; está animado em todos os lugares.' },
      { zh: '我们参观了外滩，看到了很多漂亮的老建筑。', py: 'Wǒmen cānguān le Wàitān, kàn dào le hěn duō piàoliang de lǎo jiànzhù.', pt: 'Visitamos o Bund e vimos muitos prédios antigos e bonitos.' },
      { zh: '晚上，外滩的灯光非常美，我拍了很多照片。', py: 'Wǎnshang, Wàitān de dēngguāng fēicháng měi, wǒ pāi le hěn duō zhàopiàn.', pt: 'À noite, a iluminação do Bund era muito bonita; tirei muitas fotos.' },
      { zh: '这次旅行让我对中国有了更深的了解。', py: 'Zhè cì lǚxíng ràng wǒ duì Zhōngguó yǒu le gèng shēn de liǎojiě.', pt: 'Esta viagem me deu uma compreensão mais profunda da China.' },
    ],
  },

  // ── HSK 4 (novos) ──────────────────────────────────────────────────────
  {
    id: 'hsk4-culinaria',
    title: 'Culinária Chinesa',
    titleZh: '中国饮食文化',
    level: 4,
    lines: [
      { zh: '中国饮食文化博大精深，各地的菜肴风味各异。', py: 'Zhōngguó yǐnshí wénhuà bódà jīngshēn, gè dì de càiyáo fēngwèi gè yì.', pt: 'A cultura culinária chinesa é rica e profunda; os pratos de cada região têm sabores distintos.' },
      { zh: '四川菜以麻辣著称，广东菜则以清淡鲜美闻名。', py: 'Sìchuān cài yǐ málà zhùchēng, Guǎngdōng cài zé yǐ qīngdàn xiānměi wénmíng.', pt: 'A culinária de Sichuan é famosa pelo sabor apimentado, enquanto a cantonesa é conhecida por ser leve e deliciosa.' },
      { zh: '除了味道，中国人也非常重视饮食的营养搭配。', py: 'Chúle wèidào, Zhōngguórén yě fēicháng zhòngshì yǐnshí de yíngyǎng dāpèi.', pt: 'Além do sabor, os chineses valorizam muito o equilíbrio nutricional da alimentação.' },
      { zh: '春节期间，家人团聚，一起吃年夜饭是最重要的传统之一。', py: 'Chūnjié qījiān, jiārén tuánjù, yīqǐ chī niányèfàn shì zuì zhòngyào de chuántǒng zhī yī.', pt: 'Durante o Ano Novo Chinês, a reunião familiar para o jantar é uma das tradições mais importantes.' },
      { zh: '可以说，食物不仅是营养来源，更是文化认同和情感联结的纽带。', py: 'Kěyǐ shuō, shíwù bùjǐn shì yíngyǎng láiyuán, gèng shì wénhuà rèntóng hé qínggǎn liánjié de niǔdài.', pt: 'Pode-se dizer que a comida não é apenas fonte de nutrição, mas também um elo de identidade cultural e conexão emocional.' },
    ],
  },
  {
    id: 'hsk4-musica',
    title: 'O Poder da Música',
    titleZh: '音乐的力量',
    level: 4,
    lines: [
      { zh: '音乐是人类共同的语言，无论来自哪个国家，都能感受到它的魅力。', py: 'Yīnyuè shì rénlèi gòngtóng de yǔyán, wúlùn lái zì nǎ ge guójiā, dōu néng gǎnshòu dào tā de mèilì.', pt: 'A música é a linguagem universal da humanidade; independente do país de origem, todos podem sentir seu charme.' },
      { zh: '研究表明，听音乐可以减轻压力、改善心情，甚至提高学习效率。', py: 'Yánjiū biǎomíng, tīng yīnyuè kěyǐ jiǎnqīng yālì, gǎishàn xīnqíng, shènzhì tígāo xuéxí xiàolǜ.', pt: 'Pesquisas mostram que ouvir música pode reduzir o estresse, melhorar o humor e até aumentar a eficiência nos estudos.' },
      { zh: '中国传统音乐以古琴、二胡等乐器为代表，历史悠久，韵味独特。', py: 'Zhōngguó chuántǒng yīnyuè yǐ gǔqín, èrhú děng yuèqì wéi dàibiǎo, lìshǐ yōujiǔ, yùnwèi dútè.', pt: 'A música tradicional chinesa é representada por instrumentos como o guqin e o erhu; tem longa história e sabor único.' },
      { zh: '近年来，中国的流行音乐也走向世界，受到越来越多外国听众的喜爱。', py: 'Jìn nián lái, Zhōngguó de liúxíng yīnyuè yě zǒuxiàng shìjiè, shòu dào yuè lái yuè duō wàiguó tīngzhòng de xǐ\'ài.', pt: 'Nos últimos anos, a música popular chinesa também ganhou o mundo, sendo apreciada por cada vez mais ouvintes estrangeiros.' },
      { zh: '学习一种乐器不仅能陶冶情操，还能培养专注力和坚持不懈的精神。', py: 'Xuéxí yī zhǒng yuèqì bùjǐn néng táoyě qíngcāo, hái néng péiyǎng zhuānzhùlì hé jiānchí bùxiè de jīngshén.', pt: 'Aprender um instrumento musical não só cultiva o caráter, mas também desenvolve a concentração e a perseverança.' },
    ],
  },
  {
    id: 'hsk4-redes-sociais',
    title: 'Redes Sociais',
    titleZh: '社交媒体',
    level: 4,
    lines: [
      { zh: '随着智能手机的普及，社交媒体已经成为人们日常生活的重要组成部分。', py: 'Suízhe zhìnéng shǒujī de pǔjí, shèjiāo méitǐ yǐjīng chéngwéi rénmen rìcháng shēnghuó de zhòngyào zǔchéng bùfen.', pt: 'Com a popularização dos smartphones, as redes sociais tornaram-se uma parte importante do dia a dia das pessoas.' },
      { zh: '人们通过社交媒体与朋友保持联系，分享生活中的点点滴滴。', py: 'Rénmen tōngguò shèjiāo méitǐ yǔ péngyou bǎochí liánxì, fēnxiǎng shēnghuó zhōng de diǎndiǎn dīdī.', pt: 'As pessoas usam as redes sociais para manter contato com amigos e compartilhar momentos da vida.' },
      { zh: '然而，过度使用社交媒体也带来了一些问题，比如隐私泄露和网络暴力。', py: "Rán'ér, guòdù shǐyòng shèjiāo méitǐ yě dài lái le yīxiē wèntí, bǐrú yǐnsī xìelòu hé wǎngluò bàolì.", pt: 'No entanto, o uso excessivo das redes sociais também traz problemas, como vazamento de privacidade e cyberbullying.' },
      { zh: '专家建议每天使用社交媒体的时间不超过两个小时。', py: 'Zhuānjiā jiànyì měitiān shǐyòng shèjiāo méitǐ de shíjiān bù chāoguò liǎng gè xiǎoshí.', pt: 'Especialistas recomendam não usar redes sociais por mais de duas horas por dia.' },
      { zh: '合理使用社交媒体，才能让它真正为我们服务。', py: 'Hélǐ shǐyòng shèjiāo méitǐ, cái néng ràng tā zhēnzhèng wèi wǒmen fúwù.', pt: 'Somente usando as redes sociais de forma racional elas podem realmente nos servir.' },
    ],
  },
  {
    id: 'hsk4-saude-exercicio',
    title: 'Saúde e Exercício',
    titleZh: '健康与运动',
    level: 4,
    lines: [
      { zh: '随着生活水平的提高，人们越来越重视身体健康。', py: 'Suízhe shēnghuó shuǐpíng de tígāo, rénmen yuè lái yuè zhòngshì shēntǐ jiànkāng.', pt: 'Com a melhora do padrão de vida, as pessoas valorizam cada vez mais a saúde física.' },
      { zh: '专家建议，每周至少进行三次有氧运动，每次不少于三十分钟。', py: 'Zhuānjiā jiànyì, měi zhōu zhìshǎo jìnxíng sān cì yǒuyǎng yùndòng, měi cì bù shǎo yú sānshí fēnzhōng.', pt: 'Especialistas recomendam pelo menos três sessões de exercício aeróbico por semana, com duração mínima de trinta minutos cada.' },
      { zh: '除了锻炼，均衡饮食也是保持健康的关键因素。', py: 'Chúle duànliàn, jūnhéng yǐnshí yě shì bǎochí jiànkāng de guānjiàn yīnsù.', pt: 'Além do exercício, a alimentação equilibrada é também um fator-chave para manter a saúde.' },
      { zh: '很多上班族因为工作繁忙而忽视了运动，长期久坐对健康危害很大。', py: 'Hěn duō shàngbānzú yīnwèi gōngzuò fánmáng ér hūshì le yùndòng, chángqī jiǔ zuò duì jiànkāng wēihài hěn dà.', pt: 'Muitos trabalhadores negligenciam o exercício devido ao trabalho intenso; ficar sentado por longos períodos é muito prejudicial à saúde.' },
      { zh: '养成良好的生活习惯，才能拥有健康的身体和积极的心态。', py: 'Yǎngchéng liánghǎo de shēnghuó xíguàn, cái néng yōngyǒu jiànkāng de shēntǐ hé jījí de xīntài.', pt: 'Somente desenvolvendo bons hábitos de vida é possível ter um corpo saudável e uma mentalidade positiva.' },
    ],
  },
  {
    id: 'hsk4-ano-novo',
    title: 'Tradições do Ano Novo',
    titleZh: '春节传统',
    level: 4,
    lines: [
      { zh: '春节是中国最重要的传统节日，每年农历正月初一庆祝。', py: 'Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì, měi nián nónglì zhēngyuè chūyī qìngzhù.', pt: 'O Festival da Primavera é o feriado tradicional mais importante da China, comemorado no primeiro dia do calendário lunar.' },
      { zh: '节前，家家户户打扫房间，贴上红色的对联和窗花。', py: 'Jié qián, jiājiāhùhù dǎsǎo fángjiān, tiē shàng hóng sè de duìlián hé chuānghuā.', pt: 'Antes do festival, todas as famílias limpam a casa e colam duilian vermelhos e flores decorativas nas janelas.' },
      { zh: '除夕夜，全家人聚在一起吃年夜饭，共同迎接新年的到来。', py: 'Chúxī yè, quánjiā rén jù zài yīqǐ chī niányèfàn, gòngtóng yíngjiē xīnnián de dàolái.', pt: 'Na véspera do Ano Novo, toda a família se reúne para o jantar e celebra juntos a chegada do Novo Ano.' },
      { zh: '长辈们给小孩红包，里面装着压岁钱，寓意吉祥平安。', py: 'Zhǎngbèimen gěi xiǎohái hóngbāo, lǐmiàn zhuāng zhe yāsuì qián, yùyì jíxiáng píng\'ān.', pt: 'Os mais velhos dão hongbao (envelopes vermelhos) às crianças, com dinheiro dentro, simbolizando sorte e paz.' },
      { zh: '燃放烟花爆竹是春节的传统，象征着驱走邪气，迎接好运。', py: 'Ránfàng yānhuā bàozhú shì Chūnjié de chuántǒng, xiàngzhēng zhe qūzǒu xiéqì, yíngjiē hǎoyùn.', pt: 'Soltar fogos de artifício é uma tradição do Festival da Primavera, simbolizando a expulsão do mal e a chegada da boa sorte.' },
    ],
  },

  // ── HSK 5 (novos) ──────────────────────────────────────────────────────
  {
    id: 'hsk5-economia',
    title: 'A Economia Chinesa',
    titleZh: '中国经济',
    level: 5,
    lines: [
      { zh: '改革开放以来，中国经济经历了举世瞩目的高速发展，综合国力大幅提升。', py: 'Gǎigé kāifàng yǐlái, Zhōngguó jīngjì jīnglì le jǔshì zhǔmù de gāosù fāzhǎn, zōnghé guólì dàfú tíshēng.', pt: 'Desde a Reforma e Abertura, a economia chinesa passou por um desenvolvimento acelerado que atraiu atenção mundial, com aumento significativo do poder nacional.' },
      { zh: '制造业是中国经济的重要支柱，"世界工厂"的称号享誉全球。', py: 'Zhìzàoyè shì Zhōngguó jīngjì de zhòngyào zhīzhù, "shìjiè gōngchǎng" de chēnghào xiǎngyù quánqiú.', pt: 'A indústria manufatureira é um pilar importante da economia chinesa; o título de "fábrica do mundo" é reconhecido globalmente.' },
      { zh: '近年来，中国积极推动经济结构转型，大力发展服务业和高新技术产业。', py: 'Jìn nián lái, Zhōngguó jījí tuīdòng jīngjì jiégòu zhuǎnxíng, dàlì fāzhǎn fúwùyè hé gāoxīn jìshù chǎnyè.', pt: 'Nos últimos anos, a China tem promovido ativamente a transformação da estrutura econômica, desenvolvendo fortemente o setor de serviços e as indústrias de alta tecnologia.' },
      { zh: '尽管面临诸多挑战，中国经济仍保持了相对稳定的增长态势。', py: 'Jǐnguǎn miànlín zhūduō tiǎozhàn, Zhōngguó jīngjì réng bǎochí le xiāngduì wěndìng de zēngzhǎng tàishì.', pt: 'Apesar de enfrentar muitos desafios, a economia chinesa ainda mantém uma tendência de crescimento relativamente estável.' },
      { zh: '如何实现经济的可持续发展，兼顾效率与公平，是摆在决策者面前的重要课题。', py: 'Rúhé shíxiàn jīngjì de kě chíxù fāzhǎn, jiāngù xiàolǜ yǔ gōngpíng, shì bǎi zài juécèzhě miànqián de zhòngyào kètí.', pt: 'Como alcançar o desenvolvimento econômico sustentável, equilibrando eficiência e equidade, é um tema importante diante dos formuladores de políticas.' },
    ],
  },
  {
    id: 'hsk5-saude-mental',
    title: 'Saúde Mental',
    titleZh: '心理健康',
    level: 5,
    lines: [
      { zh: '随着社会竞争的加剧，心理健康问题日益受到社会各界的广泛关注。', py: 'Suízhe shèhuì jìngzhēng de jiājù, xīnlǐ jiànkāng wèntí rìyì shòu dào shèhuì gè jiè de guǎngfàn guānzhù.', pt: 'Com o aumento da competição social, os problemas de saúde mental têm recebido atenção crescente de todos os setores da sociedade.' },
      { zh: '抑郁症、焦虑症等心理疾病的发病率逐年上升，已成为不可忽视的公共卫生问题。', py: 'Yìyùzhèng, jiāolǜzhèng děng xīnlǐ jíbìng de fābìng lǜ zhúnián shàngshēng, yǐ chéng wéi bùkě hūshì de gōnggòng wèishēng wèntí.', pt: 'A incidência de doenças mentais como depressão e ansiedade tem aumentado ano após ano, tornando-se um problema de saúde pública que não pode ser ignorado.' },
      { zh: '寻求专业帮助不应该被视为软弱，而是勇敢面对问题的表现。', py: 'Xúnqiú zhuānyè bāngzhù bù yīnggāi bèi shìwéi ruǎnruò, ér shì yǒnggǎn miàn duì wèntí de biǎoxiàn.', pt: 'Buscar ajuda profissional não deve ser visto como fraqueza, mas como uma demonstração de coragem ao enfrentar problemas.' },
      { zh: '保持良好的人际关系、定期运动和充足睡眠都有助于维护心理健康。', py: 'Bǎochí liánghǎo de rénjì guānxi, dìngqī yùndòng hé chōngzú shuìmián dōu yǒuzhù yú wéihù xīnlǐ jiànkāng.', pt: 'Manter boas relações interpessoais, praticar exercícios regularmente e dormir o suficiente contribuem para a manutenção da saúde mental.' },
      { zh: '构建心理健康友好型社会，需要政府、社区和个人的共同努力。', py: 'Gòujiàn xīnlǐ jiànkāng yǒuhǎo xíng shèhuì, xūyào zhèngfǔ, shèqū hé gèrén de gòngtóng nǔlì.', pt: 'Construir uma sociedade amigável à saúde mental requer esforços conjuntos do governo, das comunidades e dos indivíduos.' },
    ],
  },
  {
    id: 'hsk5-arte-contemporanea',
    title: 'Arte Contemporânea Chinesa',
    titleZh: '当代中国艺术',
    level: 5,
    lines: [
      { zh: '改革开放以后，中国当代艺术逐渐走出国门，在国际舞台上展露头角。', py: 'Gǎigé kāifàng yǐhòu, Zhōngguó dāngdài yìshù zhújiàn zǒuchū guómén, zài guójì wǔtái shàng zhǎnlù tóujiǎo.', pt: 'Após a Reforma e Abertura, a arte contemporânea chinesa foi gradualmente se internacionalizando, ganhando destaque no cenário global.' },
      { zh: '许多中国艺术家将传统水墨与西方现代艺术手法相融合，创作出独特的作品。', py: 'Xǔduō Zhōngguó yìshùjiā jiāng chuántǒng shuǐmò yǔ xīfāng xiàndài yìshù shǒufǎ xiāng rónghé, chuàngzuò chū dútè de zuòpǐn.', pt: 'Muitos artistas chineses fundem a tinta tradicional com técnicas de arte moderna ocidental, criando obras únicas.' },
      { zh: '艾未未等艺术家以作品表达对社会问题的关切，引发广泛讨论。', py: 'Ài Wèiwèi děng yìshùjiā yǐ zuòpǐn biǎodá duì shèhuì wèntí de guānqiè, yǐnfā guǎngfàn tǎolùn.', pt: 'Artistas como Ai Weiwei expressam preocupações com questões sociais em suas obras, gerando amplos debates.' },
      { zh: '中国当代艺术市场近年来也快速发展，拍卖价格屡创新高。', py: 'Zhōngguó dāngdài yìshù shìchǎng jìn nián lái yě kuàisù fāzhǎn, pāimài jiàgé lǚ chuàng xīn gāo.', pt: 'O mercado de arte contemporânea chinesa também se desenvolveu rapidamente nos últimos anos, com preços de leilão batendo recordes.' },
      { zh: '如何在全球化的语境下保持中国艺术的文化主体性，是当代艺术家面临的共同挑战。', py: 'Rúhé zài quánqiúhuà de yǔjìng xià bǎochí Zhōngguó yìshù de wénhuà zhǔtǐxìng, shì dāngdài yìshùjiā miànlín de gòngtóng tiǎozhàn.', pt: 'Como manter a identidade cultural da arte chinesa no contexto da globalização é um desafio comum para os artistas contemporâneos.' },
    ],
  },
  {
    id: 'hsk5-urbanizacao',
    title: 'Urbanização na China',
    titleZh: '中国的城镇化',
    level: 5,
    lines: [
      { zh: '过去几十年，中国经历了人类历史上规模最大的城镇化进程。', py: 'Guòqù jǐ shí nián, Zhōngguó jīnglì le rénlèi lìshǐ shàng guīmó zuì dà de chéngzhènhuà jìnchéng.', pt: 'Nas últimas décadas, a China passou pelo maior processo de urbanização da história humana.' },
      { zh: '数以亿计的农民进城务工，成为推动经济发展的重要力量。', py: 'Shù yǐ yì jì de nóngmín jìn chéng wùgōng, chéngwéi tuīdòng jīngjì fāzhǎn de zhòngyào lìliàng.', pt: 'Centenas de milhões de camponeses foram às cidades trabalhar, tornando-se uma força importante no desenvolvimento econômico.' },
      { zh: '城镇化带来了基础设施的完善，教育、医疗等公共服务水平大幅提升。', py: 'Chéngzhènhuà dài lái le jīchǔ shèshī de wánshàn, jiàoyù, yīliáo děng gōnggòng fúwù shuǐpíng dàfú tíshēng.', pt: 'A urbanização trouxe melhorias na infraestrutura e elevou significativamente o nível dos serviços públicos como educação e saúde.' },
      { zh: '然而，城市扩张也引发了土地资源紧张、贫富分化加剧等一系列问题。', py: "Rán'ér, chéngshì kuòzhāng yě yǐnfā le tǔdì zīyuán jǐnzhāng, pínfù fēnhuà jiājù děng yī xìliè wèntí.", pt: 'No entanto, a expansão urbana também gerou uma série de problemas, como escassez de terra e aumento da desigualdade econômica.' },
      { zh: '未来的城镇化之路，需要在发展速度与质量之间寻求更好的平衡。', py: 'Wèilái de chéngzhènhuà zhī lù, xūyào zài fāzhǎn sùdù yǔ zhìliàng zhī jiān xúnqiú gèng hǎo de pínghéng.', pt: 'O caminho da urbanização futura precisará buscar um melhor equilíbrio entre velocidade e qualidade de desenvolvimento.' },
    ],
  },
  {
    id: 'hsk5-sistema-educacional',
    title: 'Sistema Educacional Chinês',
    titleZh: '中国教育制度',
    level: 5,
    lines: [
      { zh: '中国的教育制度历经数千年演变，形成了独特的体系与文化。', py: 'Zhōngguó de jiàoyù zhìdù lì jīng shù qiān nián yǎnbiàn, xíngchéng le dútè de tǐxì yǔ wénhuà.', pt: 'O sistema educacional chinês evoluiu ao longo de milhares de anos, formando um sistema e cultura únicos.' },
      { zh: '儒家"有教无类"的思想，早在两千多年前便确立了教育平等的理念。', py: 'Rújiā "yǒu jiào wú lèi" de sīxiǎng, zǎo zài liǎng qiān duō nián qián biàn quèlì le jiàoyù píngděng de lǐniàn.', pt: 'O pensamento confuciano de "educação sem discriminação" estabeleceu o conceito de igualdade educacional há mais de dois mil anos.' },
      { zh: '现代中国建立了覆盖城乡的九年义务教育体系，基本实现了全民教育。', py: 'Xiàndài Zhōngguó jiànlì le fùgài chéng xiāng de jiǔ nián yìwù jiàoyù tǐxì, jīběn shíxiàn le quánmín jiàoyù.', pt: 'A China moderna estabeleceu um sistema de educação obrigatória de nove anos que cobre áreas urbanas e rurais, atingindo basicamente a educação universal.' },
      { zh: '高等教育规模持续扩大，高校毕业生数量屡创历史新高。', py: 'Gāoděng jiàoyù guīmó chíxù kuòdà, gāoxiào bìyèshēng shùliàng lǚ chuàng lìshǐ xīn gāo.', pt: 'A escala do ensino superior continua se expandindo, com o número de formandos universitários batendo recordes históricos.' },
      { zh: '在新时代背景下，如何培养具有创新精神和全球视野的人才，成为教育改革的核心议题。', py: 'Zài xīn shídài bèijǐng xià, rúhé péiyǎng jùyǒu chuàngxīn jīngshén hé quánqiú shìyě de réncái, chéngwéi jiàoyù gǎigé de héxīn yìtí.', pt: 'No contexto da nova era, como cultivar talentos com espírito inovador e visão global tornou-se o tema central da reforma educacional.' },
    ],
  },

  // ── HSK 6 (novos) ──────────────────────────────────────────────────────
  {
    id: 'hsk6-consciencia',
    title: 'A Consciência e a Existência',
    titleZh: '意识与存在',
    level: 6,
    lines: [
      { zh: '意识的本质是人类长久以来未能解答的哲学难题，横跨哲学、神经科学与认知心理学等多个领域。', py: 'Yìshí de běnzhì shì rénlèi jiǔ yǐlái wèi néng jiě dá de zhéxué nántí, héng kuà zhéxué, shénjīng kēxué yǔ rènzhī xīnlǐxué děng duō gè lǐngyù.', pt: 'A natureza da consciência é um problema filosófico que a humanidade não consegue resolver há muito tempo, abrangendo áreas como filosofia, neurociência e psicologia cognitiva.' },
      { zh: '唯物论者认为，意识是大脑物质活动的产物；而唯心论者则主张，意识先于物质而存在。', py: 'Wéiwùlùnzhě rènwéi, yìshí shì dànǎo wùzhì huódòng de chǎnwù; ér wéixīnlùnzhě zé zhǔzhāng, yìshí xiān yú wùzhì ér cúnzài.', pt: 'Os materialistas acreditam que a consciência é produto da atividade material do cérebro; já os idealistas afirmam que a consciência existe antes da matéria.' },
      { zh: '东方哲学传统，尤其是佛教，对意识与"自我"的探讨提供了不同于西方的深刻视角。', py: 'Dōngfāng zhéxué chuántǒng, yóuqí shì Fójiào, duì yìshí yǔ "zìwǒ" de tàntǎo tígōng le bùtóng yú xīfāng de shēnkè shìjiǎo.', pt: 'A tradição filosófica oriental, especialmente o Budismo, oferece perspectivas profundas sobre a consciência e o "eu", distintas das visões ocidentais.' },
      { zh: '人工智能的迅猛发展再度引发了人们对意识与智能关系的深层思考。', py: 'Réngōng zhìnéng de xùnměng fāzhǎn zài dù yǐnfā le rénmen duì yìshí yǔ zhìnéng guānxi de shēncéng sīkǎo.', pt: 'O rápido desenvolvimento da inteligência artificial reavivou reflexões profundas sobre a relação entre consciência e inteligência.' },
      { zh: '或许，人类对意识的探索，最终将成为一面镜子，映照出我们对自身存在意义的追问。', py: 'Huòxǔ, rénlèi duì yìshí de tànsuǒ, zuìzhōng jiāng chéngwéi yī miàn jìngzi, yìngzhào chū wǒmen duì zìshēn cúnzài yìyì de zhuīwèn.', pt: 'Talvez a exploração humana da consciência se torne, no fim, um espelho que reflete nossas perguntas sobre o significado da própria existência.' },
    ],
  },
  {
    id: 'hsk6-literatura-memoria',
    title: 'Literatura e Memória',
    titleZh: '文学与记忆',
    level: 6,
    lines: [
      { zh: '文学是人类记忆的载体，承载着不同时代的情感、思想与历史经验。', py: 'Wénxué shì rénlèi jìyì de zàitǐ, chéngzǎi zhe bùtóng shídài de qínggǎn, sīxiǎng yǔ lìshǐ jīngyàn.', pt: 'A literatura é o veículo da memória humana, carregando as emoções, pensamentos e experiências históricas de diferentes épocas.' },
      { zh: '鲁迅的小说以深刻的社会批判揭示了近代中国的精神困境与变革阵痛。', py: 'Lǔ Xùn de xiǎoshuō yǐ shēnkè de shèhuì pīpàn jiēshì le jìndài Zhōngguó de jīngshén kùnjìng yǔ biàngé zhèntòng.', pt: 'Os romances de Lu Xun revelam, através de uma crítica social profunda, as angústias espirituais e as dores da transformação da China moderna.' },
      { zh: '莫言以魔幻现实主义的笔触重构了中国乡土记忆，获得了诺贝尔文学奖的认可。', py: 'Mò Yán yǐ móhuàn xiànshí zhǔyì de bǐchù chónggòu le Zhōngguó xiāngtǔ jìyì, huòdé le Nuòbèi\'ěr wénxué jiǎng de rènkě.', pt: 'Mo Yan reconstruiu a memória rural chinesa com traços do realismo mágico, sendo reconhecido com o Prêmio Nobel de Literatura.' },
      { zh: '阅读经典文学，不仅是与伟大心灵的对话，也是对自我内心的一次深刻审视。', py: 'Yuèdú jīngdiǎn wénxué, bùjǐn shì yǔ wěidà xīnlíng de duìhuà, yě shì duì zìwǒ nèixīn de yī cì shēnkè shěnshì.', pt: 'Ler literatura clássica não é apenas um diálogo com grandes mentes, mas também um profundo exame do próprio interior.' },
      { zh: '在数字化阅读盛行的今天，如何守护深度阅读的习惯，或许是维系文化传承的关键。', py: 'Zài shùzìhuà yuèdú shèngxíng de jīntiān, rúhé shǒuhù shēndù yuèdú de xíguàn, huòxǔ shì wéijì wénhuà chuánchéng de guānjiàn.', pt: 'Na era em que a leitura digital predomina, preservar o hábito da leitura profunda pode ser a chave para manter a transmissão cultural.' },
    ],
  },
  {
    id: 'hsk6-linguagem-pensamento',
    title: 'Linguagem e Pensamento',
    titleZh: '语言与思维',
    level: 6,
    lines: [
      { zh: '语言不仅是交流的工具，更是塑造思维与认知世界的基本框架。', py: 'Yǔyán bùjǐn shì jiāoliú de gōngjù, gèng shì sùzào sīwéi yǔ rènzhī shìjiè de jīběn kuàngjià.', pt: 'A linguagem não é apenas uma ferramenta de comunicação, mas o quadro fundamental que molda o pensamento e a percepção do mundo.' },
      { zh: '萨丕尔-沃尔夫假说认为，不同语言的使用者会以不同的方式感知和理解现实。', py: 'Sà Pī\'ěr-Wò\'ěrfū jiǎshuō rènwéi, bùtóng yǔyán de shǐyòngzhě huì yǐ bùtóng de fāngshì gǎnzhī hé lǐjiě xiànshí.', pt: 'A hipótese Sapir-Whorf postula que falantes de diferentes línguas percebem e compreendem a realidade de maneiras distintas.' },
      { zh: '汉语以象形为基础的书写系统，培养了汉语使用者独特的整体性和形象性思维。', py: 'Hànyǔ yǐ xiàngxíng wéi jīchǔ de shūxiě xìtǒng, péiyǎng le Hànyǔ shǐyòngzhě dútè de zhěngtǐxìng hé xíngxiàngxìng sīwéi.', pt: 'O sistema de escrita baseado em pictogramas do chinês cultiva um pensamento holístico e imagético único nos falantes do mandarim.' },
      { zh: '多语言能力不仅拓展了沟通的边界，更开辟了理解人类多元文明的认知通道。', py: 'Duō yǔyán nénglì bùjǐn tuòzhǎn le gōutōng de biānjìe, gèng kāipì le lǐjiě rénlèi duōyuán wénmíng de rènzhī tōngdào.', pt: 'A competência multilíngue não apenas expande as fronteiras da comunicação, mas abre canais cognitivos para compreender as civilizações humanas diversas.' },
      { zh: '在人工智能时代，机器能否真正理解语言的深层含义，仍是计算语言学的核心难题。', py: 'Zài réngōng zhìnéng shídài, jīqì néng fǒu zhēnzhèng lǐjiě yǔyán de shēncéng hányì, réng shì jìsuàn yǔyánxué de héxīn nántí.', pt: 'Na era da inteligência artificial, se as máquinas conseguem realmente compreender o significado profundo da linguagem ainda é um problema central da linguística computacional.' },
    ],
  },
  {
    id: 'hsk6-poder-responsabilidade',
    title: 'Poder e Responsabilidade',
    titleZh: '权力与责任',
    level: 6,
    lines: [
      { zh: '权力的本质，历来是政治哲学最核心的议题之一，引发了无数思想家的深刻探讨。', py: 'Quánlì de běnzhì, lì lái shì zhèngzhì zhéxué zuì héxīn de yìtí zhī yī, yǐnfā le wúshù sīxiǎngjiā de shēnkè tàntǎo.', pt: 'A natureza do poder sempre foi um dos temas centrais da filosofia política, despertando reflexões profundas de inúmeros pensadores.' },
      { zh: '孟子认为，君王的权力来自民心，"民为贵，社稷次之，君为轻"。', py: 'Mèngzǐ rènwéi, jūnwáng de quánlì lái zì mínxīn, "mín wéi guì, shèjì cì zhī, jūn wéi qīng".', pt: 'Mêncio acreditava que o poder do governante vem do coração do povo: "o povo é o mais precioso, o Estado vem depois, o governante é o menos importante."' },
      { zh: '现代民主理论则以权力制衡与法治为基础，强调权力必须受到有效约束。', py: 'Xiàndài mínzhǔ lǐlùn zé yǐ quánlì zhìhéng yǔ fǎzhì wéi jīchǔ, qiángdiào quánlì bìxū shòu dào yǒuxiào yuēshù.', pt: 'A teoria democrática moderna baseia-se no equilíbrio de poderes e no Estado de Direito, enfatizando que o poder deve ser efetivamente restringido.' },
      { zh: '权力与责任相辅相成——权力越大，对社会和他人所承担的责任也越重。', py: 'Quánlì yǔ zérèn xiāng fǔ xiāng chéng——quánlì yuè dà, duì shèhuì hé tārén suǒ chéngdān de zérèn yě yuè zhòng.', pt: 'Poder e responsabilidade são complementares — quanto maior o poder, maior a responsabilidade perante a sociedade e os outros.' },
      { zh: '在全球治理日趋复杂的今天，如何构建兼顾效率与公正的权力体系，仍是人类面临的共同挑战。', py: 'Zài quánqiú zhìlǐ rì qū fùzá de jīntiān, rúhé gòujiàn jiāngù xiàolǜ yǔ gōngzhèng de quánlì tǐxì, réng shì rénlèi miànlín de gòngtóng tiǎozhàn.', pt: 'Na era em que a governança global se torna cada vez mais complexa, construir um sistema de poder que concilie eficiência e justiça continua sendo um desafio compartilhado pela humanidade.' },
    ],
  },
  {
    id: 'hsk6-tempo-memoria',
    title: 'O Tempo e a Memória',
    titleZh: '时间与记忆',
    level: 6,
    lines: [
      { zh: '时间是哲学最古老的命题之一，其本质至今仍众说纷纭，难以定论。', py: 'Shíjiān shì zhéxué zuì gǔlǎo de mìngtí zhī yī, qí běnzhì zhìjīn réng zhòng shuō fēn yún, nán yǐ dìnglùn.', pt: 'O tempo é um dos temas mais antigos da filosofia; sua natureza ainda é amplamente debatida e difícil de definir.' },
      { zh: '奥古斯丁曾言："时间是什么？没人问我，我知道；若有人问我，我却说不出来。"', py: 'Àogǔsīdīng céng yán: "Shíjiān shì shénme? Méi rén wèn wǒ, wǒ zhīdào; ruò yǒu rén wèn wǒ, wǒ què shuō bu chūlái."', pt: 'Santo Agostinho disse: "O que é o tempo? Se ninguém me perguntar, eu sei; se quiser explicar a quem me pergunta, não sei."' },
      { zh: '记忆是人类与时间抗衡的方式，通过记忆，逝去的时光得以在意识中复现。', py: 'Jìyì shì rénlèi yǔ shíjiān kànghéng de fāngshì, tōngguò jìyì, shì qù de shíguāng dé yǐ zài yìshí zhōng fùxiàn.', pt: 'A memória é o modo como a humanidade resiste ao tempo; por meio dela, o tempo passado pode se manifestar novamente na consciência.' },
      { zh: '普鲁斯特的《追忆逝水年华》以文学的方式呈现了记忆与时间的复杂纠葛，影响了整个现代文学。', py: 'Pǔlǔsītè de "Zhuīyì Shì Shuǐ Nián Huá" yǐ wénxué de fāngshì chéngxiàn le jìyì yǔ shíjiān de fùzá jiūgě, yǐngxiǎng le zhěnggè xiàndài wénxué.', pt: '"Em Busca do Tempo Perdido" de Proust apresenta literariamente o complexo entrelaçamento de memória e tempo, influenciando toda a literatura moderna.' },
      { zh: '在人工智能可以模拟记忆、预测未来的今天，时间与记忆的意义正在被重新书写。', py: 'Zài réngōng zhìnéng kěyǐ mónǐ jìyì, yùcè wèilái de jīntiān, shíjiān yǔ jìyì de yìyì zhèngzài bèi chóngxīn shūxiě.', pt: 'Na era em que a inteligência artificial pode simular memórias e prever o futuro, o significado do tempo e da memória está sendo reescrito.' },
    ],
  },

  // ── HSK 1 (novos +2) ───────────────────────────────────────────────────
  {
    id: 'hsk1-meu-dia',
    title: 'Meu Dia',
    titleZh: '我的一天',
    level: 1,
    lines: [
      { zh: '早上七点我起床。', py: 'Zǎoshang qī diǎn wǒ qǐchuáng.', pt: 'De manhã às sete horas eu me levanto.' },
      { zh: '我洗脸、刷牙，然后吃早饭。', py: 'Wǒ xǐ liǎn, shuā yá, ránhòu chī zǎofàn.', pt: 'Lavo o rosto, escovo os dentes e depois tomo café da manhã.' },
      { zh: '上午我去上学，下午回家。', py: 'Shàngwǔ wǒ qù shàngxué, xiàwǔ huí jiā.', pt: 'De manhã vou à escola; à tarde volto para casa.' },
      { zh: '晚上我看电视、做作业。', py: 'Wǎnshang wǒ kàn diànshì, zuò zuòyè.', pt: 'À noite eu assisto TV e faço a lição de casa.' },
      { zh: '十点我睡觉，好梦！', py: 'Shí diǎn wǒ shuìjiào, hǎo mèng!', pt: 'Às dez horas durmo. Bons sonhos!' },
    ],
  },
  {
    id: 'hsk1-numeros',
    title: 'Os Números',
    titleZh: '数字',
    level: 1,
    lines: [
      { zh: '一到十，我都会数。', py: 'Yī dào shí, wǒ dōu huì shǔ.', pt: 'De um a dez, eu sei contar todos.' },
      { zh: '我家有三口人：爸爸、妈妈和我。', py: 'Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.', pt: 'Minha família tem três pessoas: papai, mamãe e eu.' },
      { zh: '我有两本书，一支铅笔。', py: 'Wǒ yǒu liǎng běn shū, yī zhī qiānbǐ.', pt: 'Tenho dois livros e um lápis.' },
      { zh: '今天是星期五，明天不上学。', py: 'Jīntiān shì xīngqīwǔ, míngtiān bù shàngxué.', pt: 'Hoje é sexta-feira; amanhã não há escola.' },
      { zh: '我们班有二十个同学。', py: 'Wǒmen bān yǒu èrshí gè tóngxué.', pt: 'Nossa turma tem vinte colegas.' },
    ],
  },

  // ── HSK 2 (novos +2) ───────────────────────────────────────────────────
  {
    id: 'hsk2-biblioteca',
    title: 'Na Biblioteca',
    titleZh: '在图书馆',
    level: 2,
    lines: [
      { zh: '我很喜欢去图书馆看书。', py: 'Wǒ hěn xǐhuan qù túshūguǎn kàn shū.', pt: 'Gosto muito de ir à biblioteca ler.' },
      { zh: '图书馆里很安静，有很多书和杂志。', py: 'Túshūguǎn lǐ hěn ānjìng, yǒu hěn duō shū hé zázhì.', pt: 'Na biblioteca é muito silencioso; tem muitos livros e revistas.' },
      { zh: '我每个星期六都去那里学习两个小时。', py: 'Wǒ měi gè xīngqīliù dōu qù nàlǐ xuéxí liǎng gè xiǎoshí.', pt: 'Vou lá estudar duas horas todo sábado.' },
      { zh: '图书馆的老师很热心，帮我找书。', py: 'Túshūguǎn de lǎoshī hěn rèxīn, bāng wǒ zhǎo shū.', pt: 'A bibliotecária é muito atenciosa e me ajuda a encontrar livros.' },
      { zh: '我借了三本关于中国历史的书。', py: 'Wǒ jiè le sān běn guānyú Zhōngguó lìshǐ de shū.', pt: 'Peguei emprestados três livros sobre a história da China.' },
    ],
  },
  {
    id: 'hsk2-mercado-manha',
    title: 'O Mercado de Manhã',
    titleZh: '早市',
    level: 2,
    lines: [
      { zh: '每天早上，奶奶去早市买菜。', py: 'Měitiān zǎoshang, nǎinai qù zǎoshì mǎi cài.', pt: 'Toda manhã, a vovó vai ao mercado comprar legumes.' },
      { zh: '那里有很多新鲜的蔬菜和水果。', py: 'Nàlǐ yǒu hěn duō xīnxiān de shūcài hé shuǐguǒ.', pt: 'Lá tem muitos vegetais e frutas frescos.' },
      { zh: '奶奶喜欢和卖菜的人说话，很热闹。', py: 'Nǎinai xǐhuan hé mài cài de rén shuōhuà, hěn rènào.', pt: 'A vovó gosta de conversar com os vendedores; é muito animado.' },
      { zh: '今天买了西红柿、黄瓜和豆腐。', py: 'Jīntiān mǎi le xīhóngshì, huángguā hé dòufu.', pt: 'Hoje comprou tomates, pepinos e tofu.' },
      { zh: '奶奶做的饭总是很好吃。', py: 'Nǎinai zuò de fàn zǒng shì hěn hǎochī.', pt: 'A comida que a vovó faz é sempre muito gostosa.' },
    ],
  },

  // ── HSK 3 (novos +2) ───────────────────────────────────────────────────
  {
    id: 'hsk3-amizade',
    title: 'A Amizade',
    titleZh: '友谊',
    level: 3,
    lines: [
      { zh: '我和李明认识三年了，他是我最好的朋友。', py: 'Wǒ hé Lǐ Míng rènshi sān nián le, tā shì wǒ zuì hǎo de péngyou.', pt: 'Já conheço Li Ming há três anos; ele é meu melhor amigo.' },
      { zh: '我们每天一起上学，互相帮助学习。', py: 'Wǒmen měitiān yīqǐ shàngxué, hùxiāng bāngzhù xuéxí.', pt: 'Vamos à escola juntos todo dia e nos ajudamos mutuamente nos estudos.' },
      { zh: '上个月他生病了，我去医院看他，还带了他爱吃的食物。', py: 'Shàng ge yuè tā shēngbìng le, wǒ qù yīyuàn kàn tā, hái dài le tā ài chī de shíwù.', pt: 'No mês passado ele ficou doente; fui ao hospital visitá-lo e levei comida que ele gosta.' },
      { zh: '他说："有你这样的朋友，真幸运。"', py: 'Tā shuō: "Yǒu nǐ zhèyàng de péngyou, zhēn xìngyùn."', pt: 'Ele disse: "Ter um amigo como você é muita sorte."' },
      { zh: '我觉得真正的友谊比任何东西都重要。', py: 'Wǒ juéde zhēnzhèng de yǒuyì bǐ rènhé dōngxi dōu zhòngyào.', pt: 'Acho que a verdadeira amizade é mais importante do que qualquer coisa.' },
    ],
  },
  {
    id: 'hsk3-quatro-estacoes',
    title: 'As Quatro Estações',
    titleZh: '四季',
    level: 3,
    lines: [
      { zh: '中国的四季分明，每个季节都有不同的美丽。', py: 'Zhōngguó de sìjì fēnmíng, měi gè jìjié dōu yǒu bùtóng de měilì.', pt: 'As quatro estações da China são bem definidas; cada uma tem sua beleza particular.' },
      { zh: '春天花开，夏天绿树成荫，很凉快。', py: 'Chūntiān huā kāi, xiàtiān lǜ shù chéng yīn, hěn liángkuai.', pt: 'Na primavera as flores desabrocham; no verão as árvores dão sombra, é muito fresco.' },
      { zh: '秋天叶子变红变黄，景色非常漂亮。', py: 'Qiūtiān yèzi biàn hóng biàn huáng, jǐngsè fēicháng piàoliang.', pt: 'No outono as folhas ficam vermelhas e amarelas; a paisagem é muito bonita.' },
      { zh: '冬天下雪，孩子们出去堆雪人，玩得很开心。', py: 'Dōngtiān xià xuě, háizimen chūqù duī xuěrén, wán de hěn kāixīn.', pt: 'No inverno neva; as crianças saem para fazer bonecos de neve e se divertem muito.' },
      { zh: '我最喜欢秋天，因为天气不冷不热，正好。', py: 'Wǒ zuì xǐhuan qiūtiān, yīnwèi tiānqì bù lěng bú rè, zhènghǎo.', pt: 'Gosto mais do outono porque o tempo não é nem frio nem quente — é perfeito.' },
    ],
  },

  // ── HSK 4 (novos +2) ───────────────────────────────────────────────────
  {
    id: 'hsk4-turismo',
    title: 'Turismo na China',
    titleZh: '中国旅游',
    level: 4,
    lines: [
      { zh: '中国幅员辽阔，旅游资源极为丰富，每年吸引数以亿计的国内外游客。', py: 'Zhōngguó fúyuán liáokuò, lǚyóu zīyuán jí wéi fēngfù, měi nián xīyǐn shù yǐ yì jì de guónèi wài yóukè.', pt: 'A China é vasta e possui recursos turísticos extremamente ricos, atraindo centenas de milhões de turistas a cada ano.' },
      { zh: '从北方的长城到南方的桂林山水，自然与人文景观令人叹为观止。', py: 'Cóng běifāng de Chángchéng dào nánfāng de Guìlín shānshuǐ, zìrán yǔ rénwén jǐngguān lìng rén tàn wéi guān zhǐ.', pt: 'Da Grande Muralha no norte às paisagens de Guilin no sul, os cenários naturais e culturais são de tirar o fôlego.' },
      { zh: '近年来，中国的民宿、特色小镇等新型旅游业态迅速发展。', py: 'Jìn nián lái, Zhōngguó de mínsù, tèsè xiǎozhèn děng xīnxíng lǚyóu yètài xùnsù fāzhǎn.', pt: 'Nos últimos anos, novas formas de turismo como pousadas locais e pequenas cidades típicas têm se desenvolvido rapidamente.' },
      { zh: '旅游业对于传播中国文化、促进地方经济发展起着重要作用。', py: 'Lǚyóuyè duìyú chuánbō Zhōngguó wénhuà, cùjìn dìfāng jīngjì fāzhǎn qǐ zhe zhòngyào zuòyòng.', pt: 'A indústria do turismo desempenha um papel importante na divulgação da cultura chinesa e no desenvolvimento econômico local.' },
      { zh: '可持续旅游的理念逐渐深入人心，越来越多的游客注重保护旅游目的地的生态环境。', py: 'Kě chíxù lǚyóu de lǐniàn zhújiàn shēnrù rénxīn, yuè lái yuè duō de yóukè zhùzhòng bǎohù lǚyóu mùdìdì de shēngtài huánjìng.', pt: 'O conceito de turismo sustentável está ganhando espaço, com cada vez mais turistas preocupados em preservar o meio ambiente dos destinos.' },
    ],
  },
  {
    id: 'hsk4-voluntariado',
    title: 'O Voluntariado',
    titleZh: '志愿服务',
    level: 4,
    lines: [
      { zh: '越来越多的年轻人开始参与志愿服务活动，贡献自己的力量。', py: 'Yuè lái yuè duō de niánqīng rén kāishǐ cānyù zhìyuàn fúwù huódòng, gòngxiàn zìjǐ de lìliàng.', pt: 'Cada vez mais jovens estão participando de atividades voluntárias, contribuindo com suas forças.' },
      { zh: '志愿者们在医院、学校、社区等地方提供各种帮助。', py: 'Zhìyuànzhěmen zài yīyuàn, xuéxiào, shèqū děng dìfang tígōng gèzhǒng bāngzhù.', pt: 'Os voluntários prestam diversos tipos de ajuda em hospitais, escolas, comunidades e outros lugares.' },
      { zh: '通过志愿服务，年轻人不仅帮助了他人，也丰富了自己的人生经历。', py: 'Tōngguò zhìyuàn fúwù, niánqīng rén bùjǐn bāngzhù le tārén, yě fēngfù le zìjǐ de rénshēng jīnglì.', pt: 'Através do voluntariado, os jovens não só ajudam os outros, mas também enriquecem suas próprias experiências de vida.' },
      { zh: '很多大学把志愿服务记录列入学生综合评价体系。', py: 'Hěn duō dàxué bǎ zhìyuàn fúwù jìlù liè rù xuésheng zōnghé píngjià tǐxì.', pt: 'Muitas universidades incluem o registro de voluntariado no sistema de avaliação integral dos alunos.' },
      { zh: '帮助他人的同时，我们也在建立一个更有爱心的社会。', py: 'Bāngzhù tārén de tóngshí, wǒmen yě zài jiànlì yī gè gèng yǒu àixīn de shèhuì.', pt: 'Ao ajudar os outros, também estamos construindo uma sociedade mais solidária.' },
    ],
  },

  // ── HSK 5 (novos +2) ───────────────────────────────────────────────────
  {
    id: 'hsk5-inteligencia-artificial',
    title: 'Inteligência Artificial',
    titleZh: '人工智能',
    level: 5,
    lines: [
      { zh: '人工智能技术的飞速发展正在深刻改变着各行各业的运作方式。', py: 'Réngōng zhìnéng jìshù de fēisù fāzhǎn zhèngzài shēnkè gǎibiàn zhe gè háng gè yè de yùnzuò fāngshì.', pt: 'O rápido desenvolvimento da tecnologia de inteligência artificial está transformando profundamente o modo de operação de todos os setores.' },
      { zh: '从医疗诊断到自动驾驶，人工智能的应用场景日益广泛。', py: 'Cóng yīliáo zhěnduàn dào zìdòng jiàshǐ, réngōng zhìnéng de yìngyòng chǎngjǐng rìyì guǎngfàn.', pt: 'Do diagnóstico médico à condução autônoma, os cenários de aplicação da IA são cada vez mais abrangentes.' },
      { zh: '大量重复性工作将被人工智能取代，由此引发的就业结构变化不容忽视。', py: 'Dàliàng zhòngfùxìng gōngzuò jiāng bèi réngōng zhìnéng qǔdài, yóucǐ yǐnfā de jiùyè jiégòu biànhuà bùróng hūshì.', pt: 'Uma grande quantidade de trabalhos repetitivos será substituída pela IA; as mudanças na estrutura do emprego daí resultantes não podem ser ignoradas.' },
      { zh: '与此同时，人工智能也催生了大量新兴职业和发展机遇。', py: 'Yǔ cǐ tóngshí, réngōng zhìnéng yě cuīshēng le dàliàng xīnxīng zhíyè hé fāzhǎn jīyù.', pt: 'Ao mesmo tempo, a IA também gerou uma grande quantidade de novas profissões e oportunidades de desenvolvimento.' },
      { zh: '如何在拥抱技术进步的同时，确保人工智能的发展符合人类的整体利益，是当代最重要的议题之一。', py: 'Rúhé zài yōngbào jìshù jìnbù de tóngshí, quèbǎo réngōng zhìnéng de fāzhǎn fúhé rénlèi de zhěngtǐ lìyì, shì dāngdài zuì zhòngyào de yìtí zhī yī.', pt: 'Como abraçar o progresso tecnológico garantindo que o desenvolvimento da IA sirva aos interesses gerais da humanidade é um dos temas mais importantes da atualidade.' },
    ],
  },
  {
    id: 'hsk5-transporte',
    title: 'Redes de Transporte',
    titleZh: '交通网络',
    level: 5,
    lines: [
      { zh: '中国拥有世界上规模最大的高速铁路网络，将各大城市紧密相连。', py: 'Zhōngguó yōngyǒu shìjiè shàng guīmó zuìdà de gāosù tiělù wǎngluò, jiāng gè dà chéngshì jǐnmì xiāng lián.', pt: 'A China possui a maior rede de ferrovias de alta velocidade do mundo, conectando estreitamente as principais cidades.' },
      { zh: '高铁的普及大大缩短了城市间的时空距离，有力促进了区域经济的一体化。', py: 'Gāotiě de pǔjí dàdà suōduǎn le chéngshì jiān de shíkōng jùlí, yǒulì cùjìn le qūyù jīngjì de yītǐhuà.', pt: 'A popularização do trem de alta velocidade encurtou enormemente as distâncias entre cidades e impulsionou fortemente a integração econômica regional.' },
      { zh: '城市地铁网络的快速扩张也极大改善了市民的出行体验。', py: 'Chéngshì dìtiě wǎngluò de kuàisù kuòzhāng yě jídà gǎishàn le shìmín de chūxíng tǐyàn.', pt: 'A rápida expansão das redes de metrô urbano também melhorou enormemente a experiência de deslocamento dos cidadãos.' },
      { zh: '新能源汽车的快速推广正在重塑中国城市的交通生态。', py: 'Xīn néngyuán qìchē de kuàisù tuīguǎng zhèngzài chóngsù Zhōngguó chéngshì de jiāotōng shēngtài.', pt: 'A rápida expansão dos veículos elétricos está remodelando o ecossistema de transporte das cidades chinesas.' },
      { zh: '未来的智慧交通系统将通过大数据和人工智能实现更高效、更安全的出行管理。', py: 'Wèilái de zhìhuì jiāotōng xìtǒng jiāng tōngguò dà shùjù hé réngōng zhìnéng shíxiàn gèng gāoxiào, gèng ānquán de chūxíng guǎnlǐ.', pt: 'O futuro sistema de transporte inteligente usará big data e IA para uma gestão de mobilidade mais eficiente e segura.' },
    ],
  },

  // ── HSK 6 (novos +2) ───────────────────────────────────────────────────
  {
    id: 'hsk6-ecologia-etica',
    title: 'Crise Ecológica e Ética',
    titleZh: '生态危机与伦理',
    level: 6,
    lines: [
      { zh: '人类中心主义长期主导着人与自然的关系，将自然视为可供无限利用的资源库。', py: 'Rénlèi zhōngxīnzhǔyì chángqī zhǔdǎo zhe rén yǔ zìrán de guānxi, jiāng zìrán shì wéi kě gōng wúxiàn lìyòng de zīyuán kù.', pt: 'O antropocentrismo dominou por longo tempo a relação entre o ser humano e a natureza, tratando-a como um reservatório de recursos de exploração ilimitada.' },
      { zh: '然而，生态系统的急剧退化与生物多样性的丧失，迫使人类重新审视自身在自然界中的位置。', py: "Rán'ér, shēngtài xìtǒng de jíjù tuìhuà yǔ shēngwù duōyàngxìng de sàngshī, pòshǐ rénlèi chóngxīn shěnshì zìshēn zài zìrán jiè zhōng de wèizhi.", pt: 'No entanto, a rápida degradação dos ecossistemas e a perda da biodiversidade forçam a humanidade a reexaminar seu lugar na natureza.' },
      { zh: '非人类中心主义伦理学主张，自然界的每一个物种都有其内在价值，不应仅以对人类是否有用来衡量。', py: 'Fēi rénlèi zhōngxīnzhǔyì lúnlǐxué zhǔzhāng, zìrán jiè de měi yī gè wùzhǒng dōu yǒu qí nèizài jiàzhí, bù yīng jǐn yǐ duì rénlèi shìfǒu yǒuyòng lái héngliàng.', pt: 'A ética não-antropocêntrica defende que cada espécie da natureza tem valor intrínseco, não devendo ser avaliada apenas por sua utilidade para os seres humanos.' },
      { zh: '建立人与自然和谐共生的新型关系，既需要制度层面的约束，更需要每个个体价值观念的根本转变。', py: 'Jiànlì rén yǔ zìrán héxié gòngshēng de xīnxíng guānxi, jì xūyào zhìdù céngmiàn de yuēshù, gèng xūyào měi gè gètǐ jiàzhíguānniàn de gēnběn zhuǎnbiàn.', pt: 'Estabelecer uma nova relação de coexistência harmoniosa entre o ser humano e a natureza requer não apenas restrições institucionais, mas também uma transformação fundamental nos valores de cada indivíduo.' },
      { zh: '生态文明的构建，或许是人类文明史上最深刻的一次价值革命。', py: 'Shēngtài wénmíng de gòujiàn, huòxǔ shì rénlèi wénmíng shǐ shàng zuì shēnkè de yī cì jiàzhí gémìng.', pt: 'A construção de uma civilização ecológica pode ser a mais profunda revolução de valores na história da civilização humana.' },
    ],
  },
  {
    id: 'hsk6-dialogo-oriente-ocidente',
    title: 'Oriente e Ocidente',
    titleZh: '东西方对话',
    level: 6,
    lines: [
      { zh: '东西方文明之间的对话与碰撞，构成了近现代世界历史最重要的主题之一。', py: 'Dōng xīfāng wénmíng zhī jiān de duìhuà yǔ pèngzhuàng, gòuchéng le jìn xiàndài shìjiè lìshǐ zuì zhòngyào de zhǔtí zhī yī.', pt: 'O diálogo e o confronto entre as civilizações oriental e ocidental formam um dos temas mais importantes da história do mundo moderno.' },
      { zh: '启蒙运动时期，欧洲思想家从中国文化中汲取灵感，对儒家思想产生了浓厚的兴趣。', py: 'Qǐméng yùndòng shíqī, Ōuzhōu sīxiǎngjiā cóng Zhōngguó wénhuà zhōng jíqǔ línggǎn, duì Rújiā sīxiǎng chǎnshēng le nónghòu de xìngqù.', pt: 'Durante o Iluminismo, pensadores europeus buscaram inspiração na cultura chinesa e demonstraram grande interesse pelo confucionismo.' },
      { zh: '近代以来，东方知识分子在向西方学习的同时，也在反思如何守护本土文化的根基。', py: 'Jìndài yǐlái, dōngfāng zhīshifènzǐ zài xiàng xīfāng xuéxí de tóngshí, yě zài fǎnsī rúhé shǒuhù běntǔ wénhuà de gēnjī.', pt: 'Na era moderna, os intelectuais orientais, ao aprender com o Ocidente, também refletiam sobre como preservar as raízes da cultura local.' },
      { zh: '在全球化深度推进的今天，东西方文明互鉴已成为构建人类命运共同体的重要基础。', py: 'Zài quánqiúhuà shēndù tuījìn de jīntiān, dōng xīfāng wénmíng hù jiàn yǐ chéng wéi gòujiàn rénlèi mìngyùn gòngtóngtǐ de zhòngyào jīchǔ.', pt: 'Na era da globalização profunda, o aprendizado mútuo entre as civilizações oriental e ocidental tornou-se uma base importante para a construção de uma comunidade de destino compartilhado.' },
      { zh: '真正平等的文明对话，需要双方都愿意以开放、谦逊的心态超越文化偏见，寻求共同的人类价值。', py: 'Zhēnzhèng píngděng de wénmíng duìhuà, xūyào shuāngfāng dōu yuànyì yǐ kāifàng, qiānxùn de xīntài chāoyuè wénhuà piānjiàn, xúnqiú gòngtóng de rénlèi jiàzhí.', pt: 'Um verdadeiro diálogo civilizacional igualitário exige que ambos os lados estejam dispostos a superar preconceitos culturais com abertura e humildade, em busca de valores humanos comuns.' },
    ],
  },
];
