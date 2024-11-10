gdjs.ChipsCode = {};
gdjs.ChipsCode.localVariables = [];
gdjs.ChipsCode.GDClickObjectObjects1= [];
gdjs.ChipsCode.GDClickObjectObjects2= [];
gdjs.ChipsCode.GDClickObjectObjects3= [];
gdjs.ChipsCode.GDbalObjects1= [];
gdjs.ChipsCode.GDbalObjects2= [];
gdjs.ChipsCode.GDbalObjects3= [];
gdjs.ChipsCode.GDNewTextObjects1= [];
gdjs.ChipsCode.GDNewTextObjects2= [];
gdjs.ChipsCode.GDNewTextObjects3= [];
gdjs.ChipsCode.GDYellowButtonObjects1= [];
gdjs.ChipsCode.GDYellowButtonObjects2= [];
gdjs.ChipsCode.GDYellowButtonObjects3= [];
gdjs.ChipsCode.GDNewText2Objects1= [];
gdjs.ChipsCode.GDNewText2Objects2= [];
gdjs.ChipsCode.GDNewText2Objects3= [];
gdjs.ChipsCode.GDNewSpriteObjects1= [];
gdjs.ChipsCode.GDNewSpriteObjects2= [];
gdjs.ChipsCode.GDNewSpriteObjects3= [];
gdjs.ChipsCode.GDYellowButton2Objects1= [];
gdjs.ChipsCode.GDYellowButton2Objects2= [];
gdjs.ChipsCode.GDYellowButton2Objects3= [];
gdjs.ChipsCode.GDBGObjects1= [];
gdjs.ChipsCode.GDBGObjects2= [];
gdjs.ChipsCode.GDBGObjects3= [];
gdjs.ChipsCode.GDBombObjects1= [];
gdjs.ChipsCode.GDBombObjects2= [];
gdjs.ChipsCode.GDBombObjects3= [];


gdjs.ChipsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.ChipsCode.GDYellowButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChipsCode.GDYellowButtonObjects2.length;i<l;++i) {
    if ( gdjs.ChipsCode.GDYellowButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChipsCode.GDYellowButtonObjects2[k] = gdjs.ChipsCode.GDYellowButtonObjects2[i];
        ++k;
    }
}
gdjs.ChipsCode.GDYellowButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "MON", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.ChipsCode.GDNewText2Objects2);
gdjs.copyArray(runtimeScene.getObjects("YellowButton2"), gdjs.ChipsCode.GDYellowButton2Objects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.ChipsCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDNewText2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.ChipsCode.GDYellowButton2Objects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDYellowButton2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bal"), gdjs.ChipsCode.GDbalObjects2);
{for(var i = 0, len = gdjs.ChipsCode.GDbalObjects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDbalObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ChipsCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChipsCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.ChipsCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChipsCode.GDNewSpriteObjects2[k] = gdjs.ChipsCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.ChipsCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickObject"), gdjs.ChipsCode.GDClickObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChipsCode.GDClickObjectObjects1.length;i<l;++i) {
    if ( gdjs.ChipsCode.GDClickObjectObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChipsCode.GDClickObjectObjects1[k] = gdjs.ChipsCode.GDClickObjectObjects1[i];
        ++k;
    }
}
gdjs.ChipsCode.GDClickObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ChipsCode.GDClickObjectObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.ChipsCode.GDClickObjectObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDClickObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.ChipsCode.GDBombObjects2});
gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDClickObjectObjects1Objects = Hashtable.newFrom({"ClickObject": gdjs.ChipsCode.GDClickObjectObjects1});
gdjs.ChipsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.ChipsCode.GDBombObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChipsCode.GDBombObjects2.length;i<l;++i) {
    if ( gdjs.ChipsCode.GDBombObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChipsCode.GDBombObjects2[k] = gdjs.ChipsCode.GDBombObjects2[i];
        ++k;
    }
}
gdjs.ChipsCode.GDBombObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ChipsCode.GDBombObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(10);
}{for(var i = 0, len = gdjs.ChipsCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDBombObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnb");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnb") >= 2.5;
if (isConditionTrue_0) {
gdjs.ChipsCode.GDBombObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDBombObjects2Objects, gdjs.randomInRange(10, 200), -(190), "");
}{for(var i = 0, len = gdjs.ChipsCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.ChipsCode.GDBombObjects2[i].addForce(0, 225, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnb");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn") >= 1;
if (isConditionTrue_0) {
gdjs.ChipsCode.GDClickObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChipsCode.mapOfGDgdjs_9546ChipsCode_9546GDClickObjectObjects1Objects, gdjs.randomInRange(10, 200), -(190), "");
}{for(var i = 0, len = gdjs.ChipsCode.GDClickObjectObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDClickObjectObjects1[i].addForce(0, 200, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}}

}


};gdjs.ChipsCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.ChipsCode.eventsList0(runtimeScene);
}


