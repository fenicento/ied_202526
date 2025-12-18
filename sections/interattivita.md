---
layout: cover
transition: fade
background: /media/interaction.jpg
---

<div class="absolute bottom-5 right-10 text-right">

# Progettare l'interattività

</div>

---

# Interazione e interattività

<div class="mt-10">
<b>Interazione</b>

Azione, reazione, influenza reciproca di cause, fenomeni, forze, elementi, sostanze, agenti naturali, fisici, chimici, e per estensione psicologici e sociali
</div>

<div class="mt-10">
<b>Interattività</b>

Nell'ambito dell'informatica e della comunicazione, particolare tipo di relazione che si stabilisce tra i media digitali e i loro utenti, che sottolinea il ruolo di partecipazione attiva offerto dal medium ed esercitato dall'utente all'interno di un processo di trasferimento di informazioni mediato dal computer
</div>

---

# L'interattività nel museo

<div class="grid grid-cols-3 gap-10 mt-10">

<div v-click class="text-center">
  <div class="text-4xl mb-6 opacity-30">01</div>
  <h3 class="text-xl font-semibold mb-4">Tecnica</h3>
  <p class="text-sm leading-relaxed">
    Tecnologie reattive e sensori<br/>
    Sistema stimolo-risposta<br/>
    Feedback immediati
  </p>
</div>

<div v-click class="text-center">
  <div class="text-4xl mb-6 opacity-30">02</div>
  <h3 class="text-xl font-semibold mb-4">Spaziale</h3>
  <p class="text-sm leading-relaxed">
    Coinvolgimento corporeo<br/>
    Orchestrazione fisica<br/>
    Movimento nell'ambiente
  </p>
</div>

<div v-click class="text-center">
  <div class="text-4xl mb-6 opacity-30">03</div>
  <h3 class="text-xl font-semibold mb-4">Dialogica</h3>
  <p class="text-sm leading-relaxed">
    Relazioni comunicative<br/>
    Interpretazione attiva<br/>
    Costruzione del significato
  </p>
</div>

</div>

<div v-click class="mt-12 text-center">

L'interazione è una **qualità intrinseca** dell'ambiente, non un elemento aggiuntivo

</div>

---
layout: center
transition: fade
---

# Processi e modelli di design

<style>
  h1 {
  text-decoration: underline;
  text-decoration-color: #e4ca00;
  text-underline-offset: 2px;
  text-decoration-thickness: 4px;
  }
</style>

---

# Ciclo iterativo

<div class="mt-10">

Il processo di design più semplice è un **ciclo continuo** di tre fasi che si ripetono fino al raggiungimento degli obiettivi

</div>

<div class="flex items-center justify-center mt-1">
  <img class="max-w-200px" src="/media/iterate.png"/>
</div>

<div class="mt-10">

Ogni iterazione permette di **identificare problemi**, raccogliere feedback e migliorare progressivamente la soluzione

</div>

---

# Double Diamond

<div class="mt-8">

Il **Double Diamond** è un modello di processo di design sviluppato dal Design Council nel 2004, che descrive le fasi di esplorazione e convergenza

</div>

<div class="flex w-full items-center justify-center">
  <img class="max-w-300px" style="filter:saturate(0)" src="/media/ddprocess.png"/>
</div>

<div class="grid grid-cols-4 gap-4 mt-10">
  <div class="flex flex-col items-center p-2 bg-amber-100 rounded-lg">
    <mdi-magnify class="text-2xl mb-2" />
    <span class="font-bold">Scoprire</span>
    <span class="text-xs text-center mt-2">Esplorare il problema, parlare con gli utenti</span>
  </div>
  <div class="flex flex-col items-center p-2 bg-amber-200 rounded-lg">
    <mdi-target class="text-2xl mb-2" />
    <span class="font-bold">Definire</span>
    <span class="text-xs text-center mt-2">Sintetizzare e inquadrare la sfida</span>
  </div>
  <div class="flex flex-col items-center p-2 bg-green-100 rounded-lg">
    <mdi-lightbulb-on-outline class="text-2xl mb-2" />
    <span class="font-bold">Sviluppare</span>
    <span class="text-xs text-center mt-2">Generare e co-progettare soluzioni</span>
  </div>
  <div class="flex flex-col items-center p-2 bg-green-200 rounded-lg">
    <mdi-rocket-launch-outline class="text-2xl mb-2" />
    <span class="font-bold">Realizzare</span>
    <span class="text-xs text-center mt-2">Testare, perfezionare, implementare</span>
  </div>
</div>


---

# Double Diamond: divergenza e convergenza

<div class="mt-8">

Ogni diamante alterna una fase di **pensiero divergente** (espansione) e una di **pensiero convergente** (sintesi)

</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex items-start gap-4">
    <mdi-arrow-expand-all class="text-3xl mt-1" />
    <div>
      <span class="block"><b>Divergenza</b></span>
      <span class="block text-sm mt-2">Esplorare senza limiti, generare molte idee, raccogliere prospettive diverse</span>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <mdi-arrow-collapse-all class="text-3xl mt-1" />
    <div>
      <span class="block"><b>Convergenza</b></span>
      <span class="block text-sm mt-2">Analizzare, selezionare, focalizzarsi sulle soluzioni più promettenti</span>
    </div>
  </div>
