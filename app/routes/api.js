var User = require('../models/user');
var Story = require('../models/story');
var Gym = require('../models/gym');
var Yoga = require('../models/yoga');
var Doctor = require('../models/doctor');
var Symp = require('../models/symtom');
var Donor = require('../models/donor');
//var BookTrail = require('../models/gymTrial');
var GymBooking = require('../models/gymBook');
var config = require('../../config');
var secretKey = config.secretKey;
var jsonwebtoken = require('jsonwebtoken');
var fs = require('fs');
var Medicine = require('../models/medicine');
var nodemailer = require("nodemailer"); 
var uuid = require('node-uuid');
var request = require('request');
var cheerio = require('cheerio');
var kmeans = require('../models/kmeans');
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "gmail",
 auth:{
            XOAuth2: {
                user:"rohitchaudhary95@gmail.com",
                clientId:"578380194099-9ek86ncop98ftui96gsinitbbu61fsnd.apps.googleusercontent.com",
                clientSecret:"coAvIDDIabWpUUocqFdgn_v0",
                refreshToken:"1/aOs-ESQoGKyJhDdot_dZ2zxeAw6KHTj2Z2QfcPTOQ6U"
            }
        }
}); 



function createToken(user){

	var token =	jsonwebtoken.sign({
		id: user._id,
		name: user.name,
		username: user.username
	}, secretKey , {
		expirtesInMinute: 1440
	});
	return token;
}


