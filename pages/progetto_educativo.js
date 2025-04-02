import Layout from "/components/layout";
import Head from "next/head";

export default function Home() {
  const linkStyle = "text-[#0099ff] text-2xl hover:text-blue-600 block mt-10";
  const sectionStyle = "max-w-7xl w-full";

  return (
    <Layout>
      <div className="mt-23">
        <Head>
          <title>Progetto Educativo CNOS-FAP CFP Don Bosco</title>
        </Head>
        <div className="w-full h-[800px] overflow-hidden">
          <img
            src="/images/progetto-educativo.png"
            alt="Progetto Educativo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-20 flex flex-col items-center">
        <div className={sectionStyle}>
          <p className="text-2xl text-justify">
            Il Progetto Educativo del CNOS-FAP CFP Don Bosco si propone come
            risposta alle richieste dei genitori e alle esigenze di formazione
            dei giovani di un ampio contesto territoriale. È uno strumento che
            mette in luce l’identità del Centro, una guida che delinea le
            strategie e gli strumenti finalizzati al raggiungimento del successo
            scolastico, un testo che presenta quei valori umani e cristiani nei
            quali la Comunità Educativa si riconosce. Conformemente
            all’insegnamento di don Bosco, offre un disegno di educazione al
            futuro che investe sull’intelligenza (anche quella delle mani) e
            sulle potenzialità di ciascuno.
          </p>
          <a
            href="http://archive.donboscosandona.it/1-identita-del-centro-salesiano"
            className={linkStyle}
          >
            1 Identità del Centro Salesiano
          </a>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/2-i-soggetti"
            className={linkStyle}
          >
            <p className="text-3xl text-justify">
              1.1. Don Bosco e il Sistema Preventivo
            </p>
            <p className="text-black text-2xl mb-4">
              San Giovanni Bosco (1815-1888) fu un sacerdote che dedicò la sua
              vita ai ragazzi senza famiglia e senza mezzi per offrir loro un
              posto dignitoso nella società. Cominciando dal niente e confidando
              nella Provvidenza, aprì oratori, costruì case, fondò laboratori e
              scuole. Le “Scuole di Arti e Mestieri” nel tempo divennero delle
              vere “Scuole Professionali”, ora “Centri di Formazione
              Professionale”. Don Bosco fu uno tra i primi, nella storia
              italiana, a stipulare un contratto di apprendistato. Fu aiutato
              nella sua impresa da molti benefattori, ma specialmente dai suoi
              stessi ragazzi, alcuni dei quali, crescendo, gli chiesero di
              seguire le sue orme. Fondò così la “Famiglia salesiana”, un gruppo
              di consacrati determinati ad “aiutare ogni giovane a diventare un
              onesto cittadino e un bravo cristiano” e a tirar su i giovani come
              don Bosco era stato cresciuto dalla madre: in una grande famiglia.
              Questo metodo di educazione venne detto “Sistema Preventivo”
              perché la presenza amica dell’educatore “previene le difficoltà
              che il giovane incontra” rendendolo capace di comportarsi bene
              senza bisogno di punizioni. Tale sistema poggia su tre cardini
              fondamentali: ragione, religione e amorevolezza. Con la ragione si
              promuove il dialogo, la responsabilità e il formarsi di
              convinzioni personali che danno un senso alla vita e alle proprie
              scelte. La religione sviluppa un atteggiamento filiale verso Dio e
              solidale verso le necessità dei fratelli. L'amorevolezza favorisce
              un ambiente familiare ricco di rispetto e di fiducia, adatto alla
              maturazione integrale della persona. Don Bosco voleva che ciascun
              ragazzo si sentisse “a casa propria” perché amato, accolto e
              responsabile del bene comune. Oggi i Salesiani sono presenti con
              le loro opere in quasi tutti i Paesi del mondo e continuano con
              entusiasmo la loro azione educativa per il bene e la formazione
              delle giovani generazioni.
            </p>
            2 I soggetti
          </a>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0099ff]">
              2. I SOGGETTI: LA COMUNITÀ EDUCATIVA PASTORALE
            </h2>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-[#0099ff]">
                Una comunità che educa
              </h3>
              <p className="text-2xl">
                La Comunità Educativa Pastorale (CEP) è la modalità tipicamente
                salesiana di animare una qualunque realtà educativa. È composta
                da:
              </p>
              <ul className="list-disc list-inside space-y-1 text-2xl">
                <li>
                  i giovani, punto di riferimento fondamentale dell’azione
                  educativa;
                </li>
                <li>
                  la comunità salesiana, garante dell'identità salesiana e
                  centro di comunione e partecipazione;
                </li>
                <li>i formatori, religiosi e laici;</li>
                <li>
                  i genitori, primi e principali responsabili dell’educazione
                  dei figli;
                </li>
                <li>i laici, a vario titolo responsabili e collaboratori.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-[#0099ff]">
                Gli allievi
              </h3>
              <p className="text-2xl">
                Gli allievi sono i protagonisti primari del cammino formativo
                che prevede percorsi, attività ed iniziative atte a farli
                crescere nella capacità relazionale; trovano risposta
                all’esplicita domanda di una seria preparazione culturale e
                professionale e a quella più implicita sul senso della vita.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-[#0099ff]">
                La comunità religiosa
              </h3>
              <p className="text-2xl">
                La comunità religiosa è parte essenziale del nucleo animatore e
                di governo della CEP; offre la testimonianza di chi fa la scelta
                evangelica in forma radicale attraverso la professione
                religiosa, dedicando intelligenza, energie, creatività e vita al
                servizio dei giovani nello stile del Sistema Preventivo di don
                Bosco.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-[#0099ff]">
                Gli educatori
              </h3>
              <p className="text-2xl">
                Gli educatori insegnano, “assistono”, lavorano, studiano e
                pregano insieme con gli alunni testimoniando una professionalità
                educativa che favorisce l’interiorizzazione dei valori.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-[#0099ff]">
                I genitori
              </h3>
              <p className="text-2xl">
                I genitori sono i diretti responsabili della crescita dei figli.
                A loro compete dialogare con gli educatori/formatori e
                partecipare, tramite gli organi collegiali, alla vita della
                scuola/CFP nei momenti di programmazione, di revisione educativa
                e di impegno nelle attività di tempo libero.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-[#0099ff]">
                Il personale ausiliario/amministrativo
              </h3>
              <p className="text-2xl">
                Il personale ausiliario/amministrativo contribuisce all’azione
                educativa in particolare attraverso la cura dell’ambiente, lo
                stile relazionale e il buon funzionamento logistico e
                organizzativo.
              </p>
            </div>
          </div>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/3-il-coordinamento"
            className={linkStyle}
          >
            3 Il coordinamento
          </a>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0099ff]">
              3. IL COORDINAMENTO E L’ANIMAZIONE DELL’AZIONE EDUCATIVA
            </h2>

            <p className="text-2xl">
              L’animazione pastorale è responsabilità innanzi tutto della
              comunità salesiana, in particolare del direttore e del Consiglio
              della comunità. La comunità educativa pastorale ha come obiettivo
              esplicito l’evangelizzazione attuata attraverso: l’Insegnamento
              della Religione Cattolica, l’ispirazione cristiana delle
              discipline, dei percorsi formativi e delle metodologie didattiche,
              lo stile delle relazioni, i momenti di annuncio come il
              “Buongiorno”, le celebrazioni Eucaristiche, le Confessioni, i
              ritiri, la preghiera, gli esercizi spirituali.
            </p>

            <h3 className="text-3xl font-semibold text-[#0099ff]">
              3.1. Gli Organismi direttivi e di coordinamento
            </h3>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.1.1. Il Consiglio della casa
              </h4>
              <p className="text-2xl">
                Collabora con il direttore nell’espletamento della sua funzione
                di primo responsabile della CEP ed ha come compito primario il
                mantiene vivo lo spirito e lo stile educativo di Don Bosco in
                tutte le attività pastorali.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.1.2. Il Consiglio della CEP
              </h4>
              <p className="text-2xl">
                Anima ed orienta tutta l’azione salesiana attraverso la
                riflessione, il dialogo, la programmazione e la revisione
                dell’azione educativo - pastorale.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.1.3. L’Equipe di Pastorale Giovanile
              </h4>
              <p className="text-2xl">
                Affianca il coordinatore pastorale nell’adempimento dei propri
                incarichi. E’ composta da alcuni docenti coordinatori di
                classe/corso che insieme programmano, organizzano, coordinano e
                stimolano l’azione pastorale del CFP.
              </p>
            </div>

            <h3 className="text-3xl font-semibold text-[#0099ff]">
              3.2. I ruoli di coordinamento dell’attività didattica e pastorale
            </h3>
            <p className="text-2xl">
              Per un'attività educativa efficace e coordinata all'interno del
              CFP, esistono ruoli particolari, definiti dettagliatamente nel
              mansionario allegato al “Manuale della Qualità”. Le figure di
              maggior riferimento per gli allievi sono:
            </p>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.1. Il Direttore dell’Opera Oratorio Don Bosco.
              </h4>
              <p className="text-2xl">
                Ha il compito di mantener vivo lo spirito e lo stile educativo
                di Don Bosco tra formatori, genitori e allievi; è il
                responsabile dell’opera e dei rapporti con i terzi; nomina su
                proposta del direttore del CFP i coordinatori, i docenti e i
                formatori laici; accetta e dimette gli alunni; ha facoltà di
                partecipare all’assemblea dei formatori e ai consigli di
                classe/corso. E’ il primo responsabile dell'azione
                formativo-professionale; assicura la gestione operativa del
                Centro garantendo l'attuazione della missione educativa e la
                promozione dei valori fondanti dell’Ente; ha compito
                amministrativo, di animazione e di organizzazione, in sintonia
                d’intenti con il direttore della casa salesiana ed il Consiglio
                della CEP.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.2. Il Coordinatore Pastorale (Catechista).
              </h4>
              <p className="text-2xl">
                E’ responsabile dell'animazione delle attività pastorali del
                CFP; organizza i momenti di preghiera, le celebrazioni, le
                giornate di ritiro e la partecipazione dei giovani ai sacramenti
                della Riconciliazione e dell’Eucaristia; in collaborazione con
                il direttore, cura la formazione spirituale salesiana ed
                educativa dei docenti/formatori; assicura la relazione della CEP
                con la pastorale della Chiesa locale e con altre istituzioni
                educative del territorio; garantisce la disponibilità per la
                direzione spirituale, per i colloqui, per gli incontri personali
                con i ragazzi; promuove una particolare attenzione ai giovani in
                difficoltà o non inseriti in un contesto parrocchiale; coordina
                le iniziative di animazione vocazionale; favorisce il dialogo
                tra fede e cultura nelle diverse aree di insegnamento; segue
                l’animazione del tempo libero e delle attività complementari,
                con particolare attenzione all’associazionismo.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.3. L’Economo o coordinatore della gestione amministrativa
              </h4>
              <p className="text-2xl">
                L’economo cura, in collaborazione con il direttore della casa e
                il suo consiglio, gli aspetti amministrativi e fiscali della
                gestione dell’opera e dell’attività scolastica.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.4. Il Vice-Direttore del CFP
              </h4>
              <p className="text-2xl">
                Collabora strettamente con il direttore del CFP e svolge compiti
                delegati; cura la realizzazione del calendario, dell’orario,
                delle attività formative e dell’assistenza; vigila sulle assenze
                degli allievi; favorisce i colloqui tra genitori e insegnanti;
                contribuisce a creare un ambiente favorevole all’ordinato
                svolgimento delle attività; assicura un comportamento
                disciplinato degli allievi in accordo con il Progetto Educativo
                e coordina gli interventi disciplinari.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.5. Il Tutor
              </h4>
              <p className="text-2xl">
                Si occupa di seguire il percorso formativo degli allievi in
                difficoltà organizzando attività a supporto della didattica;
                organizza e coordina gli insegnanti di sostegno; tiene i
                rapporti con gli Enti e i soggetti del territorio preposti a
                seguire il disagio; è referente alla salute e DSA.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.6. Il Coordinatore dell’Orientamento.
              </h4>
              <p className="text-2xl">
                Coordina tutte le attività di orientamento; mantiene il contatto
                con la realtà scolastica delle scuole secondarie di primo e
                secondo grado del territorio per offrire percorsi adatti o
                alternativi agli alunni che si sentono portati per la formazione
                professionale.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.7. Il Coordinatore di settore.
              </h4>
              <p className="text-2xl">
                Anima e coordina i formatori del proprio settore; coordina le
                attività, esegue gli acquisti del materiale di consumo; propone
                innovazioni tecnologiche e didattiche; collabora per la stesura
                dei progetti formativi; tiene i rapporti con le aziende del
                settore e organizza gli stage degli allievi.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.8. Il Coordinatore di classe.
              </h4>
              <p className="text-2xl">
                Segue l’andamento generale della classe/corso e le situazioni
                individuali coordinando gli interventi didattici, educativi e
                pastorali; anima le relazioni interpersonali e coordina le
                iniziative all’interno delle classi/corsi; redige la
                presentazione della classe e consegna le pagelle ogni qual volta
                c’è l’incontro con i genitori; prepara la proposta di
                valutazione educativa in vista degli scrutini; redige il verbale
                di classe; fa presente al Direttore e al Vice-Direttore
                eventuali difficoltà nella conduzione della classe; organizza le
                visite tecniche.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.9. I rappresentanti dei genitori
              </h4>
              <p className="text-2xl">
                Costituiscono un efficace tramite tra CFP e famiglia agevolando
                i rapporti tra docenti/formatori, genitori e studenti; si fanno
                portavoce dei problemi generali della classe/corso; partecipano
                ai consigli di classe/corso nei quali sia prevista la loro
                presenza.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl font-semibold text-[#0099ff]">
                3.2.10. I rappresentanti di classe degli alunni.
              </h4>
              <p className="text-2xl">
                Sono eletti dai compagni in numero di due; si fanno portavoce
                dei problemi e delle esigenze della propria classe; collaborano
                con i formatori e il coordinatore per mantenere all’interno
                della classe un clima sereno; si impegnano a far rispettare il
                regolamento; assicurano la loro presenza ai consigli di classe;
                richiedono, organizzano e guidano l’assemblea di classe
                redigendo il verbale da consegnare al Direttore del CFP.
              </p>
            </div>
          </div>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/4-il-patto-educativo"
            className={linkStyle}
          >
            4 Il patto educativo
          </a>
          <div class="space-y-4">
            <h2 class="text-3xl font-bold text-[#0099ff]">
              4. IL PATTO EDUCATIVO
            </h2>

            <p class="text-2xl">
              Nella comunità educativa uno spazio importante è riservato a
              genitori e allievi. In sede d’iscrizione, viene condiviso il patto
              educativo tra le parti. Il CFP è rappresentato dal Direttore o da
              persona da lui delegata.
            </p>

            <p class="text-2xl">In relazione a questo progetto educativo...</p>

            <div class="space-y-2">
              <h3 class="text-3xl font-semibold text-[#0099ff]">
                Il CFP si impegna a:
              </h3>
              <ul class="list-disc list-inside space-y-1 text-2xl">
                <li>
                  garantire la cattolicità e la salesianità della propria
                  azione;
                </li>
                <li>
                  dichiarare le finalità didattiche e formative perseguite;
                </li>
                <li>
                  rendere espliciti la strategia, gli strumenti e i metodi di
                  verifica, i criteri di valutazione;
                </li>
                <li>
                  curare e verificare la sicurezza fisica e morale
                  dell'ambiente;
                </li>
                <li>garantire la serietà dell'impegno formativo;</li>
                <li>
                  ricercare la serenità dei rapporti tra studenti e formatori,
                  tra famiglia e CFP.
                </li>
              </ul>
            </div>

            <div class="space-y-2">
              <h3 class="text-3xl font-semibold text-[#0099ff]">
                Gli allievi si impegnano a:
              </h3>
              <ul class="list-disc list-inside space-y-1 text-2xl">
                <li>
                  accogliere con serietà e convinzione la proposta educativa,
                  culturale e professionale loro rivolta;
                </li>
                <li>
                  conservare un atteggiamento di rispetto verso le persone e le
                  strutture che li accolgono;
                </li>
                <li>
                  lasciarsi coinvolgere attivamente nei processi formativi,
                  impegnandosi a conoscere e condividere:
                  <ul class="list-disc list-inside space-y-1 ml-6 text-2xl">
                    <li>
                      gli obiettivi educativi e didattici del curricolo
                      formativo;
                    </li>
                    <li>il percorso per raggiungerli;</li>
                    <li>le fasi del cammino formativo e culturale;</li>
                    <li>le esigenze disciplinari espresse dal Regolamento.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="space-y-2">
              <h3 class="text-3xl font-semibold text-[#0099ff]">
                I genitori si rendono disponibili a:
              </h3>
              <ul class="list-disc list-inside space-y-1 text-2xl">
                <li>
                  conoscere, accogliere e condividere la proposta formativa del
                  CFP;
                </li>
                <li>
                  farsi carico della maturazione personale dei figli e dei
                  risultati formativi;
                </li>
                <li>esprimere pareri e proposte;</li>
                <li>collaborare alle attività formative;</li>
                <li>partecipare ai momenti formativi proposti;</li>
                <li>
                  conoscere e sostenere l'Associazione Genitori Scuola Cattolica
                  (AGeSC) e partecipare ad iniziative loro rivolte.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/5-gli-obiettivi"
            className={linkStyle}
          >
            5 Gli obiettivi
          </a>

          <h1 class="text-3xl text-[#0099ff] font-bold mb-4">
            5.1. Obiettivi educativi: la crescita integrale della persona
          </h1>
          <p class="text-2xl mb-6">
            Il progetto educativo del CFP Don Bosco mette al centro il giovane
            per favorire la sua formazione integrale...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.1.1. La formazione religiosa
          </h2>
          <p class="text-2xl mb-6">
            La dimensione etico religiosa viene veicolata attraverso
            l’insegnamento della religione...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.1.2. La formazione della coscienza
          </h2>
          <p class="text-2xl mb-6">
            L’educazione impartita in un CFP salesiano rimanda ad un modello di
            vita e di uomo...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.1.3. L'educazione dell'affettività
          </h2>
          <p class="text-2xl mb-6">
            È fondamentale creare attorno ai giovani un clima educativo ricco di
            scambi comunicativo-affettivi...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.1.4. L'educazione sociale e politica
          </h2>
          <p class="text-2xl mb-6">
            La comunità educativa del CFP, facendo proprio lo stile di don
            Bosco...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.1.5. L'educazione alla professionalità
          </h2>
          <p class="text-2xl mb-6">
            Durante il percorso formativo è importante mettere le radici della
            professionalità...
          </p>

          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            5.2. Obiettivi didattici: la competenza professionale
          </h1>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.2.1. Corsi di prima formazione
          </h2>
          <p class="text-2xl mb-6">
            Il metodo educativo-formativo salesiano segue un itinerario che
            tende a...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.2.2. Corsi di formazione superiore e continua
          </h2>
          <p class="text-2xl mb-6">
            La formazione superiore o continua permette di raggiungere...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.2.3. Corsi per apprendisti
          </h2>
          <p class="text-2xl mb-6">
            Il CNOS FAP CFP Don Bosco, a partire dal 2000, eroga l’attività di
            corsi per apprendisti...
          </p>

          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            5.3. Proseguimento degli studi e Sistema Duale
          </h1>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.3.1. Che cos’è il Sistema Duale?
          </h2>
          <p class="text-2xl mb-6">
            È un modello di formazione professionale alternata fra scuola e
            lavoro...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.3.2. Alternanza scuola lavoro
          </h2>
          <p class="text-2xl mb-6">
            Nella forma dell’alternanza l’allievo rimane in carico della
            struttura formativa...
          </p>

          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            5.3.3. Il contratto di apprendistato
          </h2>
          <p class="text-2xl mb-6">
            Con il contratto di apprendistato, l’alunno apprendista è dipendente
            dell’azienda...
          </p>

          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            5.4. Servizi al Lavoro
          </h1>
          <p class="text-2xl mb-6">
            Attraverso i Servizi Al Lavoro (SAL) il nostro Centro Professionale
            offre la possibilità...
          </p>

          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            5.5. Sistema di certificazione delle competenze e partenariati
          </h1>
          <p class="text-2xl mb-6">
            Il CNOS-FAP CFP Don Bosco fornisce sul territorio la possibilità
            agli utenti...
          </p>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/6-le-azioni-educative"
            className={linkStyle}
          >
            6 Le azioni educative
          </a>
          <h1 class="text-3xl text-[#0099ff] font-bold mb-4">
            6.1. La pedagogia d’ambiente e le relazioni educative
          </h1>
          <p class="text-2xl mb-6">
            Secondo la tradizione salesiana, tutto deve concorre a creare un
            clima di serenità, di gioia e di impegno. Per questo sarà premura
            del Direttore e dei suoi collaboratori:
          </p>
          <ul class="list-disc pl-6 text-2xl mb-6">
            <li>
              Qualificare i rapporti educativi e creare un ambiente favorevole
              alla valorizzazione della vita quotidiana.
            </li>
            <li>Curare i doveri di studio, di ricerca e di lavoro.</li>
            <li>
              Vigilare sulla disciplina personale e quella richiesta
              dall'organizzazione formativa.
            </li>
            <li>
              Mantenere il rispetto e la cura degli strumenti, attrezzature e
              locali in cui si svolge la vita formativa.
            </li>
            <li>Sviluppare il senso di appartenenza ad una CEP.</li>
            <li>Garantire esperienze di solidarietà e collaborazione.</li>
          </ul>
          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            6.2. L’accompagnamento personale
          </h1>
          <p class="text-2xl mb-6">
            La promozione dell’orientamento, inteso come "educazione alla
            scelta", è obiettivo prioritario del CFP Don Bosco. Le attività
            offerte in questo ambito sono:
          </p>
          <ul class="list-disc pl-6 text-2xl mb-6">
            <li>
              Colloqui individuali per il sostegno psico-pedagogico degli
              allievi.
            </li>
            <li>Organizzazione di incontri e testimonianze a tema.</li>
            <li>
              Supporto agli insegnanti nei casi di allievi con problemi o in
              difficoltà.
            </li>
            <li>Incontri con le famiglie per i casi difficili.</li>
            <li>
              Interventi metacognitivi su metodo di studio e motivazione allo
              studio.
            </li>
            <li>
              Supporto metacognitivo per gli studenti che intendono continuare
              il percorso formativo.
            </li>
            <li>
              Incontri con esperti su temi quali: educazione all’affettività,
              prevenzione del tabagismo, dell’alcolismo e droga, educazione
              alimentare, uso dei mezzi di comunicazione, ecc.
            </li>
            <li>
              Lavoro di rete con i servizi del territorio per casi particolari.
            </li>
          </ul>
          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            6.3. Le buone prassi e le azioni
          </h1>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            6.3.1. Il cortile
          </h2>
          <p class="text-2xl mb-6">
            Spazio e modalità ineludibile nell'esperienza salesiana del CFP è il
            cortile. Esso non è solo luogo geografico in cui vengono organizzate
            attività ed iniziative, ma si configura come tempo di costruzione
            delle relazioni personali a partire dallo sport, dal gioco o
            dall'animazione. La CEP è garante dell'assistenza dei giovani
            secondo lo spirito salesiano.
          </p>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            6.3.2. Il Buongiorno
          </h2>
          <p class="text-2xl mb-6">
            La mattina inizia con un breve momento di preghiera ed una piccola
            riflessione su un aspetto della vita cristiana capace di indirizzare
            ed accompagnare allievi e formatori per tutta la giornata. Seguendo
            i tempi dell’Anno Liturgico e i temi della Proposta Formativa, i
            ragazzi sono così condotti ad un cammino di approfondimento della
            fede e della morale cristiana. Questo appuntamento è animato dal
            direttore e dal vice-direttore, dal coordinatore pastorale e, a
            turno, dai vari formatori.
          </p>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            6.3.3. Le ricreazioni
          </h2>
          <p class="text-2xl mb-6">
            Per don Bosco il cortile ed il gioco hanno sempre assunto una forte
            valenza educativa pertanto tutti i tempi di ricreazione, in
            particolare quello più lungo del dopo pranzo, sono organizzati in
            tornei. La vittoria di una partita fa guadagnare dei punti che, a
            fine anno, vanno a decretare la classe meritevole della Superpizza.
            Tutte le ricreazioni sono assistite dai formatori, diventando
            occasione per avvicinare i ragazzi e dialogare con loro in spirito
            di famiglia.
          </p>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            6.3.4. I Ritiri Spirituali e le Uscite Didattiche
          </h2>
          <p class="text-2xl mb-6">
            La crescita integrale della persona passa anche per la formazione
            della coscienza e l’apertura del cuore, per questo riteniamo
            importante proporre delle giornate di riflessione e di formazione.
            Questi appuntamenti sono vissuti all’inizio dell’anno e ripresi
            nell’arco dell’anno formativo. Accompagnati dai loro formatori, gli
            allievi hanno l’opportunità di fare l’importante esperienza
            dell’uscita didattica, di effettuare visite tecniche in aziende o
            fiere campionarie ed espositive.
          </p>
          <h2 class="text-3xl text-[#0099ff] font-bold mt-8 mb-4">
            6.3.5. Le Feste e le celebrazioni
          </h2>
          <p class="text-2xl mb-6">
            All’inizio e alla fine di ogni anno formativo vengono proposti due
            momenti di festa che coinvolgono le famiglie di tutti i ragazzi;
            sono occasioni preziose per approfondire la reciproca conoscenza e
            rendere grazie per il percorso condiviso. Altri importanti
            appuntamenti sono la festa dell’Immacolata, il Convegno degli
            EX-Allievi, la festa di don Bosco e quella di Maria Ausiliatrice.
          </p>
          <p class="text-2xl mb-6">
            Per don Bosco le due colonne che sostengono l’educazione dei giovani
            sono la Confessione e l’Eucaristia. Per questa ragione, in vista
            delle feste del CFP, viene offerta la possibilità di accostarsi alla
            Confessione e partecipare all’Eucaristia.
          </p>
          å
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/7-metodologie-e-strumenti-didattici"
            className={linkStyle}
          >
            7 Metodologie e strumenti didattici
          </a>
          <p class="text-2xl mb-6">
            Gli studenti, come titolari del diritto della “libertà di
            apprendimento”, sono protagonisti primari del cammino formativo,
            partecipano in modo creativo all’elaborazione e attuazione di esso,
            nelle forme rese progressivamente possibili dal maturare dell’età e
            con le caratteristiche loro proprie di autenticità ed entusiasmo.
          </p>
          <p class="text-2xl mb-6">
            Le norme del presente Regolamento si ispirano ai principi dello
            Statuto degli Studenti e delle Studentesse della scuola secondaria
            (DPR 249/98 e successive modifiche ed integrazioni), nel quale la
            scuola è definita come "luogo di formazione e di educazione mediante
            lo studio … comunità di dialogo, ricerca, di esperienza sociale
            informata ai valori democratici e volta alla crescita della persona
            in tutti gli aspetti".
          </p>
          <p class="text-2xl mb-6">
            I valori democratici di riferimento nella vita della comunità
            scolastica sono quelli espressi dalla nostra Costituzione e si
            basano sulla libertà di espressione, di pensiero, di coscienza e di
            religione, sul rispetto reciproco di tutte le persone che la
            compongono, quale che sia la loro età e condizione, nel ripudio di
            ogni barriera ideologica, sociale e culturale.
          </p>
          <p class="text-2xl mb-6">
            Il "Regolamento di Disciplina", nell’individuare i comportamenti che
            configurano mancanze disciplinari, intende porsi non solo come
            strumento sanzionatorio di comportamenti scorretti, ma come
            strumento di promozione di comportamenti e atteggiamenti
            responsabili sia a livello individuale che collettivo, nella
            convinzione che il rispetto della legge a tutti i livelli è
            strumento esso stesso per la promozione del diritto alla
            cittadinanza e allo studio.
          </p>
          <p class="text-2xl mb-6">
            Tutte le disposizioni si applicano anche nel caso in cui le lezioni
            si svolgano con la didattica a distanza. A seguito dell’emergenza
            sanitaria in corso è stato redatto il Protocollo di sicurezza
            scolastico per il rischio Covid ad integrazione del Documento
            Valutazione Rischi; pertanto l’assoluto rispetto delle norme e delle
            procedure in esso contenute rientra a tutti gli effetti nell’ambito
            della sicurezza nei luoghi di lavoro ed ogni trasgressione sarà
            sanzionata.
          </p>
          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            7. Norme generali di comportamento
          </h1>
          <p class="text-2xl mb-6">
            “Gli studenti sono tenuti a frequentare regolarmente i corsi e ad
            assolvere assiduamente agli impegni di studio”. (D.P.R. 249/1998
            Art. 3 Comma 1)
          </p>
          <p class="text-2xl mb-6">
            Per raggiungere gli obiettivi formativi che la Comunità Educativa
            del CFP Don Bosco propone è indispensabile osservare alcune norme e
            mantenere un comportamento educato che è anzitutto scelta personale
            e responsabile di ogni persona.
          </p>
          <p class="text-2xl mb-6">
            Il rispetto della persona è essenziale: in classe, in laboratorio,
            nei cortili e nei vari ambienti di vita comune l’atteggiamento deve
            essere corretto ed educato nel rispetto del lavoro di formatori e
            compagni; è bene, inoltre, evitare manifestazioni di affetto ed
            effusioni non consone al contesto scolastico.
          </p>
          <p class="text-2xl mb-6">
            Il decoro e la cura della propria persona nell'abbigliamento, nella
            pulizia personale e nel linguaggio sono segno di rispetto.
          </p>
          <p class="text-2xl mb-6">
            Strumenti privilegiati di comunicazione sono il Libretto Scolastico
            e il Registro Online.
          </p>

          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">
            2. Rispetto dei tempi
          </h1>
          <p class="text-2xl mb-6">
            Durante l'orario scolastico, compresi gli intervalli, l’allievo deve
            essere sempre presente al Centro. È richiesta la massima puntualità
            all’inizio e alla ripresa delle lezioni dopo l’intervallo e dopo la
            pausa pranzo. L’ingresso e l’uscita dai rispettivi ambienti
            scolastici sono regolati dal suono della campanella. È vietato
            allontanarsi dal Centro, anche durante l’intervallo o la pausa
            pranzo, senza previa autorizzazione del Direttore o del suo
            Delegato.
          </p>
          <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">3. Assenze</h1>
    <p class="text-2xl mb-6">Dopo ogni assenza lo studente deve presentare al Direttore o suo delegato prima dell’inizio della prima ora del giorno di rientro giustificazione scritta sul libretto scolastico, firmata dai genitori o da chi ne fa le veci, anche se l’allievo è maggiorenne. Nel caso in cui la firma sia diversa da quella depositata in calce al libretto, le assenze non saranno giustificate e il Direttore o suo delegato deciderà il da farsi.</p>

    <h1 class="text-3xl text-[#0099ff] font-bold mt-12 mb-4">4. Entrate ed uscite</h1>
    <p class="text-2xl mb-6">L’ingresso e l’uscita in orari diversi da quelli regolari devono essere richiesti mediante permesso debitamente firmato sul libretto scolastico e vidimato dal Direttore o dal suo delegato. La giustificazione dovrà essere presentata all’insegnante di classe.</p>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/8-il-regolamento"
            className={linkStyle}
          >
            8 Il regolamento
          </a>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/9-attivita-promozionali"
            className={linkStyle}
          >
            9 Attività promozionali
          </a>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/10-valutazione"
            className={linkStyle}
          >
            10 Valutazione
          </a>
        </div>
      </div>
    </Layout>
  );
}
