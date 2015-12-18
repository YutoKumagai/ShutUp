#pragma strict

public static var resultscore : int;
public var ScoreText : Text;

function Start () {
    resultscore = Out.score;
    ScoreText.text = "スコア：" + resultscore .ToString();
}

function Update () {

}