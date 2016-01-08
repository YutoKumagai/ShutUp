import System;
import System.IO;
import System.Text;

public static var resultscore : int;
public static var resulttime : int;
public static var FinalScore : int;
public var FinalText : Text;
var score: String[];
public var SceneName;

function Start () {
    resultscore = Out.score;
    resulttime = Timer.time;
    SceneName = SavaSceneName.scene;
    FinalScore =  resulttime + resultscore;
    FinalText.text = "最終スコア：" + FinalScore.ToString();
    var output = "";

    //write
    var sw:StreamWriter;
    var sr:StreamReader;

    for(var n =0; n<5; n++) score[n] = "0";
    //sr = new StreamReader(Application.dataPath + "/score.txt");
    if(SceneName=="Main") sr = new StreamReader("stage1.txt");
    else if(SceneName=="Main1") sr = new StreamReader("stage2.txt");
    var txt = sr.ReadToEnd();
    sr.Close();
    score= txt.Split(","[0]);
    for(var i=0; i<5; i++){
        if(FinalScore > parseInt(score[i]) ){
            for(var j=4; j>=i;j--){
                score[j+1]=score[j];
            }
            score[i]=FinalScore.ToString();
            break;
        }    
    }
  //  sw = new StreamWriter(Application.dataPath + "/score.txt", false);
    if(SceneName=="Main")  sw = new StreamWriter("stage1.txt", false);
    else if(SceneName=="Main1") sw = new StreamWriter("stage2.txt", false);
    for(var k=0;k<5;k++) output = output+score[k]+",";
    sw.WriteLine(output);
    sw.Close();
}