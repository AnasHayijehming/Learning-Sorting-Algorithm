/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bubble2',
            type:'image',
            rect:['8.1%','38.3%','14.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"22.png",'0%','0%','143.38px','auto'],
            boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"]
         },
         {
            id:'bubble4',
            type:'image',
            rect:['22.4%','38.3%','14.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"42.png",'0%','0%','143.31px','auto']
         },
         {
            id:'bubble6',
            type:'image',
            rect:['36.6%','38.3%','14.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"62.png",'0%','0%','143.31px','auto']
         },
         {
            id:'bubble9',
            type:'image',
            rect:['50.9%','38.3%','14.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"92.png",'0%','0%','143.31px','auto']
         },
         {
            id:'bubble17',
            type:'image',
            rect:['64.6%','38.3%','14.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"172.png",'0%','0%','143.31px','auto']
         },
         {
            id:'bubble21',
            type:'image',
            rect:['78.9%','38.3%','14.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"212.png",'0%','0%','143.31px','auto']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_bubble9}": [
            ["style", "top", '38.23%'],
            ["style", "background-size", [143.31,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '21.7%'],
            ["style", "height", '32.87%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '14.34%']
         ],
         "${_bubble4}": [
            ["style", "top", '38.23%'],
            ["style", "background-size", [143.31,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '64.6%'],
            ["style", "overflow", 'auto'],
            ["style", "height", '32.87%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '14.34%']
         ],
         "${_bubble2}": [
            ["style", "top", '38.23%'],
            ["style", "background-size", [143.38,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '50.3%'],
            ["style", "height", '32.87%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '14.34%']
         ],
         "${_bubble6}": [
            ["style", "top", '38.23%'],
            ["style", "background-size", [143.31,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '36%'],
            ["style", "height", '32.87%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '14.34%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(230,114,114,0.00)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_bubble21}": [
            ["style", "top", '38.23%'],
            ["style", "background-size", [143.31,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '7.36%'],
            ["style", "height", '32.87%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '14.34%']
         ],
         "${_bubble17}": [
            ["style", "top", '38.23%'],
            ["style", "background-size", [143.31,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '78.9%'],
            ["style", "height", '32.87%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '14.34%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 34074,
         autoPlay: false,
         timeline: [
            { id: "eid724", tween: [ "style", "${_bubble4}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 176, duration: 29574 },
            { id: "eid722", tween: [ "style", "${_bubble6}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 176, duration: 29574 },
            { id: "eid721", tween: [ "style", "${_bubble9}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 176, duration: 29574 },
            { id: "eid165", tween: [ "style", "${_bubble17}", "left", '71.8%', { fromValue: '78.9%'}], position: 12500, duration: 1000 },
            { id: "eid167", tween: [ "style", "${_bubble17}", "left", '64.6%', { fromValue: '71.8%'}], position: 13750, duration: 1000 },
            { id: "eid157", tween: [ "style", "${_bubble4}", "left", '57.5%', { fromValue: '64.6%'}], position: 9500, duration: 1000 },
            { id: "eid161", tween: [ "style", "${_bubble4}", "left", '50.9%', { fromValue: '57.5%'}], position: 10750, duration: 1000 },
            { id: "eid189", tween: [ "style", "${_bubble4}", "left", '42.8%', { fromValue: '50.9%'}], position: 21500, duration: 1000 },
            { id: "eid193", tween: [ "style", "${_bubble4}", "left", '36.6%', { fromValue: '42.8%'}], position: 22750, duration: 1000 },
            { id: "eid205", tween: [ "style", "${_bubble4}", "left", '29.4%', { fromValue: '36.6%'}], position: 28500, duration: 1000 },
            { id: "eid209", tween: [ "style", "${_bubble4}", "left", '22.4%', { fromValue: '29.4%'}], position: 29750, duration: 1000 },
            { id: "eid576", tween: [ "style", "${_bubble2}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 209 },
            { id: "eid577", tween: [ "style", "${_bubble2}", "opacity", '1', { fromValue: '0'}], position: 5959, duration: 115 },
            { id: "eid600", tween: [ "style", "${_bubble2}", "opacity", '0', { fromValue: '1'}], position: 17750, duration: 209 },
            { id: "eid601", tween: [ "style", "${_bubble2}", "opacity", '1', { fromValue: '0'}], position: 17959, duration: 115 },
            { id: "eid612", tween: [ "style", "${_bubble2}", "opacity", '0', { fromValue: '1'}], position: 24500, duration: 209 },
            { id: "eid613", tween: [ "style", "${_bubble2}", "opacity", '1', { fromValue: '0'}], position: 24709, duration: 115 },
            { id: "eid624", tween: [ "style", "${_bubble2}", "opacity", '0', { fromValue: '1'}], position: 31750, duration: 209 },
            { id: "eid625", tween: [ "style", "${_bubble2}", "opacity", '1', { fromValue: '0'}], position: 31959, duration: 115 },
            { id: "eid632", tween: [ "style", "${_bubble2}", "opacity", '0', { fromValue: '1'}], position: 33750, duration: 209 },
            { id: "eid633", tween: [ "style", "${_bubble2}", "opacity", '1', { fromValue: '0'}], position: 33959, duration: 115 },
            { id: "eid158", tween: [ "style", "${_bubble4}", "top", '21.95%', { fromValue: '38.23%'}], position: 9500, duration: 1000 },
            { id: "eid162", tween: [ "style", "${_bubble4}", "top", '38.3%', { fromValue: '21.94%'}], position: 10750, duration: 1000 },
            { id: "eid190", tween: [ "style", "${_bubble4}", "top", '17.13%', { fromValue: '38.3%'}], position: 21500, duration: 1000 },
            { id: "eid194", tween: [ "style", "${_bubble4}", "top", '38.3%', { fromValue: '17.13%'}], position: 22750, duration: 1000 },
            { id: "eid206", tween: [ "style", "${_bubble4}", "top", '21.95%', { fromValue: '38.3%'}], position: 28500, duration: 1000 },
            { id: "eid210", tween: [ "style", "${_bubble4}", "top", '38.3%', { fromValue: '21.94%'}], position: 29750, duration: 1000 },
            { id: "eid141", tween: [ "style", "${_bubble6}", "top", '21.95%', { fromValue: '38.23%'}], position: 3500, duration: 1000 },
            { id: "eid146", tween: [ "style", "${_bubble6}", "top", '38.3%', { fromValue: '21.94%'}], position: 4750, duration: 1000 },
            { id: "eid174", tween: [ "style", "${_bubble6}", "top", '21.95%', { fromValue: '38.3%'}], position: 15500, duration: 1000 },
            { id: "eid178", tween: [ "style", "${_bubble6}", "top", '38.3%', { fromValue: '21.94%'}], position: 16750, duration: 1000 },
            { id: "eid196", tween: [ "style", "${_bubble6}", "top", '54.82%', { fromValue: '38.3%'}], position: 25250, duration: 1000 },
            { id: "eid200", tween: [ "style", "${_bubble6}", "top", '38.3%', { fromValue: '54.82%'}], position: 26500, duration: 1000 },
            { id: "eid204", tween: [ "style", "${_bubble6}", "top", '54.82%', { fromValue: '38.3%'}], position: 28500, duration: 1000 },
            { id: "eid208", tween: [ "style", "${_bubble6}", "top", '38.3%', { fromValue: '54.82%'}], position: 29750, duration: 1000 },
            { id: "eid563", tween: [ "style", "${_bubble21}", "opacity", '0', { fromValue: '1'}], position: 176, duration: 209 },
            { id: "eid562", tween: [ "style", "${_bubble21}", "opacity", '1', { fromValue: '0'}], position: 385, duration: 115 },
            { id: "eid573", tween: [ "style", "${_bubble21}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 209 },
            { id: "eid574", tween: [ "style", "${_bubble21}", "opacity", '1', { fromValue: '0'}], position: 2959, duration: 115 },
            { id: "eid569", tween: [ "style", "${_bubble21}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 209 },
            { id: "eid570", tween: [ "style", "${_bubble21}", "opacity", '1', { fromValue: '0'}], position: 5959, duration: 115 },
            { id: "eid578", tween: [ "style", "${_bubble21}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 209 },
            { id: "eid579", tween: [ "style", "${_bubble21}", "opacity", '1', { fromValue: '0'}], position: 8959, duration: 115 },
            { id: "eid586", tween: [ "style", "${_bubble21}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 209 },
            { id: "eid587", tween: [ "style", "${_bubble21}", "opacity", '1', { fromValue: '0'}], position: 11959, duration: 115 },
            { id: "eid571", tween: [ "style", "${_bubble6}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 307 },
            { id: "eid572", tween: [ "style", "${_bubble6}", "opacity", '1', { fromValue: '0'}], position: 3057, duration: 17 },
            { id: "eid596", tween: [ "style", "${_bubble6}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 209 },
            { id: "eid597", tween: [ "style", "${_bubble6}", "opacity", '1', { fromValue: '0'}], position: 14959, duration: 115 },
            { id: "eid614", tween: [ "style", "${_bubble6}", "opacity", '0', { fromValue: '1'}], position: 24500, duration: 209 },
            { id: "eid615", tween: [ "style", "${_bubble6}", "opacity", '1', { fromValue: '0'}], position: 24709, duration: 115 },
            { id: "eid618", tween: [ "style", "${_bubble6}", "opacity", '0', { fromValue: '1'}], position: 27500, duration: 209 },
            { id: "eid619", tween: [ "style", "${_bubble6}", "opacity", '1', { fromValue: '0'}], position: 27709, duration: 115 },
            { id: "eid620", tween: [ "style", "${_bubble6}", "opacity", '0', { fromValue: '1'}], position: 30750, duration: 209 },
            { id: "eid621", tween: [ "style", "${_bubble6}", "opacity", '1', { fromValue: '0'}], position: 30959, duration: 115 },
            { id: "eid630", tween: [ "style", "${_bubble6}", "opacity", '0', { fromValue: '1'}], position: 32750, duration: 209 },
            { id: "eid631", tween: [ "style", "${_bubble6}", "opacity", '1', { fromValue: '0'}], position: 32959, duration: 115 },
            { id: "eid126", tween: [ "style", "${_bubble9}", "left", '14.6%', { fromValue: '21.7%'}], position: 500, duration: 1000 },
            { id: "eid138", tween: [ "style", "${_bubble9}", "left", '7.37%', { fromValue: '14.6%'}], position: 1750, duration: 1000 },
            { id: "eid171", tween: [ "style", "${_bubble9}", "left", '15.1%', { fromValue: '7.37%'}], position: 15500, duration: 1000 },
            { id: "eid175", tween: [ "style", "${_bubble9}", "left", '22.27%', { fromValue: '15.1%'}], position: 16750, duration: 1000 },
            { id: "eid179", tween: [ "style", "${_bubble9}", "left", '29.47%', { fromValue: '22.27%'}], position: 18500, duration: 1000 },
            { id: "eid183", tween: [ "style", "${_bubble9}", "left", '36.6%', { fromValue: '29.47%'}], position: 19750, duration: 1000 },
            { id: "eid187", tween: [ "style", "${_bubble9}", "left", '42.8%', { fromValue: '36.6%'}], position: 21500, duration: 1000 },
            { id: "eid191", tween: [ "style", "${_bubble9}", "left", '50.9%', { fromValue: '42.8%'}], position: 22750, duration: 1000 },
            { id: "eid720", tween: [ "style", "${_bubble21}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 176, duration: 27074 },
            { id: "eid123", tween: [ "style", "${_bubble21}", "left", '14.57%', { fromValue: '7.36%'}], position: 500, duration: 1000 },
            { id: "eid135", tween: [ "style", "${_bubble21}", "left", '21.67%', { fromValue: '14.57%'}], position: 1750, duration: 1000 },
            { id: "eid139", tween: [ "style", "${_bubble21}", "left", '28.87%', { fromValue: '21.67%'}], position: 3500, duration: 1000 },
            { id: "eid143", tween: [ "style", "${_bubble21}", "left", '36.58%', { fromValue: '28.87%'}], position: 4750, duration: 1000 },
            { id: "eid147", tween: [ "style", "${_bubble21}", "left", '43.1%', { fromValue: '36.58%'}], position: 6500, duration: 1000 },
            { id: "eid151", tween: [ "style", "${_bubble21}", "left", '50.2%', { fromValue: '43.1%'}], position: 7750, duration: 1000 },
            { id: "eid155", tween: [ "style", "${_bubble21}", "left", '57.47%', { fromValue: '50.2%'}], position: 9500, duration: 1000 },
            { id: "eid159", tween: [ "style", "${_bubble21}", "left", '64.7%', { fromValue: '57.47%'}], position: 10750, duration: 1000 },
            { id: "eid163", tween: [ "style", "${_bubble21}", "left", '71.77%', { fromValue: '64.7%'}], position: 12500, duration: 1000 },
            { id: "eid169", tween: [ "style", "${_bubble21}", "left", '78.9%', { fromValue: '71.77%'}], position: 13750, duration: 1000 },
            { id: "eid166", tween: [ "style", "${_bubble17}", "top", '21.95%', { fromValue: '38.23%'}], position: 12500, duration: 1000 },
            { id: "eid168", tween: [ "style", "${_bubble17}", "top", '38.3%', { fromValue: '21.94%'}], position: 13750, duration: 1000 },
            { id: "eid218", tween: [ "style", "${_bubble17}", "top", '38.3%', { fromValue: '38.3%'}], position: 29000, duration: 0 },
            { id: "eid723", tween: [ "style", "${_bubble2}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 176, duration: 28824 },
            { id: "eid150", tween: [ "style", "${_bubble2}", "top", '21.95%', { fromValue: '38.23%'}], position: 6500, duration: 1000 },
            { id: "eid154", tween: [ "style", "${_bubble2}", "top", '38.3%', { fromValue: '21.94%'}], position: 7750, duration: 1000 },
            { id: "eid182", tween: [ "style", "${_bubble2}", "top", '21.95%', { fromValue: '38.3%'}], position: 18500, duration: 1000 },
            { id: "eid186", tween: [ "style", "${_bubble2}", "top", '38.3%', { fromValue: '21.94%'}], position: 19750, duration: 1000 },
            { id: "eid198", tween: [ "style", "${_bubble2}", "top", '21.95%', { fromValue: '38.3%'}], position: 25250, duration: 1000 },
            { id: "eid202", tween: [ "style", "${_bubble2}", "top", '38.3%', { fromValue: '21.94%'}], position: 26500, duration: 1000 },
            { id: "eid220", tween: [ "style", "${_bubble2}", "top", '38.3%', { fromValue: '38.3%'}], position: 29000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_bubble9}", "top", '21.72%', { fromValue: '38.23%'}], position: 500, duration: 1000 },
            { id: "eid137", tween: [ "style", "${_bubble9}", "top", '38.3%', { fromValue: '21.72%'}], position: 1750, duration: 1000 },
            { id: "eid172", tween: [ "style", "${_bubble9}", "top", '54.82%', { fromValue: '38.3%'}], position: 15500, duration: 1000 },
            { id: "eid176", tween: [ "style", "${_bubble9}", "top", '38.3%', { fromValue: '54.82%'}], position: 16750, duration: 1000 },
            { id: "eid180", tween: [ "style", "${_bubble9}", "top", '54.82%', { fromValue: '38.3%'}], position: 18500, duration: 1000 },
            { id: "eid184", tween: [ "style", "${_bubble9}", "top", '38.3%', { fromValue: '54.82%'}], position: 19750, duration: 1000 },
            { id: "eid188", tween: [ "style", "${_bubble9}", "top", '50%', { fromValue: '38.3%'}], position: 21500, duration: 1000 },
            { id: "eid192", tween: [ "style", "${_bubble9}", "top", '38.3%', { fromValue: '50%'}], position: 22750, duration: 1000 },
            { id: "eid219", tween: [ "style", "${_bubble9}", "top", '38.3%', { fromValue: '38.3%'}], position: 29750, duration: 0 },
            { id: "eid582", tween: [ "style", "${_bubble4}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 209 },
            { id: "eid583", tween: [ "style", "${_bubble4}", "opacity", '1', { fromValue: '0'}], position: 8959, duration: 115 },
            { id: "eid604", tween: [ "style", "${_bubble4}", "opacity", '0', { fromValue: '1'}], position: 20750, duration: 209 },
            { id: "eid605", tween: [ "style", "${_bubble4}", "opacity", '1', { fromValue: '0'}], position: 20959, duration: 115 },
            { id: "eid616", tween: [ "style", "${_bubble4}", "opacity", '0', { fromValue: '1'}], position: 27500, duration: 209 },
            { id: "eid617", tween: [ "style", "${_bubble4}", "opacity", '1', { fromValue: '0'}], position: 27709, duration: 115 },
            { id: "eid626", tween: [ "style", "${_bubble4}", "opacity", '0', { fromValue: '1'}], position: 31750, duration: 209 },
            { id: "eid627", tween: [ "style", "${_bubble4}", "opacity", '1', { fromValue: '0'}], position: 31959, duration: 115 },
            { id: "eid628", tween: [ "style", "${_bubble4}", "opacity", '0', { fromValue: '1'}], position: 32750, duration: 209 },
            { id: "eid629", tween: [ "style", "${_bubble4}", "opacity", '1', { fromValue: '0'}], position: 32959, duration: 115 },
            { id: "eid634", tween: [ "style", "${_bubble4}", "opacity", '0', { fromValue: '1'}], position: 33750, duration: 209 },
            { id: "eid635", tween: [ "style", "${_bubble4}", "opacity", '1', { fromValue: '0'}], position: 33959, duration: 115 },
            { id: "eid124", tween: [ "style", "${_bubble21}", "top", '54.59%', { fromValue: '38.23%'}], position: 500, duration: 1000 },
            { id: "eid136", tween: [ "style", "${_bubble21}", "top", '38.3%', { fromValue: '54.59%'}], position: 1750, duration: 1000 },
            { id: "eid140", tween: [ "style", "${_bubble21}", "top", '54.59%', { fromValue: '38.3%'}], position: 3500, duration: 1000 },
            { id: "eid144", tween: [ "style", "${_bubble21}", "top", '38.3%', { fromValue: '54.59%'}], position: 4750, duration: 1000 },
            { id: "eid148", tween: [ "style", "${_bubble21}", "top", '54.82%', { fromValue: '38.3%'}], position: 6500, duration: 1000 },
            { id: "eid152", tween: [ "style", "${_bubble21}", "top", '38.3%', { fromValue: '54.82%'}], position: 7750, duration: 1000 },
            { id: "eid156", tween: [ "style", "${_bubble21}", "top", '54.59%', { fromValue: '38.3%'}], position: 9500, duration: 1000 },
            { id: "eid160", tween: [ "style", "${_bubble21}", "top", '38.3%', { fromValue: '54.59%'}], position: 10750, duration: 1000 },
            { id: "eid164", tween: [ "style", "${_bubble21}", "top", '54.82%', { fromValue: '38.3%'}], position: 12500, duration: 1000 },
            { id: "eid170", tween: [ "style", "${_bubble21}", "top", '38.3%', { fromValue: '54.82%'}], position: 13750, duration: 1000 },
            { id: "eid217", tween: [ "style", "${_bubble21}", "top", '38.3%', { fromValue: '38.3%'}], position: 27250, duration: 0 },
            { id: "eid594", tween: [ "style", "${_bubble17}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 209 },
            { id: "eid595", tween: [ "style", "${_bubble17}", "opacity", '1', { fromValue: '0'}], position: 11959, duration: 115 },
            { id: "eid610", tween: [ "style", "${_bubble17}", "opacity", '0', { fromValue: '1'}], position: 23750, duration: 209 },
            { id: "eid611", tween: [ "style", "${_bubble17}", "opacity", '1', { fromValue: '0'}], position: 23959, duration: 115 },
            { id: "eid567", tween: [ "style", "${_bubble9}", "opacity", '0', { fromValue: '1'}], position: 176, duration: 209 },
            { id: "eid568", tween: [ "style", "${_bubble9}", "opacity", '1', { fromValue: '0'}], position: 385, duration: 115 },
            { id: "eid598", tween: [ "style", "${_bubble9}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 209 },
            { id: "eid599", tween: [ "style", "${_bubble9}", "opacity", '1', { fromValue: '0'}], position: 14959, duration: 115 },
            { id: "eid602", tween: [ "style", "${_bubble9}", "opacity", '0', { fromValue: '1'}], position: 17750, duration: 209 },
            { id: "eid603", tween: [ "style", "${_bubble9}", "opacity", '1', { fromValue: '0'}], position: 17959, duration: 115 },
            { id: "eid606", tween: [ "style", "${_bubble9}", "opacity", '0', { fromValue: '1'}], position: 20750, duration: 209 },
            { id: "eid607", tween: [ "style", "${_bubble9}", "opacity", '1', { fromValue: '0'}], position: 20959, duration: 115 },
            { id: "eid608", tween: [ "style", "${_bubble9}", "opacity", '0', { fromValue: '1'}], position: 23750, duration: 209 },
            { id: "eid609", tween: [ "style", "${_bubble9}", "opacity", '1', { fromValue: '0'}], position: 23959, duration: 115 },
            { id: "eid622", tween: [ "style", "${_bubble9}", "opacity", '0', { fromValue: '1'}], position: 30750, duration: 209 },
            { id: "eid623", tween: [ "style", "${_bubble9}", "opacity", '1', { fromValue: '0'}], position: 30959, duration: 115 },
            { id: "eid725", tween: [ "style", "${_bubble17}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 176, duration: 28824 },
            { id: "eid142", tween: [ "style", "${_bubble6}", "left", '28.9%', { fromValue: '36%'}], position: 3500, duration: 1000 },
            { id: "eid145", tween: [ "style", "${_bubble6}", "left", '22.27%', { fromValue: '28.9%'}], position: 4750, duration: 1000 },
            { id: "eid173", tween: [ "style", "${_bubble6}", "left", '15.1%', { fromValue: '22.27%'}], position: 15500, duration: 1000 },
            { id: "eid177", tween: [ "style", "${_bubble6}", "left", '7.97%', { fromValue: '15.1%'}], position: 16750, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_bubble6}", "left", '15.17%', { fromValue: '7.97%'}], position: 25250, duration: 1000 },
            { id: "eid199", tween: [ "style", "${_bubble6}", "left", '22.4%', { fromValue: '15.17%'}], position: 26500, duration: 1000 },
            { id: "eid203", tween: [ "style", "${_bubble6}", "left", '29.4%', { fromValue: '22.4%'}], position: 28500, duration: 1000 },
            { id: "eid207", tween: [ "style", "${_bubble6}", "left", '36.57%', { fromValue: '29.4%'}], position: 29750, duration: 1000 },
            { id: "eid149", tween: [ "style", "${_bubble2}", "left", '43.1%', { fromValue: '50.3%'}], position: 6500, duration: 1000 },
            { id: "eid153", tween: [ "style", "${_bubble2}", "left", '36.6%', { fromValue: '43.1%'}], position: 7750, duration: 1000 },
            { id: "eid181", tween: [ "style", "${_bubble2}", "left", '29.5%', { fromValue: '36.6%'}], position: 18500, duration: 1000 },
            { id: "eid185", tween: [ "style", "${_bubble2}", "left", '22.3%', { fromValue: '29.5%'}], position: 19750, duration: 1000 },
            { id: "eid197", tween: [ "style", "${_bubble2}", "left", '15.2%', { fromValue: '22.3%'}], position: 25250, duration: 1000 },
            { id: "eid201", tween: [ "style", "${_bubble2}", "left", '8.07%', { fromValue: '15.2%'}], position: 26500, duration: 1000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "bubble");