</div>

<div class="mt-10">

Il processo non è lineare: le scoperte possono riportare a fasi precedenti per **affinare la comprensione** del problema

</div>

---

# Esempio: installazione sulla biodiversità marina

<div class="mt-6 text-sm">

<div class="grid grid-cols-4 gap-3">
  <div class="p-3 bg-amber-100 rounded-lg">
    <p class="font-bold mb-2"><mdi-magnify class="inline" /> Scoprire</p>
    <ul class="text-xs space-y-1">
      <li>Interviste con biologi marini</li>
      <li>Osservazione visitatori in acquari</li>
      <li>Ricerca su percezione dell'oceano</li>
      <li>Analisi installazioni esistenti</li>
    </ul>
  </div>
  <div class="p-3 bg-amber-200 rounded-lg">
    <p class="font-bold mb-2"><mdi-target class="inline" /> Definire</p>
    <ul class="text-xs space-y-1">
      <li>I visitatori non percepiscono la scala dell'ecosistema</li>
      <li>Sfida: rendere tangibile l'interconnessione delle specie</li>
      <li>Target: famiglie e studenti</li>
    </ul>
  </div>
  <div class="p-3 bg-green-100 rounded-lg">
    <p class="font-bold mb-2"><mdi-lightbulb-on-outline class="inline" /> Sviluppare</p>
    <ul class="text-xs space-y-1">
      <li>Brainstorming con educatori</li>
      <li>Prototipo tavolo interattivo</li>
      <li>Test con proiezione a pavimento</li>
      <li>Iterazioni su feedback</li>
    </ul>
  </div>
  <div class="p-3 bg-green-200 rounded-lg">
    <p class="font-bold mb-2"><mdi-rocket-launch-outline class="inline" /> Realizzare</p>
    <ul class="text-xs space-y-1">
      <li>Vasca virtuale con sensori di movimento</li>
      <li>Test con classi scolastiche</li>
      <li>Ottimizzazione interazione</li>
      <li>Lancio e monitoraggio</li>
    </ul>
  </div>
</div>

</div>

<div class="mt-6">

Il risultato: una **vasca virtuale** dove i movimenti dei visitatori influenzano l'ecosistema proiettato, rendendo visibile l'impatto delle azioni umane

</div>

---

# Personas

<div class="mt-10">

Le **Personas** sono modelli di riferimento rappresentativi di specifici tipi di utenti, basati su cluster di comportamenti e bisogni

</div>

<div class="grid grid-cols-2 gap-8 mt-10">
	<div class="flex items-start gap-4">
		<mdi-account-outline class="text-3xl mt-1" />
		<div>
			<span class="block"><b>Archetipi comportamentali</b></span>
			<span class="block text-sm mt-2">Rappresentano comportamenti specifici senza necessariamente definire personalità o socio-demografia</span>
		</div>
	</div>
	<div class="flex items-start gap-4">
		<mdi-account-details class="text-3xl mt-1" />
		<div>
			<span class="block"><b>Personas realistiche</b></span>
			<span class="block text-sm mt-2">Assumono caratteristiche concrete (nome, età, background) esprimendo bisogni, desideri e contesti culturali</span>
		</div>
	</div>
</div>

<div class="mt-10">

Utili per **ricordare per chi stiamo progettando** e trarre ispirazione dalle loro specifiche sfide e contesti di vita

</div>

---

# User Journey Map

<div class="mt-10">

Il **Journey Map** è una rappresentazione sintetica che descrive passo-passo come un utente interagisce con un servizio

</div>

<div class="grid grid-cols-2 gap-8 mt-10">
	<div class="flex items-start gap-4">
		<mdi-map-marker-path class="text-3xl mt-1" />
		<div>
			<span class="block"><b>Mappatura dell'esperienza</b></span>
			<span class="block text-sm mt-2">Descrive touchpoint, ostacoli e barriere incontrate in ogni fase dell'interazione</span>
		</div>
	</div>
	<div class="flex items-start gap-4">
		<mdi-emoticon-happy-outline class="text-3xl mt-1" />
		<div>
			<span class="block"><b>Flusso emozionale</b></span>
			<span class="block text-sm mt-2">Include livelli di emozioni positive/negative vissute durante l'esperienza</span>
		</div>
	</div>
</div>

<div class="mt-10">

Permette di **rappresentare l'intero processo utente**, identificando pain points e opportunità di miglioramento prima e dopo l'esperienza core

</div>

---

# Caratteristiche di un allestimento interattivo

<div class="grid grid-cols-2 gap-3 mt-12">
  <div class="flex flex-col items-center justify-center p-6 bg-gray-100">
    <mdi-book-open-variant class="text-5xl mb-3" />
    <b>Narrativa</b>
  </div>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-100">
    <mdi-cursor-default-click class="text-5xl mb-3" />
    <b>Usabilità</b>
  </div>
  
  <div class="flex flex-col items-center justify-center p-6 bg-gray-100">
    <mdi-accessibility class="text-5xl mb-3" />
    <b>Accessibilità</b>
  </div>
  <div class="flex flex-col items-center justify-center p-6 bg-gray-100">
    <mdi-shield-check class="text-5xl mb-3" />
    <b>Durabilità</b>
  </div>
</div>