module.exports = function(app, express){

	var api = express.Router();
	
	
api.get('/mltest',function(req, res){
 var data = [ 

   {'name': 'Crocin 500MG' , 'Paracetamol': 70, 'Nimuslide': 20,'Acetamenophen':10,'Phenylephrine': 0 ,'Levocetirizine': 0,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

   {'name': 'DOLO 650MG' , 'Paracetamol': 75, 'Nimuslide': 17,'Acetamenophen':8,'Phenylephrine': 0 ,'Levocetirizine': 0,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 }, 

   {'name': 'SUMO' , 'Paracetamol': 45, 'Nimuslide': 50,'Acetamenophen':5,'Phenylephrine': 0 ,'Levocetirizine': 0,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

   {'name': 'NIDIC' , 'Paracetamol': 25, 'Nimuslide': 65,'Acetamenophen':10,'Phenylephrine': 0 ,'Levocetirizine': 0,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

   {'name': 'Nise' , 'Paracetamol': 30, 'Nimuslide': 55,'Acetamenophen':15,'Phenylephrine': 0 ,'Levocetirizine': 0,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

   {'name': 'Levocet' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 50 ,'Ambroxol': 15,'Levocetirizine': 35,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

   {'name': 'FLUBLAST' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 90 ,'Ambroxol': 3,'Levocetirizine': 7,'Cefixime': 0, 'Pseudoephedrine':0 ,'Montelukast':0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Milixim 100MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0,'Cefixime': 73, 'Pseudoephedrine':13 ,'Montelukast':14,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'CEFEX 400MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0,'Cefixime': 69, 'Pseudoephedrine':11 ,'Montelukast':20,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'RITE O CEF' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0,'Cefixime': 60, 'Pseudoephedrine':7 ,'Montelukast':33,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'ZETAX O 400MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0,'Cefixime': 71, 'Pseudoephedrine':15 ,'Montelukast':14,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Ambroxol':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Monoflox 400MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Ofloxacin':78 ,'Ornidazole':11 ,'Montelukast':11,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0  },

  {'name': 'OFAX 400MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Ofloxacin': 73,'Ornidazole': 13 ,'Montelukast':14,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0  },

  {'name': 'ORDENT' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Ofloxacin': 79 ,'Ornidazole':11 ,'Montelukast':10 ,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0,'Levofloxacin':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },
  
  {'name': 'Zinetac 150MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':80,'Ondansetron':5,'domperidone':15,'Levofloxacin':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Aciloc 150MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':80,'Ondansetron':5,'domperidone':15,'Levofloxacin':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Zinetac 300MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':80,'Ondansetron':5,'domperidone':15,'Levofloxacin':0,'Fexofenadine':0 ,'Zyrtec': 0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Novaflox 250MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':90,'Ambroxol':10,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Levomac az' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':90,'Ambroxol':10,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Levolife 750MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':90,'Ambroxol':10,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Glenoflox 500Mg' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'domperidone':0, 'Levofloxacin': 90,'Ambroxol':10,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Allegra 120MG' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'domperidone':0, 'Levofloxacin':0,'Ambroxol': 0,'Fexofenadine':90 ,'Zyrtec':5 ,'Ondansetron':5 ,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Rafidex' , 'Paracetamol': 0,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':0,'Ambroxol': 0,'Fexofenadine':90 ,'Zyrtec':5 ,'Ondansetron':5,'propyphenazone':0,'Caffeine':0 },

  {'name': 'Saridon' ,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':0,'Ambroxol': 0,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':20,'Paracetamol':70,'Caffeine':10},

  {'name': 'Trambax' ,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':0,'Ambroxol': 0,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':20,'Paracetamol':70,'Caffeine':10},

  {'name': 'Clopigrel' ,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':0,'Ambroxol': 0,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':20,'Paracetamol':70, 'Caffeine' : 10},

  {'name': 'Zogrella' ,'Nimuslide': 0,'Acetamenophen': 0,'Phenylephrine': 0,'Ambroxol': 0,'Levocetirizine': 0 ,'Cefixime': 0, 'Pseudoephedrine': 0 ,'Montelukast': 0,'Ofloxacin': 0,'Ornidazole': 0,'Ranitdine':0,'Ondansetron':0,'domperidone':0, 'Levofloxacin':0,'Ambroxol': 0,'Fexofenadine':0 ,'Zyrtec':0 ,'Ondansetron':0 ,'propyphenazone':20,'Paracetamol':70,'Caffeine':10}
];


var vectors = new Array();
for (var i = 0 ; i < data.length ; i++)
  vectors[i] = [ data[i]['Nimuslide'] , data[i]['Acetamenophen'],data[i]['Phenylephrine'] , data[i]['Ambroxol'],data[i]['Levocetirizine'] , data[i]['Cefixime'],data[i]['Pseudoephedrine'] , data[i]['Montelukast'],data[i]['Ofloxacin'] , data[i]['Ornidazole'],data[i]['Ranitdine'] , data[i]['Ondansetron'],data[i]['domperidone'] , data[i]['Levofloxacin'],data[i]['Fexofenadine'] , data[i]['Zyrtec'], data[i]['Caffeine'], data[i]['Paracetamol'], data[i]['propyphenazone']];
    kmeans.clusterize(vectors, {k: 4}, function(err,res) {
        if (err) console.error(err);
        else{
        // console.log('%o',res.cluster);
        Medicine.find({name:res.cluster.object.name},function(err,ans){
            if(err)
            {    console.log(err);
                res.send(err);
            }
            else
            {
                res.send(ans);             
            }
        })
    }
    });


});

    api.get('/xyz', function(req, res){
        GymBooking.find({},function(err, gymm){
            if(err){
                res.send(err);
                return;
            }
            res.json(gymm);
        });
    });

    api.get('/xyz1', function(req, res){
        GymBooking.remove({},function(err, gymm){
            if(err){
                res.send(err);
                return;
            }
            res.json(gymm);
        });
    });
	
    api.get('/showmed', function(req, res){

        Medicine.find({}, function(err, symps){
            if(err){
                res.send(err);
                return;
            }

            res.json(symps);
        });
    });



        api.post('/scrap',function(req,res){
        var sym=req.body.symptom;
        var symptom=sym.replace(/\s+/g,"+");
        var url="https://www.healthychildren.org/English/tips-tools/symptom-checker/Pages/symptomviewer.aspx?symptom="+symptom;
        request(url,function(err,response,body){
            if(err)
                return(console.error(err));
            var $=cheerio.load(body);
            var heads=[];
            var head1=[];
            var desc=[];
            $('h3','#read_content1').each(function(){
                var h=$(this);
                var hh=h.children().text();
                var hh1=h.text();
                if(hh='')
                {
                    heads.push(hh);
                }
                else
                {
                    head1.push(hh1);
                }
            });
            $('ul','#read_content1').each(function(){
                var d=$(this);
                var data=d.children().text();
                desc.push(data);
            });
           // console.log(head1);
           // console.log(desc);
           
            var ob=[];
            for(var i=0;i<head1.length;i++)
            {
                var obj={heading:"" , description:""};
                console.log(i);
                console.log(head1[i]);
                obj.heading=head1[i];
                obj.description=desc[i];
                ob.push(obj);
            }
            //var ob1=JSON.stringify(ob);
            res.json(ob);
        });
    });




    api.get('/showyoga', function(req, res){

        Yoga.find({}, function(err, yoga){
            if(err){
                res.send(err);
                return;
            }

            res.json(yoga);
        });
    });

    api.route('/searchmed')
         .post(function(req, res){
            Medicine.find({name:new RegExp(req.body.name,'i')})
            .exec(function(err,docs){
                if(err) {
                    res.send(err);
                    return;
                }
                res.json(docs);
            });
        });

api.post('/searchSubs',function(req,res){
            var ans;
            console.log(req.body.name);
            Medicine.find({name:new RegExp(req.body.name,'i')})
            .exec(function(err,docs){
                if(err) {
                    res.send(err);
                    return;
                }
                console.log(docs);
                ans=docs.map(function(v){return v.maindrug;});
                Medicine.find({maindrug: ans},function(err1,subs){
                    if(err1){
                        res.send(err);
                        return;
                    }
                    console.log(subs);
                     var xyz=[];
                     //console.log(subs.size);
                     //console.log(subs.size());
                for(var i=0;i<subs.length;i++)
                {
                    console.log("yeah");
                    if(subs[i].name==req.body.name)
                    {
                        console.log("hooo");
                        console.log(subs.name);
                        console.log(req.body.name);
                    }
                    else
                    {
                        console.log("hi");
                        xyz.push(subs[i]);
                    }
                }
                    res.json(xyz);
                });
                //res.json(docs);
            });
            //res.json(ans);
            
    });
	
	api.route('/mapData')
        .post(function(req, res){
             
            Gym.find({city:req.body.city},'name lat lng' ,function(err,don) {
                if(err) {
                    res.send(err);
                    return;
                }
                res.json(don);
            });
        });

   

	api.post('/signupGym', function(req, res){

			var gym = new Gym({
				name: req.body.name,
				city: req.body.city,
				charges: req.body.charges,
				description: req.body.description,
				phoneNo: req.body.phoneNo,
				address: req.body.address,
				lat: req.body.lat,
				lng: req.body.lng,
				username: req.body.username,
				password: req.body.password
			});		
		var token = createToken(gym);
	
	gym.save(function(err){
		if(err){
			res.send(err);
			return;
		}

		res.json({ 
			success: true,
			message: 'gym has been created!',
			token: token
		});
	});

	});

	api.post('/signupYoga', function(req, res){

            var yoga = new Yoga({
                name: req.body.name,
                city: req.body.city,
                charges: req.body.charges,
                description: req.body.description,
                phoneNo: req.body.phoneNo,
                address: req.body.address,
                lat: req.body.lat,
                lng: req.body.lng,
                username: req.body.username,
                password: req.body.password
            });     
        var token = createToken(yoga);
    
    yoga.save(function(err){
        if(err){
            res.send(err);
            return;
        }

        res.json({ 
            success: true,
            message: 'yoga centre has been created!',
            token: token
        });
    });

    });

    api.post('/signup', function(req, res){
        var uuid1 = uuid.v4();
        var user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstTime:uuid1
        });
    
        user.save(function(err){
        if(err){
            res.send(err);
            console.log("hi shreya");
            return (err);

        }
        else{
            
         var token = createToken(user);
            res.json({ 
            success: true,
            message: 'user has been created!',
            token: token
            });
            console.log('hiooooooooooo');
            var verifyURL= req.protocol + "://" + req.get('host') + "/verify/" + uuid1;
            var mailOptions={
                from:'rohitchaudhary95@gmail.com',
                to : req.body.email,
                subject : "reMedi email verification",
                text : "To verify your mail click on "+verifyURL
            }
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log("here");
                console.log(error);
                res.send(error);
                return;
            }
            else{
               console.log("Message sent: " + response.message);
           //     res.end("sent");
            }
        });
            return(res.json);
        }    
    });

});


api.post('/confirmation',function(req,res){
    var gym_name=req.body.username;
    console.log(gym_name);
     var mailOptions={
                from:'rohitchaudhary95@gmail.com',
                to : req.body.email,
                subject : gym_name+" has confirmed your booking",
                text : gym_name+" has confirmed your booking. See you there!"
            }
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
              
                console.log(error);
              //  res.send(error);
                 res.send({ message: "Mail couldn't be sent. Try again!"});
                 var errorGen=new Error("Mail couldn't be sent. Try again!");
                                errorGen.http_code = 405;
                                errorGen.success = false;
                                console.log(errorGen);
                                return(errorGen);
            }
            res.json({
                      success: true,
                    message: "User has been informed about the confirmation"
                    });               
            
        });
});



