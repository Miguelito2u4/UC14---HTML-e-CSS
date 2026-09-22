const elementsData = [
    
    { number: 1, symbol: "H", name: "Hidrogênio", mass: "1.008", category: "nao-metal", row: 1, col: 1, state: "Gás", config: "1s¹", desc: "Elemento mais abundante no universo. Gás incolor, inodoro e altamente inflamável." },
    { number: 2, symbol: "He", name: "Hélio", mass: "4.0026", category: "gas-nobre", row: 1, col: 18, state: "Gás", config: "1s²", desc: "Gás nobre inerte, não reativo, amplamente usado em balões e ressonância magnética." },

    { number: 3, symbol: "Li", name: "Lítio", mass: "6.94", category: "alcalino", row: 2, col: 1, state: "Sólido", config: "[He] 2s¹", desc: "Metal alcalino macio e leve, essencial na fabricação de baterias recarregáveis." },
    { number: 4, symbol: "Be", name: "Berílio", mass: "9.0122", category: "alcalino-terreo", row: 2, col: 2, state: "Sólido", config: "[He] 2s²", desc: "Metal leve e rígido com alto ponto de fusão, usado na indústria aeroespacial." },
    { number: 5, symbol: "B", name: "Boro", mass: "10.81", category: "semimetal", row: 2, col: 13, state: "Sólido", config: "[He] 2s² 2p¹", desc: "Semimetal usado em vidros borossilicatos resistentes ao calor e inseticidas." },
    { number: 6, symbol: "C", name: "Carbono", mass: "12.011", category: "nao-metal", row: 2, col: 14, state: "Sólido", config: "[He] 2s² 2p²", desc: "Base da química orgânica e de toda a vida conhecida. Forma diamante e grafite." },
    { number: 7, symbol: "N", name: "Nitrogênio", mass: "14.007", category: "nao-metal", row: 2, col: 15, state: "Gás", config: "[He] 2s² 2p³", desc: "Gás que compõe cerca de 78% da atmosfera terrestre. Essencial para proteínas." },
    { number: 8, symbol: "O", name: "Oxigênio", mass: "15.999", category: "nao-metal", row: 2, col: 16, state: "Gás", config: "[He] 2s² 2p⁴", desc: "Vital para a respiração de organismos aeróbicos e para reações de combustão." },
    { number: 9, symbol: "F", name: "Flúor", mass: "18.998", category: "halogenio", row: 2, col: 17, state: "Gás", config: "[He] 2s² 2p⁵", desc: "O elemento quimicamente mais reativo e eletronegativo da tabela periódica." },
    { number: 10, symbol: "Ne", name: "Neônio", mass: "20.180", category: "gas-nobre", row: 2, col: 18, state: "Gás", config: "[He] 2s² 2p⁶", desc: "Gás nobre inerte, famoso pelo brilho vermelho-alaranjado em letreiros luminosos." },

    { number: 11, symbol: "Na", name: "Sódio", mass: "22.990", category: "alcalino", row: 3, col: 1, state: "Sólido", config: "[Ne] 3s¹", desc: "Metal alcalino altamente reativo. Componente essencial do sal de cozinha (NaCl)." },
    { number: 12, symbol: "Mg", name: "Magnésio", mass: "24.305", category: "alcalino-terreo", row: 3, col: 2, state: "Sólido", config: "[Ne] 3s²", desc: "Metal leve que queima com luz branca brilhante. Presente na molécula de clorofila." },
    { number: 13, symbol: "Al", name: "Alumínio", mass: "26.982", category: "pos-transicao", row: 3, col: 13, state: "Sólido", config: "[Ne] 3s² 3p¹", desc: "Metal leve, não magnético e resistente à corrosão, muito usado em embalagens." },
    { number: 14, symbol: "Si", name: "Silício", mass: "28.085", category: "semimetal", row: 3, col: 14, state: "Sólido", config: "[Ne] 3s² 3p²", desc: "Semicondução fundamental na fabricação de microchips e componentes eletrônicos." },
    { number: 15, symbol: "P", name: "Fósforo", mass: "30.974", category: "nao-metal", row: 3, col: 15, state: "Sólido", config: "[Ne] 3s² 3p³", desc: "Elemento essencial para os seres vivos, fazendo parte da estrutura do DNA e do ATP." },
    { number: 16, symbol: "S", name: "Enxofre", mass: "32.06", category: "nao-metal", row: 3, col: 16, state: "Sólido", config: "[Ne] 3s² 3p⁴", desc: "Sólido amarelo usado na produção de fertilizantes, pólvora e ácido sulfúrico." },
    { number: 17, symbol: "Cl", name: "Cloro", mass: "35.45", category: "halogenio", row: 3, col: 17, state: "Gás", config: "[Ne] 3s² 3p⁵", desc: "Gás tóxico amarelo-esverdeado, amplamente utilizado no tratamento e purificação da água." },
    { number: 18, symbol: "Ar", name: "Argônio", mass: "39.948", category: "gas-nobre", row: 3, col: 18, state: "Gás", config: "[Ne] 3s² 3p⁶", desc: "Terceiro gás mais abundante na atmosfera terrestre, usado na soldagem de metais." },

    { number: 19, symbol: "K", name: "Potássio", mass: "39.098", category: "alcalino", row: 4, col: 1, state: "Sólido", config: "[Ar] 4s¹", desc: "Metal alcalino reativo, essencial para o funcionamento celular e impulsos nervosos." },
    { number: 20, symbol: "Ca", name: "Cálcio", mass: "40.078", category: "alcalino-terreo", row: 4, col: 2, state: "Sólido", config: "[Ar] 4s²", desc: "Fundamental para os ossos e dentes, bem como para a construção civil (cimento)." },
    { number: 21, symbol: "Sc", name: "Escândio", mass: "44.956", category: "transicao", row: 4, col: 3, state: "Sólido", config: "[Ar] 3d¹ 4s²", desc: "Metal de transição leve, utilizado em ligas de alumínio para equipamentos esportivos." },
    { number: 22, symbol: "Ti", name: "Titânio", mass: "47.867", category: "transicao", row: 4, col: 4, state: "Sólido", config: "[Ar] 3d² 4s²", desc: "Forte, leve e altamente resistente à corrosão, muito usado em implantes médicos." },
    { number: 23, symbol: "V", name: "Vanádio", mass: "50.942", category: "transicao", row: 4, col: 5, state: "Sólido", config: "[Ar] 3d³ 4s²", desc: "Usado principalmente na fabricação de ligas de aço extremamente resistentes." },
    { number: 24, symbol: "Cr", name: "Cromo", mass: "51.996", category: "transicao", row: 4, col: 6, state: "Sólido", config: "[Ar] 3d⁵ 4s¹", desc: "Metal lustroso usado para cromagem e na produção de aço inoxidável." },
    { number: 25, symbol: "Mn", name: "Manganês", mass: "54.938", category: "transicao", row: 4, col: 7, state: "Sólido", config: "[Ar] 3d⁵ 4s²", desc: "Essencial na siderurgia para melhorar a resistência e dureza do aço." },
    { number: 26, symbol: "Fe", name: "Ferro", mass: "55.845", category: "transicao", row: 4, col: 8, state: "Sólido", config: "[Ar] 3d⁶ 4s²", desc: "O metal mais utilizado no planeta. Componente principal da hemoglobina do sangue." },
    { number: 27, symbol: "Co", name: "Cobalto", mass: "58.933", category: "transicao", row: 4, col: 9, state: "Sólido", config: "[Ar] 3d⁷ 4s²", desc: "Utilizado em baterias de íon de lítio e para conferir cor azul intensa a vidros." },
    { number: 28, symbol: "Ni", name: "Níquel", mass: "58.693", category: "transicao", row: 4, col: 10, state: "Sólido", config: "[Ar] 3d⁸ 4s²", desc: "Metal resistente à corrosão, usado em moedas, baterias e ligas metálicas." },
    { number: 29, symbol: "Cu", name: "Cobre", mass: "63.546", category: "transicao", row: 4, col: 11, state: "Sólido", config: "[Ar] 3d¹⁰ 4s¹", desc: "Excelente condutor elétrico e térmico, indispensável na fiação elétrica." },
    { number: 30, symbol: "Zn", name: "Zinco", mass: "65.38", category: "transicao", row: 4, col: 12, state: "Sólido", config: "[Ar] 3d¹⁰ 4s²", desc: "Usado na galvanização do aço para prevenir a ferrugem e em ligas de latão." },
    { number: 31, symbol: "Ga", name: "Gálio", mass: "69.723", category: "pos-transicao", row: 4, col: 13, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p¹", desc: "Metal que se derrete na temperatura das mãos humanas (cerca de 29.7°C)." },
    { number: 32, symbol: "Ge", name: "Germânio", mass: "72.630", category: "semimetal", row: 4, col: 14, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p²", desc: "Semicondução importante para fibras ópticas e lentes de visão noturna infravermelha." },
    { number: 33, symbol: "As", name: "Arsênio", mass: "74.922", category: "semimetal", row: 4, col: 15, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p³", desc: "Historicamente famoso como veneno, hoje é usado em semicondutores e pesticidas." },
    { number: 34, symbol: "Se", name: "Selênio", mass: "78.971", category: "nao-metal", row: 4, col: 16, state: "Sólido", config: "[Ar] 3d¹⁰ 4s² 4p⁴", desc: "Utilizado em células fotovoltaicas, xampus anticaspa e suplementos nutricionais." },
    { number: 35, symbol: "Br", name: "Bromo", mass: "79.904", category: "halogenio", row: 4, col: 17, state: "Líquido", config: "[Ar] 3d¹⁰ 4s² 4p⁵", desc: "Único elemento não metálico que se encontra no estado líquido à temperatura ambiente." },
    { number: 36, symbol: "Kr", name: "Criptônio", mass: "83.798", category: "gas-nobre", row: 4, col: 18, state: "Gás", config: "[Ar] 3d¹⁰ 4s² 4p⁶", desc: "Gás nobre usado em flashes fotográficos de alta velocidade e lâmpadas fluorescentes." },

    { number: 37, symbol: "Rb", name: "Rubídio", mass: "85.468", category: "alcalino", row: 5, col: 1, state: "Sólido", config: "[Kr] 5s¹", desc: "Metal alcalino muito reativo que inflama espontaneamente em contato com o ar." },
    { number: 38, symbol: "Sr", name: "Estrôncio", mass: "87.62", category: "alcalino-terreo", row: 5, col: 2, state: "Sólido", config: "[Kr] 5s²", desc: "Metal cujos sais queimam produzindo uma cor vermelha brilhante em fogos de artifício." },
    { number: 39, symbol: "Y", name: "Ítrio", mass: "88.906", category: "transicao", row: 5, col: 3, state: "Sólido", config: "[Kr] 4d¹ 5s²", desc: "Usado na fabricação de LEDs, lasers e supercondutores de alta temperatura." },
    { number: 40, symbol: "Zr", name: "Zircônio", mass: "91.224", category: "transicao", row: 5, col: 4, state: "Sólido", config: "[Kr] 4d² 5s²", desc: "Resistente à corrosão, usado em reatores nucleares e em joias (zircônia cúbica)." },
    { number: 41, symbol: "Nb", name: "Nióbio", mass: "92.906", category: "transicao", row: 5, col: 5, state: "Sólido", config: "[Kr] 4d⁴ 5s¹", desc: "Metal usado em ligas de alta resistência para turbinas de avião e tubulações." },
    { number: 42, symbol: "Mo", name: "Molibdênio", mass: "95.95", category: "transicao", row: 5, col: 6, state: "Sólido", config: "[Kr] 4d⁵ 5s¹", desc: "Possui alto ponto de fusão, usado em ligas de aço para alta pressão e calor." },
    { number: 43, symbol: "Tc", name: "Tecnécio", mass: "(98)", category: "transicao", row: 5, col: 7, state: "Sólido", config: "[Kr] 4d⁵ 5s²", desc: "Primeiro elemento produzido sinteticamente. Usado em exames de medicina nuclear." },
    { number: 44, symbol: "Ru", name: "Rutênio", mass: "101.07", category: "transicao", row: 5, col: 8, state: "Sólido", config: "[Kr] 4d⁷ 5s¹", desc: "Metal raro do grupo da platina, usado para endurecer ligas e em contatos elétricos." },
    { number: 45, symbol: "Rh", name: "Ródio", mass: "102.91", category: "transicao", row: 5, col: 9, state: "Sólido", config: "[Kr] 4d⁸ 5s¹", desc: "Um dos metais mais valiosos do mundo, usado como catalisador em escapamentos." },
    { number: 46, symbol: "Pd", name: "Paládio", mass: "106.42", category: "transicao", row: 5, col: 10, state: "Sólido", config: "[Kr] 4d¹⁰", desc: "Metal nobre capaz de absorver até 900 vezes seu volume em hidrogênio." },
    { number: 47, symbol: "Ag", name: "Prata", mass: "107.87", category: "transicao", row: 5, col: 11, state: "Sólido", config: "[Kr] 4d¹⁰ 5s¹", desc: "Elemento com a maior condutividade elétrica e térmica de todos os metais." },
    { number: 48, symbol: "Cd", name: "Cádmio", mass: "112.41", category: "transicao", row: 5, col: 12, state: "Sólido", config: "[Kr] 4d¹⁰ 5s²", desc: "Metal macio e tóxico, usado no passado em baterias recarregáveis de Níquel-Cádmio." },
    { number: 49, symbol: "In", name: "Índio", mass: "114.82", category: "pos-transicao", row: 5, col: 13, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p¹", desc: "Fundamental para telas sensíveis ao toque (touchscreen) em smartphones e TVs." },
    { number: 50, symbol: "Sn", name: "Estanho", mass: "118.71", category: "pos-transicao", row: 5, col: 14, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p²", desc: "Metal prateado usado para revestir latas de alimentos e em soldas eletrônicas." },
    { number: 51, symbol: "Sb", name: "Antimônio", mass: "121.76", category: "semimetal", row: 5, col: 15, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p³", desc: "Semimetal usado como retardante de chamas e para endurecer ligas de chumbo." },
    { number: 52, symbol: "Te", name: "Telúrio", mass: "127.60", category: "semimetal", row: 5, col: 16, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p⁴", desc: "Semimetal raro usado em painéis solares de película fina e dispositivos termoelétricos." },
    { number: 53, symbol: "I", name: "Iodo", mass: "126.90", category: "halogenio", row: 5, col: 17, state: "Sólido", config: "[Kr] 4d¹⁰ 5s² 5p⁵", desc: "Sólido roxo-escuro essencial na dieta para o funcionamento da glândula tireoide." },
    { number: 54, symbol: "Xe", name: "Xenônio", mass: "131.29", category: "gas-nobre", row: 5, col: 18, state: "Gás", config: "[Kr] 4d¹⁰ 5s² 5p⁶", desc: "Gás nobre pesado, usado em lâmpadas de faróis automotivos de alta intensidade e anestesia." },

    { number: 55, symbol: "Cs", name: "Césio", mass: "132.91", category: "alcalino", row: 6, col: 1, state: "Sólido", config: "[Xe] 6s¹", desc: "O metal mais reativo de todos. É utilizado para definir o segundo em relógios atômicos." },
    { number: 56, symbol: "Ba", name: "Bário", mass: "137.33", category: "alcalino-terreo", row: 6, col: 2, state: "Sólido", config: "[Xe] 6s²", desc: "Usado como contraste em exames de raio-X do trato gastrointestinal." },
    { number: 57, symbol: "La", name: "Lantanio", mass: "138.91", category: "lantanideo", row: 9, col: 4, state: "Sólido", config: "[Xe] 5d¹ 6s²", desc: "Início da série dos Lantanídeos; usado em lentes de câmeras fotográficas." },
    { number: 58, symbol: "Ce", name: "Cério", mass: "140.12", category: "lantanideo", row: 9, col: 5, state: "Sólido", config: "[Xe] 4f¹ 5d¹ 6s²", desc: "Metal que gera faíscas quando raspado; usado nas pedras de isqueiros." },
    { number: 59, symbol: "Pr", name: "Praseodímio", mass: "140.91", category: "lantanideo", row: 9, col: 6, state: "Sólido", config: "[Xe] 4f³ 6s²", desc: "Dá cor amarela-esverdeada a óculos de proteção de soldadores." },
    { number: 60, symbol: "Nd", name: "Neodímio", mass: "144.24", category: "lantanideo", row: 9, col: 7, state: "Sólido", config: "[Xe] 4f⁴ 6s²", desc: "Usado para criar os ímãs permanentes mais fortes do mundo (ímãs de Neodímio)." },
    { number: 61, symbol: "Pm", name: "Promécio", mass: "(145)", category: "lantanideo", row: 9, col: 8, state: "Sólido", config: "[Xe] 4f⁵ 6s²", desc: "Lantanídeo radioativo sintético usado em baterias nucleares de longa duração." },
    { number: 62, symbol: "Sm", name: "Samário", mass: "150.36", category: "lantanideo", row: 9, col: 9, state: "Sólido", config: "[Xe] 4f⁶ 6s²", desc: "Utilizado em ímãs que operam sob altíssimas temperaturas e em tratamentos do Câncer." },
    { number: 63, symbol: "Eu", name: "Európio", mass: "151.96", category: "lantanideo", row: 9, col: 10, state: "Sólido", config: "[Xe] 4f⁷ 6s²", desc: "Elemento fósforo que emite luz vermelha nas telas de TV e notas de Euro antifraude." },
    { number: 64, symbol: "Gd", name: "Gadolínio", mass: "157.25", category: "lantanideo", row: 9, col: 11, state: "Sólido", config: "[Xe] 4f⁷ 5d¹ 6s²", desc: "Usado como agente de contraste intravenoso em exames de ressonância magnética." },
    { number: 65, symbol: "Tb", name: "Térbio", mass: "158.93", category: "lantanideo", row: 9, col: 12, state: "Sólido", config: "[Xe] 4f⁹ 6s²", desc: "Emite luz verde brilhante quando excitado; usado em displays e lâmpadas eficientes." },
    { number: 66, symbol: "Dy", name: "Disprósio", mass: "162.50", category: "lantanideo", row: 9, col: 13, state: "Sólido", config: "[Xe] 4f¹⁰ 6s²", desc: "Adicionado a ímãs de neodímio para que não percam o magnetismo no calor." },
    { number: 67, symbol: "Ho", name: "Hólmio", mass: "164.93", category: "lantanideo", row: 9, col: 14, state: "Sólido", config: "[Xe] 4f¹¹ 6s²", desc: "Possui as maiores propriedades magnéticas conhecidas; usado em cirurgias a laser." },
    { number: 68, symbol: "Er", name: "Érbio", mass: "167.26", category: "lantanideo", row: 9, col: 15, state: "Sólido", config: "[Xe] 4f¹² 6s²", desc: "Usado como amplificador de sinal em cabos de fibra óptica transoceânicos." },
    { number: 69, symbol: "Tm", name: "Túlio", mass: "168.93", category: "lantanideo", row: 9, col: 16, state: "Sólido", config: "[Xe] 4f¹³ 6s²", desc: "O lantanídeo mais raro; usado em aparelhos portáteis de Raio-X medicinais." },
    { number: 70, symbol: "Yb", name: "Itérbio", mass: "173.05", category: "lantanideo", row: 9, col: 17, state: "Sólido", config: "[Xe] 4f¹⁴ 6s²", desc: "Usado em relógios atômicos ultra-precisos e como fonte radiológica de raios-gamma." },
    { number: 71, symbol: "Lu", name: "Lutécio", mass: "174.97", category: "lantanideo", row: 9, col: 18, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹ 6s²", desc: "Elemento caro usado como catalisador no refinamento de petróleo." },
    { number: 72, symbol: "Hf", name: "Háfnio", mass: "178.49", category: "transicao", row: 6, col: 4, state: "Sólido", config: "[Xe] 4f¹⁴ 5d² 6s²", desc: "Absorve nêutrons eficientemente; usado em barras de controle de reatores nucleares." },
    { number: 73, symbol: "Ta", name: "Tântalo", mass: "180.95", category: "transicao", row: 6, col: 5, state: "Sólido", config: "[Xe] 4f¹⁴ 5d³ 6s²", desc: "Altamente resistente à corrosão; indispensável em capacitores de miniatura de celulares." },
    { number: 74, symbol: "W", name: "Tungstênio", mass: "183.84", category: "transicao", row: 6, col: 6, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", desc: "Possui o maior ponto de fusão de todos os metais (3422 °C). Usado em filamentos." },
    { number: 75, symbol: "Re", name: "Rênio", mass: "186.21", category: "transicao", row: 6, col: 7, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", desc: "Metal raro com baixíssima taxa de desgaste, usado em turbinas a jato de aviões." },
    { number: 76, symbol: "Os", name: "Ósmio", mass: "190.23", category: "transicao", row: 6, col: 8, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", desc: "Elemento natural mais denso que existe (duas vezes mais pesado que o chumbo)." },
    { number: 77, symbol: "Ir", name: "Irídio", mass: "192.22", category: "transicao", row: 6, col: 9, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", desc: "Metal mais resistente à corrosão conhecido. Abundante em meteoritos." },
    { number: 78, symbol: "Pt", name: "Platina", mass: "195.08", category: "transicao", row: 6, col: 10, state: "Sólido", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", desc: "Metal nobre precioso usado em joias, catalisadores de carros e tratamentos de câncer." },
    { number: 79, symbol: "Au", name: "Ouro", mass: "196.97", category: "transicao", row: 6, col: 11, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", desc: "Metal precioso maleável e inalterável quimicamente. Padrão monetário histórico." },
    { number: 80, symbol: "Hg", name: "Mercúrio", mass: "200.59", category: "transicao", row: 6, col: 12, state: "Líquido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", desc: "Único metal líquido à temperatura ambiente. Altamente tóxico." },
    { number: 81, symbol: "Tl", name: "Tálio", mass: "204.38", category: "pos-transicao", row: 6, col: 13, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", desc: "Metal extremamente tóxico, usado historicamente como veneno de ratos." },
    { number: 82, symbol: "Pb", name: "Chumbo", mass: "207.2", category: "pos-transicao", row: 6, col: 14, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", desc: "Metal denso, macio e maleável, excelente escudo protetor contra radiações." },
    { number: 83, symbol: "Bi", name: "Bismuto", mass: "208.98", category: "pos-transicao", row: 6, col: 15, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", desc: "Metal pesado com baixa toxicidade, cujos cristais formam uma oxidação iridescente." },
    { number: 84, symbol: "Po", name: "Polônio", mass: "(209)", category: "semimetal", row: 6, col: 16, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", desc: "Elemento radioativo altamente perigoso, descoberto por Marie e Pierre Curie." },
    { number: 85, symbol: "At", name: "Ástato", mass: "(210)", category: "halogenio", row: 6, col: 17, state: "Sólido", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", desc: "Elemento natural mais raro na crosta terrestre (menos de 30g em todo o planeta)." },
    { number: 86, symbol: "Rn", name: "Radônio", mass: "(222)", category: "gas-nobre", row: 6, col: 18, state: "Gás", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", desc: "Gás nobre radioativo incolor que se acumula em subsolos a partir do decaimento do urânio." },

    { number: 87, symbol: "Fr", name: "Frâncio", mass: "(223)", category: "alcalino", row: 7, col: 1, state: "Sólido", config: "[Rn] 7s¹", desc: "Metal alcalino radioativo extremamente instável. Decai em questão de minutos." },
    { number: 88, symbol: "Ra", name: "Rádio", mass: "(226)", category: "alcalino-terreo", row: 7, col: 2, state: "Sólido", config: "[Rn] 7s²", desc: "Descoberto por Marie Curie. Usado no passado para tinta fluorescente que brilha no escuro." },
    { number: 89, symbol: "Ac", name: "Actínio", mass: "(227)", category: "actinideo", row: 10, col: 4, state: "Sólido", config: "[Rn] 6d¹ 7s²", desc: "Início da série dos Actinídeos; brilha com uma fraca luz azul devido à sua alta radioatividade." },
    { number: 90, symbol: "Th", name: "Tório", mass: "232.04", category: "actinideo", row: 10, col: 5, state: "Sólido", config: "[Rn] 6d² 7s²", desc: "Elemento radioativo abundante estudado como combustível limpo para reatores nucleares." },
    { number: 91, symbol: "Pa", name: "Protactínio", mass: "231.04", category: "actinideo", row: 10, col: 6, state: "Sólido", config: "[Rn] 5f² 6d¹ 7s²", desc: "Elemento radioativo raro, tóxico e altamente perigoso." },
    { number: 92, symbol: "U", name: "Urânio", mass: "238.03", category: "actinideo", row: 10, col: 7, state: "Sólido", config: "[Rn] 5f³ 6d¹ 7s²", desc: "Combustível fundamental para usinas nucleares e para o desenvolvimento de armas atômicas." },
    { number: 93, symbol: "Np", name: "Neptúnio", mass: "(237)", category: "actinideo", row: 10, col: 8, state: "Sólido", config: "[Rn] 5f⁴ 6d¹ 7s²", desc: "Primeiro elemento transuraniano sintético criado em laboratório." },
    { number: 94, symbol: "Pu", name: "Plutônio", mass: "(244)", category: "actinideo", row: 10, col: 9, state: "Sólido", config: "[Rn] 5f⁶ 7s²", desc: "Elemento radioativo fissionável usado em armas nucleares e sondas espaciais (Voyager)." },
    { number: 95, symbol: "Am", name: "Amerício", mass: "(243)", category: "actinideo", row: 10, col: 10, state: "Sólido", config: "[Rn] 5f⁷ 7s²", desc: "Sintético e radioativo; pequenas quantidades são usadas em detectores de fumaça residenciais." },
    { number: 96, symbol: "Cm", name: "Cúrio", mass: "(247)", category: "actinideo", row: 10, col: 11, state: "Sólido", config: "[Rn] 5f⁷ 6d¹ 7s²", desc: "Nomeado em homenagem a Marie e Pierre Curie. Usado em espectrômetros de missões a Marte." },
    { number: 97, symbol: "Bk", name: "Berquélio", mass: "(247)", category: "actinideo", row: 10, col: 12, state: "Sólido", config: "[Rn] 5f⁹ 7s²", desc: "Sintetizado na Universidade da Califórnia em Berkeley." },
    { number: 98, symbol: "Cf", name: "Califórnio", mass: "(251)", category: "actinideo", row: 10, col: 13, state: "Sólido", config: "[Rn] 5f¹⁰ 7s²", desc: "Emissor forte de nêutrons; usado para detectar ouro e prata em varreduras de poços." },
    { number: 99, symbol: "Es", name: "Einstênio", mass: "(252)", category: "actinideo", row: 10, col: 14, state: "Sólido", config: "[Rn] 5f¹¹ 7s²", desc: "Descoberto nos detritos da primeira explosão de bomba de hidrogênio (1952)." },
    { number: 100, symbol: "Fm", name: "Férmio", mass: "(257)", category: "actinideo", row: 10, col: 15, state: "Sólido", config: "[Rn] 5f¹² 7s²", desc: "Nomeado em homenagem a Enrico Fermi, pioneiro do reator nuclear." },
    { number: 101, symbol: "Md", name: "Mendelévio", mass: "(258)", category: "actinideo", row: 10, col: 16, state: "Sólido", config: "[Rn] 5f¹³ 7s²", desc: "Nomeado em homenagem a Dmitri Mendeleev, o criador da Tabela Periódica." },
    { number: 102, symbol: "No", name: "Nobélio", mass: "(259)", category: "actinideo", row: 10, col: 17, state: "Sólido", config: "[Rn] 5f¹⁴ 7s²", desc: "Nomeado em homenagem a Alfred Nobel, criador do Prêmio Nobel." },
    { number: 103, symbol: "Lr", name: "Lawrêncio", mass: "(266)", category: "actinideo", row: 10, col: 18, state: "Sólido", config: "[Rn] 5f¹⁴ 6d¹ 7s²", desc: "Último membro da série dos actinídeos, nomeado em homenagem a Ernest Lawrence." },
    { number: 104, symbol: "Rf", name: "Rutherfórdio", mass: "(267)", category: "transicao", row: 7, col: 4, state: "Sintético", config: "[Rn] 5f¹⁴ 6d² 7s²", desc: "Elemento superpesado altamente instável, criado apenas em aceleradores de partículas." },
    { number: 105, symbol: "Db", name: "Dúbnio", mass: "(268)", category: "transicao", row: 7, col: 5, state: "Sintético", config: "[Rn] 5f¹⁴ 6d³ 7s²", desc: "Sintetizado na cidade de Dubna, Rússia." },
    { number: 106, symbol: "Sg", name: "Seabórgio", mass: "(269)", category: "transicao", row: 7, col: 6, state: "Sintético", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", desc: "Nomeado em homenagem a Glenn Seaborg, descobridor de vários transuranianos." },
    { number: 107, symbol: "Bh", name: "Bório", mass: "(270)", category: "transicao", row: 7, col: 7, state: "Sintético", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", desc: "Nomeado em homenagem a Niels Bohr, físico criador do modelo atômico moderno." },
    { number: 108, symbol: "Hs", name: "Hássio", mass: "(269)", category: "transicao", row: 7, col: 8, state: "Sintético", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", desc: "Nomeado a partir do estado alemão de Hesse (Hassia)." },
    { number: 109, symbol: "Mt", name: "Meitnério", mass: "(278)", category: "transicao", row: 7, col: 9, state: "Sintético", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", desc: "Nomeado em homenagem à física austríaca Lise Meitner, co-descobridora da fissão nuclear." },
    { number: 110, symbol: "Ds", name: "Darmstádio", mass: "(281)", category: "transicao", row: 7, col: 10, state: "Sintético", config: "[Rn] 5f¹⁴ 6d⁹ 7s¹", desc: "Sintetizado na cidade alemã de Darmstadt." },
    { number: 111, symbol: "Rg", name: "Roentgênio", mass: "(282)", category: "transicao", row: 7, col: 11, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹", desc: "Nomeado em homenagem a Wilhelm Röntgen, o descobridor dos Raios-X." },
    { number: 112, symbol: "Cn", name: "Copernício", mass: "(285)", category: "transicao", row: 7, col: 12, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", desc: "Nomeado em homenagem ao astrônomo Nicolaus Copérnico." },
    { number: 113, symbol: "Nh", name: "Nipônio", mass: "(286)", category: "pos-transicao", row: 7, col: 13, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", desc: "Primeiro elemento sintetizado no continente asiático (Japão - Nihon)." },
    { number: 114, symbol: "Fl", name: "Fleróvio", mass: "(289)", category: "pos-transicao", row: 7, col: 14, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", desc: "Sintetizado na Rússia; nomeado em homenagem ao Laboratório Flerov de Reações Nucleares." },
    { number: 115, symbol: "Mc", name: "Moscóvio", mass: "(290)", category: "pos-transicao", row: 7, col: 15, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", desc: "Nomeado em homenagem à região de Moscou, Rússia." },
    { number: 116, symbol: "Lv", name: "Livermório", mass: "(293)", category: "pos-transicao", row: 7, col: 16, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", desc: "Nomeado em homenagem ao Laboratório Nacional Lawrence Livermore, nos EUA." },
    { number: 117, symbol: "Ts", name: "Tenesso", mass: "(294)", category: "halogenio", row: 7, col: 17, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", desc: "Nomeado em homenagem ao estado do Tennessee (EUA), grande polo de pesquisas de elementos superpesados." },
    { number: 118, symbol: "Og", name: "Oganessônio", mass: "(294)", category: "gas-nobre", row: 7, col: 18, state: "Sintético", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", desc: "Último elemento da tabela periódica atual. Nomeado em homenagem ao físico Yuri Oganessian." }
];

let selectedElement = null;

function renderTable(data = elementsData) {
    const grid = document.getElementById('periodic-table');
    grid.innerHTML = '';

    data.forEach(el => {
        const card = document.createElement('div');
        card.className = `element-card cat-${el.category}`;
        card.style.gridRow = el.row;
        card.style.gridColumn = el.col;
        card.tabIndex = 0; 
        
        // Acessibilidade ARIA
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${el.name}, número atômico ${el.number}, símbolo ${el.symbol}`);

        card.innerHTML = `
            <span class="number">${el.number}</span>
            <span class="symbol">${el.symbol}</span>
            <span class="name">${el.name}</span>
        `;

        // Eventos
        card.addEventListener('click', () => openModal(el));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(el);
            }
        });

        grid.appendChild(card);
    });
}

function filterElements() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const filtered = elementsData.filter(el => 
        el.name.toLowerCase().includes(query) ||
        el.symbol.toLowerCase().includes(query) ||
        el.number.toString() === query
    );
    renderTable(filtered);
}

function changeTheme(themeClass) {
    document.body.className = document.body.className.replace(/theme-\S+/g, '');
    document.body.classList.add(themeClass);
}

function changeFontSize(sizeClass) {
    document.body.className = document.body.className.replace(/font-\S+/g, '');
    document.body.classList.add(sizeClass);
}

function openModal(element) {
    selectedElement = element;
    document.getElementById('modal-number').innerText = element.number;
    document.getElementById('modal-symbol').innerText = element.symbol;
    document.getElementById('modal-name').innerText = element.name;
    document.getElementById('modal-category').innerText = element.category.replace('-', ' ').toUpperCase();
    document.getElementById('modal-mass').innerText = element.mass;
    document.getElementById('modal-state').innerText = element.state;
    document.getElementById('modal-config').innerText = element.config;
    document.getElementById('modal-desc').innerText = element.desc;

    const modal = document.getElementById('element-modal');
    modal.classList.remove('hidden');
    document.getElementById('tts-btn').focus();
}

function closeModal() {
    const modal = document.getElementById('element-modal');
    modal.classList.add('hidden');
    window.speechSynthesis.cancel(); 
}

function speakElementDetails() {
    if (!selectedElement) return;

    window.speechSynthesis.cancel();
    
    const textToSpeak = `
        Elemento: ${selectedElement.name}. 
        Símbolo: ${selectedElement.symbol}. 
        Número atômico: ${selectedElement.number}. 
        Massa atômica: ${selectedElement.mass}. 
        Estado físico: ${selectedElement.state}. 
        Descrição: ${selectedElement.desc}.
    `;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95; 
    
    window.speechSynthesis.speak(utterance);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});