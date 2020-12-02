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
            id:'egg11',
            type:'image',
            rect:['933px','263px','210px','168px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"egg11.png",'0px','0px','100%','100%']
         },
         {
            id:'egg12',
            type:'image',
            rect:['777px','265px','210px','168px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"egg12.png",'0px','0px','100%','100%']
         },
         {
            id:'egg13',
            type:'image',
            rect:['622px','264px','210px','168px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"egg13.png",'0px','0px','100%','100%']
         },
         {
            id:'Finger2',
            type:'image',
            rect:['82px','353px','254px','254px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Finger.png",'0px','0px']
         },
         {
            id:'egg14',
            type:'image',
            rect:['466px','262px','210px','168px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"egg14.png",'0px','0px','100%','100%']
         },
         {
            id:'egg15',
            type:'image',
            rect:['312px','264px','210px','168px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"egg15.png",'0px','0px','100%','100%']
         },
         {
            id:'egg17',
            type:'image',
            rect:['161px','264px','210px','168px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"egg17.png",'0px','0px','100%','100%']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Finger2}": [
            ["style", "top", '353.4px'],
            ["style", "height", '253.99996948242px'],
            ["style", "opacity", '0'],
            ["style", "left", '82.1px'],
            ["style", "width", '253.99996948242px']
         ],
         "${_egg13}": [
            ["style", "top", '264.29px'],
            ["style", "height", '168px'],
            ["style", "opacity", '1'],
            ["style", "left", '621.93px'],
            ["style", "width", '210px']
         ],
         "${_egg15}": [
            ["style", "top", '264.29px'],
            ["style", "height", '168px'],
            ["style", "opacity", '1'],
            ["style", "left", '311.93px'],
            ["style", "width", '210px']
         ],
         "${_egg17}": [
            ["style", "top", '264.29px'],
            ["style", "height", '168px'],
            ["style", "opacity", '1'],
            ["style", "left", '160.93px'],
            ["style", "width", '210px']
         ],
         "${_egg11}": [
            ["style", "top", '263.29px'],
            ["style", "height", '168px'],
            ["style", "opacity", '1'],
            ["style", "left", '932.93px'],
            ["style", "width", '210px']
         ],
         "${_egg14}": [
            ["style", "top", '262.29px'],
            ["style", "height", '168px'],
            ["style", "opacity", '1'],
            ["style", "left", '465.93px'],
            ["style", "width", '210px']
         ],
         "${_egg12}": [
            ["style", "top", '265.29px'],
            ["style", "height", '168px'],
            ["style", "opacity", '1'],
            ["style", "left", '776.93px'],
            ["style", "width", '210px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 38750,
         autoPlay: false,
         labels: {
            "Label 1": 0
         },
         timeline: [
            { id: "eid67", tween: [ "style", "${_egg14}", "left", '623.9px', { fromValue: '465.93px'}], position: 25000, duration: 250 },
            { id: "eid70", tween: [ "style", "${_egg13}", "top", '272.27px', { fromValue: '264.29px'}], position: 25000, duration: 250 },
            { id: "eid22", tween: [ "style", "${_egg17}", "top", '268.27px', { fromValue: '264.29px'}], position: 8000, duration: 250 },
            { id: "eid44", tween: [ "style", "${_egg15}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 250 },
            { id: "eid49", tween: [ "style", "${_egg15}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 250 },
            { id: "eid93", tween: [ "style", "${_egg15}", "opacity", '0', { fromValue: '1'}], position: 35000, duration: 250 },
            { id: "eid94", tween: [ "style", "${_egg15}", "opacity", '1', { fromValue: '0'}], position: 35250, duration: 250 },
            { id: "eid96", tween: [ "style", "${_egg15}", "opacity", '0', { fromValue: '1'}], position: 35750, duration: 250 },
            { id: "eid97", tween: [ "style", "${_egg15}", "opacity", '1', { fromValue: '0'}], position: 36250, duration: 250 },
            { id: "eid68", tween: [ "style", "${_egg14}", "top", '266.27px', { fromValue: '262.29px'}], position: 25000, duration: 250 },
            { id: "eid20", tween: [ "style", "${_egg11}", "top", '267.27px', { fromValue: '263.29px'}], position: 8000, duration: 250 },
            { id: "eid47", tween: [ "style", "${_egg12}", "left", '312.9px', { fromValue: '776.93px'}], position: 17750, duration: 250 },
            { id: "eid69", tween: [ "style", "${_egg13}", "left", '465.9px', { fromValue: '621.93px'}], position: 25000, duration: 250 },
            { id: "eid4", tween: [ "style", "${_Finger2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
            { id: "eid25", tween: [ "style", "${_Finger2}", "opacity", '0.0234375', { fromValue: '1'}], position: 8250, duration: 250 },
            { id: "eid29", tween: [ "style", "${_Finger2}", "opacity", '1', { fromValue: '0.023437999188899994'}], position: 9750, duration: 250 },
            { id: "eid42", tween: [ "style", "${_Finger2}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 250 },
            { id: "eid53", tween: [ "style", "${_Finger2}", "opacity", '1', { fromValue: '0'}], position: 18500, duration: 250 },
            { id: "eid64", tween: [ "style", "${_Finger2}", "opacity", '0', { fromValue: '1'}], position: 24500, duration: 250 },
            { id: "eid75", tween: [ "style", "${_Finger2}", "opacity", '1', { fromValue: '0'}], position: 25750, duration: 250 },
            { id: "eid84", tween: [ "style", "${_Finger2}", "opacity", '0', { fromValue: '1'}], position: 30750, duration: 250 },
            { id: "eid89", tween: [ "style", "${_Finger2}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 250 },
            { id: "eid95", tween: [ "style", "${_Finger2}", "opacity", '0', { fromValue: '1'}], position: 35500, duration: 250 },
            { id: "eid100", tween: [ "style", "${_Finger2}", "opacity", '1', { fromValue: '0'}], position: 36750, duration: 250 },
            { id: "eid105", tween: [ "style", "${_Finger2}", "opacity", '0', { fromValue: '1'}], position: 37750, duration: 250 },
            { id: "eid18", tween: [ "style", "${_egg17}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
            { id: "eid24", tween: [ "style", "${_egg17}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 250 },
            { id: "eid101", tween: [ "style", "${_egg17}", "opacity", '0', { fromValue: '1'}], position: 37250, duration: 250 },
            { id: "eid102", tween: [ "style", "${_egg17}", "opacity", '1', { fromValue: '0'}], position: 37500, duration: 250 },
            { id: "eid103", tween: [ "style", "${_egg17}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 250 },
            { id: "eid104", tween: [ "style", "${_egg17}", "opacity", '1', { fromValue: '0'}], position: 38500, duration: 250 },
            { id: "eid66", tween: [ "style", "${_egg14}", "opacity", '0', { fromValue: '1'}], position: 24750, duration: 250 },
            { id: "eid71", tween: [ "style", "${_egg14}", "opacity", '1', { fromValue: '0'}], position: 25250, duration: 250 },
            { id: "eid82", tween: [ "style", "${_egg14}", "opacity", '0', { fromValue: '1'}], position: 30000, duration: 250 },
            { id: "eid83", tween: [ "style", "${_egg14}", "opacity", '1', { fromValue: '0'}], position: 30250, duration: 250 },
            { id: "eid85", tween: [ "style", "${_egg14}", "opacity", '0', { fromValue: '1'}], position: 31000, duration: 250 },
            { id: "eid86", tween: [ "style", "${_egg14}", "opacity", '1', { fromValue: '0'}], position: 31500, duration: 250 },
            { id: "eid21", tween: [ "style", "${_egg17}", "left", '930.9px', { fromValue: '160.93px'}], position: 8000, duration: 250 },
            { id: "eid19", tween: [ "style", "${_egg11}", "left", '156.9px', { fromValue: '932.93px'}], position: 8000, duration: 250 },
            { id: "eid15", tween: [ "style", "${_egg11}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 250 },
            { id: "eid16", tween: [ "style", "${_egg11}", "opacity", '1', { fromValue: '0.000000'}], position: 7250, duration: 250 },
            { id: "eid17", tween: [ "style", "${_egg11}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
            { id: "eid23", tween: [ "style", "${_egg11}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 250 },
            { id: "eid45", tween: [ "style", "${_egg15}", "left", '773.9px', { fromValue: '311.93px'}], position: 17750, duration: 250 },
            { id: "eid48", tween: [ "style", "${_egg12}", "top", '269.27px', { fromValue: '265.29px'}], position: 17750, duration: 250 },
            { id: "eid62", tween: [ "style", "${_egg13}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 250 },
            { id: "eid63", tween: [ "style", "${_egg13}", "opacity", '1', { fromValue: '0.000000'}], position: 24250, duration: 250 },
            { id: "eid65", tween: [ "style", "${_egg13}", "opacity", '0', { fromValue: '1'}], position: 24750, duration: 250 },
            { id: "eid72", tween: [ "style", "${_egg13}", "opacity", '1', { fromValue: '0'}], position: 25250, duration: 250 },
            { id: "eid5", tween: [ "style", "${_Finger2}", "left", '252.1px', { fromValue: '82.1px'}], position: 1500, duration: 500 },
            { id: "eid7", tween: [ "style", "${_Finger2}", "left", '406.1px', { fromValue: '252.1px'}], position: 2750, duration: 500 },
            { id: "eid11", tween: [ "style", "${_Finger2}", "left", '554.1px', { fromValue: '406.1px'}], position: 4000, duration: 500 },
            { id: "eid12", tween: [ "style", "${_Finger2}", "left", '714.1px', { fromValue: '554.1px'}], position: 5250, duration: 500 },
            { id: "eid14", tween: [ "style", "${_Finger2}", "left", '866.1px', { fromValue: '714.1px'}], position: 6500, duration: 500 },
            { id: "eid26", tween: [ "style", "${_Finger2}", "left", '252.1px', { fromValue: '866.1px'}], position: 9250, duration: 250 },
            { id: "eid30", tween: [ "style", "${_Finger2}", "left", '406.1px', { fromValue: '252.1px'}], position: 10750, duration: 500 },
            { id: "eid31", tween: [ "style", "${_Finger2}", "left", '562.1px', { fromValue: '406.1px'}], position: 12000, duration: 500 },
            { id: "eid33", tween: [ "style", "${_Finger2}", "left", '724.1px', { fromValue: '562.1px'}], position: 13250, duration: 500 },
            { id: "eid35", tween: [ "style", "${_Finger2}", "left", '866.1px', { fromValue: '724.1px'}], position: 14500, duration: 500 },
            { id: "eid39", tween: [ "style", "${_Finger2}", "left", '724.1px', { fromValue: '866.1px'}], position: 15750, duration: 500 },
            { id: "eid51", tween: [ "style", "${_Finger2}", "left", '412.1px', { fromValue: '724.1px'}], position: 18250, duration: 250 },
            { id: "eid54", tween: [ "style", "${_Finger2}", "left", '542.1px', { fromValue: '412.1px'}], position: 19500, duration: 500 },
            { id: "eid56", tween: [ "style", "${_Finger2}", "left", '698.1px', { fromValue: '542.1px'}], position: 20750, duration: 500 },
            { id: "eid58", tween: [ "style", "${_Finger2}", "left", '862.1px', { fromValue: '698.1px'}], position: 22000, duration: 500 },
            { id: "eid60", tween: [ "style", "${_Finger2}", "left", '546.1px', { fromValue: '862.1px'}], position: 23250, duration: 500 },
            { id: "eid73", tween: [ "style", "${_Finger2}", "left", '572.1px', { fromValue: '546.1px'}], position: 25500, duration: 250 },
            { id: "eid76", tween: [ "style", "${_Finger2}", "left", '720.1px', { fromValue: '572.1px'}], position: 26750, duration: 500 },
            { id: "eid78", tween: [ "style", "${_Finger2}", "left", '870.1px', { fromValue: '720.1px'}], position: 28000, duration: 500 },
            { id: "eid80", tween: [ "style", "${_Finger2}", "left", '560.1px', { fromValue: '870.1px'}], position: 29250, duration: 500 },
            { id: "eid87", tween: [ "style", "${_Finger2}", "left", '710.1px', { fromValue: '560.1px'}], position: 31750, duration: 250 },
            { id: "eid90", tween: [ "style", "${_Finger2}", "left", '862.1px', { fromValue: '710.1px'}], position: 33000, duration: 500 },
            { id: "eid92", tween: [ "style", "${_Finger2}", "left", '710.1px', { fromValue: '862.1px'}], position: 34250, duration: 500 },
            { id: "eid98", tween: [ "style", "${_Finger2}", "left", '858.1px', { fromValue: '710.1px'}], position: 36500, duration: 250 },
            { id: "eid40", tween: [ "style", "${_egg12}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 250 },
            { id: "eid41", tween: [ "style", "${_egg12}", "opacity", '1', { fromValue: '0.000000'}], position: 16750, duration: 250 },
            { id: "eid43", tween: [ "style", "${_egg12}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 250 },
            { id: "eid50", tween: [ "style", "${_egg12}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 250 },
            { id: "eid6", tween: [ "style", "${_Finger2}", "top", '363.4px', { fromValue: '353.4px'}], position: 1500, duration: 500 },
            { id: "eid8", tween: [ "style", "${_Finger2}", "top", '359.4px', { fromValue: '363.4px'}], position: 2750, duration: 500 },
            { id: "eid13", tween: [ "style", "${_Finger2}", "top", '363.4px', { fromValue: '359.4px'}], position: 5250, duration: 500 },
            { id: "eid27", tween: [ "style", "${_Finger2}", "top", '359.4px', { fromValue: '363.4px'}], position: 9250, duration: 250 },
            { id: "eid32", tween: [ "style", "${_Finger2}", "top", '371.4px', { fromValue: '359.4px'}], position: 12000, duration: 500 },
            { id: "eid34", tween: [ "style", "${_Finger2}", "top", '365.4px', { fromValue: '371.4px'}], position: 13250, duration: 500 },
            { id: "eid36", tween: [ "style", "${_Finger2}", "top", '369.4px', { fromValue: '365.4px'}], position: 14500, duration: 500 },
            { id: "eid37", tween: [ "style", "${_Finger2}", "top", '369.4px', { fromValue: '365.4px'}], position: 15750, duration: 500 },
            { id: "eid52", tween: [ "style", "${_Finger2}", "top", '355.4px', { fromValue: '369.4px'}], position: 18250, duration: 250 },
            { id: "eid55", tween: [ "style", "${_Finger2}", "top", '363.4px', { fromValue: '355.4px'}], position: 19500, duration: 500 },
            { id: "eid57", tween: [ "style", "${_Finger2}", "top", '367.4px', { fromValue: '363.4px'}], position: 20750, duration: 500 },
            { id: "eid59", tween: [ "style", "${_Finger2}", "top", '369.4px', { fromValue: '367.4px'}], position: 22000, duration: 500 },
            { id: "eid61", tween: [ "style", "${_Finger2}", "top", '367.4px', { fromValue: '369.4px'}], position: 23250, duration: 500 },
            { id: "eid74", tween: [ "style", "${_Finger2}", "top", '361.4px', { fromValue: '367.4px'}], position: 25500, duration: 250 },
            { id: "eid77", tween: [ "style", "${_Finger2}", "top", '365.4px', { fromValue: '361.4px'}], position: 26750, duration: 500 },
            { id: "eid79", tween: [ "style", "${_Finger2}", "top", '371.4px', { fromValue: '365.4px'}], position: 28000, duration: 500 },
            { id: "eid81", tween: [ "style", "${_Finger2}", "top", '369.4px', { fromValue: '371.4px'}], position: 29250, duration: 500 },
            { id: "eid88", tween: [ "style", "${_Finger2}", "top", '365.4px', { fromValue: '369.4px'}], position: 31750, duration: 250 },
            { id: "eid91", tween: [ "style", "${_Finger2}", "top", '367.4px', { fromValue: '365.4px'}], position: 33000, duration: 500 },
            { id: "eid99", tween: [ "style", "${_Finger2}", "top", '363.4px', { fromValue: '367.4px'}], position: 36500, duration: 250 },
            { id: "eid46", tween: [ "style", "${_egg15}", "top", '270.27px', { fromValue: '264.29px'}], position: 17750, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "select");