app.get("/verify/:token", function (req, res, next) {
    var token = req.params.token;
    User.update({firstTime:token}, { $set: {firstTime:'' }},function(err,users){
        if(err){
            res.send(err);
            return;
        }
    });
});

    api.get('/delUser', function(req, res){

        User.remove({}, function(err, sym){
            if(err){
                res.send(err);
                return;
            }

            res.json(sym);
        });
    });


    api.get('/users', function(req, res){

        User.find({}, function(err, users){
            if(err){
                res.send(err);
                return;
            }

            res.json(users);
        });
    });


    api.get('/onLoad', function(req, res){

		var exec = require('child_process').exec, child;

		child = exec('rohitjson *.py bad_file | wc -l',function (error, stdout, stderr) {
    			console.log('stdout: ' + stdout);
    			console.log('stderr: ' + stderr);
    			
    			if (error !== null) {
      				console.log('exec error: ' + error);
    		}
		});
	});

	api.get('/onLoadCart', function(req, res){

		var exec = require('child_process').exec, child;

		child = exec('FileHandle2 *.java bad_file | wc -l',function (error, stdout, stderr) {
    			console.log('stdout: ' + stdout);
    			console.log('stderr: ' + stderr);
    			
    			if (error !== null) {
      				console.log('exec error: ' + error);
    		}
		});
	});

	api.get('/users', function(req, res){

		User.find({}, function(err, users){
			if(err){
				res.send(err);
				return;
			}

			res.json(users);
		});
	});

	api.get('/fileout', function(req,res){
			
			//fs = require('fs');
			fs.readFile('/app/rohit.txt', 'utf8', function (err,data) {
		  		if (err) {
		  			res.send(err);
		  			return;
		    		//return console.log(err);
			  }
			  	//console.log(data);
			  	res.json(data);
			});

	});
			
	api.post('/viewGyms', function(req, res){

			Gym.find({city: req.body.city}).sort({charges: -1}).exec(function(err, gyms){
				if(err){
					res.send(err);
					return;
				}                       
				res.json(gyms);
			});
	});

	api.post('/viewYogaCentres', function(req, res){

			Yoga.find({city: req.body.loc1}, function(err, yogacentres){
				if(err){
					res.send(err);
					return;
				}
				res.json(yogacentres);
			});
	});

	
	api.post('/load', function(req, res){

		Symp.collection.insert([{
			disease : 'Dengue',
			symptoms : ['Fever','Neck Pains','Skin Patches']
		},
		{
			disease : 'Acidity',
			symptoms : ['Heartburn','Regurgitation','chills']
		},
		{
			disease : 'Allergy',
			symptoms : ['Skin Patches','Cough','Rash']
		},
		{
			disease : 'Appendicitis',
			symptoms : ['Abdomenal Pain','Nausea','Abdominal Bloating']
		},
		{
			disease : 'Heart attack',
			symptoms : ['Chest pain','Burning Sensation','Chills']
		},
		{
			disease : 'Hay Fever',
			symptoms : ['Itching/Burning','Cough','Fatigue','Burning eyes','Difficulty breathing through nose','Swelling','Eye irritation','Running nose']
		},
		{
			disease : 'Common cold',
			symptoms : ['Sneezing','Body aches','Headache','Loss of voice','Sore throat']
		},
		{
			disease : 'Aplastic Anemia',
			symptoms : ['Nosebleed','Bleeding gums','Dizziness','Fatigue','Lightheadedness','Shortness of breath','Difficulty concentrating','Pain']
		},
		{
			disease : 'Dehydration',
			symptoms : ['Dizziness','Fainting','Constipation','Dry mouth','Increased thirst','Fatigue','Decreased urination']
		},
		{
			disease :'Jaundice',
			symptoms : ['Fever','Yellow eyes','Fatigue']
		},
		{
			disease :'TB',
			symptoms : ['Cough','Chest Pain','Sore Throat']
		},
		{
			disease :'Malaria',
			symptoms : ['Nausia','Chills','Fever']
		},
		{
			disease :'Asthma',
			symptoms : ['Chest pain','Sore Throat','Cough']
		}],function(err,symps){
			if(err){
				res.send(err);
				return;
			}
			res.json(symps);
		});
	});

