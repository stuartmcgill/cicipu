<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'
import AbbreviationsTable from '~/components/dictionary/AbbreviationsTable.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Entry details</h1>
    <p>
      The format of the dictionary entries is best described through a series of
      examples. Consider the following entry for the verb
      <span class="cicipu-text">cinda</span> ‘give’ (Figure 3).
    </p>
    <!--    @TODO add a screenshot (Fig 3 here-->
    <p>
      The headword <span class="cicipu-text">cinda</span> is written
      orthographically and is followed by a phonetic representation (<span
        class="phonetic"
        >[tʃĩnda]</span
      >) and then the part of speech. A full list of Cicipu parts of speech and
      affixes are given in Tables 2 and 3 below.
    </p>

    <!--    @TODO SJM got to here-->
    <P
      STYLE="text-indent: 0in; margin-top: 0.08in; margin-bottom: 0.08in; page-break-after: avoid"
    >
      <A NAME="_Ref498116030"></A>
      <SPAN><I>Table 2: Parts of speech</I></SPAN>
    </P>
    <TABLE>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border-top: 1px solid #9cc2e5; border-bottom: 1.50pt solid #9cc2e5; border-left: 1px solid #9cc2e5; border-right: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <P STYLE="page-break-after: avoid"> Part of speech </P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <P STYLE="page-break-after: avoid">adjective</P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <P STYLE="page-break-after: avoid">adverb</P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <P STYLE="page-break-after: avoid">article</P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>associative plural</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>auxiliary verb</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>counterfactual</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>conjunction</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>copula</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>demonstrative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>exclamation</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>existential predicate</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>greeting</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>honorific</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>ideophone</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>interjection</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>locative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>noun</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>negator</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>numeral</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>numerical adjective</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>object clitic</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>particle (discourse)</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>possessive pronoun</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>preposition</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>presentative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>pronoun</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>prohibitive</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>quantifier</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>question word</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>relativiser</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>reportative evidential</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding: 0in 0.08in"
        >
          <p>verb</p>
        </TD>
      </TR>
    </TABLE>

    <P
      STYLE="text-indent: 0in; margin-top: 0.08in; margin-bottom: 0.08in; page-break-after: avoid"
    >
      <A NAME="_Ref498116031"></A>
      <SPAN SIZE="2"><I>Table 3: Affixes</I></SPAN>
    </P>
    <TABLE>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border-top: 1px solid #9cc2e5; border-bottom: 1.50pt solid #9cc2e5; border-left: 1px solid #9cc2e5; border-right: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <P STYLE="page-break-after: avoid">Affixes</P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <P STYLE="page-break-after: avoid">anticausative</P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <P STYLE="page-break-after: avoid">applicative</P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <P STYLE="page-break-after: avoid"> aspect marker </P>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>causative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>habitual</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>imperative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>iterative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>locativiser</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>nominaliser</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>pluractional</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>resultative</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#ffffff"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>tense marker</p>
        </TD>
      </TR>
      <TR>
        <TD
          VALIGN="TOP"
          BGCOLOR="#deeaf6"
          STYLE="border: 1px solid #9cc2e5; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"
        >
          <p>ventive</p>
        </TD>
      </TR>
    </TABLE>

    <p>
      <SPAN>
        If the word has multiple senses of meaning then these are indicated with
        numbers i.e. 1. wait, 2. look after, and so on; if there is only one
        sense then the number is omitted. For each sense glosses are given in </SPAN
      >English (wait)<SPAN> and Hausa (</SPAN
      ><SPAN class="national-gloss"><SPAN>jira</SPAN></SPAN
      ><SPAN>).</SPAN>
    </p>
    <p>
      <SPAN>
        One or more example sentences may appear after the glosses, together
        with encyclopaedic information and notes on usage if relevant. If the
        examples have audio then a playbar will be displayed below the relevant
        example. Most examples have audio for the Hausa translation as well as
        the Cicipu. A link to the contributor of the example (in this case
        Markus Yabani) appears underneath the example.
      </SPAN>
    </p>
    <p>
      <SPAN> The following </SPAN><SPAN>screenshot</SPAN
      ><SPAN> shows a noun </SPAN><span class="cicipu-text">ddø̂ø</span
      ><SPAN>
        ‘horse’ (Figure 4). Each noun entry includes both a gender/noun class
        pairing (8/3) and, where appropriate, the plural form ( </SPAN
      ><span class="cicipu-text">ìdø̂ø</span
      ><span class="cicipu-text"
        ><SPAN FACE="Times New Roman, serif"><SPAN>)</SPAN></SPAN></span
      ><SPAN>.</SPAN>
    </p>

    <!--      @TODO add horse screenshot-->
    <P STYLE="text-indent: 0in; margin-top: 0.08in; margin-bottom: 0.08in">
      <A NAME="_Ref498116721"></A>
      <SPAN SIZE="2">
        <I>Figure 4: Entry for </I
        ><span class="cicipu-text"><SPAN>ddøø</SPAN></span
        ><I> ‘horse’ </I>
      </SPAN>
    </P>

    <!--      @TODO add neck bone screenshot-->
    <P STYLE="text-indent: 0in; margin-top: 0.08in; margin-bottom: 0.08in">
      <A NAME="_Ref498530011"></A>
      <SPAN SIZE="2">
        <I>Figure 5: Entry for </I
        ><SPAN class="cicipu-text"><SPAN>ddøø</SPAN></SPAN
        ><SPAN class="cicipu-text">
          <SPAN>
            <SPAN> ccillu </SPAN>
          </SPAN> </SPAN
        ><I> ‘bone at the back of the neck’ </I>
      </SPAN>
    </P>

    <p>
      Figure 5 <SPAN> shows a subentry of the headword </SPAN
      ><span class="cicipu-text">ddøø</span
      ><span class="cicipu-text"> <SPAN> </SPAN> </span
      ><span class="cicipu-text">c</span><span class="cicipu-text">cillu</span
      ><SPAN> as well as a cross-reference to another headword ( </SPAN
      ><SPAN> See also </SPAN><span class="cicipu-text">cillu</span> ‘neck’<SPAN
        >).</SPAN
      >
    </p>
    <p>
      <SPAN> For identifiable loan words such as </SPAN
      ><span class="cicipu-text">kaduniya</span> ‘world’ (Figure 6)<SPAN>
        the source of the loan is given at the end of the entry (e.g. </SPAN
      ><SPAN>Borrowed</SPAN><SPAN> from </SPAN>Arabic <I>duniya</I> via Hausa).
    </p>

    <!--      @TODO add 'world' screenshot-->
    <P STYLE="text-indent: 0in; margin-top: 0.08in; margin-bottom: 0.08in">
      <A NAME="_Ref498117160"></A>
      <SPAN SIZE="2">
        <I>Figure 6: Entry for </I
        ><SPAN class="cicipu-text"><SPAN>kaduniya</SPAN></SPAN
        ><I> ‘world’ </I>
      </SPAN>
    </P>

    <p>
      <SPAN> Idiolectal or dialectal variants (e.g. </SPAN
      ><SPAN class="cicipu-text">hy</SPAN
      ><SPAN class="cicipu-text">áɓá</SPAN> ‘teardrop’, Figure 7<SPAN>
        ) have concise entries, but with a link to the main entry. A similar
        approach is taken for verbal nouns (e.g. </SPAN
      ><SPAN class="cicipu-text">cìdópì</SPAN
      ><SPAN>
        ‘sewing’ appears in the dictionary as a minor entry cross-referenced to
        the main entry </SPAN
      ><SPAN class="cicipu-text">dopo</SPAN><SPAN> ‘sew’). </SPAN>
    </p>

    <!--      @TODO add 'tear' screenshot-->
    <P STYLE="text-indent: 0in; margin-top: 0.08in; margin-bottom: 0.08in">
      <A NAME="_Ref498117362"></A>
      <SPAN SIZE="2">
        <I>Figure 7: Entry for </I
        ><SPAN class="cicipu-text"><SPAN>hyaɓa</SPAN></SPAN
        ><I> ‘teardrop’ </I>
      </SPAN>
    </P>
  </div>
  <AbbreviationsTable />
</template>
