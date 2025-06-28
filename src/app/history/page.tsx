import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function HistoryPage() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline text-primary tracking-tight">
              १३ महीने का कैलेंडर: एक भूली हुई कहानी
            </CardTitle>
            <CardDescription className="text-lg">
              एक ऐसी व्यवस्था जो समय को हमेशा के लिए बदल सकती थी।
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <div>
              <h2 className="font-headline text-2xl font-semibold mb-2 text-primary/90">
                प्रस्तावना
              </h2>
              <p>
                आज हम जिस ग्रेगोरियन कैलेंडर का उपयोग करते हैं, वह हमेशा से मानक नहीं था। इतिहास में कई कैलेंडर प्रणालियाँ आईं और गईं। इनमें से एक दिलचस्प प्रणाली थी <strong className="text-primary">"अंतर्राष्ट्रीय निश्चित कैलेंडर" (International Fixed Calendar)</strong>, जिसमें १३ महीने होते थे। तो फिर ऐसा क्या हुआ कि यह कैलेंडर कभी लोकप्रिय नहीं हो पाया और हम १२ महीनों वाले साल का ही पालन करते रहे?
              </p>
            </div>
            
            <Separator />

            <div>
              <h2 className="font-headline text-2xl font-semibold mb-2 text-primary/90">
                १३ महीनों का गणित
              </h2>
              <p className="mb-4">
                अंतर्राष्ट्रीय निश्चित कैलेंडर का प्रस्ताव मोसेस बी. कोट्सवर्थ ने १९०२ में रखा था। इसकी संरचना बहुत ही सरल और सुसंगत थी:
              </p>
              <ul className="space-y-2 list-disc pl-6 bg-secondary/50 p-4 rounded-lg">
                <li><strong className="font-semibold">१३ महीने:</strong> हर महीने में ठीक २८ दिन होते थे।</li>
                <li><strong className="font-semibold">सप्ताह का दिन:</strong> हर महीने की पहली तारीख हमेशा रविवार होती थी और आखिरी तारीख हमेशा शनिवार। इससे हर साल का कैलेंडर एक जैसा रहता था।</li>
                <li><strong className="font-semibold">३६४ दिन:</strong> १३ महीने × २८ दिन = ३६४ दिन।</li>
                <li><strong className="font-semibold">अतिरिक्त दिन:</strong> साल के ३६५ दिन पूरे करने के लिए, दिसंबर के बाद एक <span className="text-accent-foreground bg-accent/80 px-2 py-1 rounded-md font-mono text-sm">"वर्ष दिवस" (Year Day)</span> जोड़ा जाता था, जो किसी भी सप्ताह का हिस्सा नहीं था। लीप वर्ष में, जून के बाद एक <span className="text-accent-foreground bg-accent/80 px-2 py-1 rounded-md font-mono text-sm">"लीप दिवस" (Leap Day)</span> जोड़ा जाता था।</li>
              </ul>
              <p className="mt-4">
                इस कैलेंडर का तेरहवाँ महीना <strong className="text-primary">"सोल" (Sol)</strong> कहलाता था, जो जून और जुलाई के बीच में आता था।
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="font-headline text-2xl font-semibold mb-2 text-primary/90">
                इसे क्यों नहीं अपनाया गया?
              </h2>
              <p className="mb-4">
                इतनी खूबियों के बावजूद, यह कैलेंडर दुनिया भर में लागू नहीं हो पाया। इसके कई कारण थे:
              </p>
              <ol className="space-y-3 list-decimal pl-6">
                <li>
                  <strong className="font-semibold">धार्मिक विरोध:</strong> कई धार्मिक समूहों, विशेषकर यहूदियों और ईसाइयों ने इसका विरोध किया। उनका तर्क था कि "वर्ष दिवस" और "लीप दिवस" जैसे अतिरिक्त दिन साप्ताहिक चक्र को तोड़ देंगे, जो हर सात दिन पर आधारित है।
                </li>
                <li>
                  <strong className="font-semibold">अंधविश्वास:</strong> १३ नंबर को कई संस्कृतियों में अशुभ माना जाता है। एक ऐसा कैलेंडर जिसमें १३ महीने हों, उसे लेकर लोगों में एक स्वाभाविक झिझक थी।
                </li>
                <li>
                  <strong className="font-semibold">आर्थिक और प्रशासनिक लागत:</strong> पूरी दुनिया के कैलेंडर को बदलना एक बहुत बड़ा और महंगा काम होता। कंप्यूटर सिस्टम, आधिकारिक दस्तावेज़, और ऐतिहासिक रिकॉर्ड, सब कुछ बदलना पड़ता।
                </li>
                <li>
                  <strong className="font-semibold">प्रतिस्पर्धा:</strong> उस समय, राष्ट्र संघ (League of Nations) कैलेंडर सुधार के कई प्रस्तावों पर विचार कर रहा था, और अंतर्राष्ट्रीय निश्चित कैलेंडर उनमें से सिर्फ एक था। कोई भी प्रस्ताव सर्वसम्मति हासिल नहीं कर सका।
                </li>
              </ol>
            </div>
            
            <Separator />

            <div>
              <h2 className="font-headline text-2xl font-semibold mb-2 text-primary/90">
                निष्कर्ष
              </h2>
              <p>
                हालाँकि १३ महीने का कैलेंडर एक तार्किक और व्यवस्थित प्रणाली थी, लेकिन सामाजिक, धार्मिक और व्यावहारिक बाधाओं के कारण यह कभी भी वैश्विक स्वीकृति प्राप्त नहीं कर सका। आज भी यह कैलेंडर सुधार के इतिहास में एक आकर्षक अध्याय के रूप में याद किया जाता है, जो हमें बताता है कि समय को मापना केवल गणित नहीं, बल्कि संस्कृति और परंपरा का भी हिस्सा है।
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