api.get('/delDisease', function(req, res){

		Symp.remove({}, function(err, sym){
			if(err){
				res.send(err);
				return;
			}

			res.json(sym);
		});
	});
	api.get('/showdisease', function(req, res){

		Symp.find({}, function(err, symps){
			if(err){
				res.send(err);
				return;
			}

			res.json(symps);
		});
	});

	api.route('/checkSym')
	 	.post(function(req, res){
			Symp.find({$or: [{symptoms:new RegExp(req.body.symp1,'i')},{symptoms:new RegExp(req.body.symp2,'i')},{symptoms:new RegExp(req.body.symp3,'i')}]},function(err,docs){
				if(err) {
					res.send(err);
					return;
				}
				res.json(docs);
			});
		});


	api.route('/newdonor')
		.post(function(req, res){

			var donor  = new Donor({
				name: req.body.name,
				city: req.body.city,
				age : req.body.age,
				bloodGroup : req.body.bloodGroup,
				mobNo: req.body.mobNo,
				//state: req.body.state,
				lastdonated: req.body.lastdonated,
				//address: req.body.address,
			});
			 donor.save(function(err){
				if(err){
					res.send(err);
					return;
				}
				res.json({ 
					success: true,
					message: 'Thanks for filling the form!' ,
			});
		});
	});
	api.get('/showdonor', function(req, res){

		Donor.find({}, function(err, don){
			if(err){
				res.send(err);
				return;
			}

			res.json(don);
		});
	});
	api.get('/deldonor', function(req, res){

		Donor.remove({}, function(err, don){
			if(err){
				res.send(err);
				return;
			}

			res.json(don);
		});
	});
	api.route('/finddonor')
		.post(function(req, res){
			// Donor.find({$and: [{city: new RegExp(["^", req.body.city, "$"].join(""), "i")},{bloodGroup:new RegExp(["^", req.body.bloodGroup, "$"].join(""), "i")}]},function(err,don) {
			Donor.find({$and: [{city:req.body.city},{bloodGroup: req.body.bloodGroup}]},function(err,don) {
				if(err) {
					res.send(err);
					return;
				}
				res.json(don);
			});
		});
	
    /*api.post('/login', function(req, res){
        
            User.findOne({
                username: req.body.username
            }).select('name username password').exec(function(err, user){

                if(err) throw err;

                if(!user){
                    res.send({ message: "User doesn't exist"});
                }
                else if(user){
                    var validPassword = user.comparePassword(req.body.password);
                    if(!validPassword){
                        res.send({message : "invalid password"});
                    }else {

                        var token = createToken(user);
                        res.json({
                            success: true,
                            message: "Successfully login",
                            token: token
                        });
                    }
                }
            });
      });*/


	api.post('/login', function(req, res){
        
        var type = req.body.types;
        
      //   if(type=='user')
      //   {
    		// User.findOne({
    		// 	username: req.body.username
    		// }).select('name username password').exec(function(err, user){

    		// 	if(err) throw err;

    		// 	if(!user){
    		// 		res.send({ message: "User doesn't exist"});
    		// 	}
    		// 	else if(user){
    		// 		var validPassword = user.comparePassword(req.body.password);
    		// 		if(!validPassword){
    		// 			res.send({message : "invalid password"});
    		// 		}else {

    		// 			var token = createToken(user);
    		// 			res.json({
    		// 				success: true,
      //                       name: req.body.username,
    		// 				message: "Successfully login",
    		// 				token: token
    		// 			});
    		// 		}
    		// 	}
    		// });
      //   }

      if(type=='user')
        {
            User.findOne({
                username: req.body.username
            }).select('name username password firstTime').exec(function(err, user){

                if(err) throw err;

                if(!user){
                    console.log("not user");
                    res.send({ message: "User doesn't exist"});
                }
                else if(user){

                    console.log(user.firstTime);

                  
                    var validPassword = user.comparePassword(req.body.password);
                    if(!validPassword){

                        res.send({message : "invalid password"});
                    }
                    else {
                            if(user.firstTime!=""){
                                console.log("firstTime");
                                res.send({message: "E-mail not verified"});
                                var errorGen=new Error("E-mail not verified");
                                errorGen.http_code = 405;
                                errorGen.success = false;
                                console.log(errorGen);
                                return(errorGen);

                            }
                            else{
                                 console.log("login kro");
                               var token = createToken(user);
                               res.json({
                                   success: true,
                                   name: req.body.username,
                                   message: "Successfully login",
                                   token: token
                                });
                            }
                        }
                    }
                });
            }
        else if(type=='gym')
        {
            Gym.findOne({
                 username: req.body.username
                    }).select('name password').exec(function(err, gym){

                if(err) throw err;

                if(!gym){
                    res.send({ message: "Gym doesn't exist"});
                }
                else if(gym){
                    var validPassword = gym.comparePassword(req.body.password);
                    if(!validPassword){
                        res.send({message : "invalid password"});
                    }else {

                        var token = createToken(gym);
                        res.json({
                            success: true,
                            name: req.body.username,
                            message: "Successfully login",
                            token: token
                        });
                    }
                }
            });            
        }
        else if(type=='yoga')
        {
                Yoga.findOne({
            username: req.body.username
        }).select('name password').exec(function(err, yoga){

            if(err) throw err;

            if(!yoga){
                res.send({ message: "yoga centre doesn't exist"});
            }
            else if(yoga){
                var validPassword = yoga.comparePassword(req.body.password);
                if(!validPassword){
                    res.send({message : "invalid password"});
                }else {

                    var token = createToken(yoga);
                    res.json({
                            success: true,
                            name: req.body.username,
                            message: "Successfully login",
                            token: token
                        });
                    }
                }
            });            
        }
        else if(type=='doctor')
        {
                Doctor.findOne({
            username: req.body.username
        }).select('name password').exec(function(err, doctor){

            if(err) throw err;

            if(!doctor){
                res.send({ message: "Doctor doesn't exist"});
            }
            else if(doctor){
                var validPassword = doctor.comparePassword(req.body.password);
                if(!validPassword){
                    res.send({message : "invalid password"});
                }else {

                    var token = createToken(doctor);
                    res.json({
                            success: true,
                            name: req.body.username,
                            message: "Successfully login",
                            token: token
                        });
                    }
                }
            });
        }
	});


