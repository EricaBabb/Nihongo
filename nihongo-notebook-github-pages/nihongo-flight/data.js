const grammar=[
{id:'groups',title:'Verb groups & irregulars',tag:'Start here',summary:'Identify the group before changing an ending.',body:`<p><strong>Group 1 (五段・ごだん)</strong>: verbs such as 書く（かく）, 話す（はなす）, 飲む（のむ） change their final kana.</p><p><strong>Group 2 (一段・いちだん)</strong>: verbs such as 食べる（たべる） and 見る（みる） typically drop る and add an ending.</p><p><strong>Irregular:</strong> する → します / して / した / しない; 来る（くる） → 来ます（きます） / 来て（きて） / 来た（きた） / 来ない（こない）.</p><p>Watch out: 帰る（かえる）, 走る（はしる）, 入る（はいる） end with る but are Group 1.</p>`},
{id:'polite',title:'Polite ます form',tag:'Conjugation',summary:'Use ます for everyday polite speech.',body:`<p>Group 1: change the last <strong>u-row</strong> kana to the <strong>i-row</strong>, then add ます. 書く（かく）→ 書きます（かきます）; 飲む（のむ）→ 飲みます（のみます）.</p><p>Group 2: drop る, add ます. 食べる（たべる）→ 食べます（たべます）.</p><p>Past: ました. Negative: ません. Negative past: ませんでした.</p><p>例：昨日（きのう）、寿司（すし）を食べました。— I ate sushi yesterday.</p>`},
{id:'te',title:'て form',tag:'Conjugation',summary:'Requests, connections, and ～ている.',body:`<p><strong>Group 1:</strong> う・つ・る → って (買う→買って); む・ぶ・ぬ → んで (飲む→飲んで); く → いて (書く→書いて); ぐ → いで (泳ぐ→泳いで); す → して (話す→話して).</p><p><strong>Exception:</strong> 行く（いく）→ 行って（いって）.</p><p><strong>Group 2:</strong> 食べる→食べて. <strong>Irregular:</strong> する→して; 来る（くる）→来て（きて）.</p><p>例：写真（しゃしん）を撮って（とって）もいいですか。— May I take a photo?</p>`},
{id:'past',title:'Casual past た form',tag:'Conjugation',summary:'Transform て / で into た / だ.',body:`<p>Use the て-form pattern, replacing て→た and で→だ.</p><p>書く→書いた（かいた）; 飲む→飲んだ（のんだ）; 買う→買った（かった）; 話す→話した（はなした）; 食べる→食べた（たべた）; 行く→行った（いった）.</p><p>例：昨日（きのう）、京都（きょうと）に行った（いった）。— I went to Kyoto yesterday.</p>`},
{id:'negative',title:'ない & negative past',tag:'Conjugation',summary:'Make something not happen, or not have happened.',body:`<p>Group 1: final u-row → a-row + ない. 書く→書かない; 飲む→飲まない. For verbs ending in う use わ: 買う→買わない.</p><p>Group 2: drop る + ない: 食べる→食べない.</p><p>Irregular: する→しない; 来る（くる）→来ない（こない）; ある→ない.</p><p>Negative past: replace final い of ない with かった. 食べない→食べなかった.</p>`},
{id:'potential',title:'Potential form',tag:'Conjugation',summary:'Express ability: “can do”.',body:`<p>Group 1: final u-row → e-row + る: 書く→書ける（かける）; 飲む→飲める（のめる）.</p><p>Group 2: drop る + られる: 食べる→食べられる（たべられる）. You may hear 食べれる in casual speech.</p><p>Irregular: する→できる; 来る（くる）→来られる（こられる）.</p><p>例：日本語（にほんご）が少し（すこし）話せます（はなせます）。— I can speak a little Japanese.</p>`},
{id:'conditional',title:'Conditionals: たら & ば',tag:'Conjugation',summary:'Two common ways to say “if”.',body:`<p><strong>たら:</strong> past casual form + ら: 食べたら; 行ったら（いったら）. Common for “if/when X happens”.</p><p><strong>ば:</strong> Group 1 final u-row → e-row + ば: 行く→行けば（いけば）. Group 2 drop る + れば: 食べれば（たべれば）. する→すれば; 来る→来れば（くれば）.</p><p>For い-adjectives, い→ければ: 高い（たかい）→高ければ（たかければ）.</p>`},
{id:'passive',title:'Passive & causative',tag:'Advanced review',summary:'Recognize the forms you may hear.',body:`<p><strong>Passive:</strong> Group 1 final u-row → a-row + れる (書く→書かれる); Group 2 る→られる (食べる→食べられる); する→される; 来る→来られる（こられる）.</p><p><strong>Causative:</strong> Group 1 final u-row → a-row + せる (書く→書かせる); Group 2 る→させる (食べる→食べさせる); する→させる; 来る→来させる（こさせる）.</p>`},
{id:'requests',title:'Useful travel grammar',tag:'In context',summary:'Polite requests and permission.',body:`<p><strong>～てください:</strong> please do… もう一度（いちど）言って（いって）ください。— Please say that again.</p><p><strong>～てもいいですか:</strong> may I…? ここに座って（すわって）もいいですか。— May I sit here?</p><p><strong>～たい:</strong> want to… 京都（きょうと）に行きたい（いきたい）です。— I want to go to Kyoto.</p><p><strong>～ないでください:</strong> please don’t… 触らないで（さわらないで）ください。— Please don't touch.</p>`}
];
const questions=[
{q:'食べる（たべる）',prompt:'Casual negative past',answer:'食べなかった',reading:'たべなかった',hint:'食べる → 食べない → 食べなかった'},
{q:'書く（かく）',prompt:'て form',answer:'書いて',reading:'かいて',hint:'く → いて (except 行く)'},
{q:'飲む（のむ）',prompt:'て form',answer:'飲んで',reading:'のんで',hint:'む・ぶ・ぬ → んで'},
{q:'行く（いく）',prompt:'て form',answer:'行って',reading:'いって',hint:'行く is the exception: 行って'},
{q:'する',prompt:'Casual negative',answer:'しない',reading:'しない',hint:'Irregular: する → しない'},
{q:'来る（くる）',prompt:'Polite present',answer:'来ます',reading:'きます',hint:'Irregular: 来る → 来ます（きます）'},
{q:'書く（かく）',prompt:'Potential',answer:'書ける',reading:'かける',hint:'く → ける'},
{q:'食べる（たべる）',prompt:'Potential (standard)',answer:'食べられる',reading:'たべられる',hint:'Group 2: る → られる'},
{q:'買う（かう）',prompt:'Casual negative',answer:'買わない',reading:'かわない',hint:'う → わない'},
{q:'話す（はなす）',prompt:'Polite present',answer:'話します',reading:'はなします',hint:'す → し + ます'},
{q:'飲む（のむ）',prompt:'Casual past',answer:'飲んだ',reading:'のんだ',hint:'む・ぶ・ぬ → んだ'},
{q:'食べる（たべる）',prompt:'ば conditional',answer:'食べれば',reading:'たべれば',hint:'Group 2: る → れば'}
];
const travel=[
{group:'At restaurants',lines:[['おすすめは何ですか。','おすすめはなんですか。','What do you recommend?'],['これをお願いします。','これをおねがいします。','This one, please.'],['お会計お願いします。','おかいけいおねがいします。','The bill, please.'],['辛いですか。','からいですか。','Is it spicy?']]},
{group:'Getting around',lines:[['京都駅にはどう行けばいいですか。','きょうとえきにはどういけばいいですか。','How do I get to Kyoto Station?'],['この電車は東京に行きますか。','このでんしゃはとうきょうにいきますか。','Does this train go to Tokyo?'],['ここで降ります。','ここでおります。','I’ll get off here.']]},
{group:'When you need help',lines:[['もう一度言ってください。','もういちどいってください。','Please say that again.'],['もう少しゆっくり話してください。','もうすこしゆっくりはなしてください。','Please speak a little more slowly.'],['日本語を勉強中です。','にほんごをべんきょうちゅうです。','I’m studying Japanese.'],['英語でも大丈夫ですか。','えいごでもだいじょうぶですか。','Would English be okay?']]}];
