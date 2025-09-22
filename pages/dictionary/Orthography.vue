<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Writing system and grammatical notes</h1>

    <div class="box-body">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2 class="panel-title">Consonants and vowels</h2>
        </div>
        <div class="panel-body">
          <p>
            There are 21 single-letter consonants in the Cicipu alphabet (e.g. <span class="vern-detail">k</span>), as well as 6 double-letter consonants (e.g. <span class="vern-detail">kw</span>), making 27 altogether.
          </p>
          <p>
            There are 6 vowels: <span class="vern-detail">a e i o ø u</span>, all of which have nasal counterparts written with a tilde (~) e.g. <span class="vern-detail">sẽ'ẽ</span> 'carve'ː <span class="vern-detail">ã ẽ ĩ õ ø̃ ũ</span>.
            Note especially the pronunciation of <span class="vern-detail">ø</span>.
          </p>
          <p>
            There are four diphthongs: <span class="vern-detail">ai eu ei eu</span>.
          </p>
          <p>
            Some words ending with <span class="vern-detail">ãu</span>, <span class="vern-detail">õ</span> and <span class="vern-detail">ɔ̃</span> are pronounced with an [<span class="phonetic">m</span>] when they occur utterance-finally e.g. <span class="phonetic">/kɔ̀ɓɔ̃́/ [kɔ̀ɓɔ̃́m]</span> 'axe', written <span class="vern-detail">købøm</span>. Native speakers consistently prefer to write the <span class="vern-detail">m</span> in all contexts, and so this practice is followed in this dictionary.
          </p>
          <p>
            All consonants and vowels can be lengthened e.g. <span class="vern-detail">yuwwo</span> 'turn round' vs. <span class="vern-detail">yuwo</span> 'fall',
            <span class="vern-detail">ìtáatú</span> 'mat' vs. <span class="vern-detail">ùtátú</span> 'straw bundle'.
          </p>
        </div>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2 class="panel-title">Alphabet</h2>
        </div>
        <div class="panel-body">
          <table id="orthoTable" class="table table-bordered table-hover table-striped dataTable" role="grid">
            <thead>
            <tr role="row">
              <th tabindex="0" rowspan="1" colspan="1">Letter</th>
              <th tabindex="0" rowspan="1" colspan="1">IPA</th>
              <th tabindex="0" rowspan="1" colspan="1">Pronunciation</th>
              <th tabindex="0" rowspan="1" colspan="1">Cicipu example</th>
              <th tabindex="0" rowspan="1" colspan="1">Hausa</th>
              <th tabindex="0" rowspan="1" colspan="1">English</th>
            </tr>
            </thead>
            <tbody>
            @{
            //build up an array of examples
            List<OrthoExample> examples = new List<OrthoExample>();

              examples.Add(new OrthoExample("a", "a", "<em>a</em> as in 'm<strong>a</strong>t'", "t<span class='ortho'>a</span>", "tuwo", "food"));
              examples.Add(new OrthoExample("ã", "ã", "nasal <em>ã</em> as in 'c<strong>a</strong>n' (American pronunciation)", "kat<span class='ortho'>ã</span>", "takalmi", "shoe"));
              examples.Add(new OrthoExample("b", "b", "<em>b</em> as in '<strong>b</strong>at'", "ka<span class='ortho'>b</span>ara", "tsoho", "elder"));
              examples.Add(new OrthoExample("ɓ", "ɓ", "implosive <em>ɓ</em>", "kø<span class='ortho'>ɓ</span>ø̃m", "gatari", "axe"));
              examples.Add(new OrthoExample("c", "tʃ", "<em>ch</em> as in '<strong>ch</strong>urch'", "ku<span class='ortho'>c</span>iga", "zakara", "cockerel"));
              examples.Add(new OrthoExample("d", "d", "<em>d</em> as in 'dog'", "ka<span class='ortho'>d</span>aba", "daji", "bush/countryside"));
              examples.Add(new OrthoExample("ɗ", "ɗ", "implosive <em>ɗ</em>", "u<span class='ortho'>ɗ</span>anga", "itace", "tree"));
              examples.Add(new OrthoExample("e", "e", "<em>e</em> as in 'd<strong>ay</strong>'", "m<span class='ortho'>e</span>p<span class='ortho'>e</span>s<span class='ortho'>e</span>", "ɗan tagwai", "twin"));
              examples.Add(new OrthoExample("ẽ", "ẽ", "nasal <em>ẽ</em>", "s<span class='ortho'>ẽ</span>'<span class='ortho'>ẽ</span>", "sassaƙa", "carve"));
              examples.Add(new OrthoExample("g", "ɡ", "<em>g</em> as in '<strong>g</strong>o'", "ko<span class='ortho'>g</span>ino", "gyaɗa", "groundnut"));
              examples.Add(new OrthoExample("gw", "ɡʷ", "<em>gw</em> as in '<strong>gu</strong>ava'", "ma<span class='ortho'>gw</span>ãwã", "kurma", "deaf mute"));
              examples.Add(new OrthoExample("h", "h", "<em>h</em> as in '<strong>h</strong>at'", "ka<span class='ortho'>h</span>ũ", "hanci", "nose"));
              examples.Add(new OrthoExample("hw", "hʷ", "<em>wh</em> as in '<strong>wh</strong>ich' (Scottish pronunciation)", "<span class='ortho'>hw</span>ã'yã", "shekaran jiya", "day before yesterday"));
              examples.Add(new OrthoExample("hy", "hʲ", "<em>hy</em> as in '<strong>h</strong>ue'", "<span class='ortho'>hy</span>ã'ũ", "jiya", "yesterday"));
              examples.Add(new OrthoExample("i", "i", "<em>ee</em> as in 's<strong>ee</strong>'", "mac<span class='ortho'>ii</span>j<span class='ortho'>i</span>", "ƙwarya", "calabash"));
              examples.Add(new OrthoExample("ĩ", "ĩ", "nasal <em>ee</em>", "cc<span class='ortho'>ĩ</span>", "mesa", "python"));
              examples.Add(new OrthoExample("j", "dʒ", "<em>j</em> as in '<strong>j</strong>am'", "<span class='ortho'>jj</span>eve", "gwanki", "roan antelope"));
              examples.Add(new OrthoExample("k", "k", "<em>k</em> as in '<strong>k</strong>ick'", "<span class='ortho'>k</span>ka", "mace", "woman"));
              examples.Add(new OrthoExample("kw", "kʷ", "<em>kw</em> as in '<strong>qu</strong>ick'", "u<span class='ortho'>kw</span>ã", "fata", "skin"));
              examples.Add(new OrthoExample("l", "l", "<em>l</em> as in '<strong>l</strong>ie'", "u<span class='ortho'>l</span>enji", "rana", "sun"));
              examples.Add(new OrthoExample("m", "m", "<em>m</em> as in '<strong>m</strong>at'", "<span class='ortho'>m</span>annu", "tsuntsu", "bird"));
              examples.Add(new OrthoExample("n", "n", "<em>n</em> as in '<strong>n</strong>ame'", "<span class='ortho'>n</span>na", "saniya", "cow"));
              examples.Add(new OrthoExample("o", "o", "<em>o</em> as in 'g<strong>o</strong>'", "k<span class='ortho'>o</span>ɗ<span class='ortho'>o</span>", "yi ƙoto", "peck"));
              examples.Add(new OrthoExample("õ", "õ", "nasal <em>õ</em> as in 'b<strong>o</strong>ne' (American pronunciation)", "mot<span class='ortho'>õ</span>", "miyau", "saliva"));
              examples.Add(new OrthoExample("ø", "ɔ", "<em>aw</em> as in 'p<strong>a</strong>w'", "k<span class='ortho'>ø</span>ɗ<span class='ortho'>ø</span>", "yanka", "cut down"));
              examples.Add(new OrthoExample("ø̃", "ɔ̃", "nasal <em>aw</em> as in 'g<strong>o</strong>ne' (American pronunciation)", "køh<span class='ortho'>ø̃</span>", "shirwa", "black kite"));
              examples.Add(new OrthoExample("p", "p", "<em>p</em> as in '<strong>p</strong>ot'", "u<span class='ortho'>p</span>e<span class='ortho'>p</span>i", "iska", "wind"));
              examples.Add(new OrthoExample("r", "ɾ", "<em>r</em> as in '<strong>r</strong>at'", "u<span class='ortho'>r</span>ẽi", "gari", "town"));
              examples.Add(new OrthoExample("s", "s", "<em>s</em> as in '<strong>s</strong>it'", "u<span class='ortho'>s</span>ẽi", "zafi", "pain"));
              examples.Add(new OrthoExample("t", "t", "<em>t</em> as in '<strong>t</strong>able'", "<span class='ortho'>tt</span>ø<span class='ortho'>t</span>ø", "suruki", "in-law"));
              examples.Add(new OrthoExample("u", "u", "<em>u</em> as in 't<strong>oo</strong>'", "<span class='ortho'>u</span>k<span class='ortho'>u</span>t<span class='ortho'>u</span>", "ƙota", "shaft"));
              examples.Add(new OrthoExample("ũ", "ũ", "nasal <em>u</em> as in 'm<strong>oo</strong>n' (American pronunciation)", "kuy<span class='ortho'>ũ</span>y<span class='ortho'>ũ</span>", "yashi", "sand"));
              examples.Add(new OrthoExample("v", "v", "<em>v</em> as in '<strong>v</strong>at'", "<span class='ortho'>vv</span>ooto", "akwiya", "goat"));
              examples.Add(new OrthoExample("w", "w", "<em>v</em> as in '<strong>w</strong>ell'", "<span class='ortho'>w</span>ømø", "sarki", "chief"));
              examples.Add(new OrthoExample("y", "j", "<em>y</em> as in '<strong>y</strong>ou'", "<span class='ortho'>yy</span>iri", "mayya", "witch"));
              examples.Add(new OrthoExample("z", "z", "<em>z</em> as in '<strong>z</strong>oo'", "<span class='ortho'>zz</span>a", "mutum", "person"));
              examples.Add(new OrthoExample("'", "ʔ", "<em>'</em> as in 'bu<strong>tt</strong>er' (Cockney pronunciation i.e. glottal stop)", "<span class='ortho'>'</span>asu", "wuri", "place"));
              examples.Add(new OrthoExample("'w", "ʔʷ", "glottalised <em>w</em>", "cu<span class='ortho'>'w</span>ãa", "gobe", "tomorrow"));
              examples.Add(new OrthoExample("'y", "ʔʲ", "glottalised <em>y</em>", "mø<span class='ortho'>'y</span>ø<span class='ortho'>'y</span>ø", "kifi", "fish"));

              foreach (OrthoExample ex in examples)
              {
              //and add them to the table
              <tr role="row">
                <td class="vern-detail">@ex.Letter</td>
                <td class="phonetic">[@ex.Phonetic]</td>
                <td>@Html.Raw(ex.Pronunciation)</td>
                <td class="vern-detail">@Html.Raw(ex.Vernacular)</td>
                <td class="national-ex">@ex.National</td>
                <td class="english-detail">@ex.English</td>
              </tr>
              }
              }

            </tbody>
            <tfoot>
            <tr role="row">
              <th tabindex="0" rowspan="1" colspan="1">Letter</th>
              <th tabindex="0" rowspan="1" colspan="1">IPA</th>
              <th tabindex="0" rowspan="1" colspan="1">Pronunciation</th>
              <th tabindex="0" rowspan="1" colspan="1">Cicipu example</th>
              <th tabindex="0" rowspan="1" colspan="1">Hausa</th>
              <th tabindex="0" rowspan="1" colspan="1">English</th>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2 class="panel-title">Subject prefixes</h2>
        </div>
        <div class="panel-body">
          Verbs take prefixes agreeing with their subjects, either in person or gender. For example in the phrase <span class="vern-detail">kàràkúmí kádúkwà</span> 'the camel went'
          the <span class="vern-detail">ká-</span> prefix on the verb dukwa agrees in gender with <span class="vern-detail">kàràkúmí</span> 'camel'. Various phonological and morphosyntactic properties show that these
          are tightly bound to the verb stem. In the orthography they are written together with the verb, without any space or hyphen, for example <span class="vern-detail">kadukwa</span>.
        </div>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2 class="panel-title">Object markers</h2>
        </div>
        <div class="panel-body">
          <p>
            Object markers follow the verb and are used instead of full NPs. Unlike the subject prefixes their tone is independent of the verb and their vowels
            do not harmonise with those of the verb. They are written as separate words in the orthography (e.g. <span class="vern-detail">ùmátà rè</span>
            'she gave birth to them' is written <span class="vern-detail">umata re</span>).
          </p>
          <p>
            The third person singular object marker <span class="vern-detail">vì</span> causes the final vowel of the verb to change to <span class="vern-detail">i</span>.
            So for example <span class="vern-detail">ùmátà</span> + <span class="vern-detail">vì</span>
            'she gave birth to him' → <span class="vern-detail">ùmátì vì</span>. This is written as it sounds (e.g. <span class="vern-detail">umati vi</span>).
          </p>
          <p>
            In some environments (especially before the negator <span class="vern-detail">cé</span>) the singular object markers appear in compressed
            form. Compare the following tables:
          </p>

          <table id="objectClitics" class="table table-bordered table-hover table-striped dataTable" role="grid">
            <caption>Object clitics</caption>
            <thead>
            <tr role="row">
              <th tabindex="0" rowspan="1" colspan="1">Object</th>
              <th tabindex="0" rowspan="1" colspan="1">Phonological</th>
              <th tabindex="0" rowspan="1" colspan="1">Orthographical</th>
              <th tabindex="0" rowspan="1" colspan="1">English translation</th>
              <th tabindex="0" rowspan="1" colspan="1">Hausa translation</th>
            </tr>
            </thead>
            <tbody>
            @{
            //build up an array of examples
            List<ObjCliticExample> objExamples = new List<ObjCliticExample>();

              objExamples.Add(new ObjCliticExample("1s", "wǐndà mù", "Winda mu", "He saw me", "Ya gan ni"));
              objExamples.Add(new ObjCliticExample("2s", "wǐndà vù", "Winda vu", "He saw you(s.)", "Ya gan ka"));
              objExamples.Add(new ObjCliticExample("3s", "wǐndà vì", "Winda vi", "He saw him", "Ya gan shi"));

              foreach (ObjCliticExample ex in objExamples)
              {
              //and add them to the table
              <tr role="row">
                <td>@ex.Object</td>
                <td class="phonetic">@ex.Phonological</td>
                <td class="vern-detail">@ex.Orthographical.</td>
                <td class="english-trans">@ex.EnglishTrans.</td>
                <td class="national-ex">@ex.NationalTrans.</td>
              </tr>
              }
              }

            </tbody>
          </table>

          <table id="reducedObjectClitics" class="table table-bordered table-hover table-striped dataTable" role="grid">
            <caption>Reduced object clitics (negated clauses)</caption>
            <thead>
            <tr role="row">
              <th tabindex="0" rowspan="1" colspan="1">Object</th>
              <th tabindex="0" rowspan="1" colspan="1">Phonological</th>
              <th tabindex="0" rowspan="1" colspan="1">Orthographical</th>
              <th tabindex="0" rowspan="1" colspan="1">English translation</th>
              <th tabindex="0" rowspan="1" colspan="1">Hausa translation</th>
            </tr>
            </thead>
            <tbody>
            @{
            //build up an array of examples
            List<ObjCliticExample> reducedObjExamples = new List<ObjCliticExample>();

              reducedObjExamples.Add(new ObjCliticExample("n/a", "wǐndà cé", "Winda ce", "He didn't see", "Bai gani ba"));
              reducedObjExamples.Add(new ObjCliticExample("1s", "wǐndàn cé", "Winda<em>n</em> ce", "He didn't see me", "Bai gan ni ba"));
              reducedObjExamples.Add(new ObjCliticExample("2s", "wǐndà ccé", "Winda <em>c</em>ce", "He didn't see you(s.)", "Bai gan ka ba"));
              reducedObjExamples.Add(new ObjCliticExample("3s", "wǐndì ccé", "Wind<em>i</em> cce", "He didn't see him", "Bai gan shi ba"));

              foreach (ObjCliticExample ex in reducedObjExamples)
              {
              //and add them to the table
              <tr role="row">
                <td>@ex.Object</td>
                <td class="phonetic">@ex.Phonological</td>
                <td class="vern-detail">@Html.Raw(ex.Orthographical).</td>
                <td class="english-trans">@ex.EnglishTrans.</td>
                <td class="national-ex">@ex.NationalTrans.</td>
              </tr>
              }
              }

            </tbody>
          </table>
        </div>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2 class="panel-title">Other clitics</h2>
        </div>
        <div class="panel-body">
          <p>
            The associative proclitic is used to express possession and various other relationships between two noun phrases, for example
            <span class="vern-detail">kàgíiwá kó=↓móní</span> 'hippo', literally 'elephant of-water'. In this dictionary a hyphen is placed between the
            associative marker and the second noun phrase (e.g. <span class="vern-detail">kagiiwa komoni</span>).
          </p>
          <p>
            The conjunction <span class="vern-detail">ìn</span> 'and/with' is realised as a proclitic <span class="vern-detail">n-</span> before vowel-initial words,
            for example <span class="vern-detail">n-ùlénjí</span> 'in the afternoon', literally 'with-sun'. Again this proclitic is written with a hyphen in the
            dictionary (e.g. <span class="vern-detail">n-ulenji</span>).
          </p>
          <p>
            The locative proclitic <span class="vern-detail">á-</span> (<span class="vern-detail">á=↓kákáasùwà</span> 'in the market') is also written with a hyphen
            (<span class="vern-detail">a-kakaasuwa</span>). If the word to which the clitic attaches begins with
            a vowel then the first vowel lengthens (e.g. <span class="vern-detail">á-</span> + <span class="vern-detail">ùtáarí</span> 'at the stony place' →
            <span class="vern-detail">úu↓táarí</span>).
            In this case no hyphen is used (e.g. <span class="vern-detail">uutaari</span>).
          </p>
          <p>
            The negator <span class="vern-detail">cé</span> is also arguably an enclitic but is always written as a separate word e.g.
            <span class="vern-detail">udukwa ce</span> 'he didn't go'.
          </p>
        </div>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2 class="panel-title">Tone</h2>
        </div>
        <div class="panel-body">
          <p>
            Cicipu has two tones <em>H L</em> as well as a falling tone <em>HL</em>. Two words may differ only by tone and yet have completely different meanings, for
            example <span class="vern-detail">káayà</span> 'bean' vs. <span class="vern-detail">káayá</span> 'hut'. Tonal 'minimal pairs' like this are actually very rare in
            Cicipu, and so lexical tone is not generally marked in the orthography. For this reason tone marks have been omitted from the headwords and examples in this dictionary. Language learners who want to know how to pronounce the word can use the tones in the phonetic field (which are actually <i>phonological</i> indicators) as a guide.
          </p>
          <p>
            Although lexical tone has a low functional load, grammatical tone is very important in Cicipu and is sometimes the only indicator of important
            grammatical categories. Therefore in two cases tone-marking is used to distinguish between potentially ambiguous constructions.
          </p>
          <p>
            Firstly, for most person/number combinations the realis verb form differs only by tone from the irrealis form (compare
            <span class="vern-detail">ùdúkwà</span> 'he went' vs. <span class="vern-detail">údùkwà</span> 'he should go'). In the writing system the realis forms are left
            unmarked e.g. <span class="vern-detail">udukwa</span> 'he went', <span class="vern-detail">waaya</span> 'he came', while the irrealis forms are represented
            with an acute accent above the first vowel e.g. <span class="vern-detail">údukwa</span> 'he should go', <span class="vern-detail">wáaya</span> 'he should come'.
          </p>
          <p>
            Secondly, the plural imperative suffix <span class="vern-detail">-nà</span> is distinguished only by tone from the ventive suffix <span class="vern-detail">-na</span>.
            The plural imperative suffix is always low tone, while the ventive suffix takes its town from the overall verbal melody.
            So in the imperative there is a tonal contrast between <span class="vern-detail">kàbàná</span> 'bringǃ' and <span class="vern-detail">kàbánà</span> 'you (pl.) take'.
            The plural imperative suffix is always written orthographically with a grave accent e.g. <span class="vern-detail">kabanà</span> 'you (pl.) take'.
          </p>
        </div>
      </div>
    </div>
    <div class="box-footer">
      » More information on the Cicipu writing system is available <a href="http://www.cicipu.org/orthography.html">here</a>.
      <br />
      » For more information on Cicipu phonology see chapter 3 in <a href="http://www.cicipu.org/papers/gender_and_person_agreement_in_cicipu_discourse.pdf">Gender and person agreement in Cicipu discourse</a>.
    </div>
  </div>
</template>