//middleware
	api.use(function(req, res, next){

		console.log("hey there. new one!");
		var token = req.body.token || req.param('token') || req.headers['x-access-token'];

		//check if token exists
		if(token){
					jsonwebtoken.verify(token, secretKey, function(err, decoded){

					if(err){
						res.status(403).send({ success: false, message:"failes to authenticate user"});
						} else{
								req.decoded = decoded;
								next();
								}
						});
					} else{
						res.status(403).send({success: false, message:"No token provided"});
						}
		});


//destination b//

	// api.route('/')
	// 	.post(function(req, res){

	// 		var story = new Story({
	// 			creator: req.decoded.id,
	// 			content: req.body.content
	// 		});
		

	// 	story.save(function(err){
	// 		if(err){
	// 			res.send(err);
	// 			return;
	// 		}
	// 		res.json({message : "new story created"});
	// 		});
	// 	})

	// 	.get(function(req, res){

	// 		Story.find({ creator: req.decoded.id}, function(err, stories){
	// 			if(err){
	// 				res.send(err);
	// 				return;
	// 			}
	// 			res.json(stories);
	// 		});
	// 	});

	api.get('/me', function(req, res){
	 		res.json(req.decoded);
	 	});
		

	api.route('/addGym')
		.post(function(req, res){

			var gym = new Gym({
				creator: req.decoded.id,
				name: req.body.name,
				city: req.body.city,
				charges: req.body.charges,
				description: req.body.description
			});
		

		gym.save(function(err){
			if(err){
				res.send(err);
				return;
			}
			res.json({message : "new gym added"});
			});

		
		});

	api.route('/addYogaCentre')
		.post(function(req, res){

			var yoga = new Yoga({
				creator: req.decoded.id,
				name: req.body.name,
				city: req.body.city,
				charges: req.body.charges,
				description: req.body.description
			});
		

		yoga.save(function(err){
			if(err){
				res.send(err);
				return;
			}
			res.json({message : "new yoga centre added added"});
			});

		
		});

	api.route('/bookGym')
			.post(function(req, res){

				var booking = new GymBooking({
					user_id: req.decoded.id,
                    username: req.body.username,
					gym_id: req.body.gym_id,
					date: req.body.date,
					time: req.body.booktime
				});
			

			booking.save(function(err){
				if(err){
					res.send(err);
					return;
				}
				res.json({message : "Email-confirmation will be done shortly"});
				});

			
			});

