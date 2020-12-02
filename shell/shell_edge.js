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
            id:'box4',
            type:'image',
            rect:['198px','237px','189px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"box4.png",'0px','0px']
         },
         {
            id:'box5',
            type:'image',
            rect:['461px','237px','189px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"box5.png",'0px','0px']
         },
         {
            id:'box6',
            type:'image',
            rect:['713px','237px','189px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"box6.png",'0px','0px']
         },
         {
            id:'box7',
            type:'image',
            rect:['582px','237px','189px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"box7.png",'0px','0px']
         },
         {
            id:'box8',
            type:'image',
            rect:['850px','237px','189px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"box8.png",'0px','0px']
         },
         {
            id:'box9',
            type:'image',
            rect:['330px','237px','189px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"box9.png",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['436','154','auto','auto','auto','auto'],
            text:"แบ่งข้อมูลออกเป็นกลุ่ม 2 กลุ่ม",
            align:"left",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['478','184','auto','auto','auto','auto'],
            text:"จับคู่เปรียบเทียบระหว่างกลุ่ม",
            align:"left",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text6',
            type:'text',
            rect:['458','198','auto','auto','auto','auto'],
            text:"แบ่งกลุ่มย่อยจนกระทั้งเหลือเพียง 1",
            align:"left",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['460','192','auto','auto','auto','auto'],
            text:"แบ่งข้อมูลในกลุ่มย่อยด้วยการหาร 2",
            align:"left",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "opacity", '0']
         ],
         "${_box4}": [
            ["style", "height", '151.56666564941px'],
            ["style", "top", '237.37px'],
            ["style", "left", '198px'],
            ["style", "width", '189.49423331972px']
         ],
         "${_box9}": [
            ["style", "height", '151.56666564941px'],
            ["style", "top", '237.37px'],
            ["style", "left", '330px'],
            ["style", "width", '189.49423331972px']
         ],
         "${_Text6}": [
            ["style", "opacity", '0']
         ],
         "${_box6}": [
            ["style", "height", '151.56666564941px'],
            ["style", "top", '237.37px'],
            ["style", "left", '713px'],
            ["style", "width", '189.49423331972px']
         ],
         "${_box7}": [
            ["style", "height", '151.56666564941px'],
            ["style", "top", '237.37px'],
            ["style", "left", '582px'],
            ["style", "width", '189.49423331972px']
         ],
         "${_Text2}": [
            ["style", "font-size", '30px'],
            ["style", "opacity", '0']
         ],
         "${_box8}": [
            ["style", "height", '151.56666564941px'],
            ["style", "top", '237.37px'],
            ["style", "left", '850px'],
            ["style", "width", '189.49423331972px']
         ],
         "${_box5}": [
            ["style", "height", '151.56666564941px'],
            ["style", "top", '237.37px'],
            ["style", "left", '461px'],
            ["style", "width", '189.49423331972px']
         ],
         "${_Text4}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 36500,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid9", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid13", tween: [ "style", "${_box7}", "top", '358.37px', { fromValue: '237.37px'}], position: 5500, duration: 500 },
            { id: "eid15", tween: [ "style", "${_box7}", "top", '242.37px', { fromValue: '358.37px'}], position: 6500, duration: 500 },
            { id: "eid49", tween: [ "style", "${_box7}", "top", '364px', { fromValue: '242.37px'}], position: 24000, duration: 500 },
            { id: "eid50", tween: [ "style", "${_box7}", "top", '238px', { fromValue: '364px'}], position: 25000, duration: 500 },
            { id: "eid52", tween: [ "style", "${_box7}", "top", '364px', { fromValue: '238px'}], position: 26000, duration: 500 },
            { id: "eid55", tween: [ "style", "${_box7}", "top", '238px', { fromValue: '364px'}], position: 27000, duration: 500 },
            { id: "eid3", tween: [ "style", "${_box7}", "left", '667px', { fromValue: '582px'}], position: 2000, duration: 1000 },
            { id: "eid80", tween: [ "style", "${_box7}", "left", '620px', { fromValue: '667px'}], position: 35500, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_box4}", "left", '155.87px', { fromValue: '198px'}], position: 2000, duration: 1000 },
            { id: "eid32", tween: [ "style", "${_box4}", "left", '63.8px', { fromValue: '155.87px'}], position: 15250, duration: 500 },
            { id: "eid83", tween: [ "style", "${_box4}", "left", '260px', { fromValue: '63.8px'}], position: 35500, duration: 1000 },
            { id: "eid23", tween: [ "style", "${_box5}", "top", '361.37px', { fromValue: '237.37px'}], position: 10500, duration: 500 },
            { id: "eid25", tween: [ "style", "${_box5}", "top", '238.37px', { fromValue: '361.37px'}], position: 11500, duration: 500 },
            { id: "eid43", tween: [ "style", "${_box5}", "top", '364px', { fromValue: '238.37px'}], position: 21000, duration: 500 },
            { id: "eid47", tween: [ "style", "${_box5}", "top", '238px', { fromValue: '364px'}], position: 23000, duration: 500 },
            { id: "eid6", tween: [ "style", "${_box5}", "left", '419px', { fromValue: '461px'}], position: 2000, duration: 1000 },
            { id: "eid44", tween: [ "style", "${_box5}", "left", '228px', { fromValue: '419px'}], position: 22000, duration: 500 },
            { id: "eid82", tween: [ "style", "${_box5}", "left", '380px', { fromValue: '228px'}], position: 35500, duration: 1000 },
            { id: "eid4", tween: [ "style", "${_box9}", "left", '288px', { fromValue: '330px'}], position: 2000, duration: 1000 },
            { id: "eid19", tween: [ "style", "${_box9}", "left", '805px', { fromValue: '288px'}], position: 8500, duration: 500 },
            { id: "eid31", tween: [ "style", "${_box9}", "left", '841px', { fromValue: '805px'}], position: 15250, duration: 500 },
            { id: "eid59", tween: [ "style", "${_box9}", "left", '1016px', { fromValue: '841px'}], position: 29000, duration: 500 },
            { id: "eid85", tween: [ "style", "${_box9}", "left", '860px', { fromValue: '1016px'}], position: 35500, duration: 1000 },
            { id: "eid64", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 32500, duration: 750 },
            { id: "eid86", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 34500, duration: 500 },
            { id: "eid1", tween: [ "style", "${_box6}", "left", '798px', { fromValue: '713px'}], position: 2000, duration: 1000 },
            { id: "eid18", tween: [ "style", "${_box6}", "left", '292.87px', { fromValue: '798px'}], position: 8500, duration: 500 },
            { id: "eid22", tween: [ "style", "${_box6}", "left", '285.87px', { fromValue: '292.87px'}], position: 9500, duration: 500 },
            { id: "eid33", tween: [ "style", "${_box6}", "left", '227.87px', { fromValue: '285.87px'}], position: 15250, duration: 500 },
            { id: "eid45", tween: [ "style", "${_box6}", "left", '419px', { fromValue: '227.87px'}], position: 22000, duration: 500 },
            { id: "eid81", tween: [ "style", "${_box6}", "left", '500px', { fromValue: '419px'}], position: 35500, duration: 1000 },
            { id: "eid11", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid27", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
            { id: "eid35", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0.000000'}], position: 17750, duration: 500 },
            { id: "eid62", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 31000, duration: 500 },
            { id: "eid29", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 750 },
            { id: "eid34", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 16250, duration: 500 },
            { id: "eid16", tween: [ "style", "${_box9}", "top", '359.37px', { fromValue: '237.37px'}], position: 7500, duration: 500 },
            { id: "eid20", tween: [ "style", "${_box9}", "top", '243.37px', { fromValue: '359.37px'}], position: 9500, duration: 500 },
            { id: "eid53", tween: [ "style", "${_box9}", "top", '364px', { fromValue: '243.37px'}], position: 26000, duration: 500 },
            { id: "eid54", tween: [ "style", "${_box9}", "top", '238px', { fromValue: '364px'}], position: 27000, duration: 500 },
            { id: "eid56", tween: [ "style", "${_box9}", "top", '364px', { fromValue: '238px'}], position: 28000, duration: 500 },
            { id: "eid60", tween: [ "style", "${_box9}", "top", '238px', { fromValue: '364px'}], position: 30000, duration: 500 },
            { id: "eid12", tween: [ "style", "${_box4}", "top", '360.37px', { fromValue: '237.37px'}], position: 5500, duration: 500 },
            { id: "eid14", tween: [ "style", "${_box4}", "top", '237.37px', { fromValue: '360.37px'}], position: 6500, duration: 500 },
            { id: "eid36", tween: [ "style", "${_box4}", "top", '365px', { fromValue: '237.37px'}], position: 19000, duration: 500 },
            { id: "eid40", tween: [ "style", "${_box4}", "top", '238px', { fromValue: '365px'}], position: 20000, duration: 500 },
            { id: "eid2", tween: [ "style", "${_box8}", "left", '935px', { fromValue: '850px'}], position: 2000, duration: 1000 },
            { id: "eid30", tween: [ "style", "${_box8}", "left", '1016px', { fromValue: '935px'}], position: 15250, duration: 500 },
            { id: "eid58", tween: [ "style", "${_box8}", "left", '841px', { fromValue: '1016px'}], position: 29000, duration: 500 },
            { id: "eid84", tween: [ "style", "${_box8}", "left", '740px', { fromValue: '841px'}], position: 35500, duration: 1000 },
            { id: "eid24", tween: [ "style", "${_box8}", "top", '357.37px', { fromValue: '237.37px'}], position: 10500, duration: 500 },
            { id: "eid26", tween: [ "style", "${_box8}", "top", '239.37px', { fromValue: '357.37px'}], position: 11500, duration: 500 },
            { id: "eid57", tween: [ "style", "${_box8}", "top", '364px', { fromValue: '239.37px'}], position: 28000, duration: 500 },
            { id: "eid61", tween: [ "style", "${_box8}", "top", '238px', { fromValue: '364px'}], position: 30000, duration: 500 },
            { id: "eid17", tween: [ "style", "${_box6}", "top", '359.37px', { fromValue: '237.37px'}], position: 7500, duration: 500 },
            { id: "eid21", tween: [ "style", "${_box6}", "top", '238.37px', { fromValue: '359.37px'}], position: 9500, duration: 500 },
            { id: "eid39", tween: [ "style", "${_box6}", "top", '365.37px', { fromValue: '238.37px'}], position: 19000, duration: 500 },
            { id: "eid41", tween: [ "style", "${_box6}", "top", '238px', { fromValue: '365.37px'}], position: 20000, duration: 500 },
            { id: "eid42", tween: [ "style", "${_box6}", "top", '364px', { fromValue: '238px'}], position: 21000, duration: 500 },
            { id: "eid46", tween: [ "style", "${_box6}", "top", '238px', { fromValue: '364px'}], position: 23000, duration: 500 },
            { id: "eid48", tween: [ "style", "${_box6}", "top", '364px', { fromValue: '238px'}], position: 24000, duration: 500 },
            { id: "eid51", tween: [ "style", "${_box6}", "top", '238px', { fromValue: '364px'}], position: 25000, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-151570856");