{


gdjs.ChipsCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.ChipsCode.GDBombObjects1);
gdjs.copyArray(runtimeScene.getObjects("ClickObject"), gdjs.ChipsCode.GDClickObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("bal"), gdjs.ChipsCode.GDbalObjects1);
{for(var i = 0, len = gdjs.ChipsCode.GDbalObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDbalObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.ChipsCode.GDClickObjectObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDClickObjectObjects1[i].getBehavior("Resizable").setSize(200, 200);
}
}{for(var i = 0, len = gdjs.ChipsCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.ChipsCode.GDBombObjects1[i].getBehavior("Resizable").setSize(200, 200);
}
}}

}


};

gdjs.ChipsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChipsCode.GDClickObjectObjects1.length = 0;
gdjs.ChipsCode.GDClickObjectObjects2.length = 0;
gdjs.ChipsCode.GDClickObjectObjects3.length = 0;
gdjs.ChipsCode.GDbalObjects1.length = 0;
gdjs.ChipsCode.GDbalObjects2.length = 0;
gdjs.ChipsCode.GDbalObjects3.length = 0;
gdjs.ChipsCode.GDNewTextObjects1.length = 0;
gdjs.ChipsCode.GDNewTextObjects2.length = 0;
gdjs.ChipsCode.GDNewTextObjects3.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects1.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects2.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects3.length = 0;
gdjs.ChipsCode.GDNewText2Objects1.length = 0;
gdjs.ChipsCode.GDNewText2Objects2.length = 0;
gdjs.ChipsCode.GDNewText2Objects3.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects1.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects2.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects3.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects1.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects2.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects3.length = 0;
gdjs.ChipsCode.GDBGObjects1.length = 0;
gdjs.ChipsCode.GDBGObjects2.length = 0;
gdjs.ChipsCode.GDBGObjects3.length = 0;
gdjs.ChipsCode.GDBombObjects1.length = 0;
gdjs.ChipsCode.GDBombObjects2.length = 0;
gdjs.ChipsCode.GDBombObjects3.length = 0;

gdjs.ChipsCode.eventsList2(runtimeScene);
gdjs.ChipsCode.GDClickObjectObjects1.length = 0;
gdjs.ChipsCode.GDClickObjectObjects2.length = 0;
gdjs.ChipsCode.GDClickObjectObjects3.length = 0;
gdjs.ChipsCode.GDbalObjects1.length = 0;
gdjs.ChipsCode.GDbalObjects2.length = 0;
gdjs.ChipsCode.GDbalObjects3.length = 0;
gdjs.ChipsCode.GDNewTextObjects1.length = 0;
gdjs.ChipsCode.GDNewTextObjects2.length = 0;
gdjs.ChipsCode.GDNewTextObjects3.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects1.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects2.length = 0;
gdjs.ChipsCode.GDYellowButtonObjects3.length = 0;
gdjs.ChipsCode.GDNewText2Objects1.length = 0;
gdjs.ChipsCode.GDNewText2Objects2.length = 0;
gdjs.ChipsCode.GDNewText2Objects3.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects1.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects2.length = 0;
gdjs.ChipsCode.GDNewSpriteObjects3.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects1.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects2.length = 0;
gdjs.ChipsCode.GDYellowButton2Objects3.length = 0;
gdjs.ChipsCode.GDBGObjects1.length = 0;
gdjs.ChipsCode.GDBGObjects2.length = 0;
gdjs.ChipsCode.GDBGObjects3.length = 0;
gdjs.ChipsCode.GDBombObjects1.length = 0;
gdjs.ChipsCode.GDBombObjects2.length = 0;
gdjs.ChipsCode.GDBombObjects3.length = 0;


return;

}

gdjs['ChipsCode'] = gdjs.ChipsCode;