api.post('/findBookings', function(req, res){
            var i,j;
            var gen=[];
            Gym.find({username:req.body.username},'_id',function(err, gym){
                if(err){
                    res.send(err);
                    return;
                }
                var v1=gym.map(function(v){return v._id});
                GymBooking.find({gym_id:{$in:v1}},function(err1,bk){
                    if(err1){
                        res.send(err1);
                        return;
                    }
                    var ids=bk.map(function(b){return b.user_id});
                    User.find({_id:{$in: ids}},'email username',function(er1,us){
                        if(er1){
                            res.send(er1);
                            return;
                        }
                        //here
                        console.log(us[0].email);
                        for(i=0;i<bk.length;i++)
                        {
                            for(j=0;j<us.length;j++)
                            {
                                if(bk[i].username==us[j].username)
                                {
                                    gen.push({username:bk[i].username,date:bk[i].date,time:bk[i].time,email:us[j].email});
                                }
                            }
                        }
                        res.json(gen);
                    });
                });
            });
    });

/*api.post('/findBookings', function(req, res){
            var i,j;
            var gen=[];
            Gym.find({username:req.body.username},'_id',function(err, data){
                if(err){
                    res.send(err);
                    return;
                }
                var x=data.toJSON();
                var ids=x.map(function(b){return x._id});
                //var x=JSON.stringify(data);
                console.log(x);
                 // console.log(JSON.stringify(data));
                 //  console.log(data._id);
                 //   console.log(data);
                GymBooking.find({gym_id:{$in: ids}},function(err1,bk){
                    if(err1){
                        res.send(err1);
                        return;
                    }
                    console.log(bk);
                                        var ids=bk.map(function(b){return b.user_id});
                    User.find({_id:{$in: ids}},'email username',function(er1,us){
                        if(er1){
                            res.send(er1);
                            return;
                        }
                        //here
                        for(i=0;i<bk.length;i++)
                        {
                            console.log(bk[i].username);
                            for(j=0;j<us.length;j++)
                            {
                                if(bk[i].username==us[j].username)
                                {
                                    gen.push({username:bk[i].username,date:bk[i].date,time:bk[i].time,email:us[i].email});
                                }
                            }
                        }
                        res.json(bk);
                    
                });
            });
    });
*/

api.post('/viewPro', function(req, res){

	BookTrail.find({
			gym_id: req.decoded.id
		}).select('user_id date time').exec(function(err, data){

			if(err) throw err;

			if(!data){
				res.send({ message: "No appointment"});
			}
			else if(data){
				
				

					var token = createToken(gym);
					res.json({
						success: true,
						message: "Successfully login",
						token: token
					});
				}
			
		});

	});

	return api;


}
