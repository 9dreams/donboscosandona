import Layout from "/components/Layout";
import LandingHero from "/components/LandingHero";
import Head from "next/head";

export default function Home() {
  const linkStyle = "text-[#0099ff] text-2xl hover:text-blue-600 block mt-10";
  const sectionStyle = "max-w-7xl w-full";

  return (
    <Layout>
      <Head>
        <title>Progetto Educativo CNOS-FAP CFP Don Bosco</title>
      </Head>
      <LandingHero
        title='Progetto Educativo'
        description="Lo strumento che delinea l'identità del Centro, i valori e le strategie per il successo scolastico e umano dei nostri ragazzi."
        imageUrl='/images/progetto-educativo.png'
      />
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
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/7-metodologie-e-strumenti-didattici"
            className={linkStyle}
          >
            7 Metodologie e strumenti didattici
          </a>
          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">
            7.1. Apprendere facendo
          </h2>
          <p class="text-2xl mb-6">
            La metodologia didattica del nostro CFP si caratterizza per
            l'applicazione operativa di conoscenze e abilità acquisite
            consentendo allo studente di comprendere formule o regole in un
            contesto pratico. A tale proposito il nostro Centro aderisce ad
            iniziative e sperimentazioni sia a livello Regionale che Nazionale.
          </p>

          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">7.2. Progetto iPad</h2>
          <p class="text-2xl mb-6">
            E’ un’esperienza di innovazione pedagogica e didattica basata su un
            modello attivo nel quale l’insegnante, da fornitore di conoscenze,
            diventa facilitatore di processi di ricerca e di interazione
            significativa; è un grande investimento tecnologico che permette
            agli studenti di sperimentare modalità didattiche efficaci quali
            flipped classroom, il cooperative learning, il peer to peer e altro
            ancora; è uno stimolo a realizzare lavori di gruppo
            interdisciplinari che richiedono l’integrazione di testi, suoni,
            video e immagini. L’utilizzo dell’iPad richiede il rispetto di
            alcune condizioni, sottoscritte a inizio anno da genitori e giovani.
          </p>

          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">7.3. Gli stages</h2>
          <p class="text-2xl mb-6">
            Lo stage rappresenta un momento fondamentale nella formazione
            professionale perché punto d’incontro tra formazione e lavoro. È uno
            strumento indispensabile per fare esperienza concreta nel settore
            prescelto, per valutare la predisposizione verso l’attività
            intrapresa, per proporsi nel mercato del lavoro con un curriculum
            arricchito non solo nella forma (titolo rilasciato), ma soprattutto
            nella sostanza (competenza acquisita nella pratica svolta).
          </p>

          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">
            7.4. Le attività a sostegno della didattica
          </h2>
          <ul class="text-2xl mb-6">
            <li class="mb-2">
              Iniziative di accoglienza: sono finalizzate ad un sereno
              inserimento degli allievi.
            </li>
            <li class="mb-2">
              Metodo di studio: ha lo scopo di insegnare come organizzarsi nello
              studio (sottolineare, costruire schemi, riassumere, esporre) e nel
              lavoro.
            </li>
            <li class="mb-2">
              Educazione ambientale: mira a sensibilizzare gli allievi ai
              problemi ambientali, anche attraverso la proposta di semplici
              gesti quotidiani.
            </li>
            <li class="mb-2">
              Educazione alla salute: intende sviluppare il senso di
              responsabilità per la propria e l’altrui salute, promuovendo stili
              di vita sani.
            </li>
            <li class="mb-2">
              Visite guidate: costituiscono un arricchimento dell’attività
              didattica e rispondono alle finalità formative e culturali
              esplicitate dal piano educativo generale.
            </li>
            <li>
              Attività di prevenzione e proposte di solidarietà: incontri
              informativi in collaborazione con diverse associazioni del
              territorio: A.C.A.T. (problema di alcolismo); SER.D. (dipendenza
              da droghe); CONSULTORIO (educazione all’affettività e alla
              sessualità); A.V.I.S. (donazione del sangue); A.I.D.O. (donazione
              degli organi); POLIZIA di STATO (convivenza civile).
            </li>
          </ul>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/8-il-regolamento"
            className={linkStyle}
          >
            8 Il regolamento
          </a>
          <p class="text-2xl mb-6">
            {" "}
            Gli studenti, come titolari del diritto della “libertà di
            apprendimento”, sono protagonisti primari del cammino formativo,
            partecipano in modo creativo all’elaborazione e attuazione di esso,
            nelle forme rese progressivamente possibili dal maturare dell’età e
            con le caratteristiche loro proprie di autenticità ed entusiasmo.
          </p>
          <p class="text-2xl mb-6">
            {" "}
            Le norme del presente Regolamento si ispirano ai principi dello
            Statuto degli Studenti e delle Studentesse della scuola secondaria
            (DPR 249/98 e successive modifiche ed integrazioni), nel quale la
            scuola è definita come "luogo di formazione e di educazione mediante
            lo studio … comunità di dialogo, ricerca, di esperienza sociale
            informata ai valori democratici e volta alla crescita della persona
            in tutti gli aspetti".
          </p>
          <p class="text-2xl mb-6">
            {" "}
            I valori democratici di riferimento nella vita della comunità
            scolastica sono quelli espressi dalla nostra Costituzione e si
            basano sulla libertà di espressione, di pensiero, di coscienza e di
            religione, sul rispetto reciproco di tutte le persone che la
            compongono, quale che sia la loro età e condizione, nel ripudio di
            ogni barriera ideologica, sociale e culturale.
          </p>
          <p class="text-2xl mb-6">
            {" "}
            Il "Regolamento di Disciplina", nell’individuare i comportamenti che
            configurano mancanze disciplinari, intende porsi non solo come
            strumento sanzionatorio di comportamenti scorretti, ma come
            strumento di promozione di comportamenti e atteggiamenti
            responsabili sia a livello individuale che collettivo, nella
            convinzione che il rispetto della legge a tutti i livelli è
            strumento esso stesso per la promozione del diritto alla
            cittadinanza e allo studio. Per questo motivo tutti i provvedimenti
            disciplinari hanno finalità educative, tendono a rafforzare il senso
            di responsabilità e a ripristinare i rapporti corretti all'interno
            della comunità scolastica.
          </p>
          <p class="text-2xl mb-6">
            Il Regolamento di Disciplina, nell’individuare le sanzioni e gli
            organi competenti a comminarle, si pone come strumento di
            trasparenza e di garanzia.
          </p>
          <p class="text-2xl mb-6">
            Tutte le disposizioni si applicano anche nel caso in cui le lezioni
            si svolgano con la didattica a distanza. A seguito dell’emergenza
            sanitaria in corso è stato redatto il Protocollo di sicurezza
            scolastico per il rischio Covid ad integrazione del Documento
            Valutazione Rischi; pertanto l’assolto rispetto delle norme e delle
            procedure in esso contenute rientra a tutti gli effetti nell’ambito
            della sicurezza nei luoghi di lavoro ed ogni trasgressione sarà
            sanzionata.
          </p>
          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">
            1. Norme generali di comportamento
          </h2>

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
            Una condotta corretta ed educata deve essere mantenuta anche nel
            venire e tornare da scuola ed entro i mezzi di trasporto a tutela
            del buon nome del Centro.
          </p>

          <p class="text-2xl mb-6">
            È segno di maturità personale, oltre che dovere civico, rispettare
            gli ambienti, gli arredi, il materiale didattico e le attrezzature,
            in quanto tali beni sono a servizio di tutta la comunità educativa
            del CFP.
          </p>

          <p class="text-2xl mb-6">
            Ogni allievo del Centro deve accettare e impegnarsi su tutte le
            materie di corso, pertanto non potrà rifiutare la presenza, la
            valutazione e le relative verifiche in una o più materie; In caso
            contrario sarà soggetto a sanzione disciplinare.
          </p>

          <p class="text-2xl mb-6">
            Il Direttore, gli insegnanti e ogni adulto parte della Comunità
            Educativa hanno il diritto e il dovere di intervenire in qualsiasi
            momento a tutela della disciplina, della buona educazione e
            dell’identità del Centro.
          </p>

          <h3 class="text-3xl text-[#0099ff] mt-8 mb-4">
            Strumenti privilegiati di comunicazione
          </h3>

          <p class="text-2xl mb-6">
            <strong>LIBRETTO SCOLASTICO:</strong> il libretto è personale e
            riservato, costituisce per l’allievo il documento ufficiale per le
            relazioni scuola/famiglia e ha valore giuridico.
          </p>

          <p class="text-2xl mb-6">
            In particolare serve alla famiglia per giustificare assenze e
            ritardi, per richiedere permessi di uscita anticipata.
          </p>

          <p class="text-2xl mb-6">
            Esso verrà consegnato all’inizio dell’anno formativo e dovrà essere
            firmato dall’allievo e da uno o entrambi i genitori o da chi
            esercita la patria potestà. Tale persona provvederà in seguito a
            firmare ogni comunicazione. L’allievo deve avere cura del libretto
            evitando disegni, cancellature e scritte e dovrà portarlo sempre con
            sé per esibirlo ad ogni richiesta degli insegnanti. In caso di
            smarrimento, danneggiamento o esaurimento degli spazi per le
            giustificazioni dovrà essere acquistato un duplicato al costo
            stabilito dal Centro. Falsificazioni e contraffazioni saranno
            disciplinarmente sanzionate come riportato nella relativa tabella.
            Si raccomanda ai genitori di controllarlo regolarmente, almeno una
            volta alla settimana.
          </p>

          <p class="text-2xl mb-6">
            <strong>REGISTRO ONLINE:</strong> è lo strumento primario di
            comunicazione scuola/famiglia per quanto riguarda:
          </p>
          <ul class="text-2xl mb-6 list-inside list-disc">
            <li>le valutazioni e il rendimento scolastico</li>
            <li>la programmazione e le attività didattiche</li>
            <li>il calendario scolastico</li>
            <li>le comunicazioni e gli avvisi</li>
            <li>le note disciplinari</li>
            <li>la registrazione di assenze, ritardi e uscite fuori orario</li>
            <li>
              la prenotazione del colloquio individuale con gli insegnanti
            </li>
          </ul>

          <p class="text-2xl mb-6">
            L’accesso al portale è possibile mediante l’utilizzo di username e
            password personali fornite dal Centro alla famiglia e all’allievo.
            Si raccomanda ai genitori di controllarlo regolarmente per poter
            monitorare l’andamento scolastico del figlio e/o apporre le apposite
            firme richieste in caso di comunicazioni.
          </p>

          <p class="text-2xl mb-6">
            È necessario che il genitore non fornisca le proprie credenziali al
            figlio, in quanto l’istituzione scolastica non è più in grado di
            sapere se la famiglia è realmente a conoscenza della situazione
            scolastica del ragazzo.
          </p>
          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">
            2. Rispetto dei tempi
          </h2>

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

          <p class="text-2xl mb-6">
            L’esonero dalla parte pratica di educazione motoria (parziale o
            totale) deve essere chiesto al Direttore o del suo Delegato con
            domanda scritta accompagnata da certificato medico. Tuttavia
            l’alunno è tenuto alla presenza alla lezione.
          </p>

          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">3. Assenze</h2>

          <p class="text-2xl mb-6">
            Dopo ogni assenza lo studente deve presentare al Direttore o suo
            delegato prima dell’inizio della prima ora del giorno di rientro
            giustificazione scritta sul libretto scolastico, firmata dai
            genitori o da chi ne fa le veci, anche se l’allievo è maggiorenne.
            Nel caso in cui la firma sia diversa da quella depositata in calce
            al libretto, le assenze non saranno giustificate e il Direttore o
            suo delegato deciderà il da farsi.
          </p>

          <p class="text-2xl mb-6">
            L’assenza prolungata per ragioni diverse dalla malattia deve essere
            concordata in anticipo con il Direttore o suo delegato.
          </p>

          <p class="text-2xl mb-6">
            L’allievo privo di giustificazione o con giustificazione incompleta,
            oltre il secondo giorno dal rientro a scuola, non sarà ammesso alle
            lezioni, e, se minore, avrà l’obbligo di permanere nei locali della
            scuola. In tal caso, il Direttore o suo delegato si riserverà di
            contattare la famiglia, così come nel caso di assenze ricorrenti o
            con motivazioni poco chiare.
          </p>

          <p class="text-2xl mb-6">
            Si precisa che le assenze sono conteggiate in ore e non in giorni,
            pertanto sono calcolate come assenza anche le ore di entrata
            posticipata e di uscita anticipata rispetto all’orario scolastico.
          </p>

          <p class="text-2xl mb-6">
            Ai sensi della normativa regionale, il mancato conseguimento del
            limite minimo di frequenza, pari ad almeno il 75% dell'orario
            annuale, comporta l'esclusione dallo scrutinio finale e la non
            ammissione alla classe successiva o all'esame finale.
          </p>

          <h2 class="text-3xl text-[#0099ff] mt-8 mb-4">
            4. Entrate ed uscite
          </h2>

          <p class="text-2xl mb-6">
            L’ingresso e l’uscita in orari diversi da quelli regolari devono
            essere richiesti mediante permesso debitamente firmato sul libretto
            scolastico e vidimato dal Direttore o dal suo delegato. La
            giustificazione dovrà essere presentata all’insegnante di classe.
          </p>

          <p class="text-2xl mb-6">
            Gli allievi in ritardo rispetto all’orario di inizio sprovvisti di
            permesso firmato dalle famiglie potranno essere ammessi in aula dal
            Direttore o dal suo delegato. Sono comunque tenuti a presentare il
            giorno successivo, o al massimo entro due giorni, regolare
            giustificazione. Qualora ciò non avvenga, verranno immediatamente
            avvisate le famiglie.
          </p>

          <p class="text-2xl mb-6">
            Se a causa di valida motivazione lo studente dovesse avere la
            necessità di un permesso permanente di entrata/uscita fuori orario,
            dovrà farne richiesta specifica al Direttore o al suo delegato.
          </p>

          <p class="text-2xl mb-6">
            Per le uscite anticipate rispetto al termine regolare delle lezioni
            o l’assenza dalle lezioni pomeridiane, l’alunno dovrà presentare
            richiesta sul libretto scolastico firmata dei genitori, o di chi ne
            fa le veci, al Direttore o suo delegato, prima dell’inizio della
            prima ora.
          </p>

          <p class="text-2xl mb-6">
            Le uscite anticipate dovute ad indisposizione avverranno solo nel
            caso in cui un famigliare o un suo delegato vengano a prendere il
            ragazzo a scuola. Le uscite per altri motivi saranno autorizzate
            dopo che il Direttore o un suo delegato avrà preavvertito la
            famiglia e avuto il consenso scritto dalla stessa.
          </p>

          <p class="text-2xl mb-6">
            Qualora si presentasse al Centro un soggetto terzo per prelevare
            anticipatamente lo studente, i genitori saranno immediatamente
            contattati per verificarne la veridicità. Nel caso siano
            irraggiungibili telefonicamente, il Centro non potrà permettere
            l'uscita anticipata dello studente: ciò potrà avvenire solo mediante
            delega scritta da parte dei genitori.
          </p>
          <div class="space-y-6">
            <h2 class="text-3xl text-[#0099ff]">5. Norme di comportamento</h2>
            <h3 class="text-2xl font-semibold text-[#0077cc]">
              ACCESSO E USO DEI LOCALI
            </h3>
            <p class="text-xl">
              Ogni aula deve essere usata per il solo scopo didattico; non è
              consentito, quindi, affiggere poster, locandine, manifesti non in
              sintonia con l'ambiente. La stessa bacheca esposta in corridoio,
              deve essere utilizzata solo per le comunicazioni scolastiche e dal
              personale della scuola.
            </p>

            <p class="text-xl">
              Non è consentito inoltre lasciare in aula, al termine delle
              lezioni, materiale scolastico e/o utile allo svolgimento delle
              attività motorie o di laboratorio. Al cambio dell’ora tutti gli
              studenti devono rimanere in classe.
            </p>

            <p class="text-xl">
              Durante gli intervalli e la ricreazione, nessuno può rimanere o
              accedere alle aule e ai laboratori senza la presenza di un
              formatore. Durante gli spostamenti tra i vari ambienti la classe
              deve rimanere compatta, evitando schiamazzi e comportamenti
              contrari alla sicurezza come correre per i corridoi e le scale.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              ACCESSO ALLA SEGRETERIA
            </h3>
            <p class="text-xl">
              L’accesso alla segreteria è consentito agli allievi solamente al
              di fuori delle lezioni e in base all’orario previsto.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              COMPORTAMENTO IN AULA/LABORATORIO
            </h3>
            <p class="text-xl">
              L’allievo dovrà mantenere un comportamento adeguato e consono agli
              ambienti, secondo la buona educazione e le indicazioni dei
              formatori (non si mangia, non si mastica chewingum, si chiede la
              parola per parlare, non ci si dondola sulla sedia, ecc.). Lo
              studente deve mantenere il posto assegnato ed essere munito di
              tutto il materiale necessario per la giornata; non si accettano
              richieste di uscita durante le lezioni al fine di prelevare il
              materiale da altre aule né è consentito di lasciarlo in deposito
              presso le stesse.
            </p>
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl text-[#0099ff]">
              Norme di comportamento (continuazione)
            </h2>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              USCITE AI SERVIZI
            </h3>
            <p class="text-xl">
              Le uscite per recarsi ai servizi sono possibili solo durante la
              seconda, terza, quinta e settima ora di lezione, uno per volta;
              qualsiasi richiesta di uscita sarà comunque valutata in maniera
              obiettiva dall’insegnante.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              ESPULSIONE DALL'AULA
            </h3>
            <p class="text-xl">
              Gli allievi espulsi dall’aula devono sostare in corridoio, nei
              pressi dell’aula.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              COMPORTAMENTO IN MATERIA ANTINFORTUNISTICA
            </h3>
            <p class="text-xl">
              Gli utenti sono tenuti a seguire scrupolosamente le disposizioni
              impartite dai formatori in materia antinfortunistica ed i
              regolamenti specifici dei vari laboratori.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              INTERVALLO E RICREAZIONE
            </h3>
            <p class="text-xl">
              Gli allievi utilizzeranno esclusivamente gli spazi indicati,
              opportunamente sorvegliati dagli insegnanti a tutela della
              sicurezza.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              RACCOLTA DIFFERENZIATA
            </h3>
            <p class="text-xl">
              Secondo la legislazione vigente è obbligatorio differenziare la
              raccolta dei rifiuti usufruendo degli appositi contenitori
              dislocati nelle aree comuni del Centro. Presso le aule saranno
              disponibili esclusivamente i contenitori di raccolta carta e secco
              non riciclabile. Per le modalità di differenziazione si dovrà fare
              riferimento ai cartelli esplicativi esposti.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              SOMMINISTRAZIONE DI MEDICINALI
            </h3>
            <p class="text-xl">
              Il Centro non è autorizzato a somministrare alcun medicinale. Nel
              caso di alunni con patologie che necessitano l’assunzione di
              farmaci di mantenimento o a scopo profilattico, la famiglia può
              richiedere la collaborazione della scuola. Il riferimento per la
              gestione di questo problema è costituito dalle Linee Guida per la
              somministrazione di farmaci a scuola dei Ministero del Lavoro e
              MIUR del 25.11.05. Le situazioni nelle quali è ammessa la
              somministrazione sono quelle che non richiedono competenze
              specialistiche di tipo sanitario né l’esercizio di discrezionalità
              tecnica.
            </p>

            <p class="text-xl">
              In ogni caso è previsto che la scuola debba acquisire richiesta
              formale dei genitori e certificazione medica attestante lo stato
              di malattia dell’alunno con la prescrizione specifica dei farmaci
              da assumere che specifichi modalità e tempi di somministrazione,
              posologia e regole di conservazione.
            </p>

            <p class="text-xl">
              L’organizzazione di questo “servizio” spetta al coordinatore
              educativo-didattico, che dovrà verificare la disponibilità tra il
              proprio personale innanzitutto tra gli addetti PS. È opportuno, in
              casi particolari, prevedere anche un addestramento “in situazione”
              da parte del medico curante. La scuola provvede a individuare
              locali idonei per la somministrazione e tenuta dei farmaci, e il
              coordinatore educativo-didattico ne autorizzerà l’accesso ai
              famigliari, in caso possano provvedere autonomamente.
            </p>

            <p class="text-xl">
              Il rifiuto da parte del personale scolastico di assumere questo
              incarico per paura delle eventuali conseguenze non trova
              giustificazione, dal momento che non è riconosciuta alcuna
              responsabilità a loro carico, se sono state seguite correttamente
              le indicazioni del medico, mentre potrebbe configurarsi come
              omissione di soccorso (art. 593 CP) la mancata somministrazione
              secondo le procedure previste.
            </p>

            <p class="text-xl">
              Usufruiscono di tale “servizio” gli allievi con malattia cronica
              (patologia che non guarisce e che richiede terapia di
              mantenimento, es. asma, diabete), in cui i farmaci devono essere
              assunti con orari e posologia costanti, ma anche quegli allievi
              che sono affetti da patologie che possono comportare urgenze (es.
              convulsioni, shock anafilattico) prevedibili, con manifestazioni
              corrispondenti a quelle previste e descritte dal medico, in cui i
              farmaci devono essere somministrati con la modalità e la posologia
              prescritte.
            </p>

            <p class="text-xl">
              Nel caso che l’urgenza non presenti i sintomi descritti dal medico
              o riguardi un allievo per il quale non è stata avanzata alcuna
              richiesta, la gestione spetterà all’addetto PS e non dovrà essere
              somministrato alcun farmaco.
            </p>
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl text-[#0099ff]">
              Certificazioni da acquisire per la somministrazione di farmaci
              agli allievi
            </h2>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              1. Richiesta dei genitori
            </h3>
            <p class="text-xl">
              La richiesta dei genitori motivata (somministrazione del farmaco
              non differibile in orario extrascolastico e impossibilità di
              provvedere autonomamente), in cui si autorizza il personale
              individuato dalla scuola a somministrare il farmaco al figlio, con
              la modalità e il dosaggio indicati dal medico.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              2. Prescrizione medica
            </h3>
            <p class="text-xl">
              La prescrizione medica intestata all’alunno recante:
            </p>
            <ul class="list-disc ml-8">
              <li>Il nome commerciale del farmaco</li>
              <li>La modalità di somministrazione</li>
              <li>L’esatta posologia</li>
              <li>L’orario di somministrazione</li>
            </ul>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              3. Istruzioni del medico curante
            </h3>
            <p class="text-xl">
              Istruzioni del medico curante, intestate all’alunno, indirizzate
              al coordinatore educativo-didattico, su posologia e modalità di
              somministrazione del farmaco in caso della comparsa di episodi
              acuti di cui devono essere descritti i sintomi e sui comportamenti
              da assumere nel caso il farmaco non risultasse efficace.
            </p>

            <h2 class="text-3xl text-[#0099ff]">
              Uso di Mezzi Informatici e Privacy
            </h2>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              Autorizzazioni
            </h3>
            <p class="text-xl">
              È vietata senza autorizzazione della Direzione o di un suo
              delegato (docente), la realizzazione di immagini o registrazioni
              audio-video all’interno del Centro compresa la registrazione delle
              lezioni.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              Uso Fraudolento dei Mezzi Informatici
            </h3>
            <p class="text-xl">
              È vietato l’uso fraudolento di mezzi informatici, anche personali,
              quali rete Wi-Fi, internet, mail, social network nei confronti
              della scuola e/o dei compagni.
            </p>
            <p class="text-xl">
              Viene considerata mancanza grave la diffusione tramite (posta
              elettronica, WiFi, chat, social network, ecc.) di materiale
              multimediale atto ad offendere la dignità delle persone o il
              prestigio del Centro.
            </p>
            <p class="text-xl">
              Sarà richiesta l’immediata rimozione del materiale inserito e
              saranno presi provvedimenti disciplinari in base alla gravità del
              fatto, anche in sede giuridica.
            </p>

            <h3 class="text-2xl font-semibold text-[#0077cc]">
              Accesso a Internet e Password Personale
            </h3>
            <p class="text-xl">
              Per accedere ai servizi informatici del Centro viene assegnata, ad
              ogni allievo, una password strettamente personale non cedibile a
              terzi. L’utilizzo di una password altrui comporta la sospensione
              dei servizi informatici e sanzioni disciplinari.
            </p>
            <p class="text-xl">
              Se necessario per le attività didattiche, il Centro può fornire
              l’accesso a Internet.
            </p>
            <p class="text-xl">
              L’utilizzo di Internet ed il download devono essere sempre
              preventivamente autorizzati dal formatore.
            </p>
            <p class="text-xl">
              È vietata e oggetto di interventi disciplinari la navigazione in
              siti che abbiano contenuti contrari all’ispirazione e
              all’orientamento del Centro. A tale scopo tutto il traffico viene
              monitorato.
            </p>

            <h2 class="text-3xl text-[#0099ff]">Divieto di Fumo</h2>
            <p class="text-xl">
              Secondo la legislazione vigente è assolutamente vietato fumare
              all’interno del Centro, sia nei locali interni che nei cortili,
              qualsiasi tipo di sigarette: commerciali, non commerciali,
              elettroniche. Per i trasgressori si prenderanno le sanzioni
              previste successivamente.
            </p>
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl text-[#0099ff]">
              Uso di Cellulari e Dispositivi Multimediali
            </h2>
            <p class="text-xl">
              Ne è consentito l’uso solo durante le ricreazioni. Durante le
              lezioni i cellulari e tutti i dispositivi multimediali non
              inerenti all’attività formativa devono essere spenti e riposti
              nell’apposito armadietto. Se i telefoni vengono trovati in
              possesso dell’allievo durante le lezioni o se l’attività didattica
              viene interrotta dal suono di un cellulare, se ne prevede il
              ritiro e la comunicazione ai genitori mediante il registro
              elettronico, verranno restituiti solo al genitore dal giorno
              successivo al ritiro.
            </p>

            <h2 class="text-3xl text-[#0099ff]">Bullismo</h2>
            <p class="text-xl">
              Il bullismo è un abuso di potere che si concretizza in tutte
              quelle azioni di sistematica prevaricazione e sopruso, messe in
              atto da parte di uno studente/alunno, definito ”bullo” (o da parte
              di un gruppo), nei confronti di un altro studente/alunno,
              percepito come debole, definito ”vittima” e può assumere forme
              differenti (fisico, verbale, relazionale).
            </p>
            <p class="text-xl">
              Qualsiasi atto di bullismo è ritenuto mancanza grave o gravissima.
              Il cyberbullismo è il termine che indica un tipo di attacco
              continuo, ripetuto, offensivo e sistematico attuato mediante gli
              strumenti della rete che in pochissimo tempo danneggia la
              reputazione della vittima in una comunità molto ampia, anche
              perché i contenuti, una volta pubblicati, possono riapparire a più
              riprese in luoghi diversi.
            </p>
            <p class="text-xl">
              Qualsiasi atto di cyberbullismo è ritenuto mancanza gravissima. Le
              condotte di cyberbullismo, anche se poste in essere in altro
              luogo, in altro tempo rispetto all'edificio e all'orario
              scolastico (es. messaggi offensivi che partono di notte, dal pc di
              casa...), se conosciute dagli operatori scolastici (formatore,
              Direttore) rientrano nelle azioni perseguibili a scuola.
            </p>
            <p class="text-xl">
              Gli studenti devono essere coscienti del disvalore della condotta
              bullo/cyberbullo. Lo stesso disvalore viene attribuito a chi,
              omertosamente, mostra indifferenza a chi, all'interno del gruppo,
              rafforza la condotta aggressiva e chi comunque concorre alla
              condotta.
            </p>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Ruoli e Compiti delle Varie Figure
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">1. IL DIRETTORE</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Individua attraverso il Collegio dei Formatori un referente
                  del bullismo e cyberbullismo;
                </li>
                <li>
                  Coinvolge, nella prevenzione e contrasto al fenomeno del
                  bullismo, tutte le componenti della comunità scolastica,
                  particolarmente quelle che operano nell'area dell'informatica,
                  partendo dall'utilizzo sicuro di Internet a scuola;
                </li>
                <li>
                  Prevede eventuali corsi di aggiornamenti e formazione in
                  materia di prevenzione dei fenomeni di bullismo e
                  cyberbullismo, rivolti al personale docente e non docente;
                </li>
                <li>
                  Promuove sistematicamente azioni di sensibilizzazione dei
                  fenomeni del bullismo e cyberbullismo nel territorio in rete
                  con enti, associazioni, istituzioni locali ed altre scuole,
                  coinvolgendo alunni, docenti, genitori ed esperti;
                </li>
                <li>
                  Favorisce la discussione all'interno della scuola, attraverso
                  i vari organi collegiali, creando i presupposti di regole
                  condivise di comportamento per il contrasto e prevenzione dei
                  fenomeni del bullismo e cyberbullismo;
                </li>
                <li>
                  Prevede azioni culturali ed educative rivolte agli studenti,
                  per acquisire le competenze necessarie all’esercizio di una
                  cittadinanza digitale consapevole.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                2. IL REFERENTE DEL “BULLISMO E CYBERBULLISMO”
              </h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Promuove la conoscenza e la consapevolezza del bullismo e del
                  cyber-bullismo attraverso progetti d'istituto che coinvolgano
                  genitori, studenti e tutto il personale;
                </li>
                <li>
                  Coordina le attività di prevenzione ed informazione sulle
                  sanzioni previste e sulle responsabilità di natura civile e
                  penale, anche con eventuale affiancamento di genitori e
                  studenti;
                </li>
                <li>
                  Si rivolge a partner esterni alla scuola, quali servizi
                  sociali e sanitari, aziende del privato sociale, forze di
                  polizia, per realizzare un progetto di prevenzione;
                </li>
                <li>
                  Cura rapporti di rete fra scuole per eventuali
                  convegni/seminari/corsi.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">3. IL COLLEGIO FORMATORI</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Promuove scelte didattiche ed educative, anche in
                  collaborazione con altre scuole in rete, per la prevenzione
                  del fenomeno.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">4. IL CONSIGLIO DI CLASSE</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Pianifica attività didattiche e/o integrative finalizzate al
                  coinvolgimento attivo e collaborativo degli studenti e
                  all'approfondimento di tematiche che favoriscano la
                  riflessione e la presa di coscienza della necessità dei valori
                  di convivenza civile;
                </li>
                <li>
                  Favorisce un clima collaborativo all'interno della classe e
                  nelle relazioni con le famiglie, propone progetti di
                  educazione alla legalità e alla cittadinanza attiva.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                5. IL COORDINATORE DI CLASSE
              </h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Intraprende azioni congruenti con gli allievi della classe che
                  coordina, tenuto conto che l’istruzione ha un ruolo
                  fondamentale sia nell’acquisizione e rispetto delle norme
                  relative alla convivenza civile, sia nella trasmissione dei
                  valori legati ad un uso responsabile di internet;
                </li>
                <li>
                  Dialoga con gli allievi verificando le situazioni che possano
                  sfociare in fenomeni del bullismo e cyberbullismo;
                </li>
                <li>
                  Coinvolge il Referente del “Bullismo e Cyberbullismo” per
                  azioni di prevenzione;
                </li>
                <li>
                  Valorizza nell'attività didattica una modalità di lavoro di
                  tipo cooperativo e spazi di riflessioni da intraprendere con
                  gli studenti.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">6. IL FORMATORE</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Intraprende azioni congruenti con gli allievi delle proprie
                  classi, tenuto conto che l’istruzione ha un ruolo fondamentale
                  sia nell’acquisizione e rispetto delle norme relative alla
                  convivenza civile, sia nella trasmissione dei valori legati ad
                  un uso responsabile di internet;
                </li>
                <li>
                  Valorizza nell'attività didattica una modalità di lavoro di
                  tipo cooperativo e spazi di riflessioni da intraprendere con
                  gli studenti.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">7. I GENITORI</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Partecipano attivamente alle azioni di
                  formazione/informazione, istituite dalle scuole sui
                  comportamenti sintomatici del bullismo e del cyberbullismo;
                </li>
                <li>Sono attenti ai comportamenti dei propri figli;</li>
                <li>
                  Vigilano sull’uso delle tecnologie da parte dei ragazzi, con
                  particolare attenzione ai tempi, alle modalità, agli
                  atteggiamenti conseguenti (i genitori dovrebbero allertarsi se
                  uno studente, dopo l’uso di internet o del proprio telefonino,
                  mostra stati depressivi, ansiosi o paura);
                </li>
                <li>
                  Conoscono le azioni messe in campo dalla scuola e collaborano
                  secondo le modalità previste dal Patto di Corresponsabilità;
                </li>
                <li>Conoscono il codice di comportamento dello studente;</li>
                <li>
                  Conoscono le sanzioni previste da regolamento d’istituto nei
                  casi di bullismo, cyberbullismo e navigazione on-line a
                  rischio.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">8. GLI ALLIEVI</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  Sono coinvolti nella progettazione e nella realizzazione delle
                  iniziative scolastiche, al fine di favorire un miglioramento
                  del clima relazionale; in particolare, dopo opportuna
                  formazione, possono operare come educatori tra pari;
                </li>
                <li>
                  Imparano le regole basilari, per rispettare gli altri, quando
                  sono connessi alla rete, facendo attenzione alle comunicazioni
                  che inviano utilizzando i social media e le altre forme
                  comunicative che consente la rete;
                </li>
                <li>
                  Non è loro consentito, durante le attività didattiche o
                  comunque all’interno della scuola, acquisire – mediante
                  telefonini cellulari o altri dispositivi elettronici –
                  immagini, filmati o registrazioni vocali, se non per finalità
                  didattiche, previo consenso del docente. La divulgazione del
                  materiale acquisito all’interno dell’istituto è utilizzabile
                  solo per fini esclusivamente personali di studio o
                  documentazione, e comunque nel rispetto del diritto alla
                  riservatezza di tutti;
                </li>
                <li>
                  Durante le lezioni o le attività didattiche in genere non
                  possono usare cellulari, giochi elettronici e riproduttori di
                  musica, se non per finalità didattiche, previo consenso del
                  docente.
                </li>
              </ul>
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Tipologie Persecutorie Qualificate come Bullismo e Cyberbullismo
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">Bullismo:</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  La violenza fisica, psicologica o l’intimidazione del gruppo,
                  specie se reiterata;
                </li>
                <li>L’intenzione di nuocere;</li>
                <li>L’isolamento della vittima.</li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">Cyberbullismo:</h3>
              <ul class="list-inside list-disc text-xl">
                <li>
                  <strong>Flaming:</strong> Litigi online nei quali si fa uso di
                  un linguaggio violento e volgare;
                </li>
                <li>
                  <strong>Harassment:</strong> Molestie attuate attraverso
                  l’invio ripetuto di linguaggi offensivi;
                </li>
                <li>
                  <strong>Cyberstalking:</strong> Invio ripetuto di messaggi che
                  includono esplicite minacce fisiche, al punto che la vittima
                  arriva a temere per la propria incolumità;
                </li>
                <li>
                  <strong>Denigrazione:</strong> Pubblicazione all’interno di
                  comunità virtuali, quali newsgroup, blog, forum di
                  discussione, messaggistica immediata, siti internet, di
                  pettegolezzi e commenti crudeli, calunniosi e denigratori;
                </li>
                <li>
                  <strong>Outing estorto:</strong> Registrazione delle
                  confidenze – raccolte all’interno di un ambiente privato -
                  creando un clima di fiducia e poi inserite integralmente in un
                  blog pubblico;
                </li>
                <li>
                  <strong>Impersonificazione:</strong> Insinuazione all’interno
                  dell’account di un’altra persona con l’obiettivo di inviare
                  dal medesimo messaggi ingiuriosi che screditino la vittima;
                </li>
                <li>
                  <strong>Esclusione:</strong> Estromissione intenzionale
                  dall’attività online;
                </li>
                <li>
                  <strong>Sexting:</strong> Invio di messaggi via smartphone ed
                  Internet, corredati da immagini a sfondo sessuale.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Ulteriori Comportamenti Rientranti nella Fattispecie Previste
                dalla Legge 71/2017:
              </h3>
              <p class="text-xl">
                Una volta accertato quanto sopra, “salvo che il fatto
                costituisca reato, (…) il direttore o il formatore delegato che
                venga a conoscenza di atti di cyberbullismo ne informa
                tempestivamente i soggetti esercenti la responsabilità
                genitoriale ovvero i tutori dei minori coinvolti e attiva
                adeguate azioni di carattere educativo. (art. 5 comma 1
                L.71/2017).”
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">BESTEMMIA:</h3>
              <p class="text-xl">
                È assolutamente vietato bestemmiare in qualsiasi ambiente.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                INTRODUZIONE DI PORNOGRAFIA:
              </h3>
              <p class="text-xl">
                È vietato introdurre, utilizzare o diffondere materiale
                offensivo della persona sia sotto forma cartacea che
                multimediale.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                INTRODUZIONE E/O USO DI ALCOLICI E SOSTANZE STUPEFACENTI:
              </h3>
              <p class="text-xl">
                È fatto divieto di introdurre e utilizzare qualsiasi bevanda
                alcolica o sostanza stupefacente (droga).
              </p>
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Rispetto dei Materiali e delle Cose
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">Beni Personali e Furto:</h3>
              <p class="text-xl">
                È vietata la sottrazione o la ricettazione di qualsiasi bene
                della scuola e non, nonché il furto ai danni di terzi. Si invita
                a non portare a scuola oggetti di valore non attinenti
                l’attività didattica.
              </p>
              <p class="text-xl">
                Il Centro non è tenuto in alcun modo a ricevere e custodire i
                beni personali degli allievi, tra cui abbigliamento, libri,
                mezzi di locomozione, ecc., né assume alcuna responsabilità o
                risponde della loro custodia, conservazione e sottrazione,
                qualora siano portati o introdotti all’interno dell’Istituto. È
                fatto obbligo agli stessi allievi di apprestare tutte le cautele
                necessarie per impedire a loro carico qualsiasi evento dannoso.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Danneggiamento di Locali e Attrezzature:
              </h3>
              <p class="text-xl">
                In caso di danneggiamento o manomissione, l’allievo responsabile
                e la sua famiglia sono tenuti a risarcire il danno arrecato. Nel
                caso in cui il responsabile non sia individuabile con sicurezza,
                il risarcimento in quota parte è richiesto a ogni studente che
                utilizza tale locale o attrezzatura.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Segnalazione e Denuncia all’Autorità Giudiziaria:
              </h3>
              <p class="text-xl">
                Il Direttore della Casa e il Direttore della Scuola hanno la
                competenza di rappresentanza esterna e di relazione con
                l’esterno. Pertanto, devono denunciare la notizia di reato
                trasmettendo le informazioni di cui sono in possesso
                direttamente alla Procura della Repubblica competente o ad
                organi di Polizia Giudiziaria del territorio.
              </p>
              <p class="text-xl">
                Ciò vale sia nel caso in cui il minore sia vittima che autore
                del reato. I minori possono essere autori di reati, ossia degli
                stessi reati degli adulti.
              </p>
              <p class="text-xl">
                Nell’ambito scolastico, gli episodi di bullismo concentrano
                intorno a sé la maggior parte dei reati commessi dagli alunni.
                Il bullismo in sé non è un reato, posto che nessuna disposizione
                se ne occupa esplicitamente: il bullismo, però, costituisce la
                somma e/o la ripetizione di reati previsti dall’ordinamento,
                quali la violenza privata, l’estorsione, ingiuria, la
                diffamazione, gli atti persecutori e discriminatori a sfondo
                razziale, politico o sessuale, la violenza fisica e/o sessuale,
                la realizzazione e diffusione di materiale pedopornografico, gli
                atti vandalici e di danneggiamento, la detenzione a fine di
                spaccio e la cessione a qualunque titolo di stupefacenti.
              </p>
              <p class="text-xl">
                Quale che sia lo scenario, comunque, il Direttore della Casa,
                ricevuta notizia del reato, è obbligato a denunciare, senza
                ritardo, all’Autorità giudiziaria i reati procedibili d’ufficio
                commessi dagli studenti, verificatisi o rilevati all’interno
                dell’istituto, o comunque di cui è venuto a conoscenza in
                ragione del proprio ruolo.
              </p>
              <p class="text-xl">
                La denuncia va effettuata quale che sia l’età dell’autore del
                reato (e quindi anche per i minori di anni 14): ogni valutazione
                circa il rilievo dell’imputabilità è rimessa esclusivamente
                all’Autorità giudiziaria.
              </p>
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Rispetto degli Obblighi Giuridici e Disciplina
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">La Denuncia:</h3>
              <p class="text-xl">
                La denuncia può essere fatta sia in forma orale (presso gli
                uffici della Polizia di Stato o dei Carabinieri che
                provvederanno direttamente alla verbalizzazione ed all’inoltro
                all’autorità giudiziaria competente) sia in forma scritta, con
                indicazione chiara del denunciante e sottoscrizione della
                stessa. La denuncia può anche essere trasmessa direttamente alla
                Procura presso il Tribunale dei minorenni.
              </p>
              <p class="text-xl">
                Nella denuncia devono essere presenti tutti i dati acquisiti e
                disponibili (oltre al “racconto” del fatto, l’identità delle
                persone coinvolte, le modalità di acquisizione della notizia di
                reato, ecc.) con indicazione delle persone a conoscenza dei
                fatti o testimoni degli stessi. Anche in questo caso, la
                denuncia va fatta senza ritardo in rapporto alla gravità dei
                fatti.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Responsabilità Disciplinare:
              </h3>
              <p class="text-xl">
                La responsabilità disciplinare è personale. Essa è assunta per
                mancanze disciplinari, le quali sono costituite dai
                comportamenti dello studente considerati reato dalla vigente
                legislazione ovvero che violano i doveri stabiliti dall’art. 3
                del D.P.R. 24 giugno 1998 n. 249 o quelli contenuti nei punti
                precedenti del presente Regolamento, ovvero le violazioni del
                progetto educativo.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Mancanze: Lieve, Grave, Gravissime
              </h3>
              <p class="text-xl">
                In ogni caso sono considerate mancanze lievi:
              </p>
              <ul class="list-disc pl-8 text-xl">
                <li>Reiterata dimenticanza del libretto scolastico</li>
                <li>
                  Ritardi ripetuti non dovuti a oggettivi problemi di trasporto
                </li>
                <li>Ritardi al rientro dall’intervallo o al cambio dell’ora</li>
                <li>
                  Mancata o non tempestiva presentazione della richiesta di
                  giustificazione in caso di assenza
                </li>
                <li>
                  Prolungamento senza motivo dell'uscita autorizzata dalla
                  classe
                </li>
                <li>
                  Sosta durante le ore di lezione nei corridoi e avanti ai
                  distributori
                </li>
                <li>
                  Interruzione ripetuta e deliberata della lezione, rendendo
                  difficile il suo svolgimento con richieste immotivate o futili
                </li>
                <li>
                  Disturbo della lezione anche chiacchierando con i compagni
                  durante spiegazioni, interrogazioni e compiti in classe
                </li>
                <li>
                  Richiesta ripetuta di uscita dall'aula senza valido motivo
                </li>
                <li>Indisponibilità a verifiche e valutazioni</li>
                <li>Mancato svolgimento dei compiti assegnati a casa</li>
                <li>Comportamento non adeguato sui mezzi di trasporto</li>
                <li>
                  Adozione di un abbigliamento non adeguato all’ambiente
                  scolastico
                </li>
                <li>Mancanza materiale didattico</li>
                <li>
                  Danneggiamento del tesserino di riconoscimento per negligenza
                </li>
                <li>Danneggiamento del libretto scolastico per negligenza</li>
                <li>Dimenticanza della chiave dell’armadietto personale</li>
                <li>Dimenticanza utilizzo DPI</li>
              </ul>
            </div>
            <div class="space-y-8">
              <h2 class="text-3xl text-[#0099ff]">
                Mancanze Gravi e Gravissime
              </h2>

              <div>
                <h3 class="text-2xl text-[#0066cc]">Mancanze Gravi:</h3>
                <p class="text-xl">
                  In ogni caso sono considerate mancanze gravi:
                </p>
                <ul class="list-disc pl-8 text-xl">
                  <li>Mancato rispetto delle norme di sicurezza sul lavoro</li>
                  <li>
                    Uso del telefono cellulare o altri dispositivi elettronici
                    non autorizzati durante le lezioni
                  </li>
                  <li>Uso di linguaggio volgare</li>
                  <li>Imbrattamento di oggetti e ambienti della scuola</li>
                  <li>
                    Adozione di un linguaggio non adeguato all’ambiente
                    scolastico
                  </li>
                  <li>Lancio di oggetti dalla finestra</li>
                  <li>Fumare nei locali della scuola e nelle pertinenze</li>
                  <li>Assenze ingiustificate ripetute</li>
                  <li>Falsificazione della altrui firma</li>
                  <li>
                    Possesso non autorizzato delle credenziali di accesso alla
                    rete internet della scuola di altri soggetti
                  </li>
                  <li>Manomissione del registro elettronico</li>
                  <li>
                    Diffusione in vario modo di scritti, immagini o filmati che
                    siano lesivi del decoro e del buon nome dell’istituto o di
                    persone legate a vario titolo ad esso
                  </li>
                  <li>Scrittura sui muri, porte, arredi, e attrezzature</li>
                  <li>
                    Rottura e/o danneggiamento di vetri, porte, muri, arredi,
                    attrezzature, libri e oggetti vari
                  </li>
                  <li>Incisioni su banchi, porte, muri</li>
                  <li>
                    Sottrazione di beni, valori e oggetti, manomissione e/o
                    distruzione di beni della scuola
                  </li>
                  <li>La bestemmia</li>
                  <li>
                    Le minacce, le percosse e le ingiurie rivolte al personale
                    della scuola ovvero ad altri studenti sia in forma scritta
                    che verbale
                  </li>
                  <li>
                    Danneggiamento del libretto scolastico per atto voluto
                  </li>
                  <li>Uscita dall’istituto senza permesso</li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">Mancanze Gravissime:</h3>
                <p class="text-xl">
                  In ogni caso sono considerate mancanze gravissime:
                </p>
                <ul class="list-disc pl-8 text-xl">
                  <li>
                    Comportamenti offensivi e/o aggressivi ai danni di uno o più
                    alunni con lo scopo di esercitare un potere o un dominio su
                    di essi
                  </li>
                  <li>
                    Aggressioni fisiche (percosse, spinte, prepotenze fisiche)
                  </li>
                  <li>
                    Comportamenti verbali (ingiurie, diffamazioni, ricatti,
                    intimidazioni, vessazioni, insulti)
                  </li>
                  <li>
                    Comportamenti indiretti (ad esempio, attraverso social media
                    e dispositivi elettronici)
                  </li>
                  <li>Uso e spaccio di sostanze stupefacenti</li>
                  <li>Lesioni fisiche a persone</li>
                  <li>
                    Comportamenti configurabili come reati che violino la
                    dignità e il rispetto della persona umana
                  </li>
                  <li>
                    Falsificazione e/o fraudolento utilizzo di profili social
                    altrui
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">Sanzioni:</h3>
                <p class="text-xl">
                  In relazione alle mancanze disciplinari e alla loro gravità,
                  possono essere applicate, anche cumulativamente, le seguenti
                  sanzioni:
                </p>
                <ul class="list-decimal pl-8 text-xl">
                  <li>Il richiamo verbale</li>
                  <li>
                    Il richiamo scritto sul registro elettronico visibile ad
                    allievo e alla famiglia
                  </li>
                  <li>
                    Ammonizione scritta del Direttore/responsabile disciplina
                  </li>
                  <li>
                    La sospensione temporanea dalle lezioni e dalla frequenza
                    della scuola, fino ad un massimo di giorni 15
                  </li>
                  <li>
                    Allontanamento dalle lezioni per un periodo superiore a 15
                    giorni
                  </li>
                  <li>
                    Allontanamento dello studente dalla comunità scolastica fino
                    al termine dell’anno scolastico
                  </li>
                  <li>
                    L’esclusione dallo scrutinio finale o la non ammissione
                    all’Esame di qualifica
                  </li>
                </ul>
                <p class="text-xl">
                  Rimane salva la sanzione amministrativa per chi non ottempera
                  al divieto di fumo nei locali scolastici e nelle pertinenze.
                </p>
                <p class="text-xl">
                  Le infrazioni lievi sono sanzionate dal formatore che le
                  rileva con il richiamo verbale e/o scritto. Nel caso di
                  recidiva o nel caso in cui le circostanze lo richiedano, viene
                  irrogata la sanzione dell’ammonizione scritta del
                  Direttore/responsabile disciplina.
                </p>
                <p class="text-xl">
                  Nel caso in cui l’allievo prenda quattro note disciplinari
                  nell’arco del trimestre, il consiglio di disciplina viene
                  convocato per valutare la gravità delle mancanze.
                </p>
                <p class="text-xl">
                  Le infrazioni gravi vengono sanzionate con la sospensione
                  dalle lezioni fino a un massimo di 15 giorni. È possibile, in
                  considerazione del caso specifico, che la sospensione dalle
                  lezioni sia con obbligo di frequenza, vale a dire che
                  l’allievo ha l’obbligo di recarsi a scuola, ma non è ammesso
                  alle lezioni, facendo attività alternative.
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Sanzioni Disciplinari Aggiuntive
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Allontanamento dello Studente:
              </h3>
              <p class="text-xl">
                L’allontanamento dello studente può essere disposto anche quando
                ha commesso reati gravi o il suo comportamento costituisca
                pericolo per l’incolumità delle persone: in tal caso la durata
                sarà commisurata alle esigenze della situazione e l’atto viene
                adottato dal Direttore con procedura d’urgenza, fatta salva la
                necessità di confermare l’allontanamento da parte dell’Organo
                deputato all’irrogazione della sanzione con la procedura
                prevista al punto e.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">Infrazioni Gravissime:</h3>
              <p class="text-xl">
                Le infrazioni gravissime vengono punite con la sospensione dalle
                lezioni per una durata commisurata alla gravità del fatto, per
                un periodo superiore a 15 giorni.
              </p>
              <p class="text-xl">
                La sanzione che provoca l’allontanamento dalle lezioni per un
                periodo superiore a 15 giorni può essere adottata se ricorrono
                due condizioni, entrambe necessarie:
              </p>
              <ul class="list-disc pl-8 text-xl">
                <li>
                  Devono essere stati commessi “reati che violino la dignità e
                  il rispetto della persona umana” (es. violenza privata,
                  minaccia, percosse, ingiurie, reati di natura sessuale etc.)
                  oppure deve concretizzarsi una situazione di pericolo per
                  l’incolumità delle persone;
                </li>
                <li>
                  Il fatto commesso dev’essere di tale gravità da richiedere una
                  deroga all’allontanamento fino a 15 giorni. In tal caso la
                  durata dell’allontanamento è adeguata alla gravità
                  dell’infrazione, ovvero al permanere della situazione di
                  pericolo.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Esclusione e Non Ammissione all’Esame:
              </h3>
              <p class="text-xl">
                La sanzione che provoca l’allontanamento dalle lezioni fino al
                termine dell’anno scolastico, oppure esclusione dallo scrutinio
                finale o la non ammissione all’Esame di qualifica, può essere
                adottata se ricorrono due condizioni:
              </p>
              <ul class="list-disc pl-8 text-xl">
                <li>
                  Dev’esserci una recidiva nel caso di reati che violino la
                  dignità e il rispetto per la persona umana, oppure atti di
                  grave violenza o connotati da una particolare gravità tali da
                  determinare seria apprensione a livello sociale;
                </li>
                <li>
                  Non sono attuabili interventi per un reinserimento
                  responsabile e tempestivo dello studente nella comunità
                  scolastica durante l’anno scolastico.
                </li>
              </ul>
              <p class="text-xl">
                L’eventuale ritiro dalla scuola e/o il trasferimento ad altro
                Centro non interrompe il procedimento disciplinare.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">Sanzioni Alternative:</h3>
              <p class="text-xl">
                Può essere prevista, anche in aggiunta alle sanzioni previste al
                punto 7a, la possibilità di prestare attività a favore della
                comunità scolastica. Le attività previste consistono nel
                supportare e agevolare i servizi offerti dalla scuola, in linea
                con il progetto educativo della scuola.
              </p>
              <p class="text-xl">
                A titolo di esempio le attività possono essere: volontariato;
                pulizia ambienti; piccole manutenzioni; attività di ricerca e
                studio con approfondimenti relativi ai fatti accaduti, lavori di
                Segreteria, nel pieno rispetto del Regolamento sulla privacy
                (GDPR 2016) e delle norme sulla sicurezza sui luoghi di lavoro
                (D.Lgs. 81/08 e D.Lgs. 106/09).
              </p>
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Organi Disciplinari e Procedimento
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">Organi Disciplinari:</h3>
              <p class="text-xl">
                Gli organi che irrogano sanzioni disciplinari possono essere
                individuali (formatore, responsabile disciplina e Direttore) e
                collegiali (Consiglio di disciplina).
              </p>
              <p class="text-xl">
                Il Consiglio di disciplina è costituito da 3 docenti
                coordinatori di classe formatori, dal responsabile disciplina
                del Centro e dal Direttore del CFP che lo presiede.
              </p>
              <p class="text-xl">
                Le sanzioni disciplinari che comportano allontanamento dalla
                scuola possono essere adottate solo dal Consiglio di disciplina.
                Gli Organi disciplinari collegiali si riuniscono in presenza o,
                nel caso di divieto di riunione, a distanza.
              </p>
              <p class="text-xl">In particolare:</p>
              <ul class="list-disc pl-8 text-xl">
                <li>
                  Le sanzioni di cui alle lettere a. e b. del punto 7b del
                  presente Regolamento sono irrogate dal formatore che rileva
                  una infrazione che, a suo parere, non rivesta carattere di
                  gravità;
                </li>
                <li>
                  La sanzione di cui alla lettera c. del punto 7b del presente
                  Regolamento è irrogata dal Direttore o da un suo delegato su
                  segnalazione del singolo formatore o del consiglio di classe;
                </li>
                <li>
                  Le sanzioni di cui alle lettere d., e., f., g. del punto 7b
                  del presente Regolamento sono irrogate dal Consiglio di
                  disciplina;
                </li>
                <li>
                  Le sanzioni per infrazioni commesse durante le sessioni
                  d'esame sono irrogate dalla Commissione d'esame e sono
                  applicabili anche ai candidati esterni.
                </li>
              </ul>
              <p class="text-xl">
                La scelta della sanzione alternativa va effettuata dall'organo
                competente ad irrogare la sanzione principale, in relazione ai
                bisogni educativi emersi nel caso specifico e previo consenso
                dell'alunno o dei suoi genitori, se minorenne.
              </p>
              <p class="text-xl">
                L'organo competente ad infliggere sanzioni di un certo grado può
                sempre infliggere quelle di grado inferiore.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                Il Procedimento Disciplinare:
              </h3>
              <p class="text-xl">
                Le sanzioni disciplinari di cui alle lettere a. e b. del
                presente Regolamento sono assunte dal formatore dopo aver
                esplicitato con chiarezza al singolo alunno le motivazioni che
                lo inducono ad adottare il provvedimento: in caso di
                contestazione da parte dell’allievo il tutto deve essere
                verbalizzato nel registro on-line.
              </p>
              <p class="text-xl">
                Salvo i casi di irrogazione delle sanzioni di cui alle lettere
                a., b., il procedimento disciplinare è avviato dal Direttore o
                suo delegato in forma semplificata per la sanzione di cui alla
                lettera c., mediante contestazione scritta e dettagliata nel
                registro on line.
              </p>
              <p class="text-xl">
                Per le sanzioni di cui alle lettere d, e, f, g, il Direttore o
                suo delegato predispone comunicazione scritta dell'avvio del
                procedimento contenente:
              </p>
              <ul class="list-disc pl-8 text-xl">
                <li>Indicazione sommaria del fatto;</li>
                <li>
                  Avviso della convocazione davanti al Consiglio di disciplina
                  con indicazione di data, ora e sede;
                </li>
                <li>
                  Avviso della possibilità di depositare memorie e di esercitare
                  il diritto di difesa, anche con l'audizione personale o
                  l’assistenza di persona di fiducia e di prendere visione e/o
                  estrarre copia;
                </li>
                <li>L'individuazione del responsabile dell'istruttoria.</li>
              </ul>
              <p class="text-xl">
                La convocazione è comunicata tempestivamente allo studente
                maggiorenne e/o ai genitori, se minorenne.
              </p>
              <p class="text-xl">
                Il Consiglio di disciplina, di fronte a fatti gravi, deve essere
                convocato nel più breve tempo possibile da parte del Presidente
                dell’Organo Collegiale, compatibilmente con le esigenze di
                difesa e, comunque, non oltre tre giorni.
              </p>
              <p class="text-xl">
                L'alunno minorenne che accetta di intervenire al procedimento
                deve essere accompagnato dall'esercente la responsabilità
                genitoriale, appositamente invitato.
              </p>
              <p class="text-xl">
                Ogni alunno sottoposto a procedimento disciplinare ha facoltà di
                produrre prove e testimonianze a lui favorevoli.
              </p>
              <p class="text-xl">
                Il Direttore o suo delegato provvederà nell’immediatezza a dare
                comunicazione alla famiglia delle predette circostanze e della
                possibilità di presentare ricorso, che non sospende comunque il
                provvedimento, all’organo di garanzia entro il termine di 5
                giorni decorrenti dal ricevimento del provvedimento
                disciplinare. Nel caso di presenza del genitore all’audizione,
                la comunicazione della sanzione deve prevedere anche i termini
                del ricorso e l’organo deputato a riceverlo. Può inoltre,
                secondo quanto previsto al punto h), essere richiesta la
                sospensione della sanzione, alle sole condizioni ivi previste.
              </p>
              <p class="text-xl">
                Nel fascicolo del procedimento disciplinare vengono inserite
                tutte le informazioni raccolte, utili per accertare il fatto,
                con indicazione di eventuali testimoni in grado di riferire e le
                memorie scritte eventualmente depositate.
              </p>
            </div>
            <div class="space-y-8">
              <h2 class="text-3xl text-[#0099ff]">
                Audizione e Delibera del Consiglio di Disciplina
              </h2>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Audizione del Consiglio di Disciplina:
                </h3>
                <p class="text-xl">
                  Davanti al Consiglio di disciplina si procede all'audizione,
                  se presenti, dello studente individuato come responsabile,
                  degli esercenti la responsabilità genitoriale e di eventuali
                  persone da questi indicate come difensori o testimoni e si
                  annota l'eventuale richiesta di sanzione alternativa.
                </p>
                <p class="text-xl">
                  All'esito dell'istruttoria, il Consiglio delibera a
                  maggioranza dei presenti e, in caso di accertamento della
                  responsabilità disciplinare sulla base di elementi concreti,
                  precisi e concordanti dai quali si desuma che l'infrazione
                  disciplinare è stata effettivamente commessa dallo studente
                  incolpato, irroga la relativa sanzione.
                </p>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">Verbale della Delibera:</h3>
                <p class="text-xl">
                  Della deliberazione viene redatto verbale contenente:
                </p>
                <ul class="list-decimal pl-8 text-xl">
                  <li>
                    L'indicazione dei componenti (presenti e assenti) e del
                    segretario verbalizzante;
                  </li>
                  <li>Gli estremi dell'episodio;</li>
                  <li>
                    I nomi di eventuali testimoni e la sintetica esposizione dei
                    fatti da loro riportati;
                  </li>
                  <li>Le ragioni dello studente passibile di sanzione;</li>
                  <li>La motivazione del provvedimento finale;</li>
                  <li>
                    La sanzione disciplinare inflitta e l'eventuale sanzione
                    alternativa;
                  </li>
                  <li>
                    L'attività in favore della comunità scolastica nella quale è
                    possibile convertire la sanzione;
                  </li>
                  <li>
                    Il termine entro il quale è possibile impugnare il
                    provvedimento avanti l'Organo di Garanzia Interno, pari a
                    cinque giorni;
                  </li>
                  <li>
                    La delibera è comunicata direttamente mediante consegna di
                    copia scritta allo studente interessato e, se minorenne,
                    agli esercenti la responsabilità genitoriale se presenti
                    all’audizione; nel caso di assenza all’audizione, la
                    delibera di cui sopra è inviata nel più breve tempo
                    possibile e comunque entro il giorno successivo attraverso
                    il registro elettronico ed il libretto personale ed è
                    inserita nel fascicolo personale dell'allievo con eventuale
                    omissione dell'identità di terzi.
                  </li>
                </ul>
                <p class="text-xl">
                  Il procedimento disciplinare deve concludersi entro trenta
                  giorni dall’avvio, prorogabili di ulteriori giorni quindici
                  per esigenze istruttorie.
                </p>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Comunicazione delle Sanzioni:
                </h3>
                <p class="text-xl">
                  Delle sanzioni di cui alle lettere b, c, del punto 7b del
                  presente Regolamento la famiglia è informata attraverso il
                  registro elettronico.
                </p>
                <p class="text-xl">
                  Tutti gli altri provvedimenti adottati devono essere
                  integralmente comunicati per iscritto alla famiglia, con
                  lettera da inserire in copia agli atti della scuola e nel
                  fascicolo personale dell'alunno.
                </p>
              </div>
            </div>
            <div class="space-y-8">
              <h2 class="text-3xl text-[#0099ff]">
                Gestione delle Sanzioni e Organo di Garanzia
              </h2>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Inserimento delle Sanzioni nel Fascicolo Personale:
                </h3>
                <p class="text-xl">
                  Le sanzioni disciplinari vanno inserite nel fascicolo
                  personale dello studente e, come quest'ultimo, lo seguono in
                  occasione di trasferimento da una scuola ad un'altra o di
                  passaggio ad altra tipologia di istruzione.
                </p>
                <p class="text-xl">
                  Nel caso in cui nel testo della sanzione si faccia riferimento
                  a dati sensibili che riguardano altre persone coinvolte nei
                  fatti che hanno dato luogo alla sanzione stessa, si applica il
                  principio dell'indispensabilità del trattamento dei dati
                  sensibili, con l'adozione di "omissis" sull'identità delle
                  persone coinvolte. Il trattamento dei dati deve essere
                  conforme al Regolamento UE 679/2016 e al Decreto Legislativo
                  n.101 del 10/08/2018.
                </p>
                <p class="text-xl">
                  Il cambiamento di scuola non pone fine ad un procedimento
                  disciplinare iniziato, ma esso segue il suo iter fino alla
                  conclusione.
                </p>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Organo di Garanzia Interno:
                </h3>
                <p class="text-xl">
                  L'Organo di Garanzia Interno all'Istituto è costituito dal
                  coordinatore didattico, che lo presiede, dal Coordinatore
                  pastorale, da due docenti designati dall’Assemblea dei
                  formatori, da uno studente maggiorenne e da un genitore. In
                  caso di impossibilità di designare lo studente maggiorenne,
                  viene elevato a due la rappresentanza dei genitori. I
                  componenti designano anche un membro supplente. I membri
                  durano in carica un anno scolastico.
                </p>
                <p class="text-xl">
                  L'Organo di Garanzia è competente a decidere sui ricorsi in
                  materia disciplinare e sui reclami proposti contro le
                  violazioni del D.P.R. 24.06.1998 "Statuto delle studentesse e
                  degli studenti", anche contenute nel Regolamento
                  dell'Istituto, e a formulare proposte al Direttore in merito
                  ad eventuali modifiche al Regolamento di disciplina per
                  adeguarne il funzionamento alle esigenze della scuola.
                </p>
                <p class="text-xl">
                  In caso di incompatibilità di un membro (in quanto interessato
                  ai fatti oggetto di decisione o membro dell'organo che ha
                  inflitto la sanzione), questo verrà sostituito dal membro
                  supplente. La sostituzione opera anche in caso di dovere di
                  astensione (es. qualora faccia parte dell'O.G. lo studente
                  sanzionato o un suo genitore).
                </p>
                <p class="text-xl">
                  L'Organo di Garanzia è validamente costituito quando è
                  presente la maggioranza dei componenti e delibera a
                  maggioranza dei votanti. In caso di parità, prevale il voto
                  del Presidente. La riunione dell’Organo di Garanzia è valida
                  anche a distanza, qualora sia vietato l’incontro in presenza.
                </p>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">Impugnazioni:</h3>
                <p class="text-xl">
                  Avverso il provvedimento di irrogazione delle sanzioni
                  disciplinari, entro cinque giorni dalla comunicazione, è
                  ammesso ricorso scritto all'Organo di Garanzia Interno
                  istituito dalla scuola.
                </p>
                <p class="text-xl">
                  Lo studente sanzionato, o l’esercente la responsabilità
                  genitoriale nel caso di minorenne, presente in sede di
                  audizione e che ha ricevuto in tale sede la notifica della
                  sanzione, può chiedere la sospensione della sanzione invocando
                  il possibile danno grave ed irreparabile e presupponendo i
                  requisiti del fumus boni iuris, presentando richiesta
                  immediata contestualmente alla notifica del provvedimento.
                </p>
                <p class="text-xl">
                  In tal caso, la sanzione è sospesa in attesa del
                  pronunciamento dell’Organo di Garanzia.
                </p>
              </div>
            </div>
            <div class="space-y-8">
              <h2 class="text-3xl text-[#0099ff]">
                Decisione dell'Organo di Garanzia
              </h2>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Tempistiche e Procedura:
                </h3>
                <p class="text-xl">
                  L'Organo di Garanzia decide in via ordinaria entro cinque
                  giorni dalla presentazione del ricorso.
                </p>
                <p class="text-xl">
                  L'Organo di Garanzia ha il compito di deliberare in primo
                  luogo circa l'ammissibilità del ricorso e, in caso
                  affermativo, di valutare la correttezza della procedura messa
                  in atto per l'irrogazione delle sanzioni.
                </p>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Ammissibilità del Ricorso:
                </h3>
                <p class="text-xl">
                  L'ammissibilità del ricorso, pena l'irricevibilità, è legata
                  a:
                </p>
                <ul class="list-disc pl-6 text-xl">
                  <li>aspetti non presi in esame durante l'accertamento;</li>
                  <li>carenza di motivazione;</li>
                  <li>eccesso della sanzione.</li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Valutazione e Decisione dell'Organo di Garanzia:
                </h3>
                <p class="text-xl">
                  Valutata la correttezza o meno del procedimento seguito per
                  l'irrogazione della sanzione, l'Organo di Garanzia, con
                  delibera motivata presa a maggioranza semplice dei presenti
                  (non è ammessa l'astensione dal voto), può:
                </p>
                <ul class="list-decimal pl-6 text-xl">
                  <li>
                    <strong>Confermare la sanzione</strong>
                  </li>
                  <li>
                    <strong>Riformare la sanzione:</strong>
                    <ul class="list-disc pl-6">
                      <li>Modifica parziale o totale;</li>
                      <li>Annullamento;</li>
                      <li>
                        Remissione al medesimo organo irrogante per una nuova
                        valutazione sulla base di nuovi criteri o evidenze;
                      </li>
                      <li>
                        Remissione ad altro organo irrogante qualora nella fase
                        analitica sia emersa l'incompetenza dell'organo che ha
                        inflitto la sanzione.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl text-[#0066cc]">
                  Provvedimento Definitivo:
                </h3>
                <p class="text-xl">
                  Il provvedimento dell'Organo di Garanzia Interno di
                  applicazione della sanzione ha carattere definitivo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/9-attivita-promozionali"
            className={linkStyle}
          >
            9 Attività promozionali
          </a>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              Attività Promozionali del CFP e Rapporti con il Territorio
            </h2>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                9.1. Rapporti con le Imprese
              </h3>
              <p class="text-xl">
                Le imprese risultano essere partner del “campo formativo”.
                Concorrono all’individuazione delle caratteristiche
                professionali, tecnologiche e degli snodi formativi del
                progetto. Prestano un servizio formativo sotto forma di
                testimonianza, dimostrazione, disponibilità a visite guidate ed
                a stage. Partecipano alla valutazione degli esiti dello stage
                dell’allievo.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                9.2. Orientamento e Territorio
              </h3>
              <p class="text-xl">
                Il CFP Don Bosco appartiene ad una rete istituzionalmente
                predisposta alla gestione dell’orientamento nell’ambito
                dell’obbligo formativo e, successivamente, del diritto-dovere
                all’istruzione e alla formazione. La rete, nata nel 2004, sta
                portando avanti un progetto chiamato “Orientamento e
                territorio”, che coinvolge vari attori impegnati su obiettivi
                comuni: istituzioni scolastiche (scuole secondarie di 1° e 2°
                grado), Centri di Formazione Professionale, Associazioni
                imprenditoriali, Enti Locali.
              </p>
            </div>

            <div>
              <h3 class="text-2xl text-[#0066cc]">
                9.3. Rapporti con Altri Enti
              </h3>
              <p class="text-xl">
                Qualora la situazione lo richieda, verranno coinvolti i Comuni,
                l’Azienda U.L.S.S. n. 4, la Neuropsichiatria infantile, la
                “Nostra Famiglia” ed il Consultorio.
              </p>
            </div>
          </div>
        </div>
        <div className={sectionStyle}>
          <a
            href="http://archive.donboscosandona.it/10-valutazione"
            className={linkStyle}
          >
            10 Valutazione
          </a>
          <div class="space-y-8">
            <h2 class="text-3xl text-[#0099ff]">
              10.1. La Valutazione degli Allievi
            </h2>
            <p class="text-xl">
              La valutazione degli allievi non ha funzione selettiva né si
              limita ad esprimere un giudizio di merito, ma è uno strumento di
              verifica della programmazione educativo didattica e stimolo al
              raggiungimento degli obiettivi prefissati.
            </p>
            <ul class="list-disc pl-6 text-xl space-y-2">
              <li>
                la media delle valutazioni delle prove effettuate in itinere;
              </li>
              <li>
                la progressione dell’apprendimento rispetto al livello di
                partenza;
              </li>
              <li>l’impegno manifestato;</li>
              <li>il comportamento e la crescita della persona;</li>
              <li>la partecipazione alle attività didattiche;</li>
              <li>
                la partecipazione, l’applicazione e l’efficienza manifestate
                nello stage aziendale.
              </li>
            </ul>
            <p class="text-xl">
              La valutazione iniziale rileva la situazione di partenza
              dell’alunno consentendo di mettere in atto, al bisogno, strategie
              di recupero, di orientamento e/o predisposizione di percorsi
              individualizzati.
            </p>
            <p class="text-xl">
              La valutazione intermedia fornisce all’allievo e alla sua famiglia
              indicazioni bimestrali sui progressi ottenuti nelle varie fasi del
              percorso formativo e permette al formatore di ritarare gli
              obiettivi didattici sulla base dei risultati delle prove oggettive
              somministrate.
            </p>
            <p class="text-xl">
              La valutazione finale tiene conto della situazione di base, delle
              valutazioni intermedie e delle competenze trasversali e
              tecnico-professionali raggiunte, determinando l’ammissione o la
              non ammissione dell’alunno all’anno successivo. Al termine
              dell’intero percorso, il collegio dei formatori si riunisce per lo
              scrutinio finale. Qualora non siano state raggiunte le competenze
              necessarie, l’allievo non verrà ammesso all’esame di qualifica. In
              caso contrario, l’esame verrà sostenuto alla presenza di una
              commissione esterna convocata dalla Regione Veneto.
            </p>

            <h2 class="text-3xl text-[#0099ff]">
              10.2. Criteri per lo Svolgimento degli Scrutini
            </h2>
            <p class="text-xl">
              Il Consiglio di classe ha il compito di attribuire la valutazione
              complessiva dell’allievo tenendo conto della maturazione integrale
              della persona e del raggiungimento degli obiettivi formativi. Al
              termine dello scrutinio il coordinatore di classe presenterà ai
              rappresentanti degli allievi e dei genitori i risultati dello
              stesso e le strategie da mettere in atto per superare le
              difficoltà riscontrate.
            </p>

            <h3 class="text-2xl text-[#0066cc]">
              10.2.1. Valutazione degli Obiettivi Didattici
            </h3>
            <table class="table-auto w-full text-xl border-separate border-spacing-2">
              <thead>
                <tr>
                  <th class="border p-2">Punteggio</th>
                  <th class="border p-2">Descrizione</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">9</td>
                  <td class="border p-2">
                    Raggiunti e rielaborati in modo ottimo
                  </td>
                </tr>
                <tr>
                  <td class="border p-2">8</td>
                  <td class="border p-2">Raggiunti e rielaborati</td>
                </tr>
                <tr>
                  <td class="border p-2">7</td>
                  <td class="border p-2">Raggiunti ed assimilati</td>
                </tr>
                <tr>
                  <td class="border p-2">6</td>
                  <td class="border p-2">Raggiunti in misura sufficiente</td>
                </tr>
                <tr>
                  <td class="border p-2">5</td>
                  <td class="border p-2">Raggiunti in modo lacunoso</td>
                </tr>
                <tr>
                  <td class="border p-2">4</td>
                  <td class="border p-2">
                    Raggiunti in modo gravemente lacunoso
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 class="text-2xl text-[#0066cc]">
              10.2.2. Valutazione degli Obiettivi Educativi
            </h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-xl text-[#0066cc]">
                  Valutazione della partecipazione e dell'interesse
                </h4>
                <table class="table-auto w-full text-xl border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th class="border p-2">Punteggio</th>
                      <th class="border p-2">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border p-2">9</td>
                      <td class="border p-2">
                        Partecipa e interviene in modo costante e costruttivo
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">8</td>
                      <td class="border p-2">
                        Partecipa e interviene in modo appropriato
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">7</td>
                      <td class="border p-2">
                        Partecipa e interviene in modo discreto
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">6</td>
                      <td class="border p-2">
                        Partecipa con discontinuità ed è fonte di disturbo
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">5</td>
                      <td class="border p-2">
                        Non partecipa ed è costante fonte di disturbo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 class="text-xl text-[#0066cc]">
                  Valutazione della relazione con i compagni
                </h4>
                <table class="table-auto w-full text-xl border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th class="border p-2">Punteggio</th>
                      <th class="border p-2">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border p-2">9</td>
                      <td class="border p-2">Relazione matura e disponibile</td>
                    </tr>
                    <tr>
                      <td class="border p-2">8</td>
                      <td class="border p-2">Relazione serena e costruttiva</td>
                    </tr>
                    <tr>
                      <td class="border p-2">7</td>
                      <td class="border p-2">Relazione positiva</td>
                    </tr>
                    <tr>
                      <td class="border p-2">6</td>
                      <td class="border p-2">
                        Relazione a volte problematica e conflittuale
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">5</td>
                      <td class="border p-2">
                        Relazione incompatibile con il Progetto Educativo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 class="text-xl text-[#0066cc]">
                  Valutazione della relazione con i docenti
                </h4>
                <table class="table-auto w-full text-xl border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th class="border p-2">Punteggio</th>
                      <th class="border p-2">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border p-2">9</td>
                      <td class="border p-2">
                        Relazione matura e collaborativa
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">8</td>
                      <td class="border p-2">Relazione serena e costruttiva</td>
                    </tr>
                    <tr>
                      <td class="border p-2">7</td>
                      <td class="border p-2">Relazione positiva</td>
                    </tr>
                    <tr>
                      <td class="border p-2">6</td>
                      <td class="border p-2">
                        Relazione problematica e poco rispettosa
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">5</td>
                      <td class="border p-2">
                        Relazione incompatibile con il Progetto Educativo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 class="text-xl text-[#0066cc]">
                  Valutazione dello studio e dei compiti
                </h4>
                <table class="table-auto w-full text-xl border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th class="border p-2">Punteggio</th>
                      <th class="border p-2">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border p-2">9</td>
                      <td class="border p-2">
                        Compiti e studio eseguiti con diligenza e costanza
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">8</td>
                      <td class="border p-2">
                        Compiti e studio eseguiti con costanza
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">7</td>
                      <td class="border p-2">
                        Compiti e studio eseguiti abbastanza regolarmente
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">6</td>
                      <td class="border p-2">
                        Compiti e studio eseguiti saltuariamente
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">5</td>
                      <td class="border p-2">Compiti e studio assenti</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 class="text-xl text-[#0066cc]">
                  Valutazione della condotta
                </h4>
                <table class="table-auto w-full text-xl border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th class="border p-2">Punteggio</th>
                      <th class="border p-2">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border p-2">10</td>
                      <td class="border p-2">Condotta esemplare</td>
                    </tr>
                    <tr>
                      <td class="border p-2">9</td>
                      <td class="border p-2">Condotta molto buona</td>
                    </tr>
                    <tr>
                      <td class="border p-2">8</td>
                      <td class="border p-2">Condotta buona</td>
                    </tr>
                    <tr>
                      <td class="border p-2">7</td>
                      <td class="border p-2">Condotta discreta</td>
                    </tr>
                    <tr>
                      <td class="border p-2">6</td>
                      <td class="border p-2">
                        Condotta poco accettabile con atteggiamenti
                        indisciplinati
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-2">5</td>
                      <td class="border p-2">
                        Condotta incompatibile con il Progetto Educativo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
