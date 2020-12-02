
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
            id:'_9',
            type:'image',
            tag:'img',
            rect:['27.3%','46.2%','10.2%','auto','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"9.png",'0px','0px']
         },
         {
            id:'_21',
            type:'image',
            tag:'img',
            rect:['38.5%','46.1%','10.2%','auto','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"21.png",'0px','0px']
         },
         {
            id:'_22',
            type:'image',
            tag:'img',
            rect:['50.1%','46.1%','10.2%','auto','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"22.png",'0px','0px']
         },
         {
            id:'_42',
            type:'image',
            tag:'img',
            rect:['15.8%','46.2%','10.2%','auto','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"42.png",'0px','0px']
         },
         {
            id:'_62',
            type:'image',
            tag:'img',
            rect:['61.4%','46%','10.2%','auto','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"62.png",'0px','0px']
         },
         {
            id:'_1722',
            type:'image',
            tag:'img',
            rect:['73.5%','45.9%','10.2%','auto','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"172.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__1722}": [
            ["style", "top", '45.91%'],
            ["style", "height", 'auto'],
            ["style", "opacity", '1'],
            ["style", "left", '73.54%'],
            ["style", "width", '10.2%']
         ],
         "${__22}": [
            ["style", "top", '46.14%'],
            ["style", "height", 'auto'],
            ["style", "opacity", '1'],
            ["style", "left", '50.11%'],
            ["style", "width", '10.2%']
         ],
         "${__9}": [
            ["style", "top", '46.15%'],
            ["style", "height", 'auto'],
            ["style", "opacity", '1'],
            ["style", "left", '27.33%'],
            ["style", "width", '10.2%']
         ],
         "${__21}": [
            ["style", "top", '46.14%'],
            ["style", "height", 'auto'],
            ["style", "opacity", '1'],
            ["style", "left", '38.51%'],
            ["style", "width", '10.2%']
         ],
         "${__42}": [
            ["style", "top", '46.15%'],
            ["style", "height", 'auto'],
            ["style", "opacity", '1'],
            ["style", "left", '15.84%'],
            ["style", "width", '10.2%']
         ],
         "${__62}": [
            ["style", "top", '46.03%'],
            ["style", "height", 'auto'],
            ["style", "opacity", '1'],
            ["style", "left", '61.44%'],
            ["style", "width", '10.2%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 36250,
         autoPlay: false,
         timeline: [
            { id: "eid285", tween: [ "style", "${__22}", "top", '65.36%', { fromValue: '46.14%'}], position: 10250, duration: 1000 },
            { id: "eid289", tween: [ "style", "${__22}", "top", '47.64%', { fromValue: '65.36%'}], position: 11500, duration: 1000 },
            { id: "eid297", tween: [ "style", "${__22}", "top", '68.06%', { fromValue: '47.64%'}], position: 14000, duration: 1000 },
            { id: "eid301", tween: [ "style", "${__22}", "top", '47.04%', { fromValue: '68.06%'}], position: 15250, duration: 1000 },
            { id: "eid309", tween: [ "style", "${__22}", "top", '64.15%', { fromValue: '47.04%'}], position: 17750, duration: 1000 },
            { id: "eid313", tween: [ "style", "${__22}", "top", '47.03%', { fromValue: '64.15%'}], position: 19000, duration: 1000 },
            { id: "eid238", tween: [ "style", "${__62}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 750 },
            { id: "eid317", tween: [ "style", "${__62}", "opacity", '1', { fromValue: '0'}], position: 20250, duration: 1000 },
            { id: "eid322", tween: [ "style", "${__62}", "opacity", '0', { fromValue: '1'}], position: 21500, duration: 500 },
            { id: "eid323", tween: [ "style", "${__62}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 500 },
            { id: "eid334", tween: [ "style", "${__62}", "opacity", '0', { fromValue: '1'}], position: 25250, duration: 500 },
            { id: "eid335", tween: [ "style", "${__62}", "opacity", '1', { fromValue: '0.000000'}], position: 25750, duration: 500 },
            { id: "eid346", tween: [ "style", "${__62}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 500 },
            { id: "eid347", tween: [ "style", "${__62}", "opacity", '1', { fromValue: '0.000000'}], position: 29500, duration: 500 },
            { id: "eid311", tween: [ "style", "${__42}", "top", '31.73%', { fromValue: '46.15%'}], position: 17750, duration: 1000 },
            { id: "eid315", tween: [ "style", "${__42}", "top", '47.64%', { fromValue: '31.73%'}], position: 19000, duration: 1000 },
            { id: "eid241", tween: [ "style", "${__21}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 750 },
            { id: "eid258", tween: [ "style", "${__21}", "opacity", '1', { fromValue: '0.000000'}], position: 5250, duration: 1000 },
            { id: "eid261", tween: [ "style", "${__21}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid262", tween: [ "style", "${__21}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 500 },
            { id: "eid264", tween: [ "style", "${__21}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
            { id: "eid265", tween: [ "style", "${__21}", "opacity", '1', { fromValue: '0.000000'}], position: 9500, duration: 500 },
            { id: "eid320", tween: [ "style", "${__21}", "opacity", '0', { fromValue: '1'}], position: 21500, duration: 500 },
            { id: "eid321", tween: [ "style", "${__21}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 500 },
            { id: "eid349", tween: [ "style", "${__21}", "opacity", '1', { fromValue: '0'}], position: 31500, duration: 1000 },
            { id: "eid351", tween: [ "style", "${__1722}", "left", '68.44%', { fromValue: '73.54%'}], position: 32750, duration: 1000 },
            { id: "eid357", tween: [ "style", "${__1722}", "left", '62.26%', { fromValue: '68.44%'}], position: 34000, duration: 1000 },
            { id: "eid325", tween: [ "style", "${__62}", "top", '67.35%', { fromValue: '46.03%'}], position: 22750, duration: 1000 },
            { id: "eid331", tween: [ "style", "${__62}", "top", '46.03%', { fromValue: '67.35%'}], position: 24000, duration: 1000 },
            { id: "eid337", tween: [ "style", "${__62}", "top", '67.35%', { fromValue: '46.03%'}], position: 26500, duration: 1000 },
            { id: "eid343", tween: [ "style", "${__62}", "top", '46.93%', { fromValue: '67.35%'}], position: 27750, duration: 1000 },
            { id: "eid298", tween: [ "style", "${__9}", "left", '32.86%', { fromValue: '27.33%'}], position: 14000, duration: 1000 },
            { id: "eid302", tween: [ "style", "${__9}", "left", '38.07%', { fromValue: '32.86%'}], position: 15250, duration: 1000 },
            { id: "eid339", tween: [ "style", "${__9}", "left", '43.6%', { fromValue: '38.07%'}], position: 26500, duration: 1000 },
            { id: "eid340", tween: [ "style", "${__9}", "left", '50%', { fromValue: '43.6%'}], position: 27750, duration: 1000 },
            { id: "eid286", tween: [ "style", "${__21}", "left", '44.37%', { fromValue: '38.51%'}], position: 10250, duration: 1000 },
            { id: "eid290", tween: [ "style", "${__21}", "left", '49.36%', { fromValue: '44.37%'}], position: 11500, duration: 1000 },
            { id: "eid327", tween: [ "style", "${__21}", "left", '55.11%', { fromValue: '49.36%'}], position: 22750, duration: 1000 },
            { id: "eid328", tween: [ "style", "${__21}", "left", '61.07%', { fromValue: '55.11%'}], position: 24000, duration: 1000 },
            { id: "eid354", tween: [ "style", "${__21}", "left", '68.12%', { fromValue: '61.07%'}], position: 32750, duration: 1000 },
            { id: "eid355", tween: [ "style", "${__21}", "left", '74.19%', { fromValue: '68.12%'}], position: 34000, duration: 1000 },
            { id: "eid324", tween: [ "style", "${__62}", "left", '55.37%', { fromValue: '61.44%'}], position: 22750, duration: 1000 },
            { id: "eid330", tween: [ "style", "${__62}", "left", '49.62%', { fromValue: '55.37%'}], position: 24000, duration: 1000 },
            { id: "eid336", tween: [ "style", "${__62}", "left", '43.76%', { fromValue: '49.62%'}], position: 26500, duration: 1000 },
            { id: "eid342", tween: [ "style", "${__62}", "left", '38.66%', { fromValue: '43.76%'}], position: 27750, duration: 1000 },
            { id: "eid242", tween: [ "style", "${__9}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 750 },
            { id: "eid248", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 1000 },
            { id: "eid253", tween: [ "style", "${__9}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 500 },
            { id: "eid255", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 500 },
            { id: "eid259", tween: [ "style", "${__9}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid260", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 500 },
            { id: "eid292", tween: [ "style", "${__9}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 500 },
            { id: "eid293", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0.000000'}], position: 13250, duration: 500 },
            { id: "eid332", tween: [ "style", "${__9}", "opacity", '0', { fromValue: '1'}], position: 25250, duration: 500 },
            { id: "eid333", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0.000000'}], position: 25750, duration: 500 },
            { id: "eid359", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0'}], position: 35250, duration: 1000 },
            { id: "eid310", tween: [ "style", "${__42}", "left", '22.67%', { fromValue: '15.84%'}], position: 17750, duration: 1000 },
            { id: "eid314", tween: [ "style", "${__42}", "left", '27.33%', { fromValue: '22.67%'}], position: 19000, duration: 1000 },
            { id: "eid299", tween: [ "style", "${__9}", "top", '35.04%', { fromValue: '46.15%'}], position: 14000, duration: 1000 },
            { id: "eid303", tween: [ "style", "${__9}", "top", '47.05%', { fromValue: '35.04%'}], position: 15250, duration: 1000 },
            { id: "eid338", tween: [ "style", "${__9}", "top", '36.54%', { fromValue: '47.05%'}], position: 26500, duration: 1000 },
            { id: "eid341", tween: [ "style", "${__9}", "top", '45.85%', { fromValue: '36.54%'}], position: 27750, duration: 1000 },
            { id: "eid240", tween: [ "style", "${__22}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 750 },
            { id: "eid263", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0.000000'}], position: 7750, duration: 1000 },
            { id: "eid266", tween: [ "style", "${__22}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
            { id: "eid267", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0.000000'}], position: 9500, duration: 500 },
            { id: "eid294", tween: [ "style", "${__22}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 500 },
            { id: "eid295", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0.000000'}], position: 13250, duration: 500 },
            { id: "eid304", tween: [ "style", "${__22}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500 },
            { id: "eid305", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0.000000'}], position: 17000, duration: 500 },
            { id: "eid287", tween: [ "style", "${__21}", "top", '34.42%', { fromValue: '46.14%'}], position: 10250, duration: 1000 },
            { id: "eid291", tween: [ "style", "${__21}", "top", '47.03%', { fromValue: '34.42%'}], position: 11500, duration: 1000 },
            { id: "eid326", tween: [ "style", "${__21}", "top", '33.51%', { fromValue: '47.03%'}], position: 22750, duration: 1000 },
            { id: "eid329", tween: [ "style", "${__21}", "top", '45.82%', { fromValue: '33.51%'}], position: 24000, duration: 1000 },
            { id: "eid353", tween: [ "style", "${__21}", "top", '33.2%', { fromValue: '45.82%'}], position: 32750, duration: 1000 },
            { id: "eid356", tween: [ "style", "${__21}", "top", '47.61%', { fromValue: '33.2%'}], position: 34000, duration: 1000 },
            { id: "eid237", tween: [ "style", "${__1722}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 750 },
            { id: "eid348", tween: [ "style", "${__1722}", "opacity", '1', { fromValue: '0'}], position: 30250, duration: 1000 },
            { id: "eid350", tween: [ "style", "${__1722}", "opacity", '1', { fromValue: '0'}], position: 31500, duration: 1000 },
            { id: "eid360", tween: [ "style", "${__1722}", "opacity", '1', { fromValue: '0'}], position: 35250, duration: 1000 },
            { id: "eid284", tween: [ "style", "${__22}", "left", '43.71%', { fromValue: '50.11%'}], position: 10250, duration: 1000 },
            { id: "eid288", tween: [ "style", "${__22}", "left", '38.07%', { fromValue: '43.71%'}], position: 11500, duration: 1000 },
            { id: "eid296", tween: [ "style", "${__22}", "left", '32.32%', { fromValue: '38.07%'}], position: 14000, duration: 1000 },
            { id: "eid300", tween: [ "style", "${__22}", "left", '27.22%', { fromValue: '32.32%'}], position: 15250, duration: 1000 },
            { id: "eid308", tween: [ "style", "${__22}", "left", '22.23%', { fromValue: '27.22%'}], position: 17750, duration: 1000 },
            { id: "eid312", tween: [ "style", "${__22}", "left", '16.91%', { fromValue: '22.23%'}], position: 19000, duration: 1000 },
            { id: "eid352", tween: [ "style", "${__1722}", "top", '63.92%', { fromValue: '45.91%'}], position: 32750, duration: 1000 },
            { id: "eid358", tween: [ "style", "${__1722}", "top", '47.4%', { fromValue: '63.92%'}], position: 34000, duration: 1000 },
            { id: "eid239", tween: [ "style", "${__42}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 750 },
            { id: "eid244", tween: [ "style", "${__42}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 1000 },
            { id: "eid252", tween: [ "style", "${__42}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 500 },
            { id: "eid254", tween: [ "style", "${__42}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 500 },
            { id: "eid306", tween: [ "style", "${__42}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500 },
            { id: "eid307", tween: [ "style", "${__42}", "opacity", '1', { fromValue: '0.000000'}], position: 17000, duration: 500 },
            { id: "eid344", tween: [ "style", "${__42}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 500 },
            { id: "eid345", tween: [ "style", "${__42}", "opacity", '1', { fromValue: '0.000000'}], position: 29500, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "insert");
