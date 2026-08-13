export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const services: { [key: string]: any } = {
    'video-immobiliere': {
      title: 'Vidéo immobilière',
      image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
      content: (
        <>
          <h2>Incarner vos équipes, sublimer vos biens et déclencher le coup de cœur</h2>
          <p>Dans un marché saturé de photos grand-angle sans âme et de visites virtuelles générées par IA, l'immobilier reste avant tout une aventure humaine et émotionnelle. Une vidéo immobilière réussie ne se contente pas de lister des mètres carrés : elle raconte l'histoire d'un lieu, met en lumière le savoir-faire de votre agence et crée une connexion immédiate avec vos futurs acheteurs.</p>
          <p>Chez byli4m corporate, nous combinons exigence cinématique et proximité terrain pour transformer vos annonces et votre image de marque en vrais leviers de croissance.</p>

          <h2>Pourquoi intégrer la vidéo dans votre stratégie immobilière ?</h2>
          <p>Aujourd'hui, les acquéreurs et les vendeurs recherchent de la transparence et du vrai. Plutôt que de faire défiler des visuels statiques, la vidéo offre une expérience vivante et engageante.</p>
          <p><strong>Intégrer la vidéo dans votre communication vous permet de :</strong></p>
          <ul>
            <li><strong>Démarcher moins, séduire plus :</strong> Attirez naturellement les propriétaires en leur prouvant que vous investissez réellement dans la mise en valeur de leur bien pour décrocher des mandats exclusifs.</li>
            <li><strong>Incarner votre agence :</strong> Montrez les visages, la passion et l'accompagnement sur-mesure de vos collaborateurs pour établir une relation de confiance avant même la première rencontre.</li>
            <li><strong>Gagner un temps précieux :</strong> La vidéo pré-qualifie les acheteurs. Finies les visites inutiles, vous ne faites déplacer que des prospects réellement projetés et séduits.</li>
          </ul>

          <h2>Les bénéfices concrets pour votre agence</h2>
          <h3>1. Révéler l'âme des lieux</h3>
          <p>Grâce à un travail minutieux sur la lumière naturelle, le cadrage et le rythme du montage, nous capturons l'atmosphère unique de chaque bien : la chaleur d'une pièce de vie, la circulation des espaces, les détails architecturaux.</p>

          <h3>2. Une présence forte sur les réseaux sociaux</h3>
          <p>Les algorithmes d'Instagram (Reels), TikTok et LinkedIn privilégient massivement les formats vidéo verticaux (9:16). Nous créons du contenu dynamique et immersif qui capte l'attention dès les premières secondes.</p>

          <h3>3. Une valeur perçue démultipliée</h3>
          <p>Proposer une production audiovisuelle léchée à vos clients vendeurs valorise leur patrimoine au juste prix et positionne votre agence comme une référence premium sur votre secteur.</p>

          <h2>Un investissement rentable pour accélérer vos transactions</h2>
          <p>La vidéo n'est pas une dépense marketing gadget, c'est un accélérateur de business. En combinant storytelling humain et esthétique visuelle, vous marquez les esprits, gagnez des mandats plus facilement et vendez plus rapidement.</p>
        </>
      ),
    },
    'interviews-temoignages': {
      title: 'Interviews & Témoignages vidéo',
      image: '/austin-distel-Hg3BHX6U5jg-unsplash.jpg',
      content: (
        <>
          <h2>Donner de la voix et du cœur à votre entreprise</h2>
          <p>À l'heure où les consommateurs et prospects cherchent des preuves de sincérité, les longs discours institutionnels et les arguments marketing abstraits ne suffisent plus. Rien ne vaut l'authenticité d'un visage, d'une voix et d'une histoire vécue.</p>
          <p>La vidéo d'interview ou de témoignage est le levier le plus puissant pour humaniser votre marque, valoriser vos équipes et rassurer vos futurs clients. Chez byli4m corporate, nous capturons la réalité du terrain avec une approche humaine, fluide et cinématique.</p>

          <h2>Pourquoi intégrer des témoignages et interviews dans votre communication ?</h2>
          <p>Les individus n'achètent pas seulement un produit ou un service : ils choisissent des personnes en qui ils ont confiance. Une interview bien réalisée transforme une simple présentation en une relation de proximité.</p>
          <p><strong>Ce format vous permet de :</strong></p>
          <ul>
            <li><strong>Déclencher la confiance (Preuve sociale) :</strong> Un client satisfait qui raconte son expérience est mille fois plus persuasif qu'un texte de vente sur un site web.</li>
            <li><strong>Incarner votre marque employeur :</strong> Donnez la parole à vos collaborateurs pour montrer les coulisses, transmettre vos valeurs et attirer les meilleurs talents.</li>
            <li><strong>Simplifier vos messages complexes :</strong> Expliquez la valeur ajoutée d'un accompagnement ou d'une solution à travers le regard de ceux qui l'utilisent au quotidien.</li>
          </ul>

          <h2>Les bénéfices concrets pour votre business</h2>
          <h3>1. Une crédibilité maximale</h3>
          <p>Finies les citations textuelles anonymes. Un témoignage vidéo incarné apporte une preuve irréfutable de la qualité de votre travail et lève les hésitations de vos prospects.</p>

          <h3>2. Une connexion émotionnelle forte</h3>
          <p>Grâce à notre travail sur le rythme, la musique et l'expression des intervenants, nous faisons ressortir la passion de vos équipes et la sincérité de vos clients.</p>

          <h3>3. Un contenu polyvalent & déclinable</h3>
          <p>Une seule session de tournage peut être découpée en un format long pour votre site internet, et en plusieurs mini-capsules verticales (Reels, TikTok, LinkedIn) pour faire vivre vos réseaux sociaux sur la durée.</p>

          <h2>Nos formats d'interviews et de témoignages</h2>
          <p><strong>Nous adaptons la mise en scène selon vos objectifs stratégiques :</strong></p>
          <ul>
            <li><strong>Le Témoignage Client "Success Story" :</strong> Votre client raconte son problème initial, sa rencontre avec votre entreprise et les résultats concrets obtenus. C'est l'outil de conversion ultime.</li>
            <li><strong>L'Interview Marque Employeur / Coulisses :</strong> Mettez en avant le quotidien de vos équipes et la culture de votre entreprise pour booster vos recrutements.</li>
            <li><strong>La Parole d'Expert / Storytelling :</strong> Un format où le dirigeant ou un spécialiste partage sa vision et son savoir-faire pour installer votre leadership.</li>
            <li><strong>Le Format Snackable (Capsule Réseaux Sociaux) :</strong> Des formats très courts (15 à 45 secondes) dynamiques, sous-titrés et rythmés, conçus pour capter l'attention.</li>
          </ul>

          <h2>La touche byli4m : L'art de mettre à l'aise et de captiver</h2>
          <p>Réussir une interview ne s'improvise pas. Notre savoir-faire réside dans la préparation et la technique :</p>
          <ul>
            <li><strong>Une direction d'intervenant bienveillante :</strong> Nous créons un climat d'échange chaleureux et naturel pour obtenir des réponses spontanées et incarnées.</li>
            <li><strong>Le dispositif multi-caméra :</strong> Nous filmons sous plusieurs angles complémentaires pour un montage dynamique et fluide.</li>
            <li><strong>Une prise de son & lumière irréprochables :</strong> Micro-cravates haute fidélité et éclairage doux pour un rendu digne d'un plateau télé.</li>
            <li><strong>Habillage graphique & Sous-titres dynamiques :</strong> Ajout de sous-titres animés esthétiques pour une lecture optimale sur smartphone.</li>
          </ul>

          <h2>Investissez dans ce qui rassure vraiment vos clients</h2>
          <p>Qu'il s'agisse de convaincre un prospect hésitant, de valoriser un projet réussi ou de recruter votre futur talent, la vidéo d'interview est l'un des investissements audiovisuels au ROI le plus direct.</p>
          <p>Prêts à donner la parole à ceux qui font la réussite de votre entreprise ?</p>
        </>
      ),
    },
    'marque-personnelle': {
      title: 'Personal Branding pour indépendants',
      image: '/kate-oseen-XQKUIPjPl-s-unsplash.jpg',
      content: (
        <>
          <h2>Devenez la référence de votre secteur grâce à la vidéo</h2>
          <p>Quand on est indépendant, consultant ou fondateur d'entreprise, les clients n'achètent pas seulement une prestation : ils achètent une personne. Ils choisissent votre vision, votre énergie, votre façon d'expliquer les choses et la confiance que vous leur inspirez.</p>

          <p>Pourtant, la plupart des indépendants restent invisibles ou se cachent derrière des posts textuels anonymes. C'est dommage : le <strong>Personal Branding en vidéo</strong> est aujourd'hui le moyen le plus rapide d'assoir son autorité, d'attirer les bons clients et de ne plus jamais avoir à se brader.</p>

          <p>Chez <strong>byli4m corporate</strong>, nous créons du contenu vidéo incarné, esthétique et percutant pour révéler votre personnalité et propulser votre activité.</p>

          <h2>Pourquoi travailler sa marque personnelle quand on est indépendant ?</h2>

          <h3>Inspirer une confiance immédiate</h3>
          <p>La vidéo permet à vos futurs clients de vous voir, de vous entendre et d'apprendre à vous connaître avant même le premier contact. Quand ils vous appellent, le contrat est déjà à moitié vendu.</p>

          <h3>Stop à la pige et la prospection à chaud</h3>
          <p>En partageant régulièrement vos conseils, vos réflexions et vos coulisses, vous attirez naturellement à vous des prospects déjà convaincus (Inbound Marketing).</p>

          <h3>Affirmer sa singularité et sortir de la guerre des prix</h3>
          <p>Vos compétences peuvent être comparées à celles d'un concurrent, mais votre personnalité est unique. Incarner son offre permet de sortir définitivement de la guerre des prix par le haut.</p>

          <h3>Se créer un patrimoine de marque</h3>
          <p>Chaque vidéo produite devient un actif réutilisable sur LinkedIn, Instagram, votre site web ou dans vos propositions commerciales pendant des mois.</p>

          <h2>Notre accompagnement : Du sur-mesure, sans prise de tête</h2>

          <p>Pas besoin d'y passer vos journées ni de devenir un expert technique. Notre rôle est de vous mettre dans les meilleures conditions pour faire ressortir le meilleur de vous-même.</p>

          <h3>1. La Ligne Éditoriale & La Stratégie</h3>
          <p>On prend le temps de vous connaître. Lors d'un échange préalable, on creuse votre univers, vos forces et vos objectifs. On définit un positionnement clair et une liste de sujets percutants qui parlent directement aux problèmes de vos clients idéaux.</p>

          <h3>2. Le Tournage Immersif & Guidé</h3>
          <p>C'est le moment de capter votre authenticité. Que ce soit chez vous, dans vos bureaux ou dans le cadre de votre choix, nous venons avec notre matériel professionnel (caméras, micros haute fidélité, lumières). Notre plus grande force ? Vous mettre à l'aise. On vous guide, on échange de façon naturelle, et on efface tout le stress de la caméra.</p>

          <h3>3. La Post-Production Cinématique</h3>
          <p>C'est là que la magie opère. Nous tricotons vos prises de parole pour leur donner un rythme dynamique : coupes fluides, sous-titres animés et esthétiques (indispensables pour la lecture sans le son sur smartphone), étalonnage des couleurs et habillage sonore soigné.</p>

          <h3>4. Et pour la diffusion ? On vous aide !</h3>
          <p>Créer de superbes vidéos ne sert à rien si elles restent dans un dossier sur votre ordinateur. Nous vous fournissons des fichiers prêts à l'emploi et parfaitement optimisés (formats verticaux pour Reels/TikTok/Shorts, formats carrés ou horizontaux pour LinkedIn et votre site). Et si vous ne savez pas comment les publier ou rédiger vos accroches, nous pouvons vous accompagner pour structurer votre calendrier de diffusion.</p>

          <h2>Prêt(e) à révéler votre vrai potentiel en vidéo ?</h2>
          <p>Il est temps de mettre un visage sur votre expertise et d'attirer les projets que vous méritez vraiment.</p>
          <p>Parlons de vos idées, de votre positionnement et de vos prochaines vidéos autour d'un échange direct.</p>
        </>
      ),
    },
  };

  const service = services[slug] || {
    title: slug.replace(/-/g, ' ').toUpperCase(),
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    content: (
      <>
        <h2>Service en développement</h2>
        <p>Ce service est actuellement en cours de développement. Contactez notre équipe pour plus d'informations sur ce que nous pouvons faire pour vous.</p>
      </>
    ),
  };

  return (
    <div style={{ background: '#000', color: '#fff' }}>
      {/* Bannière image */}
      <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Contenu SEO-friendly */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '-1px', color: '#00d9ff' }}>
          {service.title}
        </h1>

        <style>{`
          .service-content h2 {
            font-size: 1.8em;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 20px;
            color: #00d9ff;
          }
          .service-content h3 {
            font-size: 1.3em;
            font-weight: 700;
            margin-top: 30px;
            margin-bottom: 15px;
            color: #fff;
          }
          .service-content p {
            font-size: 1.05em;
            color: #b0b0b0;
            line-height: 1.8;
            margin-bottom: 20px;
          }
          .service-content ul {
            font-size: 1.05em;
            color: #b0b0b0;
            line-height: 1.8;
            margin: 20px 0 20px 20px;
          }
          .service-content li {
            margin-bottom: 12px;
          }
          .service-content strong {
            color: #fff;
          }
        `}</style>

        <div className="service-content">
          {service.content}
        </div>

        <a href="mailto:byli4mpro@gmail.com" style={{ display: 'inline-block', padding: '15px 35px', background: '#00d9ff', color: '#000', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px', fontSize: '0.95em', cursor: 'pointer', marginTop: '40px' }}>
          Demander un devis gratuit
        </a>
      </div>
    </div>
  );
}
