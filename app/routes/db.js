/*api.get('/loadmed', function(req, res){

        Medicine.collection.insert([{
            name:'Crocin 500MG',
            company:'Glaxo SmithKline',
            tabstrip:10,
            pricetab:2.25,
            pricestrip:22.50,
            usage:['Mild to moderate pain and fever'],
            maindrug:'Paracetamol'
        },
        {
            name:'DOLO 650MG',
            company:'Micro labs',
            tabstrip:1,
            pricetab:33.50,
            pricestrip:33.50,
            usage:['Mild to moderate pain and fever'],
            maindrug:'Paracetamol'
        },
        {
            name:'SUMO',
            company:'ALKEM',
            tabstrip:15,
            pricetab:2.90,
            pricestrip:43.50,
            usage:['PO Acute pain', 'Extra-articular disorders' ,'Osteoarthritis'],
            maindrug:'Nimuslide'
        },
        {
            name:'NIDIC',
            company:'Meridian ltd',
            tabstrip:1,
            pricetab:299,
            pricestrip:299,
            usage:['PO Acute pain', 'Extra-articular disorders', 'Osteoarthritis'],
            maindrug:'Nimuslide'
        },
        {
            name:'Nise',
            company:'Dr Reddy\'s Lab ltd',
            tabstrip:15,
            pricetab:4.17,
            pricestrip:62.55,
            usage:['PO Acute pain', 'Extra-articular disorders', 'Osteoarthritis'],
            maindrug:'Nimuslide'
        },
        {
            name:'Levocet',
            company:'Hetero',
            tabstrip:10,
            pricetab:3.90,
            pricestrip:39,
            usage:['Nasal Congestion'],
            maindrug:'Phenylephrine'
        },
        {
            name:'FLUBLAST',
            company:'Glenmark',
            tabstrip:10,
            pricetab:3.30,
            pricestrip:33.90,
            usage:['Nasal Congestion'],
            maindrug:'Phenylephrine'
        },
        {
            name:'Cetiriz',
            company:'ALKEM',
            tabstrip:10,
            pricetab:3.50,
            pricestrip:35.00,
            usage:['Flu'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'Citrazan',
            company:'Mac Lab Ltd',
            tabstrip:10,
            pricetab:5.7,
            pricestrip:57,
            usage:['Flu'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'Cetmet 10MG',
            company:'Almet',
            tabstrip:10,
            pricetab:5.9,
            pricestrip:59,
            usage:['Flu'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'A CET 10MG',
            company:'Acto Lab',
            tabstrip:10,
            pricetab:2.2,
            pricestrip:22,
            usage:['Flu'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {    
            name:'IKA',
            company:'Emcure',
            tabstrip:10,
            pricetab:3.70,
            pricestrip:37.00,
            usage:['flu'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'Milixim 100MG',
            company:'Glenmark',
            tabstrip:10,
            pricetab:5.76,
            pricestrip:57.60,
            usage:['PO Suspectible Infections'],
            maindrug:'Cefixime'
        },
        {
            name:'CEFEX 400MG',
            company:'Talent Healthcare',
            tabstrip:10,
            pricetab:29,
            pricestrip:290,
            usage:['PO Suspectible Infections'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'RITE O CEF',
            company:'Micro eros',
            tabstrip:10,
            pricetab:2.7,
            pricestrip:27,
            usage:['PO Suspectible Infections'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'ZETAX O 400MG',
            company:'Eyekare',
            tabstrip:10,
            pricetab:20,
            pricestrip:200,
            usage:['PO Suspectible Infections'],
            maindrug:'Cetirizine Hydrochloride'
        },
        {
            name:'Monoflox 400MG',
            company:'Captab',
            tabstrip:1,
            pricetab:537,
            pricestrip:537,
            usage:['PO Part of multidrug therapy in leprosy 400 mg/day or intermittently, depending on regimen. Uncomplicated gonorrhoea Single dose of 400 mg. Acute bacterial exacerbation of chronic bronchitis',' Community-acquired pneumonia',' Uncomplicated skin infections 400 mg twice daily for 10 days. '],
            maindrug:'Ofloxacin'
        },
        {
            name:'OFAX 400MG',
            company:'Glen',
            tabstrip:1,
            pricetab:90,
            pricestrip:90,
            usage:['PO Part of multidrug therapy in leprosy 400 mg/day or intermittently, depending on regimen. Uncomplicated gonorrhoea Single dose of 400 mg. Acute bacterial exacerbation of chronic bronchitis',' Community-acquired pneumonia',' Uncomplicated skin infections 400 mg twice daily for 10 days. '],
            maindrug:'Ofloxacin'
        },
        {
            name:'ORDENT',
            company:'Dr Reddy\'s Lab',
            tabstrip:1,
            pricetab:89,
            pricestrip:89,
            usage:['PO Part of multidrug therapy in leprosy 400 mg/day or intermittently, depending on regimen. Uncomplicated gonorrhoea Single dose of 400 mg. Acute bacterial exacerbation of chronic bronchitis',' Community-acquired pneumonia',' Uncomplicated skin infections 400 mg twice daily for 10 days. '],
            maindrug:'Ofloxacin'
        },
        {
            name:'Zinetac 150MG',
            company:'Glaxo SmithKline',
            tabstrip:20,
            pricetab:0.99,
            pricestrip:19.80,
            usage:['Grastic And Duodenal Ulceration'],
            maindrug:'Ranitdine'
        },
        {
            name:'Aciloc 300MG',
            company:'Cadila',
            tabstrip:6,
            pricetab:2.55,
            pricestrip:15.39,
            usage:['Grastic And Duodenal Ulceration'],
            maindrug:'Ranitdine'
        },
        {
            name:'Aciloc 150MG',
            company:'Cadila',
            tabstrip:6,
            pricetab:0.65,
            pricestrip:9.75,
            usage:['Grastic And Duodenal Ulceration'],
            maindrug:'Ranitdine'
        },
        {
            name:'Zinetac 300MG',
            company:'Glaxo SmithKline',
            tabstrip:20,
            pricetab:2.00,
            pricestrip:40.00,
            usage:['Grastic And Duodenal Ulceration'],
            maindrug:'Ranitdine'
        },
        {
            name:'Novaflox 250MG',
            company:'Novagen',
            tabstrip:10,
            pricetab:4.40,
            pricestrip:44,
            usage:['Acute Sinusitis'],
            maindrug:'Levofloxacin'
        },
        {
            name:'Levomac az',
            company:'Macleods',
            tabstrip:5,
            pricetab:26.40,
            pricestrip:132,
            usage:['Acute Sinusitis'],
            maindrug:'Levofloxacin'
        },
        {
            name:'Levolife 750MG',
            company:'LifelineCH',
            tabstrip:10,
            pricetab:21.80,
            pricestrip:218,
            usage:['Acute Sinusitis'],
            maindrug:'Levofloxacin'
        },
        {
            name:'Glenoflox 500Mg',
            company:'Neiss labs',
            tabstrip:1,
            pricetab:130,
            pricestrip:130,
            usage:['Acute Sinusitis'],
            maindrug:'Levofloxacin'
        },
        {
            name:'Allegra 30MG',
            company:'Sanofi',
            tabstrip:10,
            pricetab:3.10,
            pricestrip:31,
            usage:['Seasonal allegeric Rhinitis'],
            maindrug:'Fexofenadine'
        },
        {
            name:'Allegra 120MG',
            tabstrip:10,
            pricetab:12.4,
            pricestrip:124,
            usage:['Seasonal allegeric Rhinitis'],
            maindrug:'Fexofenadine'
        },
        {
            name:'Rafidex',
            company:'Radicura ltd',
            tabstrip:10,
            pricetab:6.5,
            pricestrip:65,
            usage:['Seasonal allegeric Rhinitis'],
            maindrug:'Fexofenadine'
        },
        {
            name:'Saridon',
            company:'Ahpl',
            tabstrip:10,
            pricetab:1.82,
            pricestrip:18.15,
            usage:['Paracetamol'],
            maindrug:'mild to maderate pain and fever'
        },
        {
            name:'Trambax',
            company:'Ranbaxy',
            tabstrip:10,
            pricetab:17.50,
            pricestrip:175,
            usage:['Paracetamol'],
            maindrug:'mild to maderate pain and fever'
        },
        {
            name:'Disprin',
            company:'Reckitt Benckiser',
            tabstrip:10,
            pricetab:0.27,
            pricestrip:2.65,
            usage:['Headache','inflammation and pain'],
            maindrug:'Aspirine'
        },
        {
            name:'Clopigrel',
            company:'USV',
            tabstrip:10,
            pricetab:15.72,
            pricestrip:157.18,
            usage:['Headache','inflammation and pain'],
            maindrug:'Aspirine'
        },
        {
            name:'Zogrella',
            company:'VHB',
            tabstrip:10,
            pricetab:8.69,
            pricestrip:86.9,
            usage:['Headache','inflammation and pain'],
            maindrug:'Aspirine'
        },
        {
            name:'Dazolic',
            company:'Sun pharma',
            tabstrip:10,
            pricetab:7.8,
            pricestrip:78,
            usage:['Amoebic Dysentry'],
            maindrug:'Ornidazole'
        },
        {
            name:'Ornof',
            company:'Aristo pharma',
            tabstrip:10,
            pricetab:7.73,
            pricestrip:77.30,
            usage:['Amoebic Dysentry'],
            maindrug:'Ornidazole'
        },
        {
            name:'Oniz',
            company:'Stadmed',
            tabstrip:10,
            pricetab:6.78,
            pricestrip:67.8,
            usage:['Amoebic Dysentry'],
            maindrug:'Ornidazole'
        },
        {
            name:'Zil',
            company:'AHPL',
            tabstrip:10,
            pricetab:4.4,
            pricestrip:44,
            usage:['Amoebic Dysentry'],
            maindrug:'Ornidazole'
        },
        {
            name:'Orin',
            company:'shince',
            tabstrip:10,
            pricetab:6,
            pricestrip:60,
            usage:[' Susceptible infections'],
            maindrug:'Oxytetracycline'
        },
        {
            name:'Orni',
            company:'Zydus',
            tabstrip:10,
            pricetab:9.9,
            pricestrip:99,
            usage:[' Susceptible infections'],
            maindrug:'Oxytetracycline'
        },
        {
            name:'Ofac o',
            company:'savoy',
            tabstrip:10,
            pricetab:8.5,
            pricestrip:85,
            usage:[' Susceptible infections'],
            maindrug:'Oxytetracycline'
        },
        {
            name:'Fasigyn',
            company:'Pflzer',
            tabstrip:2,
            pricetab:13,
            pricestrip:26,
            usage:[' Susceptible infections'],
            maindrug:'Oxytetracycline'
        },
        {
            name:'tina 1gm',
            company:'Bombay tablets',
            tabstrip:2,
            pricetab:7,
            pricestrip:14,
            usage:['Bacterial vaginosis'],
            maindrug:'Tinidazole'
        },
        {
            name:'Zil 1gm',
            company:'Ahpl',
            tabstrip:2,
            pricetab:7.5,
            pricestrip:15,
            usage:['Bacterial vaginosis'],
            maindrug:'Tinidazole'
        },

        {
            name:'Aflox TZ',
            company:'Psyco Remedies',
            tabstrip:1,
            pricetab:67,
            pricestrip:67,
            usage:['Nauseau', 'vomiting',' abdominial pain','diarrhoea',' headache','dizziness',' insomnia'],
            maindrug:'OFLOXACIN+TINIDAZOLE'
        },
        {
            name:'Oflin tz',
            company:'Zydus Cadilla',
            tabstrip:10,
            pricetab:9.75,
            pricestrip:97.50,
            usage:['Nauseau', 'vomiting',' abdominial pain','diarrhoea',' headache','dizziness',' insomnia'],
            maindrug:'OFLOXACIN+TINIDAZOLE'
        },
        {
            name:'OFT',
            company:'JB pahrma',
            tabstrip:10,
            pricetab:2.42,
            pricestrip:24,
            usage:['Nauseau', 'vomiting',' abdominial pain','diarrhoea',' headache','dizziness',' insomnia'],
            maindrug:'OFLOXACIN+TINIDAZOLE'
        },
        {
            name:'Ebast M',
            company:'Micro labs',
            tabstrip:10,
            pricetab:11.8,
            pricestrip:118,
            usage:['Allergic Condtions'],
            maindrug:'Ebastine'
        },
        {
            name:'Ebay',
            company:'bal pharma',
            tabstrip:10,
            pricetab:6,
            pricestrip:60,
            usage:['Allergic Condtions'],
            maindrug:'Ebastine'
        },
        {
            name:'Normagut',
            company:'Workhardt',
            tabstrip:10,
            pricetab:0.68,
            pricestrip:68,
            usage:['Promote normal intestinal bacterial flora'],
            maindrug:'LACTOBACILLUS COMBINATIONS'
        },
        {
            name:'Econova',
            company:'glenmark',
            tabstrip:10,
            pricetab:52,
            pricestrip:520,
            usage:['Promote normal intestinal bacterial flora'],
            maindrug:'LACTOBACILLUS COMBINATIONS'
        },
        {
            name:'Labifos',
            company:'shield healthcare',
            tabstrip:10,
            pricetab:9.9,
            pricestrip:99,
            usage:['Promote normal intestinal bacterial flora'],
            maindrug:'LACTOBACILLUS COMBINATIONS'
        },
        {    
            name:'Otrivin',
            company:'Novartis',
            tabstrip:1,
            pricetab:175,
            pricestrip:175,
            usage:['Topical Corticosteroid-responsive dermatoses'],
            maindrug:'FLUTICASONE'
        },
        {
            name:'Nasivion',
            company:'Merck',
            tabstrip:1,
            pricetab:46,
            pricestrip:46,
            usage:['Nasal congestion'],
            maindrug:'OXYMETAZOLINE'
        },
        {
            name:'coldec',
            company:'daksh Pharma',
            tabstrip:10,
            pricetab:3,
            pricestrip:30,
            usage:['Cough suppressant'],
            maindrug:'DEXTROMETHORPHAN'
        },
        {
            name:'Rabicip',
            company:'Cipla',
            tabstrip:10,
            pricetab:7.5,
            pricestrip:75,
            usage:['Gastro-oesophageal reflux disease.'],
            maindrug:'RABEPRAZOLE'
        },
        {
            name:'Razo',
            company:'dr Reddy\'s Lab',
            tabstrip:15,
            pricetab:11.6,
            pricestrip:174,
            usage:['Gastro-oesophageal reflux disease.'],
            maindrug:'RABEPRAZOLE'
        }],function(err,meds){
            if(err){
                res.send(err);
                return;
            }
            res.json(meds);
        });
    });
*/